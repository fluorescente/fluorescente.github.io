(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 33 ], {
    "18mY": function(e, t, n) {
        "use strict";
        n("jQ3i");
        var o = {
            Vector: "spinner-vector"
        }, r = {
            data: function() {
                return {
                    svgId: "spinner-" + Date.now(),
                    testIds: o
                };
            },
            props: {
                text: {
                    type: String,
                    required: !1
                },
                autofill: {
                    type: Boolean,
                    default: !1
                },
                color: {
                    type: String,
                    default: "blue",
                    validator: function(e) {
                        return [ "white", "blue" ].includes(e);
                    }
                }
            }
        }, a = n("ayNN"), i = n("K+aO");
        var l = Object(i.default)(r, (function() {
            var e, t, n = this, o = n.$createElement, r = n._self._c || o;
            return r("div", {
                ref: "spinnerContainer",
                staticClass: "vc-Spinner rf-spinner",
                class: (e = {}, e[n.$style.standaloneSpinner] = !n.text && !n.autofill, e)
            }, [ r("svg", {
                class: [ (t = {}, t[n.$style.autofill] = n.autofill, t), "rf-spinner__spinner" ],
                attrs: {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 200 200",
                    preserveAspectRatio: "xMinYMin meet",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [ r("defs", [ r("linearGradient", {
                attrs: {
                    id: n.svgId,
                    x1: "0%",
                    y1: "0%",
                    x2: "65%",
                    y2: "0%"
                }
            }, [ r("stop", {
                ref: "def1",
                class: n.$style[n.color],
                attrs: {
                    offset: "0%"
                }
            }), r("stop", {
                ref: "def2",
                class: n.$style[n.color],
                attrs: {
                    offset: "100%",
                    "stop-opacity": "0"
                }
            }) ], 1) ], 1), r("circle", {
                attrs: {
                    cx: "100",
                    cy: "100",
                    r: "90",
                    fill: "transparent",
                    stroke: "url(#" + n.svgId + ")",
                    "stroke-width": "20"
                }
            }) ]), n.text ? r("p", {
                ref: "text",
                staticClass: "rf-spinner__text"
            }, [ n._v(n._s(n.text)) ]) : n._e() ]);
        }), [], !1, (function(e) {
            this.$style = a.default.locals || a.default;
        }), null, null);
        t.a = l.exports;
    },
    "20Oh": function(e, t, n) {
        "use strict";
        var o = n("YWVf"), r = n.n(o), a = n("mGku"), i = n("wnPb"), l = a.default.extend({
            name: "TextInput",
            components: {
                BorderAndLabelManager: i.a
            },
            data: function() {
                return {
                    localValue: this.value,
                    isFocused: !1
                };
            },
            props: {
                type: {
                    type: String,
                    default: "text",
                    validator: function(e) {
                        return /^(text|number|email|password|search|url|tel)$/.test(e);
                    }
                },
                name: {
                    type: String
                },
                label: {
                    type: String
                },
                placeholder: {
                    type: String
                },
                placeholderStyle: {
                    type: String,
                    default: "dark",
                    validator: function(e) {
                        return "dark" === e || "light" === e;
                    }
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                standalone: {
                    type: Boolean
                },
                readonly: {
                    type: Boolean,
                    default: !1
                },
                required: {
                    type: Boolean,
                    default: !1
                },
                autocomplete: {
                    type: String,
                    default: "off"
                },
                autofocus: {
                    type: Boolean,
                    default: !1
                },
                maxlength: {
                    type: Number,
                    default: -1
                },
                minlength: {
                    type: Number,
                    default: -1
                },
                shimWidth: {
                    type: Number
                },
                errorMessage: {
                    type: String
                },
                errorLayout: {
                    type: String,
                    default: "under",
                    validator: function(e) {
                        return "under" === e || "over" === e;
                    }
                },
                value: {
                    type: [ String, Number ],
                    default: ""
                },
                isDark: {
                    type: Boolean,
                    default: !1
                },
                isErrorMessageFixed: {
                    type: Boolean,
                    default: !1
                },
                shouldFocus: {
                    type: Boolean
                },
                isForProjectEditor: {
                    type: Boolean,
                    default: !1
                },
                hasNewLabelStyle: Boolean,
                customCursorClass: {
                    type: String
                },
                customBorderRadiusClass: {
                    type: String
                }
            },
            computed: {
                hasError: function() {
                    return Boolean(this.errorMessage);
                },
                unlabeled: function() {
                    return !this.label;
                },
                shimPadding: function() {
                    return !!this.shimWidth && String(this.shimWidth + 5) + "px";
                },
                shouldShowPlaceholder: function() {
                    return null === this.localValue || 0 === this.localValue.length;
                }
            },
            mounted: function() {
                this.isFocused = document.activeElement === this.$refs.input;
            },
            watch: {
                shouldFocus: function(e) {
                    if (this.autofocus) {
                        this.isFocused = e;
                        var t = this.$refs.input;
                        e ? t.focus() : t.blur();
                    }
                },
                value: function(e) {
                    this.localValue = e;
                }
            },
            methods: {
                hasHtml: function(e) {
                    return r()(e, {
                        allowedTags: []
                    }) !== e;
                },
                hasClientError: function() {
                    var e = this.$refs.input.value;
                    if ("" === e) return "isEmpty";
                    if (this.hasHtml(e)) return "hasHtml";
                    var t = -1 === this.minlength ? 3 : this.minlength;
                    return e.length < t ? "tooShort" : -1 !== this.maxlength && e.length > this.maxlength && "tooLong";
                },
                handleKeyupEnter: function() {
                    var e = this.hasClientError();
                    e ? this.$emit("hasError", e) : this.$emit("enter", this.$refs.input.value);
                },
                focus: function() {
                    this.$refs.input.focus();
                },
                handleInput: function(e) {
                    this.$emit("input", e.target.value), this.localValue = e.target.value;
                },
                handleBlur: function(e) {
                    this.$emit("blur", e), this.isFocused = !1;
                }
            }
        }), s = n("yfgW"), d = n("K+aO");
        var p = Object(d.default)(l, (function() {
            var e, t, n, o, r = this, a = r.$createElement, i = r._self._c || a;
            return i("div", {
                ref: "root",
                class: [ r.$style.textInput, (e = {}, e[r.$style.error] = r.hasError, e[r.$style.errorOver] = "over" === r.errorLayout, 
                e[r.$style.textInputWithSpace] = !r.standalone, e) ]
            }, [ i("label", {
                ref: "label",
                class: [ r.$style.label, r.customCursorClass ]
            }, [ !r.hasNewLabelStyle && r.label ? [ r._v(" " + r._s(r.label)) ] : r._e(), i("input", {
                ref: "input",
                class: [ r.$style.input, (t = {}, t[r.$style.dark] = r.isDark, t[r.$style.unlabeled] = r.unlabeled, 
                t[r.$style.disabled] = r.disabled, t[r.$style.inputWithSpace] = !r.standalone, t[r.$style.placeholderLight] = "light" === r.placeholderStyle, 
                t[r.$style.forProjectEditor] = r.isForProjectEditor, t[r.$style.withNewLabelStyle] = r.hasNewLabelStyle, 
                t), r.customBorderRadiusClass, "e2e-TextInput-input" ],
                style: {
                    "padding-left": r.shimPadding
                },
                attrs: {
                    type: r.type,
                    name: r.name,
                    placeholder: r.hasNewLabelStyle ? void 0 : r.placeholder,
                    disabled: r.disabled,
                    required: r.required,
                    maxlength: r.maxlength,
                    minlength: r.minlength,
                    autocomplete: r.autocomplete,
                    readonly: r.readonly,
                    autofocus: r.autofocus
                },
                domProps: {
                    value: r.localValue
                },
                on: {
                    input: r.handleInput,
                    blur: r.handleBlur,
                    focus: function(e) {
                        r.isFocused = !0;
                    },
                    keyup: function(e) {
                        return !e.type.indexOf("key") && r._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : r.handleKeyupEnter(e);
                    }
                }
            }), r.hasNewLabelStyle && r.label ? i("BorderAndLabelManager", {
                class: [ r.$style.borderManager, (n = {}, n[r.$style.unlabeled] = r.unlabeled, n) ],
                attrs: {
                    label: r.label,
                    isActive: r.isFocused,
                    shouldShowPlaceholder: r.shouldShowPlaceholder
                }
            }) : r._e() ], 2), r.hasError ? i("p", {
                ref: "errorMessage",
                class: [ r.$style.errorMessage, (o = {}, o[r.$style.fixed] = r.isErrorMessageFixed, 
                o) ]
            }, [ r._v(r._s(r.errorMessage)) ]) : r._e() ]);
        }), [], !1, (function(e) {
            this.$style = s.default.locals || s.default;
        }), null, null);
        t.a = p.exports;
    },
    "4FY9": function(e, t, n) {
        "use strict";
        var o = n("gaI4"), r = n.n(o);
        t.default = r.a;
    },
    "4nGm": function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".SMSAppLink-formWrap-2dz{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;text-align:left}.SMSAppLink-input-Xvf{margin-right:10px;width:230px}.SMSAppLink-sendBtn-1Lu{margin-top:21px}.SMSAppLink-postingSpinner-2_p{height:16px;position:relative;width:16px !important}.SMSAppLink-postingSpinner-2_p .rf-spinner__spinner{height:100%;left:0;min-height:0 !important;min-width:0 !important;top:0;width:100%}.SMSAppLink-successWrap-2bg{color:#058900;padding:21px 0}.SMSAppLink-success-1PO{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;font-size:14px;font-weight:bold;-webkit-box-pack:center;justify-content:center}.SMSAppLink-check-3lA{fill:#058900;height:26px;margin-right:2px;width:26px}", "" ]), 
        t.locals = {
            formWrap: "SMSAppLink-formWrap-2dz",
            input: "SMSAppLink-input-Xvf",
            sendBtn: "SMSAppLink-sendBtn-1Lu",
            postingSpinner: "SMSAppLink-postingSpinner-2_p",
            successWrap: "SMSAppLink-successWrap-2bg",
            success: "SMSAppLink-success-1PO",
            check: "SMSAppLink-check-3lA"
        };
    },
    "5G4C": function(e, t, n) {
        var o = n("NlyD");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, n("DtNa").default)("d0ee1b30", o, !0, {});
    },
    "6U7i": function(e, t, n) {
        e.exports = n("ydjK")("6U7i");
    },
    "7MKI": function(e, t, n) {
        var o = n("If1a");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, n("DtNa").default)("28d615bb", o, !0, {});
    },
    "7Wgy": function(e, t, n) {
        var o = n("4nGm");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, n("DtNa").default)("616e502a", o, !0, {});
    },
    "7xRU": function(e, t, n) {
        e.exports = n("ydjK")("7xRU");
    },
    "81un": function(e, t, n) {
        var o = n("FbDQ");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, n("DtNa").default)("0e5b78de", o, !0, {});
    },
    "9D9t": function(e, t, n) {
        "use strict";
        n.r(t);
        n("1t7P"), n("LW0h"), n("jwue"), n("daRM"), n("FtHn"), n("+KXO"), n("+oxZ");
        var o = n("nOR9"), r = n("43bc"), a = n("D57K"), i = n("G3Q+"), l = {
            actions: Object(a.__assign)({}, Object(i.a)("downloadAppModal", [ r.a.SMS_SENT_SUCCESS_ACTION ], "analytics"))
        }, s = n("2dzt");
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, o);
            }
            return n;
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach((function(t) {
                    u(e, t, n[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
            }
            return e;
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var c = {
            components: {
                DownloadAppModal: n("Ta0x").a
            },
            computed: p({}, Object(o.mapState)({
                isLoggedIn: function(e) {
                    return Boolean(e.user.loggedInUser);
                },
                isAppModalOpen: function(e) {
                    return e.footer.isAppModalOpen;
                },
                sendSMSStatusCode: function(e) {
                    return e.downloadAppModal.sendSMSStatusCode;
                }
            })),
            beforeCreate: function() {
                this.$store.registerModule("downloadAppModal", r.b), this.$store.registerModule("downloadAppModalAnalytics", l);
            },
            beforeDestory: function() {
                this.$store.unregisterModule("downloadAppModal"), this.$store.unregisterModule("downloadAppModalAnalytics");
            },
            methods: p({}, Object(o.mapActions)("footer", {
                closeAppsModal: s.ACTIONS.USER_CLICKED_CLOSE_APPS_MODAL
            }), {}, Object(o.mapActions)("downloadAppModal", {
                sendSMS: r.a.SEND_SMS_ACTION,
                resetSMSStatus: r.a.RESET_SMS_SENT_STATUS_ACTION
            }))
        }, f = n("K+aO"), h = Object(f.default)(c, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("portal", {
                attrs: {
                    "target-el": ".js-vue-apps-modal-portal"
                }
            }, [ n("DownloadAppModal", {
                attrs: {
                    showModal: e.isAppModalOpen,
                    sendSMSStatusCode: e.sendSMSStatusCode,
                    isLoggedIn: e.isLoggedIn
                },
                on: {
                    closeModal: e.closeAppsModal,
                    appLinkRequested: e.sendSMS,
                    smsSuccessMessageRead: e.resetSMSStatus
                }
            }) ], 1);
        }), [], !1, null, null, null);
        t.default = h.exports;
    },
    Bew7: function(e, t, n) {
        "use strict";
        var o = n("K+aO"), r = Object(o.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 100 125"
                }
            }, [ t("path", {
                attrs: {
                    d: "M50 25.4c-20.7 0-37.6 16.9-37.6 37.6s16.9 37.6 37.6 37.6S87.6 83.7 87.6 63 70.7 25.4 50 25.4zM69.1 57L48.3 76.8c-.8.7-1.8 1.1-2.8 1.1s-2-.4-2.8-1.2L30.9 64.8c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l9.1 9.1 17.9-17c1.6-1.5 4.1-1.5 5.7.1 1.4 1.7 1.4 4.2-.2 5.7z"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = r.exports;
    },
    FbDQ: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, '.BorderAndLabelManager-control-1Q8{cursor:pointer;height:100%;position:absolute}.BorderAndLabelManager-control-1Q8::before{background:-webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), color-stop(70%, white));background:linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, white 70%);content:"";height:100%;position:absolute;width:100px;z-index:1}.BorderAndLabelManager-control-1Q8.BorderAndLabelManager-prev-1yt::before{left:0}.BorderAndLabelManager-control-1Q8.BorderAndLabelManager-next-3px::before{background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(70%, white));background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 70%);right:-3px}.BorderAndLabelManager-control-1Q8:active .BorderAndLabelManager-arrow-3Rw{background-color:#e4e4e4;fill:#191919}.no-has-touch .BorderAndLabelManager-control-1Q8:hover .BorderAndLabelManager-arrow-3Rw{background-color:#f1f1f1;fill:#191919}.BorderAndLabelManager-prev-1yt{left:0}.BorderAndLabelManager-next-3px{right:3px;width:100px}.BorderAndLabelManager-arrow-3Rw{-webkit-box-align:center;align-items:center;background-color:#fff;border-radius:50%;box-shadow:0 -2px 4px rgba(0,0,0,.16);display:-webkit-box;display:flex;fill:#959595;height:34px;-webkit-box-pack:center;justify-content:center;margin-top:4px;padding-left:2px;position:absolute;top:34%;-webkit-transition:background-color .15s linear;transition:background-color .15s linear;width:34px;z-index:1}.BorderAndLabelManager-prev-1yt .BorderAndLabelManager-arrow-3Rw{margin-left:2px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.BorderAndLabelManager-next-3px .BorderAndLabelManager-arrow-3Rw{box-shadow:0 2px 4px rgba(0,0,0,.16);right:0}.BorderAndLabelManager-navArrow-30B{height:17px;width:11px}.BorderAndLabelManager-borderContainer-AYl{display:-webkit-box;display:flex;pointer-events:none;position:absolute}.BorderAndLabelManager-borderContainer-AYl.BorderAndLabelManager-isActive-1he .BorderAndLabelManager-border-zj1{border-color:#0057ff}.BorderAndLabelManager-border-zj1{border-color:#e8e8e8;border-width:1px;-webkit-transition:border-color .2s linear;transition:border-color .2s linear}.BorderAndLabelManager-leading-3OC{border-bottom-style:solid;border-left-style:solid;border-radius:4px 0 0 4px;border-top-style:solid;width:7px}.BorderAndLabelManager-notch-25t{-webkit-box-align:center;align-items:center;border-bottom-style:solid;border-top-style:solid;display:-webkit-box;display:flex;white-space:nowrap}.BorderAndLabelManager-margin-3Bw{border-bottom-style:solid;border-top-style:solid;width:3px}.BorderAndLabelManager-floated-1Gv{border-top-style:none}.BorderAndLabelManager-trailing-1lL{border-bottom-style:solid;border-radius:0 4px 4px 0;border-right-style:solid;border-top-style:solid;-webkit-box-flex:1;flex-grow:1;min-width:4px}.BorderAndLabelManager-filterLabel-12q{-webkit-backface-visibility:hidden;backface-visibility:hidden;color:#959595;font-size:13px;font-weight:600;-webkit-transform-origin:left;transform-origin:left;-webkit-transition:color .2s linear,-webkit-transform .2s cubic-bezier(0.19, 1, 0.22, 1);transition:color .2s linear,-webkit-transform .2s cubic-bezier(0.19, 1, 0.22, 1);transition:transform .2s cubic-bezier(0.19, 1, 0.22, 1),color .2s linear;transition:transform .2s cubic-bezier(0.19, 1, 0.22, 1),color .2s linear,-webkit-transform .2s cubic-bezier(0.19, 1, 0.22, 1);will-change:transform}.BorderAndLabelManager-isFloated-35g .BorderAndLabelManager-filterLabel-12q{color:#707070;font-weight:bold;padding-top:3px}.BorderAndLabelManager-isActive-1he .BorderAndLabelManager-filterLabel-12q{color:#0057ff;font-weight:bold}', "" ]), 
        t.locals = {
            control: "BorderAndLabelManager-control-1Q8",
            prev: "BorderAndLabelManager-prev-1yt",
            next: "BorderAndLabelManager-next-3px",
            arrow: "BorderAndLabelManager-arrow-3Rw",
            navArrow: "BorderAndLabelManager-navArrow-30B",
            borderContainer: "BorderAndLabelManager-borderContainer-AYl",
            isActive: "BorderAndLabelManager-isActive-1he",
            border: "BorderAndLabelManager-border-zj1",
            leading: "BorderAndLabelManager-leading-3OC",
            notch: "BorderAndLabelManager-notch-25t",
            margin: "BorderAndLabelManager-margin-3Bw",
            floated: "BorderAndLabelManager-floated-1Gv",
            trailing: "BorderAndLabelManager-trailing-1lL",
            filterLabel: "BorderAndLabelManager-filterLabel-12q",
            isFloated: "BorderAndLabelManager-isFloated-35g"
        };
    },
    H7jL: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return e[t] = !0, e;
        }
        e.exports = function(e) {
            return e.reduce(o, {});
        };
    },
    HNYy: function(e, t, n) {
        "use strict";
        n("7xRU"), n("M+/F"), n("Ee2X"), n("6U7i"), n("KqXw"), n("Ysgh");
        var o = n("OQxq"), r = n("20Oh"), a = n("18mY"), i = n("Bew7"), l = n("C9k2"), s = n("adMq"), d = n("WxsR"), p = {
            components: {
                Btn: o.default,
                TextInput: r.a,
                Spinner: a.a,
                CheckIcon: i.a,
                Fade: s.a
            },
            props: {
                sendSMSStatusCode: {
                    type: Number
                },
                sendButtonType: {
                    type: String,
                    default: "base"
                }
            },
            data: function() {
                return {
                    tel: "",
                    errorMessage: null,
                    canViewSuccessState: !1,
                    isSending: !1,
                    successMessageDuration: 2e3
                };
            },
            watch: {
                sendSMSStatusCode: function(e) {
                    var t = this;
                    switch (e) {
                      case l.j.SUCCESS:
                        this.tel = "", this.canViewSuccessState = !0, this.isSending = !1, setTimeout((function() {
                            return t.$emit("smsSuccessMessageRead");
                        }), this.successMessageDuration);
                        break;

                      case l.j.FAILED:
                        this.canViewSuccessState = !1, this.isSending = !1;
                        break;

                      default:
                        this.canViewSuccessState = !1;
                    }
                }
            },
            methods: {
                prependPrefix: function() {
                    "+" !== this.tel.split("")[0] && (this.tel = "+" + this.tel);
                },
                resetErrorMessage: function() {
                    this.errorMessage = null;
                },
                isUSNumberWithoutCountryCode: function() {
                    var e = this.tel.split("").slice(1, this.tel.length).join("");
                    return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(e);
                },
                addUSCountryCode: function() {
                    var e = this.tel.split("");
                    e.splice(1, 0, "1"), this.tel = e.join("");
                },
                send: function() {
                    var e = Object(d.b)(this.tel), t = e.country, n = e.phone, o = !t || !n;
                    if (this.isUSNumberWithoutCountryCode() && o) return this.addUSCountryCode(), this.resetErrorMessage(), 
                    void this.send();
                    if (o) this.errorMessage = this.$translate("stories_upload_invalid_country_or_phone_number", "Invalid country code or phone number"); else {
                        var r = Object(d.a)(n, t, "E.164");
                        this.isSending = !0, this.$emit("appLinkRequested", r);
                    }
                }
            }
        }, u = n("tvyt"), c = n("K+aO");
        var f = Object(c.default)(p, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [ n("Fade", {
                attrs: {
                    mode: "out-in"
                }
            }, [ e.canViewSuccessState ? n("div", {
                ref: "success",
                class: e.$style.successWrap
            }, [ n("span", {
                class: e.$style.success
            }, [ n("CheckIcon", {
                class: e.$style.check
            }), e._v(" " + e._s(e.$translate("stories_app_link_sent_success", "Download Link Sent"))) ], 1) ]) : n("div", {
                ref: "formWrap",
                class: e.$style.formWrap
            }, [ n("TextInput", {
                ref: "textInput",
                class: e.$style.input,
                attrs: {
                    type: "tel",
                    errorMessage: e.errorMessage,
                    disabled: e.isSending,
                    isErrorMessageFixed: !0,
                    placeholder: e.$translate("stories_upload_mobile_number_placeholder", "Country Code + Mobile number")
                },
                on: {
                    enter: e.send,
                    input: function(t) {
                        e.prependPrefix(), e.resetErrorMessage();
                    }
                },
                model: {
                    value: e.tel,
                    callback: function(t) {
                        e.tel = t;
                    },
                    expression: "tel"
                }
            }), n("Btn", {
                ref: "sendLinkBtn",
                class: e.$style.sendBtn,
                attrs: {
                    type: e.sendButtonType,
                    disabled: e.isSending
                },
                on: {
                    click: e.send
                }
            }, [ e.isSending ? n("Spinner", {
                ref: "postingSpinner",
                class: e.$style.postingSpinner,
                attrs: {
                    slot: "leadingIcon",
                    autofill: !0,
                    color: "white"
                },
                slot: "leadingIcon"
            }) : e._e(), e._v(" " + e._s(e.$translate("stories_upload_best_experience_send", "Send")) + " ") ], 1) ], 1) ]) ], 1);
        }), [], !1, (function(e) {
            this.$style = u.default.locals || u.default;
        }), null, null);
        t.a = f.exports;
    },
    HbXO: function(e, t, n) {
        "use strict";
        var o = n("jOg2"), r = n.n(o);
        t.default = r.a;
    },
    HhHV: function(e, t, n) {
        "use strict";
        e.exports = {
            allowedAttributes: {
                a: [ "href", "name", "target", "title", "aria-label" ],
                iframe: [ "allowfullscreen", "frameborder", "src" ],
                img: [ "src", "alt", "title", "aria-label" ]
            },
            allowedClasses: {},
            allowedSchemes: [ "http", "https", "mailto" ],
            allowedTags: [ "a", "abbr", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "mark", "ol", "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul" ],
            filter: null
        };
    },
    If1a: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".rf-spinner__spinner:only-child.Spinner-autofill-2bc{height:100%;min-height:100%;min-width:100%;width:100%}.Spinner-blue-3_W{stop-color:#0057ff}.Spinner-white-2Dl{stop-color:#fff}.Spinner-standaloneSpinner-25B{height:35px;width:35px}", "" ]), 
        t.locals = {
            autofill: "Spinner-autofill-2bc",
            blue: "Spinner-blue-3_W",
            white: "Spinner-white-2Dl",
            standaloneSpinner: "Spinner-standaloneSpinner-25B"
        };
    },
    "KXS/": function(e, t, n) {
        "use strict";
        e.exports = function e(t) {
            for (var n, o, r = Array.prototype.slice.call(arguments, 1); r.length; ) for (o in n = r.shift()) n.hasOwnProperty(o) && ("[object Object]" === Object.prototype.toString.call(t[o]) ? t[o] = e(t[o], n[o]) : t[o] = n[o]);
            return t;
        };
    },
    Nfs8: function(e, t, n) {
        "use strict";
        var o = n("81un"), r = n.n(o);
        t.default = r.a;
    },
    NlyD: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".TextInput-textInput-29G{font-size:13px;position:relative;vertical-align:top}.TextInput-textInputWithSpace-2so{margin-bottom:15px}.TextInput-label-1SN{font-family:inherit;font-size:13px;line-height:1.3;cursor:pointer;display:block;font-weight:bold}.TextInput-input-1ZG{border:1px solid #ccc;border-radius:3px;box-sizing:border-box;color:#191919;display:block;font-weight:600;height:32px;padding:4px;padding-left:10px;width:100%}.TextInput-input-1ZG::-webkit-input-placeholder{color:#707070}.TextInput-input-1ZG::-moz-placeholder{color:#707070}.TextInput-input-1ZG:-ms-input-placeholder{color:#707070}.TextInput-input-1ZG::-ms-input-placeholder{color:#707070}.TextInput-input-1ZG::placeholder{color:#707070}.TextInput-input-1ZG.TextInput-withNewLabelStyle-1H5{border:0}.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-webkit-input-placeholder{color:#fff}.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-moz-placeholder{color:#fff}.TextInput-input-1ZG.TextInput-placeholderLight-1WL:-ms-input-placeholder{color:#fff}.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-ms-input-placeholder{color:#fff}.TextInput-input-1ZG.TextInput-placeholderLight-1WL::placeholder{color:#fff}.TextInput-input-1ZG:hover{border-color:dimgray}.TextInput-input-1ZG:focus{border-color:#0057ff}.TextInput-input-1ZG:focus.focus-visible{outline:none}.TextInput-error-1H3 .TextInput-input-1ZG{border-color:#d00}.TextInput-input-1ZG.TextInput-disabled-KjM{background:#e8e8e8;color:#959595}.TextInput-input-1ZG.TextInput-forProjectEditor-dsA{height:38px}.TextInput-inputWithSpace-33q{margin-top:8px}.TextInput-inputWithSpace-33q.TextInput-unlabeled-1hM{margin-top:21px}.TextInput-errorMessage-3fr{color:#d00;font-size:12px;font-weight:600;margin-bottom:0;margin-top:5px}.TextInput-errorMessage-3fr.TextInput-fixed-3zs{position:absolute}.TextInput-textInput-29G.TextInput-errorOver-2A9{position:relative}.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-input-1ZG,.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-input-1ZG.TextInput-unlabeled-1hM{margin-top:0}.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-errorMessage-3fr{bottom:100%;font-style:normal;margin-bottom:5px;margin-top:0;position:absolute}.TextInput-dark-FIp{font-family:inherit;font-size:13px;line-height:1.3;background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.25);color:#fff;min-width:343px}.TextInput-input-1ZG{-webkit-transition:border-color .15s linear,color .15s linear,background-color .15s linear;transition:border-color .15s linear,color .15s linear,background-color .15s linear}.TextInput-borderManager-20g{height:32px;left:0;top:0;width:100%}", "" ]), 
        t.locals = {
            textInput: "TextInput-textInput-29G",
            textInputWithSpace: "TextInput-textInputWithSpace-2so",
            label: "TextInput-label-1SN",
            input: "TextInput-input-1ZG",
            withNewLabelStyle: "TextInput-withNewLabelStyle-1H5",
            placeholderLight: "TextInput-placeholderLight-1WL",
            error: "TextInput-error-1H3",
            disabled: "TextInput-disabled-KjM",
            forProjectEditor: "TextInput-forProjectEditor-dsA",
            inputWithSpace: "TextInput-inputWithSpace-33q",
            unlabeled: "TextInput-unlabeled-1hM",
            errorMessage: "TextInput-errorMessage-3fr",
            fixed: "TextInput-fixed-3zs",
            errorOver: "TextInput-errorOver-2A9",
            dark: "TextInput-dark-FIp",
            borderManager: "TextInput-borderManager-20g"
        };
    },
    OQxq: function(e, t, n) {
        e.exports = n("ydjK")("OQxq");
    },
    OdXY: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "string" == typeof e ? e.toLowerCase() : e;
        };
    },
    Pafc: function(e, t, n) {
        "use strict";
        var o = n("H7jL");
        e.exports = {
            uris: o([ "background", "base", "cite", "href", "longdesc", "src", "usemap" ])
        };
    },
    RFFd: function(e, t, n) {
        "use strict";
        var o = n("W+W9"), r = n("OdXY"), a = (n("Pafc"), n("hu0r")), i = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, l = /^<\s*\/\s*([\w:-]+)[^>]*>/, s = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, d = /^</, p = /^<\s*\//;
        e.exports = function(e, t) {
            for (var n, u = function() {
                var e = [];
                return e.lastItem = function() {
                    return e[e.length - 1];
                }, e;
            }(), c = e; e; ) f();
            function f() {
                n = !0, function() {
                    "\x3c!--" === e.substr(0, 4) ? (o = e.indexOf("--\x3e")) >= 0 && (t.comment && t.comment(e.substring(4, o)), 
                    e = e.substring(o + 3), n = !1) : p.test(e) ? h(l, b) : d.test(e) && h(i, g);
                    var o;
                    !function() {
                        if (!n) return;
                        var o, r = e.indexOf("<");
                        r >= 0 ? (o = e.substring(0, r), e = e.substring(r)) : (o = e, e = "");
                        t.chars && t.chars(o);
                    }();
                }();
                var o = e === c;
                c = e, o && (e = "");
            }
            function h(t, o) {
                var r = e.match(t);
                r && (e = e.substring(r[0].length), r[0].replace(t, o), n = !1);
            }
            function g(e, n, i, l) {
                var d = {}, p = r(n), c = a.voids[p] || !!l;
                i.replace(s, (function(e, t, n, r, a) {
                    d[t] = void 0 === n && void 0 === r && void 0 === a ? void 0 : o.decode(n || r || a || "");
                })), c || u.push(p), t.start && t.start(p, d, c);
            }
            function b(e, n) {
                var o, a = 0, i = r(n);
                if (i) for (a = u.length - 1; a >= 0 && u[a] !== i; a--) ;
                if (a >= 0) {
                    for (o = u.length - 1; o >= a; o--) t.end && t.end(u[o]);
                    u.length = a;
                }
            }
            b();
        };
    },
    RnKE: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Fade-enterActive-330{-webkit-animation:Fade-fade-cgL .3s;animation:Fade-fade-cgL .3s}.Fade-leaveActive-1fN{animation:Fade-fade-cgL .3s reverse}@-webkit-keyframes Fade-fade-cgL{0%{opacity:0}100%{opacity:1}}@keyframes Fade-fade-cgL{0%{opacity:0}100%{opacity:1}}", "" ]), 
        t.locals = {
            enterActive: "Fade-enterActive-330",
            fade: "Fade-fade-cgL",
            leaveActive: "Fade-leaveActive-1fN"
        };
    },
    Ta0x: function(e, t, n) {
        "use strict";
        n("6U7i");
        var o = n("mLYF"), r = n("HNYy"), a = n("E8ap"), i = {
            components: {
                Modal: o.default,
                SMSAppLink: r.a
            },
            data: function() {
                return {
                    downloadGoogleAppUrl: a.URL_APPS_DOWNLOAD_NETWORK_GOOGLE,
                    downloadIosAppUrl: a.URL_APPS_DOWNLOAD_NETWORK,
                    assetsUrl: a.ASSETS_URL
                };
            },
            props: {
                showModal: {
                    type: Boolean,
                    default: !1
                },
                sendSMSStatusCode: {
                    type: Number
                },
                isLoggedIn: {
                    type: Boolean,
                    default: !0
                },
                headerTitle: {
                    type: String
                },
                bodyText: {
                    type: String
                },
                showSMSLink: {
                    type: Boolean,
                    default: !0
                },
                hideTitleBarOnPhone: {
                    type: Boolean
                }
            }
        }, l = n("4FY9"), s = n("K+aO");
        var d = Object(s.default)(i, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("Modal", {
                ref: "modal",
                class: e.$style.modal,
                attrs: {
                    showModal: e.showModal,
                    contentStyle: {
                        overflow: "hidden",
                        padding: 0
                    },
                    hideTitleBarOnPhone: e.hideTitleBarOnPhone
                },
                on: {
                    openModal: function(t) {
                        return e.$emit("openModal");
                    },
                    closeModal: function(t) {
                        return e.$emit("closeModal");
                    }
                }
            }, [ n("div", {
                class: e.$style.imgContainer
            }), n("div", {
                class: e.$style.content
            }, [ n("h2", {
                ref: "title",
                class: e.$style.header
            }, [ e._v(e._s(e.$translate("profile_checklist_download_modal_app_header", "Download the Behance App"))) ]), n("p", {
                ref: "desc",
                class: e.$style.text
            }, [ e._v(e._s(e.$translate("profile_checklist_download_modal_app_text", "The best way to stay up to date with the creative world"))) ]), e.isLoggedIn && e.showSMSLink ? n("SMSAppLink", {
                ref: "sms",
                attrs: {
                    sendSMSStatusCode: e.sendSMSStatusCode,
                    sendButtonType: "primary"
                },
                on: {
                    appLinkRequested: function(t) {
                        return e.$emit("appLinkRequested", {
                            phoneNumber: t,
                            source: "Profile Checklist Download App Modal"
                        });
                    },
                    smsSuccessMessageRead: function(t) {
                        return e.$emit("smsSuccessMessageRead");
                    }
                }
            }) : e._e(), n("div", {
                class: e.$style.downloadButtons
            }, [ n("a", {
                ref: "googleDownload",
                class: e.$style.downloadButton,
                style: "background-image:url(" + e.assetsUrl + "svgs/google-play-button.svg);",
                attrs: {
                    target: "_blank",
                    href: e.downloadGoogleAppUrl
                }
            }, [ e._v(e._s(e.$translate("buttons_google_app_download", "Get it on Google Play"))) ]), n("a", {
                ref: "appleDownload",
                class: [ e.$style.downloadButton, e.$style.downloadApple ],
                style: "background-image:url(" + e.assetsUrl + "svgs/apple-app-store-button.svg);",
                attrs: {
                    target: "_blank",
                    href: e.downloadIosAppUrl
                }
            }, [ e._v(e._s(e.$translate("button_apple_app_download", "Download on the App Store"))) ]) ]) ], 1) ]);
        }), [], !1, (function(e) {
            this.$style = l.default.locals || l.default;
        }), null, null);
        t.a = d.exports;
    },
    "W+W9": function(e, t, n) {
        "use strict";
        var o = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, r = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }, a = /(&amp;|&lt;|&gt;|&quot;|&#39;)/g, i = /[&<>"']/g;
        function l(e) {
            return o[e];
        }
        function s(e) {
            return r[e];
        }
        function d(e) {
            return null == e ? "" : String(e).replace(i, l);
        }
        function p(e) {
            return null == e ? "" : String(e).replace(a, s);
        }
        d.options = p.options = {}, e.exports = {
            encode: d,
            escape: d,
            decode: p,
            unescape: p,
            version: "1.0.0-browser"
        };
    },
    YWVf: function(e, t, n) {
        "use strict";
        n("W+W9");
        var o = n("KXS/"), r = n("RFFd"), a = n("bCdr"), i = n("HhHV");
        function l(e, t, n) {
            var l = [], s = !0 === n ? t : o({}, i, t), d = a(l, s);
            return r(e, d), l.join("");
        }
        l.defaults = i, e.exports = l;
    },
    adMq: function(e, t, n) {
        "use strict";
        var o = {
            props: {
                mode: {
                    type: String
                },
                appear: Boolean
            }
        }, r = n("HbXO"), a = n("K+aO");
        var i = Object(a.default)(o, (function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("transition", {
                attrs: {
                    "enter-active-class": e.$style.enterActive,
                    "leave-active-class": e.$style.leaveActive,
                    mode: e.mode,
                    appear: e.appear
                },
                on: {
                    "after-leave": function(t) {
                        return e.$emit("transitionComplete");
                    }
                }
            }, [ e._t("default") ], 2);
        }), [], !1, (function(e) {
            this.$style = r.default.locals || r.default;
        }), null, null);
        t.a = i.exports;
    },
    ayNN: function(e, t, n) {
        "use strict";
        var o = n("7MKI"), r = n.n(o);
        t.default = r.a;
    },
    bCdr: function(e, t, n) {
        "use strict";
        var o = n("W+W9"), r = n("OdXY"), a = n("Pafc"), i = n("hu0r");
        e.exports = function(e, t) {
            var n, l = t || {};
            return u(), {
                start: function(e, t, i) {
                    var p = r(e);
                    if (n.ignoring) return void d(p);
                    if (-1 === (l.allowedTags || []).indexOf(p)) return void d(p);
                    if (l.filter && !l.filter({
                        tag: p,
                        attrs: t
                    })) return void d(p);
                    s("<"), s(p), Object.keys(t).forEach((function(e) {
                        var n = t[e], i = (l.allowedClasses || {})[p] || [], d = (l.allowedAttributes || {})[p] || [], u = r(e);
                        ("class" === u && -1 === d.indexOf(u) ? (n = n.split(" ").filter((function(e) {
                            return i && -1 !== i.indexOf(e);
                        })).join(" ").trim()).length : -1 !== d.indexOf(u) && (!0 !== a.uris[u] || function(e) {
                            var t = e[0];
                            if ("#" === t || "/" === t) return !0;
                            var n = e.indexOf(":");
                            if (-1 === n) return !0;
                            var o = e.indexOf("?");
                            if (-1 !== o && n > o) return !0;
                            var r = e.indexOf("#");
                            return -1 !== r && n > r || l.allowedSchemes.some(a);
                            function a(t) {
                                return 0 === e.indexOf(t + ":");
                            }
                        }(n))) && (s(" "), s(e), "string" == typeof n && (s('="'), s(o.encode(n)), s('"')));
                    })), s(i ? "/>" : ">");
                },
                end: function(e) {
                    var t = r(e);
                    -1 !== (l.allowedTags || []).indexOf(t) && !1 === n.ignoring ? (s("</"), s(t), s(">")) : p(t);
                },
                chars: function(e) {
                    !1 === n.ignoring && s(l.transformText ? l.transformText(e) : e);
                }
            };
            function s(t) {
                e.push(t);
            }
            function d(e) {
                i.voids[e] || (!1 === n.ignoring ? n = {
                    ignoring: e,
                    depth: 1
                } : n.ignoring === e && n.depth++);
            }
            function p(e) {
                n.ignoring === e && --n.depth <= 0 && u();
            }
            function u() {
                n = {
                    ignoring: !1,
                    depth: 0
                };
            }
        };
    },
    gaI4: function(e, t, n) {
        var o = n("mlPV");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, n("DtNa").default)("4e8fb61e", o, !0, {});
    },
    hu0r: function(e, t, n) {
        "use strict";
        var o = n("H7jL");
        e.exports = {
            voids: o([ "area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta" ])
        };
    },
    jOg2: function(e, t, n) {
        var o = n("RnKE");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, n("DtNa").default)("00d879d3", o, !0, {});
    },
    mLYF: function(e, t, n) {
        e.exports = n("ydjK")("mLYF");
    },
    mlPV: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, '.DownloadAppModal-header-1VQ{color:#191919;font-size:34px;font-weight:900}@media(max-width: 603px){.DownloadAppModal-header-1VQ{font-size:24px}}.DownloadAppModal-modal-3Fw{padding:0}@media(min-width: 604px)and (max-width: 1024px){.DownloadAppModal-modal-3Fw{padding-left:24px;padding-right:24px}}.DownloadAppModal-text-29h{color:dimgray;font-size:16px;margin-bottom:40px;margin-top:14px}.DownloadAppModal-imgContainer-2BW{background-image:url("https://a5.behance.net/f4269f28327d392d0d517fc059185758ab308ef2/img/profile/download-app-header.png");background-position:center;background-repeat:no-repeat;background-size:cover}@media(min-width: 604px){.DownloadAppModal-imgContainer-2BW{height:300px;width:100%}}@media only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx){.DownloadAppModal-imgContainer-2BW{background-image:url("https://a5.behance.net/f4269f28327d392d0d517fc059185758ab308ef2/img/profile/download-app-header@2x.png")}}@media(max-width: 603px){.DownloadAppModal-imgContainer-2BW{height:135px;margin:-15px -30px 0}}@media(min-width: 604px){.DownloadAppModal-content-2jB{padding:40px 73px}}@media(max-width: 603px){.DownloadAppModal-content-2jB{margin:30px -15px 0;padding:0}}.DownloadAppModal-downloadButtons-1bE{margin:25px 30px 0}@media(max-width: 603px){.DownloadAppModal-downloadButtons-1bE{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center}}.DownloadAppModal-downloadButton-3kz{background-repeat:no-repeat;display:inline-block;font-size:0;height:40px;line-height:40px;margin:0 5px;width:135px}@media(max-width: 603px){.DownloadAppModal-downloadButton-3kz{display:block;height:50px;line-height:50px;width:168px}}', "" ]), 
        t.locals = {
            header: "DownloadAppModal-header-1VQ",
            modal: "DownloadAppModal-modal-3Fw",
            text: "DownloadAppModal-text-29h",
            imgContainer: "DownloadAppModal-imgContainer-2BW",
            content: "DownloadAppModal-content-2jB",
            downloadButtons: "DownloadAppModal-downloadButtons-1bE",
            downloadButton: "DownloadAppModal-downloadButton-3kz"
        };
    },
    tvyt: function(e, t, n) {
        "use strict";
        var o = n("7Wgy"), r = n.n(o);
        t.default = r.a;
    },
    wnPb: function(e, t, n) {
        "use strict";
        var o = n("D57K"), r = n("mGku"), a = r.default.extend({
            props: {
                label: String,
                isActive: Boolean,
                shouldShowPlaceholder: {
                    type: Boolean,
                    default: !0
                },
                customLabelClass: String
            },
            data: function() {
                return {
                    notchWidth: 0
                };
            },
            computed: {
                floatedLabelStyles: function() {
                    return {
                        transform: "translate(0, " + (this.shouldShowFloatedLabel ? -17 : 0) + "px) scale(" + (this.shouldShowFloatedLabel ? .75 : 1) + ")"
                    };
                },
                notchStyles: function() {
                    return this.shouldShowFloatedLabel ? {
                        width: this.notchWidth + "px"
                    } : void 0;
                },
                shouldShowFloatedLabel: function() {
                    return this.isActive || !this.shouldShowPlaceholder;
                }
            },
            methods: {
                setNotchWidth: function() {
                    var e = this.$refs.label;
                    this.notchWidth = e ? Math.round(.75 * e.clientWidth) : 0;
                },
                handleVisibilityChange: function(e) {
                    e && this.setNotchWidth();
                }
            },
            watch: {
                label: function() {
                    return Object(o.__awaiter)(this, void 0, void 0, (function() {
                        return Object(o.__generator)(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return [ 4, this.$nextTick() ];

                              case 1:
                                return e.sent(), this.setNotchWidth(), [ 2 ];
                            }
                        }));
                    }));
                }
            },
            mounted: function() {
                this.setNotchWidth();
            }
        }), i = n("Nfs8"), l = n("K+aO");
        var s = Object(l.default)(a, (function() {
            var e, t, n, o, r = this, a = r.$createElement, i = r._self._c || a;
            return i("div", {
                directives: [ {
                    name: "observe-visibility",
                    rawName: "v-observe-visibility",
                    value: r.handleVisibilityChange,
                    expression: "handleVisibilityChange"
                } ],
                class: [ r.$style.borderContainer, (e = {}, e[r.$style.isActive] = r.isActive, e[r.$style.isFloated] = r.shouldShowFloatedLabel, 
                e) ]
            }, [ i("div", {
                class: [ r.$style.border, r.$style.leading ]
            }), i("div", {
                class: [ r.$style.border, r.$style.margin, (t = {}, t[r.$style.floated] = r.shouldShowFloatedLabel, 
                t) ]
            }), i("div", {
                class: [ r.$style.border, r.$style.notch, (n = {}, n[r.$style.floated] = r.shouldShowFloatedLabel, 
                n), r.customLabelClass ],
                style: r.notchStyles
            }, [ i("span", {
                ref: "label",
                class: r.$style.filterLabel,
                style: r.floatedLabelStyles
            }, [ r._v(" " + r._s(r.label) + " ") ]) ]), i("div", {
                class: [ r.$style.border, r.$style.margin, (o = {}, o[r.$style.floated] = r.shouldShowFloatedLabel, 
                o) ]
            }), i("div", {
                class: [ r.$style.border, r.$style.trailing ]
            }) ]);
        }), [], !1, (function(e) {
            this.$style = i.default.locals || i.default;
        }), null, null);
        t.a = s.exports;
    },
    yfgW: function(e, t, n) {
        "use strict";
        var o = n("5G4C"), r = n.n(o);
        t.default = r.a;
    }
} ]);
//# sourceMappingURL=Layout.vue.51a0184e47033aaffa53.js.map