(function (e) {
  function t(t) {
    for (
      var o, i, u = t[0], a = t[1], l = t[2], f = 0, p = [];
      f < u.length;
      f++
    )
      (i = u[f]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]),
        (r[i] = 0);
    for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    s && s(t);
    while (p.length) p.shift()();
    return c.push.apply(c, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], o = !0, u = 1; u < n.length; u++) {
        var a = n[u];
        0 !== r[a] && (o = !1);
      }
      o && (c.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { app: 0 },
    c = [];
  function i(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o),
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/vue-component-source/');
  var u = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    a = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var l = 0; l < u.length; l++) t(u[l]);
  var s = a;
  c.push([0, 'chunk-vendors']), n();
})({
  0: function (e, t, n) {
    e.exports = n('cd49');
  },
  '1a78': function (e, t, n) {
    'use strict';
    n('e6fc');
  },
  '29ee': function (e, t, n) {
    'use strict';
    n('61ef');
  },
  '437c': function (e, t, n) {},
  '4dba': function (e, t, n) {
    'use strict';
    n('f121');
  },
  '61ef': function (e, t, n) {},
  6294: function (e, t, n) {
    'use strict';
    n('437c');
  },
  cd49: function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n('2b0e'),
      r = n('9ab4'),
      c = n('375a'),
      i = n.n(c),
      u = { enabled: !0 };
    function a(e, t) {
      var n = '',
        o = '';
      return (
        e && ((n += '<' + e + '>'), (o += '</' + e + '>')),
        t && (n = n.replace('>', ' src="' + t + '">')),
        { endComment: o, startComment: n }
      );
    }
    function l(e, t) {
      var n = Object(r['a'])(Object(r['a'])({}, u), t);
      e.mixin({
        beforeDestroy: function () {
          n.enabled &&
            this.$$COMMENT &&
            (this.$$COMMENT.START.remove(), this.$$COMMENT.END.remove());
        },
        mounted: function () {
          var e, t, o, r, c;
          if (this.$el && n.enabled) {
            var u = a(
              i()(
                null ===
                  (t =
                    null === (e = this.$vnode) || void 0 === e
                      ? void 0
                      : e.componentOptions) || void 0 === t
                  ? void 0
                  : t.tag,
              ),
              null ===
                (c =
                  null ===
                    (r =
                      null === (o = this.$vnode) || void 0 === o
                        ? void 0
                        : o.componentInstance) || void 0 === r
                    ? void 0
                    : r.$options) || void 0 === c
                ? void 0
                : c.__file,
            );
            u.startComment &&
              u.endComment &&
              ((this.$$COMMENT = {
                END: document.createComment(' ' + u.endComment + ' '),
                START: document.createComment(' ' + u.startComment + ' '),
              }),
              this.$el.before(this.$$COMMENT.START),
              this.$el.after(this.$$COMMENT.END));
          }
        },
      });
    }
    var s = { defaults: u, install: l };
    o['a'].use(s, { enabled: !0 });
    n('79f9');
    var f = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'main',
          { staticClass: 'app' },
          [
            n('vue-github-corners', {
              attrs: {
                'bg-color': 'var(--amber--900)',
                'cat-color': 'var(--white)',
                'repo-url': '//github.com/alex-lit/vue-component-source',
              },
            }),
            n(
              'section',
              { staticClass: 'app__container' },
              [
                n('comp-a'),
                n('comp-b'),
                n('comp-c'),
                n('comp-a'),
                n('comp-c'),
                n('comp-b'),
                n('footer', { staticClass: 'app__footer' }, [
                  e._v('Press F12 to open dev tools'),
                ]),
              ],
              1,
            ),
          ],
          1,
        );
      },
      p = [],
      d = n('1b40'),
      v = n('ad33'),
      m = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [e._v('Component A')]);
      },
      b = [],
      h = (n('d47d'), n('2877')),
      C = {},
      O = Object(h['a'])(C, m, b, !1, null, '6c678c28', null),
      _ = O.exports,
      $ = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [e._v('Component B')]);
      },
      y = [],
      j = (n('29ee'), {}),
      g = Object(h['a'])(j, $, y, !1, null, '6adbbfee', null),
      M = g.exports,
      T = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [e._v('Component C')]);
      },
      E = [],
      w = (n('1a78'), {}),
      x = Object(h['a'])(w, T, E, !1, null, '54ade0a0', null),
      N = x.exports,
      P = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r['c'])(t, e),
          (t = Object(r['b'])(
            [
              Object(d['a'])({
                components: {
                  CompA: _,
                  CompB: M,
                  CompC: N,
                  VueGithubCorners: v['VueGithubCorners'],
                },
              }),
            ],
            t,
          )),
          t
        );
      })(d['b']),
      S = P,
      A = S,
      D =
        (n('6294'),
        n('4dba'),
        Object(h['a'])(A, f, p, !1, null, '7d21fedc', null)),
      k = D.exports;
    (o['a'].config.productionTip = !1),
      new o['a']({
        render: function (e) {
          return e(k);
        },
      }).$mount('#app');
  },
  d47d: function (e, t, n) {
    'use strict';
    n('f0e0');
  },
  e6fc: function (e, t, n) {},
  f0e0: function (e, t, n) {},
  f121: function (e, t, n) {},
});
//# sourceMappingURL=app.e1820dc2.js.map
