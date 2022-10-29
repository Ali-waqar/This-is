var gaconnector = {
    MAX_COOKIE_SIZE: 1024,
    domainError: null,
    track: function(e, t) {
        if (t) this.domainError = t;
        else
            for (valueName in e) {
                if ("lc_" === valueName.substring(0, 3))
                    if (fc_valueName = valueName.replace("lc_", "fc_"), "" === this.getValue(fc_valueName)) e[fc_valueName] = e[valueName], this.setValue(fc_valueName, e[valueName]);
                    else if ("(direct)" == e.lc_source) continue;
                this.setValue(valueName, e[valueName])
            }
        var o = this.getValue("all_traffic_sources");
        for ("" != o && (o += ", "), o += e.lc_source + "/" + e.lc_medium; o.length > this.MAX_COOKIE_SIZE;) o = o.replace(/^[^,]*,{1,} /, "");
        this.setValue("all_traffic_sources", o), e.all_traffic_sources = o, e.GA_Client_ID = this.getValue("GA_Client_ID"), this.values = e, this.callback(this.getValues()), this.valuesReceived = !0
    },
    getTopDomain: function(e) {
        if ("localhost" === window.location.hostname) return "localhost";
        var t = e.split("/")[2],
            o = /[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{2,}|[-\w]+\.[-\w]{2})$/i.exec(t);
        return "object" == typeof o && o instanceof Array && 0 < o.length ? o[0] : void 0
    },
    getSetting: function(e) {
        var t = "object" == typeof gaconnectorSettings ? gaconnectorSettings : {};
        return t.hasOwnProperty(e) ? t[e] : null
    },
    getValue: function(e, t) {
        if (t || (e = "gaconnector_" + e), this.useLocalStorage) return localStorage.getItem(e) || "";
        e += "=";
        for (var o = document.cookie.split(";"), n = 0; n < o.length; n++) {
            for (var a = o[n];
                " " == a.charAt(0);) a = a.substring(1);
            if (0 == a.indexOf(e)) return a.substring(e.length, a.length)
        }
        return ""
    },
    setValue: function(e, t, o) {
        if (e = "gaconnector_" + e, this.useLocalStorage) localStorage.setItem(e, t);
        else {
            o = o || 157248e5;
            var n = new Date;
            n.setTime(n.getTime() + o);
            var a = "expires=" + n.toGMTString();
            t = (t = (t = t.replace(/\|{2,}/g, "|").replace(/^\|/, "")).replace(";", "")).substr(0, 255), document.cookie = e + "=" + t + "; " + a + ";domain=" + this.cookieDomain + ";path=/"
        }
    },
    timeCounter: Date.now(),
    trackTimeOnWebsite: function() {
        setInterval(this.updateTimeCookie, 1e3)
    },
    updateTimeCookie: function() {
        var e = Date.now() - gaconnector.timeCounter;
        gaconnector.timeCounter = Date.now();
        var t = "time_passed",
            o = gaconnector.getValue(t);
        "" == o && (o = "0");
        var n = e + parseInt(o);
        gaconnector.setValue(t, n.toString())
    },
    addPageVisit: function() {
        for (var e = "pages_visited_list", t = this.getValue(e), o = t.split("|"), n = window.location.pathname, a = !1, i = 0; i < o.length; i++) o[i] == n && (a = !0);
        for (a || o.push(n), t = o.join("|"); t.length > this.MAX_COOKIE_SIZE;) t = t.replace(/^[^|]+\|/, "");
        this.setValue(e, t)
    },
    incrementVisits: function() {
        var e, t = "page_visits",
            o = this.getValue(t);
        e = "" == o ? 1 : parseInt(o) + 1, this.setValue(t, e.toString())
    },
    getCID: function() {
        var e = gaconnector.getValue("_ga", !0),
            t = window[window.GoogleAnalyticsObject];
        if (void 0 !== t && void 0 !== t.getAll) return t.getAll()[0].get("clientId");
        if ("string" == typeof e && 0 < e.length) {
            var o = e.split(".");
            return o.slice(o.length - 2, o.length).join(".")
        }
    },
    cloneCID: function(e) {
        var t = gaconnector.getCID();
        void 0 === t ? setTimeout(function() {
            gaconnector.cloneCID(e)
        }, 500) : (gaconnector.setValue("GA_Client_ID", t), e())
    },
    callback: function(e) {},
    valuesReceived: !1,
    setCallback: function(e) {
        this.valuesReceived || this.internal ? e(this.getValues()) : this.callback = e
    },
    isInternalReferrer: function(e, t) {
        return "" !== t && void 0 !== t && this.getTopDomain(t) === this.getTopDomain(e)
    },
    internal: !1,
    addRemoteScript: function() {
        if (this.isInternalReferrer(window.location.href, document.referrer)) {
            internal = !0;
            var e = this.getValues();
            this.callback(e)
        } else {
            internal = !1;
            var t = document.createElement("script");
            t.setAttribute("data-cfasync", "false");
            var o = document.location.search;
            o += (o ? "&" : "?") + "page_url=" + encodeURIComponent(window.location.href);
            var n = "https://tracker.gaconnector.com/gaconnector-server.js" + (o += "&referer=" + encodeURIComponent(document.referrer));
            t.src = n, document.getElementsByTagName("head")[0].appendChild(t)
        }
    },
    getValuesFromLocalStorage: function() {
        for (var e = Object.keys(localStorage), t = [], o = 0; o < e.length; o++) "gaconnector_" === e[o].substr(0, 12) && t.push(e[o]);
        var n = {};
        for (o = 0; o < t.length; o++) n[t[o].replace("gaconnector_", "")] = localStorage.getItem(t[o]);
        return n
    },
    getValuesFromCookies: function() {
        for (var e = {}, t = document.cookie.split("; "), o = 0; o < t.length; o++) {
            var n = t[o].split("=")[0],
                a = t[o].split("=").slice(1).join("=");
            if (12 < n.length)
                if ("gaconnector_" == n.substring(0, 12)) e[n.replace("gaconnector_", "")] = a
        }
        return e
    },
    deleteCookie: function(e) {
        document.cookie = "gaconnector_" + e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    },
    deleteLocalStorageItem: function(e) {
        localStorage.removeItem("gaconnector_" + e)
    },
    getValues: function() {
        return this.domainError ? {
            lc_source: this.domainError,
            lc_medium: "Contact gaconnector.com/support",
            lc_landing: window.location.href
        } : this.useLocalStorage ? this.getValuesFromLocalStorage() : this.getValuesFromCookies()
    },
    getCookieValues: function() {
        return this.getValues()
    },
    setupStorage: function() {
        this.useLocalStorage = !!window.localStorage && !!window.localStorage.setItem && "localStorage" === this.getSetting("storageEngine");
        var e = this.getValuesFromCookies(),
            t = this.getValuesFromLocalStorage();
        if (this.useLocalStorage)
            for (var o in e) e[o] && !t[o] && this.setValue(o, e[o]), this.deleteCookie(o);
        else
            for (var o in t) t[o] && !e[o] && this.setValue(o, t[o]), this.deleteLocalStorageItem(o)
    },
    start: function() {
        this.setupStorage(), this.internal = this.isInternalReferrer(window.location.href, document.referrer), this.cookieDomain = this.getTopDomain(window.location.href), this.cloneCID(function() {}), this.trackTimeOnWebsite(), this.addPageVisit(), this.incrementVisits(), this.addRemoteScript()
    }
};
gaconnector.start();