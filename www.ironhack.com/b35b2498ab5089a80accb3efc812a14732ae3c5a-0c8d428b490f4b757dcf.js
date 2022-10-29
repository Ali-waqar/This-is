(self.webpackChunkblog = self.webpackChunkblog || []).push([
    [9876], {
        72685: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return P
                }
            });
            var n = r(15861),
                a = r(88846),
                o = r.n(a),
                u = r(98980),
                s = r.n(u),
                i = r(46898),
                c = r.n(i),
                l = r(76262),
                m = r.n(l),
                p = r(87757),
                f = r.n(p),
                d = r(67294),
                b = r(23905),
                v = r(69931),
                y = r.n(v),
                h = r(72143),
                g = r.n(h),
                x = r(96901),
                S = r(25444),
                w = r(6530),
                q = r(88294),
                k = r(31764),
                N = r(54922),
                E = r(54938),
                j = r(42501),
                A = r(19950);

            function C() {
                (0, A.t)({
                    event: "gaEvent",
                    eventCategory: "form",
                    eventAction: "click button",
                    eventLabel: "syllabus request",
                    formName: "syllabus request"
                })
            }

            function O(e) {
                (0, A.t)({
                    event: "gaEvent",
                    eventCategory: "form",
                    eventAction: "syllabus request",
                    eventLabel: "form sent::ok",
                    formName: "syllabus request",
                    formFields: "terms and conditions" + (e ? "::newsletter" : "")
                })
            }

            function I(e) {
                void 0 === e && (e = ["Server Error"]), (0, A.t)({
                    event: "gaEvent",
                    eventCategory: "form",
                    eventAction: "syllabus request",
                    eventLabel: "form sent::ko",
                    formName: "syllabus request",
                    formErrorFields: e.join("::")
                })
            }
            var M = JSON.parse('{"name":{"validations":{"mandatory":true}},"email":{"validations":{"mandatory":true,"email":true},"type":"email"},"campus":{"type":"select","validations":{"mandatory":true}},"phoneNumber":{"validations":{"mandatory":true,"minLength":6,"phoneNumber":true},"type":"phone"}}'),
                F = r(74126),
                T = r(94453),
                Z = r(37341),
                L = r(9680),
                U = r(28824),
                Q = r(74073),
                P = (0, b.Z)()((function(e) {
                    var t = e.t,
                        r = e.campusCode,
                        a = e.courseCode,
                        u = e.isCoursePage,
                        i = u ? M : m()("campus", M),
                        l = (0, U.Z)().userLocation,
                        p = r || l.campusVisited || l.defaultCampus || "ams",
                        b = Object.assign({}, (0, N.Ti)(i), u ? {
                            campus: p
                        } : {}),
                        v = (0, d.useState)(b),
                        h = v[0],
                        A = v[1],
                        P = (0, d.useState)(),
                        V = P[0],
                        B = P[1],
                        D = (0, d.useState)(!1),
                        G = D[0],
                        W = D[1],
                        H = (0, d.useState)(!1),
                        J = H[0],
                        R = H[1],
                        z = (0, d.useState)(""),
                        X = z[0],
                        _ = z[1],
                        $ = (0, d.useState)(!1),
                        K = $[0],
                        Y = $[1],
                        ee = (0, d.useState)(!1),
                        te = ee[0],
                        re = ee[1],
                        ne = (0, L.lO)().pageName,
                        ae = (0, d.useContext)(w.Z),
                        oe = y()("request-syllabus", {
                            requestCorrect: K
                        }, {
                            whiteSubmitButton: u
                        }),
                        ue = {
                            fields: {
                                name: t("request-syllabus:requestSyllabus.fields.name"),
                                email: t("request-syllabus:requestSyllabus.fields.email"),
                                button: t("request-syllabus:requestSyllabus.fields.button"),
                                campus: t("request-syllabus:requestSyllabus.coursePage.fields.campus"),
                                phoneNumber: t("application-form:applicationForm:fields.phoneNumber")
                            },
                            placeholders: {
                                name: t("request-syllabus:requestSyllabus.placeholders.name"),
                                email: t("request-syllabus:requestSyllabus.placeholders.email"),
                                campus: t("request-syllabus:requestSyllabus.placeholders.campus")
                            }
                        },
                        se = {
                            campus: {
                                ams: t("breadcrumbs:breadcrumbs.campusAms"),
                                bcn: t("breadcrumbs:breadcrumbs.campusBcn"),
                                ber: t("breadcrumbs:breadcrumbs.campusBer"),
                                bod: t("breadcrumbs:breadcrumbs.campusBod"),
                                dus: t("breadcrumbs:breadcrumbs.campusDus"),
                                lis: t("breadcrumbs:breadcrumbs.campusLis"),
                                lon: t("breadcrumbs:breadcrumbs.campusLon"),
                                mad: t("breadcrumbs:breadcrumbs.campusMad"),
                                mex: t("breadcrumbs:breadcrumbs.campusMex"),
                                mia: t("breadcrumbs:breadcrumbs.campusMia"),
                                par: t("breadcrumbs:breadcrumbs.campusPar"),
                                sao: t("breadcrumbs:breadcrumbs.campusSao"),
                                tpa: t("breadcrumbs:breadcrumbs.campusTpa"),
                                rmt: t("breadcrumbs:breadcrumbs.campusRmt")
                            }
                        };

                    function ie(e, t) {
                        var r;
                        A(Object.assign({}, h, ((r = {})[e] = t, r)))
                    }
                    var ce = (0, N._Z)(h, i);

                    function le() {
                        return (le = (0, n.Z)(f().mark((function e(n) {
                            var o, u, s, i, c, m;
                            return f().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n.preventDefault(), _(""), re(!0), C(), o = "" !== ae.format ? ae.format : "ft", 0 !== ce.length) {
                                            e.next = 26;
                                            break
                                        }
                                        return u = (0, E.x_)(document.cookie || ""), s = {
                                            campus: r || h.campus,
                                            course: "" + a + o,
                                            email: h.email,
                                            emailOptIn: J,
                                            gaConnector: u,
                                            ipCountry: l.countryName,
                                            name: h.name,
                                            phoneNumber: h.phoneNumber,
                                            phoneCountry: null == V ? void 0 : V.toUpperCase()
                                        }, i = (0, Z.qr)(s), e.next = 11, (0, F.i)(2e3);
                                    case 11:
                                        return c = e.sent, m = (0, q.Su)(h.name, h.email, (0, k.He)(r || h.campus), a, o, ne, i, c), e.prev = 13, e.next = 16, fetch("https://ih-api.herokuapp.com/graphql", m).then((function(e) {
                                            if (e.errors) throw e.errors;
                                            Y(!0), O(J), (0, j.UpdateBrowsingHistorySubmits)("syllabus")
                                        }));
                                    case 16:
                                        e.next = 24;
                                        break;
                                    case 18:
                                        e.prev = 18, e.t0 = e.catch(13), I(), g().notify(e.t0, (function(e) {
                                            e.addMetadata("Query", m)
                                        })), _(t("application-form:applicationForm.error")), re(!1);
                                    case 24:
                                        e.next = 30;
                                        break;
                                    case 26:
                                        I(ce), W(!0), re(!1), _(t("request-syllabus:requestSyllabus.requiredFields"));
                                    case 30:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [13, 18]
                            ])
                        })))).apply(this, arguments)
                    }
                    return d.createElement(N.lt, {
                        className: oe
                    }, d.createElement(d.Fragment, null, c()(s(), o()((function(e) {
                        var t = Object.assign({
                            key: e,
                            id: e,
                            label: ue.fields[e],
                            setValue: ie,
                            value: h[e],
                            shouldValidate: G
                        }, i[e]);
                        return {
                            select: d.createElement(N.j6, Object.assign({
                                options: (0, N.qu)(se[e], ue.placeholders[e])
                            }, t)),
                            phone: d.createElement(N.Z6, Object.assign({
                                id: e,
                                isValid: (0, Q.kj)(h[e], X && ce.includes(e)),
                                key: e,
                                label: ue.fields[e],
                                noMarginBottom: !1,
                                onChange: function(e, t) {
                                    B(t.name)
                                },
                                setValue: ie,
                                shouldValidate: !0,
                                value: h[e]
                            }, i[e]))
                        }[i[e].type] || d.createElement(N.oH, Object.assign({
                            placeholder: ue.placeholders[e]
                        }, t))
                    })))(i), d.createElement(N.o2, {
                        className: "no-margin",
                        handleOnChange: R,
                        id: "newsletter"
                    }, t("request-syllabus:requestSyllabus.newsletter")), d.createElement(N.Rg, {
                        isSending: te,
                        onClick: function(e) {
                            return le.apply(this, arguments)
                        },
                        text: ue.fields.button
                    }), d.createElement(x.xv, {
                        mt: 2,
                        textAlign: "center",
                        textStyle: "body5",
                        w: "100%"
                    }, t("application-form:applicationForm.footer.legalAdvice.byApplyingStart"), " ", d.createElement(x.rU, {
                        as: S.rU,
                        to: (0, T.Gm)("privacyPolicy")
                    }, t("application-form:applicationForm.footer.legalAdvice.privacyPolicyLinkText")), " ", t("application-form:applicationForm.footer.legalAdvice.byApplyingConjuntion"), " ", d.createElement(x.rU, {
                        as: S.rU,
                        to: (0, T.Gm)("termsOfUse")
                    }, t("application-form:applicationForm:footer.legalAdvice.termsOfUseLinkText"))), d.createElement(N.jj, {
                        showError: X.length > 0
                    }, X), d.createElement("div", {
                        className: "okay-message"
                    }, t("request-syllabus:requestSyllabus:okayMessage"))))
                }))
        },
        6530: function(e, t, r) {
            "use strict";
            var n = r(67294);
            t.Z = n.createContext({
                format: "",
                toggleFormat: function(e) {}
            })
        },
        36099: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = r(74613),
                a = r.n(n),
                o = r(67294),
                u = {
                    behavior: "smooth",
                    offset: 0
                };

            function s(e, t) {
                void 0 === e && (e = u), void 0 === t && (t = "-48%");
                var r = a()(u, e),
                    n = (0, o.useRef)(null),
                    s = (0, o.useState)(!1),
                    i = s[0],
                    c = s[1];
                return (0, o.useEffect)((function() {
                    var e = new IntersectionObserver((function(e) {
                        var t = e[0];
                        c(t.isIntersecting)
                    }), {
                        rootMargin: t
                    });
                    if (n.current) return e.observe(n.current),
                        function() {
                            return e.unobserve(n.current)
                        }
                }), [t]), [function() {
                    var e, t;
                    return null === (e = window) || void 0 === e ? void 0 : e.scrollTo({
                        behavior: r.behavior,
                        top: Number(null == n || null === (t = n.current) || void 0 === t ? void 0 : t.offsetTop) - Number(r.offset)
                    })
                }, n, i]
            }
        },
        74126: function(e, t, r) {
            "use strict";
            r.d(t, {
                L: function() {
                    return T
                },
                i: function() {
                    return M
                }
            });
            var n = r(15861),
                a = r(24530),
                o = r.n(a),
                u = r(46963),
                s = r.n(u),
                i = r(20074),
                c = r.n(i),
                l = r(67425),
                m = r.n(l),
                p = r(49655),
                f = r.n(p),
                d = r(88846),
                b = r.n(d),
                v = r(37453),
                y = r.n(v),
                h = r(46898),
                g = r.n(h),
                x = r(87757),
                S = r.n(x),
                w = r(67294),
                q = r(9680);

            function k(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (r) return (r = r.call(e)).next.bind(r);
                if (Array.isArray(e) || (r = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return N(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return N(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    r && (e = r);
                    var n = 0;
                    return function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var E = "UA-42568150-1",
                j = {
                    staging: {
                        apply: {
                            form: {
                                experimentId: "GlEzOvgQSludxhqjDDfXaQ"
                            }
                        },
                        home: {
                            template: {
                                experimentId: "QSkTjWNWStqraI0s62NpoQ"
                            }
                        }
                    },
                    production: {
                        apply: {
                            form: {
                                experimentId: "GlEzOvgQSludxhqjDDfXaQ"
                            }
                        },
                        home: {
                            template: {
                                experimentId: "QSkTjWNWStqraI0s62NpoQ"
                            }
                        }
                    }
                };

            function A() {
                return "function" == typeof window.ga
            }

            function C() {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = (0, n.Z)(S().mark((function e() {
                    return S().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e) {
                                    A() && e();
                                    var t = setInterval((function() {
                                        A() && (clearInterval(t), e())
                                    }), 1e3)
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function I() {
                return (I = (0, n.Z)(S().mark((function e(t) {
                    var r;
                    return S().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = g()(y(), b()(f()(".")), f()("!"))(t), e.next = 3, C();
                            case 3:
                                window.ga((function() {
                                    var e = window.ga.getAll()[0];
                                    e.set("exp", r), e.send("pageview")
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function M(e) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = (0, n.Z)(S().mark((function e(t) {
                    return S().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e) {
                                    var r;
                                    t && (r = window.setTimeout((function() {
                                        return e("")
                                    }), t));
                                    var n = function(t) {
                                        r && clearTimeout(r), e(t)
                                    };
                                    C().then((function() {
                                        window.ga((function() {
                                            for (var e, t = k(window.ga.getAll()); !(e = t()).done;) {
                                                var r = e.value;
                                                if (r.get("trackingId") === E) {
                                                    var a = r.get("clientId");
                                                    if (a) return n(a)
                                                }
                                            }
                                            return n("")
                                        }))
                                    })).catch((function() {
                                        return n("")
                                    }))
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function T(e, t) {
                var r, n;
                void 0 === t && (t = !0);
                var a = "production",
                    u = (0, q.lO)(),
                    i = u.pageName,
                    l = u.locale,
                    p = u.gtmPageType,
                    f = (null === (r = j[a][i]) || void 0 === r ? void 0 : r[e]) || (null === (n = j[a][p]) || void 0 === n ? void 0 : n[e]) || {},
                    d = f.experimentId,
                    b = f.languages,
                    v = f.defaultVariant,
                    y = void 0 === v ? "0" : v,
                    h = t && (!b || m()(l, b)),
                    g = (0, w.useState)((function() {
                        return h ? "" : y
                    })),
                    x = g[0],
                    S = g[1];
                return (0, w.useEffect)((function() {
                    if (h && d) {
                        var e = JSON.parse(localStorage.getItem("experiments") || "{}"),
                            t = e[d];
                        t || (t = c()(s()(0, 1)), e[d] = t, localStorage.setItem("experiments", JSON.stringify(e))),
                            function(e) {
                                return I.apply(this, arguments)
                            }(e).catch(o()), S(t)
                    }
                }), [d, b, l, y, h]), x
            }
        },
        69877: function(e) {
            var t = Math.floor,
                r = Math.random;
            e.exports = function(e, n) {
                return e + t(r() * (n - e + 1))
            }
        },
        57406: function(e, t, r) {
            var n = r(71811),
                a = r(10928),
                o = r(40292),
                u = r(40327);
            e.exports = function(e, t) {
                return t = n(t, e), null == (e = o(e, t)) || delete e[u(a(t))]
            }
        },
        47415: function(e, t, r) {
            var n = r(29932);
            e.exports = function(e, t) {
                return n(t, (function(t) {
                    return e[t]
                }))
            }
        },
        60696: function(e, t, r) {
            var n = r(68630);
            e.exports = function(e) {
                return n(e) ? void 0 : e
            }
        },
        40292: function(e, t, r) {
            var n = r(97786),
                a = r(14259);
            e.exports = function(e, t) {
                return t.length < 2 ? e : n(e, a(t, 0, -1))
            }
        },
        67425: function(e, t, r) {
            e.exports = r(10910)
        },
        10910: function(e, t, r) {
            var n = r(92822)("includes", r(64721));
            n.placeholder = r(69306), e.exports = n
        },
        49655: function(e, t, r) {
            var n = r(92822)("join", r(98611));
            n.placeholder = r(69306), e.exports = n
        },
        98980: function(e, t, r) {
            var n = r(92822)("keys", r(3674), r(69087));
            n.placeholder = r(69306), e.exports = n
        },
        24530: function(e, t, r) {
            var n = r(92822)("noop", r(50308), r(69087));
            n.placeholder = r(69306), e.exports = n
        },
        76262: function(e, t, r) {
            var n = r(92822)("omit", r(57557));
            n.placeholder = r(69306), e.exports = n
        },
        46963: function(e, t, r) {
            var n = r(92822)("random", r(83608));
            n.placeholder = r(69306), e.exports = n
        },
        20074: function(e, t, r) {
            var n = r(92822)("toString", r(79833), r(69087));
            n.placeholder = r(69306), e.exports = n
        },
        64721: function(e, t, r) {
            var n = r(42118),
                a = r(98612),
                o = r(47037),
                u = r(40554),
                s = r(52628),
                i = Math.max;
            e.exports = function(e, t, r, c) {
                e = a(e) ? e : s(e), r = r && !c ? u(r) : 0;
                var l = e.length;
                return r < 0 && (r = i(l + r, 0)), o(e) ? r <= l && e.indexOf(t, r) > -1 : !!l && n(e, t, r) > -1
            }
        },
        47037: function(e, t, r) {
            var n = r(44239),
                a = r(1469),
                o = r(37005);
            e.exports = function(e) {
                return "string" == typeof e || !a(e) && o(e) && "[object String]" == n(e)
            }
        },
        98611: function(e) {
            var t = Array.prototype.join;
            e.exports = function(e, r) {
                return null == e ? "" : t.call(e, r)
            }
        },
        10928: function(e) {
            e.exports = function(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : void 0
            }
        },
        57557: function(e, t, r) {
            var n = r(29932),
                a = r(85990),
                o = r(57406),
                u = r(71811),
                s = r(98363),
                i = r(60696),
                c = r(99021),
                l = r(46904),
                m = c((function(e, t) {
                    var r = {};
                    if (null == e) return r;
                    var c = !1;
                    t = n(t, (function(t) {
                        return t = u(t, e), c || (c = t.length > 1), t
                    })), s(e, l(e), r), c && (r = a(r, 7, i));
                    for (var m = t.length; m--;) o(r, t[m]);
                    return r
                }));
            e.exports = m
        },
        83608: function(e, t, r) {
            var n = r(69877),
                a = r(16612),
                o = r(18601),
                u = parseFloat,
                s = Math.min,
                i = Math.random;
            e.exports = function(e, t, r) {
                if (r && "boolean" != typeof r && a(e, t, r) && (t = r = void 0), void 0 === r && ("boolean" == typeof t ? (r = t, t = void 0) : "boolean" == typeof e && (r = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
                    var c = e;
                    e = t, t = c
                }
                if (r || e % 1 || t % 1) {
                    var l = i();
                    return s(e + l * (t - e + u("1e-" + ((l + "").length - 1))), t)
                }
                return n(e, t)
            }
        },
        52628: function(e, t, r) {
            var n = r(47415),
                a = r(3674);
            e.exports = function(e) {
                return null == e ? [] : n(e, a(e))
            }
        }
    }
]);
//# sourceMappingURL=b35b2498ab5089a80accb3efc812a14732ae3c5a-0c8d428b490f4b757dcf.js.map