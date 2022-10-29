(self.webpackChunkblog = self.webpackChunkblog || []).push([
    [5173], {
        78159: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return _
                }
            });
            var r = n(74432),
                a = n.n(r),
                o = n(77606),
                i = n.n(o),
                l = n(5892),
                s = n.n(l),
                c = n(67294),
                u = n(28900),
                m = n(96901),
                d = n(90014),
                p = n(25444),
                g = n(19950);

            function f() {
                (0, g.t)({
                    event: "gaEvent",
                    eventCategory: "navigation",
                    eventAction: "click button",
                    eventLabel: "blog articles::view more"
                })
            }
            var h = n(66656),
                b = n(94453),
                w = n(99860),
                v = n(32806),
                y = n(33204),
                k = n(49558),
                C = n(64121),
                x = (0, y.default)(k.Z).withConfig({
                    displayName: "styles",
                    componentId: "sc-1j0x6lk-0"
                })(["margin-bottom:6.4rem;margin-top:4.8rem;text-align:center;h2{text-align:left;}.related-posts{display:flex;margin-bottom:4.2rem;margin-top:3.2rem;text-align:left;a{cursor:pointer;width:calc((100% - 3.2rem) / 3);}}.view-more{border:0.2rem solid ", ";border-radius:", ";color:", ";display:inline-block;font-size:1.6rem;line-height:125%;padding:1.2rem 6.4rem;text-decoration:none;}@media (max-width:", "){.related-posts{flex-wrap:wrap;a{margin-bottom:2.4rem;width:100%;&:last-child{margin-bottom:0;}}}.view-more{width:100%;}}"], C.Z.palette.darkBlue, C.Z.borderRadius, C.Z.palette.darkBlue, C.Z.resolutions.mobileL),
                E = n(49527),
                L = n(32731),
                Z = {
                    br: "br/pt",
                    de: "de/de",
                    en: "us/en",
                    es: "es/es",
                    fr: "fr/fr",
                    nl: "nl/nl",
                    pt: "pt/pt"
                },
                I = ["managing-the-cybersecurity-risks-of-remote-work", "how-to-begin-a-career-in-cybersecurity-without-previous-knowledge", "what-is-employability", "comment-se-reorienter-vers-une-nouvelle-carriere-et-se-lancer-dans-la-tech", "why-you-deserve-a-job-you-love-not-just-one-that-pays-the-bills", "climbing-tech-career-ladder", "understanding-design-what-are-design-sprints", "when-is-the-best-time-to-learn-how-to-code", "5-most-infamous-hacks-all-time", "bad-job-interviews-survival-guide", "ux-strategy-guide-conceptualizing-and-designing-new-digital-products", "red-flags-to-look-for-in-tech-job-postings", "top-twenty-five-books-for-techies", "the-difference-between-java-and-javascript", "7-pioneer-programmers-you-hadn-t-heard-of", "making-part-time-education-work-for-you"],
                T = function(e, t) {
                    var n = e.articleId,
                        r = e.category,
                        o = (0, u.$)(),
                        l = o.t,
                        g = o.i18n.language,
                        y = (0, c.useState)(6),
                        k = y[0],
                        C = y[1],
                        T = (0, E.Z)(r);
                    n && (T = s()({
                        id: n
                    }, T));
                    var _ = (0, L.Z)(),
                        j = function(e, t) {
                            var n = (0, b.Gm)((0, h.datoCategoryToWebUrl)(t), g);
                            return I.includes(e) ? n + "/" + e : "https://www.ironhack.com/" + Z[g] + "/blog/" + e
                        };
                    return i()(T) ? null : c.createElement(x, {
                        ref: t
                    }, c.createElement(v.wo, {
                        as: "h2"
                    }, "string" == typeof r ? l("blog:blog.mainHeadline.blogPostSample.relatedPostsTitle", {
                        category: _[r].description
                    }) : l("blog:blog.mainHeadline.blogPostSample.defaultTitle")), c.createElement(m.MI, {
                        columns: [1, null, null, 3],
                        my: 4,
                        spacing: 4
                    }, T.map((function(e, t) {
                        return t < k ? c.createElement(w.Z, {
                            category: e.mainCategory.code,
                            headerImage: e.headerImage,
                            key: e.id,
                            linkText: l("blog:blog.blogCard.linkText"),
                            title: e.title,
                            url: j(e.slugTitle, e.mainCategory.code)
                        }) : c.createElement("div", {
                            key: e.id,
                            style: {
                                display: "none"
                            }
                        }, c.createElement(w.Z, {
                            category: e.mainCategory.code,
                            headerImage: e.headerImage,
                            key: e.id,
                            linkText: l("blog:blog.blogCard.linkText"),
                            title: e.title,
                            url: j(e.slugTitle, e.mainCategory.code)
                        }))
                    }))), T.length > k ? c.createElement(d.zx, {
                        colorScheme: "bunker",
                        onClick: function() {
                            f(), C(a()(6))
                        },
                        variant: "outline"
                    }, l("blog:blog.readAll.linkText")) : c.createElement(m.rU, {
                        _hover: {
                            textDecoration: "none"
                        },
                        as: p.rU,
                        to: (0, b.Gm)("blog", g),
                        variant: "unstyled"
                    }, c.createElement(d.zx, {
                        colorScheme: "bunker",
                        onClick: function() {
                            f()
                        },
                        variant: "outline"
                    }, l("blog:blog.readAll.linkText"))))
                },
                _ = (0, c.forwardRef)(T)
        },
        31138: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return V
                }
            });
            var r = n(63366),
                a = n(21146),
                o = n.n(a),
                i = n(44236),
                l = n.n(i),
                s = n(21711),
                c = n.n(s),
                u = n(7594),
                m = n.n(u),
                d = n(84063),
                p = n.n(d),
                g = n(99224),
                f = n.n(g),
                h = n(11255),
                b = n.n(h),
                w = n(69898),
                v = n.n(w),
                y = n(8816),
                k = n.n(y),
                C = n(78085),
                x = n.n(C),
                E = n(67294),
                L = n(28900),
                Z = n(20637),
                I = n(94453),
                T = n(37060),
                _ = n(49558),
                j = n(32806),
                B = n(33204),
                N = n(64121),
                z = n(10702),
                S = B.default.section.withConfig({
                    displayName: "styles__CampusListCards",
                    componentId: "sc-10uea17-0"
                })(["display:flex;flex-wrap:wrap;justify-content:flex-start;padding-bottom:4rem;a:nth-child(3n + 2){margin-left:calc((2.1333rem * 3) / 2);margin-right:calc((2.1333rem * 3) / 2);}@media (max-width:", "){a:nth-child(3n + 2){margin-left:0;margin-right:0;}}"], N.Z.resolutions.mobileL),
                A = (0, B.default)(z.w).withConfig({
                    displayName: "styles__SectionTitle",
                    componentId: "sc-10uea17-1"
                })(["margin-bottom:-1.6rem;margin-top:3.2rem;&.margin-big{margin-top:4.8rem;}"]),
                P = n(23905),
                R = n(51496),
                U = n(96901),
                G = n(7713),
                M = n(16361),
                O = (0, B.default)(M.w).withConfig({
                    displayName: "styles__Text5",
                    componentId: "sc-hmel72-0"
                })(["margin-top:0.4rem;color:", ";& > b{color:", ";}"], N.Z.palette.darkBlueTransparent("0.8"), N.Z.palette.darkBlue),
                D = B.default.a.withConfig({
                    displayName: "styles__StyledCampusCard",
                    componentId: "sc-hmel72-1"
                })(["background:", ";border-radius:0.6rem;box-shadow:0 0.8rem 1.6rem rgba(0,0,0,0.1);margin-top:3.2rem;text-decoration:none;width:calc(33% - (3.2rem * 2 / 3));& > article{border-radius:0.6rem 0.6rem 0 0;overflow:hidden;position:relative;& > img{border-radius:0.6rem 0.6rem 0 0;height:20rem;object-fit:cover;transform:scale(1.05);transition:transform 0.3s ease-in-out;width:100%;}}.new{background:", ";color:", ";border-radius:", ";display:none;font-size:1.4rem;font-weight:700;left:0.8rem;letter-spacing:0.02rem;line-height:140%;padding:0.6rem;position:absolute;text-transform:uppercase;top:0.8rem;z-index:100;}&.isNew{.new{display:block;}}&:hover > article > img{border-radius:0.6rem;transform:scale(1.15);}& > div{padding:1.6rem 2.4rem;& > p{margin-top:0.4rem;color:", ";}}@media (max-width:", "){margin-top:2.4rem;width:100%;.new{font-size:1.2rem;}}"], N.Z.palette.white, N.Z.palette.lightBlue, N.Z.palette.white, N.Z.borderRadius, N.Z.palette.darkBlueTransparent("0.8"), N.Z.resolutions.mobileL),
                F = B.default.div.withConfig({
                    displayName: "styles__ImageCss",
                    componentId: "sc-hmel72-2"
                })(["&:hover{border-radius:0.6rem;transform:scale(1.15);transition:transform 0.3s ease-in-out;}"]),
                H = n(19950);
            var W = (0, P.Z)()((function(e) {
                    var t = e.campus,
                        n = e.campusClass,
                        r = e.showCourses,
                        a = e.showLinks,
                        o = e.t;
                    return E.createElement(D, {
                        className: n,
                        href: t.url,
                        key: t.name,
                        onClick: function() {
                            ! function(e) {
                                (0, H.t)({
                                    event: "gaEvent",
                                    eventCategory: "interest",
                                    eventAction: "click card",
                                    eventLabel: "RMT" === e.code ? "study online::remote" : "study in person::" + e.code.toLowerCase()
                                })
                            }(t)
                        }
                    }, E.createElement("article", null, E.createElement("span", {
                        className: "new"
                    }, o("campus-list:campusList.new")), E.createElement(F, null, E.createElement(R.Z, {
                        alt: "Ironhack " + t.name,
                        fluid: t.image,
                        style: {
                            height: "20rem"
                        }
                    }))), E.createElement("div", null, E.createElement(G.OA, {
                        as: "h3"
                    }, t.name + ", " + t.country), r && E.createElement(O, {
                        as: "p"
                    }, o("campus-list:campusList.courses"), " ", t.courses.join(", ")), E.createElement(O, {
                        as: "p"
                    }, o("campus-list:campusList.coursesIn"), " ", E.createElement("b", null, t.languages.join(", "))), a && E.createElement(U.rU, {
                        borderBottom: "1px",
                        borderColor: "electricBlue.10",
                        color: "electricBlue.100",
                        fontSize: "small",
                        fontWeight: "bold",
                        pb: .25,
                        to: t.url
                    }, o("campus-list:campusList.cta"))))
                })),
                $ = n(58881),
                q = n(31764),
                J = ["courseCode", "cohorts", "locale", "showLinks"],
                K = x().convert({
                    cap: !1
                }),
                Q = function(e, t) {
                    var n = e.courseCode,
                        a = void 0 === n ? "" : n,
                        i = e.cohorts,
                        s = e.locale,
                        u = void 0 === s ? "en" : s,
                        d = e.showLinks,
                        g = (0, r.Z)(e, J),
                        h = (0, L.$)().t,
                        w = new Z.Z(u).contactInformationByLanguage(),
                        y = k()(x()((function(e, t) {
                            return e = v()(t.campus_code + ".languages", (function(e) {
                                return b()(t.language, f()([], e))
                            }), e), e = v()(t.campus_code + ".courses", (function(e) {
                                return b()(t.course_code.slice(0, -2), f()([], e))
                            }), e)
                        }), {}), K((function(e, t, n) {
                            var r, o, s = t.languages,
                                u = t.courses,
                                d = p()((function(e) {
                                    return e.campus.code.toLowerCase() === n
                                }), w);
                            return m()(d) && !c()(d) && i.some((function(e) {
                                return e.campus_code === d.campus.code.toLowerCase() && e.course_code.slice(0, -2) === a && !["dus", "bod", "tpa", "nyc"].includes(e.campus_code)
                            })) && (e[n] = {
                                country: d.country,
                                name: d.campus.description,
                                code: d.campus.code,
                                url: (r = "campus" + (0, T.kC)(n), o = "course" + (0, T.kC)(a), a.length > 0 ? (0, I.Li)(o, r) : (0, I.Gm)(r)),
                                languages: l()(s).map((function(e) {
                                    return h("languages:languages." + e)
                                })),
                                courses: l()(u).map((function(e) {
                                    return h("course-list:courseList." + e + ".title")
                                })),
                                isNew: d.campus.isNew,
                                image: d.sliderImages[0].fluid
                            }), e
                        }), {}))(i),
                        C = o()((function(e) {
                            return "rmt" === e.code.toLowerCase() ? "online" : (0, q.F8)(e.code) ? "virtual" : "inPerson"
                        }), y);
                    return E.createElement(_.Z, Object.assign({}, g, {
                        ref: t
                    }), E.createElement(j.wo, {
                        as: "h2"
                    }, h("campus-list:campusList.title")), ["online", "virtual", "inPerson"].map((function(e) {
                        return C[e] ? E.createElement(E.Fragment, null, E.createElement(A, {
                            as: "h3"
                        }, h("campus-list:campusList.format." + e)), E.createElement(S, null, C[e].map((function(e) {
                            return E.createElement(W, {
                                campus: e,
                                key: e.code,
                                showCourse: "" === a,
                                showLinks: d
                            })
                        })))) : null
                    })), a && E.createElement($.Z, null, h("campus-list:campusList.selectCampusInfo", {
                        course: h("course-list:courseList." + a + ".title")
                    })))
                },
                V = (0, E.forwardRef)(Q)
        },
        58881: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(63366),
                a = n(67294),
                o = n(85367),
                i = n.n(o),
                l = n(33204),
                s = n(64121),
                c = l.default.section.withConfig({
                    displayName: "styles",
                    componentId: "sc-z81ms7-0"
                })(["align-items:baseline;background:", ";border-radius:", ";display:flex;padding:1.6rem;svg{margin-right:1.8rem;}"], s.Z.palette.darkBlueTransparent("0.05"), s.Z.borderRadius),
                u = n(7713),
                m = ["children"];
            var d = function(e) {
                var t = e.children,
                    n = (0, r.Z)(e, m);
                return a.createElement(c, n, a.createElement(i(), null), a.createElement(u.l5, {
                    as: "p"
                }, t))
            }
        },
        1196: function(e) {
            e.exports = function(e, t, n) {
                for (var r = -1, a = null == e ? 0 : e.length; ++r < a;)
                    if (n(t, e[r])) return !0;
                return !1
            }
        },
        45652: function(e, t, n) {
            var r = n(88668),
                a = n(47443),
                o = n(1196),
                i = n(74757),
                l = n(23593),
                s = n(21814);
            e.exports = function(e, t, n) {
                var c = -1,
                    u = a,
                    m = e.length,
                    d = !0,
                    p = [],
                    g = p;
                if (n) d = !1, u = o;
                else if (m >= 200) {
                    var f = t ? null : l(e);
                    if (f) return s(f);
                    d = !1, u = i, g = new r
                } else g = t ? [] : p;
                e: for (; ++c < m;) {
                    var h = e[c],
                        b = t ? t(h) : h;
                    if (h = n || 0 !== h ? h : 0, d && b == b) {
                        for (var w = g.length; w--;)
                            if (g[w] === b) continue e;
                        t && g.push(b), p.push(h)
                    } else u(g, b, n) || (g !== p && g.push(b), p.push(h))
                }
                return p
            }
        },
        23593: function(e, t, n) {
            var r = n(58525),
                a = n(50308),
                o = n(21814),
                i = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function(e) {
                    return new r(e)
                } : a;
            e.exports = i
        },
        21711: function(e, t, n) {
            var r = n(92822)("isArray", n(1469), n(69087));
            r.placeholder = n(69306), e.exports = r
        },
        7594: function(e, t, n) {
            var r = n(92822)("isObject", n(13218), n(69087));
            r.placeholder = n(69306), e.exports = r
        },
        5892: function(e, t, n) {
            var r = n(92822)("reject", n(43063));
            r.placeholder = n(69306), e.exports = r
        },
        44236: function(e, t, n) {
            var r = n(92822)("uniq", n(44908), n(69087));
            r.placeholder = n(69306), e.exports = r
        },
        43063: function(e, t, n) {
            var r = n(34963),
                a = n(80760),
                o = n(67206),
                i = n(1469),
                l = n(94885);
            e.exports = function(e, t) {
                return (i(e) ? r : a)(e, l(o(t, 3)))
            }
        },
        44908: function(e, t, n) {
            var r = n(45652);
            e.exports = function(e) {
                return e && e.length ? r(e) : []
            }
        },
        85367: function(e, t, n) {
            var r = n(67294);

            function a(e) {
                return r.createElement("svg", e, r.createElement("path", {
                    d: "M12.8125 7.48C12.5625 7.74 12.1518 7.74 11.9375 7.48L8.61607 3.98857L8.61607 13.85C8.61607 14.2029 8.33036 14.5 7.99107 14.5C7.65179 14.5 7.36607 14.2214 7.36607 13.85L7.36607 3.98857L4.0625 7.48C3.8125 7.74 3.4375 7.74 3.1875 7.48C2.9375 7.22 2.9375 6.83 3.1875 6.57L7.99107 1.5L12.8125 6.60714C13.0625 6.83 13.0625 7.25714 12.8125 7.48Z",
                    fill: "#2D354C"
                }))
            }
            a.defaultProps = {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
            }, e.exports = a, a.default = a
        }
    }
]);
//# sourceMappingURL=fc128a5854baa4349c963459f6ced98fafdea066-55c84dc68f5e1383d55f.js.map