(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 188 ], {
    "+eOo": function(e, t, a) {
        "use strict";
        function i() {
            var e = arguments;
            return function() {
                var t, a;
                for (t = 0; t < e.length; ++t) a = e[t].apply(this, 0 === t ? arguments : [ a ]);
                return a;
            };
        }
        a.d(t, "a", (function() {
            return i;
        }));
    },
    "/2/H": function(e, t, a) {
        e.exports = a("ydjK")("/2/H");
    },
    "/WdL": function(e, t, a) {
        var i = a("6QaK"), n = {
            "bestyleguide/_icons/_image": a("FR8Z").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + a), 
                i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 48, 208, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_wipfirstpost|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a> posted their first Work in Progress");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.b('<div class="graphic">'), 
                i.b("\n" + a), i.s(i.d("segment.is_expired", e, t, 1), e, t, 1, 0, 0, "") || (i.b('  <a href="'), 
                i.b(i.v(i.d("user.url", e, t, 0))), i.b("/workinprogress/"), i.b(i.v(i.d("segment.id", e, t, 0))), 
                i.b('">'), i.b("\n" + a), i.b('    <div class="activity-block wip-notification">'), 
                i.b("\n" + a), i.b("      <img"), i.b("\n" + a), i.b('        sizes="65px"'), i.b("\n" + a), 
                i.b('        srcset="'), i.b(i.v(i.d("segment.mediaSrcset", e, t, 0))), i.b('"'), 
                i.b("\n" + a), i.b('        src="'), i.b(i.v(i.d("segment.mediaUrl", e, t, 0))), 
                i.b('"'), i.b("\n" + a), i.b('        class="wip-notification__content wip-notification__image" />'), 
                i.b("\n" + a), i.s(i.d("segment.annotations", e, t, 1), e, t, 0, 591, 790, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b("      <img"), i.b("\n" + a), i.b('        sizes="65px"'), i.b("\n" + a), i.b('        srcset="'), 
                    i.b(i.v(i.d("segment.annotationSrcset", e, t, 0))), i.b('"'), i.b("\n" + a), i.b('        src="'), 
                    i.b(i.v(i.d("segment.annotationUrl", e, t, 0))), i.b('"'), i.b("\n" + a), i.b('        class="wip-notification__content wip-notification__annotation" />'), 
                    i.b("\n" + a);
                })), e.pop()), i.b("    </div>"), i.b("\n" + a), i.b("  </a>"), i.b("\n" + a)), 
                i.s(i.d("segment.is_expired", e, t, 1), e, t, 0, 884, 1054, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b('  <div class="activity-block wip-notification wip-notification--expired">'), 
                    i.b("\n" + a), i.b('    <div class="wip-notification__content">'), i.b("\n" + a), 
                    i.b(i.rp("<bestyleguide/_icons/_image0", e, t, "      ")), i.b("    </div>"), i.b("\n" + a);
                })), e.pop()), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_icons/_image0": {
                    name: "bestyleguide/_icons/_image",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_wipfirstpost|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> posted their first Work in Progress{{/translate}}\n</div>\n<div class="graphic">\n  {{^segment.is_expired}}\n  <a href="{{user.url}}/workinprogress/{{segment.id}}">\n    <div class="activity-block wip-notification">\n      <img\n        sizes="65px"\n        srcset="{{segment.mediaSrcset}}"\n        src="{{segment.mediaUrl}}"\n        class="wip-notification__content wip-notification__image" />\n      {{#segment.annotations}}\n      <img\n        sizes="65px"\n        srcset="{{segment.annotationSrcset}}"\n        src="{{segment.annotationUrl}}"\n        class="wip-notification__content wip-notification__annotation" />\n      {{/segment.annotations}}\n    </div>\n  </a>\n  {{/segment.is_expired}}\n  {{#segment.is_expired}}\n  <div class="activity-block wip-notification wip-notification--expired">\n    <div class="wip-notification__content">\n      {{>bestyleguide/_icons/_image}}\n    </div>\n  {{/segment.is_expired}}\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    "/weg": function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="livestream__message">'), i.b("\n" + a), 
                i.s(i.d("livestreamstarted.url", e, t, 1), e, t, 0, 62, 2397, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.s(i.d("livestreamstarted.is_live", e, t, 1), e, t, 0, 97, 576, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                        i.b('      <div class="livestream__header">'), i.b("\n" + a), i.b('        <p class="livestream__header__title">'), 
                        i.b("\n" + a), i.b("          "), i.s(i.f("translate", e, t, 1), e, t, 0, 207, 358, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                            a.b('notifications_livestream_started|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                            a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                            a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a> is livestreaming now");
                        })), e.pop()), i.b("\n" + a), i.b("        </p>"), i.b("\n" + a), i.b('        <div class="livestream__live">'), 
                        i.b("\n" + a), i.b('          <span class="livestream__live__indicator"></span>'), 
                        i.b("\n" + a), i.b('          <span class="livestream__live__text">Live</span>'), 
                        i.b("\n" + a), i.b("        </div>"), i.b("\n" + a), i.b("      </div>"), i.b("\n" + a);
                    })), e.pop()), i.s(i.d("livestreamstarted.is_live", e, t, 1), e, t, 1, 0, 0, "") || (i.b('      <p class="livestream__header__title">'), 
                    i.b("\n" + a), i.b("        "), i.s(i.f("translate", e, t, 1), e, t, 0, 708, 859, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                        a.b('notifications_livestream_ended|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                        a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                        a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a>'s livestream has ended");
                    })), e.pop()), i.b("\n" + a), i.b("      </p>"), i.b("\n" + a)), i.b('    <div class="livestream__block">'), 
                    i.b("\n" + a), i.b('      <a href="'), i.b(i.v(i.d("livestreamstarted.url", e, t, 0))), 
                    i.b('">'), i.b("\n" + a), i.b('        <div class="livestream__preview" '), i.s(i.d("livestreamstarted.thumbnail_url", e, t, 1), e, t, 0, 1076, 1142, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                        a.b('style="background-image: url('), a.b(a.v(a.d("livestreamstarted.thumbnail_url", e, t, 0))), 
                        a.b(')"');
                    })), e.pop()), i.b(">"), i.b("\n" + a), i.s(i.d("livestreamstarted.tool.synonym.icon_url_2x", e, t, 1), e, t, 0, 1237, 1344, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                        i.b('            <img class="livestream__tool" src="'), i.b(i.v(i.d("livestreamstarted.tool.synonym.icon_url_2x", e, t, 0))), 
                        i.b('">'), i.b("\n" + a);
                    })), e.pop()), i.s(i.d("livestreamstarted.thumbnail_url", e, t, 1), e, t, 1, 0, 0, "") || i.s(i.d("actor.images.276", e, t, 1), e, t, 0, 1472, 1685, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                        i.b('              <img class="livestream__profile__image" src="'), i.b(i.v(i.d("actor.images.276", e, t, 0))), 
                        i.b('">'), i.b("\n" + a), i.b('              <div class="livestream__profile__background" style="background-image: url('), 
                        i.b(i.v(i.d("actor.images.276", e, t, 0))), i.b(')"></div>'), i.b("\n" + a);
                    })), e.pop()), i.b("        </div>"), i.b("\n" + a), i.b("      </a>"), i.b("\n" + a), 
                    i.b('      <div class="livestream__details">'), i.b("\n" + a), i.b('        <p class="livestream__title">'), 
                    i.b("\n" + a), i.b("          "), i.b(i.v(i.d("livestreamstarted.title", e, t, 0))), 
                    i.b("\n" + a), i.b("        </p>"), i.b("\n" + a), i.b('        <a class="livestream__button rf-button rf-button--small" href="'), 
                    i.b(i.v(i.d("livestreamstarted.url", e, t, 0))), i.b('">'), i.b("\n" + a), i.s(i.d("livestreamstarted.is_live", e, t, 1), e, t, 0, 2048, 2147, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                        i.b("            "), i.s(i.f("translate", e, t, 1), e, t, 0, 2075, 2122, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                            a.b("notifications_livestream_watch_button|Watch Now");
                        })), e.pop()), i.b("\n" + a);
                    })), e.pop()), i.s(i.d("livestreamstarted.is_live", e, t, 1), e, t, 1, 0, 0, "") || (i.b("            "), 
                    i.s(i.f("translate", e, t, 1), e, t, 0, 2245, 2302, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                        a.b("notifications_livestream_watch_replay_button|Watch Replay");
                    })), e.pop()), i.b("\n" + a)), i.b("        </a>"), i.b("\n" + a), i.b("      </div>"), 
                    i.b("\n" + a), i.b("    </div>"), i.b("\n" + a);
                })), e.pop()), i.s(i.d("livestreamstarted.url", e, t, 1), e, t, 1, 0, 0, "") || (i.b('    <p class="livestream__header__title">'), 
                i.b("\n" + a), i.b("      "), i.s(i.f("translate", e, t, 1), e, t, 0, 2515, 2666, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_livestream_ended|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a>'s livestream has ended");
                })), e.pop()), i.b("\n" + a), i.b("    </p>"), i.b("\n" + a)), i.b("</div>"), i.b("\n"), 
                i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="livestream__message">\n  {{#livestreamstarted.url}}\n    {{#livestreamstarted.is_live}}\n      <div class="livestream__header">\n        <p class="livestream__header__title">\n          {{#translate}}notifications_livestream_started|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> is livestreaming now{{/translate}}\n        </p>\n        <div class="livestream__live">\n          <span class="livestream__live__indicator"></span>\n          <span class="livestream__live__text">Live</span>\n        </div>\n      </div>\n    {{/livestreamstarted.is_live}}\n    {{^livestreamstarted.is_live}}\n      <p class="livestream__header__title">\n        {{#translate}}notifications_livestream_ended|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a>\'s livestream has ended{{/translate}}\n      </p>\n    {{/livestreamstarted.is_live}}\n    <div class="livestream__block">\n      <a href="{{livestreamstarted.url}}">\n        <div class="livestream__preview" {{#livestreamstarted.thumbnail_url}}style="background-image: url({{livestreamstarted.thumbnail_url}})"{{/livestreamstarted.thumbnail_url}}>\n          {{#livestreamstarted.tool.synonym.icon_url_2x}}\n            <img class="livestream__tool" src="{{livestreamstarted.tool.synonym.icon_url_2x}}">\n          {{/livestreamstarted.tool.synonym.icon_url_2x}}\n          {{^livestreamstarted.thumbnail_url}}\n            {{#actor.images.276}}\n              <img class="livestream__profile__image" src="{{actor.images.276}}">\n              <div class="livestream__profile__background" style="background-image: url({{actor.images.276}})"></div>\n            {{/actor.images.276}}\n          {{/livestreamstarted.thumbnail_url}}\n        </div>\n      </a>\n      <div class="livestream__details">\n        <p class="livestream__title">\n          {{livestreamstarted.title}}\n        </p>\n        <a class="livestream__button rf-button rf-button--small" href="{{livestreamstarted.url}}">\n          {{#livestreamstarted.is_live}}\n            {{#translate}}notifications_livestream_watch_button|Watch Now{{/translate}}\n          {{/livestreamstarted.is_live}}\n          {{^livestreamstarted.is_live}}\n            {{#translate}}notifications_livestream_watch_replay_button|Watch Replay{{/translate}}\n          {{/livestreamstarted.is_live}}\n        </a>\n      </div>\n    </div>\n  {{/livestreamstarted.url}}\n  {{^livestreamstarted.url}}\n    <p class="livestream__header__title">\n      {{#translate}}notifications_livestream_ended|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a>\'s livestream has ended{{/translate}}\n    </p>\n  {{/livestreamstarted.url}}\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    "045I": function(e, t, a) {
        var i = a("yYqu");
        "string" == typeof i && (i = [ [ e.i, i, "" ] ]), i.locals && (e.exports = i.locals);
        (0, a("DtNa").default)("c2cb3558", i, !0, {});
    },
    "0ApA": function(e, t, a) {
        "use strict";
        var i = a("7kbV"), n = a.n(i);
        t.default = n.a;
    },
    "0FSu": function(e, t, a) {
        e.exports = a("ydjK")("0FSu");
    },
    "0Iy0": function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0.5 0.5 16 16">'), 
                i.b("\n" + a), i.b('  <rect y=".5" x=".5" height="16" width="16" fill="none"/>'), 
                i.b("\n" + a), i.b('    <path d="m13 7.5v-0.5-0.001c0-2.484-2.016-4.499-4.5-4.499-2.486 0-4.5 2.015-4.5 4.499v0.001 0.5c-1.933 0-3.5 1.566-3.5 3.5 0 1.932 1.567 3.5 3.5 3.5h2.5c0.553 0 1-0.448 1-1v-2h-3l4-5 4 5h-3v2c0 0.552 0.447 1 1 1h2.5c1.934 0 3.5-1.566 3.5-3.499 0-1.935-1.566-3.501-3.5-3.501z"/>'), 
                i.b("\n" + a), i.b("</svg>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0.5 0.5 16 16">\n  <rect y=".5" x=".5" height="16" width="16" fill="none"/>\n    <path d="m13 7.5v-0.5-0.001c0-2.484-2.016-4.499-4.5-4.499-2.486 0-4.5 2.015-4.5 4.499v0.001 0.5c-1.933 0-3.5 1.566-3.5 3.5 0 1.932 1.567 3.5 3.5 3.5h2.5c0.553 0 1-0.448 1-1v-2h-3l4-5 4 5h-3v2c0 0.552 0.447 1 1 1h2.5c1.934 0 3.5-1.566 3.5-3.499 0-1.935-1.566-3.501-3.5-3.501z"/>\n</svg>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    "0T+t": function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.s(i.f("translate", e, t, 1), e, t, 0, 14, 198, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b("notifications_note|"), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b(' left a note on <a href="'), 
                    a.b(a.v(a.d("user.url", e, t, 0))), a.b('">'), a.b(a.v(a.d("user.display_name", e, t, 0))), 
                    a.b('</a> in your &ldquo;<a href="'), a.b(a.v(a.d("job._links.recruiter", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("job.title", e, t, 0))), a.b("</a>&rdquo; job");
                })), e.pop()), i.b("\n" + a), i.b('<a class="note-wrap" href="'), i.b(i.v(i.d("job._links.recruiter", e, t, 0))), 
                i.b('">'), i.b("\n" + a), i.b('  <div class="activity-block note">'), i.b("\n" + a), 
                i.b('    <div class="comment">'), i.b("\n" + a), i.b("      "), i.b(i.v(i.d("note.note_text", e, t, 0))), 
                i.b("\n" + a), i.b("    </div>"), i.b("\n" + a), i.b("  </div>"), i.b("\n" + a), 
                i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#translate}}notifications_note|{{actor.display_name}} left a note on <a href="{{user.url}}">{{user.display_name}}</a> in your &ldquo;<a href="{{job._links.recruiter}}">{{job.title}}</a>&rdquo; job{{/translate}}\n<a class="note-wrap" href="{{job._links.recruiter}}">\n  <div class="activity-block note">\n    <div class="comment">\n      {{note.note_text}}\n    </div>\n  </div>\n</a>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    "1hEZ": function(e, t, a) {
        e.exports = a("ydjK")("1hEZ");
    },
    "28MP": function(e, t, a) {
        e.exports = a("ydjK")("28MP");
    },
    "2dzt": function(e, t, a) {
        "use strict";
        var i, n;
        a.r(t), a.d(t, "ACTIONS", (function() {
            return r;
        }));
        var r = {
            USER_CLICKED_OPEN_APPS_LINK: "USER_CLICKED_OPEN_APPS_LINK",
            USER_CLICKED_CLOSE_APPS_MODAL: "USER_CLICKED_CLOSE_APPS_MODAL"
        }, o = "TOGGLE_APPS_MODAL", s = {
            namespaced: !0,
            state: function() {
                return {
                    isAppModalOpen: !1,
                    isAppModalEnabled: !0
                };
            },
            actions: (i = {}, i[r.USER_CLICKED_OPEN_APPS_LINK] = function(e) {
                var t = e.state, a = e.commit;
                t.isAppModalEnabled && a(o);
            }, i[r.USER_CLICKED_CLOSE_APPS_MODAL] = function(e) {
                var t = e.state, a = e.commit;
                t.isAppModalEnabled && a(o);
            }, i),
            mutations: (n = {}, n[o] = function(e) {
                e.isAppModalOpen = !e.isAppModalOpen;
            }, n)
        };
        t.default = s;
    },
    "3lV2": function(e, t, a) {
        "use strict";
        var i = a("K+aO"), n = Object(i.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    viewBox: "0 0 12 12"
                }
            }, [ t("path", {
                attrs: {
                    d: "M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = n.exports;
    },
    "46eT": function(e, t, a) {
        var i = a("6QaK"), n = {
            "notifications/_userProjects": a("RcWU").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg">'), i.b("\n" + a), i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 34, 224, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b("notifications_short_list|"), a.b(a.v(a.d("actor.display_name", e, t, 0))), 
                    a.b(' added <a href="'), a.b(a.v(a.d("user.url", e, t, 0))), a.b('">'), a.b(a.v(a.d("user.display_name", e, t, 0))), 
                    a.b('</a> to your &ldquo;<a href="'), a.b(a.v(a.d("job._links.recruiter", e, t, 0))), 
                    a.b('"</a>'), a.b(a.v(a.d("job.title", e, t, 0))), a.b("</a>&rdquo; shortlist");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.s(i.d("user.latest_projects.0", e, t, 1), e, t, 0, 273, 328, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.s(a.f("user", e, t, 1), e, t, 0, 283, 318, "{{ }}") && (a.rs(e, t, (function(e, t, a) {
                        a.b(a.rp("<notifications/_userProjects0", e, t, ""));
                    })), e.pop());
                })), e.pop()), i.fl();
            },
            partials: {
                "<notifications/_userProjects0": {
                    name: "notifications/_userProjects",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg">\n  {{#translate}}notifications_short_list|{{actor.display_name}} added <a href="{{user.url}}">{{user.display_name}}</a> to your &ldquo;<a href="{{job._links.recruiter}}"</a>{{job.title}}</a>&rdquo; shortlist{{/translate}}\n</div>\n{{#user.latest_projects.0}}\n{{#user}}\n{{> notifications/_userProjects}}\n{{/user}}\n{{/user.latest_projects.0}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    "4FY9": function(e, t, a) {
        "use strict";
        var i = a("gaI4"), n = a.n(i);
        t.default = n.a;
    },
    "4nGm": function(e, t, a) {
        (t = e.exports = a("RDo7")(!1)).push([ e.i, ".SMSAppLink-formWrap-2dz{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;text-align:left}.SMSAppLink-input-Xvf{margin-right:10px;width:230px}.SMSAppLink-sendBtn-1Lu{margin-top:21px}.SMSAppLink-postingSpinner-2_p{height:16px;position:relative;width:16px !important}.SMSAppLink-postingSpinner-2_p .rf-spinner__spinner{height:100%;left:0;min-height:0 !important;min-width:0 !important;top:0;width:100%}.SMSAppLink-successWrap-2bg{color:#058900;padding:21px 0}.SMSAppLink-success-1PO{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;font-size:14px;font-weight:bold;-webkit-box-pack:center;justify-content:center}.SMSAppLink-check-3lA{fill:#058900;height:26px;margin-right:2px;width:26px}", "" ]), 
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
    5732: function(e, t, a) {
        "use strict";
        var i = a("qa4g"), n = a.n(i);
        t.default = n.a;
    },
    "5BYb": function(e, t, a) {
        "use strict";
        var i = a("ax0f"), n = a("0FSu").some, r = a("f4p7"), o = a("znGZ"), s = r("some"), l = o("some");
        i({
            target: "Array",
            proto: !0,
            forced: !s || !l
        }, {
            some: function(e) {
                return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    },
    "5NN/": function(e, t, a) {
        "use strict";
        var i = a("D57K"), n = a("E8ap"), r = a("3lV2"), o = a("LSlr"), s = a("18mY"), l = a("adMq"), c = a("OQxq"), d = a("RNvQ"), p = a.n(d), u = a("mGku"), b = a("HDAe"), m = a("nOR9"), f = {
            ARROW_DOWN: "ArrowDown",
            ARROW_UP: "ArrowUp"
        }, h = u.default.extend({
            components: {
                SearchIcon: r.a,
                Spinner: s.a,
                Fade: l.a,
                Btn: c.default,
                CloseIcon: o.default
            },
            props: {
                isTypeaheadEnabled: Boolean,
                results: {
                    type: Array,
                    default: []
                },
                lastSearchTerm: {
                    type: String,
                    default: ""
                },
                isSubmittable: Boolean,
                value: String,
                useRouter: Boolean,
                currentContentType: String
            },
            data: function() {
                return {
                    URL_SEARCH: n.URL_SEARCH,
                    URL_SEARCH_IMAGES: n.URL_SEARCH_IMAGES,
                    URL_SEARCH_USERS: n.URL_SEARCH_USERS,
                    URL_SEARCH_MOODBOARDS: n.URL_SEARCH_MOODBOARDS,
                    URL_SEARCH_PROTOTYPES: n.URL_SEARCH_PROTOTYPES,
                    CONTENT_TYPES: b.a,
                    debouncedInputEmit: function() {},
                    isLoading: !1,
                    searchInputValue: void 0,
                    navigationIndex: null
                };
            },
            mounted: function() {
                this.isTypeaheadEnabled && (this.debouncedInputEmit = p()(this.emitInput, 200));
            },
            watch: {
                results: function() {
                    this.isLoading = !1;
                },
                value: {
                    handler: function(e) {
                        return Object(i.__awaiter)(this, void 0, void 0, (function() {
                            return Object(i.__generator)(this, (function(t) {
                                return this.searchInputValue = e, [ 2 ];
                            }));
                        }));
                    },
                    immediate: !0
                },
                navigationIndex: function(e) {
                    if (null === e) return this.$refs.searchInput.focus(), void this.$refs.searchInput.select();
                    this.useRouter ? this.$refs.focusable[e].$el.focus() : this.$refs.focusable[e].focus();
                }
            },
            computed: Object(i.__assign)(Object(i.__assign)({}, Object(m.mapState)([ "gates" ])), {
                directTrackingSource: function() {
                    return this.isTypeaheadEnabled ? this.isSubmittable ? "typeahead_search_direct" : "typeahead_nav_direct" : "nav20";
                },
                resultTrackingSource: function() {
                    return this.isTypeaheadEnabled ? this.isSubmittable ? "typeahead_search_suggestion" : "typeahead_nav_suggestion" : "nav20";
                },
                suggestionTrackingSource: function() {
                    return this.isTypeaheadEnabled ? this.isSubmittable ? "typeahead_search_suggestion_filter" : "typeahead_nav_suggestion_filter" : "nav20";
                },
                suggestions: function() {
                    var e = [ {
                        route: this.getRoute(b.a.PROJECTS),
                        url: this.getSuggestionUrl(n.URL_SEARCH),
                        title: this.$translate("site_navigation_search__view_recommended_projects_description", "View the most recommended projects across Behance from both our users and curators."),
                        label: this.$translate("site_navigation_search__projects", "Projects")
                    }, {
                        url: this.getSuggestionUrl(n.URL_SEARCH_IMAGES),
                        route: this.getRoute(b.a.IMAGES),
                        title: this.$translate("site_navigation_search__search-images_description", "Search the latest images from the best projects on Behance, all in one place."),
                        label: this.$translate("site_navigation_search__images", "Images")
                    }, {
                        url: this.getSuggestionUrl(n.URL_SEARCH_USERS),
                        route: this.getRoute(b.a.USERS),
                        title: this.$translate("site_navigation_search__find-creatives_description", "Discover the creatives behind the top work on Behance."),
                        label: this.$translate("site_navigation_search__creatives", "People")
                    }, {
                        url: this.getSuggestionUrl(n.URL_SEARCH_MOODBOARDS),
                        route: this.getRoute(b.a.MOODBOARDS),
                        title: this.$translate("site_navigation_search__browse-moodboards_description", "Browse our favorite hand-picked Moodboards."),
                        label: this.$translate("site_navigation_search__moodboards", "Moodboards")
                    } ];
                    return this.gates.feature_prototype_search && e.splice(2, 0, {
                        url: this.getSuggestionUrl(n.URL_SEARCH_PROTOTYPES),
                        route: this.getRoute(b.a.PROTOTYPES),
                        title: this.$translate("site_navigation_search__search-prototypes_description", "Search the latest prototypes from the best projects on Behance, all in one place."),
                        label: this.$translate("site_navigation_search__prototypes", "Prototypes")
                    }), e;
                }
            }),
            methods: {
                handleSearchInputFocus: function() {
                    this.navigationIndex = null, this.searchInputValue && this.isTypeaheadEnabled && 0 === this.results.length && this.$emit("inputDidChange", {
                        term: this.searchInputValue
                    });
                },
                handleTabKeypress: function(e) {
                    this.results.length > 0 && this.searchInputValue !== this.results[0].text && (e.preventDefault(), 
                    this.searchInputValue = this.results[0].text);
                },
                getSuggestionUrl: function(e) {
                    return e + "?tracking_source=" + this.suggestionTrackingSource;
                },
                getResultUrl: function(e) {
                    return e + "?tracking_source=" + this.resultTrackingSource;
                },
                getRoute: function(e) {
                    return {
                        name: e,
                        query: {
                            tracking_source: this.suggestionTrackingSource
                        }
                    };
                },
                clear: function() {
                    this.searchInputValue = "", this.$emit("submit", this.searchInputValue);
                },
                handleFormSubmit: function(e) {
                    this.isSubmittable && (e.preventDefault(), this.$emit("submit", this.searchInputValue), 
                    this.$refs.searchInput.blur());
                },
                navigateUp: function() {
                    var e = this.$refs.focusable.length;
                    null === this.navigationIndex && e > 0 ? this.navigationIndex = e - 1 : 0 !== this.navigationIndex ? null !== this.navigationIndex ? this.navigationIndex-- : this.navigationIndex = e - 1 : this.navigationIndex = null;
                },
                navigateDown: function() {
                    var e = this.$refs.focusable.length;
                    if (null === this.navigationIndex && e > 0) this.navigationIndex = 0; else if (null !== this.navigationIndex) {
                        if (this.navigationIndex < e - 1) return void this.navigationIndex++;
                        if (this.navigationIndex === e - 1) return void (this.navigationIndex = null);
                        this.navigationIndex = 0;
                    }
                },
                handleResultTouchstart: function(e) {
                    this.$emit("submit", e), this.$refs.searchInput.blur();
                },
                handleFilterTouchstart: function(e) {
                    this.$router.push({
                        name: e
                    }), this.$refs.searchInput.blur();
                },
                handleKeydown: function(e) {
                    this.isTypeaheadEnabled && Object.values(f).includes(e.key) && (e.preventDefault(), 
                    e.key === f.ARROW_UP && this.navigateUp(), e.key === f.ARROW_DOWN && this.navigateDown());
                },
                getResultWithoutQuery: function(e) {
                    var t = e.indexOf(this.lastSearchTerm.toLowerCase());
                    return -1 === t ? e : e.slice(0, t) + e.slice(t + this.lastSearchTerm.length);
                },
                handleInputChange: function(e) {
                    return Object(i.__awaiter)(this, void 0, void 0, (function() {
                        return Object(i.__generator)(this, (function(t) {
                            return this.isTypeaheadEnabled ? (this.isLoading = !0, this.debouncedInputEmit(e.target.value.replace(/\s\s+/g, " ")), 
                            [ 2 ]) : [ 2 ];
                        }));
                    }));
                },
                emitInput: function(e) {
                    this.$emit("inputDidChange", {
                        term: e
                    });
                }
            }
        }), v = a("0ApA"), g = a("K+aO");
        var y = Object(g.default)(h, (function() {
            var e, t, a = this, i = a.$createElement, n = a._self._c || i;
            return n("div", {
                class: [ a.$style.searchContainer, (e = {}, e[a.$style.isTypeaheadEnabled] = a.isTypeaheadEnabled, 
                e), (t = {}, t[a.$style.isSubmittable] = a.isSubmittable, t) ],
                attrs: {
                    tabindex: "0"
                },
                on: {
                    keydown: [ a.handleKeydown, function(e) {
                        return !e.type.indexOf("key") && a._k(e.keyCode, "n", void 0, e.key, void 0) ? null : e.ctrlKey ? a.navigateDown(e) : null;
                    }, function(e) {
                        return !e.type.indexOf("key") && a._k(e.keyCode, "p", void 0, e.key, void 0) ? null : e.ctrlKey ? a.navigateUp(e) : null;
                    } ]
                }
            }, [ n("div", {
                class: a.$style.searchInputWrap
            }, [ n("div", {
                class: a.$style.searchIcon
            }, [ n("SearchIcon", {
                class: a.$style.icon
            }) ], 1), n("form", {
                class: a.$style.searchForm,
                attrs: {
                    action: a.URL_SEARCH
                },
                on: {
                    submit: a.handleFormSubmit
                }
            }, [ n("label", {
                class: a.$style.formLabel,
                attrs: {
                    for: "search"
                }
            }, [ n("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: a.searchInputValue,
                    expression: "searchInputValue"
                } ],
                ref: "searchInput",
                class: [ a.$style.searchInput, "e2e-SearchInput-input" ],
                attrs: {
                    type: "search",
                    name: "search",
                    autocomplete: "off",
                    placeholder: a.isSubmittable ? a.$translate("search_creative_header_placeholder", "Search the creative world at work") : a.$translate("site_navigation_search", "Search…"),
                    "aria-label": a.$translate("search_header_placeholder", "Search Behance")
                },
                domProps: {
                    value: a.searchInputValue
                },
                on: {
                    input: [ function(e) {
                        e.target.composing || (a.searchInputValue = e.target.value);
                    }, a.handleInputChange ],
                    focus: a.handleSearchInputFocus,
                    keydown: function(e) {
                        return !e.type.indexOf("key") && a._k(e.keyCode, "tab", 9, e.key, "Tab") ? null : a.handleTabKeypress(e);
                    }
                }
            }) ]), n("input", {
                attrs: {
                    type: "hidden",
                    name: "tracking_source"
                },
                domProps: {
                    value: a.directTrackingSource
                }
            }), a.isLoading ? n("div", {
                class: a.$style.spinnerWrapper
            }, [ n("Spinner", {
                class: a.$style.spinner,
                attrs: {
                    autofill: ""
                }
            }) ], 1) : a._e(), a.searchInputValue && !a.isLoading && a.isSubmittable ? n("div", {
                class: [ a.$style.closeButton, "e2e-SearchInput-bar-clearButton__clear" ],
                on: {
                    click: a.clear
                }
            }, [ n("CloseIcon", {
                class: a.$style.icon
            }) ], 1) : a._e() ]), a.isTypeaheadEnabled ? n("ul", {
                class: a.$style.suggestions
            }, [ a.results.length > 0 ? a._l(a.results, (function(e, t) {
                return n("li", {
                    key: t,
                    class: [ a.$style.suggestion, a.$style.result ],
                    on: {
                        touchstart: function(t) {
                            return t.preventDefault(), a.handleResultTouchstart(e.text);
                        }
                    }
                }, [ a.useRouter ? n("router-link", {
                    ref: "focusable",
                    refInFor: !0,
                    class: a.$style.suggestionLink,
                    attrs: {
                        to: {
                            name: a.currentContentType,
                            query: {
                                search: e.text,
                                tracking_source: a.resultTrackingSource
                            }
                        }
                    },
                    on: {
                        focus: function(e) {
                            a.navigationIndex = t;
                        }
                    }
                }, [ n("span", {
                    class: a.$style.emphasis
                }, [ a._v(a._s(a.lastSearchTerm)) ]), a._v(a._s(a.getResultWithoutQuery(e.text))) ]) : n("a", {
                    ref: "focusable",
                    refInFor: !0,
                    class: a.$style.suggestionLink,
                    attrs: {
                        href: a.getResultUrl(a.URL_SEARCH) + "&search=" + encodeURIComponent(e.text)
                    },
                    on: {
                        focus: function(e) {
                            a.navigationIndex = t;
                        }
                    }
                }, [ n("span", {
                    class: a.$style.emphasis
                }, [ a._v(a._s(a.lastSearchTerm)) ]), a._v(a._s(a.getResultWithoutQuery(e.text)) + " ") ]) ], 1);
            })) : [ n("li", {
                class: a.$style.suggestionHeading
            }, [ n("h6", {
                class: a.$style.suggestionLabel
            }, [ a._v(a._s(a.$translate("site_navigation_search__sort_and_filter_all", "Sort & filter all:"))) ]) ]), a._l(a.suggestions, (function(e, t) {
                return n("li", {
                    key: t,
                    class: a.$style.suggestion,
                    on: {
                        touchstart: function(t) {
                            return t.preventDefault(), a.handleFilterTouchstart(e.route.name);
                        }
                    }
                }, [ a.useRouter ? n("router-link", {
                    ref: "focusable",
                    refInFor: !0,
                    class: a.$style.suggestionLink,
                    attrs: {
                        title: e.title,
                        to: e.route
                    },
                    on: {
                        focus: function(e) {
                            a.navigationIndex = t;
                        }
                    }
                }, [ a._v(a._s(e.label)) ]) : n("a", {
                    ref: "focusable",
                    refInFor: !0,
                    class: a.$style.suggestionLink,
                    attrs: {
                        href: e.url,
                        title: e.title
                    },
                    on: {
                        focus: function(e) {
                            a.navigationIndex = t;
                        }
                    }
                }, [ a._v(" " + a._s(e.label) + " ") ]) ], 1);
            })) ] ], 2) : a._e() ]), n("Btn", {
                class: a.$style.mobileCloseButton,
                attrs: {
                    type: "ghost",
                    size: "small",
                    tabindex: "-1"
                }
            }, [ a._v(" " + a._s(a.$translate("site_navigation_search__cancel", "Cancel")) + " ") ]) ], 1);
        }), [], !1, (function(e) {
            this.$style = v.default.locals || v.default;
        }), null, null);
        t.a = y.exports;
    },
    "5kRB": function(e, t, a) {
        e.exports = a("ydjK")("5kRB");
    },
    "5z2n": function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + a), 
                i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 48, 149, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_mentioned|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), a.b('">'), 
                    a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a> mentioned you in a comment");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.b('<div class="graphic">'), 
                i.b("\n" + a), i.b('  <div class="mention-wrap">'), i.b("\n" + a), i.b('    <div class="activity-block mention">'), 
                i.b("\n" + a), i.s(i.f("project", e, t, 1), e, t, 0, 281, 293, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b(a.rp("<comment0", e, t, ""));
                })), e.pop()), i.b("    </div>"), i.b("\n" + a), i.b("  </div>"), i.b("\n" + a), 
                i.b("</div>"), i.fl();
            },
            partials: {
                "<comment0": {
                    name: "comment",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_mentioned|<a href="{{actor.url}}">{{actor.display_name}}</a> mentioned you in a comment{{/translate}}\n</div>\n<div class="graphic">\n  <div class="mention-wrap">\n    <div class="activity-block mention">\n      {{#project}}{{>comment}}{{/project}}\n    </div>\n  </div>\n</div>', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    "6QaK": function(e, t, a) {
        e.exports = a("ydjK")("6QaK");
    },
    "6S3h": function(e, t, a) {
        "use strict";
        var i = a("K+aO"), n = Object(i.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 125.8 291.6"
                }
            }, [ t("path", {
                attrs: {
                    d: "M88.6 145.8l-70-81.1v162.2z"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = n.exports;
    },
    "6bQ5": function(e, t, a) {
        e.exports = a("ydjK")("6bQ5");
    },
    "7Wgy": function(e, t, a) {
        var i = a("4nGm");
        "string" == typeof i && (i = [ [ e.i, i, "" ] ]), i.locals && (e.exports = i.locals);
        (0, a("DtNa").default)("616e502a", i, !0, {});
    },
    "7kbV": function(e, t, a) {
        var i = a("uSKH");
        "string" == typeof i && (i = [ [ e.i, i, "" ] ]), i.locals && (e.exports = i.locals);
        (0, a("DtNa").default)("5b357d4e", i, !0, {});
    },
    "95tM": function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + a), 
                i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 48, 196, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_appreciated|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a> appreciated your project");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.b('<a href="'), i.b(i.v(i.d("project.url", e, t, 0))), 
                i.b('" class="graphic">'), i.b("\n" + a), i.b('  <div class="activity-block project-appreciated">'), 
                i.b("\n" + a), i.b('    <img alt="'), i.b(i.v(i.d("project.name", e, t, 0))), i.b('" title="'), 
                i.b(i.v(i.d("project.name", e, t, 0))), i.b('" src="'), i.b(i.v(i.d("project.covers.115", e, t, 0))), 
                i.b('" srcset="'), i.b(i.v(i.d("project.covers.115", e, t, 0))), i.b(", "), i.b(i.v(i.d("project.covers.202", e, t, 0))), 
                i.b(' 2x" class="project_image" />'), i.b("\n" + a), i.b("  </div>"), i.b("\n" + a), 
                i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_appreciated|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> appreciated your project{{/translate}}\n</div>\n<a href="{{project.url}}" class="graphic">\n  <div class="activity-block project-appreciated">\n    <img alt="{{project.name}}" title="{{project.name}}" src="{{project.covers.115}}" srcset="{{project.covers.115}}, {{project.covers.202}} 2x" class="project_image" />\n  </div>\n</a>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    "9yXK": function(e, t, a) {
        "use strict";
        var i = a("Pvlb"), n = a.n(i);
        t.default = n.a;
    },
    "9yax": function(e, t, a) {
        var i = a("6QaK"), n = {
            "lib/_buttons/_link": a("vYch").template,
            "_icons/_upload": a("0Iy0").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b(i.rp("<lib/_buttons/_link1", e, t, "")), i.fl();
            },
            partials: {
                "<lib/_buttons/_link1": {
                    name: "lib/_buttons/_link",
                    partials: {
                        "<leadingIconAsset_icons/_upload0": {
                            name: "_icons/_upload",
                            partials: {},
                            subs: {}
                        }
                    },
                    subs: {
                        attrs: function(e, t, a, i) {
                            a.b('id="new-work-button" unselectable="on" tabindex="0" href="/portfolio/editor" '), 
                            a.s(a.f("add_work_button_data", e, t, 1), e, t, 0, 138, 163, "{{ }}") && (a.rs(e, t, (function(e, t, a) {
                                a.b(" data-"), a.b(a.v(a.f("key", e, t, 0))), a.b('="'), a.b(a.v(a.f("value", e, t, 0))), 
                                a.b('"');
                            })), e.pop());
                        },
                        containerClasses: function(e, t, a, i) {
                            a.b("nav-new-work-button");
                        },
                        classes: function(e, t, a, i) {
                            a.b("hide-phone hide-tablet qa-add-work-button new-work-button rf-button--small rf-button--icon-leading");
                        },
                        leadingIconAsset: function(e, t, a, i) {
                            a.b(a.rp("<leadingIconAsset_icons/_upload0", e, t, ""));
                        },
                        label: function(e, t, a, i) {
                            a.s(a.f("translate", e, t, 1), e, t, 0, 479, 503, "{{ }}") && (a.rs(e, t, (function(e, t, a) {
                                a.b("button_add_work|Add Work");
                            })), e.pop());
                        }
                    }
                }
            },
            subs: {}
        }, '{{<lib/_buttons/_link}}\n  {{$attrs}}id="new-work-button" unselectable="on" tabindex="0" href="/portfolio/editor" {{#add_work_button_data}} data-{{key}}="{{value}}"{{/add_work_button_data}}{{/attrs}}\n  {{$containerClasses}}nav-new-work-button{{/containerClasses}}\n  {{$classes}}hide-phone hide-tablet qa-add-work-button new-work-button rf-button--small rf-button--icon-leading{{/classes}}\n  {{$leadingIconAsset}}{{> _icons/_upload}}{{/leadingIconAsset}}\n  {{$label}}{{#translate}}button_add_work|Add Work{{/translate}}{{/label}}\n{{/lib/_buttons/_link}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    BarQ: function(e, t, a) {
        "use strict";
        a("1t7P"), a("jQ/y"), a("aLgo"), a("jwue"), a("hCOa"), a("lTEL"), a("+KXO"), a("7x/C"), 
        a("DZ+c"), a("87if"), a("+oxZ"), a("kYxP");
        function i(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
                    return a;
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        var n = {
            _mapEvents: function() {
                var e = this;
                this._undelegateEvents(), Object.keys(this.events).forEach((function(t) {
                    var a = function(e, t, a) {
                        var n = [], r = e[t], o = function e(t) {
                            var i = [];
                            return "string" == typeof t ? i.push({
                                method: a[t].bind(a)
                            }) : "function" == typeof t ? i.push({
                                method: t
                            }) : Object.keys(t).forEach((function(a) {
                                var n = e(t[a]);
                                i.push({
                                    selector: a,
                                    method: n[0].method
                                });
                            })), i;
                        };
                        return Array.isArray(r) ? r.forEach((function(e) {
                            n.push.apply(n, i(o(e)));
                        })) : n.push.apply(n, i(o(r))), n;
                    }(e.events, t, e);
                    t += ".delegated", a.forEach((function(a) {
                        a.selector ? e.$view.on(t, a.selector, a.method) : e.$view.on(t, a.method);
                    }));
                }));
            },
            _undelegateEvents: function() {
                this.$view && this.$view.off(".delegated");
            }
        };
        t.a = n;
    },
    BblU: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a("D57K"), n = a("mGku"), r = a("NnMW"), o = a("nOR9"), s = a("rF8O"), l = a("2dzt"), c = a("E8ap"), d = a("BHX3"), p = [ {
            key: "footer_link_careers",
            url: c.URL_CAREERS,
            label: d.default.translate("footer_link_careers", "Careers at Behance"),
            e2eKey: "e2e-FooterInfinity-more-link-careers",
            text: "Careers at Behance"
        }, {
            key: "footer_link_portfolio",
            url: "https://portfolio.adobe.com/?promoid=ZKD5FJ7P&mv=other",
            label: d.default.translate("footer_link_portfolio", "Adobe Portfolio"),
            e2eKey: "e2e-FooterInfinity-more-link-portfolio",
            text: "Adobe Portfolio"
        }, {
            key: "footer_link_blog",
            url: c.URL_BEHANCE_BLOG,
            label: d.default.translate("footer_link_blog", "Blog"),
            e2eKey: "e2e-FooterInfinity-more-link-blog",
            text: "Blog"
        }, {
            key: "footer_link_ccTips",
            url: c.URL_NNU,
            label: d.default.translate("footer_link_ccTips", "Creative Career Tips"),
            e2eKey: "e2e-FooterInfinity-more-link-career-tips",
            text: "Creative Career Tips"
        }, {
            key: "footer_link_downloadapp",
            url: c.URL_APPS,
            label: d.default.translate("footer_link_downloadapp", "Download the App"),
            e2eKey: "e2e-FooterInfinity-more-link-app",
            text: "Download the App"
        } ], u = [ {
            label: d.default.translate("footer_terms", "TOU"),
            url: c.URL_TERMS,
            text: "TOU",
            key: "footer_terms",
            e2eKey: "e2e-FooterInfinity-link-terms"
        }, {
            label: d.default.translate("footer_privacy", "Privacy"),
            url: c.URL_PRIVACY,
            text: "Privacy",
            key: "footer_privacy",
            e2eKey: "e2e-FooterInfinity-link-privacy"
        }, {
            label: d.default.translate("footer_community", "Community"),
            url: c.URL_COMMUNITY_GUIDELINES,
            text: "Community",
            key: "footer_community",
            e2eKey: "e2e-FooterInfinity-link-community"
        }, {
            label: d.default.translate("footer_faq", "Help"),
            url: c.URL_NETWORK_SUPPORT,
            text: "Help",
            key: "footer_faq",
            e2eKey: "e2e-FooterInfinity-link-help"
        } ], b = a("43bc"), m = a("k8DD"), f = a("nE2t"), h = a("hRZA"), v = a("Ta0x"), g = a("tLj1"), y = a("XobZ"), _ = n.default.extend({
            components: {
                Tooltip: s.a,
                DownloadAppModal: v.a,
                AdobeLockup2020: m.a
            },
            props: {
                isInFocus: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    footer: null,
                    LOCALES: c.LOCALES,
                    FOOTER_MORE_LINKS: p,
                    FOOTER_LINKS: u,
                    URL_ADOBE_CREATIVE_CLOUD_HOME: c.URL_ADOBE_CREATIVE_CLOUD_HOME,
                    downloadAppOpen: !1
                };
            },
            beforeCreate: function() {
                this.$store.registerModule("footer", l.default, {
                    preserveState: !!this.$store.state.footer
                }), this.$store.registerModule("downloadAppModal", b.b);
            },
            watch: {
                isInFocus: function(e) {
                    e ? this.$refs.root.focus() : this.$refs.root.blur();
                }
            },
            methods: Object(i.__assign)(Object(i.__assign)({
                languageSelectChanged: function(e) {
                    var t = e;
                    y.default.setCookie(h.COOKIE.LANGUAGE_SETTING, t, {
                        expires: 365
                    }), g.default.custom("localization", "Language changed by user", {
                        locale: t
                    }), f.default.reloadLocation();
                }
            }, Object(o.mapActions)("downloadAppModal", {
                sendSMS: b.a.SEND_SMS_ACTION,
                resetSMSStatus: b.a.RESET_SMS_SENT_STATUS_ACTION
            })), {
                closeDownloadModal: function() {
                    this.downloadAppOpen = !1, g.default.custom("footer", "Download app modal closed by user");
                },
                openDownloadModal: function() {
                    this.downloadAppOpen = !0, g.default.custom("footer", "Download app modal clicked by user");
                }
            }),
            computed: Object(i.__assign)(Object(i.__assign)(Object(i.__assign)(Object(i.__assign)({}, Object(o.mapState)("user", {
                isLoggedIn: function(e) {
                    return Boolean(e.loggedInUser);
                }
            })), Object(o.mapState)({
                sendSMSStatusCode: function(e) {
                    return e.downloadAppModal.sendSMSStatusCode;
                }
            })), Object(o.mapState)("translation", {
                locale: function(e) {
                    return e.localization.LOCALE;
                }
            })), {
                currentLocale: function() {
                    var e = this, t = c.LOCALES.find((function(t) {
                        return t.code === e.locale;
                    }));
                    return t || c.LOCALES[0];
                },
                beforeDestroy: function() {
                    this.$store.unregisterModule("footer"), this.$store.unregisterModule("downloadAppModal");
                }
            })
        }), x = a("Xe1u"), w = a("K+aO");
        var k = Object(w.default)(_, (function() {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                ref: "root",
                class: [ e.$style.footerInfinity, "js-footer", "InfinityFooter__global-selector" ],
                attrs: {
                    tabindex: "0"
                }
            }, [ a("div", [ a("a", {
                class: e.$style.skipContent,
                attrs: {
                    tabindex: "0"
                },
                on: {
                    keypress: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.$emit("skipToMainContent");
                    }
                }
            }, [ e._v(e._s(e.$translate("footer_jump_to_top", "Jump to Main Content"))) ]) ]), a("div", {
                class: e.$style.footerItems,
                attrs: {
                    tabindex: "0"
                }
            }, [ a("Tooltip", {
                class: e.$style.tooltipWrapper,
                attrs: {
                    position: "top",
                    alignment: "left",
                    alignmentOffset: 20,
                    horizontalPadding: 0,
                    toggleMethod: "hover",
                    isOpen: !1
                }
            }, [ a("div", {
                class: [ e.$style.footerSelector, e.$style.footerSelectorMore, "qa-more-link-container", "e2e-FooterInfinity-link-container" ]
            }, [ e._v(" " + e._s(e.$translate("footer_more_behance", "More Behance")) + " ") ]), a("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ a("ul", {
                class: [ e.$style.tooltipMore ]
            }, e._l(e.FOOTER_MORE_LINKS, (function(t) {
                return a("li", {
                    key: t.key,
                    class: e.$style.footerSelectorItem
                }, [ "footer_link_downloadapp" === t.key ? a("a", {
                    class: [ e.$style.footerSelectorLinks, "e2e-InfitiyFooter-footerSelectorItem" ],
                    attrs: {
                        "aria-label": t.key,
                        "aria-haspopup": "true"
                    },
                    on: {
                        click: e.openDownloadModal
                    }
                }, [ e._v(" " + e._s(e.$translate(t.key, t.text)) + " ") ]) : a("a", {
                    class: [ e.$style.footerSelectorLinks, t.e2eKey, "e2e-InfitiyFooter-footerSelectorItems" ],
                    attrs: {
                        href: t.url,
                        target: "_blank",
                        "aria-label": t.key
                    }
                }, [ e._v(e._s(e.$translate(t.key, t.text)) + " ") ]) ]);
            })), 0) ]) ]) ], 1), a("div", {
                class: e.$style.footerItems
            }, [ a("Tooltip", {
                class: e.$style.tooltipWrapper,
                attrs: {
                    position: "top",
                    alignment: "center",
                    toggleMethod: "hover",
                    horizontalPadding: 0,
                    isOpen: !1
                }
            }, [ a("p", {
                class: [ e.$style.footerSelector, "qa-language-selector", "e2e-FooterInfinity-language-selector" ]
            }, [ e._v(" " + e._s(e.currentLocale.label) + " ") ]), a("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ a("ul", {
                class: e.$style.tooltipContainer
            }, e._l(e.LOCALES, (function(t) {
                var i;
                return a("li", {
                    key: t.code,
                    class: [ e.$style.footerSelectorItem, (i = {}, i[e.$style.selected] = t.code === e.currentLocale.code, 
                    i) ]
                }, [ a("a", {
                    class: [ e.$style.footerSelectorLinks, "e2e-InfinityFooter-footerSelectorLinks-" + t.code ],
                    attrs: {
                        href: "",
                        "aria-label": t.code,
                        "data-language-locale": t.code,
                        "aria-labelledby": t.code
                    },
                    on: {
                        click: function(a) {
                            return e.languageSelectChanged(t.code);
                        },
                        keypress: function(a) {
                            return !a.type.indexOf("key") && e._k(a.keyCode, "enter", 13, a.key, "Enter") ? null : e.languageSelectChanged(t.code);
                        }
                    }
                }, [ e._v(e._s(t.label) + " ") ]) ]);
            })), 0) ]) ]) ], 1), a("div", {
                class: e.$style.footerItems
            }, [ a("ul", {
                class: e.$style.footerLinks
            }, [ e._l(e.FOOTER_LINKS, (function(t) {
                return a("li", {
                    key: t.label
                }, [ a("a", {
                    class: [ e.$style.footerLink, t.e2eKey ],
                    attrs: {
                        "aria-label": t.key,
                        href: t.url,
                        target: "_blank"
                    }
                }, [ e._v(e._s(e.$translate(t.key, t.text))) ]) ]);
            })), a("li", {
                key: "AdChoices"
            }, [ a("a", {
                class: [ e.$style.footerLink, "js-privacy-personalize" ],
                attrs: {
                    "aria-label": "AdChoices",
                    "aria-haspopup": "true",
                    href: "javascript:void(0)"
                }
            }) ]) ], 2) ]), a("div", {
                class: e.$style.adobeLogo
            }, [ a("a", {
                attrs: {
                    href: e.URL_ADOBE_CREATIVE_CLOUD_HOME + "?promoid=RYGDMYVW&mv=other",
                    target: "_blank",
                    title: "Adobe Creative Cloud",
                    "aria-label": "Adobe Creative Cloud"
                }
            }, [ a("AdobeLockup2020", {
                class: e.$style.icon
            }) ], 1) ]), a("portal", {
                attrs: {
                    "target-el": ".js-vue-apps-modal-portal"
                }
            }, [ a("DownloadAppModal", {
                attrs: {
                    showModal: e.downloadAppOpen,
                    isLoggedIn: e.isLoggedIn
                },
                on: {
                    closeModal: e.closeDownloadModal,
                    appLinkRequested: e.sendSMS,
                    smsSuccessMessageRead: e.resetSMSStatus
                }
            }) ], 1) ], 1);
        }), [], !1, (function(e) {
            this.$style = x.default.locals || x.default;
        }), null, null).exports;
        a("1t7P"), a("LW0h"), a("jwue"), a("jQ3i"), a("daRM"), a("FtHn"), a("+KXO"), a("x4t0"), 
        a("+oxZ");
        function S(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), a.push.apply(a, i);
            }
            return a;
        }
        function T(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e;
        }
        var N = {
            components: {
                CloseIcon: a("LSlr").default
            },
            data: function() {
                return {
                    canShowMessage: !1,
                    analyticsChannel: "community_message_banner",
                    maxURL: "https://max.adobe.com",
                    liveURL: "https://www.behance.net/adobelive",
                    voteUrl: "https://www.vote.org",
                    ccPlanUrl: "https://www.adobe.com/creativecloud/plans.html?promoid=HCS3XL4S&mv=other",
                    surveyLink: "https://form.jotform.com/211396989580169"
                };
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(a), !0).forEach((function(t) {
                        T(e, t, a[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : S(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                    }));
                }
                return e;
            }({}, Object(o.mapState)([ "gates", "user" ]), {
                hasUserDismissedBanner: function() {
                    return y.default.wasDialogDismissed("community-cc-survey");
                },
                messageBannerCookie: function() {
                    return this.gates.vote_banner ? h.COOKIE.VOTE_BANNER : this.gates.max_banner ? h.COOKIE.MAX_BANNER : void 0;
                },
                isUSTimezone: function() {
                    return d.default.getTimeZone().includes("America");
                },
                canShowCommunityMessage: function() {
                    return this.gates.message_banner && !this.user.loggedInUser;
                },
                hasBannerSet: function() {
                    return this.canShowCommunityMessage || this.gates.max_banner || this.gates.vote_banner && this.isUSTimezone;
                }
            }),
            mounted: function() {
                this.canShowMessage = this.gates.message_banner ? !this.hasUserDismissedBanner : !y.default.getCookie(this.messageBannerCookie);
            },
            watch: {
                canShowMessage: function(e) {
                    e && this.hasBannerSet ? document.body.classList.add("has-message") : document.body.classList.remove("has-message");
                }
            },
            methods: {
                closeMessage: function() {
                    this.canShowMessage = !1, this.gates.message_banner ? y.default.markDialogDismissed("community-cc-survey") : y.default.setCookie(this.messageBannerCookie, "true", {
                        expires: 14
                    });
                },
                trackLinkClick: function(e) {
                    g.default.custom(this.analyticsChannel, "link clicked", {
                        link: e
                    });
                }
            }
        }, P = a("Ub+Z");
        var j = Object(w.default)(N, (function() {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return e.canShowMessage && e.hasBannerSet ? a("div", {
                class: e.$style.communitySupport
            }, [ e.gates.message_banner ? a("span", [ e._v(" " + e._s(e.$translate("community-ask-feedback", "We would love to hear your feedback.")) + " "), a("a", {
                attrs: {
                    href: e.surveyLink,
                    target: "_blank"
                }
            }, [ e._v(e._s(e.$translate("community-take-survey", "Take a quick survey"))) ]) ]) : e._e(), e.gates.vote_banner && !e.gates.max_banner ? a("span", {
                domProps: {
                    innerHTML: e._s(e.$translate("community-vote-message-banner", "It's Election Day! <a href='{voteUrl}' target='_blank' class='link'>Register to vote</a> for the 2020 US Election. Learn more at <a href='{voteUrl}' target='_blank' class='link'>vote.org</a>.", {
                        voteUrl: this.voteUrl
                    }))
                }
            }) : e._e(), e.gates.max_banner ? a("span", [ e._v(" " + e._s(e.$translate("community-max-message-banner", "Join the livestream for Adobe Max, our annual creativity conference! Tune in with us this week at")) + " "), a("a", {
                attrs: {
                    href: e.maxURL,
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.trackLinkClick(e.maxURL);
                    }
                }
            }, [ e._v("Adobe Max") ]), e._v(" " + e._s(e.$translate("max_banner_or", "or ")) + " "), a("a", {
                attrs: {
                    href: e.liveURL,
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.trackLinkClick(e.liveURL);
                    }
                }
            }, [ e._v("Adobe Live") ]), e._v(". ") ]) : e._e(), a("span", {
                class: e.$style.close,
                attrs: {
                    tabindex: "0"
                },
                on: {
                    click: e.closeMessage,
                    keypress: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.closeMessage(t);
                    }
                }
            }, [ a("CloseIcon", {
                class: e.$style.icon
            }) ], 1) ]) : e._e();
        }), [], !1, (function(e) {
            this.$style = P.default.locals || P.default;
        }), null, null).exports, C = a("3ooc"), L = n.default.extend({
            components: {
                PrimaryNav: r.a,
                InfinityFooter: k,
                MessageBanner: j,
                SubscriptionModalManager: C.a
            },
            data: function() {
                return {
                    footerInFocus: !1
                };
            },
            computed: Object(i.__assign)({}, Object(o.mapState)([ "config" ])),
            methods: {
                toggleFooterFocus: function() {
                    this.footerInFocus = !this.footerInFocus;
                },
                handleContentFocus: function() {
                    this.$refs.content.focus();
                }
            }
        }), O = Object(w.default)(L, (function() {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", [ a("MessageBanner"), e.config.IFRAME ? e._e() : a("PrimaryNav", {
                on: {
                    skipToMainContent: e.handleContentFocus,
                    skipToFooter: e.toggleFooterFocus
                }
            }), a("div", {
                staticClass: "slide-panel js-top-panel",
                attrs: {
                    id: "top-panel"
                }
            }, [ a("div", {
                ref: "content",
                staticClass: "js-site-content site-content e2e-site-content",
                attrs: {
                    tabindex: "0",
                    id: "site-content"
                }
            }, [ a("router-view") ], 1), a("InfinityFooter", {
                attrs: {
                    isInFocus: e.footerInFocus
                },
                on: {
                    skipToMainContent: e.handleContentFocus
                }
            }) ], 1), a("div", {
                staticClass: "vue-portal-target js-vue-overlay-portal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-apps-modal-portal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-add-story-modal-portal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-add-story-modal-discard-confirm-portal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-web-push-disabled"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-error-portal"
            }), a("div", {
                staticClass: "vue-portal-target js-story-modal-portal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-mobile-app-upsell"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-popup"
            }), a("div", {
                staticClass: "js-vue-project-view-mount"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-livestream-killswitch-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-livestream-report-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-livestream-share-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-livestream-embed-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-report-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-generic-report-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-report-modal--block-followup"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-report-modal--block-success"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-share-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-moodboard-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-moodboard-recommendations-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-notif"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-profile-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-message-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-profile-unblock-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-profile-subscription-delete-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-version-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-preview-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-publishing-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-advanced-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-crop-dialog"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-navigation-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-creative-fields"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-copyright-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-attach-files-modal"
            }), a("div", {
                staticClass: "vue-portal-target js-vue-project-editor-unverified-user-modal"
            }), a("SubscriptionModalManager") ], 1);
        }), [], !1, null, null, null);
        t.default = O.exports;
    },
    Bew7: function(e, t, a) {
        "use strict";
        var i = a("K+aO"), n = Object(i.default)({}, (function() {
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
        t.a = n.exports;
    },
    "C++9": function(e, t, a) {
        var i = a("p3jP");
        "string" == typeof i && (i = [ [ e.i, i, "" ] ]), i.locals && (e.exports = i.locals);
        (0, a("DtNa").default)("e6428d6c", i, !0, {});
    },
    "C+tV": function(e, t, a) {
        var i = a("6QaK"), n = {
            "lib/_addWorkButton": a("9yax").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="notifications-empty">'), i.b("\n" + a), 
                i.b('<div class="notifications-empty-title">'), i.s(i.f("translate", e, t, 1), e, t, 0, 87, 156, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b("notifications_empty_title|You don't have any notifications right now.");
                })), e.pop()), i.b("</div>"), i.b("\n" + a), i.s(i.f("translate", e, t, 1), e, t, 0, 191, 324, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b("notifications_empty_content|We'll notify you when you get appreciations, comments, or new followers. To get started, upload new work.");
                })), e.pop()), i.b("\n" + a), i.b(i.rp("<lib/_addWorkButton0", e, t, "")), i.b("</div>"), 
                i.b("\n"), i.fl();
            },
            partials: {
                "<lib/_addWorkButton0": {
                    name: "lib/_addWorkButton",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="notifications-empty">\n<div class="notifications-empty-title">{{#translate}}notifications_empty_title|You don\'t have any notifications right now.{{/translate}}</div>\n{{#translate}}notifications_empty_content|We\'ll notify you when you get appreciations, comments, or new followers. To get started, upload new work.{{/translate}}\n{{>lib/_addWorkButton}}\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    C1Dl: function(e, t, a) {
        var i = a("6QaK"), n = {
            "notifications/_userProjects": a("RcWU").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg">'), i.b("\n" + a), i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 34, 172, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b("notifications_applied_job|"), a.b(a.v(a.d("actor.display_name", e, t, 0))), 
                    a.b(' applied to your job &ldquo;<a href="'), a.b(a.v(a.d("job._links.recruiter", e, t, 0))), 
                    a.b('"</a>'), a.b(a.v(a.d("job.title", e, t, 0))), a.b("</a>&rdquo;");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.s(i.d("actor.latest_projects.0", e, t, 1), e, t, 0, 222, 279, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.s(a.f("actor", e, t, 1), e, t, 0, 233, 268, "{{ }}") && (a.rs(e, t, (function(e, t, a) {
                        a.b(a.rp("<notifications/_userProjects0", e, t, ""));
                    })), e.pop());
                })), e.pop()), i.fl();
            },
            partials: {
                "<notifications/_userProjects0": {
                    name: "notifications/_userProjects",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg">\n  {{#translate}}notifications_applied_job|{{actor.display_name}} applied to your job &ldquo;<a href="{{job._links.recruiter}}"</a>{{job.title}}</a>&rdquo;{{/translate}}\n</div>\n{{#actor.latest_projects.0}}\n{{#actor}}\n{{> notifications/_userProjects}}\n{{/actor}}\n{{/actor.latest_projects.0}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    CIZq: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="graphic">'), i.b("\n" + a), i.b('  <div class="project-comment-wrap">'), 
                i.b("\n" + a), i.b('    <div class="activity-block project-comment">'), i.b("\n" + a), 
                i.s(i.f("project", e, t, 1), e, t, 0, 126, 138, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b(a.rp("<comment0", e, t, ""));
                })), e.pop()), i.b("    </div>"), i.b("\n" + a), i.b("  </div>"), i.b("\n" + a), 
                i.b("</div>"), i.fl();
            },
            partials: {
                "<comment0": {
                    name: "comment",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="graphic">\n  <div class="project-comment-wrap">\n    <div class="activity-block project-comment">\n      {{#project}}{{>comment}}{{/project}}\n    </div>\n  </div>\n</div>', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    CPVS: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<img src="'), i.b(i.v(i.f("assetsurl", e, t, 0))), 
                i.b("img/stories/reactions/png/"), i.b(i.v(i.d("reaction.type", e, t, 0))), i.b('.png" srcset="'), 
                i.b(i.v(i.f("assetsurl", e, t, 0))), i.b("img/stories/reactions/png/"), i.b(i.v(i.d("reaction.type", e, t, 0))), 
                i.b(".png, "), i.b(i.v(i.f("assetsurl", e, t, 0))), i.b("img/stories/reactions/png/"), 
                i.b(i.v(i.d("reaction.type", e, t, 0))), i.b('@2x.png 2x" class="wip-reaction-icon" />'), 
                i.fl();
            },
            partials: {},
            subs: {}
        }, '<img src="{{assetsurl}}img/stories/reactions/png/{{reaction.type}}.png" srcset="{{assetsurl}}img/stories/reactions/png/{{reaction.type}}.png, {{assetsurl}}img/stories/reactions/png/{{reaction.type}}@2x.png 2x" class="wip-reaction-icon" />', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    "D+Kl": function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<a href="'), i.b(i.v(i.d("actor.url", e, t, 0))), 
                i.b('" class="js-mini-profile" data-id="'), i.b(i.v(i.d("actor.id", e, t, 0))), 
                i.b('">'), i.b(i.v(i.d("actor.display_name", e, t, 0))), i.b("</a> "), i.b(i.v(i.f("action", e, t, 0))), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> {{action}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    DZps: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="activity-container js-'), i.b(i.v(i.f("type", e, t, 0))), 
                i.b('-activity">'), i.b("\n" + a), i.b('  <h2 class="bell-title '), i.b(i.v(i.f("type", e, t, 0))), 
                i.b('-title hide-phone js-bell-title">'), i.b(i.v(i.f("title", e, t, 0))), i.b("</h2>"), 
                i.b("\n" + a), i.b('  <h2 class="bell-title bell-title-dummy hide-phone js-bell-title-dummy">'), 
                i.b(i.v(i.f("title", e, t, 0))), i.b("</h2>"), i.b("\n" + a), i.b('  <div class="js-error-container messages hide">'), 
                i.b("\n" + a), i.b('    <div class="error">'), i.b("\n" + a), i.b('      <div class="icon"></div>'), 
                i.b("\n" + a), i.b('      <span class="js-error-text"></span>'), i.b("\n" + a), 
                i.b("    </div>"), i.b("\n" + a), i.b("  </div>"), i.b("\n" + a), i.b('  <div class="js-spin loading-spinner cfix"></div>'), 
                i.b("\n" + a), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="activity-container js-{{type}}-activity">\n  <h2 class="bell-title {{type}}-title hide-phone js-bell-title">{{title}}</h2>\n  <h2 class="bell-title bell-title-dummy hide-phone js-bell-title-dummy">{{title}}</h2>\n  <div class="js-error-container messages hide">\n    <div class="error">\n      <div class="icon"></div>\n      <span class="js-error-text"></span>\n    </div>\n  </div>\n  <div class="js-spin loading-spinner cfix"></div>\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    EBfS: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<a href="'), i.b(i.v(i.d("actor.url", e, t, 0))), 
                i.b('" class="js-mini-profile" data-id="'), i.b(i.v(i.d("actor.id", e, t, 0))), 
                i.b('">'), i.b(i.v(i.d("actor.display_name", e, t, 0))), i.b("</a> "), i.b(i.v(i.f("action", e, t, 0))), 
                i.b(" "), i.s(i.f("team", e, t, 1), e, t, 0, 118, 148, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('<a href="'), a.b(a.v(a.f("url", e, t, 0))), a.b('">'), a.b(a.v(a.f("name", e, t, 0))), 
                    a.b("</a>");
                })), e.pop()), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> {{action}} {{#team}}<a href="{{url}}">{{name}}</a>{{/team}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    ENE1: function(e, t, a) {
        var i = a("IBsm");
        e.exports = function() {
            return i.Date.now();
        };
    },
    EZKv: function(e, t, a) {
        e.exports = a("ydjK")("EZKv");
    },
    FA4o: function(e, t, a) {
        (t = e.exports = a("RDo7")(!1)).push([ e.i, ".FadeDown-enterActive-3hn{-webkit-animation:FadeDown-fadeDown-3o5 .25s;animation:FadeDown-fadeDown-3o5 .25s;-webkit-animation-timing-function:cubic-bezier(0.19, 1, 0.22, 1);animation-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.FadeDown-leaveActive-1v9{animation:FadeDown-fadeDown-3o5 .25s reverse;-webkit-animation-timing-function:cubic-bezier(0.78, 0, 0.81, 0);animation-timing-function:cubic-bezier(0.78, 0, 0.81, 0)}@-webkit-keyframes FadeDown-fadeDown-3o5{0%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes FadeDown-fadeDown-3o5{0%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}", "" ]), 
        t.locals = {
            enterActive: "FadeDown-enterActive-3hn",
            fadeDown: "FadeDown-fadeDown-3o5",
            leaveActive: "FadeDown-leaveActive-1v9"
        };
    },
    FR8Z: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<svg version="1.1" width="24" height="24" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" class="icon icon-image"><path class="st0" d="M3,19l18-0.0509v-1.8566c-0.5625-0.4153-2.8125-3.7224-3.7303-3.6811 c-0.6961,0.0581-3.2098,2.7783-4.0665,2.7783c-0.7671,0-4.3314-5.0188-5.184-5.0188C7.1666,11.1709,3,15.909,3,16.6772V19z"/><circle class="st0" cx="16.0085" cy="8.0088" r="1.75"/><path class="st0" d="M1,3v18h22V3H1z M22,20H2V4h20V20z"/></svg>'), 
                i.fl();
            },
            partials: {},
            subs: {}
        }, '<svg version="1.1" width="24" height="24" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" class="icon icon-image"><path class="st0" d="M3,19l18-0.0509v-1.8566c-0.5625-0.4153-2.8125-3.7224-3.7303-3.6811 c-0.6961,0.0581-3.2098,2.7783-4.0665,2.7783c-0.7671,0-4.3314-5.0188-5.184-5.0188C7.1666,11.1709,3,15.909,3,16.6772V19z"/><circle class="st0" cx="16.0085" cy="8.0088" r="1.75"/><path class="st0" d="M1,3v18h22V3H1z M22,20H2V4h20V20z"/></svg>', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    GfZ3: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('#comments" class="graphic">'), 
                i.b("\n" + a), i.b('  <img alt="'), i.b(i.v(i.f("name", e, t, 0))), i.b('" title="'), 
                i.b(i.v(i.f("name", e, t, 0))), i.b('" src="'), i.b(i.v(i.d("covers.115", e, t, 0))), 
                i.b('" srcset="'), i.b(i.v(i.d("covers.115", e, t, 0))), i.b(", "), i.b(i.v(i.d("covers.202", e, t, 0))), 
                i.b(' 2x" class="comment-image" />'), i.b("\n" + a), i.b('  <div class="comment">'), 
                i.b("\n" + a), i.b('    <strong class="actor js-mini-profile" data-id="'), i.b(i.v(i.d("actor.id", e, t, 0))), 
                i.b('">'), i.b(i.v(i.d("actor.display_name", e, t, 0))), i.b(':</strong> <span class="comment-text">'), 
                i.b(i.v(i.d("comment.comment", e, t, 0))), i.b("</span>"), i.b("\n" + a), i.b("  </div>"), 
                i.b("\n" + a), i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<a href="{{url}}#comments" class="graphic">\n  <img alt="{{name}}" title="{{name}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="comment-image" />\n  <div class="comment">\n    <strong class="actor js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}:</strong> <span class="comment-text">{{comment.comment}}</span>\n  </div>\n</a>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    HGcH: function(e, t, a) {
        "use strict";
        var i = a("045I"), n = a.n(i);
        t.default = n.a;
    },
    HNYy: function(e, t, a) {
        "use strict";
        a("7xRU"), a("M+/F"), a("Ee2X"), a("6U7i"), a("KqXw"), a("Ysgh");
        var i = a("OQxq"), n = a("20Oh"), r = a("18mY"), o = a("Bew7"), s = a("C9k2"), l = a("adMq"), c = a("WxsR"), d = {
            components: {
                Btn: i.default,
                TextInput: n.a,
                Spinner: r.a,
                CheckIcon: o.a,
                Fade: l.a
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
                      case s.j.SUCCESS:
                        this.tel = "", this.canViewSuccessState = !0, this.isSending = !1, setTimeout((function() {
                            return t.$emit("smsSuccessMessageRead");
                        }), this.successMessageDuration);
                        break;

                      case s.j.FAILED:
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
                    var e = Object(c.b)(this.tel), t = e.country, a = e.phone, i = !t || !a;
                    if (this.isUSNumberWithoutCountryCode() && i) return this.addUSCountryCode(), this.resetErrorMessage(), 
                    void this.send();
                    if (i) this.errorMessage = this.$translate("stories_upload_invalid_country_or_phone_number", "Invalid country code or phone number"); else {
                        var n = Object(c.a)(a, t, "E.164");
                        this.isSending = !0, this.$emit("appLinkRequested", n);
                    }
                }
            }
        }, p = a("tvyt"), u = a("K+aO");
        var b = Object(u.default)(d, (function() {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", [ a("Fade", {
                attrs: {
                    mode: "out-in"
                }
            }, [ e.canViewSuccessState ? a("div", {
                ref: "success",
                class: e.$style.successWrap
            }, [ a("span", {
                class: e.$style.success
            }, [ a("CheckIcon", {
                class: e.$style.check
            }), e._v(" " + e._s(e.$translate("stories_app_link_sent_success", "Download Link Sent"))) ], 1) ]) : a("div", {
                ref: "formWrap",
                class: e.$style.formWrap
            }, [ a("TextInput", {
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
            }), a("Btn", {
                ref: "sendLinkBtn",
                class: e.$style.sendBtn,
                attrs: {
                    type: e.sendButtonType,
                    disabled: e.isSending
                },
                on: {
                    click: e.send
                }
            }, [ e.isSending ? a("Spinner", {
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
            this.$style = p.default.locals || p.default;
        }), null, null);
        t.a = b.exports;
    },
    IEA7: function(e, t, a) {
        "use strict";
        var i = a("D57K"), n = a("wcfZ");
        t.a = {
            isSupported: function(e) {
                var t = e.allowMobile;
                return Object(i.__awaiter)(this, void 0, Promise, (function() {
                    var e, a, r, o, s;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return e = "Notification" in window, a = "serviceWorker" in navigator, r = "safari" in window, 
                            [ 4, n.default.isBrave() ];

                          case 1:
                            return o = i.sent(), t ? [ 2, e && a && !r && !o ] : (s = n.default.isMobile(), 
                            [ 2, e && a && !r && !o && !s ]);
                        }
                    }));
                }));
            }
        };
    },
    ISH8: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="livestream__message">'), i.b("\n" + a), 
                i.s(i.d("adobelivestarted.url", e, t, 1), e, t, 0, 61, 2415, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.s(i.d("adobelivestarted.is_live", e, t, 1), e, t, 0, 95, 606, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                        i.b('      <div class="livestream__header">'), i.b("\n" + a), i.b('        <p class="livestream__header__title">'), 
                        i.b("\n" + a), i.b("          "), i.s(i.f("translate", e, t, 1), e, t, 0, 205, 388, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                            a.b('notifications_adobelive_started|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                            a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                            a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a> is now livestreaming on "), 
                            a.b(a.v(a.d("adobelivestarted.app_name", e, t, 0)));
                        })), e.pop()), i.b("\n" + a), i.b("        </p>"), i.b("\n" + a), i.b('        <div class="livestream__live">'), 
                        i.b("\n" + a), i.b('          <span class="livestream__live__indicator"></span>'), 
                        i.b("\n" + a), i.b('          <span class="livestream__live__text">Live</span>'), 
                        i.b("\n" + a), i.b("        </div>"), i.b("\n" + a), i.b("      </div>"), i.b("\n" + a);
                    })), e.pop()), i.s(i.d("adobelivestarted.is_live", e, t, 1), e, t, 1, 0, 0, "") || (i.b('      <p class="livestream__header__title">'), 
                    i.b("\n" + a), i.b("        "), i.s(i.f("translate", e, t, 1), e, t, 0, 736, 893, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                        a.b('notifications_adobelive_ended|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                        a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                        a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a>'s Adobe Live stream has ended");
                    })), e.pop()), i.b("\n" + a), i.b("      </p>"), i.b("\n" + a)), i.b('    <div class="livestream__block">'), 
                    i.b("\n" + a), i.b('      <a href="'), i.b(i.v(i.d("adobelivestarted.url", e, t, 0))), 
                    i.b('">'), i.b("\n" + a), i.b('        <div class="livestream__preview" '), i.s(i.d("adobelivestarted.thumbnail_url", e, t, 1), e, t, 0, 1107, 1172, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                        a.b('style="background-image: url('), a.b(a.v(a.d("adobelivestarted.thumbnail_url", e, t, 0))), 
                        a.b(')"');
                    })), e.pop()), i.b(">"), i.b("\n" + a), i.s(i.d("adobelivestarted.tool.synonym.icon_url_2x", e, t, 1), e, t, 0, 1265, 1371, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                        i.b('            <img class="livestream__tool" src="'), i.b(i.v(i.d("adobelivestarted.tool.synonym.icon_url_2x", e, t, 0))), 
                        i.b('">'), i.b("\n" + a);
                    })), e.pop()), i.s(i.d("adobelivestarted.thumbnail_url", e, t, 1), e, t, 1, 0, 0, "") || i.s(i.d("actor.images.276", e, t, 1), e, t, 0, 1497, 1710, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                        i.b('              <img class="livestream__profile__image" src="'), i.b(i.v(i.d("actor.images.276", e, t, 0))), 
                        i.b('">'), i.b("\n" + a), i.b('              <div class="livestream__profile__background" style="background-image: url('), 
                        i.b(i.v(i.d("actor.images.276", e, t, 0))), i.b(')"></div>'), i.b("\n" + a);
                    })), e.pop()), i.b("        </div>"), i.b("\n" + a), i.b("      </a>"), i.b("\n" + a), 
                    i.b('      <div class="livestream__details">'), i.b("\n" + a), i.b('        <p class="livestream__title">'), 
                    i.b("\n" + a), i.b("          "), i.b(i.v(i.d("adobelivestarted.title", e, t, 0))), 
                    i.b("\n" + a), i.b("        </p>"), i.b("\n" + a), i.b('        <a class="livestream__button rf-button rf-button--small" href="'), 
                    i.b(i.v(i.d("adobelivestarted.url", e, t, 0))), i.b('">'), i.b("\n" + a), i.s(i.d("adobelivestarted.is_live", e, t, 1), e, t, 0, 2069, 2168, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                        i.b("            "), i.s(i.f("translate", e, t, 1), e, t, 0, 2096, 2143, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                            a.b("notifications_livestream_watch_button|Watch Now");
                        })), e.pop()), i.b("\n" + a);
                    })), e.pop()), i.s(i.d("adobelivestarted.is_live", e, t, 1), e, t, 1, 0, 0, "") || (i.b("            "), 
                    i.s(i.f("translate", e, t, 1), e, t, 0, 2264, 2321, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                        a.b("notifications_livestream_watch_replay_button|Watch Replay");
                    })), e.pop()), i.b("\n" + a)), i.b("        </a>"), i.b("\n" + a), i.b("      </div>"), 
                    i.b("\n" + a), i.b("    </div>"), i.b("\n" + a);
                })), e.pop()), i.s(i.d("adobelivestarted.url", e, t, 1), e, t, 1, 0, 0, "") || (i.b('    <p class="livestream__header__title">'), 
                i.b("\n" + a), i.b("      "), i.s(i.f("translate", e, t, 1), e, t, 0, 2531, 2688, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_adobelive_ended|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a>'s Adobe Live stream has ended");
                })), e.pop()), i.b("\n" + a), i.b("    </p>"), i.b("\n" + a)), i.b("</div>"), i.b("\n"), 
                i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="livestream__message">\n  {{#adobelivestarted.url}}\n    {{#adobelivestarted.is_live}}\n      <div class="livestream__header">\n        <p class="livestream__header__title">\n          {{#translate}}notifications_adobelive_started|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> is now livestreaming on {{adobelivestarted.app_name}}{{/translate}}\n        </p>\n        <div class="livestream__live">\n          <span class="livestream__live__indicator"></span>\n          <span class="livestream__live__text">Live</span>\n        </div>\n      </div>\n    {{/adobelivestarted.is_live}}\n    {{^adobelivestarted.is_live}}\n      <p class="livestream__header__title">\n        {{#translate}}notifications_adobelive_ended|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a>\'s Adobe Live stream has ended{{/translate}}\n      </p>\n    {{/adobelivestarted.is_live}}\n    <div class="livestream__block">\n      <a href="{{adobelivestarted.url}}">\n        <div class="livestream__preview" {{#adobelivestarted.thumbnail_url}}style="background-image: url({{adobelivestarted.thumbnail_url}})"{{/adobelivestarted.thumbnail_url}}>\n          {{#adobelivestarted.tool.synonym.icon_url_2x}}\n            <img class="livestream__tool" src="{{adobelivestarted.tool.synonym.icon_url_2x}}">\n          {{/adobelivestarted.tool.synonym.icon_url_2x}}\n          {{^adobelivestarted.thumbnail_url}}\n            {{#actor.images.276}}\n              <img class="livestream__profile__image" src="{{actor.images.276}}">\n              <div class="livestream__profile__background" style="background-image: url({{actor.images.276}})"></div>\n            {{/actor.images.276}}\n          {{/adobelivestarted.thumbnail_url}}\n        </div>\n      </a>\n      <div class="livestream__details">\n        <p class="livestream__title">\n          {{adobelivestarted.title}}\n        </p>\n        <a class="livestream__button rf-button rf-button--small" href="{{adobelivestarted.url}}">\n          {{#adobelivestarted.is_live}}\n            {{#translate}}notifications_livestream_watch_button|Watch Now{{/translate}}\n          {{/adobelivestarted.is_live}}\n          {{^adobelivestarted.is_live}}\n            {{#translate}}notifications_livestream_watch_replay_button|Watch Replay{{/translate}}\n          {{/adobelivestarted.is_live}}\n        </a>\n      </div>\n    </div>\n  {{/adobelivestarted.url}}\n  {{^adobelivestarted.url}}\n    <p class="livestream__header__title">\n      {{#translate}}notifications_adobelive_ended|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a>\'s Adobe Live stream has ended{{/translate}}\n    </p>\n  {{/adobelivestarted.url}}\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    Jhmr: function(e, t, a) {
        var i = a("6QaK"), n = {
            "notifications/_wipreactionicon": a("CPVS").template,
            "bestyleguide/_icons/_image": a("FR8Z").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + a), 
                i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 48, 204, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_wipreaction|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a> reacted to your Work in Progress");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.b('<div class="graphic">'), 
                i.b("\n" + a), i.s(i.d("segment.is_expired", e, t, 1), e, t, 1, 0, 0, "") || (i.b('  <a href="'), 
                i.b(i.v(i.d("user.url", e, t, 0))), i.b("/workinprogress/"), i.b(i.v(i.d("segment.id", e, t, 0))), 
                i.b('" class="js-wip-notification-non-expired">'), i.b("\n" + a), i.b('    <div class="activity-block wip-notification">'), 
                i.b("\n" + a), i.b("      <img"), i.b("\n" + a), i.b('        sizes="65px"'), i.b("\n" + a), 
                i.b('        srcset="'), i.b(i.v(i.d("segment.mediaSrcset", e, t, 0))), i.b('"'), 
                i.b("\n" + a), i.b('        src="'), i.b(i.v(i.d("segment.mediaUrl", e, t, 0))), 
                i.b('"'), i.b("\n" + a), i.b('        class="wip-notification__content wip-notification__image" />'), 
                i.b("\n" + a), i.s(i.d("segment.annotations", e, t, 1), e, t, 0, 627, 826, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b("      <img"), i.b("\n" + a), i.b('        sizes="65px"'), i.b("\n" + a), i.b('        srcset="'), 
                    i.b(i.v(i.d("segment.annotationSrcset", e, t, 0))), i.b('"'), i.b("\n" + a), i.b('        src="'), 
                    i.b(i.v(i.d("segment.annotationUrl", e, t, 0))), i.b('"'), i.b("\n" + a), i.b('        class="wip-notification__content wip-notification__annotation" />'), 
                    i.b("\n" + a);
                })), e.pop()), i.b(i.rp("<notifications/_wipreactionicon0", e, t, "      ")), i.b("    </div>"), 
                i.b("\n" + a), i.b("  </a>"), i.b("\n" + a)), i.s(i.d("segment.is_expired", e, t, 1), e, t, 0, 962, 1202, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b('  <div class="activity-block wip-notification wip-notification--expired js-wip-notification-expired">'), 
                    i.b("\n" + a), i.b('    <div class="wip-notification__content">'), i.b("\n" + a), 
                    i.b(i.rp("<bestyleguide/_icons/_image1", e, t, "      ")), i.b(i.rp("<notifications/_wipreactionicon2", e, t, "      ")), 
                    i.b("    </div>"), i.b("\n" + a);
                })), e.pop()), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<notifications/_wipreactionicon0": {
                    name: "notifications/_wipreactionicon",
                    partials: {},
                    subs: {}
                },
                "<bestyleguide/_icons/_image1": {
                    name: "bestyleguide/_icons/_image",
                    partials: {},
                    subs: {}
                },
                "<notifications/_wipreactionicon2": {
                    name: "notifications/_wipreactionicon",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_wipreaction|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> reacted to your Work in Progress{{/translate}}\n</div>\n<div class="graphic">\n  {{^segment.is_expired}}\n  <a href="{{user.url}}/workinprogress/{{segment.id}}" class="js-wip-notification-non-expired">\n    <div class="activity-block wip-notification">\n      <img\n        sizes="65px"\n        srcset="{{segment.mediaSrcset}}"\n        src="{{segment.mediaUrl}}"\n        class="wip-notification__content wip-notification__image" />\n      {{#segment.annotations}}\n      <img\n        sizes="65px"\n        srcset="{{segment.annotationSrcset}}"\n        src="{{segment.annotationUrl}}"\n        class="wip-notification__content wip-notification__annotation" />\n      {{/segment.annotations}}\n      {{>notifications/_wipreactionicon}}\n    </div>\n  </a>\n  {{/segment.is_expired}}\n  {{#segment.is_expired}}\n  <div class="activity-block wip-notification wip-notification--expired js-wip-notification-expired">\n    <div class="wip-notification__content">\n      {{>bestyleguide/_icons/_image}}\n      {{>notifications/_wipreactionicon}}\n    </div>\n  {{/segment.is_expired}}\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    Kwjp: function(e, t, a) {
        e.exports = a("ydjK")("Kwjp");
    },
    LSlr: function(e, t, a) {
        e.exports = a("ydjK")("LSlr");
    },
    MET7: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + a), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 46, 249, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('module_added_to_collection_bell_text|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b('</a> saved an image from "<a href="'), 
                    a.b(a.v(a.d("project.url", e, t, 0))), a.b('">'), a.b(a.v(a.d("project.name", e, t, 0))), 
                    a.b('</a>"');
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.b('<a href="'), i.b(i.v(i.d("collection.url", e, t, 0))), 
                i.b('" class="graphic">'), i.b("\n" + a), i.b('  <div class="activity-block project-collection">'), 
                i.b("\n"), i.b("\n" + a), i.s(i.d("collection.latest_projects", e, t, 1), e, t, 0, 403, 640, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b('      <div class="collection-project-image-wrap">'), i.b("\n" + a), i.b('        <img alt="'), 
                    i.b(i.v(i.d("collection.title", e, t, 0))), i.b('" title="'), i.b(i.v(i.d("collection.title", e, t, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("covers.115", e, t, 0))), i.b('" srcset="'), i.b(i.v(i.d("covers.115", e, t, 0))), 
                    i.b(", "), i.b(i.v(i.d("covers.202", e, t, 0))), i.b(' 2x" class="collection-project-image" />'), 
                    i.b("\n" + a), i.b("      </div>"), i.b("\n" + a);
                })), e.pop()), i.b('    <div class="collection-title">'), i.b("\n" + a), i.b('      <span class="collection-title-text beicons-pre beicons-pre-collection">'), 
                i.b(i.v(i.d("collection.title", e, t, 0))), i.b("</span>"), i.b("\n" + a), i.b("    </div>"), 
                i.b("\n" + a), i.b("  </div>"), i.b("\n" + a), i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg extra-padding">\n{{#translate}}module_added_to_collection_bell_text|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> saved an image from "<a href="{{project.url}}">{{project.name}}</a>"{{/translate}}\n</div>\n<a href="{{collection.url}}" class="graphic">\n  <div class="activity-block project-collection">\n\n    {{#collection.latest_projects}}\n      <div class="collection-project-image-wrap">\n        <img alt="{{collection.title}}" title="{{collection.title}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="collection-project-image" />\n      </div>\n    {{/collection.latest_projects}}\n    <div class="collection-title">\n      <span class="collection-title-text beicons-pre beicons-pre-collection">{{collection.title}}</span>\n    </div>\n  </div>\n</a>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    NAOv: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.s(i.f("project", e, t, 1), e, t, 0, 12, 225, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b('  <a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('">'), i.b("\n" + a), i.b('    <img alt="'), 
                    i.b(i.v(i.f("name", e, t, 0))), i.b('" title="'), i.b(i.v(i.f("name", e, t, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("covers.115", e, t, 0))), i.b('" srcset="'), i.b(i.v(i.d("covers.115", e, t, 0))), 
                    i.b(", "), i.b(i.v(i.d("covers.202", e, t, 0))), i.b(' 2x" class="proposition-image" />'), 
                    i.b("\n" + a), i.b("  </a>"), i.b("\n" + a), i.b('  <div class="proposition-subject">'), 
                    i.b(i.v(i.f("name", e, t, 0))), i.b("</div>"), i.b("\n" + a);
                })), e.pop()), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#project}}\n  <a href="{{url}}">\n    <img alt="{{name}}" title="{{name}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="proposition-image" />\n  </a>\n  <div class="proposition-subject">{{name}}</div>\n{{/project}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    NnMW: function(e, t, a) {
        "use strict";
        var i = a("D57K"), n = a("mGku"), r = a("K+aO"), o = Object(r.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 152.5 28.2"
                }
            }, [ t("path", {
                attrs: {
                    d: "M13.1 0c1.3 0 2.5.1 3.6.4 1.1.2 2 .6 2.8 1.1.8.5 1.4 1.2 1.8 2.1.4.9.6 2 .6 3.2 0 1.4-.3 2.6-1 3.5-.6.9-1.6 1.7-2.8 2.3 1.7.5 3 1.4 3.8 2.6.8 1.2 1.3 2.7 1.3 4.4 0 1.4-.3 2.6-.8 3.6s-1.3 1.9-2.2 2.5c-.9.6-2 1.1-3.2 1.4-1.2.3-2.4.5-3.6.5H0V0h13.1zm-.8 11.2c1.1 0 2-.3 2.7-.8.7-.5 1-1.4 1-2.5 0-.6-.1-1.2-.3-1.6-.2-.4-.5-.7-.9-1-.4-.2-.8-.4-1.3-.5-.5-.1-1-.1-1.6-.1H6.1v6.5h6.2zm.3 11.8c.6 0 1.2-.1 1.7-.2s1-.3 1.4-.6c.4-.3.7-.6 1-1.1.2-.5.4-1.1.4-1.8 0-1.4-.4-2.4-1.2-3.1-.8-.6-1.9-.9-3.2-.9H6.1V23h6.5zm19.3-.1c.8.8 2 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.9c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.6-.8 4.2-.8 1.7 0 3.2.3 4.5 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.2 1.4.3 2.8.2 4.4H30.5c0 1.6.6 3.1 1.4 3.9zm6.3-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1 .7-1.4 1.1-.4.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.2-1.5-.7-2.5-1.4-3.2zM52.8 0v10.4h.1c.7-1.2 1.6-2 2.7-2.5s2.1-.8 3.2-.8c1.5 0 2.7.2 3.6.6.9.4 1.7 1 2.2 1.7.5.7.9 1.6 1.1 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.2-2.7-1.2-1.5 0-2.6.5-3.2 1.3-.7.9-1 2.4-1 4.4v10.5h-5.5V0h5.5zM70 10.6c.6-.9 1.3-1.5 2.2-2.1.9-.5 1.9-.9 3-1.1 1.1-.2 2.2-.3 3.3-.3 1 0 2 .1 3.1.2 1 .1 2 .4 2.8.8.9.4 1.5 1 2.1 1.7.5.7.8 1.7.8 2.9v10.5c0 .9.1 1.8.2 2.6s.4 1.5.7 1.9h-5.6c-.2-.2-.3-.6-.4-.9-.1-.3-.1-.7-.1-1-.9.9-1.9 1.5-3.1 1.9-1.2.4-2.4.5-3.6.5-1 0-1.8-.1-2.7-.4-.8-.2-1.5-.6-2.2-1.1-.6-.5-1.1-1.1-1.5-1.9-.3-.8-.5-1.6-.5-2.7s.2-2.1.6-2.8c.4-.7.9-1.3 1.5-1.8.6-.4 1.4-.8 2.2-1 .8-.2 1.6-.4 2.5-.5l2.4-.3c.8-.1 1.5-.2 2.1-.3.6-.2 1.1-.4 1.5-.7.4-.3.5-.7.5-1.3 0-.6-.1-1.1-.3-1.4-.2-.3-.5-.6-.8-.8-.3-.2-.7-.3-1.1-.4-.4-.1-.9-.1-1.4-.1-1.1 0-1.9.2-2.5.7-.6.5-1 1.3-1.1 2.3h-5.5c0-1.2.4-2.3.9-3.1zm10.9 7.8c-.3.1-.7.2-1.1.3-.4.1-.8.1-1.3.2-.4.1-.9.1-1.3.2l-1.2.3c-.4.1-.8.3-1 .5-.3.2-.5.5-.7.8-.3.4-.3.8-.3 1.3s.1.9.3 1.2c.2.3.4.6.7.8.3.2.7.3 1.1.4.4.1.8.1 1.3.1 1.1 0 1.9-.2 2.5-.5.6-.4 1-.8 1.3-1.3.3-.5.5-1 .5-1.5.1-.5.1-.9.1-1.2v-2.1c-.3.2-.6.4-.9.5zM95.6 7.6v2.8h.1c.7-1.2 1.6-2 2.7-2.5s2.3-.8 3.4-.8c1.5 0 2.7.2 3.6.6 1 .4 1.7 1 2.2 1.7.5.7.9 1.6 1.2 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.3-2.8-1.3-1.5 0-2.6.6-3.3 1.5-.7.9-1 2.4-1 4.4v10.5h-5.5V7.6h5.4zm25.8 3.6c-.9 0-1.6.2-2.2.6-.6.4-1.1.9-1.5 1.6-.4.6-.6 1.3-.8 2.1-.2.8-.2 1.5-.2 2.3 0 .7.1 1.5.2 2.2.2.8.4 1.4.8 2 .4.6.8 1.1 1.4 1.5.6.4 1.3.6 2.2.6 1.3 0 2.3-.4 3.1-1.1.7-.7 1.2-1.7 1.3-3h5.3c-.4 2.7-1.4 4.7-3.1 6.1-1.7 1.4-3.9 2.1-6.6 2.1-1.5 0-2.9-.3-4.1-.8-1.3-.5-2.3-1.2-3.2-2.1-.9-.9-1.6-2-2.1-3.2-.5-1.3-.7-2.6-.7-4.1 0-1.6.2-3 .7-4.3.5-1.3 1.1-2.5 2-3.5.9-1 2-1.7 3.2-2.3 1.3-.5 2.7-.8 4.3-.8 1.2 0 2.3.2 3.4.5s2.1.8 2.9 1.4c.9.6 1.6 1.4 2.1 2.4.5.9.8 2.1.9 3.4h-5.4c-.2-2.4-1.5-3.6-3.9-3.6zm-92-9.3h11.2v2.7H29.4zm109.9 21c.8.8 2.1 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.8c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.7-.8 4.2-.8 1.7 0 3.2.3 4.4 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.4 1.4.5 2.9.4 4.5h-14.5c0 1.5.6 3 1.4 3.8zm6.4-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1.1.7-1.4 1.1-.3.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.3-1.5-.8-2.5-1.4-3.2z"
                }
            }) ]);
        }), [], !1, null, null, null).exports, s = a("6S3h"), l = Object(r.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24.247 15.985"
                }
            }, [ t("g", {
                attrs: {
                    transform: "translate(-55 -103)"
                }
            }, [ t("path", {
                attrs: {
                    d: "M7.017,0A8.12,8.12,0,0,1,8.965.2,4.348,4.348,0,0,1,10.47.844a2.97,2.97,0,0,1,.967,1.194,4.51,4.51,0,0,1,.345,1.849,3.548,3.548,0,0,1-.511,1.98,3.76,3.76,0,0,1-1.519,1.3A3.627,3.627,0,0,1,11.8,8.619a4.516,4.516,0,0,1,.677,2.519,4.652,4.652,0,0,1-.428,2.053,4,4,0,0,1-1.174,1.427,5.18,5.18,0,0,1-1.7.815,7.238,7.238,0,0,1-1.948.262H0V0ZM6.6,6.348a2.275,2.275,0,0,0,1.437-.437,1.709,1.709,0,0,0,.566-1.427,1.928,1.928,0,0,0-.18-.9,1.306,1.306,0,0,0-.5-.539,1.875,1.875,0,0,0-.718-.277,4.038,4.038,0,0,0-.843-.073H3.274V6.362H6.6Zm.18,6.682a3.847,3.847,0,0,0,.925-.1,2.22,2.22,0,0,0,.774-.335,1.663,1.663,0,0,0,.539-.626,2.218,2.218,0,0,0,.193-1.019,2.1,2.1,0,0,0-.649-1.732,2.639,2.639,0,0,0-1.713-.51H3.274V13.03Z",
                    transform: "translate(55 103)",
                    fill: "#191919"
                }
            }), t("path", {
                attrs: {
                    d: "M101,36.468a2.585,2.585,0,0,0,1.92.684,2.528,2.528,0,0,0,1.547-.48,1.978,1.978,0,0,0,.787-1h2.611a5.142,5.142,0,0,1-1.92,2.926,5.339,5.339,0,0,1-3.122.888,5.9,5.9,0,0,1-2.307-.437,4.927,4.927,0,0,1-1.74-1.223,5.705,5.705,0,0,1-1.091-1.893,7.123,7.123,0,0,1-.387-2.417,6.989,6.989,0,0,1,.4-2.373,5.354,5.354,0,0,1,5.139-3.64,4.921,4.921,0,0,1,2.4.568,5.038,5.038,0,0,1,1.685,1.5,6.262,6.262,0,0,1,.953,2.155,8.491,8.491,0,0,1,.207,2.533h-7.777A3.094,3.094,0,0,0,101,36.468Zm3.412-5.969a2.154,2.154,0,0,0-1.671-.626,2.36,2.36,0,0,0-1.174.262,2.514,2.514,0,0,0-.746.626,2.409,2.409,0,0,0-.4.8,3.316,3.316,0,0,0-.138.742H105.1A3.267,3.267,0,0,0,104.414,30.5Z",
                    transform: "translate(-28.86 79.504)",
                    fill: "#191919"
                }
            }), t("rect", {
                attrs: {
                    width: "6.036",
                    height: "1.543",
                    transform: "translate(70.802 104.048)",
                    fill: "#191919"
                }
            }) ]) ]);
        }), [], !1, null, null, null).exports, c = a("k8DD"), d = a("3lV2"), p = a("o72u"), u = a("P3Mf"), b = Object(r.default)({}, (function() {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 207.5 183.6"
                },
                attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "20px",
                    height: "18px",
                    viewBox: "0 0 207.5 183.6",
                    "xml:space": "preserve"
                }
            }, [ a("polygon", {
                attrs: {
                    points: "130.8,0 207.5,0 207.5,183.6 "
                }
            }), a("polygon", {
                attrs: {
                    points: "76.7,0 0,0 0,183.6 "
                }
            }), a("polygon", {
                attrs: {
                    points: "103.8,67.7 152.6,183.6 120.6,183.6 106,146.7 70.2,146.7 "
                }
            }), a("title", [ e._v("Adobe") ]) ]);
        }), [], !1, null, null, null).exports, m = a("OQxq"), f = a("rF8O"), h = a("5NN/"), v = a("L0wf"), g = a("nOR9"), y = a("gt27"), _ = a("19SN"), x = "/v2/notifications/count";
        var w, k, S, T = {
            getNotificationCount: function() {
                return Object(i.__awaiter)(this, void 0, Promise, (function() {
                    return Object(i.__generator)(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return [ 4, Object(y.default)({
                                url: x,
                                type: y.HTTPVerb.GET,
                                data: {
                                    action_set: "bell-count-v1"
                                }
                            }) ];

                          case 1:
                            return [ 2, e.sent() ];
                        }
                    }));
                }));
            },
            resetNotificationCount: function() {
                return Object(i.__awaiter)(this, void 0, Promise, (function() {
                    return Object(i.__generator)(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return [ 4, Object(y.default)({
                                url: "/v2/notifications",
                                type: y.HTTPVerb.DELETE,
                                data: {
                                    action_set: "bell-count-v1"
                                }
                            }) ];

                          case 1:
                            return [ 2, e.sent() ];
                        }
                    }));
                }));
            },
            getMessageCount: function() {
                return Object(i.__awaiter)(this, void 0, Promise, (function() {
                    return Object(i.__generator)(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return [ 4, Object(y.default)({
                                url: x,
                                type: y.HTTPVerb.GET,
                                data: {
                                    action_set: "inbox-v1"
                                }
                            }) ];

                          case 1:
                            return [ 2, e.sent() ];
                        }
                    }));
                }));
            },
            hasBrowserNotifications: function(e) {
                return Object(i.__awaiter)(this, void 0, Promise, (function() {
                    return Object(i.__generator)(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return [ 4, Object(_.b)({
                                query: Object(_.a)(w || (w = Object(i.__makeTemplateObject)([ "\n      query webPushSubscriptionStatus($username: String) {\n        user(username: $username) {\n          hasWebPushSubscription\n        }\n      }\n    " ], [ "\n      query webPushSubscriptionStatus($username: String) {\n        user(username: $username) {\n          hasWebPushSubscription\n        }\n      }\n    " ]))),
                                variables: {
                                    username: e
                                }
                            }) ];

                          case 1:
                            return [ 2, t.sent() ];
                        }
                    }));
                }));
            }
        }, N = a("WddM"), P = a("WjRz"), j = "FETCH_NOTIFICATION_COUNT", C = "FETCH_MESSAGE_COUNT", L = "FETCH_HAS_BROWSER_NOTIFICATIONS", O = "RESET_NOTIFICATION_COUNT", $ = "FETCH_RESULTS", I = "CLICK_SUBSCRIBE_TO_PUSH_NOTIFICATIONS", M = "UPDATE_NOTIFICATION_COUNT", E = "UPDATE_MESSAGE_COUNT", A = "UPDATE_HAS_BROWSER_NOTIFICATIONS", U = "UPDATE_TYPEAHEAD_RESULTS", B = "UPDATE_LAST_SEARCH_TERM", R = {
            namespaced: !0,
            state: function() {
                return {
                    hasBrowserNotifications: !1,
                    messageCount: 0,
                    notificationCount: 0,
                    isMinimal: !1,
                    hideCreateProjectButton: !1,
                    hideActivateButton: !1,
                    typeaheadResults: [],
                    lastSearchTerm: ""
                };
            },
            actions: (k = {}, k.FETCH_NOTIFICATION_COUNT = function(e) {
                var t = e.commit, a = e.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e, n;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 4 ]), [ 4, T.getNotificationCount() ];

                          case 1:
                            return e = i.sent().count, t(M, e), [ 3, 4 ];

                          case 2:
                            return n = i.sent(), [ 4, a("error", n, {
                                root: !0
                            }) ];

                          case 3:
                            return i.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, k.FETCH_MESSAGE_COUNT = function(e) {
                var t = e.commit, a = e.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e, n;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 4 ]), [ 4, T.getMessageCount() ];

                          case 1:
                            return e = i.sent().count, t(E, e), [ 3, 4 ];

                          case 2:
                            return n = i.sent(), [ 4, a("error", n, {
                                root: !0
                            }) ];

                          case 3:
                            return i.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, k.FETCH_HAS_BROWSER_NOTIFICATIONS = function(e) {
                var t = e.commit, a = e.rootState;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 3 ]), [ 4, T.hasBrowserNotifications(a.user.loggedInUser.username) ];

                          case 1:
                            return e = i.sent().user, t(A, null == e ? void 0 : e.hasWebPushSubscription), [ 3, 3 ];

                          case 2:
                            return i.sent(), [ 3, 3 ];

                          case 3:
                            return [ 2 ];
                        }
                    }));
                }));
            }, k.RESET_NOTIFICATION_COUNT = function(e) {
                var t = e.commit, a = e.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 4 ]), [ 4, T.resetNotificationCount() ];

                          case 1:
                            return i.sent(), t(M, 0), [ 3, 4 ];

                          case 2:
                            return e = i.sent(), [ 4, a("error", e, {
                                root: !0
                            }) ];

                          case 3:
                            return i.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, k.FETCH_RESULTS = function(e, t) {
                var a = e.commit, n = e.dispatch, r = t.term;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e, t;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 4 ]), [ 4, N.a.getResults(r) ];

                          case 1:
                            return e = i.sent(), a(U, e), a(B, r), [ 3, 4 ];

                          case 2:
                            return t = i.sent(), [ 4, n("error", t, {
                                root: !0
                            }) ];

                          case 3:
                            return i.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, k.CLICK_SUBSCRIBE_TO_PUSH_NOTIFICATIONS = function(e) {
                var t = e.rootState;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    return Object(i.__generator)(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return [ 4, P.a.subscribeToPushNotifications(t.config.BEHANCE.PUSH_NOTIFICATIONS.PUBLIC_KEY) ];

                          case 1:
                            return e.sent(), [ 2 ];
                        }
                    }));
                }));
            }, k),
            mutations: (S = {}, S.UPDATE_NOTIFICATION_COUNT = function(e, t) {
                e.notificationCount = t;
            }, S.UPDATE_MESSAGE_COUNT = function(e, t) {
                e.messageCount = t;
            }, S.UPDATE_HAS_BROWSER_NOTIFICATIONS = function(e, t) {
                e.hasBrowserNotifications = t;
            }, S.UPDATE_TYPEAHEAD_RESULTS = function(e, t) {
                e.typeaheadResults = t;
            }, S.UPDATE_LAST_SEARCH_TERM = function(e, t) {
                e.lastSearchTerm = t;
            }, S)
        }, D = a("adMq"), F = a("PJd8"), H = a("E8ap"), W = a("MP2I"), K = a("onoN"), z = a("HPoN"), V = a("M2O3"), q = a("5kRB"), Y = (a("lTEL"), 
        a("7x/C"), a("JtPf"), a("87if"), a("kYxP"), a("S7Gn")), G = a("hbkF"), Q = a("EZKv"), Z = (a("2G9S"), 
        a("LW0h"), a("jwue"), a("+oxZ"), a("wDoL")), X = a("6bQ5"), J = (a("hBpG"), a("xeH2")), ee = a.n(J), te = a("wgY5"), ae = a.n(te), ie = a("28MP");
        function ne(e) {
            return e.getBoundingClientRect().height;
        }
        function re(e, t) {
            return e.setEndAfter(t), ne(e);
        }
        function oe(e, t) {
            var a = function(e) {
                if (e.length && document.createRange) {
                    var t, a = document.createRange();
                    if (a.getBoundingClientRect && (t = /[^\s]/.exec(e.textContent))) return a.setStartBefore(e), 
                    a.setEnd(e, t.index + 1), a;
                }
            }(e);
            if (a) {
                var i, n = ne(a), r = n * (t + .5), o = e.length, s = o, l = -1;
                if (re(a, e) < r) a.detach(); else {
                    for (;s; ) o += l * (s = ~~(s / 2)), a.setEnd(e, o), l * (ne(a) - r) > 0 && (l = -l);
                    i = e.textContent.substr(0, o).replace(/\s+$/, "");
                    do {
                        e.textContent = i + "…", n = re(a, e), i = i.substr(0, --o);
                    } while (n > r);
                    a.detach();
                }
            }
        }
        var se = a("95tM"), le = a.n(se), ce = a("GfZ3"), de = a.n(ce), pe = a("CIZq"), ue = a.n(pe), be = a("wYNo"), me = a.n(be), fe = a("5z2n"), he = a.n(fe), ve = a("tva8"), ge = a.n(ve), ye = a("46eT"), _e = a.n(ye), xe = a("pspQ"), we = a.n(xe), ke = a("Vpfn"), Se = a.n(ke), Te = a("C1Dl"), Ne = a.n(Te), Pe = a("vkUd"), je = a.n(Pe), Ce = a("ZDWp"), Le = a.n(Ce), Oe = a("0T+t"), $e = a.n(Oe), Ie = a("OYha"), Me = a.n(Ie), Ee = a("Jhmr"), Ae = a.n(Ee), Ue = a("a7ay"), Be = a.n(Ue), Re = a("/WdL"), De = a.n(Re), Fe = a("dAdk"), He = a.n(Fe), We = a("/weg"), Ke = a.n(We), ze = a("ISH8"), Ve = a.n(ze), qe = a("MET7"), Ye = a.n(qe), Ge = {
            appreciate: le.a.template,
            followcollection: Le.a.template,
            projectcomment: ue.a.template,
            followuser: me.a.template,
            projectaddedtocollection: ge.a.template,
            moduleaddedtocollection: Ye.a.template,
            usermentionprojectcomment: he.a.template,
            addtoshortlist: _e.a.template,
            addtodiscovered: we.a.template,
            jobshared: Se.a.template,
            jobapplicationcreated: Ne.a.template,
            jobrecommendationsreceived: je.a.template,
            notecreated: $e.a.template,
            jobarchived: Me.a.template,
            storysegmentreaction: Ae.a.template,
            storyuserreengaged: Be.a.template,
            storyfirstpost: De.a.template,
            storysegmentmention: He.a.template,
            livestreamstarted: Ke.a.template,
            adobelivestarted: Ve.a.template
        }, Qe = {
            generatePartials: function(e) {
                return {
                    innard: Ge[e.action_key],
                    comment: de.a.template
                };
            }
        }, Ze = a("sKsC"), Xe = a.n(Ze), Je = ie.default.extend({
            template: function(e) {
                return ee()(Xe()(e, this.generatePartials(e)));
            },
            templateData: function() {
                var e = this._super();
                return e.time_ago = function() {
                    return ae.a.unix(e.created_on).fromNow();
                }, e.assetsurl = H.ASSETS_URL, e;
            },
            rendered: function() {
                this.$view.find(".comment-text").contents().toArray().forEach((function(e) {
                    oe(e, 4);
                }));
            },
            update: function() {
                if (this.$view) {
                    var e = this.templateData().time_ago();
                    this.$view.removeClass("unread").find(".time").text(e);
                }
            }
        }).mixin(Qe), et = Z.default.extend({
            update: function() {
                this._view.update();
            },
            wasRead: function() {
                return !!this._model.get("read_on");
            }
        }, {
            VIEW_CLASS: Je
        }), tt = (a("M+/F"), a("5BYb"), a("+eOo")), at = a("sLYF"), it = a.n(at), nt = ie.default.extend({
            template: Object(tt.a)(it.a, ee.a),
            templateData: function() {
                var e = this._super();
                return e.any_unread = this._model.get("entries").some((function(e) {
                    return !e.wasRead();
                })), e;
            },
            draw: function(e) {
                var t, a = this, i = this._model.get("entries");
                i && i.length && (this._iterator = this._iterator || 0, i = i.slice(this._iterator, +e ? this._iterator += e : void 0), 
                t = this.$view.find(".js-context"), i.forEach((function(e) {
                    e.render(t);
                })), this._iterator || Object(X.default)((function() {
                    a._iterator = 0;
                })));
            },
            markAsRead: function() {
                this.$view.removeClass("unread");
            },
            rendered: function() {
                this.draw(3);
                var e = this._model.get("entries").length - (this._iterator || 0);
                e ? this.$view.on("click", ".js-more", (function() {
                    ee()(this).hide();
                })).one("click", ".js-more", this.draw.bind(this)).find(".count").text(e) : this.$view.find(".js-more").hide();
            }
        }), rt = Z.default.extend({
            add: function(e) {
                var t = this._model.get("entries") || [];
                t.push(e), this._model.set("entries", t);
            },
            update: function() {
                this._view.markAsRead(), this._forEachEntry((function(e) {
                    e.update();
                }));
            },
            _forEachEntry: function(e) {
                (this._model.get("entries") || []).forEach((function(t) {
                    e(t);
                }));
            },
            destroy: function() {
                this._forEachEntry((function(e) {
                    e.destroy();
                })), this._super();
            }
        }, {
            VIEW_CLASS: nt
        }), ot = a("39B/"), st = a("dwFx"), lt = a("DZps"), ct = a.n(lt), dt = a("C+tV"), pt = a.n(dt), ut = ie.default.extend({
            template: Object(tt.a)(ct.a, ee.a),
            templateData: function() {
                return {
                    title: ot.default.GLOBALNAV.NOTIFICATION_TITLE,
                    type: "notification"
                };
            },
            rendered: function() {
                this.$loading = st.default.init(this.$view), this.listenTo(this._model, "entries", this.draw), 
                this.draw(this._model.get("entries"));
            },
            draw: function(e) {
                var t = this;
                e && (e.forEach((function(e) {
                    e.render(t.$view);
                })), this.empty(!e.length));
            },
            empty: function(e) {
                var t = !e;
                this.$empty = this.$empty || ee()(pt()()), t ? this.$empty.remove() : this.$view.append(this.$empty);
            }
        }), bt = "/v2/notifications?action_set=bell-note-v1", mt = Z.default.extend({
            refresh: function() {
                if (!this._model.get("entries")) return this.more();
                this.block || this.get();
            },
            get: function e() {
                var t = e.bind(this), a = this._model, i = this.read({
                    onset_ts: a.get("onset")
                }).then((function(e) {
                    if (!e.notifications) throw e;
                    return a.set("onset", e.latest_ts), e.has_more && Object(X.default)(t), e.notifications;
                })).then(this.constructor.makeEntries);
                return i.then((function(e) {
                    var t = a.get("entries") || [];
                    a.set("entries", e.concat(t));
                })).then(this.trigger.bind(this, "sync")), i;
            },
            more: function e() {
                if (!e.block) {
                    e.block = !0;
                    var t = this._model, a = this.read({
                        offset_ts: t.get("offset")
                    }).then((function(a) {
                        if (!a.notifications) throw a;
                        e.block = !a.has_more;
                        var i = t.data();
                        return i.onset = i.onset || a.latest_ts, i.offset = a.earliest_ts, a.notifications;
                    })).then(this.constructor.makeEntries);
                    return a.then((function(e) {
                        var a = t.get("entries") || [];
                        t.set("entries", a.concat(e));
                    })).then(this.trigger.bind(this, "sync")), a;
                }
            },
            read: function(e) {
                var t = this;
                try {
                    this._view.$loading.show();
                } catch (e) {}
                var a = function() {
                    t._view.$loading.hide();
                }, i = Object(y.default)({
                    url: bt,
                    type: "get",
                    data: e
                });
                return i.then(a, a), i;
            },
            update: function() {
                var e = this._model.get("entries");
                e && e.length && e.forEach((function(e) {
                    e.update();
                }));
            },
            clear: function() {
                Object(y.default)({
                    url: bt,
                    type: "delete"
                });
            }
        }, {
            VIEW_CLASS: ut,
            makeEntries: function(e) {
                var t, a, i, n = [], r = 0, o = e.filter((function(e) {
                    return e.data;
                }));
                for (a = 0; a < o.length; ++a) if (o[a + 1] && o[a + 1].action_key === o[a].action_key) r++; else {
                    if (r >= 2) {
                        for (t = new rt, i = a - r; i <= a; ++i) t.add(new et(o[i]));
                        n.push(t);
                    } else for (i = a - r; i <= a; ++i) n.push(new et(o[i]));
                    r = 0;
                }
                return n;
            }
        }).mixin(Y.default), ft = (a("vrRf"), a("z84I"), a("KOtZ"), a("Ee2X"), a("+KXO"), 
        a("/2/H")), ht = a("yzPa"), vt = a("BHX3"), gt = a("BarQ"), yt = a("OC+4"), _t = a.n(yt), xt = a("cWyr"), wt = a.n(xt), kt = a("NAOv"), St = a.n(kt), Tt = a("Op0/"), Nt = a.n(Tt), Pt = a("D+Kl"), jt = a.n(Pt), Ct = a("EBfS"), Lt = a.n(Ct), Ot = vt.default.translate("notifications_invitation_declined", "Invitation declined"), $t = {
            project_owner: {
                innards: St.a.template,
                subject: jt.a.template
            },
            collection_owner: {
                innards: wt.a.template,
                subject: jt.a.template
            },
            member_to_team: {
                innards: Nt.a.template,
                subject: Lt.a.template
            },
            team_to_member: {
                innards: Nt.a.template,
                subject: Lt.a.template
            },
            project_to_team: {
                innards: St.a.template,
                subject: Lt.a.template
            }
        }, It = {
            project_owner: vt.default.translate("notifications_coown_project", "invited you to co-own a Project"),
            collection_owner: vt.default.translate("notifications_coown_collection", "invited you to co-own a Collection"),
            member_to_team: vt.default.translate("notifications_request_join", "requested to join"),
            team_to_member: vt.default.translate("notifications_invite_join", "invited you to join"),
            project_to_team: vt.default.translate("notifications_request_add", "requested to add a project to")
        }, Mt = ie.default.extend({
            events: {
                click: {
                    ".js-accept": "_acceptInvitation",
                    ".js-reject": "_rejectInvitation"
                }
            },
            template: function(e) {
                return ee()(_t()(e, $t[e.type]));
            },
            templateData: function() {
                var e = this._super();
                return Object(ht.default)({
                    action: It[e.type],
                    actor: e.other_user,
                    proposition: "project",
                    time_ago: function() {
                        return ae.a.unix(e.created_on).fromNow();
                    }
                }, e);
            },
            rendered: function() {
                this.$rejectBtn = this.$view.find(".js-reject"), this.$time = this.$view.find(".js-time"), 
                this._mapEvents();
            },
            update: function() {
                if (this.$view) {
                    var e = this.templateData().time_ago;
                    this.$time.text(e);
                }
            },
            acceptAndFade: function() {
                var e = new ft.default;
                return this.$view.fadeOut(250, e.resolve), e;
            },
            declineAndFade: function() {
                var e = new ft.default;
                return this.$rejectBtn.text(Ot), this.$view.delay(1e3).fadeOut(250, e.resolve), 
                e;
            },
            _acceptInvitation: function() {
                this._controller.accept();
            },
            _rejectInvitation: function() {
                this._controller.reject();
            }
        }).mixin(gt.a), Et = "/v2/notifications/invitations/", At = Z.default.extend({
            update: function() {
                this._view.update();
            },
            accept: function() {
                Object(y.default)({
                    url: Et + this._model.get("id"),
                    type: "put"
                }).then(this._view.acceptAndFade.bind(this._view)).then(this._remove.bind(this)).then(null, this.trigger.bind(this, "error"));
            },
            reject: function() {
                Object(y.default)({
                    url: Et + this._model.get("id"),
                    type: "delete"
                }).then(this._view.declineAndFade.bind(this._view)).then(this._remove.bind(this));
            },
            _remove: function() {
                this.trigger("resolve", this._model.get("id")), this.destroy();
            }
        }, {
            VIEW_CLASS: Mt
        }).mixin(Y.default), Ut = ie.default.extend({
            template: Object(tt.a)(ct.a, ee.a),
            templateData: function() {
                return {
                    title: ot.default.GLOBALNAV.NOTIFICATION_PROPS_TITLE,
                    type: "propositions"
                };
            },
            rendered: function() {
                this.$errorContainer = this.$view.find(".js-error-container"), this.$loading = st.default.init(this.$view), 
                this.$errorContainer.addClass("hide"), this.listenTo(this._model, "entries", this._draw), 
                this._draw(this._model.get("entries"));
            },
            update: function() {
                this.$errorContainer.addClass("hide");
            },
            showErrorMessages: function(e) {
                var t = e.messages.reduce((function(e, t) {
                    return e + "\n" + t.message;
                }), "");
                this.$errorContainer.find(".js-error-text").text(t).end().removeClass("hide");
            },
            _draw: function(e) {
                var t = this, a = this._model.get("order");
                e && Object.keys(e).length ? (this.$view.removeClass("hide"), a.forEach((function(a) {
                    var i = e[a];
                    i && i.render(t.$view);
                }))) : this.$view.addClass("hide");
            }
        }), Bt = Z.default.extend({
            more: function e() {
                if (!e.block) {
                    e.block = !0;
                    var t = this, a = this._model, i = this.read();
                    return i.then((function(e) {
                        if (!e.invitations) throw e;
                        return e.invitations;
                    })).then((function(e) {
                        var a = e.map((function(e) {
                            return new At(e);
                        }));
                        return a.forEach((function(e) {
                            t.listenTo(e, "resolve", t._updateEntries).listenTo(e, "error", t._displayErrors);
                        })), a;
                    })).then((function(e) {
                        var t = a.get("entries") || {}, i = a.get("order") || [], n = e.reduce((function(e, t) {
                            var a = t._model.get("id");
                            return e[a] = t, i.push(a), e;
                        }), t);
                        return a.set("order", i), a.set("entries", n), Object.keys(n).length;
                    })).then(this.trigger.bind(this, "sync")), i;
                }
            },
            count: function() {
                var e = this._model.get("entries");
                return e ? Object.keys(e).length : 0;
            },
            read: function() {
                var e = this;
                try {
                    this._view.$loading.show();
                } catch (e) {}
                var t = function() {
                    e._view.$loading.hide();
                }, a = Object(y.default)({
                    url: "/v2/notifications/invitations"
                });
                return a.then(t, t), a;
            },
            update: function() {
                var e = this._model.get("entries");
                this._view.update(), e && Object.keys(e).length && Object.keys(e).forEach((function(t) {
                    var a = e[t];
                    a && a.update();
                }));
            },
            _updateEntries: function(e) {
                var t = this._model.get("entries") || {}, a = this._model.get("order") || [];
                t[e] && (delete t[e], a.splice(a.indexOf(e), 1)), this._model.set("entries", t), 
                this._model.set("order", a), this.trigger("removed");
            },
            _displayErrors: function(e) {
                e && e.responseJSON && (e = e.responseJSON), this._view.showErrorMessages(e);
            }
        }, {
            VIEW_CLASS: Ut
        }).mixin(Y.default), Rt = a("auWA"), Dt = a("pTUv"), Ft = a("fgby"), Ht = a.n(Ft), Wt = a("xQ11"), Kt = a.n(Wt), zt = {
            mustache: Ht.a,
            selector: ".js-notifications-nav-menu .popup-content .activity-container-wrap",
            templateData: function() {
                return {
                    title: vt.default.translate("notifications_title_short", "Notifications"),
                    classes: [ "notifications", "timeline-container", "js-notifications-nav-menu", "e2e-NotificationBell-nav-menu" ],
                    html: Kt.a
                };
            },
            rendered: function() {
                this._super(), this._bindScroll(), this._bindInfiniteScroll();
            },
            renderNotifications: function(e) {
                this.$notifications || (this.$notifications = this.$view.find(".js-notifications"), 
                e.render(this.$notifications));
            },
            renderPropositions: function(e) {
                this.$propositions || (this.$propositions = this.$view.find(".js-propositions"), 
                e.render(this.$propositions));
            },
            _bindInfiniteScroll: function() {
                var e = this, t = function() {
                    e._controller.more();
                };
                this._controller.more(), Object(Dt.a)(.5, t, this.selector), this._controller.on("destroy", (function() {
                    Dt.a.off(t);
                }));
            },
            _bindScroll: function() {
                var e = this;
                this.$view.find(this.selector).on("scroll", (function() {
                    e.$headers = e.$headers || e.$view.find(".js-bell-title").toArray();
                    var t = e.$headers.map(function(e) {
                        var t = ee()(e), a = t.position();
                        return t.is(".sticky") && (a = t.siblings(".js-bell-title-dummy").position()), {
                            $el: t,
                            offsetTop: a.top
                        };
                    }.bind(e)).filter((function(e) {
                        return e.$el.is(":visible");
                    })).reduce((function(e, t) {
                        return e ? t.offsetTop > 0 ? e : t.offsetTop > e.offsetTop ? t : e : t;
                    }));
                    t.$el.is(".js-bell-title-dummy") || (e.$currentHeader && e.$currentHeader.length && e.$currentHeader.removeClass("sticky"), 
                    t.$el.addClass("sticky"), e.$currentHeader = t.$el);
                }));
            }
        }, Vt = Rt.default.extend(zt), qt = a("Kwjp").default.extend(zt).extend({
            attachment: ".js-nav-primary"
        }), Yt = Q.default.extend({
            init: function() {
                this._notifications = new mt, this.listenTo(this._notifications, "sync", this._syncCount), 
                this._super.apply(this, arguments);
            },
            _initView: function() {
                this._super.apply(this, arguments), this.listenTo(this._view, "show", this.renderSections).listenTo(this._view, "show", this.updateSections).listenTo(this._view, "show", this._notifications.clear);
            },
            renderSections: function() {
                this._view.renderNotifications(this._notifications);
            },
            updateSections: function() {
                this._notifications.update();
            },
            _syncCount: function() {
                this.trigger("sync", this._count);
            },
            more: function() {
                return this._notifications.more();
            }
        }, {
            VIEW_CLASS: {
                phone: Vt,
                tablet: qt,
                desktop: qt
            }
        }).mixin(Y.default).extend({
            _count: 0,
            init: function() {
                this._propositions = new Bt, this.listenTo(this._propositions, "sync", (function(e) {
                    this._count += e, this._syncCount();
                })).listenTo(this._propositions, "removed", (function() {
                    this._count = Math.max(this._count - 1, 0), this._syncCount();
                })), this._super.apply(this, arguments);
            },
            renderSections: function() {
                this._super(), this._view.renderPropositions(this._propositions);
            },
            updateSections: function() {
                this._super(), this._propositions.update();
            },
            more: function() {
                return G.default.all([ this._super(), this._propositions.more() ]);
            }
        }), Gt = a("hRZA"), Qt = a("nE2t"), Zt = a("tLj1"), Xt = a("XobZ"), Jt = a("wcfZ"), ea = a("Rh0G"), ta = a("IEA7"), aa = [ "search", "jobList", "talentMyJobs", "talentBilling", "talentCreate" ], ia = n.default.extend({
            components: {
                BehanceLogo: o,
                BehanceLogoTruncated: l,
                AlternateAdobeLogo: b,
                AdobeLockup2020: c.a,
                SearchIcon: d.a,
                MailIcon: p.a,
                Btn: m.default,
                NotificationIcon: u.a,
                Tooltip: f.a,
                Fade: D.a,
                Triangle: s.a,
                SearchTypeahead: h.a,
                FadeDown: F.a
            },
            data: function() {
                return {
                    isHamburgerMenuOpen: !1,
                    shouldRenderTooltip: !1,
                    shouldRenderPushNotifTooltip: !1,
                    URL_PROJECT_CREATE: H.URL_PROJECT_CREATE,
                    URL_HOME: H.URL_HOME,
                    URL_SEARCH: H.URL_SEARCH,
                    URL_SEARCH_IMAGES: H.URL_SEARCH_IMAGES,
                    URL_SEARCH_USERS: H.URL_SEARCH_USERS,
                    URL_SEARCH_MOODBOARDS: H.URL_SEARCH_MOODBOARDS,
                    URL_INBOX: H.URL_INBOX,
                    LOCALES: H.LOCALES,
                    URL_ACCOUNT_SETTINGS: H.URL_ACCOUNT_SETTINGS,
                    URL_ADMIN_DEFAULT: H.URL_ADMIN_DEFAULT,
                    URL_ADOBE_CREATIVE_CLOUD_HOME: H.URL_ADOBE_CREATIVE_CLOUD_HOME,
                    URL_ONBOARDING_ADOBE: H.URL_ONBOARDING_ADOBE,
                    URL_BACK_TO_ADMIN: H.URL_BACK_TO_ADMIN,
                    inboxDialog: void 0,
                    bellDialog: void 0,
                    isMobileUserMenuShown: !1,
                    isMobile: !1,
                    trackingSource: "nav20",
                    dropdownMenuIdKey: "id",
                    scrollTimeout: -1,
                    navBoxShadow: ""
                };
            },
            mounted: function() {
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e, t, a = this;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return this.isLoggedIn ? [ 4, Promise.all([ this.fetchNotifications(), this.fetchMessages() ]) ] : [ 3, 2 ];

                          case 1:
                            i.sent(), this.$emit("countsFetched"), this.inboxDialog = new q.default(((e = {})[this.dropdownMenuIdKey] = "inbox", 
                            e)), this.inboxDialog.setContext(this.$refs.inboxTrigger), this.bellDialog = new Yt(((t = {})[this.dropdownMenuIdKey] = "notification", 
                            t)), this.bellDialog.setContext(this.$refs.notifTrigger), this.manageDialogs([ this.inboxDialog, this.bellDialog ]), 
                            document.addEventListener("inboxThreadMarkedAsRead", this.fetchMessages), i.label = 2;

                          case 2:
                            return this.isMobile = Jt.default.isMobile(), this.$route.name !== v.b || this.userDismissedLoginPrompt || setTimeout((function() {
                                return a.shouldRenderTooltip = !0;
                            }), 500), [ 4, ta.a.isSupported({
                                allowMobile: this.gates.push_notif_allow_mobile
                            }) ];

                          case 3:
                            return !i.sent() || "default" !== Notification.permission || this.userDismissedPushNotifPrompt ? [ 3, 5 ] : [ 4, this.fetchHasBrowserNotifications() ];

                          case 4:
                            i.sent(), this.shouldRenderPushNotifTooltip = Boolean(this.hasBrowserNotifications), 
                            i.label = 5;

                          case 5:
                            return this.shouldDrawBoxShadow && window.addEventListener("scroll", this.updateBoxShadowAmount, {
                                passive: !0
                            }), [ 2 ];
                        }
                    }));
                }));
            },
            beforeCreate: function() {
                this.$store.registerModule("primaryNav", R, {
                    preserveState: !!this.$store.state.primaryNav
                });
            },
            beforeDestroy: function() {
                this.isLoggedIn && this.destroyManageDialogs([ this.inboxDialog, this.bellDialog ]), 
                document.removeEventListener("inboxThreadMarkedAsRead", this.fetchMessages), this.$store.unregisterModule("primaryNav"), 
                this.shouldDrawBoxShadow && window.removeEventListener("scroll", this.updateBoxShadowAmount);
            },
            methods: Object(i.__assign)(Object(i.__assign)({
                updateBoxShadowAmount: function() {
                    var e = this;
                    this.scrollTimeout && (Qt.default.cancelAnimationFrame(this.scrollTimeout), this.scrollTimeout = -1), 
                    this.scrollTimeout = Qt.default.requestAnimationFrame((function() {
                        var t = Qt.default.scrollY(), a = t > 115 ? 115 : t;
                        e.navBoxShadow = a > 40 ? "box-shadow: 0px 0px 6px 2px rgba(0,0,0, " + a / 700 + ")" : null;
                    }));
                },
                manageDialogs: function(e) {
                    var t = this, a = function(a) {
                        e.forEach((function(e) {
                            e._model.get(t.dropdownMenuIdKey) !== a._model.get(t.dropdownMenuIdKey) && (e._view.hide(), 
                            t.$emit("dialogsHidden", e._model.get(t.dropdownMenuIdKey)));
                        }));
                    };
                    e.forEach((function(e) {
                        e._view.on("beforeToggle", a);
                    }));
                },
                destroyManageDialogs: function(e) {
                    e.forEach((function(e) {
                        e._view.off("beforeToggle");
                    }));
                },
                getUrl: function(e) {
                    return e + "?tracking_source=" + this.trackingSource;
                },
                navigateToInboxUrl: function() {
                    Qt.default.replaceLocation(H.URL_INBOX);
                },
                languageSelectChanged: function(e) {
                    var t = e.target.value;
                    Xt.default.setCookie(Gt.COOKIE.LANGUAGE_SETTING, t, {
                        expires: 365
                    }), Zt.default.custom("localization", "Language changed by user", {
                        locale: t
                    }), Qt.default.reloadLocation();
                },
                toggleHamburgerMenu: function() {
                    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
                }
            }, Object(g.mapActions)("primaryNav", {
                fetchNotifications: j,
                fetchMessages: C,
                fetchHasBrowserNotifications: L,
                resetNotifications: O,
                fetchResults: $,
                subscribeToPushNotifications: I
            })), {
                handleNotificationIconClick: function() {
                    return Object(i.__awaiter)(this, void 0, void 0, (function() {
                        return Object(i.__generator)(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return [ 4, this.resetNotifications() ];

                              case 1:
                                return e.sent(), this.$emit("notificationsReset"), [ 2 ];
                            }
                        }));
                    }));
                },
                truncateCount: function(e) {
                    return e > 99 ? "99+" : String(e);
                },
                getLiveNavLabel: function() {
                    return this.$store.state.gates.live_nav_watch ? this.$translate("nav_primary_live_watch", "Watch") : this.$translate("nav_primary_live_livestreams", "Livestreams");
                },
                dismissSigninPrompt: function() {
                    this.shouldRenderTooltip = !1, Xt.default.markDialogDismissed("login_prompt");
                },
                dismissPushNotifPrompt: function() {
                    this.shouldRenderPushNotifTooltip = !1, Xt.default.markDialogDismissed("push_notif_prompt");
                }
            }),
            watch: {
                shouldDrawBoxShadow: function(e) {
                    e ? this.scrollTimeout > -1 || window.addEventListener("scroll", this.updateBoxShadowAmount, {
                        passive: !0
                    }) : window.removeEventListener("scroll", this.updateBoxShadowAmount);
                }
            },
            computed: Object(i.__assign)(Object(i.__assign)(Object(i.__assign)(Object(i.__assign)(Object(i.__assign)({}, Object(g.mapState)([ "gates" ])), Object(g.mapState)("primaryNav", [ "messageCount", "notificationCount", "isMinimal", "hasBrowserNotifications", "hideCreateProjectButton", "hideActivateButton", "typeaheadResults", "lastSearchTerm" ])), Object(g.mapState)("user", {
                isLoggedIn: function(e) {
                    return Boolean(e.loggedInUser);
                },
                displayName: function(e) {
                    var t;
                    return null === (t = e.loggedInUser) || void 0 === t ? void 0 : t.display_name;
                },
                emailAddress: function(e) {
                    var t;
                    return null === (t = e.loggedInUser) || void 0 === t ? void 0 : t.email;
                },
                profileUrl: function(e) {
                    var t;
                    return null === (t = e.loggedInUser) || void 0 === t ? void 0 : t.url;
                },
                isAdmin: function(e) {
                    var t, a;
                    return Boolean(null === (a = null === (t = e.loggedInUser) || void 0 === t ? void 0 : t.privileges) || void 0 === a ? void 0 : a.is_admin);
                },
                smallAvatarSrc: function(e) {
                    var t;
                    return null === (t = e.loggedInUser) || void 0 === t ? void 0 : t.images[100];
                },
                largeAvatarSrc: function(e) {
                    var t;
                    return null === (t = e.loggedInUser) || void 0 === t ? void 0 : t.images[230];
                },
                fallbackAvatarSrc: function(e) {
                    var t;
                    return null === (t = e.loggedInUser) || void 0 === t ? void 0 : t.images[138];
                },
                firstName: function(e) {
                    var t;
                    return (null === (t = e.loggedInUser) || void 0 === t ? void 0 : t.first_name) || e.partialUserFirstName;
                },
                isPartialUser: function(e) {
                    return e.isPartialUser;
                },
                isImpersonated: function(e) {
                    return e.isImpersonated;
                }
            })), Object(g.mapState)("translation", {
                locale: function(e) {
                    return e.localization.LOCALE;
                }
            })), {
                shouldDrawBoxShadow: function() {
                    var e, t, a, i = this, n = aa.some((function(e) {
                        return e === i.$route.name;
                    })), r = null === (a = null === (t = null === (e = this.$route) || void 0 === e ? void 0 : e.meta) || void 0 === t ? void 0 : t.pageName) || void 0 === a ? void 0 : a.includes("search");
                    return !this.isMobile && !n && !r;
                },
                userDismissedLoginPrompt: function() {
                    return Xt.default.wasDialogDismissed("login_prompt");
                },
                userDismissedPushNotifPrompt: function() {
                    return Xt.default.wasDialogDismissed("push_notif_prompt");
                },
                signinSource: function() {
                    return this.$route.name === v.b ? "HeaderWithLoginPrompt" : "Header";
                },
                signupSource: function() {
                    return this.$route.name === v.b ? "HeaderWithLoginPrompt" : "updated_2020_navigation_signup";
                },
                isUnderBaseSearchRoute: function() {
                    var e;
                    return null === (e = this.$router.currentRoute.matched) || void 0 === e ? void 0 : e.some((function(e) {
                        return "searchHome" === e.name || "searchRoot" === e.name || "liveRoot" === e.name;
                    }));
                },
                currentLocale: function() {
                    var e = this, t = H.LOCALES.find((function(t) {
                        return t.code === e.locale;
                    }));
                    return t || H.LOCALES[0];
                },
                navigationLinks: function() {
                    var e = [ {
                        url: H.URL_GALLERIES,
                        names: W.c.map((function(e) {
                            return e.name;
                        })),
                        label: this.$translate("nav_primary_discover", "Discover"),
                        e2eKey: "discover"
                    }, {
                        url: H.URL_LIVE,
                        names: Object(K.a)()[0].children.map((function(e) {
                            return e.name;
                        })),
                        label: this.getLiveNavLabel(),
                        e2eKey: "live"
                    }, {
                        url: H.URL_JOBLIST,
                        names: Object(z.b)()[0].children.map((function(e) {
                            return e.name;
                        })),
                        label: this.$translate("nav_primary_jobs", "Jobs"),
                        e2eKey: "jobs"
                    } ];
                    return this.isLoggedIn && e.unshift({
                        url: H.URL_HOME,
                        names: Object.values(V.b),
                        label: this.$translate("nav_primary_for_you", "For You"),
                        e2eKey: "forYou"
                    }), e;
                },
                linkToMobile: ea.a
            })
        }), na = a("HGcH");
        var ra = Object(r.default)(ia, (function() {
            var e, t, a, i, n = this, r = n.$createElement, o = n._self._c || r;
            return o("div", {
                class: [ n.$style.root, (e = {}, e[n.$style.hamburgerMenuOpen] = n.isHamburgerMenuOpen, 
                e), (t = {}, t[n.$style.activateAndCreateButtonsHidden] = n.hideCreateProjectButton && n.hideActivateButton, 
                t), (a = {}, a[n.$style.hideSearchInput] = n.isUnderBaseSearchRoute, a), "PrimaryNavigation__global-selector", "js-primary-navigation" ]
            }, [ o("div", {
                class: n.$style.fixed
            }, [ n.isMinimal ? n._e() : o("div", {
                class: n.$style.hamburgerMenu
            }, [ o("div", {
                class: n.$style.loginOrCreate
            }, [ n.isLoggedIn ? [ n.isPartialUser || n.hideCreateProjectButton ? n._e() : o("Btn", {
                attrs: {
                    href: n.getUrl(n.URL_PROJECT_CREATE)
                }
            }, [ n._v(" " + n._s(n.$translate("create_a_project_label", "Create a project")) + " ") ]) ] : o("Btn", {
                staticClass: "js-adobeid-signin",
                attrs: {
                    "data-signin-from": "updated_2020_navigation_login_hamburger",
                    href: "",
                    role: "button"
                }
            }, [ n._v(" " + n._s(n.$translate("nav_primary_log_in", "Log In")) + " ") ]) ], 2), o("ul", {
                class: n.$style.coreNavigation
            }, n._l(n.navigationLinks, (function(e, t) {
                var a;
                return o("li", {
                    key: t,
                    class: [ n.$style.coreNavigationItem, n.$style.text ]
                }, [ o("a", {
                    class: [ n.$style.coreNavigationLink, (a = {}, a[n.$style.active] = e.names.includes(n.$route.name), 
                    a) ],
                    attrs: {
                        href: n.getUrl(e.url),
                        title: e.label,
                        "aria-label": e.label
                    }
                }, [ o("h3", {
                    class: n.$style.coreNavigationLabel
                }, [ n._v(n._s(e.label)) ]) ]) ]);
            })), 0), n.isLoggedIn && !n.isPartialUser ? o("div", {
                class: [ n.$style.mobileUserMenuAndTrigger, (i = {}, i[n.$style.menuVisible] = n.isMobileUserMenuShown, 
                i) ]
            }, [ o("div", {
                class: n.$style.mobileTriggerUserMenu,
                on: {
                    click: function(e) {
                        n.isMobileUserMenuShown = !n.isMobileUserMenuShown;
                    }
                }
            }, [ o("div", {
                class: n.$style.userAvatar
            }, [ o("img", {
                class: n.$style.avatarImgEl,
                attrs: {
                    alt: n.displayName,
                    src: n.largeAvatarSrc || n.fallbackAvatarSrc
                }
            }) ]), o("h3", {
                class: n.$style.avatarLabel
            }, [ n._v(n._s(n.$translate("nav_primary_me", "Me"))) ]), o("Triangle", {
                class: n.$style.triangle
            }) ], 1), n.isMobileUserMenuShown ? o("ul", {
                class: [ n.$style.userMenuList, n.$style.mobile ]
            }, [ n.isAdmin ? o("li", {
                class: [ n.$style.userMenuItem, n.$style.link, n.$style.admin ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: n.URL_ADMIN_DEFAULT
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_admin", "Admin"))) ]) ]) : n._e(), o("li", {
                class: [ n.$style.userMenuItem, n.$style.link, n.$style.profile ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: n.profileUrl
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_my_portfolio", "Behance Profile"))) ]) ]), Boolean(n.gates.feature_subscribe_to_creative) ? o("li", {
                class: [ n.$style.userMenuItem, n.$style.link ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: n.profileUrl + "/subscriptions"
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_inner_circle_memberships", "Subscriptions"))) ]) ]) : n._e(), o("li", {
                class: [ n.$style.userMenuItem, n.$style.link ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: n.URL_ACCOUNT_SETTINGS
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_account_settings", "Settings"))) ]) ]), o("li", {
                class: [ n.$style.userMenuItem, n.$style.link, n.$style.help ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: "https://help.behance.net/hc/en-us",
                    target: "_blank"
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_help", "Help")) + " ") ]) ]), o("li", {
                class: [ n.$style.userMenuItem, n.$style.link, "js-adobeid-signout", n.$style.signOut ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: ""
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_log_out", "Sign Out"))) ]) ]) ]) : n._e() ]) : n._e(), o("ul", {
                class: n.$style.appLinks
            }, [ o("li", {
                class: [ n.$style.appLinkItem, n.$style.ios ]
            }, [ o("a", {
                class: n.$style.appLink,
                attrs: {
                    target: "_blank",
                    href: "#",
                    title: n.$translate("button_apple_app_download", "Download on the App Store"),
                    "aria-label": n.$translate("button_apple_app_download", "Download on the App Store")
                }
            }, [ n._v(n._s(n.$translate("button_apple_app_download", "Download on the App Store"))) ]) ]), o("li", {
                class: [ n.$style.appLinkItem, n.$style.android ]
            }, [ o("a", {
                class: n.$style.appLink,
                attrs: {
                    target: "_blank",
                    href: "#",
                    title: n.$translate("buttons_google_app_download", "Get it on Google Play"),
                    "aria-label": n.$translate("buttons_google_app_download", "Get it on Google Play")
                }
            }, [ n._v(n._s(n.$translate("buttons_google_app_download", "Get it on Google Play"))) ]) ]) ]), o("div", {
                class: n.$style.languageSelector
            }, [ o("select", {
                class: n.$style.languageSelectEl,
                attrs: {
                    "aria-label": n.$translate("nav_primary_select_language", "View Behance in your language of choice"),
                    title: n.$translate("nav_primary_select_language", "View Behance in your language of choice")
                },
                on: {
                    change: n.languageSelectChanged
                }
            }, n._l(n.LOCALES, (function(e) {
                return o("option", {
                    key: e.code,
                    domProps: {
                        value: e.code,
                        selected: e.code === n.currentLocale.code
                    }
                }, [ n._v(" " + n._s(e.label) + " ") ]);
            })), 0), o("Triangle", {
                class: n.$style.triangle
            }) ], 1), n.isLoggedIn ? n._e() : o("div", {
                class: n.$style.signUp
            }, [ o("Btn", {
                class: [ "js-adobeid-signup" ],
                attrs: {
                    role: "button",
                    "data-signup-from": "updated_2020_navigation_signup",
                    type: "primary"
                }
            }, [ n._v(" " + n._s(n.$translate("nav_primary_sign_up", "Sign Up")) + " ") ]) ], 1) ]), o("div", {
                class: [ n.$style.strip, "js-nav-primary", "e2e-PrimaryNav" ],
                style: n.navBoxShadow,
                attrs: {
                    tabindex: "-1"
                },
                on: {
                    click: function(e) {
                        n.isHamburgerMenuOpen = !1;
                    }
                }
            }, [ o("a", {
                class: n.$style.skipContent,
                attrs: {
                    tabindex: "0",
                    title: n.$translate("nav_primary_skip_to_main_title", "Skip Link for Main Content")
                },
                on: {
                    keypress: function(e) {
                        return !e.type.indexOf("key") && n._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : n.$emit("skipToMainContent");
                    }
                }
            }, [ n._v(n._s(n.$translate("nav_primary_skip_to_main", "Skip to Main Content"))) ]), o("a", {
                class: n.$style.skipFooter,
                attrs: {
                    tabindex: "0",
                    title: n.$translate("nav_primary_skip_to_footer_title", "Skip Link for Footer")
                },
                on: {
                    keypress: function(e) {
                        return !e.type.indexOf("key") && n._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : n.$emit("skipToFooter");
                    }
                }
            }, [ n._v(n._s(n.$translate("nav_primary_skip_to_footer", "Skip to Footer"))) ]), o("div", {
                class: [ n.$style.hamburgerMenuActivate ],
                on: {
                    click: function(e) {
                        return e.stopPropagation(), n.toggleHamburgerMenu(e);
                    }
                }
            }, [ o("div", {
                class: n.$style.hamburgerButton
            }, [ o("div", {
                class: n.$style.hamburgerLine
            }), o("div", {
                class: n.$style.hamburgerLine
            }), o("div", {
                class: n.$style.hamburgerLine
            }) ]) ]), o("ul", {
                class: n.$style.coreNavigation
            }, [ o("li", {
                class: [ n.$style.coreNavigationItem, n.$style.home ]
            }, [ o("a", {
                class: n.$style.coreNavigationLink,
                attrs: {
                    href: n.URL_HOME,
                    title: "Behance",
                    "aria-label": "Behance"
                }
            }, [ o("div", {
                class: n.$style.logoWrap
            }, [ o("BehanceLogo", {
                class: [ n.$style.behanceLogo, n.$style.full ],
                attrs: {
                    title: "Behance",
                    desc: n.$translate("site_navigation_navigate_to_behance", "Navigate to behance.net")
                }
            }), o("BehanceLogoTruncated", {
                class: [ n.$style.behanceLogo, n.$style.truncated ],
                attrs: {
                    title: "Behance",
                    desc: n.$translate("site_navigation_navigate_to_behance", "Navigate to behance.net")
                }
            }) ], 1) ]) ]), n._l(n.navigationLinks, (function(e, t) {
                var a;
                return o("li", {
                    key: t,
                    class: [ n.$style.coreNavigationItem, n.$style.text ]
                }, [ n.isMinimal ? n._e() : o("a", {
                    class: [ n.$style.coreNavigationLink, "e2e-Nav-" + e.e2eKey, (a = {}, a[n.$style.active] = e.names.includes(n.$route.name), 
                    a) ],
                    attrs: {
                        href: n.getUrl(e.url),
                        title: e.label,
                        "aria-label": e.label
                    }
                }, [ o("h3", {
                    class: n.$style.coreNavigationLabel
                }, [ n._v(n._s(e.label)) ]) ]) ]);
            })) ], 2), n.isMinimal || n.isUnderBaseSearchRoute ? n._e() : o("div", {
                class: n.$style.siteSearch
            }, [ o("SearchTypeahead", {
                attrs: {
                    isTypeaheadEnabled: !0,
                    results: n.typeaheadResults,
                    lastSearchTerm: n.lastSearchTerm
                },
                on: {
                    inputDidChange: n.fetchResults
                }
            }) ], 1), n.isMinimal ? n._e() : o("div", {
                class: n.$style.signup
            }, [ n.isPartialUser && !n.hideActivateButton ? o("Btn", {
                class: n.$style.activate,
                attrs: {
                    type: "primary",
                    href: n.URL_ONBOARDING_ADOBE
                }
            }, [ o("AlternateAdobeLogo", {
                attrs: {
                    slot: "leadingIcon",
                    fill: "white"
                },
                slot: "leadingIcon"
            }), n._v(" " + n._s(n.$translate("activate_continue_as_name", "Continue as {firstName}", {
                firstName: n.firstName
            })) + " ") ], 1) : n._e(), o("div", {
                class: n.$style.a11yButtonWrap
            }, [ !n.isLoggedIn || n.isPartialUser || n.hideCreateProjectButton ? n._e() : o("Btn", {
                class: [ "e2e-Create-Project", n.$style.a11yButton, n.$style.createAProject ],
                attrs: {
                    href: n.getUrl(n.URL_PROJECT_CREATE),
                    "aria-label": n.$translate("create_a_project_label", "Create a project")
                }
            }, [ n._v(" " + n._s(n.$translate("create_a_project_label", "Create a project")) + " ") ]), o("span", {
                class: n.$style.a11yButtonHelper
            }) ], 1), n.isPartialUser || n.isLoggedIn ? n._e() : o("ul", {
                class: n.$style.loggedOutOptions
            }, [ o("li", {
                class: [ n.$style.loggedOutOption, n.$style.logIn ]
            }, [ o("FadeDown", [ n.shouldRenderTooltip ? [ o("Tooltip", {
                class: n.$style.tooltipWrapper,
                attrs: {
                    position: "bottom",
                    alignment: "right",
                    alignmentOffset: 20,
                    toggleMethod: "none",
                    isOpen: !0
                }
            }, [ o("div", {
                class: n.$style.tooltipContent,
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ o("p", {
                class: n.$style.tooltipText
            }, [ n._v(n._s(n.$translate("nav_primary_log_in_popup", "Log in to view personalized recommendations, follow creatives and more."))) ]), o("Btn", {
                class: [ n.$style.tooltipButton, n.$style.loggedOutButton ],
                attrs: {
                    type: "transparent"
                },
                on: {
                    click: n.dismissSigninPrompt
                }
            }, [ n._v(" " + n._s(n.$translate("nav_primary_log_in_popup_dismiss", "Got It")) + " ") ]) ], 1) ]) ] : n._e() ], 2), o("div", {
                class: n.$style.a11yButtonWrap
            }, [ o("Btn", {
                class: [ "js-adobeid-signin", n.$style.a11yButton ],
                attrs: {
                    "data-signin-from": n.signinSource
                }
            }, [ n._v(" " + n._s(n.$translate("nav_primary_log_in", "Log In")) + " ") ]), o("span", {
                class: n.$style.a11yButtonHelper
            }) ], 1) ], 1), o("li", {
                class: n.$style.loggedOutOption
            }, [ o("div", {
                class: n.$style.a11yButtonWrap
            }, [ o("Btn", {
                class: [ "js-adobeid-signup", "e2e-PrimaryNav-signup", n.$style.a11yButton ],
                attrs: {
                    role: "button",
                    "data-signup-from": n.signupSource,
                    type: "primary"
                }
            }, [ n._v(" " + n._s(n.$translate("nav_primary_sign_up", "Sign Up")) + " ") ]), o("span", {
                class: n.$style.a11yButtonHelper
            }) ], 1) ]) ]) ], 1), n.isMobile ? o("div", {
                class: n.$style.appLinkContainer
            }, [ o("Btn", {
                class: n.$style.useApp,
                attrs: {
                    role: "button",
                    type: "primary",
                    href: n.linkToMobile
                }
            }, [ n._v(" " + n._s(n.$translate("nav_primary_use_app", "Use App")) + " ") ]) ], 1) : n._e(), n.isMinimal ? n._e() : o("div", {
                class: n.$style.searchLink
            }, [ o("a", {
                class: [ n.$style.link, "e2e-PrimaryNav-search" ],
                attrs: {
                    href: n.getUrl(n.URL_SEARCH),
                    title: n.$translate("primary_nav_search", "Search"),
                    "aria-label": n.$translate("primary_nav_search", "Search")
                }
            }, [ o("SearchIcon") ], 1) ]), n.isMinimal ? n._e() : [ o("ul", {
                class: n.$style.userControls
            }, [ !n.isPartialUser && n.isLoggedIn ? o("li", {
                ref: "inboxTrigger",
                class: [ n.$style.userControl, n.$style.mail, "e2e-NotificationBadge--email" ]
            }, [ o("div", {
                class: [ n.$style.link, "mail-inbox", n.$style.userControlLink ],
                attrs: {
                    role: "button",
                    tabindex: "0",
                    title: n.$translate("primary_nav_messages", "Messages"),
                    "aria-label": n.$translate("primary_nav_messages", "Messages")
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && n._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : n.navigateToInboxUrl(e);
                    }
                }
            }, [ o("MailIcon", {
                class: [ n.$style.icon, "js-icon__mail" ],
                attrs: {
                    title: n.$translate("primary_nav_inbox_title", "Inbox"),
                    desc: n.$translate("primary_nav_inbox_description", "Show all messages in your inbox.")
                }
            }) ], 1), o("Fade", [ n.messageCount > 0 ? o("div", {
                class: n.$style.count
            }, [ n._v(" " + n._s(n.truncateCount(n.messageCount)) + " ") ]) : n._e() ]) ], 1) : n._e(), !n.isPartialUser && n.isLoggedIn ? o("li", {
                ref: "notifTrigger",
                class: [ n.$style.userControl, n.$style.notifications, "e2e-NotificationBadge--notification" ],
                on: {
                    click: n.handleNotificationIconClick
                }
            }, [ o("div", {
                class: [ n.$style.link, n.$style.userControlLink ],
                attrs: {
                    tabindex: "0"
                }
            }, [ o("NotificationIcon", {
                class: n.$style.icon,
                attrs: {
                    title: n.$translate("primary_nav_notifications_title", "Notifications"),
                    desc: n.$translate("primary_nav_notifications_description", "View your notifications within Behance.")
                }
            }) ], 1), o("Fade", [ n.notificationCount > 0 ? o("div", {
                class: n.$style.count
            }, [ n._v(" " + n._s(n.truncateCount(n.notificationCount)) + " ") ]) : n._e() ]), o("FadeDown", [ n.shouldRenderPushNotifTooltip ? [ o("Tooltip", {
                class: n.$style.tooltipWrapper,
                attrs: {
                    position: "bottom",
                    alignment: "right",
                    alignmentOffset: -5,
                    distance: 0,
                    toggleMethod: "none",
                    isOpen: !0
                }
            }, [ o("div", {
                class: n.$style.pushNotifTooltipContent,
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ o("p", {
                class: n.$style.pushNotifTooltipText
            }, [ n._v(n._s(n.$translate("nav_primary_notifications_push_notification_prompt", "It looks like you’re using a new browser. Would you like to enable notifications for this browser?"))) ]), o("Btn", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), n.shouldRenderPushNotifTooltip = !1, n.subscribeToPushNotifications(e);
                    }
                }
            }, [ n._v(" " + n._s(n.$translate("nav_primary_push_notification_popup_turn_on", "Turn On")) + " ") ]), o("Btn", {
                attrs: {
                    type: "ghost"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), n.dismissPushNotifPrompt(e);
                    }
                }
            }, [ n._v(" " + n._s(n.$translate("nav_primary_push_notification_popup_dismiss", "No Thanks")) + " ") ]) ], 1) ]) ] : n._e() ], 2) ], 1) : n._e(), !n.isPartialUser && n.isLoggedIn ? o("li", {
                class: [ n.$style.userControl, n.$style.me, "e2e-PrimaryNav-me" ]
            }, [ o("Tooltip", {
                class: [ n.$style.userMenuTooltip, "e2e-PrimaryNav-profile-tooltip" ],
                attrs: {
                    position: "bottom",
                    alignment: "right",
                    shouldCloseOnChildBlur: !1,
                    distance: 0,
                    alignmentOffset: 0,
                    horizontalPadding: 0,
                    verticalPadding: 0
                }
            }, [ o("div", {
                class: n.$style.userAvatarTrigger,
                attrs: {
                    tabIndex: "0"
                }
            }, [ o("a", {
                class: [ n.$style.userControlLink, "e2e-PrimaryNav-link-image" ],
                attrs: {
                    href: n.profileUrl,
                    "aria-label": n.$translate("nav_primary_me_my_portfolio", "Behance Profile")
                }
            }, [ o("img", {
                class: n.$style.avatarImgEl,
                attrs: {
                    alt: n.displayName,
                    src: n.smallAvatarSrc || n.fallbackAvatarSrc
                }
            }) ]) ]), o("ul", {
                class: [ n.$style.userMenuList, n.$style.desktop ],
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ o("li", {
                class: [ n.$style.userMenuItem, n.$style.userMeta ]
            }, [ o("div", {
                class: n.$style.userMetaContainer
            }, [ o("div", {
                class: n.$style.userAvatar
            }, [ o("a", {
                attrs: {
                    href: n.profileUrl,
                    "aria-label": n.$translate("nav_primary_me_my_portfolio", "Behance Profile")
                }
            }, [ o("img", {
                class: n.$style.avatarImgEl,
                attrs: {
                    alt: n.displayName,
                    src: n.largeAvatarSrc || n.fallbackAvatarSrc
                }
            }) ]) ]), o("div", {
                class: n.$style.userId
            }, [ o("h2", {
                class: n.$style.userName
            }, [ n._v(n._s(n.displayName)) ]), o("p", {
                class: n.$style.userEmail
            }, [ n._v(n._s(n.emailAddress)) ]), o("a", {
                class: n.$style.userLink,
                attrs: {
                    href: "https://accounts.adobe.com"
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_manage_my_adobe_id", "Manage Adobe ID"))) ]) ]) ]) ]), o("ul", {
                class: n.$style.listGroup
            }, [ n.isAdmin ? o("li", {
                class: [ n.$style.userMenuItem, n.$style.link, n.$style.admin ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: n.URL_ADMIN_DEFAULT
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_admin", "Admin"))) ]) ]) : n._e(), n.isImpersonated ? o("li", {
                class: [ n.$style.userMenuItem, n.$style.link ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: n.URL_BACK_TO_ADMIN
                }
            }, [ n._v(n._s(n.$translate("nav_back_to_admin", "Back to Admin"))) ]) ]) : n._e(), o("li", {
                class: [ n.$style.userMenuItem, n.$style.link, n.$style.profile ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: n.profileUrl
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_my_portfolio", "Behance Profile"))) ]) ]), Boolean(n.gates.feature_subscribe_to_creative) ? o("li", {
                class: [ n.$style.userMenuItem, n.$style.link ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: n.profileUrl + "/subscriptions"
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_inner_circle_memberships", "Subscriptions"))) ]) ]) : n._e(), o("li", {
                class: [ n.$style.userMenuItem, n.$style.link ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: n.URL_ACCOUNT_SETTINGS
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_account_settings", "Settings"))) ]) ]), o("li", {
                class: [ n.$style.userMenuItem, n.$style.link, n.$style.help, "js-zendesk" ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: "https://help.behance.net/hc/en-us",
                    target: "_blank"
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_help", "Help")) + " ") ]) ]) ]), o("ul", {
                class: n.$style.listGroup
            }, [ o("li", {
                class: [ n.$style.userMenuItem, n.$style.link, "js-adobeid-signout", n.$style.signOut ]
            }, [ o("a", {
                class: n.$style.anchor,
                attrs: {
                    href: ""
                }
            }, [ n._v(n._s(n.$translate("nav_primary_me_log_out", "Sign Out"))) ]) ]) ]) ]) ]) ], 1) : n._e() ]) ], n.isMinimal ? n._e() : o("div", {
                class: n.$style.adobeLogo
            }, [ o("a", {
                class: n.$style.adobeCreativeCloudLink,
                attrs: {
                    href: n.gates.feature_cc_upsell_page ? n.URL_ADOBE_CREATIVE_CLOUD_HOME + "?promoid=ZFN4FHYD&mv=other" : n.URL_ADOBE_CREATIVE_CLOUD_HOME + "?promoid=RTQCN3LX&mv=other",
                    target: "_blank",
                    title: n.$translate("nav_primary_adobe_creative_cloud", "Adobe Creative Cloud"),
                    "aria-label": n.$translate("nav_primary_adobe_creative_cloud", "Adobe Creative Cloud")
                }
            }, [ o("span", {
                class: n.$style.iconWrap
            }, [ o("AdobeLockup2020", {
                class: n.$style.icon
            }) ], 1) ]) ]), n.isMinimal && n.firstName ? o("h3", {
                class: n.$style.minimalWelcomeMessage
            }, [ n._v(" " + n._s(n.$translate("activate_welcome_with_name", "Welcome, {firstName}!", {
                firstName: n.firstName
            })) + " ") ]) : n._e() ], 2) ]) ]);
        }), [], !1, (function(e) {
            this.$style = na.default.locals || na.default;
        }), null, null);
        t.a = ra.exports;
    },
    "OC+4": function(e, t, a) {
        var i = a("6QaK"), n = {
            "bestyleguide/_avatar": a("1hEZ").template,
            "lib/_buttons/_default": a("yfpa").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="proposition-group cfix">'), i.b("\n" + a), 
                i.b('  <div class="js-invitation">'), i.b("\n"), i.b("\n" + a), i.b(i.rp("<bestyleguide/_avatar0", e, t, "")), 
                i.b("\n" + a), i.b('    <div class="detail beside-avatar">'), i.b("\n" + a), i.b('      <div class="msg extra-padding">'), 
                i.b("\n" + a), i.b(i.rp("<subject1", e, t, "        ")), i.b("      </div>"), i.b("\n"), 
                i.b("\n" + a), i.b('      <div class="graphic">'), i.b("\n" + a), i.b('        <div class="activity-block proposition-'), 
                i.b(i.v(i.f("proposition", e, t, 0))), i.b(' cfix">'), i.b("\n" + a), i.b(i.rp("<innards2", e, t, "          ")), 
                i.b(i.rp("<lib/_buttons/_default3", e, t, "")), i.b("        </div>"), i.b("\n" + a), 
                i.b("      </div>"), i.b("\n"), i.b("\n" + a), i.b('      <div class="time">'), 
                i.b("\n" + a), i.b('        <span class="proposition-time js-time">'), i.b(i.v(i.f("time_ago", e, t, 0))), 
                i.b("</span>"), i.b("\n" + a), i.b('        <span class="js-reject proposition-reject">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 1036, 1077, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b("notifications_declined|Decline invitation");
                })), e.pop()), i.b("</span>"), i.b("\n" + a), i.b("      </div>"), i.b("\n"), i.b("\n" + a), 
                i.b("    </div>"), i.b("\n"), i.b("\n" + a), i.b("  </div>"), i.b("\n" + a), i.b("</div>"), 
                i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_avatar0": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        avatarClasses: function(e, t, a, i) {
                            a.b("js-mini-profile");
                        },
                        avatarId: function(e, t, a, i) {
                            a.b(a.v(a.d("actor.id", e, t, 0)));
                        },
                        avatarUrl: function(e, t, a, i) {
                            a.b(a.v(a.d("actor.url", e, t, 0)));
                        },
                        src: function(e, t, a, i) {
                            a.b(a.v(a.d("actor.images.50", e, t, 0)));
                        },
                        srcLarge: function(e, t, a, i) {
                            a.b(a.v(a.d("actor.images.115", e, t, 0)));
                        }
                    }
                },
                "<subject1": {
                    name: "subject",
                    partials: {},
                    subs: {}
                },
                "<innards2": {
                    name: "innards",
                    partials: {},
                    subs: {}
                },
                "<lib/_buttons/_default3": {
                    name: "lib/_buttons/_default",
                    partials: {},
                    subs: {
                        classes: function(e, t, a, i) {
                            a.b("accept right js-accept rf-button--small");
                        },
                        label: function(e, t, a, i) {
                            a.s(a.f("translate", e, t, 1), e, t, 0, 759, 788, "{{ }}") && (a.rs(e, t, (function(e, t, a) {
                                a.b("notifications_accepted|Accept");
                            })), e.pop());
                        }
                    }
                }
            },
            subs: {}
        }, '<div class="proposition-group cfix">\n  <div class="js-invitation">\n\n    {{<bestyleguide/_avatar}}\n      {{$avatarClasses}}js-mini-profile{{/avatarClasses}}\n      {{$avatarId}}{{actor.id}}{{/avatarId}}\n      {{$avatarUrl}}{{actor.url}}{{/avatarUrl}}\n      {{$src}}{{actor.images.50}}{{/src}}\n      {{$srcLarge}}{{actor.images.115}}{{/srcLarge}}\n    {{/bestyleguide/_avatar}}\n\n    <div class="detail beside-avatar">\n      <div class="msg extra-padding">\n        {{> subject}}\n      </div>\n\n      <div class="graphic">\n        <div class="activity-block proposition-{{proposition}} cfix">\n          {{> innards}}\n          {{<lib/_buttons/_default}}\n            {{$classes}}accept right js-accept rf-button--small{{/classes}}\n            {{$label}}{{#translate}}notifications_accepted|Accept{{/translate}}{{/label}}\n          {{/lib/_buttons/_default}}\n        </div>\n      </div>\n\n      <div class="time">\n        <span class="proposition-time js-time">{{time_ago}}</span>\n        <span class="js-reject proposition-reject">{{#translate}}notifications_declined|Decline invitation{{/translate}}</span>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    OYha: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.s(i.f("translate", e, t, 1), e, t, 0, 14, 206, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_archived_job|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b(' </a> has archived the job  &ldquo;<a href="'), 
                    a.b(a.v(a.d("job._links.recruiter", e, t, 0))), a.b('">'), a.b(a.v(a.d("job.title", e, t, 0))), 
                    a.b("</a>&rdquo; that was shared with you");
                })), e.pop()), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#translate}}notifications_archived_job|<a href="{{actor.url}}">{{actor.display_name}} </a> has archived the job  &ldquo;<a href="{{job._links.recruiter}}">{{job.title}}</a>&rdquo; that was shared with you{{/translate}}', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    "Op0/": function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.s(i.f("team", e, t, 1), e, t, 0, 9, 216, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b('  <a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('">'), i.b("\n" + a), i.b('    <img alt="'), 
                    i.b(i.v(i.f("name", e, t, 0))), i.b('" title="'), i.b(i.v(i.f("name", e, t, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("images.138", e, t, 0))), i.b('" srcset="'), i.b(i.v(i.d("images.138", e, t, 0))), 
                    i.b(", "), i.b(i.v(i.d("images.276", e, t, 0))), i.b(' 2x" class="comment-image" />'), 
                    i.b("\n" + a), i.b("  </a>"), i.b("\n" + a), i.b('<div class="proposition-subject">'), 
                    i.b(i.v(i.f("name", e, t, 0))), i.b("</div>"), i.b("\n" + a);
                })), e.pop()), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#team}}\n  <a href="{{url}}">\n    <img alt="{{name}}" title="{{name}}" src="{{images.138}}" srcset="{{images.138}}, {{images.276}} 2x" class="comment-image" />\n  </a>\n<div class="proposition-subject">{{name}}</div>\n{{/team}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    P3Mf: function(e, t, a) {
        "use strict";
        var i = a("K+aO"), n = Object(i.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "13",
                    height: "13",
                    viewBox: "5641 835.999 14 17.001"
                }
            }, [ t("g", [ t("path", {
                attrs: {
                    d: "M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z"
                }
            }), t("path", {
                attrs: {
                    d: "M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z"
                }
            }), t("path", {
                attrs: {
                    d: "M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z"
                }
            }), t("path", {
                attrs: {
                    d: "M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z"
                }
            }) ]) ]);
        }), [], !1, null, null, null);
        t.a = n.exports;
    },
    PJd8: function(e, t, a) {
        "use strict";
        var i = a("5732"), n = a("K+aO");
        var r = Object(n.default)({}, (function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("transition", {
                attrs: {
                    "enter-active-class": e.$style.enterActive,
                    "leave-active-class": e.$style.leaveActive
                }
            }, [ e._t("default") ], 2);
        }), [], !1, (function(e) {
            this.$style = i.default.locals || i.default;
        }), null, null);
        t.a = r.exports;
    },
    Pvlb: function(e, t, a) {
        var i = a("nzp1");
        "string" == typeof i && (i = [ [ e.i, i, "" ] ]), i.locals && (e.exports = i.locals);
        (0, a("DtNa").default)("010bf54c", i, !0, {});
    },
    RNvQ: function(e, t, a) {
        var i = a("tQYX"), n = a("ENE1"), r = a("nvU9"), o = Math.max, s = Math.min;
        e.exports = function(e, t, a) {
            var l, c, d, p, u, b, m = 0, f = !1, h = !1, v = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            function g(t) {
                var a = l, i = c;
                return l = c = void 0, m = t, p = e.apply(i, a);
            }
            function y(e) {
                return m = e, u = setTimeout(x, t), f ? g(e) : p;
            }
            function _(e) {
                var a = e - b;
                return void 0 === b || a >= t || a < 0 || h && e - m >= d;
            }
            function x() {
                var e = n();
                if (_(e)) return w(e);
                u = setTimeout(x, function(e) {
                    var a = t - (e - b);
                    return h ? s(a, d - (e - m)) : a;
                }(e));
            }
            function w(e) {
                return u = void 0, v && l ? g(e) : (l = c = void 0, p);
            }
            function k() {
                var e = n(), a = _(e);
                if (l = arguments, c = this, b = e, a) {
                    if (void 0 === u) return y(b);
                    if (h) return clearTimeout(u), u = setTimeout(x, t), g(b);
                }
                return void 0 === u && (u = setTimeout(x, t)), p;
            }
            return t = r(t) || 0, i(a) && (f = !!a.leading, d = (h = "maxWait" in a) ? o(r(a.maxWait) || 0, t) : d, 
            v = "trailing" in a ? !!a.trailing : v), k.cancel = function() {
                void 0 !== u && clearTimeout(u), m = 0, l = b = c = u = void 0;
            }, k.flush = function() {
                return void 0 === u ? p : w(n());
            }, k;
        };
    },
    RcWU: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" class="graphic">'), 
                i.b("\n" + a), i.b('<div class="activity-block project-collection user-projects">'), 
                i.b("\n" + a), i.s(i.f("latest_projects", e, t, 1), e, t, 0, 119, 318, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b('  <div class="collection-project-image-wrap">'), i.b("\n" + a), i.b('    <img alt="'), 
                    i.b(i.v(i.f("name", e, t, 0))), i.b('" title="'), i.b(i.v(i.f("name", e, t, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("covers.115", e, t, 0))), i.b('" srcset="'), i.b(i.v(i.d("covers.115", e, t, 0))), 
                    i.b(", "), i.b(i.v(i.d("covers.202", e, t, 0))), i.b(' 2x" class="collection-project-image" />'), 
                    i.b("\n" + a), i.b("  </div>"), i.b("\n" + a);
                })), e.pop()), i.b("</div>"), i.b("\n" + a), i.b("</a>"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<a href="{{url}}" class="graphic">\n<div class="activity-block project-collection user-projects">\n  {{#latest_projects}}\n  <div class="collection-project-image-wrap">\n    <img alt="{{name}}" title="{{name}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="collection-project-image" />\n  </div>\n  {{/latest_projects}}\n</div>\n</a>', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    Rh0G: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return n;
        }));
        var i = a("E8ap");
        function n() {
            var e, t = null === (e = this.$router) || void 0 === e ? void 0 : e.currentRoute.path;
            return t && "/" !== t ? i.WEB_TO_APP_BRANCH_URL + "?$canonical_url=" + i.URL_BEHANCE_NETWORK + t : i.WEB_TO_APP_BRANCH_URL;
        }
    },
    S7Gn: function(e, t, a) {
        e.exports = a("ydjK")("S7Gn");
    },
    Ta0x: function(e, t, a) {
        "use strict";
        a("6U7i");
        var i = a("mLYF"), n = a("HNYy"), r = a("E8ap"), o = {
            components: {
                Modal: i.default,
                SMSAppLink: n.a
            },
            data: function() {
                return {
                    downloadGoogleAppUrl: r.URL_APPS_DOWNLOAD_NETWORK_GOOGLE,
                    downloadIosAppUrl: r.URL_APPS_DOWNLOAD_NETWORK,
                    assetsUrl: r.ASSETS_URL
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
        }, s = a("4FY9"), l = a("K+aO");
        var c = Object(l.default)(o, (function() {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("Modal", {
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
            }, [ a("div", {
                class: e.$style.imgContainer
            }), a("div", {
                class: e.$style.content
            }, [ a("h2", {
                ref: "title",
                class: e.$style.header
            }, [ e._v(e._s(e.$translate("profile_checklist_download_modal_app_header", "Download the Behance App"))) ]), a("p", {
                ref: "desc",
                class: e.$style.text
            }, [ e._v(e._s(e.$translate("profile_checklist_download_modal_app_text", "The best way to stay up to date with the creative world"))) ]), e.isLoggedIn && e.showSMSLink ? a("SMSAppLink", {
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
            }) : e._e(), a("div", {
                class: e.$style.downloadButtons
            }, [ a("a", {
                ref: "googleDownload",
                class: e.$style.downloadButton,
                style: "background-image:url(" + e.assetsUrl + "svgs/google-play-button.svg);",
                attrs: {
                    target: "_blank",
                    href: e.downloadGoogleAppUrl
                }
            }, [ e._v(e._s(e.$translate("buttons_google_app_download", "Get it on Google Play"))) ]), a("a", {
                ref: "appleDownload",
                class: [ e.$style.downloadButton, e.$style.downloadApple ],
                style: "background-image:url(" + e.assetsUrl + "svgs/apple-app-store-button.svg);",
                attrs: {
                    target: "_blank",
                    href: e.downloadIosAppUrl
                }
            }, [ e._v(e._s(e.$translate("button_apple_app_download", "Download on the App Store"))) ]) ]) ], 1) ]);
        }), [], !1, (function(e) {
            this.$style = s.default.locals || s.default;
        }), null, null);
        t.a = c.exports;
    },
    "Ub+Z": function(e, t, a) {
        "use strict";
        var i = a("C++9"), n = a.n(i);
        t.default = n.a;
    },
    Vpfn: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.s(i.f("translate", e, t, 1), e, t, 0, 14, 187, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_invite|You were invited to join <a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("'s </a> job &ldquo;<a href=\""), 
                    a.b(a.v(a.d("job._links.recruiter", e, t, 0))), a.b('"</a>'), a.b(a.v(a.d("job.title", e, t, 0))), 
                    a.b("</a>&rdquo;");
                })), e.pop()), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#translate}}notifications_invite|You were invited to join <a href="{{actor.url}}">{{actor.display_name}}\'s </a> job &ldquo;<a href="{{job._links.recruiter}}"</a>{{job.title}}</a>&rdquo;{{/translate}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    WK3d: function(e, t, a) {
        (t = e.exports = a("RDo7")(!1)).push([ e.i, '.InfinityFooter-footerInfinity-2xv{-webkit-box-align:center;align-items:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#fff;border-top:1px solid #e1e1e1;bottom:0;display:-webkit-box;display:flex;height:33px;left:0;position:fixed;width:100%;z-index:2}@media(max-width: 1024px){.InfinityFooter-footerInfinity-2xv{display:none}}.InfinityFooter-footerInfinity-2xv .focus-visible{outline:1px solid #0057ff;outline-offset:2px}.InfinityFooter-footerInfinity-2xv .InfinityFooter-tooltipMore-2Yo{width:195px}.InfinityFooter-footerInfinity-2xv .InfinityFooter-tooltipMore-2Yo .InfinityFooter-footerSelectorItem-uTJ{padding-right:7px}.InfinityFooter-footerSelector-U7S{font-family:inherit;font-size:11px;font-weight:bold;color:dimgray;cursor:pointer;font-weight:bold;margin-bottom:0;margin-top:-7.5px;padding:calc(7.5px * 2) 25px 7.5px;position:relative;text-align:center}@media(max-width: 1024px){.InfinityFooter-footerSelector-U7S{display:none}}.InfinityFooter-footerSelector-U7S::before{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-right:1px #afafaf solid;content:"";height:15px;margin-top:5px;position:absolute;right:0;width:1px}.InfinityFooter-footerSelector-U7S::after{content:"";display:inline-block;left:3px;position:relative;top:-2px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid dimgray;height:0;width:0}.InfinityFooter-footerSelector-U7S:hover::after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.InfinityFooter-footerSelectorItem-uTJ{font-family:inherit;font-size:11px;font-weight:bold;-webkit-box-align:center;align-items:center;color:dimgray;display:-webkit-box;display:flex}.InfinityFooter-footerSelectorItem-uTJ.InfinityFooter-selected-l2V{background:#0057ff;color:#fff}.InfinityFooter-footerSelectorItem-uTJ:hover{background:#0057ff;color:#fff}.InfinityFooter-footerSelectorLinks-2hX{color:inherit;display:-webkit-box;display:flex;padding:6px 20px;width:100%}.InfinityFooter-footerSelectorLinks-2hX:hover{text-decoration:none}.InfinityFooter-footerLinks-4ab{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;height:20px;list-style:none;padding-left:20px}.InfinityFooter-skipContent-37S{color:#fff;font-size:11px;font-weight:bold;left:-100%;padding:0 10px;position:absolute;text-decoration:none;text-transform:uppercase;top:2px}.InfinityFooter-skipContent-37S.focus-visible{color:#0057ff;left:16px;outline:1px solid #0057ff;outline-offset:2px}.InfinityFooter-footerLink-2xU{font-family:inherit;font-size:11px;font-weight:bold;color:dimgray;margin-right:10px}.InfinityFooter-footerLink-2xU:hover{color:#0057ff;text-decoration:none}.InfinityFooter-tooltipContainer-3-B{display:block}.InfinityFooter-adobeLogo-2ZO{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;margin-right:25px;position:fixed;right:0}.InfinityFooter-adobeLogo-2ZO .InfinityFooter-icon-30G{position:relative;top:2px;width:60px}.InfinityFooter-adobeLogo-2ZO:hover .InfinityFooter-icon-30G{fill:#707070}', "" ]), 
        t.locals = {
            footerInfinity: "InfinityFooter-footerInfinity-2xv",
            tooltipMore: "InfinityFooter-tooltipMore-2Yo",
            footerSelectorItem: "InfinityFooter-footerSelectorItem-uTJ",
            footerSelector: "InfinityFooter-footerSelector-U7S",
            selected: "InfinityFooter-selected-l2V",
            footerSelectorLinks: "InfinityFooter-footerSelectorLinks-2hX",
            footerLinks: "InfinityFooter-footerLinks-4ab",
            skipContent: "InfinityFooter-skipContent-37S",
            footerLink: "InfinityFooter-footerLink-2xU",
            tooltipContainer: "InfinityFooter-tooltipContainer-3-B",
            adobeLogo: "InfinityFooter-adobeLogo-2ZO",
            icon: "InfinityFooter-icon-30G"
        };
    },
    WddM: function(e, t, a) {
        "use strict";
        var i, n = a("D57K"), r = a("19SN");
        t.a = {
            getResults: function(e) {
                return Object(n.__awaiter)(this, void 0, Promise, (function() {
                    return Object(n.__generator)(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return [ 4, Object(r.b)({
                                query: Object(r.a)(i || (i = Object(n.__makeTemplateObject)([ "\n        query getSearchTermSuggestions($term: String!) {\n          searchTermSuggestions(term: $term) {\n            text\n          }\n        }\n      " ], [ "\n        query getSearchTermSuggestions($term: String!) {\n          searchTermSuggestions(term: $term) {\n            text\n          }\n        }\n      " ]))),
                                variables: {
                                    term: e
                                }
                            }) ];

                          case 1:
                            return [ 2, t.sent().searchTermSuggestions ];
                        }
                    }));
                }));
            }
        };
    },
    Xe1u: function(e, t, a) {
        "use strict";
        var i = a("qgDP"), n = a.n(i);
        t.default = n.a;
    },
    ZDWp: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<p class="msg">'), i.b("\n" + a), i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 32, 227, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_followed_moodboard|<span class="js-mini-profile" data-id="'), 
                    a.b(a.v(a.d("actor.id", e, t, 0))), a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), 
                    a.b('</span> followed your moodboard "<a href="'), a.b(a.v(a.d("collection.url", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("collection.title", e, t, 0))), a.b('</a>"');
                })), e.pop()), i.b("\n" + a), i.b("</p>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<p class="msg">\n  {{#translate}}notifications_followed_moodboard|<span class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</span> followed your moodboard "<a href="{{collection.url}}">{{collection.title}}</a>"{{/translate}}\n</p>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    a7ay: function(e, t, a) {
        var i = a("6QaK"), n = {
            "bestyleguide/_icons/_image": a("FR8Z").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + a), 
                i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 48, 219, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_wipreengaged|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a> posted their first Work in Progress in a while");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.b('<div class="graphic">'), 
                i.b("\n" + a), i.s(i.d("segment.is_expired", e, t, 1), e, t, 1, 0, 0, "") || (i.b('  <a href="'), 
                i.b(i.v(i.d("user.url", e, t, 0))), i.b("/workinprogress/"), i.b(i.v(i.d("segment.id", e, t, 0))), 
                i.b('">'), i.b("\n" + a), i.b('    <div class="activity-block wip-notification">'), 
                i.b("\n" + a), i.b("      <img"), i.b("\n" + a), i.b('        sizes="65px"'), i.b("\n" + a), 
                i.b('        srcset="'), i.b(i.v(i.d("segment.mediaSrcset", e, t, 0))), i.b('"'), 
                i.b("\n" + a), i.b('        src="'), i.b(i.v(i.d("segment.mediaUrl", e, t, 0))), 
                i.b('"'), i.b("\n" + a), i.b('        class="wip-notification__content wip-notification__image" />'), 
                i.b("\n" + a), i.s(i.d("segment.annotations", e, t, 1), e, t, 0, 602, 801, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b("      <img"), i.b("\n" + a), i.b('        sizes="65px"'), i.b("\n" + a), i.b('        srcset="'), 
                    i.b(i.v(i.d("segment.annotationSrcset", e, t, 0))), i.b('"'), i.b("\n" + a), i.b('        src="'), 
                    i.b(i.v(i.d("segment.annotationUrl", e, t, 0))), i.b('"'), i.b("\n" + a), i.b('        class="wip-notification__content wip-notification__annotation" />'), 
                    i.b("\n" + a);
                })), e.pop()), i.b("    </div>"), i.b("\n" + a), i.b("  </a>"), i.b("\n" + a)), 
                i.s(i.d("segment.is_expired", e, t, 1), e, t, 0, 895, 1065, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b('  <div class="activity-block wip-notification wip-notification--expired">'), 
                    i.b("\n" + a), i.b('    <div class="wip-notification__content">'), i.b("\n" + a), 
                    i.b(i.rp("<bestyleguide/_icons/_image0", e, t, "      ")), i.b("    </div>"), i.b("\n" + a);
                })), e.pop()), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_icons/_image0": {
                    name: "bestyleguide/_icons/_image",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_wipreengaged|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> posted their first Work in Progress in a while{{/translate}}\n</div>\n<div class="graphic">\n  {{^segment.is_expired}}\n  <a href="{{user.url}}/workinprogress/{{segment.id}}">\n    <div class="activity-block wip-notification">\n      <img\n        sizes="65px"\n        srcset="{{segment.mediaSrcset}}"\n        src="{{segment.mediaUrl}}"\n        class="wip-notification__content wip-notification__image" />\n      {{#segment.annotations}}\n      <img\n        sizes="65px"\n        srcset="{{segment.annotationSrcset}}"\n        src="{{segment.annotationUrl}}"\n        class="wip-notification__content wip-notification__annotation" />\n      {{/segment.annotations}}\n    </div>\n  </a>\n  {{/segment.is_expired}}\n  {{#segment.is_expired}}\n  <div class="activity-block wip-notification wip-notification--expired">\n    <div class="wip-notification__content">\n      {{>bestyleguide/_icons/_image}}\n    </div>\n  {{/segment.is_expired}}\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    auWA: function(e, t, a) {
        e.exports = a("ydjK")("auWA");
    },
    cWyr: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.s(i.f("collection", e, t, 1), e, t, 0, 15, 358, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.s(i.d("latest_projects.0", e, t, 1), e, t, 0, 42, 284, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                        i.b('      <a href="'), i.b(i.v(i.d("collection.url", e, t, 0))), i.b('">'), i.b("\n" + a), 
                        i.b('        <img alt="'), i.b(i.v(i.f("title", e, t, 0))), i.b('" title="'), i.b(i.v(i.f("title", e, t, 0))), 
                        i.b('" src="'), i.b(i.v(i.d("latest_projects.0.covers.115", e, t, 0))), i.b('" srcset="'), 
                        i.b(i.v(i.d("latest_projects.0.covers.115", e, t, 0))), i.b(", "), i.b(i.v(i.d("latest_projects.0.covers.202", e, t, 0))), 
                        i.b(' 2x" class="comment-image" />'), i.b("\n" + a), i.b("      </a>"), i.b("\n" + a);
                    })), e.pop()), i.b('  <div class="proposition-subject">'), i.b(i.v(i.f("title", e, t, 0))), 
                    i.b("</div>"), i.b("\n" + a);
                })), e.pop()), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#collection}}\n    {{#latest_projects.0}}\n      <a href="{{collection.url}}">\n        <img alt="{{title}}" title="{{title}}" src="{{latest_projects.0.covers.115}}" srcset="{{latest_projects.0.covers.115}}, {{latest_projects.0.covers.202}} 2x" class="comment-image" />\n      </a>\n    {{/latest_projects.0}}\n  <div class="proposition-subject">{{title}}</div>\n{{/collection}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    dAdk: function(e, t, a) {
        var i = a("6QaK"), n = {
            "bestyleguide/_icons/_image": a("FR8Z").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + a), 
                i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 48, 213, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_wipsegmentmention|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a> mentioned you in a Work in Progress");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.b('<div class="graphic">'), 
                i.b("\n" + a), i.s(i.d("segment.is_expired", e, t, 1), e, t, 1, 0, 0, "") || (i.b('  <a href="'), 
                i.b(i.v(i.d("actor.url", e, t, 0))), i.b("/workinprogress/"), i.b(i.v(i.d("segment.id", e, t, 0))), 
                i.b('">'), i.b("\n" + a), i.b('    <div class="activity-block wip-notification">'), 
                i.b("\n" + a), i.b("      <img"), i.b("\n" + a), i.b('        sizes="65px"'), i.b("\n" + a), 
                i.b('        srcset="'), i.b(i.v(i.d("segment.mediaSrcset", e, t, 0))), i.b('"'), 
                i.b("\n" + a), i.b('        src="'), i.b(i.v(i.d("segment.mediaUrl", e, t, 0))), 
                i.b('"'), i.b("\n" + a), i.b('        class="wip-notification__content wip-notification__image" />'), 
                i.b("\n" + a), i.s(i.d("segment.annotations", e, t, 1), e, t, 0, 597, 796, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b("      <img"), i.b("\n" + a), i.b('        sizes="65px"'), i.b("\n" + a), i.b('        srcset="'), 
                    i.b(i.v(i.d("segment.annotationSrcset", e, t, 0))), i.b('"'), i.b("\n" + a), i.b('        src="'), 
                    i.b(i.v(i.d("segment.annotationUrl", e, t, 0))), i.b('"'), i.b("\n" + a), i.b('        class="wip-notification__content wip-notification__annotation" />'), 
                    i.b("\n" + a);
                })), e.pop()), i.b("    </div>"), i.b("\n" + a), i.b("  </a>"), i.b("\n" + a)), 
                i.s(i.d("segment.is_expired", e, t, 1), e, t, 0, 890, 1060, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b('  <div class="activity-block wip-notification wip-notification--expired">'), 
                    i.b("\n" + a), i.b('    <div class="wip-notification__content">'), i.b("\n" + a), 
                    i.b(i.rp("<bestyleguide/_icons/_image0", e, t, "      ")), i.b("    </div>"), i.b("\n" + a);
                })), e.pop()), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_icons/_image0": {
                    name: "bestyleguide/_icons/_image",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_wipsegmentmention|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> mentioned you in a Work in Progress{{/translate}}\n</div>\n<div class="graphic">\n  {{^segment.is_expired}}\n  <a href="{{actor.url}}/workinprogress/{{segment.id}}">\n    <div class="activity-block wip-notification">\n      <img\n        sizes="65px"\n        srcset="{{segment.mediaSrcset}}"\n        src="{{segment.mediaUrl}}"\n        class="wip-notification__content wip-notification__image" />\n      {{#segment.annotations}}\n      <img\n        sizes="65px"\n        srcset="{{segment.annotationSrcset}}"\n        src="{{segment.annotationUrl}}"\n        class="wip-notification__content wip-notification__annotation" />\n      {{/segment.annotations}}\n    </div>\n  </a>\n  {{/segment.is_expired}}\n  {{#segment.is_expired}}\n  <div class="activity-block wip-notification wip-notification--expired">\n    <div class="wip-notification__content">\n      {{>bestyleguide/_icons/_image}}\n    </div>\n  {{/segment.is_expired}}\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    dwFx: function(e, t, a) {
        e.exports = a("ydjK")("dwFx");
    },
    fgby: function(e, t, a) {
        e.exports = a("ydjK")("fgby");
    },
    gaI4: function(e, t, a) {
        var i = a("mlPV");
        "string" == typeof i && (i = [ [ e.i, i, "" ] ]), i.locals && (e.exports = i.locals);
        (0, a("DtNa").default)("4e8fb61e", i, !0, {});
    },
    hbkF: function(e, t, a) {
        e.exports = a("ydjK")("hbkF");
    },
    k8DD: function(e, t, a) {
        "use strict";
        var i = a("K+aO"), n = Object(i.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 60 15.619"
                }
            }, [ t("path", {
                attrs: {
                    d: "M179.682,34.616l-.647,2a.145.145,0,0,1-.148.107h-1.564c-.094,0-.122-.053-.107-.132l2.7-7.78a2.513,2.513,0,0,0,.132-.823.089.089,0,0,1,.081-.094h2.157c.067,0,.094.013.108.081l3.06,8.629c.026.067.013.12-.067.12h-1.75a.132.132,0,0,1-.149-.094l-.688-2.009ZM182.3,32.93c-.264-.89-.808-2.522-1.058-3.479h-.013c-.216.9-.7,2.38-1.058,3.479Z",
                    transform: "translate(-153.778 -24.202)"
                }
            }), t("path", {
                attrs: {
                    d: "M241.14,28.636a3.573,3.573,0,0,1,3.91-3.541c.107,0,.242.015.444.028V22.46a.085.085,0,0,1,.094-.094h1.7c.067,0,.081.026.081.081v7.969a7.51,7.51,0,0,0,.054.984c0,.067-.013.094-.094.122a6.793,6.793,0,0,1-2.657.538A3.226,3.226,0,0,1,241.14,28.636Zm4.355-1.915a1.389,1.389,0,0,0-.5-.067,1.8,1.8,0,0,0-1.928,1.887,1.687,1.687,0,0,0,1.793,1.915,1.9,1.9,0,0,0,.633-.081Z",
                    transform: "translate(-209.252 -19.408)"
                }
            }), t("path", {
                attrs: {
                    d: "M303.016,46.411a3.328,3.328,0,1,1-6.646.041,3.3,3.3,0,0,1,3.356-3.492A3.212,3.212,0,0,1,303.016,46.411Zm-4.746.015c0,1.19.553,1.941,1.455,1.941.783,0,1.375-.674,1.375-1.915,0-1.058-.431-1.928-1.455-1.928C298.864,44.524,298.27,45.225,298.27,46.426Z",
                    transform: "translate(-257.179 -37.279)"
                }
            }), t("path", {
                attrs: {
                    d: "M356.658,22.37c.108,0,.132.013.132.108v2.764a4.3,4.3,0,0,1,1.135-.144,3.086,3.086,0,0,1,3.236,3.209,3.743,3.743,0,0,1-4.044,3.761A7.063,7.063,0,0,1,355,31.759a.156.156,0,0,1-.081-.132V22.464c0-.067.026-.094.094-.094Zm.926,4.314a2.71,2.71,0,0,0-.793.108v3.654a2.064,2.064,0,0,0,.5.054,1.856,1.856,0,0,0,1.954-2.023,1.58,1.58,0,0,0-1.656-1.792Z",
                    transform: "translate(-307.986 -19.412)"
                }
            }), t("path", {
                attrs: {
                    d: "M409.443,46.941c.067.768.607,1.4,1.928,1.4a4.176,4.176,0,0,0,1.658-.309c.041-.028.081-.013.081.067v1.28c0,.1-.026.132-.094.163a4.53,4.53,0,0,1-2.063.4,3.161,3.161,0,0,1-3.424-3.41,3.286,3.286,0,0,1,3.262-3.56,2.748,2.748,0,0,1,2.844,2.909,4.281,4.281,0,0,1-.067.9.114.114,0,0,1-.107.107,12.3,12.3,0,0,1-1.39.054Zm1.753-1.308a4.486,4.486,0,0,0,.674-.026v-.1a1.1,1.1,0,0,0-1.147-1.058,1.278,1.278,0,0,0-1.295,1.19Z",
                    transform: "translate(-353.639 -37.288)"
                }
            }), t("path", {
                attrs: {
                    d: "M84.13,0h6.523V15.619Z",
                    transform: "translate(-73.005)"
                }
            }), t("path", {
                attrs: {
                    d: "M6.529,0H0V15.619Z"
                }
            }), t("path", {
                attrs: {
                    d: "M48.032,43.53l4.156,9.862H49.465l-1.243-3.141H45.18Z",
                    transform: "translate(-39.205 -37.774)"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = n.exports;
    },
    mlPV: function(e, t, a) {
        (t = e.exports = a("RDo7")(!1)).push([ e.i, '.DownloadAppModal-header-1VQ{color:#191919;font-size:34px;font-weight:900}@media(max-width: 603px){.DownloadAppModal-header-1VQ{font-size:24px}}.DownloadAppModal-modal-3Fw{padding:0}@media(min-width: 604px)and (max-width: 1024px){.DownloadAppModal-modal-3Fw{padding-left:24px;padding-right:24px}}.DownloadAppModal-text-29h{color:dimgray;font-size:16px;margin-bottom:40px;margin-top:14px}.DownloadAppModal-imgContainer-2BW{background-image:url("https://a5.behance.net/f4269f28327d392d0d517fc059185758ab308ef2/img/profile/download-app-header.png");background-position:center;background-repeat:no-repeat;background-size:cover}@media(min-width: 604px){.DownloadAppModal-imgContainer-2BW{height:300px;width:100%}}@media only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx){.DownloadAppModal-imgContainer-2BW{background-image:url("https://a5.behance.net/f4269f28327d392d0d517fc059185758ab308ef2/img/profile/download-app-header@2x.png")}}@media(max-width: 603px){.DownloadAppModal-imgContainer-2BW{height:135px;margin:-15px -30px 0}}@media(min-width: 604px){.DownloadAppModal-content-2jB{padding:40px 73px}}@media(max-width: 603px){.DownloadAppModal-content-2jB{margin:30px -15px 0;padding:0}}.DownloadAppModal-downloadButtons-1bE{margin:25px 30px 0}@media(max-width: 603px){.DownloadAppModal-downloadButtons-1bE{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center}}.DownloadAppModal-downloadButton-3kz{background-repeat:no-repeat;display:inline-block;font-size:0;height:40px;line-height:40px;margin:0 5px;width:135px}@media(max-width: 603px){.DownloadAppModal-downloadButton-3kz{display:block;height:50px;line-height:50px;width:168px}}', "" ]), 
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
    nzp1: function(e, t, a) {
        (t = e.exports = a("RDo7")(!1)).push([ e.i, ".Tooltip-wrapper-1-L{align-self:flex-start;display:-webkit-inline-box;display:inline-flex;-webkit-box-pack:center;justify-content:center;margin-bottom:-6px;padding-bottom:6px;position:relative}@media(max-width: 921px){.Tooltip-wrapper-1-L:not(.Tooltip-responsive-62L) .Tooltip-container-16j{display:none}}.Tooltip-textWrapper-vZ2{display:block}.Tooltip-fullWidth-1Ia{width:100%}.Tooltip-trigger-jyf{display:-webkit-box;display:flex;max-width:100%;overflow:hidden;white-space:nowrap}.Tooltip-blockLayoutTrigger-2oH{display:block;height:100%;width:100%}.Tooltip-container-16j{background-color:#fff;border-radius:3px;color:#191919;-webkit-filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));position:absolute;will-change:transform;z-index:100}.Tooltip-blackTooltip-aDH .Tooltip-container-16j{background:#191919;color:#fff}.Tooltip-blueTooltip-1Fn .Tooltip-container-16j{background:#0057ff;color:#fff}.Tooltip-container-16j:not(.Tooltip-fullWidth-1Ia){display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.Tooltip-container-16j .Tooltip-triangleContainer-3M8{position:absolute}.Tooltip-container-16j .Tooltip-mask-34T{background:#fff;height:6px;left:-2px;position:relative;width:16px}.Tooltip-blackTooltip-aDH .Tooltip-container-16j .Tooltip-mask-34T{background:#191919}.Tooltip-blueTooltip-1Fn .Tooltip-container-16j .Tooltip-mask-34T{background:#0057ff}.Tooltip-container-16j.Tooltip-right-1D-{right:calc(100% + 7px)}.Tooltip-container-16j.Tooltip-position-left-1qO{right:0;top:0}.Tooltip-container-16j.Tooltip-position-left-1qO .Tooltip-triangleContainer-3M8{right:-11px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.Tooltip-container-16j.Tooltip-position-left-1qO .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-right-color:#fff;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.Tooltip-blackTooltip-aDH .Tooltip-container-16j.Tooltip-position-left-1qO .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-right-color:#191919}.Tooltip-blueTooltip-1Fn .Tooltip-container-16j.Tooltip-position-left-1qO .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-right-color:#0057ff}.Tooltip-container-16j.Tooltip-position-left-1qO .Tooltip-mask-34T{top:-6px}.Tooltip-container-16j.Tooltip-position-top-XKQ .Tooltip-triangleContainer-3M8{bottom:-6px;-webkit-transform:initial;transform:initial}.Tooltip-container-16j.Tooltip-position-top-XKQ .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-top-color:#fff;-webkit-transform:initial;transform:initial}.Tooltip-blackTooltip-aDH .Tooltip-container-16j.Tooltip-position-top-XKQ .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-top-color:#191919}.Tooltip-blueTooltip-1Fn .Tooltip-container-16j.Tooltip-position-top-XKQ .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-top-color:#0057ff}.Tooltip-container-16j.Tooltip-position-top-XKQ .Tooltip-mask-34T{top:-6px}.Tooltip-container-16j.Tooltip-position-center-2Ce{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-top:-3px}.Tooltip-container-16j.Tooltip-position-center-2Ce.Tooltip-right-1D- .Tooltip-triangleContainer-3M8{margin-top:-6px;right:0;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.Tooltip-container-16j.Tooltip-position-center-2Ce.Tooltip-right-1D- .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-top-color:#fff;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.Tooltip-blackTooltip-aDH .Tooltip-container-16j.Tooltip-position-center-2Ce.Tooltip-right-1D- .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-top-color:#191919}.Tooltip-blueTooltip-1Fn .Tooltip-container-16j.Tooltip-position-center-2Ce.Tooltip-right-1D- .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-top-color:#0057ff}.Tooltip-container-16j.Tooltip-position-center-2Ce.Tooltip-right-1D- .Tooltip-mask-34T{display:none}.Tooltip-container-16j.Tooltip-position-bottom-3Xy .Tooltip-triangleContainer-3M8{top:-12px;-webkit-transform:initial;transform:initial}.Tooltip-container-16j.Tooltip-position-bottom-3Xy .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-bottom-color:#fff;-webkit-transform:initial;transform:initial}.Tooltip-blackTooltip-aDH .Tooltip-container-16j.Tooltip-position-bottom-3Xy .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-bottom-color:#191919}.Tooltip-blueTooltip-1Fn .Tooltip-container-16j.Tooltip-position-bottom-3Xy .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-bottom-color:#0057ff}.Tooltip-container-16j.Tooltip-position-bottom-3Xy .Tooltip-mask-34T{top:12px}.Tooltip-container-16j.Tooltip-position-right-3tL{top:-5px}.Tooltip-container-16j.Tooltip-position-right-3tL .Tooltip-triangleContainer-3M8{left:-10px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.Tooltip-container-16j.Tooltip-position-right-3tL .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-right-color:#fff;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.Tooltip-blackTooltip-aDH .Tooltip-container-16j.Tooltip-position-right-3tL .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-right-color:#191919}.Tooltip-blueTooltip-1Fn .Tooltip-container-16j.Tooltip-position-right-3tL .Tooltip-triangle-TU6{border-color:transparent;border-style:solid;border-width:7px;height:0;position:absolute;width:0;border-right-color:#0057ff}.Tooltip-container-16j.Tooltip-position-right-3tL .Tooltip-mask-34T{bottom:6px}.Tooltip-closeIconWrapper-3gu{position:absolute;right:8px;top:8px}.Tooltip-closeIcon-v4J{fill:#959595;width:10px}.Tooltip-closeIcon-v4J:hover{fill:dimgray}", "" ]), 
        t.locals = {
            wrapper: "Tooltip-wrapper-1-L",
            responsive: "Tooltip-responsive-62L",
            container: "Tooltip-container-16j",
            textWrapper: "Tooltip-textWrapper-vZ2",
            fullWidth: "Tooltip-fullWidth-1Ia",
            trigger: "Tooltip-trigger-jyf",
            blockLayoutTrigger: "Tooltip-blockLayoutTrigger-2oH",
            blackTooltip: "Tooltip-blackTooltip-aDH",
            blueTooltip: "Tooltip-blueTooltip-1Fn",
            triangleContainer: "Tooltip-triangleContainer-3M8",
            mask: "Tooltip-mask-34T",
            right: "Tooltip-right-1D-",
            "position-left": "Tooltip-position-left-1qO",
            triangle: "Tooltip-triangle-TU6",
            "position-top": "Tooltip-position-top-XKQ",
            "position-center": "Tooltip-position-center-2Ce",
            "position-bottom": "Tooltip-position-bottom-3Xy",
            "position-right": "Tooltip-position-right-3tL",
            closeIconWrapper: "Tooltip-closeIconWrapper-3gu",
            closeIcon: "Tooltip-closeIcon-v4J"
        };
    },
    o72u: function(e, t, a) {
        "use strict";
        var i = a("K+aO"), n = Object(i.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    viewBox: "0 0 18 18",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [ t("path", {
                attrs: {
                    d: "M9,10.094l9-6.7615v-.75A.5735.5735,0,0,0,17.4375,2H.5625A.57351.57351,0,0,0,0,2.5835V3.318Z"
                }
            }), t("polygon", {
                attrs: {
                    points: "12.389 8.981 18 13.184 18 6.667 18 4.771"
                }
            }), t("path", {
                attrs: {
                    d: "M11.433,9.7,9.645,11.047a1.086,1.086,0,0,1-1.29,0L6.541,9.6875,0,14.534v.883A.573.573,0,0,0,.5625,16h16.875A.573.573,0,0,0,18,15.417v-.795Z"
                }
            }), t("polygon", {
                attrs: {
                    points: "5.582 8.969 0 4.756 0 6.667 0 13.097"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = n.exports;
    },
    p3jP: function(e, t, a) {
        (t = e.exports = a("RDo7")(!1)).push([ e.i, ".MessageBanner-communitySupport-275{-webkit-box-align:center;align-items:center;background-color:#fff;border-bottom:1px solid #e1e1e1;display:-webkit-box;display:flex;font-size:13px;font-weight:bold;height:35px;-webkit-box-pack:center;justify-content:center;position:fixed;top:0;width:100%;z-index:7}@media(max-width: 1024px){.MessageBanner-communitySupport-275{display:none}}.MessageBanner-communitySupport-275 .focus-visible{outline:2px solid #0057ff}.MessageBanner-communitySupport-275 .MessageBanner-close-1Oy{cursor:pointer;position:absolute;right:8px}.MessageBanner-communitySupport-275 .MessageBanner-icon-3nR{display:block;fill:#707070;height:8.6px;width:8.6px}.MessageBanner-communitySupport-275 .MessageBanner-icon-3nR:hover{fill:#191919}@media(min-width: 1025px){.has-message #top-panel{padding-top:92px}}@media(min-width: 1025px){.has-message .rf-primary-nav.rf-primary-nav--main{top:35px}}@media(min-width: 1025px)and (max-width: 1080px){.has-message .rf-primary-nav--mobile{top:35px}}", "" ]), 
        t.locals = {
            communitySupport: "MessageBanner-communitySupport-275",
            close: "MessageBanner-close-1Oy",
            icon: "MessageBanner-icon-3nR"
        };
    },
    pTUv: function(e, t, a) {
        "use strict";
        var i = a("xeH2"), n = a.n(i), r = {}, o = {};
        function s(e) {
            return "window" === e ? n()(window) : n()(e);
        }
        function l(e, t) {
            if (!t) return e;
            if ("string" != typeof t || "string" != typeof e) throw new Error("context and contentContext must both be strings if contentContext is provided.");
            return e + "|" + t;
        }
        function c(e, t) {
            var a = e.is(n()(window)) ? window.innerHeight : e.prop("clientHeight");
            return (function(e, t) {
                var a;
                return t.is(n()(window)) ? n()(document).height() : t !== e ? (a = e.is(n()(window)) ? 0 : e.offset().top, 
                t.height() + t.offset().top - a) : e.prop("scrollHeight");
            }(e, t) - a - e.scrollTop()) / a;
        }
        function d(e, t, a, i) {
            "function" == typeof e && (i = a, a = t, t = e, e = 1), a = a || "window", e = Number(e).toString();
            var d = s(a), p = l(a, i);
            o[p] || (o[p] = {}, r[p] = function(e, t) {
                var a = s(e), i = t ? n()(t) : a, r = l(e, t), d = "window" === e ? n()("html,body") : a;
                return function() {
                    var e = d.toArray().every((function(e) {
                        return "hidden" !== n()(e).css("overflowY");
                    })), t = c(a, i);
                    for (var s in o[r]) t <= Number(s) && e && o[r][s].wrapped.forEach((function(e) {
                        e();
                    }));
                };
            }(a, i), d.on("scroll", r[p]));
            var u = o[p][e];
            u || (u = o[p][e] = {
                wrapped: [],
                original: []
            }), u.original.push(t), u.wrapped.push((function e() {
                if (!e.blocking) {
                    e.blocking = !0;
                    var a = t.apply(null, arguments);
                    a && "function" == typeof a.then ? a.then((function() {
                        e.blocking = !1, r[p]();
                    })) : e.blocking = !1;
                }
            })), r[p]();
        }
        d.on = d, d.off = function(e, t, a) {
            var i, n, c, d = s(t = t || "window"), p = l(t, a);
            if (o[p]) {
                for (i in o[p]) ~(c = (n = o[p][i]).original.indexOf(e)) && (n.original.splice(c, 1), 
                n.wrapped.splice(c, 1), n.original.length || delete o[p][i]);
                Object.keys(o[p]).length || (d.off("scroll", r[p]), delete o[p]);
            }
        }, d.check = function(e, t) {
            var a = l(e || "window", t);
            r[a]();
        }, t.a = d;
    },
    pspQ: function(e, t, a) {
        var i = a("6QaK"), n = {
            "notifications/_userProjects": a("RcWU").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg">'), i.b("\n" + a), i.s(i.f("translate", e, t, 1), e, t, 0, 32, 221, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b("notifications_added_search|"), a.b(a.v(a.d("actor.display_name", e, t, 0))), 
                    a.b(' added <a href="'), a.b(a.v(a.d("user.url", e, t, 0))), a.b('">'), a.b(a.v(a.d("user.display_name", e, t, 0))), 
                    a.b('</a> to your &ldquo;<a href="'), a.b(a.v(a.d("job._links.recruiter", e, t, 0))), 
                    a.b('"</a>'), a.b(a.v(a.d("job.title", e, t, 0))), a.b("</a>&rdquo; search");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.s(i.d("user.latest_projects.0", e, t, 1), e, t, 0, 270, 325, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.s(a.f("user", e, t, 1), e, t, 0, 280, 315, "{{ }}") && (a.rs(e, t, (function(e, t, a) {
                        a.b(a.rp("<notifications/_userProjects0", e, t, ""));
                    })), e.pop());
                })), e.pop()), i.fl();
            },
            partials: {
                "<notifications/_userProjects0": {
                    name: "notifications/_userProjects",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg">\n{{#translate}}notifications_added_search|{{actor.display_name}} added <a href="{{user.url}}">{{user.display_name}}</a> to your &ldquo;<a href="{{job._links.recruiter}}"</a>{{job.title}}</a>&rdquo; search{{/translate}}\n</div>\n{{#user.latest_projects.0}}\n{{#user}}\n{{> notifications/_userProjects}}\n{{/user}}\n{{/user.latest_projects.0}}\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    qa4g: function(e, t, a) {
        var i = a("FA4o");
        "string" == typeof i && (i = [ [ e.i, i, "" ] ]), i.locals && (e.exports = i.locals);
        (0, a("DtNa").default)("90a802da", i, !0, {});
    },
    qgDP: function(e, t, a) {
        var i = a("WK3d");
        "string" == typeof i && (i = [ [ e.i, i, "" ] ]), i.locals && (e.exports = i.locals);
        (0, a("DtNa").default)("0364241c", i, !0, {});
    },
    rF8O: function(e, t, a) {
        "use strict";
        var i, n, r = a("D57K"), o = a("mGku"), s = a("sEgD"), l = a("adMq"), c = a("PJd8"), d = a("LSlr");
        !function(e) {
            e.None = "none", e.Click = "click", e.Hover = "hover";
        }(i || (i = {})), function(e) {
            e.Right = "right", e.Left = "left", e.Top = "top", e.Bottom = "bottom", e.Center = "center";
        }(n || (n = {}));
        var p = o.default.extend({
            name: "Tooltip",
            components: {
                CloseIcon: d.default,
                Fade: l.a,
                FadeDown: c.a
            },
            props: {
                alignment: {
                    type: String,
                    default: "center",
                    validator: function(e) {
                        return [ "left", "center", "right", "top" ].includes(e);
                    }
                },
                colorScheme: {
                    type: String,
                    validator: function(e) {
                        return [ "black", "blue" ].includes(e);
                    }
                },
                position: {
                    type: String,
                    default: "top",
                    validator: function(e) {
                        return Object.values(n).includes(e);
                    }
                },
                toggleMethod: {
                    type: String,
                    default: "hover",
                    validator: function(e) {
                        return Object.values(i).includes(e);
                    }
                },
                alignmentOffset: {
                    type: Number,
                    default: 0
                },
                horizontalPadding: {
                    type: Number,
                    default: 10
                },
                verticalPadding: {
                    type: Number,
                    default: 10
                },
                distance: {
                    type: Number,
                    default: 5
                },
                triangleDistance: {
                    type: Number,
                    default: 10
                },
                isOpen: {
                    type: Boolean
                },
                isResponsive: {
                    type: Boolean
                },
                hasTextTrigger: {
                    type: Boolean
                },
                canTruncateTrigger: {
                    type: Boolean
                },
                triggerHasBlockLayout: {
                    type: Boolean
                },
                hasTriangle: {
                    type: Boolean,
                    default: !0
                },
                isCloseable: {
                    type: Boolean,
                    default: !1
                },
                isOpenable: {
                    type: Boolean,
                    default: !0
                },
                isFullWidth: {
                    type: Boolean
                },
                customContainerClass: {
                    type: String
                },
                animation: {
                    type: String,
                    default: "fade",
                    validator: function(e) {
                        return [ "fade", "fadedown" ].includes(e);
                    }
                }
            },
            data: function() {
                return {
                    toggleMethods: i,
                    isCurrentlyOpen: this.isOpen
                };
            },
            watch: {
                isOpen: function(e) {
                    this.isCurrentlyOpen = e;
                }
            },
            computed: {
                animatableComponent: function() {
                    return "fadedown" === this.animation ? c.a : l.a;
                },
                shouldAlign: function() {
                    if ("center" !== this.alignment) return !0;
                },
                containerStyles: function() {
                    var e, t, a = {
                        cursor: this.toggleMethod === i.Click ? "pointer" : "initial",
                        paddingTop: this.verticalPadding + "px",
                        paddingBottom: this.verticalPadding + "px",
                        paddingRight: this.horizontalPadding + "px",
                        paddingLeft: this.horizontalPadding + "px"
                    }, r = this.position;
                    if (r === n.Center) return a;
                    var o = ((e = {})[n.Top] = "6px", e[n.Bottom] = "0px", e[n.Right] = "0px", e[n.Left] = "0px", 
                    e), s = ((t = {})[n.Top] = n.Bottom, t[n.Bottom] = n.Top, t[n.Right] = n.Left, t[n.Left] = n.Right, 
                    t), l = o[r];
                    return a[s[r]] = "calc(100% + " + this.distance + "px + " + l + ")", this.shouldAlign && (a[this.alignment] = this.alignmentOffset + "px"), 
                    a;
                },
                triangleStyles: function() {
                    var e = {};
                    return this.shouldAlign && (e[this.alignment] = this.triangleDistance + "px"), e;
                }
            },
            methods: {
                ifToggleMethod: function(e, t) {
                    e === this.toggleMethod && t();
                },
                ifNotToggleMethod: function(e, t) {
                    e !== this.toggleMethod && t();
                },
                toggleOpen: function() {
                    this.isCurrentlyOpen ? this.close() : this.open();
                },
                open: function() {
                    this.isOpenable && (this.isCurrentlyOpen = !0, this.$emit("didOpen"));
                },
                close: function() {
                    this.isCurrentlyOpen = !1, this.$emit("didClose");
                }
            },
            beforeCreate: function() {
                var e;
                if (this.$slots.default && this.$slots.default[0]) {
                    var t = this.$slots.default[0], a = (null === (e = null == t ? void 0 : t.data) || void 0 === e ? void 0 : e.attrs) || {};
                    t.data = Object(r.__assign)(Object(r.__assign)({}, t.data), {
                        attrs: Object(r.__assign)(Object(r.__assign)({}, a), {
                            tabindex: 0
                        })
                    });
                }
            },
            mounted: function() {
                var e = this;
                this.$el.querySelectorAll(s.focusableSelectors).forEach((function(t) {
                    e.toggleMethod !== i.None && (t.addEventListener("focus", e.open), t.addEventListener("blur", e.close));
                }));
            },
            beforeDestroy: function() {
                var e = this;
                this.$el.querySelectorAll(s.focusableSelectors).forEach((function(t) {
                    e.toggleMethod !== i.None && (t.removeEventListener("focus", e.open), t.removeEventListener("blur", e.close));
                }));
            }
        }), u = a("9yXK"), b = a("K+aO");
        var m = Object(b.default)(p, (function() {
            var e, t, a, i, n = this, r = n.$createElement, o = n._self._c || r;
            return o("div", {
                ref: "root",
                class: [ n.$style.wrapper, (e = {}, e[n.$style.responsive] = n.isResponsive, e), (t = {}, 
                t[n.$style.textWrapper] = n.hasTextTrigger, t), n.$style[n.colorScheme + "Tooltip"] ],
                style: {
                    cursor: n.isOpenable ? "pointer" : "auto"
                },
                on: {
                    mouseenter: function(e) {
                        return n.ifToggleMethod(n.toggleMethods.Hover, n.open);
                    },
                    mouseleave: function(e) {
                        return n.ifToggleMethod(n.toggleMethods.Hover, n.close);
                    },
                    keypress: function(e) {
                        return !e.type.indexOf("key") && n._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : n.ifNotToggleMethod(n.toggleMethods.None, n.open);
                    },
                    "!blur": function(e) {
                        return n.ifNotToggleMethod(n.toggleMethods.None, n.close);
                    }
                }
            }, [ o("span", {
                ref: "trigger",
                class: (a = {}, a[n.$style.trigger] = n.canTruncateTrigger, a[n.$style.blockLayoutTrigger] = n.triggerHasBlockLayout, 
                a),
                on: {
                    touchend: function(e) {
                        return n.ifToggleMethod(n.toggleMethods.Hover, n.toggleOpen);
                    },
                    click: function(e) {
                        return n.ifToggleMethod(n.toggleMethods.Click, n.toggleOpen);
                    }
                }
            }, [ n._t("default") ], 2), o(n.animatableComponent, {
                tag: "component"
            }, [ o("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: n.isCurrentlyOpen,
                    expression: "isCurrentlyOpen"
                } ],
                ref: "tooltip",
                class: [ n.$style.container, n.$style["position-" + n.position], n.$style[n.alignment], (i = {}, 
                i[n.$style.fullWidth] = n.isFullWidth, i), n.customContainerClass ],
                style: n.containerStyles,
                on: {
                    mouseleave: function(e) {
                        return n.ifToggleMethod(n.toggleMethods.Click, n.close);
                    }
                }
            }, [ n.hasTriangle ? o("div", {
                ref: "triangle",
                class: n.$style.triangleContainer,
                style: n.triangleStyles
            }, [ o("div", {
                class: n.$style.triangle
            }), o("div", {
                class: n.$style.mask
            }) ]) : n._e(), n._t("tooltipContent"), n.isCloseable ? o("span", {
                ref: "closeButton",
                class: n.$style.closeIconWrapper,
                on: {
                    touchend: function(e) {
                        n.ifToggleMethod(n.toggleMethods.Hover, n.close), n.$emit("closeButtonClicked");
                    },
                    click: function(e) {
                        n.ifToggleMethod(n.toggleMethods.Click, n.close), n.$emit("closeButtonClicked");
                    }
                }
            }, [ o("CloseIcon", {
                class: n.$style.closeIcon
            }) ], 1) : n._e() ], 2) ]) ], 1);
        }), [], !1, (function(e) {
            this.$style = u.default.locals || u.default;
        }), null, null);
        t.a = m.exports;
    },
    sEgD: function(e, t, a) {
        e.exports = a("ydjK")("sEgD");
    },
    sKsC: function(e, t, a) {
        var i = a("6QaK"), n = {
            "bestyleguide/_avatar": a("1hEZ").template
        }, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="notification-group'), i.s(i.f("read_on", e, t, 1), e, t, 1, 0, 0, "") || i.b(" unread"), 
                i.b('">'), i.b("\n" + a), i.b('  <div class="notification-container">'), i.b("\n" + a), 
                i.s(i.f("data", e, t, 1), e, t, 0, 114, 745, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.s(i.f("actor", e, t, 1), e, t, 0, 129, 454, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                        a.b(a.rp("<bestyleguide/_avatar0", e, t, ""));
                    })), e.pop()), i.s(i.f("actor", e, t, 1), e, t, 1, 0, 0, "") || i.b(i.rp("<bestyleguide/_avatar1", e, t, "")), 
                    i.b('    <div class="detail beside-avatar">'), i.b("\n" + a), i.b(i.rp("<innard2", e, t, "      ")), 
                    i.b('      <div class="time">'), i.b(i.v(i.f("time_ago", e, t, 0))), i.b("</div>"), 
                    i.b("\n" + a), i.b("    </div>"), i.b("\n" + a);
                })), e.pop()), i.b("  </div>"), i.b("\n" + a), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_avatar0": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        avatarClasses: function(e, t, a, i) {
                            a.b("js-mini-profile");
                        },
                        avatarId: function(e, t, a, i) {
                            a.b(a.v(a.d("actor.id", e, t, 0)));
                        },
                        avatarUrl: function(e, t, a, i) {
                            a.b(a.v(a.d("actor.url", e, t, 0)));
                        },
                        src: function(e, t, a, i) {
                            a.b(a.v(a.d("actor.images.50", e, t, 0)));
                        },
                        srcLarge: function(e, t, a, i) {
                            a.b(a.v(a.d("actor.images.115", e, t, 0)));
                        }
                    }
                },
                "<bestyleguide/_avatar1": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        src: function(e, t, a, i) {
                            a.b(a.v(a.f("assetsurl", e, t, 0))), a.b("img/notifications/behance-icon.jpg");
                        }
                    }
                },
                "<innard2": {
                    name: "innard",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="notification-group{{^read_on}} unread{{/read_on}}">\n  <div class="notification-container">\n  {{#data}}\n    {{#actor}}\n      {{<bestyleguide/_avatar}}\n        {{$avatarClasses}}js-mini-profile{{/avatarClasses}}\n        {{$avatarId}}{{actor.id}}{{/avatarId}}\n        {{$avatarUrl}}{{actor.url}}{{/avatarUrl}}\n        {{$src}}{{actor.images.50}}{{/src}}\n        {{$srcLarge}}{{actor.images.115}}{{/srcLarge}}\n      {{/bestyleguide/_avatar}}\n    {{/actor}}\n    {{^actor}}\n      {{<bestyleguide/_avatar}}\n        {{$src}}{{assetsurl}}img/notifications/behance-icon.jpg{{/src}}\n      {{/bestyleguide/_avatar}}\n    {{/actor}}\n    <div class="detail beside-avatar">\n      {{> innard}}\n      <div class="time">{{time_ago}}</div>\n    </div>\n  {{/data}}\n  </div>\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    sLYF: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="notification-group'), i.s(i.f("any_unread", e, t, 1), e, t, 0, 45, 52, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b(" unread");
                })), e.pop()), i.b('">'), i.b("\n" + a), i.b('  <div class="js-context"></div>'), 
                i.b("\n" + a), i.b('  <div class="js-more notification-group-more">'), i.s(i.f("translate", e, t, 1), e, t, 0, 164, 240, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_group_more_updates|+ <span class="count">0</span> More Updates');
                })), e.pop()), i.b("</div>"), i.b("\n" + a), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="notification-group{{#any_unread}} unread{{/any_unread}}">\n  <div class="js-context"></div>\n  <div class="js-more notification-group-more">{{#translate}}notifications_group_more_updates|+ <span class="count">0</span> More Updates{{/translate}}</div>\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    tva8: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + a), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 46, 218, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_saved|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), a.b('" class="js-mini-profile" data-id="'), 
                    a.b(a.v(a.d("actor.id", e, t, 0))), a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), 
                    a.b('</a> saved "<a href="'), a.b(a.v(a.d("project.url", e, t, 0))), a.b('">'), 
                    a.b(a.v(a.d("project.name", e, t, 0))), a.b('</a>"');
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n" + a), i.b('<a href="'), i.b(i.v(i.d("collection.url", e, t, 0))), 
                i.b('" class="graphic">'), i.b("\n" + a), i.b('  <div class="activity-block project-collection">'), 
                i.b("\n"), i.b("\n" + a), i.s(i.d("collection.latest_projects", e, t, 1), e, t, 0, 372, 609, "{{ }}") && (i.rs(e, t, (function(e, t, i) {
                    i.b('      <div class="collection-project-image-wrap">'), i.b("\n" + a), i.b('        <img alt="'), 
                    i.b(i.v(i.d("collection.title", e, t, 0))), i.b('" title="'), i.b(i.v(i.d("collection.title", e, t, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("covers.115", e, t, 0))), i.b('" srcset="'), i.b(i.v(i.d("covers.115", e, t, 0))), 
                    i.b(", "), i.b(i.v(i.d("covers.202", e, t, 0))), i.b(' 2x" class="collection-project-image" />'), 
                    i.b("\n" + a), i.b("      </div>"), i.b("\n" + a);
                })), e.pop()), i.b('    <div class="collection-title">'), i.b("\n" + a), i.b('      <span class="collection-title-text beicons-pre beicons-pre-collection">'), 
                i.b(i.v(i.d("collection.title", e, t, 0))), i.b("</span>"), i.b("\n" + a), i.b("    </div>"), 
                i.b("\n" + a), i.b("  </div>"), i.b("\n" + a), i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg extra-padding">\n{{#translate}}notifications_saved|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> saved "<a href="{{project.url}}">{{project.name}}</a>"{{/translate}}\n</div>\n<a href="{{collection.url}}" class="graphic">\n  <div class="activity-block project-collection">\n\n    {{#collection.latest_projects}}\n      <div class="collection-project-image-wrap">\n        <img alt="{{collection.title}}" title="{{collection.title}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="collection-project-image" />\n      </div>\n    {{/collection.latest_projects}}\n    <div class="collection-title">\n      <span class="collection-title-text beicons-pre beicons-pre-collection">{{collection.title}}</span>\n    </div>\n  </div>\n</a>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    tvyt: function(e, t, a) {
        "use strict";
        var i = a("7Wgy"), n = a.n(i);
        t.default = n.a;
    },
    uSKH: function(e, t, a) {
        (t = e.exports = a("RDo7")(!1)).push([ e.i, ".SearchTypeahead-searchContainer-175{position:relative;width:100%}@media(max-width: 603px){.SearchTypeahead-searchContainer-175.SearchTypeahead-isSubmittable-3kE:focus-within{background:#fff;bottom:0;display:-webkit-box;display:flex;left:0;padding:24px 24px 0;position:fixed;right:0;top:55px;z-index:1}.SearchTypeahead-searchContainer-175.SearchTypeahead-isSubmittable-3kE:focus-within .SearchTypeahead-suggestions-2lD{box-shadow:none;padding-top:0;top:90px}}.SearchTypeahead-searchContainer-175 .SearchTypeahead-searchInput-1qk.focus-visible{outline:none}.SearchTypeahead-searchInputWrap-3Hg{background-color:#f9f9f9;border:1px solid #ccc;border-radius:50px;display:-webkit-box;display:flex;height:32px;width:100%}@media(min-width: 922px){.SearchTypeahead-searchInputWrap-3Hg{-webkit-transition:background-color .15s linear,border-color .15s linear;transition:background-color .15s linear,border-color .15s linear}}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchInputWrap-3Hg{border:1px solid transparent;height:50px}@media(min-width: 922px){.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchInputWrap-3Hg{border-bottom-right-radius:0;border-top-right-radius:0}}@media(max-width: 603px){.SearchTypeahead-isSubmittable-3kE:focus-within .SearchTypeahead-searchInputWrap-3Hg{background:transparent;border-color:#ccc;height:52px;padding-left:1px}}@media(min-width: 922px){.SearchTypeahead-isTypeaheadEnabled-3i3 .SearchTypeahead-searchInputWrap-3Hg{z-index:1}}.SearchTypeahead-suggestions-2lD{background-color:#fff;border-radius:15px;box-shadow:0 0 5px rgba(0,0,0,.15);left:0;padding:50px 0 20px;position:absolute;right:0;top:0;will-change:transform}@media(min-width: 922px){.SearchTypeahead-suggestions-2lD{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}}.SearchTypeahead-searchContainer-175:not(:focus-within) .SearchTypeahead-suggestions-2lD{opacity:0;pointer-events:none}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-suggestions-2lD{border-top-right-radius:0;left:-1px;padding-top:65px;right:-1px;top:-1px}.SearchTypeahead-suggestion-3yd .SearchTypeahead-suggestionLink-1_7,.SearchTypeahead-suggestion-3yd .SearchTypeahead-suggestionLabel-1zL,.SearchTypeahead-suggestionHeading-16o .SearchTypeahead-suggestionLink-1_7,.SearchTypeahead-suggestionHeading-16o .SearchTypeahead-suggestionLabel-1zL{padding-left:36px;padding-right:36px}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-suggestion-3yd .SearchTypeahead-suggestionLink-1_7,.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-suggestion-3yd .SearchTypeahead-suggestionLabel-1zL,.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-suggestionHeading-16o .SearchTypeahead-suggestionLink-1_7,.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-suggestionHeading-16o .SearchTypeahead-suggestionLabel-1zL{padding-left:51px;padding-right:51px}@media(max-width: 603px){.SearchTypeahead-isSubmittable-3kE:focus-within .SearchTypeahead-suggestion-3yd .SearchTypeahead-suggestionLink-1_7,.SearchTypeahead-isSubmittable-3kE:focus-within .SearchTypeahead-suggestion-3yd .SearchTypeahead-suggestionLabel-1zL,.SearchTypeahead-isSubmittable-3kE:focus-within .SearchTypeahead-suggestionHeading-16o .SearchTypeahead-suggestionLink-1_7,.SearchTypeahead-isSubmittable-3kE:focus-within .SearchTypeahead-suggestionHeading-16o .SearchTypeahead-suggestionLabel-1zL{padding-left:71px;padding-right:71px}}.SearchTypeahead-suggestionLabel-1zL{color:#959595;font-size:12px;font-weight:bold;margin-bottom:8px;text-transform:uppercase}.SearchTypeahead-suggestion-3yd{cursor:pointer;font-size:20px;font-weight:bold}@media(min-width: 1080px)and (max-width: 1180px){.SearchTypeahead-suggestion-3yd{font-size:15px}}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-suggestion-3yd{font-size:22px}@media(max-width: 603px){.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-suggestion-3yd{font-size:18px}}.SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM:not(:hover),.SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM:not(:focus-within){color:#959595}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM:not(:hover),.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM:not(:focus-within){color:dimgray}.SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM:not(:hover) .SearchTypeahead-emphasis-3Ct,.SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM:not(:focus-within) .SearchTypeahead-emphasis-3Ct{color:#191919}.SearchTypeahead-suggestionLink-1_7{color:inherit;display:block;padding-bottom:5px;padding-top:5px}.SearchTypeahead-suggestionLink-1_7:hover{text-decoration:none}.SearchTypeahead-suggestion-3yd:focus-within .focus-visible,.SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM:focus-within .focus-visible{outline:none}.SearchTypeahead-suggestion-3yd:hover,.SearchTypeahead-suggestion-3yd:focus-within,.SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM:hover,.SearchTypeahead-suggestion-3yd.SearchTypeahead-result-2LM:focus-within{background-color:#f9f9f9}.SearchTypeahead-mobileCloseButton-OkE.SearchTypeahead-mobileCloseButton-OkE{display:none;pointer-events:none}@media(max-width: 603px){.SearchTypeahead-isSubmittable-3kE:focus-within .SearchTypeahead-mobileCloseButton-OkE.SearchTypeahead-mobileCloseButton-OkE{display:block;height:50px;z-index:1}}.SearchTypeahead-closeButton-7vz{-webkit-box-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:flex;height:100%;-webkit-box-pack:center;justify-content:center;position:absolute;right:0;top:0;width:50px}.SearchTypeahead-closeButton-7vz .SearchTypeahead-icon-20K{fill:dimgray;height:15px;width:15px}@media(max-width: 603px){.SearchTypeahead-closeButton-7vz{display:none}}.SearchTypeahead-searchForm-20c{-webkit-box-flex:1;flex:1;margin-right:10px;position:relative;z-index:1}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchForm-20c{margin-right:0}.SearchTypeahead-searchInput-1qk{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none;color:#191919;font-size:15px;font-weight:600;height:100%;margin-top:-1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.SearchTypeahead-searchInput-1qk::-webkit-input-placeholder{color:#959595;font-weight:normal}.SearchTypeahead-searchInput-1qk::-moz-placeholder{color:#959595;font-weight:normal}.SearchTypeahead-searchInput-1qk:-ms-input-placeholder{color:#959595;font-weight:normal}.SearchTypeahead-searchInput-1qk::-ms-input-placeholder{color:#959595;font-weight:normal}.SearchTypeahead-searchInput-1qk::placeholder{color:#959595;font-weight:normal}.SearchTypeahead-searchInput-1qk::-webkit-search-cancel-button{display:none}.SearchTypeahead-searchInput-1qk::-webkit-search-decoration{display:none}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchInput-1qk{font-size:22px;font-weight:800}@media(max-width: 603px){.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchInput-1qk{font-size:18px}}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchInput-1qk::-webkit-input-placeholder{color:dimgray;font-weight:bold}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchInput-1qk::-moz-placeholder{color:dimgray;font-weight:bold}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchInput-1qk:-ms-input-placeholder{color:dimgray;font-weight:bold}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchInput-1qk::-ms-input-placeholder{color:dimgray;font-weight:bold}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchInput-1qk::placeholder{color:dimgray;font-weight:bold}@media(max-width: 603px){.SearchTypeahead-searchInput-1qk{padding-right:10px}}.SearchTypeahead-searchIcon-1ld{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;width:36px;z-index:1}.SearchTypeahead-searchIcon-1ld .SearchTypeahead-icon-20K{fill:#959595;height:18px;margin-left:4px;margin-top:-3px;width:18px}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchIcon-1ld{width:50px}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-searchIcon-1ld .SearchTypeahead-icon-20K{fill:dimgray;height:23px;width:23px}.SearchTypeahead-spinnerWrapper-1ws{position:absolute;right:9px;top:6px}.SearchTypeahead-isSubmittable-3kE .SearchTypeahead-spinnerWrapper-1ws{right:17px;top:15px}.SearchTypeahead-spinner-1VD{height:17px;width:17px}", "" ]), 
        t.locals = {
            searchContainer: "SearchTypeahead-searchContainer-175",
            isSubmittable: "SearchTypeahead-isSubmittable-3kE",
            suggestions: "SearchTypeahead-suggestions-2lD",
            searchInput: "SearchTypeahead-searchInput-1qk",
            searchInputWrap: "SearchTypeahead-searchInputWrap-3Hg",
            isTypeaheadEnabled: "SearchTypeahead-isTypeaheadEnabled-3i3",
            suggestion: "SearchTypeahead-suggestion-3yd",
            suggestionLink: "SearchTypeahead-suggestionLink-1_7",
            suggestionLabel: "SearchTypeahead-suggestionLabel-1zL",
            suggestionHeading: "SearchTypeahead-suggestionHeading-16o",
            result: "SearchTypeahead-result-2LM",
            emphasis: "SearchTypeahead-emphasis-3Ct",
            mobileCloseButton: "SearchTypeahead-mobileCloseButton-OkE",
            closeButton: "SearchTypeahead-closeButton-7vz",
            icon: "SearchTypeahead-icon-20K",
            searchForm: "SearchTypeahead-searchForm-20c",
            searchIcon: "SearchTypeahead-searchIcon-1ld",
            spinnerWrapper: "SearchTypeahead-spinnerWrapper-1ws",
            spinner: "SearchTypeahead-spinner-1VD"
        };
    },
    vYch: function(e, t, a) {
        e.exports = a("ydjK")("vYch");
    },
    vkUd: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg">'), i.b("\n" + a), i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 34, 170, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_recommendation_count|New recommendations for &ldquo;<a href="'), 
                    a.b(a.v(a.d("job._links.recruiter", e, t, 0))), a.b('">'), a.b(a.v(a.d("job.title", e, t, 0))), 
                    a.b("</a>&rdquo;: "), a.b(a.v(a.f("count", e, t, 0)));
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg">\n  {{#translate}}notifications_recommendation_count|New recommendations for &ldquo;<a href="{{job._links.recruiter}}">{{job.title}}</a>&rdquo;: {{count}}{{/translate}}\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    wDoL: function(e, t, a) {
        e.exports = a("ydjK")("wDoL");
    },
    wYNo: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="msg">'), i.b("\n" + a), i.b("  "), i.s(i.f("translate", e, t, 1), e, t, 0, 34, 178, "{{ }}") && (i.rs(e, t, (function(e, t, a) {
                    a.b('notifications_followed_work|<a href="'), a.b(a.v(a.d("actor.url", e, t, 0))), 
                    a.b('" class="js-mini-profile" data-id="'), a.b(a.v(a.d("actor.id", e, t, 0))), 
                    a.b('">'), a.b(a.v(a.d("actor.display_name", e, t, 0))), a.b("</a> followed your work");
                })), e.pop()), i.b("\n" + a), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg">\n  {{#translate}}notifications_followed_work|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> followed your work{{/translate}}\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    xQ11: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="activity-container-wrap">'), i.b("\n" + a), 
                i.b('  <div class="bell-section propositions-section js-propositions"></div>'), 
                i.b("\n" + a), i.b('  <div class="bell-section notifications-section js-notifications"></div>'), 
                i.b("\n" + a), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="activity-container-wrap">\n  <div class="bell-section propositions-section js-propositions"></div>\n  <div class="bell-section notifications-section js-notifications"></div>\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    yYqu: function(e, t, a) {
        (t = e.exports = a("RDo7")(!1)).push([ e.i, '.PrimaryNav-root-3lS{margin-bottom:-3px;position:relative;z-index:5}.PrimaryNav-fixed-1mb{left:0;position:fixed;right:0;top:0}@media(min-width: 1025px){.has-message .PrimaryNav-fixed-1mb{top:35px}}.popup.inbox.timeline-container::after{right:11px}.PrimaryNav-tooltipWrapper-166.PrimaryNav-tooltipWrapper-166{position:absolute;right:0;top:100%}@media(max-width: 1079px){.PrimaryNav-tooltipWrapper-166.PrimaryNav-tooltipWrapper-166{display:none}}.PrimaryNav-strip-3w8{background-color:#fff;display:-webkit-box;display:flex;height:55px}@media(min-width: 1025px){.PrimaryNav-strip-3w8{padding-right:24px}}@media(max-width: 1079px){.PrimaryNav-strip-3w8{padding-right:8px}}.PrimaryNav-strip-3w8::before{background-color:#f2f2f2;bottom:0;content:"";height:1px;left:0;opacity:1;pointer-events:none;position:absolute;right:0}.PrimaryNav-strip-3w8::after{background-color:#191919;bottom:-1px;content:"";height:100vh;left:0;opacity:0;position:absolute;right:0;top:0;-webkit-transition:opacity .25s linear;transition:opacity .25s linear}.PrimaryNav-root-3lS:not(.PrimaryNav-hamburgerMenuOpen-9pT) .PrimaryNav-strip-3w8::after{pointer-events:none}@media(min-width: 1080px){.PrimaryNav-strip-3w8{padding-left:24px}}@media(max-width: 1079px){.PrimaryNav-strip-3w8 .PrimaryNav-hamburgerMenuActivate-2-M{padding-left:16px}}.PrimaryNav-appLinkContainer-3Ep{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;padding-left:8px;padding-right:8px}.PrimaryNav-strip-3w8 .PrimaryNav-signup-Yf6,.PrimaryNav-strip-3w8 .PrimaryNav-loggedOutOptions-1SQ{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;height:100%;-webkit-box-pack:center;justify-content:center}.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigation-rdG{display:-webkit-box;display:flex}.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigation-rdG,.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236{height:100%}.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236{position:relative}.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236:not(:last-child){margin-right:24px}.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps .PrimaryNav-coreNavigationLink-2uv,.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH .PrimaryNav-coreNavigationLink-2uv{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;height:100%}.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps .PrimaryNav-coreNavigationLink-2uv::after{background-color:#191919;content:"";height:2px;left:0;opacity:0;position:absolute;right:0;top:100%;-webkit-transition:opacity .15s,-webkit-transform .15s;transition:opacity .15s,-webkit-transform .15s;transition:transform .15s,opacity .15s;transition:transform .15s,opacity .15s,-webkit-transform .15s}.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps .PrimaryNav-coreNavigationLink-2uv.PrimaryNav-active-jbv::after,.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps .PrimaryNav-coreNavigationLink-2uv:hover::after{opacity:1;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.PrimaryNav-coreNavigationLink-2uv,.PrimaryNav-adobeCreativeCloudLink-8C1{color:inherit}.PrimaryNav-coreNavigationLink-2uv .PrimaryNav-coreNavigationLabel-3rj::after,.PrimaryNav-adobeCreativeCloudLink-8C1 .PrimaryNav-coreNavigationLabel-3rj::after{background-color:rgba(0,87,255,.2);border:2px solid #0057ff;border-radius:3px;bottom:-2px;content:"";left:-8px;opacity:0;pointer-events:none;position:absolute;right:-8px;top:-2px;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,transform .15s ease;transition:opacity .15s linear,transform .15s ease,-webkit-transform .15s ease}.PrimaryNav-coreNavigationLink-2uv.focus-visible .PrimaryNav-coreNavigationLabel-3rj::after,.PrimaryNav-adobeCreativeCloudLink-8C1.focus-visible .PrimaryNav-coreNavigationLabel-3rj::after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.PrimaryNav-coreNavigationLink-2uv:hover,.PrimaryNav-adobeCreativeCloudLink-8C1:hover{text-decoration:none}.PrimaryNav-adobeCreativeCloudLink-8C1{position:relative}.PrimaryNav-adobeCreativeCloudLink-8C1 .PrimaryNav-iconWrap-1F1::after{background-color:rgba(0,87,255,.2);border:2px solid #0057ff;border-radius:3px;bottom:-2px;content:"";left:-8px;opacity:0;pointer-events:none;position:absolute;right:-8px;top:-2px;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,transform .15s ease;transition:opacity .15s linear,transform .15s ease,-webkit-transform .15s ease}.PrimaryNav-adobeCreativeCloudLink-8C1 .PrimaryNav-iconWrap-1F1::after{bottom:-5px;top:-5px}.PrimaryNav-adobeCreativeCloudLink-8C1.focus-visible .PrimaryNav-iconWrap-1F1::after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.PrimaryNav-a11yButton-2Cl,.PrimaryNav-a11yButton-2Cl.PrimaryNav-createAProject-1Ul{position:relative;z-index:1}.PrimaryNav-a11yButton-2Cl.focus-visible,.PrimaryNav-a11yButton-2Cl.PrimaryNav-createAProject-1Ul.focus-visible{outline:0}.PrimaryNav-a11yButtonWrap-23Z{position:relative}.PrimaryNav-a11yButton-2Cl{position:relative}.PrimaryNav-a11yButton-2Cl.focus-visible+.PrimaryNav-a11yButtonHelper-3Vx::after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.PrimaryNav-a11yButtonWrap-23Z .PrimaryNav-a11yButtonHelper-3Vx::after{background-color:rgba(0,87,255,.2);border:2px solid #0057ff;border-radius:3px;bottom:-2px;content:"";left:-8px;opacity:0;pointer-events:none;position:absolute;right:-8px;top:-2px;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,transform .15s ease;transition:opacity .15s linear,transform .15s ease,-webkit-transform .15s ease}.PrimaryNav-a11yButtonWrap-23Z .PrimaryNav-a11yButtonHelper-3Vx::after{border-radius:50px;bottom:-5px;content:"";left:-5px;right:-5px;top:-5px}.PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH .PrimaryNav-coreNavigationLink-2uv .PrimaryNav-logoWrap-564{padding:6px 0;position:relative}.PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH .PrimaryNav-coreNavigationLink-2uv .PrimaryNav-logoWrap-564::after{background-color:rgba(0,87,255,.2);border:2px solid #0057ff;border-radius:3px;bottom:-2px;content:"";left:-8px;opacity:0;pointer-events:none;position:absolute;right:-8px;top:-2px;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,transform .15s ease;transition:opacity .15s linear,transform .15s ease,-webkit-transform .15s ease}.PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH .PrimaryNav-coreNavigationLink-2uv.focus-visible .PrimaryNav-logoWrap-564::after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.PrimaryNav-coreNavigationLabel-3rj{font-size:16px;font-weight:600;margin:0;position:relative}.PrimaryNav-coreNavigationLabel-3rj::after{background-color:rgba(0,87,255,.2);border:2px solid #0057ff;border-radius:3px;bottom:-2px;content:"";left:-8px;opacity:0;pointer-events:none;position:absolute;right:-8px;top:-2px;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,transform .15s ease;transition:opacity .15s linear,transform .15s ease,-webkit-transform .15s ease}.PrimaryNav-logo-1FW.PrimaryNav-behance-12V{position:relative;top:1px}@media(max-width: 1079px){.PrimaryNav-coreNavigation-rdG{margin-right:auto}}.PrimaryNav-hideSearchInput-32e .PrimaryNav-strip-3w8 .PrimaryNav-coreNavigation-rdG{margin-right:auto}.PrimaryNav-siteSearch-ndn{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;margin:auto;max-width:488px;padding-left:40px;padding-right:40px;width:100%}.PrimaryNav-userControls-3sp{position:relative;z-index:0}@media(min-width: 1080px){.PrimaryNav-userControls-3sp{margin-left:16px;margin-right:16px}}@media(max-width: 1079px){.PrimaryNav-userControls-3sp .PrimaryNav-userControl-5wh,.PrimaryNav-searchLink-10L{padding-left:12px;padding-right:12px}}.PrimaryNav-loggedOutOption-3xV:not(:last-child){margin-right:8px}.PrimaryNav-loggedOutOption-3xV.PrimaryNav-logIn-VCn{position:relative}.PrimaryNav-userControl-5wh{-webkit-box-align:center;align-items:center;cursor:pointer;display:-webkit-inline-box;display:inline-flex;height:100%;position:relative;vertical-align:top}@media(min-width: 1080px){.PrimaryNav-userControl-5wh{padding:8px;padding-bottom:9px}}.PrimaryNav-userControl-5wh.PrimaryNav-me-3R0{padding:0}.PrimaryNav-userControl-5wh.PrimaryNav-mail-3UJ,.PrimaryNav-userControl-5wh.PrimaryNav-notifications-29u{margin-top:1px}.PrimaryNav-userControl-5wh .PrimaryNav-userControlLink-2WG::after{background-color:rgba(0,87,255,.2);border:2px solid #0057ff;border-radius:3px;bottom:-2px;content:"";left:-8px;opacity:0;pointer-events:none;position:absolute;right:-8px;top:-2px;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,-webkit-transform .15s ease;transition:opacity .15s linear,transform .15s ease;transition:opacity .15s linear,transform .15s ease,-webkit-transform .15s ease}.PrimaryNav-userControl-5wh .PrimaryNav-userControlLink-2WG::after{bottom:9px;left:-2px;right:-2px;top:7px}.PrimaryNav-userControl-5wh .PrimaryNav-link-3IW.focus-visible::after,.PrimaryNav-userControl-5wh .PrimaryNav-userControlLink-2WG.focus-visible::after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.PrimaryNav-userControl-5wh .PrimaryNav-icon-1tE,.PrimaryNav-adobeLogo-3YN .PrimaryNav-icon-1tE{-webkit-transition:fill .15s linear;transition:fill .15s linear}.PrimaryNav-userControl-5wh:hover .PrimaryNav-icon-1tE,.PrimaryNav-adobeLogo-3YN:hover .PrimaryNav-icon-1tE{fill:#707070}.PrimaryNav-count-dh3{background-color:#0057ff;border:2px solid #fff;border-radius:4px;color:#fff;font-size:10px;font-weight:900;left:40%;min-width:20px;padding:2px 3px;position:absolute;text-align:center;text-shadow:0 .5px 0 #000;top:4px;z-index:1}.PrimaryNav-userControls-3sp .PrimaryNav-mail-3UJ .PrimaryNav-icon-1tE{height:35px;width:17px}.PrimaryNav-userControls-3sp .PrimaryNav-notification-1w1 .PrimaryNav-icon-1tE{height:18px;width:18px}.PrimaryNav-avatar-1dl{border-radius:50%;margin-bottom:-2px;position:relative;top:2px;width:25px}.PrimaryNav-avatarImgEl-2Ax{height:100%;width:100%}.PrimaryNav-userAvatar-1LW{border-radius:50%;overflow:hidden}.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-mobileUserMenuAndTrigger-1HJ,.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-appLinks-3ch,.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-languageSelector-2_F,.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationLink-2uv{padding-left:16px;padding-right:16px}.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationLink-2uv{display:block;position:relative}.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationLink-2uv:not(.PrimaryNav-active-jbv)::before{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationLink-2uv::before{background-color:#191919;bottom:2px;content:"";left:0;position:absolute;top:2px;width:4px}.PrimaryNav-mobileUserMenuAndTrigger-1HJ{margin-top:32px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.PrimaryNav-mobileUserMenuAndTrigger-1HJ.PrimaryNav-menuVisible-2P_ .PrimaryNav-triangle-hi5{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.PrimaryNav-mobileTriggerUserMenu-2YX{cursor:pointer}.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-userAvatar-1LW{height:30px;margin-right:15px;width:30px}.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-avatarLabel-2wv{font-size:16px;margin-right:5px}.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-avatarLabel-2wv,.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-userAvatar-1LW,.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-triangle-hi5{display:inline-block;vertical-align:middle}.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-triangle-hi5{height:15px;position:relative;top:2px;-webkit-transform:rotate(90deg);transform:rotate(90deg);width:15px}.PrimaryNav-userMenuList-156.PrimaryNav-mobile-KrU{margin-top:10px}.PrimaryNav-userMenuList-156.PrimaryNav-mobile-KrU .PrimaryNav-anchor-3Kg{color:inherit;display:block;font-size:14px;padding-bottom:18px;padding-left:45px;padding-top:18px}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H{width:300px}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .focus-visible{outline:1px solid #0057ff;outline-offset:2px}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userAvatar-1LW{height:65px;margin-right:15px;width:65px}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userMeta-3S7{padding:20px}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-listGroup-1pS:last-child{border-top-color:transparent}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-listGroup-1pS{border-bottom:1px solid #e8e8e8;border-top:1px solid #e8e8e8;padding-bottom:10px;padding-top:10px}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userMenuItem-rik.PrimaryNav-link-3IW .PrimaryNav-anchor-3Kg{display:block;padding-bottom:7px;padding-left:20px;padding-right:20px;padding-top:7px;-webkit-transition:background-color .15s linear;transition:background-color .15s linear}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userMenuItem-rik.PrimaryNav-link-3IW .PrimaryNav-anchor-3Kg:hover{background-color:#f2f2f2;text-decoration:none}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userName-3fl{font-size:18px;line-height:1.3}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userEmail-Q8V,.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userLink-iHc,.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userMenuItem-rik.PrimaryNav-link-3IW .PrimaryNav-anchor-3Kg{color:dimgray;font-size:14px}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userLink-iHc{margin:-3px;padding:3px;text-decoration:underline}.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userId-3M9{-webkit-box-flex:1;flex:1}.PrimaryNav-userId-3M9{max-width:175px}.PrimaryNav-userEmail-Q8V,.PrimaryNav-userName-3fl{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.PrimaryNav-userMenuTooltip-1Gn.PrimaryNav-userMenuTooltip-1Gn{margin:0;padding:0 0 2px;width:auto}.PrimaryNav-userMetaContainer-1LZ{display:-webkit-box;display:flex}.PrimaryNav-userAvatarTrigger-1N5{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;height:55px;-webkit-box-pack:center;justify-content:center;overflow:hidden;position:relative;width:40px}.PrimaryNav-userAvatarTrigger-1N5 .PrimaryNav-avatarImgEl-2Ax{border-radius:50%;height:25px;margin-top:-1px;width:25px}.PrimaryNav-notifications-29u .PrimaryNav-icon-1tE{height:35px}.PrimaryNav-formLabel-2VR{display:none}.PrimaryNav-tooltipContent-y7h{font-size:13px;padding-left:10px;padding-right:10px;padding-top:10px;width:180px}.PrimaryNav-pushNotifTooltipContent-1PM{font-size:14px;height:124px;padding:10px;width:235px}.PrimaryNav-pushNotifTooltipText-2B_{margin-bottom:16px}.PrimaryNav-tooltipText-2GF{margin-bottom:0;margin-bottom:8px}.PrimaryNav-tooltipButton-1R3.PrimaryNav-tooltipButton-1R3{color:#0057ff;margin-left:-20px}.PrimaryNav-profileEmail-1Tp{font-family:inherit;font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;float:left;width:calc(100% - 79px);color:dimgray;margin-bottom:8px}.PrimaryNav-profileAvatarContainer-zYn{float:left;height:65px;margin-right:14px;width:65px}.PrimaryNav-profileAvatarWrap-I-E{border-radius:50%;display:inline-block;overflow:hidden;position:relative}.PrimaryNav-profileAvatarLink-2dh .PrimaryNav-profileAvatarWrap-I-E::after{background-color:#191919;bottom:0;content:"";left:0;opacity:.2;pointer-events:none;position:absolute;right:0;top:0;-webkit-transition:opacity .5s linear;transition:opacity .5s linear}.PrimaryNav-profileAvatarLink-2dh .PrimaryNav-profileAvatarWrap-I-E:not(:hover)::after{opacity:0}.PrimaryNav-profileAvatar-3E7{display:block;height:auto;width:100%}.PrimaryNav-rf-tooltip--utility-3Iz{left:auto;right:-10px;-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s, -webkit-transform .15s}.PrimaryNav-rf-tooltip--utility-3Iz::before{left:93%}.PrimaryNav-adobeLogo-3YN,.PrimaryNav-minimalWelcomeMessage-3DL{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}.PrimaryNav-minimalWelcomeMessage-3DL{font-size:16px;margin-left:auto}.PrimaryNav-activateAndCreateButtonsHidden-339 .PrimaryNav-adobeLogo-3YN{margin-left:200px}.PrimaryNav-adobeLogo-3YN .PrimaryNav-icon-1tE{position:relative;top:1px;width:60px}.PrimaryNav-rf-submenu-3j5{margin:0 -10px -14px}.PrimaryNav-rf-tooltip--utility-3Iz .PrimaryNav-rf-submenu-3j5 .PrimaryNav-rf-submenu__link-3jz{padding-left:20px;padding-right:20px}.PrimaryNav-skipFooter-2Kk{margin-left:150px}.PrimaryNav-skipContent-2jC,.PrimaryNav-skipFooter-2Kk{color:#fff;font-size:11px;font-weight:bold;left:-100%;padding:0 10px;position:absolute;text-decoration:none;text-transform:uppercase;top:2px}.PrimaryNav-skipContent-2jC.focus-visible,.PrimaryNav-skipContent-2jC:focus-visible,.PrimaryNav-skipFooter-2Kk.focus-visible,.PrimaryNav-skipFooter-2Kk:focus-visible{color:#0057ff;left:16px;outline:1px solid #0057ff;outline-offset:2px}.PrimaryNav-searchLink-10L{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}.PrimaryNav-searchLink-10L .PrimaryNav-link-3IW{height:18px;position:relative;top:-1px;width:18px}.PrimaryNav-hamburgerMenuActivate-2-M{-webkit-box-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:flex;height:100%;margin-top:1px;padding-right:16px;position:relative;z-index:2}.PrimaryNav-hamburgerButton-LWP{width:15px}.PrimaryNav-hamburgerLine-1VU{background-color:#191919;height:2px;margin-bottom:3px;-webkit-transition-duration:.25s;transition-duration:.25s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1);transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.PrimaryNav-hamburgerMenu-1lm{background-color:#fff;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100vh;padding:12px 0;position:absolute;-webkit-transition:-webkit-transform .25s cubic-bezier(0.19, 1, 0.22, 1);transition:-webkit-transform .25s cubic-bezier(0.19, 1, 0.22, 1);transition:transform .25s cubic-bezier(0.19, 1, 0.22, 1);transition:transform .25s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform .25s cubic-bezier(0.19, 1, 0.22, 1);width:270px;will-change:transform;z-index:1}.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-signUp-gqh{align-self:center;display:-webkit-box;display:flex;margin-bottom:auto;margin-top:30px;padding-left:16px}.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-signUp-gqh,.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-signupButton-idI{width:100%}.PrimaryNav-loginOrCreate-3r1{align-self:flex-end;padding-left:24px;padding-right:24px}.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationItem-236{margin-top:32px}.PrimaryNav-appLinks-3ch{margin-bottom:24px;margin-top:32px}.PrimaryNav-appLink-3Wl{background-repeat:no-repeat;display:block;font-size:0;height:40px;line-height:40px;margin-bottom:8px;width:135px}.PrimaryNav-appLinkItem-3Ds.PrimaryNav-ios-22g .PrimaryNav-appLink-3Wl{background-image:url("https://a5.behance.net/f4269f28327d392d0d517fc059185758ab308ef2/svgs/apple-app-store-button.svg")}.PrimaryNav-appLinkItem-3Ds.PrimaryNav-android-2PJ .PrimaryNav-appLink-3Wl{background-image:url("https://a5.behance.net/f4269f28327d392d0d517fc059185758ab308ef2/svgs/google-play-button.svg")}.PrimaryNav-behanceLogo-1Ol.PrimaryNav-full-fC_{height:16px;width:82px}.PrimaryNav-behanceLogo-1Ol.PrimaryNav-truncated-2yo{width:24px}.PrimaryNav-root-3lS:not(.PrimaryNav-hamburgerMenuOpen-9pT) .PrimaryNav-hamburgerMenu-1lm{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-strip-3w8::after{opacity:.5}.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-hamburgerButton-LWP{margin-right:-2px;width:17px}.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-hamburgerButton-LWP .PrimaryNav-hamburgerLine-1VU:nth-child(1){-webkit-transform:translateY(4.8px) rotate(45deg);transform:translateY(4.8px) rotate(45deg)}.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-hamburgerButton-LWP .PrimaryNav-hamburgerLine-1VU:nth-child(2){opacity:0}.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-hamburgerButton-LWP .PrimaryNav-hamburgerLine-1VU:nth-child(3){-webkit-transform:translateY(-5px) rotate(-45deg);transform:translateY(-5px) rotate(-45deg)}@media(max-width: 1079px){.PrimaryNav-strip-3w8 .PrimaryNav-adobeLogo-3YN,.PrimaryNav-strip-3w8 .PrimaryNav-userControls-3sp .PrimaryNav-me-3R0,.PrimaryNav-strip-3w8 .PrimaryNav-siteSearch-ndn,.PrimaryNav-strip-3w8 .PrimaryNav-signup-Yf6,.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps,.PrimaryNav-strip-3w8 .PrimaryNav-behanceLogo-1Ol.PrimaryNav-full-fC_,.PrimaryNav-strip-3w8 .PrimaryNav-loggedOutOptions-1SQ{display:none}}@media(max-width: 603px){.PrimaryNav-coreNavigation-rdG .PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH{width:26px}}@media(min-width: 1080px){.PrimaryNav-hamburgerMenu-1lm,.PrimaryNav-hamburgerMenuActivate-2-M,.PrimaryNav-searchLink-10L,.PrimaryNav-behanceLogo-1Ol.PrimaryNav-truncated-2yo,.PrimaryNav-appLinkContainer-3Ep,.PrimaryNav-strip-3w8::after{display:none}}.PrimaryNav-languageSelector-2_F{position:relative;width:100%}.PrimaryNav-languageSelector-2_F .PrimaryNav-triangle-hi5{display:inline-block;height:10px;margin-left:-10px;pointer-events:none;position:relative;top:1px;-webkit-transform:rotate(90deg);transform:rotate(90deg);width:10px}.PrimaryNav-languageSelectEl-3eg{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;font-size:11px;font-weight:600;padding:5px 10px 5px 0;visibility:visible}', "" ]), 
        t.locals = {
            root: "PrimaryNav-root-3lS",
            fixed: "PrimaryNav-fixed-1mb",
            tooltipWrapper: "PrimaryNav-tooltipWrapper-166",
            strip: "PrimaryNav-strip-3w8",
            hamburgerMenuOpen: "PrimaryNav-hamburgerMenuOpen-9pT",
            hamburgerMenuActivate: "PrimaryNav-hamburgerMenuActivate-2-M",
            appLinkContainer: "PrimaryNav-appLinkContainer-3Ep",
            signup: "PrimaryNav-signup-Yf6",
            loggedOutOptions: "PrimaryNav-loggedOutOptions-1SQ",
            coreNavigation: "PrimaryNav-coreNavigation-rdG",
            coreNavigationItem: "PrimaryNav-coreNavigationItem-236",
            text: "PrimaryNav-text-1ps",
            coreNavigationLink: "PrimaryNav-coreNavigationLink-2uv",
            home: "PrimaryNav-home-2zH",
            active: "PrimaryNav-active-jbv",
            adobeCreativeCloudLink: "PrimaryNav-adobeCreativeCloudLink-8C1",
            coreNavigationLabel: "PrimaryNav-coreNavigationLabel-3rj",
            iconWrap: "PrimaryNav-iconWrap-1F1",
            a11yButton: "PrimaryNav-a11yButton-2Cl",
            createAProject: "PrimaryNav-createAProject-1Ul",
            a11yButtonWrap: "PrimaryNav-a11yButtonWrap-23Z",
            a11yButtonHelper: "PrimaryNav-a11yButtonHelper-3Vx",
            logoWrap: "PrimaryNav-logoWrap-564",
            logo: "PrimaryNav-logo-1FW",
            behance: "PrimaryNav-behance-12V",
            hideSearchInput: "PrimaryNav-hideSearchInput-32e",
            siteSearch: "PrimaryNav-siteSearch-ndn",
            userControls: "PrimaryNav-userControls-3sp",
            userControl: "PrimaryNav-userControl-5wh",
            searchLink: "PrimaryNav-searchLink-10L",
            loggedOutOption: "PrimaryNav-loggedOutOption-3xV",
            logIn: "PrimaryNav-logIn-VCn",
            me: "PrimaryNav-me-3R0",
            mail: "PrimaryNav-mail-3UJ",
            notifications: "PrimaryNav-notifications-29u",
            userControlLink: "PrimaryNav-userControlLink-2WG",
            link: "PrimaryNav-link-3IW",
            icon: "PrimaryNav-icon-1tE",
            adobeLogo: "PrimaryNav-adobeLogo-3YN",
            count: "PrimaryNav-count-dh3",
            notification: "PrimaryNav-notification-1w1",
            avatar: "PrimaryNav-avatar-1dl",
            avatarImgEl: "PrimaryNav-avatarImgEl-2Ax",
            userAvatar: "PrimaryNav-userAvatar-1LW",
            hamburgerMenu: "PrimaryNav-hamburgerMenu-1lm",
            mobileUserMenuAndTrigger: "PrimaryNav-mobileUserMenuAndTrigger-1HJ",
            appLinks: "PrimaryNav-appLinks-3ch",
            languageSelector: "PrimaryNav-languageSelector-2_F",
            menuVisible: "PrimaryNav-menuVisible-2P_",
            triangle: "PrimaryNav-triangle-hi5",
            mobileTriggerUserMenu: "PrimaryNav-mobileTriggerUserMenu-2YX",
            avatarLabel: "PrimaryNav-avatarLabel-2wv",
            userMenuList: "PrimaryNav-userMenuList-156",
            mobile: "PrimaryNav-mobile-KrU",
            anchor: "PrimaryNav-anchor-3Kg",
            desktop: "PrimaryNav-desktop-31H",
            userMeta: "PrimaryNav-userMeta-3S7",
            listGroup: "PrimaryNav-listGroup-1pS",
            userMenuItem: "PrimaryNav-userMenuItem-rik",
            userName: "PrimaryNav-userName-3fl",
            userEmail: "PrimaryNav-userEmail-Q8V",
            userLink: "PrimaryNav-userLink-iHc",
            userId: "PrimaryNav-userId-3M9",
            userMenuTooltip: "PrimaryNav-userMenuTooltip-1Gn",
            userMetaContainer: "PrimaryNav-userMetaContainer-1LZ",
            userAvatarTrigger: "PrimaryNav-userAvatarTrigger-1N5",
            formLabel: "PrimaryNav-formLabel-2VR",
            tooltipContent: "PrimaryNav-tooltipContent-y7h",
            pushNotifTooltipContent: "PrimaryNav-pushNotifTooltipContent-1PM",
            pushNotifTooltipText: "PrimaryNav-pushNotifTooltipText-2B_",
            tooltipText: "PrimaryNav-tooltipText-2GF",
            tooltipButton: "PrimaryNav-tooltipButton-1R3",
            profileEmail: "PrimaryNav-profileEmail-1Tp",
            profileAvatarContainer: "PrimaryNav-profileAvatarContainer-zYn",
            profileAvatarWrap: "PrimaryNav-profileAvatarWrap-I-E",
            profileAvatarLink: "PrimaryNav-profileAvatarLink-2dh",
            profileAvatar: "PrimaryNav-profileAvatar-3E7",
            "rf-tooltip--utility": "PrimaryNav-rf-tooltip--utility-3Iz",
            minimalWelcomeMessage: "PrimaryNav-minimalWelcomeMessage-3DL",
            activateAndCreateButtonsHidden: "PrimaryNav-activateAndCreateButtonsHidden-339",
            "rf-submenu": "PrimaryNav-rf-submenu-3j5",
            "rf-submenu__link": "PrimaryNav-rf-submenu__link-3jz",
            skipFooter: "PrimaryNav-skipFooter-2Kk",
            skipContent: "PrimaryNav-skipContent-2jC",
            hamburgerButton: "PrimaryNav-hamburgerButton-LWP",
            hamburgerLine: "PrimaryNav-hamburgerLine-1VU",
            signUp: "PrimaryNav-signUp-gqh",
            signupButton: "PrimaryNav-signupButton-idI",
            loginOrCreate: "PrimaryNav-loginOrCreate-3r1",
            appLink: "PrimaryNav-appLink-3Wl",
            appLinkItem: "PrimaryNav-appLinkItem-3Ds",
            ios: "PrimaryNav-ios-22g",
            android: "PrimaryNav-android-2PJ",
            behanceLogo: "PrimaryNav-behanceLogo-1Ol",
            full: "PrimaryNav-full-fC_",
            truncated: "PrimaryNav-truncated-2yo",
            languageSelectEl: "PrimaryNav-languageSelectEl-3eg"
        };
    },
    yfpa: function(e, t, a) {
        var i = a("6QaK"), n = {}, r = new i.Template({
            code: function(e, t, a) {
                var i = this;
                return i.b(a = a || ""), i.b('<div class="form-item js-rf-button-container rf-button__container '), 
                i.sub("containerClasses", e, t, a), i.b(' form-button-wrap" '), i.sub("containerAttrs", e, t, a), 
                i.b(">"), i.b("\n" + a), i.b('  <button class="form-button js-rf-button rf-button '), 
                i.sub("classes", e, t, a), i.b('"'), i.b("\n" + a), i.b("    "), i.sub("attrs", e, t, a), 
                i.b(">"), i.sub("label", e, t, a), i.b("</button>"), i.b("\n" + a), i.b("</div>"), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {
                containerClasses: function(e, t, a, i) {},
                containerAttrs: function(e, t, a, i) {},
                classes: function(e, t, a, i) {
                    a.b("form-button-default");
                },
                attrs: function(e, t, a, i) {},
                label: function(e, t, a, i) {}
            }
        }, '<div class="form-item js-rf-button-container rf-button__container {{$containerClasses}}{{/containerClasses}} form-button-wrap" {{$containerAttrs}}{{/containerAttrs}}>\n  <button class="form-button js-rf-button rf-button {{$classes}}form-button-default{{/classes}}"\n    {{$attrs}}{{/attrs}}>{{$label}}{{/label}}</button>\n</div>\n', i);
        r.ri = function(e, t, a) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (r = n, o = t, Object.keys(o).reduce((function(e, t) {
                return e[t] = o[t], e;
            }), r)), a);
            var r, o;
        }, e.exports = r.render.bind(r), e.exports.template = r;
    },
    yzPa: function(e, t, a) {
        e.exports = a("ydjK")("yzPa");
    }
} ]);
//# sourceMappingURL=app.188.3fa2545a7116dadba039.js.map