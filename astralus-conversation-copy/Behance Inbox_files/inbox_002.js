/*! For license information please see inbox.9a34fb257b0cea265b51.js.LICENSE.txt */
(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 167 ], {
    "5BYb": function(t, e, n) {
        "use strict";
        var r = n("ax0f"), i = n("0FSu").some, o = n("f4p7"), a = n("znGZ"), u = o("some"), c = a("some");
        r({
            target: "Array",
            proto: !0,
            forced: !u || !c
        }, {
            some: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    },
    ENE1: function(t, e, n) {
        var r = n("IBsm");
        t.exports = function() {
            return r.Date.now();
        };
    },
    FNAH: function(t, e) {
        t.exports = Object.is || function(t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
        };
    },
    H7jL: function(t, e, n) {
        "use strict";
        function r(t, e) {
            return t[e] = !0, t;
        }
        t.exports = function(t) {
            return t.reduce(r, {});
        };
    },
    HhHV: function(t, e, n) {
        "use strict";
        t.exports = {
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
    "KXS/": function(t, e, n) {
        "use strict";
        t.exports = function t(e) {
            for (var n, r, i = Array.prototype.slice.call(arguments, 1); i.length; ) for (r in n = i.shift()) n.hasOwnProperty(r) && ("[object Object]" === Object.prototype.toString.call(e[r]) ? e[r] = t(e[r], n[r]) : e[r] = n[r]);
            return e;
        };
    },
    LJOr: function(t, e, n) {
        "use strict";
        var r = n("lbJE"), i = n("FXyv"), o = n("cww3"), a = n("FNAH"), u = n("34wW");
        r("search", 1, (function(t, e, n) {
            return [ function(e) {
                var n = o(this), r = null == e ? void 0 : e[t];
                return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
            }, function(t) {
                var r = n(e, t, this);
                if (r.done) return r.value;
                var o = i(t), c = String(this), s = o.lastIndex;
                a(s, 0) || (o.lastIndex = 0);
                var l = u(o, c);
                return a(o.lastIndex, s) || (o.lastIndex = s), null === l ? -1 : l.index;
            } ];
        }));
    },
    OdXY: function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return "string" == typeof t ? t.toLowerCase() : t;
        };
    },
    Pafc: function(t, e, n) {
        "use strict";
        var r = n("H7jL");
        t.exports = {
            uris: r([ "background", "base", "cite", "href", "longdesc", "src", "usemap" ])
        };
    },
    RFFd: function(t, e, n) {
        "use strict";
        var r = n("W+W9"), i = n("OdXY"), o = (n("Pafc"), n("hu0r")), a = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, u = /^<\s*\/\s*([\w:-]+)[^>]*>/, c = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, s = /^</, l = /^<\s*\//;
        t.exports = function(t, e) {
            for (var n, f = function() {
                var t = [];
                return t.lastItem = function() {
                    return t[t.length - 1];
                }, t;
            }(), d = t; t; ) v();
            function v() {
                n = !0, function() {
                    "\x3c!--" === t.substr(0, 4) ? (r = t.indexOf("--\x3e")) >= 0 && (e.comment && e.comment(t.substring(4, r)), 
                    t = t.substring(r + 3), n = !1) : l.test(t) ? p(u, h) : s.test(t) && p(a, m);
                    var r;
                    !function() {
                        if (!n) return;
                        var r, i = t.indexOf("<");
                        i >= 0 ? (r = t.substring(0, i), t = t.substring(i)) : (r = t, t = "");
                        e.chars && e.chars(r);
                    }();
                }();
                var r = t === d;
                d = t, r && (t = "");
            }
            function p(e, r) {
                var i = t.match(e);
                i && (t = t.substring(i[0].length), i[0].replace(e, r), n = !1);
            }
            function m(t, n, a, u) {
                var s = {}, l = i(n), d = o.voids[l] || !!u;
                a.replace(c, (function(t, e, n, i, o) {
                    s[e] = void 0 === n && void 0 === i && void 0 === o ? void 0 : r.decode(n || i || o || "");
                })), d || f.push(l), e.start && e.start(l, s, d);
            }
            function h(t, n) {
                var r, o = 0, a = i(n);
                if (a) for (o = f.length - 1; o >= 0 && f[o] !== a; o--) ;
                if (o >= 0) {
                    for (r = f.length - 1; r >= o; r--) e.end && e.end(f[r]);
                    f.length = o;
                }
            }
            h();
        };
    },
    RNvQ: function(t, e, n) {
        var r = n("tQYX"), i = n("ENE1"), o = n("nvU9"), a = Math.max, u = Math.min;
        t.exports = function(t, e, n) {
            var c, s, l, f, d, v, p = 0, m = !1, h = !1, g = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            function b(e) {
                var n = c, r = s;
                return c = s = void 0, p = e, f = t.apply(r, n);
            }
            function y(t) {
                return p = t, d = setTimeout(x, e), m ? b(t) : f;
            }
            function w(t) {
                var n = t - v;
                return void 0 === v || n >= e || n < 0 || h && t - p >= l;
            }
            function x() {
                var t = i();
                if (w(t)) return O(t);
                d = setTimeout(x, function(t) {
                    var n = e - (t - v);
                    return h ? u(n, l - (t - p)) : n;
                }(t));
            }
            function O(t) {
                return d = void 0, g && c ? b(t) : (c = s = void 0, f);
            }
            function k() {
                var t = i(), n = w(t);
                if (c = arguments, s = this, v = t, n) {
                    if (void 0 === d) return y(v);
                    if (h) return clearTimeout(d), d = setTimeout(x, e), b(v);
                }
                return void 0 === d && (d = setTimeout(x, e)), f;
            }
            return e = o(e) || 0, r(n) && (m = !!n.leading, l = (h = "maxWait" in n) ? a(o(n.maxWait) || 0, e) : l, 
            g = "trailing" in n ? !!n.trailing : g), k.cancel = function() {
                void 0 !== d && clearTimeout(d), p = 0, c = v = s = d = void 0;
            }, k.flush = function() {
                return void 0 === d ? f : O(i());
            }, k;
        };
    },
    "W+W9": function(t, e, n) {
        "use strict";
        var r = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, i = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }, o = /(&amp;|&lt;|&gt;|&quot;|&#39;)/g, a = /[&<>"']/g;
        function u(t) {
            return r[t];
        }
        function c(t) {
            return i[t];
        }
        function s(t) {
            return null == t ? "" : String(t).replace(a, u);
        }
        function l(t) {
            return null == t ? "" : String(t).replace(o, c);
        }
        s.options = l.options = {}, t.exports = {
            encode: s,
            escape: s,
            decode: l,
            unescape: l,
            version: "1.0.0-browser"
        };
    },
    XhDu: function(t, e, n) {
        "use strict";
        n("ax0f")({
            target: "URL",
            proto: !0,
            enumerable: !0
        }, {
            toJSON: function() {
                return URL.prototype.toString.call(this);
            }
        });
    },
    YWVf: function(t, e, n) {
        "use strict";
        n("W+W9");
        var r = n("KXS/"), i = n("RFFd"), o = n("bCdr"), a = n("HhHV");
        function u(t, e, n) {
            var u = [], c = !0 === n ? e : r({}, a, e), s = o(u, c);
            return i(t, s), u.join("");
        }
        u.defaults = a, t.exports = u;
    },
    bCdr: function(t, e, n) {
        "use strict";
        var r = n("W+W9"), i = n("OdXY"), o = n("Pafc"), a = n("hu0r");
        t.exports = function(t, e) {
            var n, u = e || {};
            return f(), {
                start: function(t, e, a) {
                    var l = i(t);
                    if (n.ignoring) return void s(l);
                    if (-1 === (u.allowedTags || []).indexOf(l)) return void s(l);
                    if (u.filter && !u.filter({
                        tag: l,
                        attrs: e
                    })) return void s(l);
                    c("<"), c(l), Object.keys(e).forEach((function(t) {
                        var n = e[t], a = (u.allowedClasses || {})[l] || [], s = (u.allowedAttributes || {})[l] || [], f = i(t);
                        ("class" === f && -1 === s.indexOf(f) ? (n = n.split(" ").filter((function(t) {
                            return a && -1 !== a.indexOf(t);
                        })).join(" ").trim()).length : -1 !== s.indexOf(f) && (!0 !== o.uris[f] || function(t) {
                            var e = t[0];
                            if ("#" === e || "/" === e) return !0;
                            var n = t.indexOf(":");
                            if (-1 === n) return !0;
                            var r = t.indexOf("?");
                            if (-1 !== r && n > r) return !0;
                            var i = t.indexOf("#");
                            return -1 !== i && n > i || u.allowedSchemes.some(o);
                            function o(e) {
                                return 0 === t.indexOf(e + ":");
                            }
                        }(n))) && (c(" "), c(t), "string" == typeof n && (c('="'), c(r.encode(n)), c('"')));
                    })), c(a ? "/>" : ">");
                },
                end: function(t) {
                    var e = i(t);
                    -1 !== (u.allowedTags || []).indexOf(e) && !1 === n.ignoring ? (c("</"), c(e), c(">")) : l(e);
                },
                chars: function(t) {
                    !1 === n.ignoring && c(u.transformText ? u.transformText(t) : t);
                }
            };
            function c(e) {
                t.push(e);
            }
            function s(t) {
                a.voids[t] || (!1 === n.ignoring ? n = {
                    ignoring: t,
                    depth: 1
                } : n.ignoring === t && n.depth++);
            }
            function l(t) {
                n.ignoring === t && --n.depth <= 0 && f();
            }
            function f() {
                n = {
                    ignoring: !1,
                    depth: 0
                };
            }
        };
    },
    dlmX: function(t, e, n) {
        "use strict";
        var r = n("ax0f"), i = n("mPOS").right, o = n("f4p7"), a = n("znGZ"), u = o("reduceRight"), c = a("reduce", {
            1: 0
        });
        r({
            target: "Array",
            proto: !0,
            forced: !u || !c
        }, {
            reduceRight: function(t) {
                return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    },
    hu0r: function(t, e, n) {
        "use strict";
        var r = n("H7jL");
        t.exports = {
            voids: r([ "area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta" ])
        };
    },
    mVF9: function(t, e, n) {
        var r = n("ct80"), i = n("+/eK");
        t.exports = function(t) {
            return r((function() {
                return !!i[t]() || "​᠎" != "​᠎"[t]() || i[t].name !== t;
            }));
        };
    },
    tVqn: function(t, e, n) {
        "use strict";
        var r = n("ax0f"), i = n("Ya2h").trim;
        r({
            target: "String",
            proto: !0,
            forced: n("mVF9")("trim")
        }, {
            trim: function() {
                return i(this);
            }
        });
    },
    yrUM: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return b;
        }));
        var r = [ "input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary" ], i = r.join(","), o = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        function a(t) {
            return !(!u(t) || function(t) {
                return function(t) {
                    return v(t) && "radio" === t.type;
                }(t) && !function(t) {
                    if (!t.name) return !0;
                    var e = function(t, e) {
                        for (var n = 0; n < t.length; n++) if (t[n].checked && t[n].form === e) return t[n];
                    }((t.form || t.ownerDocument).querySelectorAll('input[type="radio"][name="' + t.name + '"]'), t.form);
                    return !e || e === t;
                }(t);
            }(t) || f(t) < 0);
        }
        function u(t) {
            return !(t.disabled || function(t) {
                return v(t) && "hidden" === t.type;
            }(t) || function(t) {
                return null === t.offsetParent || "hidden" === getComputedStyle(t).visibility;
            }(t));
        }
        var c, s = r.concat("iframe").join(",");
        function l(t) {
            if (!t) throw new Error("No node provided");
            return !1 !== o.call(t, s) && u(t);
        }
        function f(t) {
            var e = parseInt(t.getAttribute("tabindex"), 10);
            return isNaN(e) ? function(t) {
                return "true" === t.contentEditable;
            }(t) ? 0 : "AUDIO" !== t.nodeName && "VIDEO" !== t.nodeName || null !== t.getAttribute("tabindex") ? t.tabIndex : 0 : e;
        }
        function d(t, e) {
            return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
        }
        function v(t) {
            return "INPUT" === t.tagName;
        }
        var p, m = (p = [], {
            activateTrap: function(t) {
                if (p.length > 0) {
                    var e = p[p.length - 1];
                    e !== t && e.pause();
                }
                var n = p.indexOf(t);
                -1 === n || p.splice(n, 1), p.push(t);
            },
            deactivateTrap: function(t) {
                var e = p.indexOf(t);
                -1 !== e && p.splice(e, 1), p.length > 0 && p[p.length - 1].unpause();
            }
        });
        function h(t, e) {
            var n = document, r = "string" == typeof t ? n.querySelector(t) : t, u = {
                returnFocusOnDeactivate: !0,
                escapeDeactivates: !0,
                ...e
            }, s = {
                firstTabbableNode: null,
                lastTabbableNode: null,
                nodeFocusedBeforeActivation: null,
                mostRecentlyFocusedNode: null,
                active: !1,
                paused: !1
            }, v = {
                activate: function(t) {
                    if (s.active) return;
                    E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = n.activeElement;
                    var e = t && t.onActivate ? t.onActivate : u.onActivate;
                    e && e();
                    return h(), v;
                },
                deactivate: p,
                pause: function() {
                    if (s.paused || !s.active) return;
                    s.paused = !0, b();
                },
                unpause: function() {
                    if (!s.paused || !s.active) return;
                    s.paused = !1, E(), h();
                }
            };
            return v;
            function p(t) {
                if (s.active) {
                    clearTimeout(c), b(), s.active = !1, s.paused = !1, m.deactivateTrap(v);
                    var e = t && void 0 !== t.onDeactivate ? t.onDeactivate : u.onDeactivate;
                    return e && e(), (t && void 0 !== t.returnFocus ? t.returnFocus : u.returnFocusOnDeactivate) && g((function() {
                        var t;
                        T((t = s.nodeFocusedBeforeActivation, y("setReturnFocus") || t));
                    })), v;
                }
            }
            function h() {
                if (s.active) return m.activateTrap(v), c = g((function() {
                    T(w());
                })), n.addEventListener("focusin", O, !0), n.addEventListener("mousedown", x, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("touchstart", x, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("click", F, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("keydown", k, {
                    capture: !0,
                    passive: !1
                }), v;
            }
            function b() {
                if (s.active) return n.removeEventListener("focusin", O, !0), n.removeEventListener("mousedown", x, !0), 
                n.removeEventListener("touchstart", x, !0), n.removeEventListener("click", F, !0), 
                n.removeEventListener("keydown", k, !0), v;
            }
            function y(t) {
                var e = u[t], r = e;
                if (!e) return null;
                if ("string" == typeof e && !(r = n.querySelector(e))) throw new Error("`" + t + "` refers to no known node");
                if ("function" == typeof e && !(r = e())) throw new Error("`" + t + "` did not return a node");
                return r;
            }
            function w() {
                var t;
                if (!(t = null !== y("initialFocus") ? y("initialFocus") : r.contains(n.activeElement) ? n.activeElement : s.firstTabbableNode || y("fallbackFocus"))) throw new Error("Your focus-trap needs to have at least one focusable element");
                return t;
            }
            function x(t) {
                r.contains(t.target) || (u.clickOutsideDeactivates ? p({
                    returnFocus: !l(t.target)
                }) : u.allowOutsideClick && ("boolean" == typeof u.allowOutsideClick ? u.allowOutsideClick : u.allowOutsideClick(t)) || t.preventDefault());
            }
            function O(t) {
                r.contains(t.target) || t.target instanceof Document || (t.stopImmediatePropagation(), 
                T(s.mostRecentlyFocusedNode || w()));
            }
            function k(t) {
                if (!1 !== u.escapeDeactivates && function(t) {
                    return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode;
                }(t)) return t.preventDefault(), void p();
                (function(t) {
                    return "Tab" === t.key || 9 === t.keyCode;
                })(t) && function(t) {
                    if (E(), t.shiftKey && t.target === s.firstTabbableNode) return t.preventDefault(), 
                    void T(s.lastTabbableNode);
                    if (!t.shiftKey && t.target === s.lastTabbableNode) t.preventDefault(), T(s.firstTabbableNode);
                }(t);
            }
            function F(t) {
                u.clickOutsideDeactivates || r.contains(t.target) || u.allowOutsideClick && ("boolean" == typeof u.allowOutsideClick ? u.allowOutsideClick : u.allowOutsideClick(t)) || (t.preventDefault(), 
                t.stopImmediatePropagation());
            }
            function E() {
                var t = function(t, e) {
                    e = e || {};
                    var n, r, u = [], c = [], s = t.querySelectorAll(i);
                    e.includeContainer && o.call(t, i) && (s = Array.prototype.slice.apply(s)).unshift(t);
                    for (var l = 0; l < s.length; l++) a(n = s[l]) && (0 === (r = f(n)) ? u.push(n) : c.push({
                        documentOrder: l,
                        tabIndex: r,
                        node: n
                    }));
                    return c.sort(d).map((function(t) {
                        return t.node;
                    })).concat(u);
                }(r);
                s.firstTabbableNode = t[0] || w(), s.lastTabbableNode = t[t.length - 1] || w();
            }
            function T(t) {
                t !== n.activeElement && (t && t.focus ? (t.focus({
                    preventScroll: !!u.preventScroll
                }), s.mostRecentlyFocusedNode = t, function(t) {
                    return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select;
                }(t) && t.select()) : T(w()));
            }
        }
        function g(t) {
            return setTimeout(t, 0);
        }
        var b = {
            props: {
                active: {
                    type: Boolean,
                    default: !0
                },
                escapeDeactivates: {
                    type: Boolean,
                    default: !0
                },
                returnFocusOnDeactivate: {
                    type: Boolean,
                    default: !0
                },
                allowOutsideClick: {
                    type: Boolean,
                    default: !0
                },
                initialFocus: [ String, Function ],
                fallbackFocus: [ String, Function ]
            },
            model: {
                event: "update:active",
                prop: "active"
            },
            mounted: function() {
                var t = this;
                this.$watch("active", (function(e) {
                    e ? (t.trap = h(t.$el, {
                        escapeDeactivates: t.escapeDeactivates,
                        allowOutsideClick: function() {
                            return t.allowOutsideClick;
                        },
                        returnFocusOnDeactivate: t.returnFocusOnDeactivate,
                        onActivate: function() {
                            t.$emit("update:active", !0), t.$emit("activate");
                        },
                        onDeactivate: function() {
                            t.$emit("update:active", !1), t.$emit("deactivate");
                        },
                        initialFocus: t.initialFocus || function() {
                            return t.$el;
                        },
                        fallbackFocus: t.fallbackFocus
                    }), t.trap.activate()) : t.trap && t.trap.deactivate();
                }), {
                    immediate: !0
                });
            },
            beforeDestroy: function() {
                this.trap && this.trap.deactivate(), this.trap = null;
            },
            methods: {
                activate: function() {
                    this.trap.activate();
                },
                deactivate: function() {
                    this.trap.deactivate();
                }
            },
            render: function() {
                var t = this.$slots.default;
                if (!t || !t.length || t.length > 1) throw new Error("FocusTrap requires exactly one child");
                return t[0];
            }
        };
    }
} ]);
//# sourceMappingURL=inbox.9a34fb257b0cea265b51.js.map