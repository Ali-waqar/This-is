(self.webpackChunkblog = self.webpackChunkblog || []).push([
    [6278], {
        99860: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var o = n(67294),
                r = n(6125),
                a = n(19950);
            var i = n(33204),
                c = n(64121),
                u = n(16361),
                s = i.default.a.withConfig({
                    displayName: "styles__BlogCard",
                    componentId: "sc-6evowp-0"
                })(["background:", ";border-radius:0.4rem;border:0.1rem solid ", ";box-shadow:0rem 0.4rem 0.8rem ", ";height:100%;text-decoration:none;transition:0.3s ease-in-out box-shadow;& > article{border-radius:0.4rem 0.4rem 0 0;overflow:hidden;position:relative;& > div{border-radius:0.4rem 0.4rem 0 0;max-height:18.5rem;width:100%;object-fit:cover;transform:scale(1.05);transition:transform 0.3s ease-in-out;}}&:hover{box-shadow:0rem 0.4rem 0.8rem ", ";& > article > div{border-radius:0.6rem;transform:scale(1.15);}}&:active{box-shadow:0rem 0.4rem 1rem ", ";}& > div{padding:1.6rem;}@media (max-width:", "){min-height:28.4rem;width:100%;}"], c.Z.palette.white, c.Z.palette.darkBlueTransparent("0.05"), c.Z.palette.blackTransparent("0.06"), c.Z.palette.boxShadow, c.Z.palette.boxShadow, c.Z.resolutions.mobileL),
                l = (0, i.default)(u.w).withConfig({
                    displayName: "styles__Text5",
                    componentId: "sc-6evowp-1"
                })(["color:", ";font-size:2rem;font-weight:500;line-height:130%;margin-bottom:1.2rem;@media (max-width:", "){margin-bottom:0.9rem;}"], c.Z.palette.darkBlue, c.Z.resolutions.mobileL),
                f = i.default.span.withConfig({
                    displayName: "styles__Url",
                    componentId: "sc-6evowp-2"
                })(["color:", ";cursor:pointer;font-size:1.6rem;font-weight:500;line-height:130%;text-decoration:none;@media (max-width:", "){font-size:1.4rem;}"], c.Z.palette.lightBlue, c.Z.resolutions.mobileL),
                d = function(e) {
                    var t = e.headerImage,
                        n = e.title,
                        i = e.url,
                        c = e.linkText,
                        u = e.category;
                    return o.createElement(s, {
                        className: "blog-card",
                        href: i,
                        onClick: function() {
                            ! function(e, t) {
                                (0, a.t)({
                                    event: "gaEvent",
                                    eventCategory: "navigation",
                                    eventAction: "click card",
                                    eventLabel: "blog articles::" + e + "::" + t.toLowerCase()
                                })
                            }(n, u)
                        }
                    }, o.createElement("article", null, t && o.createElement(r.G, {
                        alt: t.alt,
                        image: t.gatsbyImageData,
                        title: t.title
                    })), o.createElement("div", null, o.createElement(l, {
                        as: "p"
                    }, n), o.createElement(f, null, c)))
                }
        },
        49527: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var o = n(12980),
                r = n.n(o),
                a = n(40104),
                i = n.n(a),
                c = n(27183),
                u = n.n(c),
                s = n(46898),
                l = n.n(s),
                f = n(67294),
                d = n(25444),
                p = n(9680);

            function m(e) {
                var t = (0, p.lO)().locale,
                    n = (0, d.K2)("1776108042");
                return (0, f.useMemo)((function() {
                    return l()(u()([], "allDatoCmsBlogArticle.edges"), i()((function(n) {
                        var o, r = "br" === t ? "pt-BR" : t,
                            a = n.node.locale === r && n.node.language.code.toLowerCase() === t;
                        a && e && (a = n.node.mainCategory.code === e || (null === (o = n.node.secondaryCategory) || void 0 === o ? void 0 : o.code) === e);
                        return a
                    })), r()("node"))(n)
                }), [n, t, e])
            }
        },
        32731: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return k
                }
            });
            var o = n(78085),
                r = n.n(o),
                a = n(58809),
                i = n.n(a),
                c = n(74613),
                u = n.n(c),
                s = n(40104),
                l = n.n(s),
                f = n(12980),
                d = n.n(f),
                p = n(27183),
                m = n.n(p),
                v = n(88846),
                g = n.n(v),
                h = n(37453),
                x = n.n(h),
                b = n(46898),
                w = n.n(b),
                y = n(67294),
                C = n(25444),
                B = n(9680),
                Z = {
                    allDatoCmsCity: "city",
                    allDatoCmsCourse: "course",
                    allDatoCmsBlogCategory: "category"
                };

            function k() {
                var e = (0, B.lO)().locale,
                    t = (0, C.K2)("3723255027");
                return (0, y.useMemo)((function() {
                    return w()(x(), g()((function(t) {
                        var n = t[0],
                            o = t[1];
                        return w()(m()([], "edges"), d()("node"), l()({
                            locale: "br" === e ? "pt-BR" : e
                        }), g()(u()({
                            type: Z[n]
                        })), i()("code"))(o)
                    })), r()(u(), {}))(t)
                }), [t, e])
            }
        },
        66656: function(e) {
            var t = {
                    wd: "courseWeb",
                    ux: "courseUxui",
                    da: "courseData",
                    cy: "courseCysec",
                    js: "shortCourseJs",
                    allcourses: "allCourses",
                    ams: "campusAms",
                    bcn: "campusBcn",
                    ber: "campusBer",
                    bod: "campusBod",
                    dus: "campusDus",
                    lis: "campusLis",
                    lon: "campusLon",
                    mad: "campusMad",
                    mex: "campusMex",
                    mia: "campusMia",
                    nyc: "campusNyc",
                    par: "campusPar",
                    sao: "campusSao",
                    tpa: "campusTpa",
                    rmt: "campusRmt",
                    glo: "allCampuses",
                    financing_options: "financing",
                    outcomes: "careerServices",
                    alumni: "alumni"
                },
                n = {
                    wd: "web",
                    ux: "uxui",
                    da: "data",
                    cy: "cysec",
                    allcourses: "allCourses"
                },
                o = {
                    web: "WD",
                    uxui: "UX",
                    data: "DA",
                    cysec: "CY"
                };
            e.exports = {
                datoCategoryToWebUrl: function(e) {
                    return t[e.toLowerCase()]
                },
                datoCategoryToI18n: function(e) {
                    return n[e.toLowerCase()]
                },
                languageToDato: function(e) {
                    return "br" === e ? "pt-BR" : e
                },
                webCategoryToDato: function(e) {
                    return o[e.toLowerCase()]
                }
            }
        },
        86556: function(e, t, n) {
            var o = n(89465),
                r = n(77813);
            e.exports = function(e, t, n) {
                (void 0 !== n && !r(e[t], n) || void 0 === n && !(t in e)) && o(e, t, n)
            }
        },
        80760: function(e, t, n) {
            var o = n(89881);
            e.exports = function(e, t) {
                var n = [];
                return o(e, (function(e, o, r) {
                    t(e, o, r) && n.push(e)
                })), n
            }
        },
        42980: function(e, t, n) {
            var o = n(46384),
                r = n(86556),
                a = n(28483),
                i = n(59783),
                c = n(13218),
                u = n(81704),
                s = n(36390);
            e.exports = function e(t, n, l, f, d) {
                t !== n && a(n, (function(a, u) {
                    if (d || (d = new o), c(a)) i(t, n, u, l, e, f, d);
                    else {
                        var p = f ? f(s(t, u), a, u + "", t, n, d) : void 0;
                        void 0 === p && (p = a), r(t, u, p)
                    }
                }), u)
            }
        },
        59783: function(e, t, n) {
            var o = n(86556),
                r = n(64626),
                a = n(77133),
                i = n(278),
                c = n(38517),
                u = n(35694),
                s = n(1469),
                l = n(29246),
                f = n(44144),
                d = n(23560),
                p = n(13218),
                m = n(68630),
                v = n(36719),
                g = n(36390),
                h = n(59881);
            e.exports = function(e, t, n, x, b, w, y) {
                var C = g(e, n),
                    B = g(t, n),
                    Z = y.get(B);
                if (Z) o(e, n, Z);
                else {
                    var k = w ? w(C, B, n + "", e, t, y) : void 0,
                        D = void 0 === k;
                    if (D) {
                        var L = s(B),
                            _ = !L && f(B),
                            E = !L && !_ && v(B);
                        k = B, L || _ || E ? s(C) ? k = C : l(C) ? k = i(C) : _ ? (D = !1, k = r(B, !0)) : E ? (D = !1, k = a(B, !0)) : k = [] : m(B) || u(B) ? (k = C, u(C) ? k = h(C) : p(C) && !d(C) || (k = c(B))) : D = !1
                    }
                    D && (y.set(B, k), b(k, B, x, w, y), y.delete(B)), o(e, n, k)
                }
            }
        },
        9841: function(e, t, n) {
            var o = n(33448);
            e.exports = function(e) {
                return "number" == typeof e ? e : o(e) ? NaN : +e
            }
        },
        48969: function(e, t, n) {
            var o = n(29932);
            e.exports = function(e, t) {
                return o(t, (function(t) {
                    return [t, e[t]]
                }))
            }
        },
        21463: function(e, t, n) {
            var o = n(5976),
                r = n(16612);
            e.exports = function(e) {
                return o((function(t, n) {
                    var o = -1,
                        a = n.length,
                        i = a > 1 ? n[a - 1] : void 0,
                        c = a > 2 ? n[2] : void 0;
                    for (i = e.length > 3 && "function" == typeof i ? (a--, i) : void 0, c && r(n[0], n[1], c) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++o < a;) {
                        var u = n[o];
                        u && e(t, u, o, i)
                    }
                    return t
                }))
            }
        },
        67273: function(e, t, n) {
            var o = n(9841),
                r = n(80531);
            e.exports = function(e, t) {
                return function(n, a) {
                    var i;
                    if (void 0 === n && void 0 === a) return t;
                    if (void 0 !== n && (i = n), void 0 !== a) {
                        if (void 0 === i) return a;
                        "string" == typeof n || "string" == typeof a ? (n = r(n), a = r(a)) : (n = o(n), a = o(a)), i = e(n, a)
                    }
                    return i
                }
            }
        },
        13866: function(e, t, n) {
            var o = n(48969),
                r = n(64160),
                a = n(68776),
                i = n(99294);
            e.exports = function(e) {
                return function(t) {
                    var n = r(t);
                    return "[object Map]" == n ? a(t) : "[object Set]" == n ? i(t) : o(t, e(t))
                }
            }
        },
        36390: function(e) {
            e.exports = function(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
            }
        },
        99294: function(e) {
            e.exports = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = [e, e]
                })), n
            }
        },
        20874: function(e, t, n) {
            var o = n(67273)((function(e, t) {
                return e + t
            }), 0);
            e.exports = o
        },
        63105: function(e, t, n) {
            var o = n(34963),
                r = n(80760),
                a = n(67206),
                i = n(1469);
            e.exports = function(e, t) {
                return (i(e) ? o : r)(e, a(t, 3))
            }
        },
        74432: function(e, t, n) {
            var o = n(92822)("add", n(20874));
            o.placeholder = n(69306), e.exports = o
        },
        40104: function(e, t, n) {
            var o = n(92822)("filter", n(63105));
            o.placeholder = n(69306), e.exports = o
        },
        58809: function(e, t, n) {
            var o = n(92822)("keyBy", n(24350));
            o.placeholder = n(69306), e.exports = o
        },
        74613: function(e, t, n) {
            var o = n(92822)("merge", n(82492));
            o.placeholder = n(69306), e.exports = o
        },
        12980: function(e, t, n) {
            e.exports = n(88846)
        },
        37453: function(e, t, n) {
            var o = n(92822)("toPairs", n(93220), n(69087));
            o.placeholder = n(69306), e.exports = o
        },
        29246: function(e, t, n) {
            var o = n(98612),
                r = n(37005);
            e.exports = function(e) {
                return r(e) && o(e)
            }
        },
        24350: function(e, t, n) {
            var o = n(89465),
                r = n(55189)((function(e, t, n) {
                    o(e, n, t)
                }));
            e.exports = r
        },
        82492: function(e, t, n) {
            var o = n(42980),
                r = n(21463)((function(e, t, n) {
                    o(e, t, n)
                }));
            e.exports = r
        },
        94885: function(e) {
            e.exports = function(e) {
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return !e.call(this);
                        case 1:
                            return !e.call(this, t[0]);
                        case 2:
                            return !e.call(this, t[0], t[1]);
                        case 3:
                            return !e.call(this, t[0], t[1], t[2])
                    }
                    return !e.apply(this, t)
                }
            }
        },
        93220: function(e, t, n) {
            var o = n(13866)(n(3674));
            e.exports = o
        },
        59881: function(e, t, n) {
            var o = n(98363),
                r = n(81704);
            e.exports = function(e) {
                return o(e, r(e))
            }
        }
    }
]);
//# sourceMappingURL=34ec015c38357530dd18ff7917e42ed0576b1774-9440b582f6b964f0eea6.js.map