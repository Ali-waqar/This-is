"use strict";
(self.webpackChunkblog = self.webpackChunkblog || []).push([
    [4752], {
        2538: function(e, t, r) {
            r.d(t, {
                bZ: function() {
                    return b
                },
                X: function() {
                    return y
                },
                zM: function() {
                    return k
                }
            });
            var n = r(71907),
                a = r(72884),
                o = r(67044),
                i = r(67294);

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            var c = ["as", "viewBox", "color", "focusable", "children", "className", "__css"],
                s = {
                    path: i.createElement("g", {
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, i.createElement("path", {
                        strokeLinecap: "round",
                        fill: "none",
                        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
                    }), i.createElement("path", {
                        fill: "currentColor",
                        strokeLinecap: "round",
                        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
                    }), i.createElement("circle", {
                        fill: "none",
                        strokeMiterlimit: "10",
                        cx: "12",
                        cy: "12",
                        r: "11.25"
                    })),
                    viewBox: "0 0 24 24"
                },
                u = (0, n.Gp)((function(e, t) {
                    var r = e.as,
                        o = e.viewBox,
                        u = e.color,
                        d = void 0 === u ? "currentColor" : u,
                        m = e.focusable,
                        p = void 0 !== m && m,
                        g = e.children,
                        f = e.className,
                        h = e.__css,
                        v = function(e, t) {
                            if (null == e) return {};
                            var r, n, a = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a
                        }(e, c),
                        b = {
                            ref: t,
                            focusable: p,
                            className: (0, a.cx)("chakra-icon", f),
                            __css: l({
                                w: "1em",
                                h: "1em",
                                display: "inline-block",
                                lineHeight: "1em",
                                flexShrink: 0,
                                color: d
                            }, h)
                        },
                        y = null != o ? o : s.viewBox;
                    if (r && "string" != typeof r) return i.createElement(n.m$.svg, l({
                        as: r
                    }, b, v));
                    var k = null != g ? g : s.path;
                    return i.createElement(n.m$.svg, l({
                        verticalAlign: "middle",
                        viewBox: y
                    }, b, v), k)
                }));
            a.Ts && (u.displayName = "Icon");

            function d() {
                return d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, d.apply(this, arguments)
            }
            var m = function(e) {
                    return i.createElement(u, d({
                        viewBox: "0 0 24 24"
                    }, e), i.createElement("path", {
                        fill: "currentColor",
                        d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                    }))
                },
                p = ["status"],
                g = {
                    info: {
                        icon: function(e) {
                            return i.createElement(u, d({
                                viewBox: "0 0 24 24"
                            }, e), i.createElement("path", {
                                fill: "currentColor",
                                d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
                            }))
                        },
                        colorScheme: "blue"
                    },
                    warning: {
                        icon: m,
                        colorScheme: "orange"
                    },
                    success: {
                        icon: function(e) {
                            return i.createElement(u, d({
                                viewBox: "0 0 24 24"
                            }, e), i.createElement("path", {
                                fill: "currentColor",
                                d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                            }))
                        },
                        colorScheme: "green"
                    },
                    error: {
                        icon: m,
                        colorScheme: "red"
                    }
                },
                f = (0, o.kr)({
                    name: "AlertContext",
                    errorMessage: "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"
                }),
                h = f[0],
                v = f[1],
                b = (0, n.Gp)((function(e, t) {
                    var r, o = (0, n.Lr)(e),
                        l = o.status,
                        c = void 0 === l ? "info" : l,
                        s = function(e, t) {
                            if (null == e) return {};
                            var r, n, a = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a
                        }(o, p),
                        u = null != (r = e.colorScheme) ? r : g[c].colorScheme,
                        m = (0, n.jC)("Alert", d({}, e, {
                            colorScheme: u
                        })),
                        f = d({
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            overflow: "hidden"
                        }, m.container);
                    return i.createElement(h, {
                        value: {
                            status: c
                        }
                    }, i.createElement(n.Fo, {
                        value: m
                    }, i.createElement(n.m$.div, d({
                        role: "alert",
                        ref: t
                    }, s, {
                        className: (0, a.cx)("chakra-alert", e.className),
                        __css: f
                    }))))
                })),
                y = (0, n.Gp)((function(e, t) {
                    var r = d({
                        display: "inline"
                    }, (0, n.yK)().description);
                    return i.createElement(n.m$.div, d({
                        ref: t
                    }, e, {
                        className: (0, a.cx)("chakra-alert__desc", e.className),
                        __css: r
                    }))
                })),
                k = function(e) {
                    var t = v().status,
                        r = g[t].icon,
                        o = (0, n.yK)();
                    return i.createElement(n.m$.span, d({
                        display: "inherit"
                    }, e, {
                        className: (0, a.cx)("chakra-alert__icon", e.className),
                        __css: o.icon
                    }), i.createElement(r, {
                        w: "100%",
                        h: "100%"
                    }))
                }
        },
        54922: function(e, t, r) {
            r.d(t, {
                X6: function() {
                    return g
                },
                jj: function() {
                    return b
                },
                lt: function() {
                    return u
                },
                Rg: function() {
                    return C
                },
                o2: function() {
                    return N
                },
                j6: function() {
                    return Z
                },
                Z6: function() {
                    return w.Z
                },
                oH: function() {
                    return x
                },
                Ti: function() {
                    return k.Ti
                },
                qu: function() {
                    return k.qu
                },
                _Z: function() {
                    return k._Z
                }
            });
            var n = r(67294),
                a = (r(32806), r(7713)),
                o = r(33204),
                i = r(64121);
            o.default.header.withConfig({
                displayName: "header-styles",
                componentId: "sc-rca2f7-0"
            })(["max-width:75rem;margin:2.4rem auto 3.2rem;text-align:center;& > h1{font-weight:700;margin-bottom:0.8rem;}& > h2{font-weight:400;}@media (max-width:", "){text-align:left;& > h1{margin-bottom:1.2rem;}}"], i.Z.resolutions.mobileL);
            var l = r(63366),
                c = o.default.form.withConfig({
                    displayName: "layout-styles",
                    componentId: "sc-1uslqwu-0"
                })(["display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 auto;max-width:54.4rem;width:100%;position:relative;&.request-syllabus{margin-top:1.6rem;.okay-message{background:", ";border-radius:", ";display:none;font-size:1.6rem;line-height:160%;padding:1.6rem 3.2rem;}&.requestCorrect{& > *{display:none;}.okay-message{display:block;}}div{text-align:left;input{background:transparent;}}button{font-size:1.6rem;padding:1.4rem 0;}&.whiteSubmitButton{button{font-size:1.6rem;padding:1.4rem 0;background:white;border:1.5px solid #2dc5fa;box-sizing:border-box;border-radius:6px;color:#2dc5fa;}}}&.blog-get-updates{background:", ";padding-top:3.2rem;max-width:unset;flex-wrap:nowrap;.okay-message{display:none;}&.requestCorrect{padding:0;& > *{display:none;}.okay-message{display:block;margin:auto;}}button{height:8rem;background:", ";border-style:solid;color:", ";line-height:130%;}}&.financial-get-more-info-fin-page{max-width:44.8rem;margin-top:3.2rem;margin-left:0;margin-right:auto;.okay-message{display:none;}&.requestCorrect{padding:0;& > *{display:none;}.okay-message{display:block;margin:auto;}}button{background-color:transparent;border:0.2rem solid ", ";color:", ";font-size:2rem;line-height:160%;padding:1.6rem 0;transition:0.3s ease-in-out border;&:hover{background-color:transparent;border:0.2rem solid ", ";}}}&.financial-get-more-info-campus-page{margin-top:4.8rem;.okay-message{display:none;}&.requestCorrect{padding:0;& > *{display:none;}.okay-message{display:block;margin:auto;}}button{background-color:transparent;border:0.2rem solid ", ";color:", ";font-size:1.6rem;line-height:130%;padding:1.2rem 0;transition:0.3s ease-in-out border;&:hover{background-color:transparent;border:0.2rem solid ", ";}}}&.financial-get-more-info-campus-course-page{margin-top:3.2rem;.okay-message{display:none;}&.requestCorrect{padding:0;& > *{display:none;}.okay-message{display:block;margin:auto;}}button{background-color:transparent;border:0.2rem solid ", ";color:", ";font-size:1.6rem;line-height:130%;padding:1.2rem 0;transition:0.3s ease-in-out border;&:hover{background-color:transparent;border:0.2rem solid ", ";}}}@media (max-width:", "){&.blog-get-updates{flex-direction:column;button{height:unset;width:100%;margin-bottom:2.4rem;padding:1.4rem 0;font-size:1.6rem;line-height:125%;}}&.financial-get-more-info-campus-page{margin-top:3.2rem;}}"], i.Z.palette.white, i.Z.borderRadius, i.Z.palette.secondaryBlack, i.Z.palette.secondaryBlack, i.Z.palette.lightBlue, i.Z.palette.orange, i.Z.palette.lightBlue, i.Z.palette.orangeTransparent("0.3"), i.Z.palette.lightBlue, i.Z.palette.lightBlue, i.Z.palette.lightBlueTransparent("0.3"), i.Z.palette.darkBlue, i.Z.palette.darkBlue, i.Z.palette.darkBlueTransparent("0.3"), i.Z.resolutions.tablet),
                s = ["children"];
            var u = function(e) {
                    var t = e.children,
                        r = (0, l.Z)(e, s);
                    return n.createElement(c, r, t)
                },
                d = r(23905),
                m = r(20637),
                p = r(31764),
                g = (0, d.Z)()((function(e) {
                    var t = e.t,
                        r = e.campus,
                        o = e.locale,
                        i = new m.Z(o).contactInformationByLanguage().find((function(e) {
                            return e.campus.code.toLowerCase() === r.toLowerCase()
                        })),
                        l = (0, p.JN)(r);
                    return n.createElement(n.Fragment, null, i && i.phoneNumber && l && n.createElement("section", {
                        className: "col-1 section-title"
                    }, n.createElement(a.l5, {
                        as: "div"
                    }, t("contact-form:contactForm.contactInfo.message")), n.createElement(a.Rw, null, i.phoneNumber)))
                })),
                f = r(69931),
                h = r.n(f),
                v = o.default.section.withConfig({
                    displayName: "error-styles",
                    componentId: "sc-14mqzby-0"
                })(["background:", ";border-radius:", ";color:", ";display:none;font-size:1.6rem;font-weight:500;line-height:140%;margin-top:2.4rem;padding:1.2rem 1.6rem;text-align:center;width:100%;&.show{display:block;}@media (max-width:", "){padding:1.2rem;}"], i.Z.palette.errorRedTransparent("0.15"), i.Z.borderRadius, i.Z.palette.errorRed, i.Z.resolutions.mobileL);
            var b = function(e) {
                    var t = e.children,
                        r = e.showError,
                        a = h()({
                            show: r
                        });
                    return n.createElement(v, {
                        className: a
                    }, t)
                },
                y = r(53185),
                k = r(74073);
            var x = function(e) {
                    var t = e.disabled,
                        r = e.id,
                        a = e.hide,
                        o = e.label,
                        i = e.placeholder,
                        l = e.value,
                        c = e.setValue,
                        s = e.validations,
                        u = e.shouldValidate,
                        d = e.className,
                        m = void 0 === d ? "" : d,
                        p = e.columns,
                        g = void 0 === p ? 1 : p,
                        f = e.errorMessage,
                        v = (0, n.useState)(!0),
                        b = v[0],
                        x = v[1],
                        w = h()(m, {
                            hide: a,
                            "col-2": 2 === g,
                            invalid: !b
                        });
                    return (0, n.useEffect)((function() {
                        u && x((0, k.Zs)(l, s))
                    }), [u]), n.createElement(y.im, {
                        className: w
                    }, n.createElement(y.__, {
                        htmlFor: r
                    }, o), n.createElement(y.nv, {
                        disabled: t,
                        type: "text",
                        id: r,
                        placeholder: i,
                        value: l,
                        onChange: function(e) {
                            c(r, e.target.value), x((0, k.Zs)(e.target.value, s))
                        }
                    }), f && n.createElement("small", null, f))
                },
                w = r(94192);
            var Z = function(e) {
                var t = e.id,
                    r = e.hide,
                    a = e.label,
                    o = e.options,
                    i = e.value,
                    l = e.shouldValidate,
                    c = e.setValue,
                    s = e.validations,
                    u = e.referrsValue,
                    d = void 0 === u ? "" : u,
                    m = (0, n.useState)(!0),
                    p = m[0],
                    g = m[1],
                    f = h()({
                        hide: r,
                        invalid: !p,
                        "col-2": "" !== d && i === d
                    }),
                    v = h()({
                        selected: "" !== i
                    });
                return (0, n.useEffect)((function() {
                    l && g((0, k.Zs)(i, s))
                }), [l]), n.createElement(y.im, {
                    className: f
                }, n.createElement(y.__, {
                    htmlFor: t
                }, a), n.createElement(y.Lt, {
                    id: t,
                    onChange: function(e) {
                        c(t, e.target.value), g((0, k.Zs)(e.target.value, s))
                    },
                    value: i,
                    className: v
                }, Object.keys(o).map((function(e) {
                    return n.createElement("option", {
                        key: e,
                        value: e
                    }, o[e])
                }))))
            };
            var E = ["text", "isSending"];
            var C = function(e) {
                var t = e.text,
                    r = e.isSending,
                    a = (0, l.Z)(e, E),
                    o = h()({
                        sending: r,
                        disabled: e.disabled
                    });
                return n.createElement(y.zx, Object.assign({
                    className: o
                }, a), t)
            };
            var N = function(e) {
                var t = e.id,
                    r = e.children,
                    o = e.className,
                    i = void 0 === o ? "" : o,
                    l = e.handleOnChange;
                return n.createElement(y.XZ, {
                    className: i
                }, n.createElement("input", {
                    id: t,
                    type: "checkbox",
                    value: "yes",
                    onChange: function(e) {
                        return l(e.currentTarget.checked)
                    }
                }), n.createElement(a.yr, {
                    as: "label",
                    htmlFor: t
                }, r))
            }
        },
        39374: function(e, t, r) {
            var n = r(63366),
                a = r(67294),
                o = r(2538),
                i = ["message"];
            t.Z = function(e) {
                var t = e.message,
                    r = (0, n.Z)(e, i);
                return a.createElement(o.bZ, Object.assign({
                    borderColor: "critical.100",
                    borderWidth: "1px",
                    status: "error"
                }, r), a.createElement(o.X, {
                    textAlign: "center",
                    textStyle: "body5"
                }, t))
            }
        },
        58468: function(e, t, r) {
            var n = r(63366),
                a = r(67294),
                o = r(65565),
                i = r(75932),
                l = ["children", "name", "isRequired", "title"];
            t.Z = function(e) {
                var t, r = e.children,
                    c = e.name,
                    s = e.isRequired,
                    u = void 0 === s || s,
                    d = e.title,
                    m = (0, n.Z)(e, l),
                    p = (0, i.Gc)().formState.errors;
                return a.createElement(o.NI, Object.assign({
                    isInvalid: p[c],
                    isRequired: u,
                    mt: 4
                }, m), a.createElement(o.lX, {
                    htmlFor: c,
                    mb: [1.5, null, null, 2]
                }, d), r, a.createElement(o.J1, null, null === (t = p[c]) || void 0 === t ? void 0 : t.message))
            }
        },
        45268: function(e, t, r) {
            var n = r(67294),
                a = r(96901),
                o = r(25444),
                i = r(28900),
                l = r(42740);
            t.Z = function() {
                var e = (0, i.$)(),
                    t = e.i18n.language,
                    r = e.t;
                return n.createElement(a.xv, {
                    align: "center",
                    color: "darkBlue.64",
                    mt: 2,
                    textStyle: "body5"
                }, r("application-form:applicationForm.footer.legalAdvice.shareData.byApplyingStart"), " ", n.createElement(a.rU, {
                    as: o.rU,
                    to: "/" + t + "/" + l.privacyPolicy[t]
                }, r("application-form:applicationForm.footer.legalAdvice.privacyPolicyLinkText")), " ", r("application-form:applicationForm.footer.legalAdvice.shareData.byApplyingConjuntion"), " ", n.createElement(a.rU, {
                    as: o.rU,
                    to: "/" + t + "/" + l.termsOfUse[t]
                }, r("application-form:applicationForm:footer.legalAdvice.shareData.termsOfUseLinkText")))
            }
        }
    }
]);
//# sourceMappingURL=317ba2c899a772a6a2727adc6d52006c57703931-c940d7707d291cbd2b06.js.map