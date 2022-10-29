(self.webpackChunkblog = self.webpackChunkblog || []).push([
    [8260], {
        60538: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.confetti = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = Object.assign({}, a, o(t)),
                    c = i.elementCount,
                    u = i.colors,
                    s = i.width,
                    m = i.height,
                    p = i.perspective,
                    d = i.angle,
                    f = i.spread,
                    h = i.startVelocity,
                    g = i.decay,
                    b = i.dragFriction,
                    v = i.duration,
                    y = i.stagger,
                    x = i.random;
                e.style.perspective = p;
                var E = n(e, c, u, s, m),
                    w = E.map((function(e) {
                        return {
                            element: e,
                            physics: r(d, f, h, x)
                        }
                    }));
                return l(e, w, b, g, v, y)
            };

            function n(e, t, n, r, l) {
                return Array.from({
                    length: t
                }).map((function(t, a) {
                    var o = document.createElement("div"),
                        i = n[a % n.length];
                    return o.style["background-color"] = i, o.style.width = r, o.style.height = l, o.style.position = "absolute", o.style.willChange = "transform, opacity", o.style.visibility = "hidden", e.appendChild(o), o
                }))
            }

            function r(e, t, n, r) {
                var l = e * (Math.PI / 180),
                    a = t * (Math.PI / 180);
                return {
                    x: 0,
                    y: 0,
                    z: 0,
                    wobble: 10 * r(),
                    wobbleSpeed: .1 + .1 * r(),
                    velocity: .5 * n + r() * n,
                    angle2D: -l + (.5 * a - r() * a),
                    angle3D: -Math.PI / 4 + r() * (Math.PI / 2),
                    tiltAngle: r() * Math.PI,
                    tiltAngleSpeed: .1 + .3 * r()
                }
            }

            function l(e, t, n, r, l, a) {
                var o = void 0;
                return new Promise((function(i) {
                    requestAnimationFrame((function c(u) {
                        o || (o = u);
                        var s = u - o,
                            m = o === u ? 0 : (u - o) / l;
                        t.slice(0, Math.ceil(s / a)).forEach((function(e) {
                            ! function(e, t, n, r) {
                                e.physics.x += Math.cos(e.physics.angle2D) * e.physics.velocity, e.physics.y += Math.sin(e.physics.angle2D) * e.physics.velocity, e.physics.z += Math.sin(e.physics.angle3D) * e.physics.velocity, e.physics.wobble += e.physics.wobbleSpeed, r ? e.physics.velocity *= r : e.physics.velocity -= e.physics.velocity * n, e.physics.y += 3, e.physics.tiltAngle += e.physics.tiltAngleSpeed;
                                var l = e.physics,
                                    a = l.x,
                                    o = l.y,
                                    i = l.z,
                                    c = l.tiltAngle,
                                    u = l.wobble,
                                    s = "translate3d(" + (a + 10 * Math.cos(u)) + "px, " + (o + 10 * Math.sin(u)) + "px, " + i + "px) rotate3d(1, 1, 1, " + c + "rad)";
                                e.element.style.visibility = "visible", e.element.style.transform = s, e.element.style.opacity = 1 - t
                            }(e, m, n, r)
                        })), u - o < l ? requestAnimationFrame(c) : (t.forEach((function(t) {
                            if (t.element.parentNode === e) return e.removeChild(t.element)
                        })), i())
                    }))
                }))
            }
            var a = {
                angle: 90,
                spread: 45,
                startVelocity: 45,
                elementCount: 50,
                width: "10px",
                height: "10px",
                perspective: "",
                colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
                duration: 3e3,
                stagger: 0,
                dragFriction: .1,
                random: Math.random
            };

            function o(e) {
                return !e.stagger && e.delay && (e.stagger = e.delay), e
            }
        },
        61377: function(e, t, n) {
            "use strict";
            var r, l = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                a = n(67294),
                o = (r = a) && r.__esModule ? r : {
                    default: r
                },
                i = n(60538);
            var c = {
                    position: "relative"
                },
                u = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.setRef = n.setRef.bind(n), n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), l(t, [{
                        key: "componentDidUpdate",
                        value: function(e) {
                            !e.active && this.props.active && (0, i.confetti)(this.container, this.props.config)
                        }
                    }, {
                        key: "setRef",
                        value: function(e) {
                            this.container = e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return o.default.createElement("div", {
                                className: this.props.className,
                                style: c,
                                ref: this.setRef
                            })
                        }
                    }]), t
                }(a.Component);
            t.Z = u
        },
        51223: function(e, t, n) {
            var r = n(5112),
                l = n(70030),
                a = n(3070),
                o = r("unscopables"),
                i = Array.prototype;
            null == i[o] && a.f(i, o, {
                configurable: !0,
                value: l(null)
            }), e.exports = function(e) {
                i[o][e] = !0
            }
        },
        77475: function(e, t, n) {
            var r = n(17854),
                l = n(43157),
                a = n(4411),
                o = n(70111),
                i = n(5112)("species"),
                c = r.Array;
            e.exports = function(e) {
                var t;
                return l(e) && (t = e.constructor, (a(t) && (t === c || l(t.prototype)) || o(t) && null === (t = t[i])) && (t = void 0)), void 0 === t ? c : t
            }
        },
        65417: function(e, t, n) {
            var r = n(77475);
            e.exports = function(e, t) {
                return new(r(e))(0 === t ? 0 : t)
            }
        },
        70648: function(e, t, n) {
            var r = n(17854),
                l = n(51694),
                a = n(60614),
                o = n(84326),
                i = n(5112)("toStringTag"),
                c = r.Object,
                u = "Arguments" == o(function() {
                    return arguments
                }());
            e.exports = l ? o : function(e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (n) {}
                }(t = c(e), i)) ? n : u ? o(t) : "Object" == (r = o(t)) && a(t.callee) ? "Arguments" : r
            }
        },
        6790: function(e, t, n) {
            "use strict";
            var r = n(17854),
                l = n(43157),
                a = n(26244),
                o = n(49974),
                i = r.TypeError,
                c = function(e, t, n, r, u, s, m, p) {
                    for (var d, f, h = u, g = 0, b = !!m && o(m, p); g < r;) {
                        if (g in n) {
                            if (d = b ? b(n[g], g, t) : n[g], s > 0 && l(d)) f = a(d), h = c(e, t, d, f, h, s - 1) - 1;
                            else {
                                if (h >= 9007199254740991) throw i("Exceed the acceptable array length");
                                e[h] = d
                            }
                            h++
                        }
                        g++
                    }
                    return h
                };
            e.exports = c
        },
        49974: function(e, t, n) {
            var r = n(1702),
                l = n(19662),
                a = r(r.bind);
            e.exports = function(e, t) {
                return l(e), void 0 === t ? e : a ? a(e, t) : function() {
                    return e.apply(t, arguments)
                }
            }
        },
        60490: function(e, t, n) {
            var r = n(35005);
            e.exports = r("document", "documentElement")
        },
        43157: function(e, t, n) {
            var r = n(84326);
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        },
        4411: function(e, t, n) {
            var r = n(1702),
                l = n(47293),
                a = n(60614),
                o = n(70648),
                i = n(35005),
                c = n(42788),
                u = function() {},
                s = [],
                m = i("Reflect", "construct"),
                p = /^\s*(?:class|function)\b/,
                d = r(p.exec),
                f = !p.exec(u),
                h = function(e) {
                    if (!a(e)) return !1;
                    try {
                        return m(u, s, e), !0
                    } catch (t) {
                        return !1
                    }
                },
                g = function(e) {
                    if (!a(e)) return !1;
                    switch (o(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return f || !!d(p, c(e))
                    } catch (t) {
                        return !0
                    }
                };
            g.sham = !0, e.exports = !m || l((function() {
                var e;
                return h(h.call) || !h(Object) || !h((function() {
                    e = !0
                })) || e
            })) ? g : h
        },
        70030: function(e, t, n) {
            var r, l = n(19670),
                a = n(36048),
                o = n(80748),
                i = n(3501),
                c = n(60490),
                u = n(80317),
                s = n(6200),
                m = s("IE_PROTO"),
                p = function() {},
                d = function(e) {
                    return "<script>" + e + "</" + "script>"
                },
                f = function(e) {
                    e.write(d("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                },
                h = function() {
                    try {
                        r = new ActiveXObject("htmlfile")
                    } catch (l) {}
                    var e, t;
                    h = "undefined" != typeof document ? document.domain && r ? f(r) : ((t = u("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(d("document.F=Object")), e.close(), e.F) : f(r);
                    for (var n = o.length; n--;) delete h.prototype[o[n]];
                    return h()
                };
            i[m] = !0, e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (p.prototype = l(e), n = new p, p.prototype = null, n[m] = e) : n = h(), void 0 === t ? n : a.f(n, t)
            }
        },
        36048: function(e, t, n) {
            var r = n(19781),
                l = n(3353),
                a = n(3070),
                o = n(19670),
                i = n(45656),
                c = n(81956);
            t.f = r && !l ? Object.defineProperties : function(e, t) {
                o(e);
                for (var n, r = i(t), l = c(t), u = l.length, s = 0; u > s;) a.f(e, n = l[s++], r[n]);
                return e
            }
        },
        81956: function(e, t, n) {
            var r = n(16324),
                l = n(80748);
            e.exports = Object.keys || function(e) {
                return r(e, l)
            }
        },
        51694: function(e, t, n) {
            var r = {};
            r[n(5112)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
        },
        86535: function(e, t, n) {
            "use strict";
            var r = n(82109),
                l = n(6790),
                a = n(19662),
                o = n(47908),
                i = n(26244),
                c = n(65417);
            r({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(e) {
                    var t, n = o(this),
                        r = i(n);
                    return a(e), (t = c(n, 0)).length = l(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
                }
            })
        },
        99244: function(e, t, n) {
            n(51223)("flatMap")
        },
        16779: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return E
                }
            });
            var r = n(67294),
                l = n(23905),
                a = n(51496),
                o = n(19950);

            function i() {
                (0, o.t)({
                    event: "gaEvent",
                    eventCategory: "interest",
                    eventAction: "click link",
                    eventLabel: "hire talent::more information"
                })
            }
            var c = n(94453),
                u = n(49558),
                s = n(32806),
                m = n(7713),
                p = n(33204),
                d = n(64121),
                f = p.default.section.withConfig({
                    displayName: "styles__Images",
                    componentId: "sc-av0izd-0"
                })(["margin:3.2rem 1.6rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;@media (max-width:", "){margin-left:0;margin-right:0;margin-top:1.6rem;}"], d.Z.resolutions.mobileL),
                h = p.default.div.withConfig({
                    displayName: "styles__Image",
                    componentId: "sc-av0izd-1"
                })(["display:inline-block;flex-basis:20%;margin:0 2.5%;filter:grayscale(100%);transform:scale(0.85);transition:0.3s ease-in-out filter,0.3s ease-in-out transform;width:100%;height:13rem;&:hover{filter:grayscale(0);transform:scale(1);}@media (max-width:", "){flex-basis:45%;margin:0;filter:grayscale(0);transform:scale(1);}"], d.Z.resolutions.mobileL),
                g = p.default.section.withConfig({
                    displayName: "styles__ListChecksBox",
                    componentId: "sc-av0izd-2"
                })(["display:flex;flex-wrap:wrap;padding:0 1.6rem;&:firts-child{margin-right:4.8rem;}@media (max-width:", "){flex-direction:column;padding:0;}"], d.Z.resolutions.mobileL),
                b = p.default.article.withConfig({
                    displayName: "styles__CheckBox",
                    componentId: "sc-av0izd-3"
                })(["display:flex;flex-wrap:wrap;justify-content:space-between;& > div{width:45%;display:flex;align-items:center;margin-top:3.2rem;p{color:", ";}b{color:", ";}img{margin-right:1.6rem;}}@media (max-width:", "){& > div{width:100%;margin-right:0;}}"], d.Z.palette.darkBlueTransparent("0.8"), d.Z.palette.darkBlue, d.Z.resolutions.mobileL),
                v = p.default.a.withConfig({
                    displayName: "styles__LinkPartner",
                    componentId: "sc-av0izd-4"
                })(["display:table;margin:0 auto;text-decoration:none;color:", ";font-size:2rem;position:relative;padding-bottom:0.8rem;&:hover::after{transform:scaleX(1);}&::after{content:'';width:100%;background-color:", ";height:0.2rem;bottom:0;content:'';position:absolute;transition:transform 0.5s;transform:scaleX(0.4);right:0;}@media (max-width:", "){display:block;padding:1.5rem;font-size:1.5rem;line-height:130%;border-radius:0.6rem;transition:0.3s;border:0.2rem solid ", ";text-align:center;&:active{border-color:", ";}&::after{display:none;}}"], d.Z.palette.lightBlue, d.Z.palette.lightBlue, d.Z.resolutions.mobileL, d.Z.palette.lightBlue, d.Z.palette.lightBlueHover),
                y = (0, p.css)(["padding-bottom:6.4rem;padding-top:6.4rem;> p{color:", ";margin-top:1.6rem;}@media (max-width:", "){padding-bottom:4.8rem;padding-top:4.8rem;}"], d.Z.palette.darkBlueTransparent("0.6"), d.Z.resolutions.mobileL),
                x = n(48125),
                E = (0, l.Z)()((function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        l = e.viewChecksBox,
                        o = void 0 !== l && l,
                        p = e.viewButton,
                        d = e.t,
                        E = (new x.Z).getSecondaryShowcase();
                    return r.createElement(u.Z, {
                        extend: y
                    }, r.createElement(s.wo, {
                        as: "h2"
                    }, t), r.createElement(m.l5, {
                        as: "p"
                    }, n), o ? r.createElement(g, null, r.createElement(b, null, r.createElement("div", null, r.createElement("img", {
                        src: "/assets/icons/checkbox/check-box.svg",
                        alt: "check-box"
                    }), r.createElement(m.hh, {
                        as: "p"
                    }, r.createElement("b", null, d("social-impact:socialImpact.partners.options.01.title")), " ", d("social-impact:socialImpact.partners.options.01.description"))), r.createElement("div", null, r.createElement("img", {
                        src: "/assets/icons/checkbox/check-box.svg",
                        alt: "check-box"
                    }), r.createElement(m.hh, {
                        as: "p"
                    }, r.createElement("b", null, d("social-impact:socialImpact.partners.options.02.title")), " ", d("social-impact:socialImpact.partners.options.02.description")))), r.createElement(b, null, r.createElement("div", null, r.createElement("img", {
                        src: "/assets/icons/checkbox/check-box.svg",
                        alt: "check-box"
                    }), r.createElement(m.hh, {
                        as: "p"
                    }, r.createElement("b", null, d("social-impact:socialImpact.partners.options.03.title")), " ", d("social-impact:socialImpact.partners.options.03.description"))), r.createElement("div", null, r.createElement("img", {
                        src: "/assets/icons/checkbox/check-box.svg",
                        alt: "check-box"
                    }), r.createElement(m.hh, {
                        as: "p"
                    }, r.createElement("b", null, d("social-impact:socialImpact.partners.options.04.title")), " ", d("social-impact:socialImpact.partners.options.04.description"))))) : "", r.createElement(f, null, E.map((function(e) {
                        return r.createElement(h, {
                            key: e.name
                        }, r.createElement(a.Z, {
                            fluid: e.logo,
                            alt: e.name
                        }))
                    }))), p ? r.createElement(v, {
                        onClick: i,
                        href: (0, c.Gm)("hireTechTalent")
                    }, d("home:home.hireTalent.cta")) : "")
                }))
        },
        27046: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = n(67294),
                l = n(96901),
                a = n(23905),
                o = n(51496),
                i = n(49558),
                c = n(7713),
                u = n(33204),
                s = n(64121),
                m = (0, u.default)("article").withConfig({
                    displayName: "StudentCompanies__Companies",
                    componentId: "sc-731dr7-0"
                })(["display:flex;align-items:center;justify-content:space-between;@media (max-width:", "){flex-wrap:wrap;justify-content:space-evenly;}"], s.Z.resolutions.mobileL),
                p = (0, u.default)("div").withConfig({
                    displayName: "StudentCompanies__CompanyLogo",
                    componentId: "sc-731dr7-1"
                })(["filter:grayscale(1);width:", "%;:hover{filter:grayscale(0);}@media (max-width:", "){width:25%;filter:grayscale(0);}"], (function(e) {
                    return e.width
                }), s.Z.resolutions.mobileL),
                d = (0, u.css)(["display:flex;flex-direction:column;text-align:center;padding-bottom:0.8rem;padding-top:1.6rem;& > p{color:", ";margin-bottom:0.8rem;margin-top:1.6rem;}&::before,&::after{background:linear-gradient( 270deg,#ffffff 0%,#596584 44.98%,#ffffff 95.78% );opacity:0.1;content:'';display:block;height:0.1rem;width:100%;}@media(max-width ", "){& > p{color:", ";margin-top:1.8rem;}}"], s.Z.palette.darkBlueTransparent("0.4"), s.Z.resolutions.mobileM, s.Z.palette.darkBlueTransparent("0.6")),
                f = n(48125),
                h = (0, a.Z)()((function(e) {
                    var t = e.t,
                        n = e.title,
                        a = (new f.Z).getMainShowcase();
                    return r.createElement(i.Z, {
                        extend: d
                    }, r.createElement(l.xu, {
                        mt: [6, null, null, 8]
                    }, r.createElement(c.yr, {
                        as: "p"
                    }, n || t("home:home:companies.title"))), r.createElement(m, null, a.map((function(e) {
                        return r.createElement(p, {
                            key: e.name,
                            width: 100 / a.length
                        }, r.createElement(o.Z, {
                            alt: e.name,
                            fluid: e.logo
                        }))
                    }))))
                }))
        },
        68551: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return E
                }
            });
            var r = n(63366),
                l = n(77606),
                a = n.n(l),
                o = n(40104),
                i = n.n(o),
                c = n(43002),
                u = n.n(c),
                s = n(67294),
                m = n(71907),
                p = n(96901),
                d = n(28900),
                f = n(3820),
                h = n(94453),
                g = n(90014),
                b = n(72685);
            var v = function(e) {
                    var t = e.title,
                        n = e.description,
                        r = e.Icon,
                        l = e.link,
                        a = e.downloadSyllabus,
                        o = e.courseCode,
                        i = e.campusCode,
                        c = (0, d.$)(["course-list"]).t,
                        u = (0, s.useState)(!1),
                        m = u[0],
                        f = u[1],
                        h = (0, s.useCallback)((function() {
                            f(!m)
                        }), [m, f]);
                    return s.createElement(p.kC, {
                        direction: "column",
                        mb: m ? 6 : 0
                    }, s.createElement(p.xu, {
                        background: "white",
                        borderRadius: ["button", null, null, "card"],
                        boxShadow: ["active2", null, null, "active1"],
                        height: "fit-content",
                        mb: m ? 2 : 0,
                        p: [2, null, null, 3]
                    }, s.createElement(p.kC, {
                        direction: ["column", null, null, "row"]
                    }, s.createElement(r, {
                        boxSize: "48px"
                    }), s.createElement(p.xv, {
                        as: "h3",
                        ml: [0, null, null, 2],
                        mt: [2, null, null, 0],
                        textStyle: "title2"
                    }, t)), s.createElement(p.xv, {
                        color: "darkBlue.80",
                        mt: [1, null, null, 2],
                        textStyle: "body4"
                    }, n), s.createElement(p.MI, {
                        columns: [1, null, null, a ? 2 : 1],
                        spacing: 2
                    }, s.createElement(g.zx, {
                        colorScheme: "electricblue",
                        mt: [2, null, null, 3],
                        onClick: function() {
                            window.location.href = l
                        },
                        variant: a ? "solid" : "outline"
                    }, c(a ? "course-campus:courseCampus.formats.experiment.info.cta" : "course-list:courseList.cta")), a && s.createElement(g.zx, {
                        colorScheme: "electricblue",
                        mt: [0, null, null, 3],
                        onClick: h,
                        variant: "outline",
                        whiteSpace: "initial"
                    }, c("course-campus:courseCampus.downloadSyllabus.cta")))), a && m && s.createElement(b.Z, {
                        campusCode: i,
                        courseCode: o
                    }))
                },
                y = ["campusCode", "campusCourses", "downloadSyllabus"],
                x = function(e, t) {
                    return t ? (0, h.Li)(e, "campus" + u()(t)) : (0, h.Gm)(e)
                },
                E = (0, m.Gp)((function(e, t) {
                    var n = (0, d.$)(["course-list"]).t,
                        l = e.campusCode,
                        o = e.campusCourses,
                        c = e.downloadSyllabus,
                        u = (0, r.Z)(e, y),
                        m = function(e, t, n) {
                            return i()((function(e) {
                                return a()(n) || (null == n ? void 0 : n.includes(e.courseCode))
                            }))([{
                                description: e("course-list:courseList.web.description"),
                                Icon: f.y3,
                                link: x("courseWeb", t),
                                title: e("course-list:courseList.web.title"),
                                courseCode: "web"
                            }, {
                                description: e("course-list:courseList.data.description"),
                                Icon: f.dZ,
                                link: x("courseData", t),
                                title: e("course-list:courseList.data.title"),
                                courseCode: "data"
                            }, {
                                description: e("course-list:courseList.uxui.description"),
                                Icon: f.HP,
                                link: x("courseUxui", t),
                                title: e("course-list:courseList.uxui.title"),
                                courseCode: "uxui"
                            }, {
                                description: e("course-list:courseList.cysec.description"),
                                Icon: f.z3,
                                link: x("courseCysec", t),
                                title: e("course-list:courseList.cysec.title"),
                                courseCode: "cysec"
                            }])
                        }(n, l, o);
                    return s.createElement(p.kC, Object.assign({
                        bg: "ghostWhite"
                    }, u, {
                        ref: t
                    }), s.createElement(p.xu, {
                        maxWidth: [null, null, null, "1296px"],
                        mx: [2, null, 4, "auto"],
                        my: [3, null, null, 6]
                    }, s.createElement(p.xv, {
                        as: "h2",
                        ml: [1, null, null, 0],
                        textStyle: "title1"
                    }, n("course-list:courseList.title")), s.createElement(p.MI, {
                        columns: [1, null, 2],
                        mt: [3, null, null, 4],
                        spacingX: [3, null, null, 6],
                        spacingY: [3, null, null, 4]
                    }, m.map((function(e) {
                        return s.createElement(v, Object.assign({
                            campusCode: l,
                            downloadSyllabus: c,
                            key: e.title
                        }, e))
                    })))))
                }))
        },
        43516: function(e, t, n) {
            "use strict";
            n.d(t, {
                ev: function() {
                    return i
                },
                p6: function() {
                    return c
                },
                xG: function() {
                    return u
                }
            });
            var r = n(27361),
                l = n.n(r),
                a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                o = function(e, t) {
                    return l()(e, t.toLocaleLowerCase() + ".abbreviation", "")
                },
                i = function(e, t) {
                    if (5 === t.length) {
                        var n = o(e.weekDays, t[0]),
                            r = o(e.weekDays, t[4]);
                        return n + " " + l()(e, "conjunctions.to") + " " + r
                    }
                    var a = l()(e, "conjunctions.and");
                    return t.map((function(t) {
                        return o(e.weekDays, t)
                    })).join(" " + a + " ")
                },
                c = function(e) {
                    if ("" === e) return "";
                    var t = e.split("T");
                    if (2 !== t.length) return "";
                    var n = t && t[0].split("-");
                    if (3 !== n.length) return "";
                    var r = n[2],
                        l = parseInt(n[1]);
                    return r + " " + a[l - 1]
                },
                u = function(e, t) {
                    var n, r;
                    switch (t) {
                        case "$":
                            n = "USD", r = "en-US";
                            break;
                        case "€":
                        default:
                            n = "EUR", r = "es-ES";
                            break;
                        case "$MXN":
                            n = "MXN", r = "es-MX";
                            break;
                        case "R$":
                            n = "BRL", r = "pt-BR";
                            break;
                        case "£":
                            n = "GBP", r = "en-GB"
                    }
                    var l = new Intl.NumberFormat(r, {
                        style: "currency",
                        currency: n
                    }).format(e);
                    return "MXN" === n ? l += " MXN" : "USD" === n && (l = "US" + l), l
                }
        },
        48125: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return p
                }
            });
            var r = n(83049),
                l = n.n(r),
                a = n(88846),
                o = n.n(a),
                i = n(27183),
                c = n.n(i),
                u = n(8816),
                s = n.n(u),
                m = n(25444),
                p = function() {
                    function e() {
                        var e = this.getCompanies(),
                            t = e.all,
                            n = e.main,
                            r = e.secondary;
                        this.companies = t, this.mainShowcase = n, this.secondaryShowcase = r
                    }
                    var t = e.prototype;
                    return t.getMainShowcase = function() {
                        return this.mainShowcase
                    }, t.getSecondaryShowcase = function() {
                        return this.secondaryShowcase
                    }, t.getCompanies = function() {
                        var e = (0, m.K2)("673526177"),
                            t = e.allDatoCmsCompany,
                            n = e.datoCmsCompanyShowcase,
                            r = function(e) {
                                return Object.assign({}, e, {
                                    logo: e.logo.fluid
                                })
                            };
                        return {
                            all: s()(c()([], "edges"), o()("node"), l()("name"), o()(r))(t),
                            main: s()(c()([], "main"), o()(r))(n),
                            secondary: s()(c()([], "secondary"), o()(r))(n)
                        }
                    }, e
                }()
        },
        36020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return $e
                }
            });
            var r = n(67294),
                l = n(96901),
                a = n(28900),
                o = n(63366),
                i = n(51941),
                c = n.n(i),
                u = n(65068),
                s = n.n(u),
                m = n(27183),
                p = n.n(m),
                d = n(12915),
                f = n.n(d),
                h = n(53568),
                g = n.n(h),
                b = n(6125),
                v = n(94453),
                y = n(3820),
                x = ["images"],
                E = {
                    career: {
                        header: {
                            width: "21.8rem",
                            mt: [3, null, null, 4],
                            mb: [3, null, null, 3]
                        }
                    },
                    community: {
                        header: {
                            width: "11.2rem",
                            mt: [null, null, null, 5],
                            mb: [3, null, null, 5]
                        }
                    },
                    curriculum: {
                        header: {
                            mt: [null, null, null, 4],
                            mb: [3, null, null, 5]
                        }
                    },
                    financial: {
                        header: {
                            width: "27.8rem",
                            mt: [null, null, null, 5],
                            mb: [2, null, null, 3]
                        }
                    },
                    network: {
                        header: {
                            width: "30rem",
                            mt: [null, null, null, 2],
                            mb: [1, null, null, 2]
                        }
                    },
                    outcomes: {
                        header: {
                            width: "30.9rem",
                            mb: [null, null, null, 1]
                        }
                    }
                },
                w = {
                    career: "careerServices",
                    community: "alumni",
                    curriculum: "campusRmt",
                    financial: "financing",
                    network: "enterprise",
                    outcomes: "careerServices"
                },
                C = ["financial", "community", "outcomes", "curriculum", "career", "network"];

            function k(e) {
                var t = e.reasonName,
                    n = e.image,
                    o = (0, (0, a.$)(["home"]).t)("home.whyironhack.0" + (g()(f()(t), C) + 1), {
                        returnObjects: !0
                    }),
                    i = E[t];
                return r.createElement(l.kC, {
                    direction: "column",
                    mb: [null, null, null, 4],
                    width: ["100%", null, null, "40rem"]
                }, n ? r.createElement(l.xu, i.header, r.createElement(b.G, {
                    alt: n.alt,
                    image: n.gatsbyImageData,
                    title: n.title
                })) : r.createElement(l.xv, Object.assign({}, i.header, {
                    textStyle: "title2"
                }), o.header), r.createElement(l.xv, {
                    textStyle: "body2"
                }, o.title), r.createElement(l.xv, {
                    color: "darkBlue.80",
                    mt: 1.5,
                    textStyle: "body4"
                }, o.description), o.cta && r.createElement(l.rU, {
                    alignItems: "center",
                    fontWeight: "700",
                    href: (0, v.Gm)(p()("", t, w)),
                    mt: 2,
                    textStyle: "body4"
                }, o.cta, r.createElement(y.ol, {
                    boxSize: "12px",
                    color: "electricBlue.100",
                    ml: 1
                })))
            }
            var S = function(e) {
                    var t = e.images,
                        n = (0, o.Z)(e, x),
                        i = (0, a.$)(["home"]).t;
                    return r.createElement(l.kC, Object.assign({}, n, {
                        background: "linear-gradient(240.24deg, rgba(253, 167, 54, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(120.01deg, rgba(45, 197, 250, 0.12) 5.51%, rgba(86, 76, 255, 0.08) 100%);",
                        pb: [4, null, null, 0]
                    }), r.createElement(l.kC, {
                        direction: "column",
                        m: [null, null, null, "auto"],
                        maxW: [null, null, null, "1296px"],
                        px: [3, null, null, 0]
                    }, r.createElement(l.xv, {
                        mb: [4, null, null, 1],
                        mt: 6,
                        textStyle: "title1"
                    }, i("home:home.whyironhack.title")), r.createElement(l.Kq, {
                        direction: ["column", null, null, "row"],
                        divider: r.createElement(l.cX, {
                            borderColor: "white",
                            borderWidth: ["1px", null, null, "0px"]
                        }),
                        spacing: 3
                    }, s()(3, C).map((function(e) {
                        return r.createElement(k, {
                            image: t[e],
                            key: e,
                            reasonName: e
                        })
                    }))), r.createElement(l.cX, {
                        borderColor: "white",
                        borderWidth: "1px",
                        mt: [2, null, null, 0]
                    }), r.createElement(l.Kq, {
                        direction: ["column", null, null, "row"],
                        divider: r.createElement(l.cX, {
                            borderColor: "white",
                            borderWidth: ["1px", null, null, "0px"]
                        }),
                        spacing: 3
                    }, c()(3, C).map((function(e) {
                        return r.createElement(k, {
                            image: t[e],
                            key: e,
                            reasonName: e
                        })
                    })))))
                },
                Z = n(68551),
                j = n(27046),
                N = n(78159),
                O = n(65214),
                F = n(39452),
                I = n.n(F),
                L = n(70414),
                B = n.n(L),
                _ = n(10895),
                M = ["image", "scrollToTarget"];
            var A = function(e) {
                    var t = e.image,
                        n = e.scrollToTarget,
                        i = (0, o.Z)(e, M),
                        c = (0, a.$)(["home", "menu"]),
                        u = c.t,
                        s = c.i18n,
                        m = (0, O.Sx)([null, null, null, t]);
                    return r.createElement(l.kC, Object.assign({
                        direction: ["column", null, null, "row"],
                        justifyContent: [null, null, null, "space-between"],
                        m: [null, null, null, "auto"],
                        maxW: [null, null, null, "1296px"],
                        px: [3, null, null, 0]
                    }, i), r.createElement(l.kC, {
                        direction: "column",
                        maxWidth: [null, null, null, "62.4rem"]
                    }, r.createElement(l.xv, {
                        as: "h1",
                        color: "darkBlue.100",
                        dangerouslySetInnerHTML: {
                            __html: u("home:home.newMainHeadline.title")
                        },
                        fontSize: ["3.8rem", null, null, "5.6rem"],
                        sx: {
                            "&>span": {
                                color: "electricBlue.100"
                            }
                        },
                        textStyle: "jumbo"
                    }), r.createElement(l.xv, {
                        color: "darkBlue.64",
                        maxWidth: [null, null, null, "60rem"],
                        mb: [3, null, null, 4],
                        mt: 2,
                        textStyle: "body3"
                    }, u("home:home.newMainHeadline.subtitle")), r.createElement(_.Z, {
                        onSubmit: function(e, t) {
                            if (!e && !t) return n();
                            window.location.href = e ? t ? (0, v.Li)(e, t, s.language) : (0, v.Gm)(e, s.language) : (0, v.Gm)(t, s.language)
                        }
                    }), r.createElement(l.kC, {
                        direction: ["column", null, null, "row"]
                    }, r.createElement(l.Ug, {
                        mt: 6,
                        spacing: 2
                    }, r.createElement(B(), {
                        height: 43,
                        width: "auto"
                    }), r.createElement(I(), {
                        height: 43,
                        width: "auto"
                    }), r.createElement(l.kC, {
                        direction: "column",
                        maxWidth: [null, null, null, "17.8rem"]
                    }, r.createElement(l.xv, {
                        textStyle: "body1"
                    }, u("home:home.stats.reviews.score")), r.createElement(l.xv, {
                        mt: .5,
                        textStyle: "body6"
                    }, u("home:home.stats.reviews.description")))))), r.createElement(l.xu, {
                        borderRadius: "card",
                        height: "100%",
                        mt: [3, null, null, 0],
                        overflow: "hidden",
                        width: ["100%", null, null, "51.2rem"]
                    }, m && r.createElement(b.G, {
                        alt: m.alt,
                        image: m.gatsbyImageData,
                        title: m.title
                    })))
                },
                T = n(15861),
                z = n(87757),
                H = n.n(z),
                W = n(90014),
                R = n(25444),
                P = n(46962),
                D = n(41609),
                G = n.n(D),
                q = n(17716),
                $ = n(75932),
                U = n(55461),
                V = n(39374),
                X = n(58468),
                J = n(62781),
                K = ["onSubmitHandler", "isSubmitting", "submitError"],
                Y = function(e) {
                    var t = e.onSubmitHandler,
                        n = e.isSubmitting,
                        i = e.submitError,
                        c = (0, o.Z)(e, K).data.datoCmsHomeHeaderApply,
                        u = (0, a.$)().t,
                        s = (0, $.Gc)(),
                        m = s.register,
                        p = s.watch,
                        d = s.formState.touchedFields,
                        f = p(["course", "format"]),
                        h = f[0],
                        g = f[1],
                        b = (0, r.useRef)(null);
                    (0, r.useEffect)((function() {
                        b.current || G()(d) || (J.HK(), b.current = !0)
                    }), [d.format, d.course, b]);
                    var v = "cysec" === h ? "course-cybersecurity-campus:cysec" : "course-campus:courseCampus",
                        y = Object.entries(u("application-form:applicationForm.courseSelection.courses", {
                            returnObjects: !0
                        })).filter((function(e) {
                            return "cysec" !== e[0]
                        })),
                        x = Object.entries(u("application-form:applicationForm.formatSelection.formats", {
                            returnObjects: !0,
                            ftDuration: u(v + ".formats.fullTime.weeks"),
                            ptDuration: u(v + ".formats.partTime.weeks")
                        }));
                    return r.createElement(l.xu, {
                        bg: "white",
                        borderRadius: "card",
                        p: 5
                    }, r.createElement(l.xv, {
                        align: "center",
                        textStyle: "title2"
                    }, c.title), r.createElement(l.xv, {
                        align: "center",
                        color: "electricBlue.100",
                        fontWeight: 600,
                        mt: 1,
                        textStyle: "body5",
                        textTransform: "uppercase"
                    }, u("application-form:applicationForm.home.step", {
                        step: 1
                    })), r.createElement(X.Z, {
                        name: "course",
                        title: u("application-form:applicationForm.placeholders.bootcamp")
                    }, r.createElement(q.Ph, Object.assign({
                        color: "electricBlue.100",
                        iconColor: "darkBlue.100",
                        iconSize: "x-large",
                        placeholder: u("application-form:applicationForm.placeholders.course"),
                        value: h
                    }, m("course", {
                        required: u("application-form:applicationForm.fieldsErrors.course")
                    })), y.map((function(e) {
                        var t = e[0],
                            n = e[1];
                        return r.createElement("option", {
                            key: t,
                            value: t
                        }, n)
                    })))), r.createElement(X.Z, {
                        name: "format",
                        title: u("application-form:applicationForm.placeholders.schedule")
                    }, r.createElement(q.Ph, Object.assign({
                        color: "electricBlue.100",
                        iconColor: "darkBlue.100",
                        iconSize: "x-large",
                        placeholder: u("application-form:applicationForm.placeholders.schedule"),
                        value: g
                    }, m("format", {
                        required: u("application-form:applicationForm.fieldsErrors.format")
                    })), x.map((function(e) {
                        var t = e[0],
                            n = e[1].title;
                        return r.createElement("option", {
                            key: t,
                            value: t
                        }, n)
                    })))), i && r.createElement(V.Z, {
                        message: u("application-form:applicationForm.error"),
                        mt: 4
                    }), r.createElement(U.Z, {
                        isSubmitting: n,
                        onSubmit: t,
                        text: u("application-form:applicationForm.home.cta.next")
                    }))
                },
                Q = (n(86535), n(99244), n(58620)),
                ee = n(42053),
                te = n(55811),
                ne = n(55971),
                re = ["onSubmitHandler", "isSubmitting", "submitError"],
                le = function(e) {
                    var t, n = e.onSubmitHandler,
                        i = e.isSubmitting,
                        c = e.submitError,
                        u = (0, o.Z)(e, re),
                        s = u.data,
                        m = s.datoCmsHomeHeaderApply,
                        p = s.datoCmsApplyForm,
                        d = (0, a.$)().t,
                        f = (0, $.Gc)(),
                        h = f.register,
                        g = f.watch,
                        b = f.setValue,
                        v = f.setError,
                        y = f.clearErrors,
                        x = g(["campus", "cohort", "format", "course"]),
                        E = x[0],
                        w = x[1],
                        C = x[2],
                        k = x[3],
                        S = (0, ee.tm)(u.cohorts),
                        Z = S[0],
                        j = S[1];
                    (0, r.useEffect)((function() {
                        b("type", "rmt" === E ? "remote" : "inCampus")
                    }), [E, b]), (0, r.useEffect)((function() {
                        E && j && v("cohort", {
                            message: d("application-form:applicationForm.noCohorts", {
                                course: k,
                                campus: E
                            })
                        }), j || y("cohort")
                    }), [y, E, k, j, v, d]);
                    var N = (0, r.useState)(!1),
                        O = N[0],
                        F = N[1],
                        I = (0, r.useState)(!1),
                        L = I[0],
                        B = I[1];
                    return r.createElement(l.xu, {
                        bg: "white",
                        borderRadius: "card",
                        p: 5
                    }, r.createElement(l.xv, {
                        align: "center",
                        textStyle: "title2"
                    }, m.title), r.createElement(l.xv, {
                        align: "center",
                        color: "electricBlue.100",
                        fontWeight: 600,
                        mt: 1,
                        textStyle: "body5",
                        textTransform: "uppercase"
                    }, d("application-form:applicationForm.home.step", {
                        step: 2
                    })), r.createElement(X.Z, {
                        name: "campus",
                        title: d("application-form:applicationForm.placeholders.campus")
                    }, r.createElement(q.Ph, Object.assign({
                        color: "electricBlue.100",
                        iconColor: "darkBlue.100",
                        iconSize: "x-large",
                        placeholder: d("application-form:applicationForm.placeholders.campus"),
                        value: E
                    }, h("campus", {
                        required: d("application-form:applicationForm.fieldsErrors.campus")
                    })), Q.flatMap((function(e) {
                        var t = e.code,
                            n = e.name;
                        return ["rmt", "mia"].includes(t) ? [r.createElement("option", {
                            key: t,
                            value: t
                        }, n)] : []
                    })))), r.createElement(X.Z, {
                        name: "cohort",
                        title: d("application-form:applicationForm.placeholders.edition")
                    }, r.createElement(q.Ph, Object.assign({
                        color: "electricBlue.100",
                        iconColor: "darkBlue.100",
                        iconSize: "x-large",
                        placeholder: d("application-form:applicationForm.placeholders.edition"),
                        value: w
                    }, h("cohort", {
                        required: d("application-form:applicationForm.fieldsErrors.cohort")
                    })), null == Z || null === (t = Z[C]) || void 0 === t ? void 0 : t.map((function(e) {
                        var t = e[0],
                            n = e[1].title;
                        return r.createElement("option", {
                            key: t,
                            value: t
                        }, n)
                    })))), c && r.createElement(V.Z, {
                        message: d("application-form:applicationForm.error"),
                        mt: 4
                    }), r.createElement(U.Z, {
                        isDisabled: j,
                        isSubmitting: i,
                        onSubmit: n,
                        text: p.normalFlowContinueCta
                    }), r.createElement(l.xv, {
                        fontWeight: "bold",
                        mt: 1,
                        textAlign: "center",
                        textStyle: "body5"
                    }, p.continueButtonsSeparator), r.createElement(te.GoogleLogin, {
                        clientId: "676500801588-v1fpojke5mvknngkf33c3ajcafle6kdq.apps.googleusercontent.com",
                        cookiePolicy: "single_host_origin",
                        onFailure: function(e) {
                            "idpiframe_initialization_failed" === e.error ? F(!0) : B(!0)
                        },
                        onSuccess: function(e) {
                            b("email", e.profileObj.email), b("isGoogle", !0), e.profileObj.givenName && "" !== e.profileObj.givenName && (b("firstName", e.profileObj.givenName), b("lastName", e.profileObj.familyName)), n(3)
                        },
                        render: function(e) {
                            return r.createElement(W.zx, {
                                _disabled: {
                                    bg: "#E06C6333",
                                    _hover: {
                                        bg: "#E06C6333"
                                    },
                                    cursor: "not-allowed"
                                },
                                _hover: {
                                    bg: "#E06C63"
                                },
                                bg: "#E06C63",
                                disabled: e.disabled || i || O,
                                iconSpacing: 1.5,
                                leftIcon: r.createElement(ne.ldW, {
                                    size: 24
                                }),
                                mt: 1,
                                onClick: e.onClick,
                                w: "full"
                            }, p.googleFlowContinueCta)
                        }
                    }), L && r.createElement(l.xv, {
                        color: "red",
                        textAlign: "center",
                        textShadow: "body6"
                    }, p.googleLoginErrorMessage))
                },
                ae = n(28569),
                oe = n(45268),
                ie = n(54922),
                ce = n(74073),
                ue = ["onSubmitHandler", "isSubmitting", "submitError"],
                se = function(e) {
                    var t = e.onSubmitHandler,
                        n = e.isSubmitting,
                        i = e.submitError,
                        c = (0, o.Z)(e, ue).data.datoCmsHomeHeaderApply,
                        u = (0, a.$)().t,
                        s = (0, $.Gc)(),
                        m = s.register,
                        p = s.watch,
                        d = s.setValue,
                        f = s.control,
                        h = s.formState.errors,
                        g = p(["phoneNumber"])[0];
                    return r.createElement(l.xu, {
                        bg: "white",
                        borderRadius: "card",
                        p: 5
                    }, r.createElement(l.xv, {
                        align: "center",
                        textStyle: "title2"
                    }, c.title), r.createElement(l.xv, {
                        align: "center",
                        color: "electricBlue.100",
                        fontWeight: 600,
                        mt: 1,
                        textStyle: "body5",
                        textTransform: "uppercase"
                    }, u("application-form:applicationForm.home.step", {
                        step: 3
                    })), r.createElement(l.rj, {
                        gap: 4,
                        mt: 4,
                        templateColumns: "repeat(2, 1fr)"
                    }, r.createElement(l.P4, {
                        colSpan: [2, null, 1]
                    }, r.createElement(X.Z, {
                        mt: 0,
                        name: "firstName",
                        title: u("application-form:applicationForm.fields.firstName")
                    }, r.createElement(ae.II, Object.assign({
                        placeholder: u("application-form:applicationForm.placeholders.firstName"),
                        type: "text"
                    }, m("firstName", {
                        required: u("application-form:applicationForm.fieldsErrors.firstName")
                    }))))), r.createElement(l.P4, {
                        colSpan: [2, null, 1]
                    }, r.createElement(X.Z, {
                        mt: 0,
                        name: "lastName",
                        title: u("application-form:applicationForm.fields.lastName")
                    }, r.createElement(ae.II, Object.assign({
                        placeholder: u("application-form:applicationForm.placeholders.lastName"),
                        type: "text"
                    }, m("lastName", {
                        required: u("application-form:applicationForm.fieldsErrors.lastName")
                    }))))), r.createElement(l.P4, {
                        colSpan: [2, null, 1]
                    }, r.createElement(X.Z, {
                        mt: 0,
                        name: "email",
                        title: u("application-form:applicationForm.fields.email")
                    }, r.createElement(ae.II, Object.assign({
                        placeholder: u("application-form:applicationForm.placeholders.email"),
                        type: "email"
                    }, m("email", {
                        required: u("application-form:applicationForm.fieldsErrors.email"),
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: u("application-form:applicationForm.fieldsErrors.email")
                        }
                    }))))), r.createElement(l.P4, {
                        colSpan: [2, null, 1]
                    }, r.createElement($.Qr, {
                        control: f,
                        name: "phoneNumber",
                        render: function(e) {
                            var t = e.field,
                                n = t.onChange,
                                l = t.value;
                            return r.createElement(X.Z, {
                                mt: 0,
                                name: "phoneNumber",
                                title: u("application-form:applicationForm.fields.phoneNumber")
                            }, r.createElement(ie.Z6, {
                                id: "phoneNumber",
                                isValid: (0, ce.kj)(l, h.phoneNumber),
                                onChange: function(e, t) {
                                    d("phoneCountry", t.name), n(e)
                                },
                                placeholder: u("application-form:applicationForm.placeholders.phoneNumber"),
                                value: l
                            }))
                        },
                        rules: {
                            required: u("application-form:applicationForm.fieldsErrors.phoneNumber"),
                            validate: function() {
                                return (0, ce.kj)(g) || u("application-form:applicationForm.fieldsErrors.phoneNumber")
                            }
                        }
                    }))), i && r.createElement(V.Z, {
                        message: u("application-form:applicationForm.error"),
                        mt: 4
                    }), r.createElement(U.Z, {
                        isSubmitting: n,
                        onSubmit: t,
                        text: u("application-form:applicationForm.cta.submit")
                    }), r.createElement(oe.Z, null))
                },
                me = n(43881),
                pe = n(61377),
                de = ["onSubmitHandler", "isSubmitting", "submitError"],
                fe = {
                    angle: 90,
                    dragFriction: .12,
                    duration: 15e4,
                    elementCount: 250,
                    height: "16px",
                    perspective: "1000px",
                    spread: 360,
                    stagger: 25,
                    startVelocity: 75,
                    width: "4px"
                },
                he = function(e) {
                    var t = e.onSubmitHandler,
                        n = e.isSubmitting,
                        i = (e.submitError, (0, o.Z)(e, de).data.datoCmsHomeHeaderApply),
                        c = (0, a.$)().t,
                        u = (0, (0, $.Gc)().getValues)(["firstName"])[0],
                        s = (0, r.useState)(!1),
                        m = s[0],
                        p = s[1];
                    return (0, r.useEffect)((function() {
                        p(!0)
                    }), [p]), r.createElement(l.xu, {
                        bg: "white",
                        borderRadius: "card",
                        p: 5
                    }, r.createElement(l.xu, {
                        active: m,
                        as: pe.Z,
                        config: fe,
                        left: "25%",
                        pos: "absolute"
                    }), r.createElement(l.xv, {
                        align: "center",
                        textStyle: "title2"
                    }, c("application-form:applicationForm.home.thanksTitle", {
                        name: u
                    })), r.createElement(l.Cd, {
                        bgColor: "electricBlue.100",
                        h: 32,
                        mx: "auto",
                        w: 32,
                        mt: 4
                    }, r.createElement(me.Gr2, {
                        color: "white",
                        size: 48
                    })), r.createElement(l.xv, {
                        align: "center",
                        color: "darkBlue.64",
                        fontWeight: 400,
                        mt: 2,
                        textStyle: "body5"
                    }, i.textAfterApply), r.createElement(U.Z, {
                        isSubmitting: n,
                        onSubmit: t,
                        text: c("application-form:applicationForm.home.cta.done")
                    }))
                },
                ge = n(37060),
                be = n(59694),
                ve = n(82163),
                ye = n(28824),
                xe = n(42501),
                Ee = n(37341),
                we = n(54938),
                Ce = n(74126),
                ke = n(88294),
                Se = n(72143),
                Ze = n.n(Se),
                je = {
                    campus: null,
                    cohort: null,
                    course: null,
                    email: null,
                    firstName: null,
                    format: null,
                    interest: null,
                    lastName: null,
                    newsletter: !0,
                    phoneCountry: null,
                    phoneNumber: null,
                    referral: null,
                    referralOther: null,
                    termsOfUse: !0,
                    type: null,
                    whyAreYouInterested: null
                };
            var Ne = function(e) {
                    var t, n, o = e.pageName,
                        i = (0, a.$)(),
                        c = i.t,
                        u = i.i18n.language,
                        s = (0, $.cI)({
                            mode: "onBlur"
                        }),
                        m = s.reset,
                        p = (0, be.useLocation)(),
                        d = ve.parse(p.search),
                        f = (0, ye.Z)().userLocation,
                        h = (0, r.useState)(1),
                        g = h[0],
                        b = h[1],
                        y = (0, r.useState)(!1),
                        x = y[0],
                        E = y[1],
                        w = (0, r.useState)(!1),
                        C = w[0],
                        k = w[1];
                    (0, r.useEffect)((function() {
                        var e, t, n = f.campusVisited || f.defaultCampus,
                            r = (null === (e = localStorage) || void 0 === e || null === (t = e.getItem("courseVisited")) || void 0 === t ? void 0 : t.slice(0, -2)) || "web",
                            l = f.campusVisited ? "inCampus" : "remote";
                        m((0, ge.wV)(je, {
                            campus: n,
                            course: r,
                            type: l,
                            financingOption: d.fo || null,
                            referral: d.code ? "other" : null,
                            referralOther: d.code
                        }))
                    }), [m, d.code, d.fo, f]);
                    var S = function() {
                            var t = (0, T.Z)(H().mark((function t() {
                                var n, r, l, a, o, i, c, m, p, d;
                                return H().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = s.getValues(), h = g, v = void 0, y = void 0, r = {
                                                1: v = ["course", "format"],
                                                2: [].concat(v, y = ["type", "campus", "cohort"]),
                                                3: [].concat(v, y, ["firstName", "lastName", "phoneNumber", "phoneCountry"])
                                            }[h], t.next = 4, s.trigger(r, {
                                                shouldFocus: !0
                                            });
                                        case 4:
                                            if (t.sent) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 7:
                                            return (0, xe.hp)(n), l = n.campus, a = n.course, o = e.cohorts.find((function(e) {
                                                return e.id === n.cohort
                                            })), i = {
                                                campus: l,
                                                cohort: n.cohort,
                                                course: a,
                                                date: null == o ? void 0 : o.start_at,
                                                email: n.email,
                                                emailOptIn: n.newsletter,
                                                financingOption: n.financingOption,
                                                firstName: n.firstName,
                                                format: n.format,
                                                gaConnector: (0, we.x_)(document.cookie || ""),
                                                ipCountry: f.countryName,
                                                lastName: n.lastName,
                                                phoneCountry: n.phoneCountry,
                                                phoneNumber: n.phoneNumber,
                                                referral: n.referral,
                                                referralOther: n.referralOther,
                                                remote: "rmt" === n.type && n.type,
                                                salesforceId: null == o ? void 0 : o.salesforce_id,
                                                whyAreYouInterested: n.interest
                                            }, c = (0, Ee.wT)(i, u, g, null == o ? void 0 : o.timezone), t.next = 14, (0, Ce.i)(2e3);
                                        case 14:
                                            if (m = t.sent, p = (0, ke.cQ)(g, c, m), J.Y_(g), t.prev = 17, 3 !== g) {
                                                t.next = 27;
                                                break
                                            }
                                            return t.next = 21, fetch("https://ih-api.herokuapp.com/graphql", p);
                                        case 21:
                                            if (!(d = t.sent).errors) {
                                                t.next = 24;
                                                break
                                            }
                                            throw d.errors;
                                        case 24:
                                            if (d.ok) {
                                                t.next = 26;
                                                break
                                            }
                                            throw new Error(d.statusText);
                                        case 26:
                                            k(!1);
                                        case 27:
                                            b((function(e) {
                                                return e + 1
                                            })), t.next = 34;
                                            break;
                                        case 30:
                                            t.prev = 30, t.t0 = t.catch(17), Ze().notify(t.t0, (function(e) {
                                                e.addMetadata("Query", p)
                                            })), J.Dh(l, a);
                                        case 34:
                                        case "end":
                                            return t.stop()
                                    }
                                    var h, v, y
                                }), t, null, [
                                    [17, 30]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        Z = function() {
                            var e = (0, T.Z)(H().mark((function e(t) {
                                return H().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return E(!0), C && k(!1), e.prev = 2, e.next = 5, S();
                                        case 5:
                                            E(!1), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(2), E(!1), k(!0);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 8]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return r.createElement(r.Fragment, null, r.createElement(l.xu, {
                        backgroundSize: "cover",
                        bgImage: ["/assets/headers/home-header-apply-mobile.jpg", null, "/assets/headers/home-header-apply-desktop.jpg"],
                        mb: [0, null, 3]
                    }, r.createElement(P.Z, {
                        isDarkBackground: !0,
                        pageName: o
                    }), r.createElement(l.kC, {
                        direction: ["column", null, null, "row"],
                        maxW: [null, null, null, "1296px"],
                        mx: [3, null, 4, "auto"],
                        pb: [0, null, null, 15],
                        pt: [3, null, null, 10]
                    }, r.createElement(l.kC, {
                        direction: "column",
                        maxWidth: [null, null, null, "56rem"]
                    }, r.createElement(l.xv, {
                        align: ["center", null, "left"],
                        as: "h1",
                        color: "white",
                        dangerouslySetInnerHTML: {
                            __html: c("home:home.newMainHeadline.title")
                        },
                        fontSize: ["3.8rem", null, null, "5.6rem"],
                        sx: {
                            "&>span": {
                                color: "electricBlue.100"
                            }
                        },
                        textStyle: "jumbo"
                    }), r.createElement(l.xv, {
                        align: ["center", null, "left"],
                        color: "white",
                        maxWidth: [null, null, null, "60rem"],
                        mb: [3, null, null, 4],
                        mt: 2,
                        textStyle: "body3"
                    }, c("home:home.newMainHeadline.subtitle")), r.createElement(l.kC, {
                        my: [8, null, 0],
                        spacing: 2
                    }, r.createElement(B(), {
                        height: 43,
                        width: 70
                    }), r.createElement(I(), {
                        height: 43,
                        width: 100
                    }), r.createElement(l.kC, {
                        direction: "column",
                        maxWidth: ["15.5rem", null, null, "17.8rem"]
                    }, r.createElement(l.xv, {
                        color: "white",
                        textStyle: "body1"
                    }, c("home:home.stats.reviews.score")), r.createElement(l.xv, {
                        color: "white",
                        mt: .5,
                        textStyle: "body6"
                    }, c("home:home.stats.reviews.description"))))), r.createElement(l.xu, {
                        borderRadius: "card",
                        d: ["none", null, "block"],
                        height: "100%",
                        ml: [0, null, 12],
                        mt: [3, null, null, 0],
                        overflow: "hidden",
                        width: ["100%", null, null, "48rem"]
                    }, r.createElement($.RV, s, r.createElement("form", null, 1 === g && r.createElement(Y, Object.assign({
                        isSubmitting: x,
                        onSubmitHandler: Z,
                        submitError: C
                    }, e)), 2 === g && r.createElement(le, Object.assign({
                        isSubmitting: x,
                        onSubmitHandler: Z,
                        submitError: C
                    }, e)), 3 === g && r.createElement(se, Object.assign({
                        isSubmitting: x,
                        onSubmitHandler: Z,
                        submitError: C
                    }, e)), 4 === g && r.createElement(he, Object.assign({
                        isSubmitting: x,
                        onSubmitHandler: Z,
                        submitError: C
                    }, e))))))), r.createElement(l.xu, {
                        d: ["block", null, "none"],
                        mb: 3,
                        p: 2
                    }, r.createElement(W.zx, {
                        as: R.rU,
                        state: {
                            form: {
                                applySource: o
                            }
                        },
                        to: (0, v.Gm)("allCourses/application"),
                        onClick: J.HK
                    }, null === (t = e.data) || void 0 === t || null === (n = t.datoCmsHomeHeaderApply) || void 0 === n ? void 0 : n.title)))
                },
                Oe = n(56028),
                Fe = function(e) {
                    return r.createElement(Oe.JO, Object.assign({
                        height: "173",
                        viewBox: "0 0 257 173",
                        width: "257"
                    }, e), r.createElement("path", {
                        clipRule: "evenodd",
                        d: "M99.8244 31.0415C101.089 35.9461 102.927 39.5909 104.775 42.8781C107.334 47.4285 110.099 51.0502 113.055 54.1941C119.415 60.9601 126.66 65.8888 140.473 69.7751L466.211 169.521C491.08 176.518 507.488 173.683 525.742 154.375L761.171 -94.6575C779.425 -113.966 776.552 -134.268 769.853 -160.663L674.943 -506.703C674.114 -509.918 673.441 -512.431 672.433 -514.697C670.184 -519.757 667.775 -523.33 664.11 -527.207C658.802 -532.822 653.524 -538.345 638.481 -542.577L320.145 -641.75C295.277 -648.746 269.084 -653.794 250.83 -634.486L14.8009 -383.924C-3.45272 -364.615 -2.159 -338.149 4.5401 -311.754L99.8244 31.0415Z",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    }))
                },
                Ie = function(e) {
                    return r.createElement(Oe.JO, Object.assign({
                        height: "378",
                        viewBox: "0 0 573 378",
                        width: "573"
                    }, e), r.createElement("path", {
                        clipRule: "evenodd",
                        d: "M173.361 202.312C175.252 207.984 177.714 212.126 180.159 215.846C183.545 220.995 187.096 225.033 190.831 228.492C198.871 235.938 207.8 241.147 224.37 244.588L615.79 335.272C645.621 341.467 664.691 336.779 684.575 312.536L941.028 -0.139931C960.912 -24.3828 955.86 -48.0583 945.806 -78.5945L805.652 -478.351C804.412 -482.069 803.413 -484.973 802.041 -487.56C798.978 -493.334 795.85 -497.344 791.219 -501.609C784.512 -507.785 777.848 -513.856 759.803 -517.603L377.139 -608.221C347.307 -614.416 316.078 -618.206 296.194 -593.964L39.1612 -279.437C19.2775 -255.194 22.9792 -224.128 33.034 -193.592L173.361 202.312Z",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    }))
                },
                Le = function(e) {
                    var t = (0, O.Sx)([!0, !0, !0, !1]) ? Fe : Ie;
                    return r.createElement(t, Object.assign({
                        position: "absolute",
                        right: 0,
                        top: 0,
                        zIndex: "hide"
                    }, e))
                },
                Be = n(31138),
                _e = n(16779),
                Me = n(82965),
                Ae = n(36099),
                Te = n(64942),
                ze = n(54975),
                He = n(63733),
                We = n(43766),
                Re = n(19950);

            function Pe() {
                (0, Re.t)({
                    event: "gaEvent",
                    eventCategory: "interest",
                    eventAction: "click button",
                    eventLabel: "snackbar::learn more"
                })
            }
            var De = n(14520),
                Ge = function(e) {
                    var t = (0, a.$)().t;
                    return r.createElement(l.fG, {
                        onClick: Pe
                    }, r.createElement(l.kC, Object.assign({
                        bgColor: "green.10",
                        borderRadius: [0, null, null, "card"],
                        justify: "space-between",
                        maxW: [null, null, null, "1296px"],
                        mx: "auto",
                        p: 1
                    }, e), r.createElement(l.M5, null, r.createElement(l.xu, {
                        bgColor: "green.100",
                        borderRadius: "card",
                        color: "white",
                        px: 1,
                        py: 1.5
                    }, r.createElement(l.xv, {
                        color: "white",
                        textStyle: "body4"
                    }, t("course-web-dev-rmt:snackbar.status").toUpperCase())), r.createElement(l.xv, {
                        color: "darkBlue.100",
                        ml: 4,
                        textStyle: "body4"
                    }, r.createElement(He.c, {
                        components: [r.createElement(l.xv, {
                            as: "span",
                            color: "green.100",
                            fontWeight: "bold"
                        }, "Free Javascript Course")],
                        defaults: "Test out your coding skills on our new <0>Free Javascript Course</0> and see how you can also be a developer",
                        i18nKey: t("course-web-dev-rmt:snackbar.description")
                    }))), r.createElement(l.AB, {
                        href: De.L.shortCourseJs
                    }, r.createElement(We.XC, {
                        boxSize: 20,
                        color: "darkBlue.100",
                        display: ["inline", null, "none"],
                        my: "auto"
                    }), r.createElement(W.zx, {
                        colorScheme: "quaternary",
                        display: ["none", null, "inline-block"],
                        mr: 4,
                        variant: "link",
                        w: "auto"
                    }, t("course-web-dev-rmt:snackbar.linkText")))))
                },
                qe = function(e) {
                    var t = e.pageContext,
                        n = t.pageName,
                        o = t.cohorts,
                        i = (0, a.$)(),
                        c = i.t,
                        u = i.i18n.language,
                        s = (0, Ce.L)("template"),
                        m = (0, Ae.Z)(),
                        p = m[0],
                        d = m[1],
                        f = (0, Te.ST)(e.data.allDatoCmsAssetsByPage),
                        h = (0, ye.Z)().userLocation,
                        g = "US" === h.country && "en" === u;
                    return r.createElement(r.Fragment, null, "FR" === (null == h ? void 0 : h.country) && r.createElement(ze.Z, {
                        type: "apprenticeship"
                    }), "NL" === (null == h ? void 0 : h.country) && r.createElement(ze.Z, {
                        type: "stap"
                    }), "DE" === (null == h ? void 0 : h.country) && r.createElement(ze.Z, {
                        type: "hamburg"
                    }), g && s ? r.createElement(Ne, {
                        cohorts: o,
                        data: e.data,
                        pageName: n
                    }) : r.createElement(r.Fragment, null, r.createElement(Le, {
                        color: "electricBlue.10"
                    }), r.createElement(l.xu, {
                        maxW: [null, null, null, "1296px"],
                        mb: [null, null, null, 6],
                        mx: [null, null, 4, "auto"]
                    }, r.createElement(P.Z, {
                        pageName: n
                    })), r.createElement(A, {
                        image: f.headerdesktop,
                        mb: [null, null, null, 6],
                        scrollToTarget: p
                    })), r.createElement(Ge, null), r.createElement(l.xu, {
                        maxW: [null, null, null, "1296px"],
                        mb: [3, null, null, 6],
                        mx: [null, null, 4, "auto"]
                    }, r.createElement(j.Z, null)), r.createElement(S, {
                        images: f
                    }), r.createElement(Z.Z, {
                        mb: [6, null, null, 7],
                        ref: d
                    }), r.createElement(l.xu, {
                        maxW: [null, null, null, "1296px"],
                        mb: [null, null, null, 6],
                        mx: [null, null, 4, "auto"]
                    }, r.createElement(Be.Z, {
                        cohorts: o
                    })), r.createElement(l.xu, {
                        maxW: [null, null, null, "1296px"],
                        mb: [null, null, null, 6],
                        mx: [null, null, 4, "auto"]
                    }, r.createElement(N.Z, null)), r.createElement(l.xu, {
                        maxW: [null, null, null, "1296px"],
                        mb: [null, null, null, 6],
                        mx: [null, null, 4, "auto"]
                    }, r.createElement(_e.Z, {
                        subtitle: c("home:home.hireTalent.description"),
                        title: c("home:home.hireTalent.title"),
                        viewButton: !0
                    })), r.createElement(Me.Z, {
                        page: "",
                        showLinks: !0
                    }))
                };
            var $e = function(e) {
                return r.createElement(qe, e)
            }
        },
        24456: function(e, t, n) {
            var r = n(97786),
                l = n(10611);
            e.exports = function(e, t, n, a) {
                return l(e, t, n(r(e, t)), a)
            }
        },
        57043: function(e, t, n) {
            var r = n(62488),
                l = n(21078),
                a = n(278),
                o = n(1469);
            e.exports = function() {
                var e = arguments.length;
                if (!e) return [];
                for (var t = Array(e - 1), n = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                return r(o(n) ? a(n) : [n], l(t, 1))
            }
        },
        11255: function(e, t, n) {
            var r = n(92822)("concat", n(57043));
            r.placeholder = n(69306), e.exports = r
        },
        99224: function(e, t, n) {
            var r = n(92822)("defaultTo", n(76692));
            r.placeholder = n(69306), e.exports = r
        },
        53568: function(e, t, n) {
            var r = n(92822)("findIndex", n(30998));
            r.placeholder = n(69306), e.exports = r
        },
        43002: function(e, t, n) {
            var r = n(92822)("startCase", n(18029), n(69087));
            r.placeholder = n(69306), e.exports = r
        },
        65068: function(e, t, n) {
            var r = n(92822)("take", n(69572));
            r.placeholder = n(69306), e.exports = r
        },
        51941: function(e, t, n) {
            e.exports = n(71929)
        },
        71929: function(e, t, n) {
            var r = n(92822)("takeRight", n(69579));
            r.placeholder = n(69306), e.exports = r
        },
        83049: function(e, t, n) {
            var r = n(92822)("uniqBy", n(45578));
            r.placeholder = n(69306), e.exports = r
        },
        69898: function(e, t, n) {
            var r = n(92822)("update", n(93425));
            r.placeholder = n(69306), e.exports = r
        },
        18029: function(e, t, n) {
            var r = n(35393),
                l = n(11700),
                a = r((function(e, t, n) {
                    return e + (n ? " " : "") + l(t)
                }));
            e.exports = a
        },
        69572: function(e, t, n) {
            var r = n(14259),
                l = n(40554);
            e.exports = function(e, t, n) {
                return e && e.length ? (t = n || void 0 === t ? 1 : l(t), r(e, 0, t < 0 ? 0 : t)) : []
            }
        },
        69579: function(e, t, n) {
            var r = n(14259),
                l = n(40554);
            e.exports = function(e, t, n) {
                var a = null == e ? 0 : e.length;
                return a ? (t = n || void 0 === t ? 1 : l(t), r(e, (t = a - t) < 0 ? 0 : t, a)) : []
            }
        },
        45578: function(e, t, n) {
            var r = n(67206),
                l = n(45652);
            e.exports = function(e, t) {
                return e && e.length ? l(e, r(t, 2)) : []
            }
        },
        93425: function(e, t, n) {
            var r = n(24456),
                l = n(54290);
            e.exports = function(e, t, n) {
                return null == e ? e : r(e, t, l(n))
            }
        }
    }
]);
//# sourceMappingURL=component---src-template-home-index-tsx-32f2bc3211869f8603ab.js.map