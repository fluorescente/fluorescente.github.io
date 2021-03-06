(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 18 ], {
    "18mY": function(e, t, r) {
        "use strict";
        r("jQ3i");
        var n = {
            Vector: "spinner-vector"
        }, a = {
            data: function() {
                return {
                    svgId: "spinner-" + Date.now(),
                    testIds: n
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
        }, o = r("ayNN"), i = r("K+aO");
        var s = Object(i.default)(a, (function() {
            var e, t, r = this, n = r.$createElement, a = r._self._c || n;
            return a("div", {
                ref: "spinnerContainer",
                staticClass: "vc-Spinner rf-spinner",
                class: (e = {}, e[r.$style.standaloneSpinner] = !r.text && !r.autofill, e)
            }, [ a("svg", {
                class: [ (t = {}, t[r.$style.autofill] = r.autofill, t), "rf-spinner__spinner" ],
                attrs: {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 200 200",
                    preserveAspectRatio: "xMinYMin meet",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [ a("defs", [ a("linearGradient", {
                attrs: {
                    id: r.svgId,
                    x1: "0%",
                    y1: "0%",
                    x2: "65%",
                    y2: "0%"
                }
            }, [ a("stop", {
                ref: "def1",
                class: r.$style[r.color],
                attrs: {
                    offset: "0%"
                }
            }), a("stop", {
                ref: "def2",
                class: r.$style[r.color],
                attrs: {
                    offset: "100%",
                    "stop-opacity": "0"
                }
            }) ], 1) ], 1), a("circle", {
                attrs: {
                    cx: "100",
                    cy: "100",
                    r: "90",
                    fill: "transparent",
                    stroke: "url(#" + r.svgId + ")",
                    "stroke-width": "20"
                }
            }) ]), r.text ? a("p", {
                ref: "text",
                staticClass: "rf-spinner__text"
            }, [ r._v(r._s(r.text)) ]) : r._e() ]);
        }), [], !1, (function(e) {
            this.$style = o.default.locals || o.default;
        }), null, null);
        t.a = s.exports;
    },
    "20Oh": function(e, t, r) {
        "use strict";
        var n = r("YWVf"), a = r.n(n), o = r("mGku"), i = r("wnPb"), s = o.default.extend({
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
                    return a()(e, {
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
        }), l = r("yfgW"), u = r("K+aO");
        var c = Object(u.default)(s, (function() {
            var e, t, r, n, a = this, o = a.$createElement, i = a._self._c || o;
            return i("div", {
                ref: "root",
                class: [ a.$style.textInput, (e = {}, e[a.$style.error] = a.hasError, e[a.$style.errorOver] = "over" === a.errorLayout, 
                e[a.$style.textInputWithSpace] = !a.standalone, e) ]
            }, [ i("label", {
                ref: "label",
                class: [ a.$style.label, a.customCursorClass ]
            }, [ !a.hasNewLabelStyle && a.label ? [ a._v(" " + a._s(a.label)) ] : a._e(), i("input", {
                ref: "input",
                class: [ a.$style.input, (t = {}, t[a.$style.dark] = a.isDark, t[a.$style.unlabeled] = a.unlabeled, 
                t[a.$style.disabled] = a.disabled, t[a.$style.inputWithSpace] = !a.standalone, t[a.$style.placeholderLight] = "light" === a.placeholderStyle, 
                t[a.$style.forProjectEditor] = a.isForProjectEditor, t[a.$style.withNewLabelStyle] = a.hasNewLabelStyle, 
                t), a.customBorderRadiusClass, "e2e-TextInput-input" ],
                style: {
                    "padding-left": a.shimPadding
                },
                attrs: {
                    type: a.type,
                    name: a.name,
                    placeholder: a.hasNewLabelStyle ? void 0 : a.placeholder,
                    disabled: a.disabled,
                    required: a.required,
                    maxlength: a.maxlength,
                    minlength: a.minlength,
                    autocomplete: a.autocomplete,
                    readonly: a.readonly,
                    autofocus: a.autofocus
                },
                domProps: {
                    value: a.localValue
                },
                on: {
                    input: a.handleInput,
                    blur: a.handleBlur,
                    focus: function(e) {
                        a.isFocused = !0;
                    },
                    keyup: function(e) {
                        return !e.type.indexOf("key") && a._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : a.handleKeyupEnter(e);
                    }
                }
            }), a.hasNewLabelStyle && a.label ? i("BorderAndLabelManager", {
                class: [ a.$style.borderManager, (r = {}, r[a.$style.unlabeled] = a.unlabeled, r) ],
                attrs: {
                    label: a.label,
                    isActive: a.isFocused,
                    shouldShowPlaceholder: a.shouldShowPlaceholder
                }
            }) : a._e() ], 2), a.hasError ? i("p", {
                ref: "errorMessage",
                class: [ a.$style.errorMessage, (n = {}, n[a.$style.fixed] = a.isErrorMessageFixed, 
                n) ]
            }, [ a._v(a._s(a.errorMessage)) ]) : a._e() ]);
        }), [], !1, (function(e) {
            this.$style = l.default.locals || l.default;
        }), null, null);
        t.a = c.exports;
    },
    "2yx5": function(e, t, r) {
        "use strict";
        var n = r("D57K"), a = r("mGku"), o = r("20Oh"), i = r("OQxq"), s = r("Uuoj"), l = a.default.extend({
            data: function() {
                return {
                    name: "",
                    isStripeCardFilled: !1
                };
            },
            components: {
                TextInput: o.a,
                Btn: i.default
            },
            props: {
                submitCTA: {
                    type: String,
                    required: !0
                },
                stripe: s.b,
                errorMessage: String,
                isProcessingPayment: Boolean
            },
            mounted: function() {
                this.renderCardElement();
            },
            beforeDestroy: function() {
                var e;
                null === (e = this.stripe) || void 0 === e || e.destroy();
            },
            methods: {
                renderCardElement: function() {
                    if (this.stripe) {
                        var e = {
                            containerClasses: {
                                base: this.$style.stripeCard
                            },
                            onErrorMessage: this.handleStripeErrorMessage,
                            onReady: this.handleStripeReadyEvent,
                            onComplete: this.handleStripeCompleteEvent
                        };
                        this.stripe.mountElement(this.$refs.cardContainer, e);
                    }
                },
                handleStripeErrorMessage: function(e) {
                    this.$emit("error", e);
                },
                clearErrorMessage: function() {
                    this.$emit("error", "");
                },
                handleStripeReadyEvent: function() {
                    this.$emit("ready");
                },
                handleStripeCompleteEvent: function(e) {
                    this.isStripeCardFilled = e;
                },
                handleFormSubmission: function(e) {
                    return Object(n.__awaiter)(this, void 0, void 0, (function() {
                        return Object(n.__generator)(this, (function(t) {
                            return e.preventDefault(), this.stripe && this.isReadyToSubmit && this.$emit("submitted", this.name), 
                            [ 2 ];
                        }));
                    }));
                }
            },
            computed: {
                isReadyToSubmit: function() {
                    return this.name.length > 0 && this.isStripeCardFilled;
                }
            }
        }), u = r("LppE"), c = r("K+aO");
        var d = Object(c.default)(l, (function() {
            var e, t = this, r = t.$createElement, n = t._self._c || r;
            return n("form", {
                class: [ t.$style.container, (e = {}, e[t.$style.withError] = t.errorMessage && t.errorMessage.length > 0, 
                e) ],
                on: {
                    submit: t.handleFormSubmission
                }
            }, [ n("TextInput", {
                class: t.$style.textInput,
                attrs: {
                    label: t.$translate("subscription_payment_dialog_your_name", "Your Name"),
                    standalone: !0,
                    hasNewLabelStyle: !0
                },
                on: {
                    input: t.clearErrorMessage
                },
                model: {
                    value: t.name,
                    callback: function(e) {
                        t.name = e;
                    },
                    expression: "name"
                }
            }), n("div", {
                ref: "cardContainer"
            }), t.errorMessage ? n("span", {
                class: t.$style.errorMessage
            }, [ t._v(t._s(t.errorMessage)) ]) : t._e(), t.isProcessingPayment ? t._e() : n("Btn", {
                class: t.$style.subcribeCTA,
                attrs: {
                    type: "primary",
                    size: "mediumLarge",
                    typeAttr: "submit",
                    disabled: !t.isReadyToSubmit
                }
            }, [ n("div", {
                domProps: {
                    innerHTML: t._s(t.submitCTA)
                }
            }) ]) ], 1);
        }), [], !1, (function(e) {
            this.$style = u.default.locals || u.default;
        }), null, null);
        t.a = d.exports;
    },
    "3+Oc": function(e, t, r) {
        "use strict";
        var n = r("K+aO"), a = Object(n.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 18 18",
                    fill: "#0057ff"
                }
            }, [ t("path", {
                attrs: {
                    d: "M1,16.256A.744.744,0,0,0,1.744,17H15.133a.744.744,0,0,0,.744-.744V15H1Z"
                }
            }), t("path", {
                attrs: {
                    d: "M15.033,9.513c-1.17.587-5.243,2.477-5.394,2.547a3.209,3.209,0,0,1-1.323.3,2.343,2.343,0,0,1-2.189-1.41,2.636,2.636,0,0,1,.581-2.879H1.744A.744.744,0,0,0,1,8.816v4.465H15.877V8.915a4.11,4.11,0,0,1-.845.6Z"
                }
            }), t("path", {
                attrs: {
                    d: "M5.75,6.586s.133-.607.4-1.568c.179-.655,2.486-3.526,3.37-3.821A53.713,53.713,0,0,1,15.27.635l2.23,3.89S15.532,7.6,14.367,8.182,8.99,10.721,8.99,10.721s-1.1.531-1.508-.38c-.312-.693.394-1.331.394-1.331S9.485,7.893,10.106,7.4c.45-.357.931-1.066.293-1.7s-1.287-.006-1.625.287-.669.6-.669.6Z"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = a.exports;
    },
    "4SqB": function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return _;
        })), r.d(t, "b", (function() {
            return y;
        })), r.d(t, "c", (function() {
            return S;
        }));
        var n, a, o = r("D57K"), i = r("60N7"), s = r("SFfQ"), l = r("BHX3"), u = r("Uuoj"), c = "SET_NEW_SUBSCRIPTION_DATA", d = "SET_SAVED_CARD_DATA", p = "SET_PAYMENT_ERROR", f = "SET_SUBSCRIPTION_ERROR", h = "SET_SETUP_INTENT_SECRET", b = "SET_SUBSCRIPTION_PRICE", m = "SET_LEFT_PANEL_SOURCE", g = "SET_STRIPE_ACCOUNT_ID", v = "SET_STRIPE_ELEMENTS", _ = {
            SUBSCRIBE_BUTTON_CLICKED: "SUBSCRIBE_BUTTON_CLICKED",
            NEW_CUSTOMER_SUBSCRIBE_BUTTON_CLICKED: "NEW_CUSTOMER_SUBSCRIBE_BUTTON_CLICKED",
            COMPONENT_MOUNTED: "COMPONENT_MOUNTED",
            UPDATE_CARD_CLICKED: "UPDATE_CARD_CLICKED",
            FORM_ERROR_TRIGGERED: "FORM_ERROR_TRIGGERED",
            EDIT_CARD_OPENED: "EDIT_CARD_OPENED",
            CONFIRM_PAYMENT: "CONFIRM_PAYMENT",
            CLICK_TO_SUBSCRIBE_SOURCE: "CLICK_TO_SUBSCRIBE_SOURCE"
        }, y = l.default.translate("stripe_card_error", "Your payment method was declined. Please verify your information and try again."), S = l.default.translate("subscription_checkout_generic_error", "An error has occurred, please try again.");
        e = {
            namespaced: !0,
            state: function() {
                return {
                    newSubscriptionData: null,
                    savedCardData: null,
                    paymentError: null,
                    subscriptionError: null,
                    setupIntentSecret: null,
                    subscriptionPrice: null,
                    leftPanelSource: null,
                    stripeAccountId: null,
                    stripeElements: null
                };
            },
            actions: (n = {}, n[_.SUBSCRIBE_BUTTON_CLICKED] = function(e, t) {
                var r, n, a, l, d, p = e.commit, h = e.dispatch, b = t.userId;
                return Object(o.__awaiter)(this, void 0, Promise, (function() {
                    var e, t, m, g, v;
                    return Object(o.__generator)(this, (function(S) {
                        switch (S.label) {
                          case 0:
                            return S.trys.push([ 0, 7, , 8 ]), p(f, null), [ 4, i.a.createSubscription(b) ];

                          case 1:
                            return e = S.sent().subscribeToCreator, t = (null === (n = null === (r = null == e ? void 0 : e.subscriber) || void 0 === r ? void 0 : r.stripeAccount) || void 0 === n ? void 0 : n.paymentMethod) || {}, 
                            m = Object(o.__assign)({
                                endsOn: null == e ? void 0 : e.endsOn,
                                status: null == e ? void 0 : e.status
                            }, t), p(c, m), (null === (a = null == e ? void 0 : e.payment) || void 0 === a ? void 0 : a.status) !== u.a.RequiresAction ? [ 3, 5 ] : [ 4, h(_.CONFIRM_PAYMENT, {
                                clientSecret: e.payment.clientSecret
                            }) ];

                          case 2:
                            return S.sent() ? [ 4, i.a.createSubscription(b) ] : [ 3, 4 ];

                          case 3:
                            g = S.sent(), p(c, Object(o.__assign)({
                                endsOn: null === (l = g.subscribeToCreator) || void 0 === l ? void 0 : l.endsOn,
                                status: null === (d = g.subscribeToCreator) || void 0 === d ? void 0 : d.status
                            }, t)), S.label = 4;

                          case 4:
                            return [ 3, 6 ];

                          case 5:
                            (null == m ? void 0 : m.status) === s.g.Incomplete && p(f, y), S.label = 6;

                          case 6:
                            return [ 3, 8 ];

                          case 7:
                            return (v = S.sent()).isBusinessLogic ? p(f, v.message) : h("error", v, {
                                root: !0
                            }), [ 3, 8 ];

                          case 8:
                            return [ 2 ];
                        }
                    }));
                }));
            }, n[_.CONFIRM_PAYMENT] = function(e, t) {
                var r = e.dispatch, n = e.state, a = e.rootState, i = t.clientSecret;
                return Object(o.__awaiter)(this, void 0, Promise, (function() {
                    var e;
                    return Object(o.__generator)(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return t.trys.push([ 0, 2, , 3 ]), [ 4, u.b.confirmCardPayment(i, n.stripeAccountId, Object(u.c)(a.gates, a.env), a.translation.localization.LOCALE) ];

                          case 1:
                            return [ 2, t.sent() === u.a.Succeeded ];

                          case 2:
                            return e = t.sent(), r(_.FORM_ERROR_TRIGGERED, e), [ 2, !1 ];

                          case 3:
                            return [ 2 ];
                        }
                    }));
                }));
            }, n[_.NEW_CUSTOMER_SUBSCRIBE_BUTTON_CLICKED] = function(e, t) {
                var r = e.dispatch, n = e.state, a = t.userId, i = t.name;
                return Object(o.__awaiter)(this, void 0, Promise, (function() {
                    return Object(o.__generator)(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return [ 4, r(_.UPDATE_CARD_CLICKED, {
                                name: i
                            }) ];

                          case 1:
                            return e.sent(), n.paymentError ? [ 3, 3 ] : [ 4, r(_.SUBSCRIBE_BUTTON_CLICKED, {
                                userId: a
                            }) ];

                          case 2:
                            e.sent(), e.label = 3;

                          case 3:
                            return [ 2 ];
                        }
                    }));
                }));
            }, n[_.COMPONENT_MOUNTED] = function(e, t) {
                var r, n, a, s = e.commit, l = e.dispatch, c = e.rootState, p = t.username, f = t.shouldFetchPrice, _ = t.projectId, y = t.livestreamId;
                return Object(o.__awaiter)(this, void 0, Promise, (function() {
                    var e, t, S, x, C, w, E, I, T, M, A, L;
                    return Object(o.__generator)(this, (function(o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([ 0, 2, , 3 ]), e = i.a.getInitData({
                                username: p,
                                shouldFetchPrice: f,
                                projectId: _,
                                livestreamId: y,
                                shouldFetchProject: Boolean(_),
                                shouldFetchLivestream: Boolean(y)
                            }), t = i.a.createSetupIntent(), S = new u.b(Object(u.c)(c.gates, c.env), c.translation.localization.LOCALE), 
                            [ 4, Promise.all([ e, t, S.loadPromise ]) ];

                          case 1:
                            return x = o.sent(), C = x[0], w = C.viewer, E = C.user, I = C.project, T = C.userLivestream, 
                            M = x[1].createSetupIntent, A = null === (r = null == w ? void 0 : w.stripeAccount) || void 0 === r ? void 0 : r.paymentMethod, 
                            s(d, A), s(h, null == M ? void 0 : M.clientSecret), s(b, null === (n = null == E ? void 0 : E.subscriptionProduct) || void 0 === n ? void 0 : n.unitAmount), 
                            s(m, _ ? I : T), s(g, null === (a = null == E ? void 0 : E.stripeAccount) || void 0 === a ? void 0 : a.id), 
                            s(v, S), [ 3, 3 ];

                          case 2:
                            return L = o.sent(), l("error", L, {
                                root: !0
                            }), [ 3, 3 ];

                          case 3:
                            return [ 2 ];
                        }
                    }));
                }));
            }, n[_.UPDATE_CARD_CLICKED] = function(e, t) {
                var r, n = e.commit, a = e.dispatch, s = e.state, l = t.name, u = t.onSuccess, c = void 0 === u ? function() {} : u;
                return Object(o.__awaiter)(this, void 0, Promise, (function() {
                    var e, t, u, b, m, g;
                    return Object(o.__generator)(this, (function(o) {
                        switch (o.label) {
                          case 0:
                            n(p, null), n(f, null), o.label = 1;

                          case 1:
                            return o.trys.push([ 1, 3, , 4 ]), [ 4, null === (r = s.stripeElements) || void 0 === r ? void 0 : r.confirmCardSetup(s.setupIntentSecret, l) ];

                          case 2:
                            return e = o.sent(), [ 3, 4 ];

                          case 3:
                            return t = o.sent(), a(_.FORM_ERROR_TRIGGERED, t), [ 2 ];

                          case 4:
                            return o.trys.push([ 4, 6, , 7 ]), [ 4, i.a.updateSavedCard(e) ];

                          case 5:
                            return u = o.sent().updateSubscriptionPaymentMethod, n(d, u), c(), [ 3, 7 ];

                          case 6:
                            return (b = o.sent()).isBusinessLogic ? n(p, b.message) : a("error", b, {
                                root: !0
                            }), [ 3, 7 ];

                          case 7:
                            return o.trys.push([ 7, 9, , 10 ]), [ 4, i.a.createSetupIntent() ];

                          case 8:
                            return m = o.sent().createSetupIntent, n(h, null == m ? void 0 : m.clientSecret), 
                            [ 3, 10 ];

                          case 9:
                            return g = o.sent(), a("error", g, {
                                root: !0
                            }), [ 3, 10 ];

                          case 10:
                            return [ 2 ];
                        }
                    }));
                }));
            }, n[_.FORM_ERROR_TRIGGERED] = function(e, t) {
                var r = e.commit, n = e.dispatch;
                r(f, null), r(p, null), "card_error" === (null == t ? void 0 : t.type) ? r(p, y) : "setup_intent_authentication_failure" === (null == t ? void 0 : t.code) ? r(p, t.message) : "payment_intent_authentication_failure" === (null == t ? void 0 : t.code) ? r(f, t.message) : "string" == typeof t ? r(p, t) : n("error", t, {
                    root: !0
                });
            }, n[_.CLICK_TO_SUBSCRIBE_SOURCE] = function() {}, n),
            mutations: (a = {}, a[c] = function(e, t) {
                e.newSubscriptionData = t;
            }, a[d] = function(e, t) {
                e.savedCardData = t;
            }, a[p] = function(e, t) {
                e.paymentError = t;
            }, a[f] = function(e, t) {
                e.subscriptionError = t;
            }, a[h] = function(e, t) {
                e.setupIntentSecret = t;
            }, a[b] = function(e, t) {
                e.subscriptionPrice = t;
            }, a[m] = function(e, t) {
                e.leftPanelSource = t;
            }, a[g] = function(e, t) {
                e.stripeAccountId = t;
            }, a[v] = function(e, t) {
                e.stripeElements = t;
            }, a)
        };
        t.d = e;
    },
    "5G4C": function(e, t, r) {
        var n = r("NlyD");
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, r("DtNa").default)("d0ee1b30", n, !0, {});
    },
    "60N7": function(e, t, r) {
        "use strict";
        var n, a, o, i, s = r("D57K"), l = r("19SN");
        t.a = {
            createSubscription: function(e) {
                return Object(l.b)({
                    query: Object(l.a)(n || (n = Object(s.__makeTemplateObject)([ "\n        mutation subscribeToCreator($creatorId: Int!) {\n          subscribeToCreator(creator_id: $creatorId) {\n            status\n            endsOn\n            payment {\n              status\n              nextAction\n              clientSecret\n            }\n            subscriber {\n              stripeAccount {\n                paymentMethod {\n                  lastFour\n                  expMonth\n                  expYear\n                  brand\n                }\n              }\n            }\n          }\n        }\n      " ], [ "\n        mutation subscribeToCreator($creatorId: Int!) {\n          subscribeToCreator(creator_id: $creatorId) {\n            status\n            endsOn\n            payment {\n              status\n              nextAction\n              clientSecret\n            }\n            subscriber {\n              stripeAccount {\n                paymentMethod {\n                  lastFour\n                  expMonth\n                  expYear\n                  brand\n                }\n              }\n            }\n          }\n        }\n      " ]))),
                    variables: {
                        creatorId: e
                    }
                });
            },
            getInitData: function(e) {
                var t = e.username, r = e.shouldFetchPrice, n = e.projectId, o = e.livestreamId, i = e.shouldFetchProject, u = e.shouldFetchLivestream;
                return Object(l.b)({
                    query: Object(l.a)(a || (a = Object(s.__makeTemplateObject)([ "\n        query GetInitDataForSubscriptionCheckout(\n          $username: String\n          $shouldFetchPrice: Boolean!\n          $projectId: Int!\n          $shouldFetchProject: Boolean!\n          $livestreamId: String!\n          $shouldFetchLivestream: Boolean!\n        ) {\n          viewer {\n            stripeAccount {\n              paymentMethod {\n                lastFour\n                expMonth\n                expYear\n                brand\n              }\n            }\n          }\n\n          user(username: $username) {\n            subscriptionProduct @include(if: $shouldFetchPrice) {\n              unitAmount\n            }\n            stripeAccount {\n              id\n            }\n          }\n\n          project(id: $projectId) @include(if: $shouldFetchProject) {\n            name\n            linkedAssetsCount\n            covers {\n              size_202 {\n                url\n              }\n              size_404 {\n                url\n              }\n              size_808 {\n                url\n              }\n            }\n          }\n\n          userLivestream(streamId: $livestreamId) @include(if: $shouldFetchLivestream) {\n            thumbnailUrl\n            durationSeconds\n            linkedAssetsCount\n            title\n          }\n        }\n      " ], [ "\n        query GetInitDataForSubscriptionCheckout(\n          $username: String\n          $shouldFetchPrice: Boolean!\n          $projectId: Int!\n          $shouldFetchProject: Boolean!\n          $livestreamId: String!\n          $shouldFetchLivestream: Boolean!\n        ) {\n          viewer {\n            stripeAccount {\n              paymentMethod {\n                lastFour\n                expMonth\n                expYear\n                brand\n              }\n            }\n          }\n\n          user(username: $username) {\n            subscriptionProduct @include(if: $shouldFetchPrice) {\n              unitAmount\n            }\n            stripeAccount {\n              id\n            }\n          }\n\n          project(id: $projectId) @include(if: $shouldFetchProject) {\n            name\n            linkedAssetsCount\n            covers {\n              size_202 {\n                url\n              }\n              size_404 {\n                url\n              }\n              size_808 {\n                url\n              }\n            }\n          }\n\n          userLivestream(streamId: $livestreamId) @include(if: $shouldFetchLivestream) {\n            thumbnailUrl\n            durationSeconds\n            linkedAssetsCount\n            title\n          }\n        }\n      " ]))),
                    variables: {
                        username: t,
                        shouldFetchPrice: r,
                        projectId: i ? n : 0,
                        livestreamId: u ? o : "0",
                        shouldFetchLivestream: u,
                        shouldFetchProject: i
                    }
                });
            },
            updateSavedCard: function(e) {
                return Object(l.b)({
                    query: Object(l.a)(o || (o = Object(s.__makeTemplateObject)([ "\n        mutation updateSubscriptionPaymentMethodFromCheckout($paymentMethodId: String!) {\n          updateSubscriptionPaymentMethod(payment_method_id: $paymentMethodId) {\n            lastFour\n            expMonth\n            expYear\n            brand\n          }\n        }\n      " ], [ "\n        mutation updateSubscriptionPaymentMethodFromCheckout($paymentMethodId: String!) {\n          updateSubscriptionPaymentMethod(payment_method_id: $paymentMethodId) {\n            lastFour\n            expMonth\n            expYear\n            brand\n          }\n        }\n      " ]))),
                    variables: {
                        paymentMethodId: e
                    }
                });
            },
            createSetupIntent: function() {
                return Object(l.b)({
                    query: Object(l.a)(i || (i = Object(s.__makeTemplateObject)([ "\n        mutation createSetupIntentForCustomer {\n          createSetupIntent {\n            clientSecret\n          }\n        }\n      " ], [ "\n        mutation createSetupIntentForCustomer {\n          createSetupIntent {\n            clientSecret\n          }\n        }\n      " ])))
                });
            }
        };
    },
    "7MKI": function(e, t, r) {
        var n = r("If1a");
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, r("DtNa").default)("28d615bb", n, !0, {});
    },
    "81un": function(e, t, r) {
        var n = r("FbDQ");
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, r("DtNa").default)("0e5b78de", n, !0, {});
    },
    "8EsV": function(e, t, r) {
        (t = e.exports = r("RDo7")(!1)).push([ e.i, ".UpdateCardModal-container-35V{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;margin:50px 55px 20px;width:400px}@media(max-width: 603px){.UpdateCardModal-container-35V{margin:0;width:auto}}.UpdateCardModal-spinner-_Uw,.UpdateCardModal-formSpinner-1Ny{display:-webkit-box;display:flex}.UpdateCardModal-spinner-_Uw{margin:50px 0}.UpdateCardModal-formSpinner-1Ny{margin:20px 0 5px}.UpdateCardModal-title-1wo{font-size:22px;font-weight:900;line-height:27px}.UpdateCardModal-stripeForm-33e{width:100%}.UpdateCardModal-infoText-G0G{font-size:14px;margin:15px 0 30px}.UpdateCardModal-modal-3rG{min-width:unset;padding:0}.UpdateCardModal-disabledCloseButton-326{opacity:.2;pointer-events:none}.UpdateCardModal-stripeLogo-3c6{margin-bottom:15px}", "" ]), 
        t.locals = {
            container: "UpdateCardModal-container-35V",
            spinner: "UpdateCardModal-spinner-_Uw",
            formSpinner: "UpdateCardModal-formSpinner-1Ny",
            title: "UpdateCardModal-title-1wo",
            stripeForm: "UpdateCardModal-stripeForm-33e",
            infoText: "UpdateCardModal-infoText-G0G",
            modal: "UpdateCardModal-modal-3rG",
            disabledCloseButton: "UpdateCardModal-disabledCloseButton-326",
            stripeLogo: "UpdateCardModal-stripeLogo-3c6"
        };
    },
    FbDQ: function(e, t, r) {
        (t = e.exports = r("RDo7")(!1)).push([ e.i, '.BorderAndLabelManager-control-1Q8{cursor:pointer;height:100%;position:absolute}.BorderAndLabelManager-control-1Q8::before{background:-webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), color-stop(70%, white));background:linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, white 70%);content:"";height:100%;position:absolute;width:100px;z-index:1}.BorderAndLabelManager-control-1Q8.BorderAndLabelManager-prev-1yt::before{left:0}.BorderAndLabelManager-control-1Q8.BorderAndLabelManager-next-3px::before{background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(70%, white));background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 70%);right:-3px}.BorderAndLabelManager-control-1Q8:active .BorderAndLabelManager-arrow-3Rw{background-color:#e4e4e4;fill:#191919}.no-has-touch .BorderAndLabelManager-control-1Q8:hover .BorderAndLabelManager-arrow-3Rw{background-color:#f1f1f1;fill:#191919}.BorderAndLabelManager-prev-1yt{left:0}.BorderAndLabelManager-next-3px{right:3px;width:100px}.BorderAndLabelManager-arrow-3Rw{-webkit-box-align:center;align-items:center;background-color:#fff;border-radius:50%;box-shadow:0 -2px 4px rgba(0,0,0,.16);display:-webkit-box;display:flex;fill:#959595;height:34px;-webkit-box-pack:center;justify-content:center;margin-top:4px;padding-left:2px;position:absolute;top:34%;-webkit-transition:background-color .15s linear;transition:background-color .15s linear;width:34px;z-index:1}.BorderAndLabelManager-prev-1yt .BorderAndLabelManager-arrow-3Rw{margin-left:2px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.BorderAndLabelManager-next-3px .BorderAndLabelManager-arrow-3Rw{box-shadow:0 2px 4px rgba(0,0,0,.16);right:0}.BorderAndLabelManager-navArrow-30B{height:17px;width:11px}.BorderAndLabelManager-borderContainer-AYl{display:-webkit-box;display:flex;pointer-events:none;position:absolute}.BorderAndLabelManager-borderContainer-AYl.BorderAndLabelManager-isActive-1he .BorderAndLabelManager-border-zj1{border-color:#0057ff}.BorderAndLabelManager-border-zj1{border-color:#e8e8e8;border-width:1px;-webkit-transition:border-color .2s linear;transition:border-color .2s linear}.BorderAndLabelManager-leading-3OC{border-bottom-style:solid;border-left-style:solid;border-radius:4px 0 0 4px;border-top-style:solid;width:7px}.BorderAndLabelManager-notch-25t{-webkit-box-align:center;align-items:center;border-bottom-style:solid;border-top-style:solid;display:-webkit-box;display:flex;white-space:nowrap}.BorderAndLabelManager-margin-3Bw{border-bottom-style:solid;border-top-style:solid;width:3px}.BorderAndLabelManager-floated-1Gv{border-top-style:none}.BorderAndLabelManager-trailing-1lL{border-bottom-style:solid;border-radius:0 4px 4px 0;border-right-style:solid;border-top-style:solid;-webkit-box-flex:1;flex-grow:1;min-width:4px}.BorderAndLabelManager-filterLabel-12q{-webkit-backface-visibility:hidden;backface-visibility:hidden;color:#959595;font-size:13px;font-weight:600;-webkit-transform-origin:left;transform-origin:left;-webkit-transition:color .2s linear,-webkit-transform .2s cubic-bezier(0.19, 1, 0.22, 1);transition:color .2s linear,-webkit-transform .2s cubic-bezier(0.19, 1, 0.22, 1);transition:transform .2s cubic-bezier(0.19, 1, 0.22, 1),color .2s linear;transition:transform .2s cubic-bezier(0.19, 1, 0.22, 1),color .2s linear,-webkit-transform .2s cubic-bezier(0.19, 1, 0.22, 1);will-change:transform}.BorderAndLabelManager-isFloated-35g .BorderAndLabelManager-filterLabel-12q{color:#707070;font-weight:bold;padding-top:3px}.BorderAndLabelManager-isActive-1he .BorderAndLabelManager-filterLabel-12q{color:#0057ff;font-weight:bold}', "" ]), 
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
    H7jL: function(e, t, r) {
        "use strict";
        function n(e, t) {
            return e[t] = !0, e;
        }
        e.exports = function(e) {
            return e.reduce(n, {});
        };
    },
    HhHV: function(e, t, r) {
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
    Hp28: function(e, t, r) {
        "use strict";
        r.d(t, "i", (function() {
            return o;
        })), r.d(t, "f", (function() {
            return i;
        })), r.d(t, "c", (function() {
            return s;
        })), r.d(t, "d", (function() {
            return l;
        })), r.d(t, "e", (function() {
            return u;
        })), r.d(t, "g", (function() {
            return c;
        })), r.d(t, "h", (function() {
            return d;
        })), r.d(t, "a", (function() {
            return p;
        })), r.d(t, "b", (function() {
            return f;
        }));
        var n = r("BHX3"), a = r("IUfN"), o = {
            INFO: {
                key: "info",
                name: n.default.translate("profile_tab_info", "Info"),
                routeName: "profileInfo"
            },
            WORK: {
                key: "work",
                name: n.default.translate("profile_tab_work", "Work"),
                routeName: "profileWork"
            },
            LIVESTREAMREPLAYS: {
                key: "livestream",
                name: n.default.translate("profile_tab_videos", "Videos"),
                routeName: "profileLivestreamReplays"
            },
            LIVESTREAMS: {
                key: "livestreams",
                name: n.default.translate("profile_tab_livestreams", "Livestreams"),
                routeName: "profileLivestreams"
            },
            COLLECTIONS: {
                key: "collections",
                name: n.default.translate("profile_tab_collections", "Collections"),
                routeName: "profileCollections"
            },
            MOODBOARDS: {
                key: "moodboards",
                name: n.default.translate("profile_tab_moodboards", "Moodboards"),
                routeName: "profileMoodboards"
            },
            APPRECIATIONS: {
                key: "appreciations",
                name: n.default.translate("profile_tab_appreciations", "Appreciations"),
                routeName: "profileAppreciations"
            },
            DRAFTS: {
                key: "drafts",
                name: n.default.translate("profile_tab_drafts", "Drafts"),
                routeName: "profileDrafts"
            },
            INSIGHTS: {
                key: "insights",
                name: n.default.translate("profile_tab_insights", "Insights"),
                routeName: "profileInsights"
            },
            SUBSCRIPTION: {
                key: "subscription",
                name: n.default.translate("subscription_profile_tab_title", "Subscriber Area"),
                routeName: "profileSubscription",
                icon: a.a,
                tooltipFlag: "hasSeenProfileTabInnerCircleTooltip",
                pulsePointTooltipText: n.default.translate("subscription_profile_tab_pulse_point_text", "You can now create your subscriptions to offer premium projects, livestreams, and source files to your viewers, and start collecting payments.")
            }
        }, i = {
            AVATAR: 110,
            MODALAVATAR: 90
        }, s = 5, l = 100, u = 1, c = .3, d = .029, p = 0, f = .08;
    },
    IUfN: function(e, t, r) {
        "use strict";
        var n = r("K+aO"), a = Object(n.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "15",
                    viewBox: "3 2 12 15"
                }
            }, [ t("path", {
                attrs: {
                    d: "M14.5,8H14V7A5,5,0,1,0,4,7V8H3.5a.5.5,0,0,0-.5.5v8a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-8A.5.5,0,0,0,14.5,8ZM6,7a3,3,0,1,1,6,0V8H6Zm4,6.111V14.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V13.111a1.5,1.5,0,1,1,2,0Z"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = a.exports;
    },
    If1a: function(e, t, r) {
        (t = e.exports = r("RDo7")(!1)).push([ e.i, ".rf-spinner__spinner:only-child.Spinner-autofill-2bc{height:100%;min-height:100%;min-width:100%;width:100%}.Spinner-blue-3_W{stop-color:#0057ff}.Spinner-white-2Dl{stop-color:#fff}.Spinner-standaloneSpinner-25B{height:35px;width:35px}", "" ]), 
        t.locals = {
            autofill: "Spinner-autofill-2bc",
            blue: "Spinner-blue-3_W",
            white: "Spinner-white-2Dl",
            standaloneSpinner: "Spinner-standaloneSpinner-25B"
        };
    },
    "KXS/": function(e, t, r) {
        "use strict";
        e.exports = function e(t) {
            for (var r, n, a = Array.prototype.slice.call(arguments, 1); a.length; ) for (n in r = a.shift()) r.hasOwnProperty(n) && ("[object Object]" === Object.prototype.toString.call(t[n]) ? t[n] = e(t[n], r[n]) : t[n] = r[n]);
            return t;
        };
    },
    LSg9: function(e, t, r) {
        "use strict";
        var n = r("mGku"), a = r("hw/L"), o = n.default.extend({
            components: {
                PoweredByStripe: a.a
            },
            computed: {
                legalText: function() {
                    return this.$translate("subscription_legal_payment_text", 'Charged monthly, cancel in your Behance account. <a href="https://help.behance.net/hc/en-us/articles/4402610610715" target="_blank" class="{class}">Learn more</a><br/>Your information is sent to Stripe for payment processing and is subject to its <a href="https://stripe.com/privacy-center/legal" target="_blank" class="{class}">Privacy Policy</a>.', {
                        class: this.$style.legalLink
                    });
                }
            }
        }), i = r("mpF0"), s = r("K+aO");
        var l = Object(s.default)(o, (function() {
            var e = this, t = e.$createElement, r = e._self._c || t;
            return r("div", {
                class: e.$style.container
            }, [ r("div", {
                class: e.$style.divider
            }), r("a", {
                class: e.$style.poweredByLink,
                attrs: {
                    href: "https://stripe.com",
                    target: "_blank"
                }
            }, [ r("PoweredByStripe", {
                class: e.$style.poweredBy
            }) ], 1), r("p", {
                class: e.$style.legalText,
                domProps: {
                    innerHTML: e._s(e.legalText)
                }
            }) ]);
        }), [], !1, (function(e) {
            this.$style = i.default.locals || i.default;
        }), null, null);
        t.a = l.exports;
    },
    LppE: function(e, t, r) {
        "use strict";
        var n = r("tFUc"), a = r.n(n);
        t.default = a.a;
    },
    Nfs8: function(e, t, r) {
        "use strict";
        var n = r("81un"), a = r.n(n);
        t.default = a.a;
    },
    NlyD: function(e, t, r) {
        (t = e.exports = r("RDo7")(!1)).push([ e.i, ".TextInput-textInput-29G{font-size:13px;position:relative;vertical-align:top}.TextInput-textInputWithSpace-2so{margin-bottom:15px}.TextInput-label-1SN{font-family:inherit;font-size:13px;line-height:1.3;cursor:pointer;display:block;font-weight:bold}.TextInput-input-1ZG{border:1px solid #ccc;border-radius:3px;box-sizing:border-box;color:#191919;display:block;font-weight:600;height:32px;padding:4px;padding-left:10px;width:100%}.TextInput-input-1ZG::-webkit-input-placeholder{color:#707070}.TextInput-input-1ZG::-moz-placeholder{color:#707070}.TextInput-input-1ZG:-ms-input-placeholder{color:#707070}.TextInput-input-1ZG::-ms-input-placeholder{color:#707070}.TextInput-input-1ZG::placeholder{color:#707070}.TextInput-input-1ZG.TextInput-withNewLabelStyle-1H5{border:0}.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-webkit-input-placeholder{color:#fff}.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-moz-placeholder{color:#fff}.TextInput-input-1ZG.TextInput-placeholderLight-1WL:-ms-input-placeholder{color:#fff}.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-ms-input-placeholder{color:#fff}.TextInput-input-1ZG.TextInput-placeholderLight-1WL::placeholder{color:#fff}.TextInput-input-1ZG:hover{border-color:dimgray}.TextInput-input-1ZG:focus{border-color:#0057ff}.TextInput-input-1ZG:focus.focus-visible{outline:none}.TextInput-error-1H3 .TextInput-input-1ZG{border-color:#d00}.TextInput-input-1ZG.TextInput-disabled-KjM{background:#e8e8e8;color:#959595}.TextInput-input-1ZG.TextInput-forProjectEditor-dsA{height:38px}.TextInput-inputWithSpace-33q{margin-top:8px}.TextInput-inputWithSpace-33q.TextInput-unlabeled-1hM{margin-top:21px}.TextInput-errorMessage-3fr{color:#d00;font-size:12px;font-weight:600;margin-bottom:0;margin-top:5px}.TextInput-errorMessage-3fr.TextInput-fixed-3zs{position:absolute}.TextInput-textInput-29G.TextInput-errorOver-2A9{position:relative}.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-input-1ZG,.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-input-1ZG.TextInput-unlabeled-1hM{margin-top:0}.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-errorMessage-3fr{bottom:100%;font-style:normal;margin-bottom:5px;margin-top:0;position:absolute}.TextInput-dark-FIp{font-family:inherit;font-size:13px;line-height:1.3;background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.25);color:#fff;min-width:343px}.TextInput-input-1ZG{-webkit-transition:border-color .15s linear,color .15s linear,background-color .15s linear;transition:border-color .15s linear,color .15s linear,background-color .15s linear}.TextInput-borderManager-20g{height:32px;left:0;top:0;width:100%}", "" ]), 
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
    OZJy: function(e, t, r) {
        "use strict";
        var n = r("mGku"), a = r("LSg9"), o = r("2yx5"), i = r("18mY"), s = r("mLYF"), l = r("Uuoj"), u = n.default.extend({
            data: function() {
                return {
                    haveStripeElementsLoaded: !1
                };
            },
            props: {
                isProcessingCardUpdate: Boolean,
                errorMessage: String,
                stripe: l.b
            },
            components: {
                Modal: s.default,
                StripeFooter: a.a,
                StripeCardForm: o.a,
                Spinner: i.a
            },
            computed: {
                isModalClosable: function() {
                    return !this.isProcessingCardUpdate;
                }
            },
            methods: {
                handleCloseModal: function() {
                    this.isModalClosable && (this.$emit("error", ""), this.$emit("close"));
                }
            }
        }), c = r("VScS"), d = r("K+aO");
        var p = Object(d.default)(u, (function() {
            var e, t = this, r = t.$createElement, n = t._self._c || r;
            return n("Modal", {
                attrs: {
                    showModal: !0,
                    clickToClose: t.isModalClosable,
                    customizedCloseIconClass: t.isModalClosable ? "" : t.$style.disabledCloseButton,
                    customizedDesktopCloseIconClass: t.isModalClosable ? "" : t.$style.disabledCloseButton,
                    contentClass: t.$style.modal
                },
                on: {
                    closeModal: t.handleCloseModal
                }
            }, [ n("div", {
                class: t.$style.container
            }, [ n("h1", {
                class: t.$style.title
            }, [ t._v(t._s(t.$translate("subscription_payment_dialog_update_card_pane_title", "Update Credit Card"))) ]), n("span", {
                class: t.$style.infoText
            }, [ t._v(" " + t._s(t.$translate("subscription_payment_dialog_update_card_info_text", "Your payment method will be updated for all your subscriptions.")) + " ") ]), null !== t.stripe ? n("StripeCardForm", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.haveStripeElementsLoaded,
                    expression: "haveStripeElementsLoaded"
                } ],
                class: t.$style.stripeForm,
                attrs: {
                    submitCTA: t.$translate("subscription_payment_dialog_update_payment_cta", "Update Payment Method"),
                    isProcessingPayment: t.isProcessingCardUpdate,
                    errorMessage: t.errorMessage,
                    stripe: t.stripe
                },
                on: {
                    ready: function(e) {
                        t.haveStripeElementsLoaded = !0;
                    },
                    submitted: function(e) {
                        return t.$emit("updateCard", e);
                    },
                    error: function(e) {
                        return t.$emit("error", e);
                    }
                }
            }) : t._e(), !t.haveStripeElementsLoaded || t.isProcessingCardUpdate ? n("Spinner", {
                class: (e = {}, e[t.$style.spinner] = !t.haveStripeElementsLoaded, e[t.$style.formSpinner] = t.isProcessingCardUpdate, 
                e)
            }) : t._e(), n("StripeFooter", {
                class: t.$style.stripeLogo
            }) ], 1) ]);
        }), [], !1, (function(e) {
            this.$style = c.default.locals || c.default;
        }), null, null);
        t.a = p.exports;
    },
    OdXY: function(e, t, r) {
        "use strict";
        e.exports = function(e) {
            return "string" == typeof e ? e.toLowerCase() : e;
        };
    },
    Pafc: function(e, t, r) {
        "use strict";
        var n = r("H7jL");
        e.exports = {
            uris: n([ "background", "base", "cite", "href", "longdesc", "src", "usemap" ])
        };
    },
    RFFd: function(e, t, r) {
        "use strict";
        var n = r("W+W9"), a = r("OdXY"), o = (r("Pafc"), r("hu0r")), i = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, s = /^<\s*\/\s*([\w:-]+)[^>]*>/, l = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, u = /^</, c = /^<\s*\//;
        e.exports = function(e, t) {
            for (var r, d = function() {
                var e = [];
                return e.lastItem = function() {
                    return e[e.length - 1];
                }, e;
            }(), p = e; e; ) f();
            function f() {
                r = !0, function() {
                    "\x3c!--" === e.substr(0, 4) ? (n = e.indexOf("--\x3e")) >= 0 && (t.comment && t.comment(e.substring(4, n)), 
                    e = e.substring(n + 3), r = !1) : c.test(e) ? h(s, m) : u.test(e) && h(i, b);
                    var n;
                    !function() {
                        if (!r) return;
                        var n, a = e.indexOf("<");
                        a >= 0 ? (n = e.substring(0, a), e = e.substring(a)) : (n = e, e = "");
                        t.chars && t.chars(n);
                    }();
                }();
                var n = e === p;
                p = e, n && (e = "");
            }
            function h(t, n) {
                var a = e.match(t);
                a && (e = e.substring(a[0].length), a[0].replace(t, n), r = !1);
            }
            function b(e, r, i, s) {
                var u = {}, c = a(r), p = o.voids[c] || !!s;
                i.replace(l, (function(e, t, r, a, o) {
                    u[t] = void 0 === r && void 0 === a && void 0 === o ? void 0 : n.decode(r || a || o || "");
                })), p || d.push(c), t.start && t.start(c, u, p);
            }
            function m(e, r) {
                var n, o = 0, i = a(r);
                if (i) for (o = d.length - 1; o >= 0 && d[o] !== i; o--) ;
                if (o >= 0) {
                    for (n = d.length - 1; n >= o; n--) t.end && t.end(d[n]);
                    d.length = o;
                }
            }
            m();
        };
    },
    SFfQ: function(e, t, r) {
        "use strict";
        var n, a, o, i, s, l, u, c, d, p, f, h, b, m, g, v, _;
        r.d(t, "a", (function() {
            return a;
        })), r.d(t, "b", (function() {
            return o;
        })), r.d(t, "c", (function() {
            return i;
        })), r.d(t, "d", (function() {
            return s;
        })), r.d(t, "e", (function() {
            return h;
        })), r.d(t, "f", (function() {
            return b;
        })), r.d(t, "g", (function() {
            return _;
        })), function(e) {
            e.En = "en", e.De = "de", e.Fr = "fr";
        }(n || (n = {})), function(e) {
            e.CcAllApps = "cc_all_apps", e.PhotoshopLightroom = "photoshop_lightroom", e.CcStudentsTeachers = "cc_students_teachers";
        }(a || (a = {})), function(e) {
            e.HireMe = "hire_me", e.HireUs = "hire_us";
        }(o || (o = {})), function(e) {
            e.Usd = "USD", e.Eur = "EUR", e.Ars = "ARS", e.Aed = "AED", e.Aud = "AUD", e.Bhd = "BHD", 
            e.Brl = "BRL", e.Btc = "BTC", e.Cad = "CAD", e.Chf = "CHF", e.Clp = "CLP", e.Cny = "CNY", 
            e.Cop = "COP", e.Dkk = "DKK", e.Egp = "EGP", e.Eth = "ETH", e.Gbp = "GBP", e.Hkd = "HKD", 
            e.Idr = "IDR", e.Ils = "ILS", e.Inr = "INR", e.Jod = "JOD", e.Jpy = "JPY", e.Krw = "KRW", 
            e.Kwd = "KWD", e.Lbp = "LBP", e.Mxn = "MXN", e.Myr = "MYR", e.Nok = "NOK", e.Omr = "OMR", 
            e.Pen = "PEN", e.Php = "PHP", e.Qar = "QAR", e.Rub = "RUB", e.Sar = "SAR", e.Sek = "SEK", 
            e.Sgd = "SGD", e.Thb = "THB", e.Try = "TRY", e.Twd = "TWD";
        }(i || (i = {})), function(e) {
            e.WithinNextFewWeeks = "within_next_few_weeks", e.WithinThreeMonths = "within_three_months", 
            e.ThreeToSixMonths = "three_to_six_months", e.OverSixMonths = "over_six_months";
        }(s || (s = {})), function(e) {
            e.En = "en", e.De = "de", e.Fr = "fr";
        }(l || (l = {})), function(e) {
            e.Discover = "DISCOVER", e.Tutorial = "TUTORIAL";
        }(u || (u = {})), function(e) {
            e.Live = "LIVE", e.Replays = "REPLAYS";
        }(c || (c = {})), function(e) {
            e.Project = "PROJECT", e.Module = "MODULE", e.GridItem = "GRID_ITEM";
        }(d || (d = {})), function(e) {
            e.Recommended = "recommended", e.ColdStart = "cold_start";
        }(p || (p = {})), function(e) {
            e.Project = "PROJECT", e.Livestream = "LIVESTREAM";
        }(f || (f = {})), function(e) {
            e.Private = "private", e.Public = "public";
        }(h || (h = {})), function(e) {
            e.NonPremium = "NON_PREMIUM", e.Premium = "PREMIUM";
        }(b || (b = {})), function(e) {
            e.Following = "FOLLOWING", e.Followers = "FOLLOWERS";
        }(m || (m = {})), function(e) {
            e.Image = "IMAGE", e.Embed = "EMBED";
        }(g || (g = {})), function(e) {
            e.NoAccount = "NO_ACCOUNT", e.NotLinked = "NOT_LINKED", e.Linked = "LINKED", e.PendingVerification = "PENDING_VERIFICATION", 
            e.RequiresUpdate = "REQUIRES_UPDATE", e.VerificationFailed = "VERIFICATION_FAILED", 
            e.CanCreateSubscription = "CAN_CREATE_SUBSCRIPTION", e.CanBeSubscribedTo = "CAN_BE_SUBSCRIBED_TO";
        }(v || (v = {})), function(e) {
            e.Unknown = "UNKNOWN", e.Active = "ACTIVE", e.Incomplete = "INCOMPLETE", e.Canceled = "CANCELED";
        }(_ || (_ = {}));
    },
    Uuoj: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n;
        })), r.d(t, "c", (function() {
            return d;
        }));
        var n, a = r("D57K"), o = r("E8ap"), i = r("XV5G"), s = {
            color: "#191919",
            fontFamily: "'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "13px",
            fontWeight: "600",
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "#959595"
            }
        }, l = [ {
            family: "acumin-pro",
            src: "url(" + o.ASSETS_URL + "fonts/AcuminPro/acumin-semibold.woff)",
            weight: "600"
        } ];
        function u(e) {
            return "zh_TW" === e ? "zh-TW" : "pt_BR" === e ? "pt-BR" : e.substr(0, 2);
        }
        !function(e) {
            e.RequiresAction = "requires_action", e.Succeeded = "succeeded";
        }(n || (n = {}));
        var c = function() {
            function e(e, t) {
                this._stripe = null, this._element = null, this._shouldCreateElement = !1, this._locale = u(t), 
                this.loadPromise = this._loadStripe(e, this._locale);
            }
            return e.prototype.mountElement = function(e, t) {
                var r = void 0 === t ? {} : t, n = r.containerClasses, o = void 0 === n ? {} : n, i = r.onErrorMessage, u = r.onComplete, c = r.onReady;
                return Object(a.__awaiter)(this, void 0, Promise, (function() {
                    var t, r, n;
                    return Object(a.__generator)(this, (function(a) {
                        switch (a.label) {
                          case 0:
                            return this._shouldCreateElement = !0, this.loadPromise ? [ 4, this.loadPromise ] : [ 3, 2 ];

                          case 1:
                            a.sent(), a.label = 2;

                          case 2:
                            return this._stripe && this._shouldCreateElement ? (t = function(e) {
                                if ("function" == typeof i) {
                                    var t = e.error ? e.error.message : "";
                                    i(t);
                                }
                                "function" == typeof u && u(e.complete);
                            }, r = this._stripe.elements({
                                locale: this._locale,
                                fonts: l
                            }), n = {
                                style: {
                                    base: s
                                },
                                classes: o
                            }, this._element = r.create("card", n), this._element.on("change", t), "function" == typeof c && this._element.on("ready", c), 
                            this._element.mount(e), [ 2 ]) : [ 2 ];
                        }
                    }));
                }));
            }, e.prototype.destroy = function() {
                var e;
                this._shouldCreateElement = !1, null === (e = this._element) || void 0 === e || e.destroy();
            }, e.prototype.confirmCardSetup = function(e, t) {
                return Object(a.__awaiter)(this, void 0, Promise, (function() {
                    var r, n, o;
                    return Object(a.__generator)(this, (function(a) {
                        switch (a.label) {
                          case 0:
                            return this._stripe && this._element ? [ 4, this._stripe.confirmCardSetup(e, {
                                payment_method: {
                                    card: this._element,
                                    billing_details: {
                                        name: t
                                    }
                                }
                            }) ] : [ 2, Promise.reject() ];

                          case 1:
                            if (r = a.sent(), n = r.setupIntent, o = r.error) throw o;
                            return [ 2, n.payment_method ];
                        }
                    }));
                }));
            }, e.prototype._loadStripe = function(e, t) {
                var r = this;
                return Object(i.loadStripe)(e, {
                    locale: t
                }).then((function(e) {
                    r._stripe = e, r.loadPromise = null;
                }));
            }, e.confirmCardPayment = function(e, t, r, n) {
                return Object(a.__awaiter)(this, void 0, Promise, (function() {
                    var o, s, l, c;
                    return Object(a.__generator)(this, (function(a) {
                        switch (a.label) {
                          case 0:
                            return [ 4, Object(i.loadStripe)(r, {
                                stripeAccount: t,
                                locale: u(n)
                            }) ];

                          case 1:
                            if (!(o = a.sent())) throw new Error("Stripe library failed initialisation");
                            return [ 4, o.confirmCardPayment(e) ];

                          case 2:
                            if (s = a.sent(), l = s.paymentIntent, c = s.error) throw c;
                            return [ 2, l.status ];
                        }
                    }));
                }));
            }, e;
        }();
        function d(e, t) {
            return (null == e ? void 0 : e.feature_creative_subscription_tester) ? t.CFG_PAYMENTS_STRIPE_TEST_PUBLISHABLE_KEY : t.CFG_PAYMENTS_STRIPE_PUBLISHABLE_KEY;
        }
        t.b = c;
    },
    VScS: function(e, t, r) {
        "use strict";
        var n = r("VU7i"), a = r.n(n);
        t.default = a.a;
    },
    VU7i: function(e, t, r) {
        var n = r("8EsV");
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, r("DtNa").default)("6c3ecc66", n, !0, {});
    },
    "W+W9": function(e, t, r) {
        "use strict";
        var n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, a = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }, o = /(&amp;|&lt;|&gt;|&quot;|&#39;)/g, i = /[&<>"']/g;
        function s(e) {
            return n[e];
        }
        function l(e) {
            return a[e];
        }
        function u(e) {
            return null == e ? "" : String(e).replace(i, s);
        }
        function c(e) {
            return null == e ? "" : String(e).replace(o, l);
        }
        u.options = c.options = {}, e.exports = {
            encode: u,
            escape: u,
            decode: c,
            unescape: c,
            version: "1.0.0-browser"
        };
    },
    WaIC: function(e, t, r) {
        var n = r("YvtE");
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, r("DtNa").default)("72c162cc", n, !0, {});
    },
    XV5G: function(e, t, r) {
        e.exports = r("ZfGS");
    },
    YWVf: function(e, t, r) {
        "use strict";
        r("W+W9");
        var n = r("KXS/"), a = r("RFFd"), o = r("bCdr"), i = r("HhHV");
        function s(e, t, r) {
            var s = [], l = !0 === r ? t : n({}, i, t), u = o(s, l);
            return a(e, u), s.join("");
        }
        s.defaults = i, e.exports = s;
    },
    YvtE: function(e, t, r) {
        (t = e.exports = r("RDo7")(!1)).push([ e.i, ".StripeFooter-legalText-1Xl{color:dimgray;font-size:11px;line-height:1.45;text-align:center;line-height:1.34;margin-top:15px}.StripeFooter-legalLink-2RV{color:dimgray;text-decoration:underline}.StripeFooter-container-SAP{margin-top:25px}.StripeFooter-divider-1Kx{background:#e8e8e8;height:1px;margin:0 auto 25px;width:30px}.StripeFooter-poweredByLink-1nQ{height:26px}.StripeFooter-poweredBy-3dt{fill:dimgray;height:26px;margin-right:15px;width:115px}", "" ]), 
        t.locals = {
            legalText: "StripeFooter-legalText-1Xl",
            legalLink: "StripeFooter-legalLink-2RV",
            container: "StripeFooter-container-SAP",
            divider: "StripeFooter-divider-1Kx",
            poweredByLink: "StripeFooter-poweredByLink-1nQ",
            poweredBy: "StripeFooter-poweredBy-3dt"
        };
    },
    ZfGS: function(e, t, r) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, o = "https://js.stripe.com/v3", i = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, s = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used", l = null, u = function(e) {
            return null !== l ? l : l = new Promise((function(t, r) {
                if ("undefined" != typeof window) if (window.Stripe && e && console.warn(s), window.Stripe) t(window.Stripe); else try {
                    var n = function() {
                        for (var e = document.querySelectorAll('script[src^="'.concat(o, '"]')), t = 0; t < e.length; t++) {
                            var r = e[t];
                            if (i.test(r.src)) return r;
                        }
                        return null;
                    }();
                    n && e ? console.warn(s) : n || (n = function(e) {
                        var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "", r = document.createElement("script");
                        r.src = "".concat(o).concat(t);
                        var n = document.head || document.body;
                        if (!n) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                        return n.appendChild(r), r;
                    }(e)), n.addEventListener("load", (function() {
                        window.Stripe ? t(window.Stripe) : r(new Error("Stripe.js not available"));
                    })), n.addEventListener("error", (function() {
                        r(new Error("Failed to load Stripe.js"));
                    }));
                } catch (e) {
                    return void r(e);
                } else t(null);
            }));
        }, c = function(e, t, r) {
            if (null === e) return null;
            var n = e.apply(void 0, t);
            return function(e, t) {
                e && e._registerWrapper && e._registerWrapper({
                    name: "stripe-js",
                    version: "1.11.0",
                    startTime: t
                });
            }(n, r), n;
        }, d = !1, p = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            d = !0;
            var n = Date.now();
            return u(a).then((function(e) {
                return c(e, t, n);
            }));
        };
        p.setLoadParameters = function(e) {
            if (d) throw new Error("You cannot change load parameters after calling loadStripe");
            a = function(e) {
                var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                if (null === e || "object" !== n(e)) throw new Error(t);
                if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                throw new Error(t);
            }(e);
        }, t.loadStripe = p;
    },
    ayNN: function(e, t, r) {
        "use strict";
        var n = r("7MKI"), a = r.n(n);
        t.default = a.a;
    },
    bCdr: function(e, t, r) {
        "use strict";
        var n = r("W+W9"), a = r("OdXY"), o = r("Pafc"), i = r("hu0r");
        e.exports = function(e, t) {
            var r, s = t || {};
            return d(), {
                start: function(e, t, i) {
                    var c = a(e);
                    if (r.ignoring) return void u(c);
                    if (-1 === (s.allowedTags || []).indexOf(c)) return void u(c);
                    if (s.filter && !s.filter({
                        tag: c,
                        attrs: t
                    })) return void u(c);
                    l("<"), l(c), Object.keys(t).forEach((function(e) {
                        var r = t[e], i = (s.allowedClasses || {})[c] || [], u = (s.allowedAttributes || {})[c] || [], d = a(e);
                        ("class" === d && -1 === u.indexOf(d) ? (r = r.split(" ").filter((function(e) {
                            return i && -1 !== i.indexOf(e);
                        })).join(" ").trim()).length : -1 !== u.indexOf(d) && (!0 !== o.uris[d] || function(e) {
                            var t = e[0];
                            if ("#" === t || "/" === t) return !0;
                            var r = e.indexOf(":");
                            if (-1 === r) return !0;
                            var n = e.indexOf("?");
                            if (-1 !== n && r > n) return !0;
                            var a = e.indexOf("#");
                            return -1 !== a && r > a || s.allowedSchemes.some(o);
                            function o(t) {
                                return 0 === e.indexOf(t + ":");
                            }
                        }(r))) && (l(" "), l(e), "string" == typeof r && (l('="'), l(n.encode(r)), l('"')));
                    })), l(i ? "/>" : ">");
                },
                end: function(e) {
                    var t = a(e);
                    -1 !== (s.allowedTags || []).indexOf(t) && !1 === r.ignoring ? (l("</"), l(t), l(">")) : c(t);
                },
                chars: function(e) {
                    !1 === r.ignoring && l(s.transformText ? s.transformText(e) : e);
                }
            };
            function l(t) {
                e.push(t);
            }
            function u(e) {
                i.voids[e] || (!1 === r.ignoring ? r = {
                    ignoring: e,
                    depth: 1
                } : r.ignoring === e && r.depth++);
            }
            function c(e) {
                r.ignoring === e && --r.depth <= 0 && d();
            }
            function d() {
                r = {
                    ignoring: !1,
                    depth: 0
                };
            }
        };
    },
    hu0r: function(e, t, r) {
        "use strict";
        var n = r("H7jL");
        e.exports = {
            voids: n([ "area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta" ])
        };
    },
    "hw/L": function(e, t, r) {
        "use strict";
        var n = r("K+aO"), a = Object(n.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 114.694 25.997"
                }
            }, [ t("g", {
                attrs: {
                    opacity: "0.75"
                }
            }, [ t("path", {
                attrs: {
                    d: "M111.636,0H2.852A2.852,2.852,0,0,0,0,2.852V23.145A2.852,2.852,0,0,0,2.852,26H111.636a3.059,3.059,0,0,0,3.059-3.059V3.059A3.059,3.059,0,0,0,111.636,0Zm2.294,22.939a2.294,2.294,0,0,1-2.294,2.294H2.852A2.1,2.1,0,0,1,.765,23.145V2.852A2.1,2.1,0,0,1,2.852.765H111.636a2.294,2.294,0,0,1,2.294,2.294Z"
                }
            }), t("path", {
                attrs: {
                    d: "M16.058,11.24H12.77v8.227h1.468V16.287h1.82c1.835,0,2.982-.887,2.982-2.523S17.893,11.24,16.058,11.24Zm-.076,3.823H14.238V12.54H16c1.055,0,1.613.451,1.613,1.262S17.037,15.025,16,15.025Z",
                    transform: "translate(-3.006 -2.646)"
                }
            }), t("path", {
                attrs: {
                    d: "M24.2,14A2.883,2.883,0,0,0,21.3,17.127a2.913,2.913,0,1,0,5.8,0A2.875,2.875,0,0,0,24.2,14Zm0,5.1c-.933,0-1.529-.765-1.529-1.973s.581-1.973,1.529-1.973,1.529.765,1.529,1.973-.6,1.965-1.529,1.965Z",
                    transform: "translate(-5.01 -3.295)"
                }
            }), t("path", {
                attrs: {
                    d: "M35,18.121,33.922,14.13H32.791l-1.07,3.991L30.635,14.13H29.22l1.812,6.025h1.193l1.1-3.945,1.1,3.945H35.62l1.812-6.025H36.071Z",
                    transform: "translate(-6.878 -3.326)"
                }
            }), t("path", {
                attrs: {
                    d: "M43.115,14a2.929,2.929,0,0,0-2.867,3.127,2.9,2.9,0,0,0,2.929,3.127,2.653,2.653,0,0,0,2.607-1.667l-1.139-.474a1.361,1.361,0,0,1-1.4.963,1.621,1.621,0,0,1-1.659-1.659h4.221v-.459A2.647,2.647,0,0,0,43.115,14Zm-1.476,2.393a1.468,1.468,0,0,1,1.476-1.246,1.193,1.193,0,0,1,1.292,1.239Z",
                    transform: "translate(-9.471 -3.295)"
                }
            }), t("path", {
                attrs: {
                    d: "M50.266,15.01v-.895H48.89v6.018h1.376V16.975A1.445,1.445,0,0,1,51.8,15.446a3.578,3.578,0,0,1,.5,0V14.069h-.39a1.751,1.751,0,0,0-1.644.94Z",
                    transform: "translate(-11.507 -3.311)"
                }
            }), t("path", {
                attrs: {
                    d: "M56.595,14a2.929,2.929,0,0,0-2.867,3.127,2.9,2.9,0,0,0,2.929,3.127,2.653,2.653,0,0,0,2.577-1.667l-1.178-.451a1.361,1.361,0,0,1-1.4.963,1.621,1.621,0,0,1-1.606-1.659h4.236v-.459A2.679,2.679,0,0,0,56.595,14Zm-1.476,2.393a1.468,1.468,0,0,1,1.468-1.239,1.193,1.193,0,0,1,1.292,1.239Z",
                    transform: "translate(-12.644 -3.295)"
                }
            }), t("path", {
                attrs: {
                    d: "M66.211,14.115a2.179,2.179,0,0,0-1.728-.765c-1.69,0-2.653,1.415-2.653,3.127s.963,3.127,2.653,3.127a2.156,2.156,0,0,0,1.728-.765v.627h1.376V11.24H66.211Zm0,2.562a1.529,1.529,0,0,1-1.529,1.743c-1,0-1.529-.765-1.529-1.927s.535-1.927,1.529-1.927a1.554,1.554,0,0,1,1.529,1.751Z",
                    transform: "translate(-14.553 -2.646)"
                }
            }), t("path", {
                attrs: {
                    d: "M78.343,13.35a2.2,2.2,0,0,0-1.766.765V11.24H75.2v8.227h1.376v-.635a2.187,2.187,0,0,0,1.736.765c1.682,0,2.646-1.422,2.646-3.127S80.025,13.35,78.343,13.35ZM78.106,18.4a1.529,1.529,0,0,1-1.529-1.743v-.359c0-1.132.642-1.751,1.529-1.751.994,0,1.529.765,1.529,1.927S79.061,18.4,78.106,18.4Z",
                    transform: "translate(-17.7 -2.646)"
                }
            }), t("path", {
                attrs: {
                    d: "M86.029,18.358,84.553,14.13H83.1l2.217,5.8-.229.566a.765.765,0,0,1-.872.6,3.15,3.15,0,0,1-.459,0v1.155a3.533,3.533,0,0,0,.558.038,2.042,2.042,0,0,0,2.126-1.529l2.477-6.591H87.474Z",
                    transform: "translate(-19.56 -3.326)"
                }
            }), t("path", {
                attrs: {
                    d: "M123.9,12.43a2.294,2.294,0,0,0-1.629.665l-.107-.528H120.34v9.879L122.42,22V19.6a2.294,2.294,0,0,0,1.476.535c1.483,0,2.844-1.216,2.844-3.907C126.74,13.768,125.364,12.43,123.9,12.43Zm-.5,5.834a1.231,1.231,0,0,1-.979-.4V14.724a1.254,1.254,0,0,1,.994-.421c.765,0,1.285.864,1.285,1.973s-.528,1.988-1.3,1.988Z",
                    transform: "translate(-28.325 -2.926)"
                }
            }), t("path", {
                attrs: {
                    d: "M132.739,12.43c-2,0-3.219,1.728-3.219,3.907,0,2.577,1.438,3.884,3.487,3.884a4.68,4.68,0,0,0,2.294-.558v-1.72a4.427,4.427,0,0,1-2.064.474c-.826,0-1.529-.3-1.636-1.3h4.114v-.765C135.782,14.158,134.742,12.43,132.739,12.43Zm-1.124,3.112c0-.963.589-1.369,1.109-1.369s1.07.405,1.07,1.369Z",
                    transform: "translate(-30.486 -2.926)"
                }
            }), t("path", {
                attrs: {
                    d: "M112.414,13.138l-.13-.627H110.51v7.425h2.049V14.9a1.43,1.43,0,0,1,1.567-.443v-1.95a1.376,1.376,0,0,0-1.713.627Z",
                    transform: "translate(-26.011 -2.922)"
                }
            }), t("path", {
                attrs: {
                    d: "M98.813,14.747c0-.336.275-.466.711-.466a4.511,4.511,0,0,1,2.064.551V12.82a5.352,5.352,0,0,0-2.064-.39c-1.69,0-2.814.9-2.814,2.416,0,2.37,3.166,1.988,3.166,3,0,.4-.336.528-.765.528a5.184,5.184,0,0,1-2.294-.688v2.057a5.643,5.643,0,0,0,2.294.489c1.728,0,2.921-.879,2.921-2.416C101.994,15.251,98.813,15.71,98.813,14.747Z",
                    transform: "translate(-22.763 -2.926)"
                }
            }), t("path", {
                attrs: {
                    d: "M106.656,10.24l-2.026.443v6.828a2.118,2.118,0,0,0,2.156,2.194,3.181,3.181,0,0,0,1.46-.283V17.7c-.268.115-1.575.5-1.575-.765V13.88h1.575V12.09h-1.575Z",
                    transform: "translate(-24.627 -2.41)"
                }
            }), t("path", {
                attrs: {
                    d: "M116.25,11.057l2.087-.436V8.97l-2.087.436Z",
                    transform: "translate(-27.362 -2.111)"
                }
            }), t("rect", {
                attrs: {
                    width: "2.087",
                    height: "7.371",
                    transform: "translate(88.888 9.642)"
                }
            }) ]) ]);
        }), [], !1, null, null, null);
        t.a = a.exports;
    },
    in2n: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return f;
        }));
        var n, a, o = r("D57K"), i = r("60N7"), s = r("Uuoj"), l = r("4SqB"), u = "SET_STRIPE", c = "SET_ERROR_MESSAGE", d = "SET_IS_UPDATING_CARD", p = "SET_CARD_DATA", f = {
            COMPONENT_MOUNTED: "COMPONENT_MOUNTED",
            ERROR_TRIGGERED: "ERROR_TRIGGERED",
            UPDATE_CARD_CLICKED: "UPDATE_CARD_CLICKED"
        };
        e = {
            namespaced: !0,
            state: function() {
                return {
                    stripe: null,
                    errorMessage: "",
                    isUpdatingCard: !1,
                    updatedCardData: null
                };
            },
            actions: (n = {}, n[f.COMPONENT_MOUNTED] = function(e) {
                var t = e.commit, r = e.rootState, n = new s.b(Object(s.c)(r.gates, r.env), r.translation.localization.LOCALE);
                t(u, n);
            }, n[f.ERROR_TRIGGERED] = function(e, t) {
                var r = e.commit;
                "string" == typeof t ? r(c, t) : "setup_intent_authentication_failure" === (null == t ? void 0 : t.code) ? r(c, t.message) : "card_error" === (null == t ? void 0 : t.type) ? r(c, l.b) : r(c, l.c);
            }, n[f.UPDATE_CARD_CLICKED] = function(e, t) {
                var r, n = e.commit, a = e.dispatch, s = e.state;
                return Object(o.__awaiter)(this, void 0, Promise, (function() {
                    var e, l, u, h;
                    return Object(o.__generator)(this, (function(o) {
                        switch (o.label) {
                          case 0:
                            n(c, ""), n(d, !0), n(p, null), o.label = 1;

                          case 1:
                            return o.trys.push([ 1, 5, 6, 7 ]), [ 4, i.a.createSetupIntent() ];

                          case 2:
                            return (null == (e = o.sent().createSetupIntent) ? void 0 : e.clientSecret) ? [ 4, null === (r = s.stripe) || void 0 === r ? void 0 : r.confirmCardSetup(null == e ? void 0 : e.clientSecret, t) ] : (a(f.ERROR_TRIGGERED), 
                            [ 2 ]);

                          case 3:
                            return (l = o.sent()) ? [ 4, i.a.updateSavedCard(l) ] : (a(f.ERROR_TRIGGERED), [ 2 ]);

                          case 4:
                            return u = o.sent().updateSubscriptionPaymentMethod, n(p, u), [ 3, 7 ];

                          case 5:
                            return h = o.sent(), a(f.ERROR_TRIGGERED, h), [ 3, 7 ];

                          case 6:
                            return n(d, !1), [ 7 ];

                          case 7:
                            return [ 2 ];
                        }
                    }));
                }));
            }, n),
            mutations: (a = {}, a[u] = function(e, t) {
                e.stripe = t;
            }, a[c] = function(e, t) {
                e.errorMessage = t;
            }, a[d] = function(e, t) {
                e.isUpdatingCard = t;
            }, a[p] = function(e, t) {
                e.updatedCardData = t;
            }, a)
        };
        t.b = e;
    },
    kMqd: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return a;
        })), r.d(t, "a", (function() {
            return o;
        })), r.d(t, "f", (function() {
            return i;
        })), r.d(t, "c", (function() {
            return s;
        })), r.d(t, "h", (function() {
            return l;
        })), r.d(t, "g", (function() {
            return u;
        })), r.d(t, "d", (function() {
            return c;
        })), r.d(t, "e", (function() {
            return d;
        }));
        var n = r("Hp28"), a = (100 * n.h).toFixed(1) + "% + US$" + n.g, o = 100 * n.a + "%";
        function i(e) {
            return (e * n.h + n.g).toFixed(2);
        }
        function s(e) {
            return (e * n.b).toFixed(2);
        }
        function l(e) {
            var t = i(e), r = function(e) {
                return (e * n.a).toFixed(2);
            }(e);
            return (e - parseFloat(t) - parseFloat(r)).toFixed(2);
        }
        function u(e) {
            if (!Number.isInteger(e)) throw new Error("You should only convert integer to cents.");
            return 100 * e;
        }
        function c(e) {
            return e / 100;
        }
        function d(e) {
            return "US$" + e;
        }
    },
    mLYF: function(e, t, r) {
        e.exports = r("ydjK")("mLYF");
    },
    mpF0: function(e, t, r) {
        "use strict";
        var n = r("WaIC"), a = r.n(n);
        t.default = a.a;
    },
    t31U: function(e, t, r) {
        (t = e.exports = r("RDo7")(!1)).push([ e.i, ".StripeCardForm-container-338{text-align:left}.StripeCardForm-textInput-15a{width:100%}.StripeCardForm-stripeCard-tGm{border:1px solid #e8e8e8;border-radius:4px;height:32px;margin-top:10px;padding:8px 0 8px 10px}.StripeCardForm-stripeCard-tGm.StripeElement--focus{border-color:#0057ff}.StripeCardForm-errorMessage-3-L{color:#d00;font-size:12px;font-weight:600;position:relative;top:5px}.StripeCardForm-subcribeCTA-39z{height:40px;margin-top:20px;width:100%}@media(max-width: 603px){.StripeCardForm-subcribeCTA-39z{display:block;margin:20px auto 10px;width:100%}}.StripeCardForm-container-338.StripeCardForm-withError-1KR .StripeCardForm-stripeCard-tGm{border-color:#d00}", "" ]), 
        t.locals = {
            container: "StripeCardForm-container-338",
            textInput: "StripeCardForm-textInput-15a",
            stripeCard: "StripeCardForm-stripeCard-tGm",
            errorMessage: "StripeCardForm-errorMessage-3-L",
            subcribeCTA: "StripeCardForm-subcribeCTA-39z",
            withError: "StripeCardForm-withError-1KR"
        };
    },
    tFUc: function(e, t, r) {
        var n = r("t31U");
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, r("DtNa").default)("f51b8d1a", n, !0, {});
    },
    wnPb: function(e, t, r) {
        "use strict";
        var n = r("D57K"), a = r("mGku"), o = a.default.extend({
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
                    return Object(n.__awaiter)(this, void 0, void 0, (function() {
                        return Object(n.__generator)(this, (function(e) {
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
        }), i = r("Nfs8"), s = r("K+aO");
        var l = Object(s.default)(o, (function() {
            var e, t, r, n, a = this, o = a.$createElement, i = a._self._c || o;
            return i("div", {
                directives: [ {
                    name: "observe-visibility",
                    rawName: "v-observe-visibility",
                    value: a.handleVisibilityChange,
                    expression: "handleVisibilityChange"
                } ],
                class: [ a.$style.borderContainer, (e = {}, e[a.$style.isActive] = a.isActive, e[a.$style.isFloated] = a.shouldShowFloatedLabel, 
                e) ]
            }, [ i("div", {
                class: [ a.$style.border, a.$style.leading ]
            }), i("div", {
                class: [ a.$style.border, a.$style.margin, (t = {}, t[a.$style.floated] = a.shouldShowFloatedLabel, 
                t) ]
            }), i("div", {
                class: [ a.$style.border, a.$style.notch, (r = {}, r[a.$style.floated] = a.shouldShowFloatedLabel, 
                r), a.customLabelClass ],
                style: a.notchStyles
            }, [ i("span", {
                ref: "label",
                class: a.$style.filterLabel,
                style: a.floatedLabelStyles
            }, [ a._v(" " + a._s(a.label) + " ") ]) ]), i("div", {
                class: [ a.$style.border, a.$style.margin, (n = {}, n[a.$style.floated] = a.shouldShowFloatedLabel, 
                n) ]
            }), i("div", {
                class: [ a.$style.border, a.$style.trailing ]
            }) ]);
        }), [], !1, (function(e) {
            this.$style = i.default.locals || i.default;
        }), null, null);
        t.a = l.exports;
    },
    yfgW: function(e, t, r) {
        "use strict";
        var n = r("5G4C"), a = r.n(n);
        t.default = a.a;
    }
} ]);
//# sourceMappingURL=app.18.0e2052734764a658b422.js.map