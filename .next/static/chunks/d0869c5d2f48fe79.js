(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  74815,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  98603,
  (e) => {
    "use strict";
    var t = e.i(60806),
      r = e.i(71878),
      n = e.i(65318);
    function a() {
      return false;
    }
    function s(e) {
      return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
    }
    function i(e) {
      (0, r.useEffect)(() => {
        var t;
        e.beforeSend &&
          (null == (t = window.si) ||
            t.call(window, "beforeSend", e.beforeSend));
      }, [e.beforeSend]);
      let n = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          if (n.current) e.route && n.current(e.route);
          else {
            let r = (function (e = {}) {
              var t;
              if ("undefined" == typeof window || null === e.route) return null;
              window.si ||
                (window.si = function (...e) {
                  (window.siq = window.siq || []).push(e);
                });
              let r = e.scriptSrc
                ? e.scriptSrc
                : a()
                  ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js"
                  : e.dsn
                    ? "https://va.vercel-scripts.com/v1/speed-insights/script.js"
                    : e.basePath
                      ? `${e.basePath}/speed-insights/script.js`
                      : "/_vercel/speed-insights/script.js";
              if (document.head.querySelector(`script[src*="${r}"]`))
                return null;
              e.beforeSend &&
                (null == (t = window.si) ||
                  t.call(window, "beforeSend", e.beforeSend));
              let n = document.createElement("script");
              return (
                (n.src = r),
                (n.defer = !0),
                (n.dataset.sdkn =
                  "@vercel/speed-insights" +
                  (e.framework ? `/${e.framework}` : "")),
                (n.dataset.sdkv = "1.3.1"),
                e.sampleRate &&
                  (n.dataset.sampleRate = e.sampleRate.toString()),
                e.route && (n.dataset.route = e.route),
                e.endpoint
                  ? (n.dataset.endpoint = e.endpoint)
                  : e.basePath &&
                    (n.dataset.endpoint = `${e.basePath}/speed-insights/vitals`),
                e.dsn && (n.dataset.dsn = e.dsn),
                a() && !1 === e.debug && (n.dataset.debug = "false"),
                (n.onerror = () => {
                  console.log(
                    `[Vercel Speed Insights] Failed to load script from ${r}. Please check if any content blockers are enabled and try again.`,
                  );
                }),
                document.head.appendChild(n),
                {
                  setRoute: (e) => {
                    n.dataset.route = e ?? void 0;
                  },
                }
              );
            })({
              framework: e.framework ?? "react",
              basePath:
                e.basePath ??
                (function () {
                  if (void 0 !== t.default && void 0 !== t.default.env)
                    return t.default.env
                      .REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                })(),
              ...e,
            });
            r && (n.current = r.setRoute);
          }
        }, [e.route]),
        null
      );
    }
    function o(e) {
      let a = (() => {
        let e = (0, n.useParams)(),
          t = (0, n.useSearchParams)() || new URLSearchParams(),
          r = (0, n.usePathname)();
        if (!e) return null;
        let a = Object.keys(e).length ? e : Object.fromEntries(t.entries());
        if (!r || !a) return r;
        let i = r;
        try {
          let e = Object.entries(a);
          for (let [t, r] of e)
            if (!Array.isArray(r)) {
              let e = s(r);
              e.test(i) && (i = i.replace(e, `/[${t}]`));
            }
          for (let [t, r] of e)
            if (Array.isArray(r)) {
              let e = s(r.join("/"));
              e.test(i) && (i = i.replace(e, `/[...${t}]`));
            }
          return i;
        } catch (e) {
          return r;
        }
      })();
      return r.default.createElement(i, {
        route: a,
        ...e,
        framework: "next",
        basePath: (function () {
          if (void 0 !== t.default && void 0 !== t.default.env)
            return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
        })(),
      });
    }
    function u(e) {
      return r.default.createElement(
        r.Suspense,
        { fallback: null },
        r.default.createElement(o, { ...e }),
      );
    }
    e.s(["SpeedInsights", () => u]);
  },
  35336,
  (e) => {
    "use strict";
    var t = e.i(86071),
      r = e.i(70951);
    function n({ locale: e, ...n }) {
      if (!e) throw Error(void 0);
      return (0, r.jsx)(t.IntlProvider, { locale: e, ...n });
    }
    e.s(["default", () => n]);
  },
  58336,
  (e) => {
    "use strict";
    var t = e.i(70951),
      r = e.i(81080);
    function n({ children: e, ...n }) {
      return (0, t.jsx)(r.ThemeProvider, { ...n, children: e });
    }
    e.s(["ThemeProvider", () => n]);
  },
  86722,
  (e) => {
    "use strict";
    var t = e.i(60806),
      r = e.i(71878),
      n = e.i(65318);
    function a() {
      return "undefined" != typeof window;
    }
    function s() {
      return "production";
    }
    function i() {
      return "development" === ((a() ? window.vam : s()) || "production");
    }
    function o(e) {
      return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
    }
    function u(e) {
      return (
        (0, r.useEffect)(() => {
          var t;
          e.beforeSend &&
            (null == (t = window.va) ||
              t.call(window, "beforeSend", e.beforeSend));
        }, [e.beforeSend]),
        (0, r.useEffect)(() => {
          !(function (e = { debug: !0 }) {
            var t;
            if (!a()) return;
            (!(function (e = "auto") {
              if ("auto" === e) {
                window.vam = s();
                return;
              }
              window.vam = e;
            })(e.mode),
              window.va ||
                (window.va = function (...e) {
                  (window.vaq = window.vaq || []).push(e);
                }),
              e.beforeSend &&
                (null == (t = window.va) ||
                  t.call(window, "beforeSend", e.beforeSend)));
            let r = e.scriptSrc
              ? e.scriptSrc
              : i()
                ? "https://va.vercel-scripts.com/v1/script.debug.js"
                : e.basePath
                  ? `${e.basePath}/insights/script.js`
                  : "/_vercel/insights/script.js";
            if (document.head.querySelector(`script[src*="${r}"]`)) return;
            let n = document.createElement("script");
            ((n.src = r),
              (n.defer = !0),
              (n.dataset.sdkn =
                "@vercel/analytics" + (e.framework ? `/${e.framework}` : "")),
              (n.dataset.sdkv = "1.6.1"),
              e.disableAutoTrack && (n.dataset.disableAutoTrack = "1"),
              e.endpoint
                ? (n.dataset.endpoint = e.endpoint)
                : e.basePath && (n.dataset.endpoint = `${e.basePath}/insights`),
              e.dsn && (n.dataset.dsn = e.dsn),
              (n.onerror = () => {
                let e = i()
                  ? "Please check if any ad blockers are enabled and try again."
                  : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                console.log(
                  `[Vercel Web Analytics] Failed to load script from ${r}. ${e}`,
                );
              }),
              i() && !1 === e.debug && (n.dataset.debug = "false"),
              document.head.appendChild(n));
          })({
            framework: e.framework || "react",
            basePath:
              e.basePath ??
              (function () {
                if (void 0 !== t.default && void 0 !== t.default.env)
                  return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
              })(),
            ...(void 0 !== e.route && { disableAutoTrack: !0 }),
            ...e,
          });
        }, []),
        (0, r.useEffect)(() => {
          e.route &&
            e.path &&
            (function ({ route: e, path: t }) {
              var r;
              null == (r = window.va) ||
                r.call(window, "pageview", { route: e, path: t });
            })({ route: e.route, path: e.path });
        }, [e.route, e.path]),
        null
      );
    }
    function d(e) {
      let a,
        s,
        i,
        { route: d, path: l } =
          ((a = (0, n.useParams)()),
          (s = (0, n.useSearchParams)()),
          (i = (0, n.usePathname)()),
          a
            ? {
                route: (function (e, t) {
                  if (!e || !t) return e;
                  let r = e;
                  try {
                    let e = Object.entries(t);
                    for (let [t, n] of e)
                      if (!Array.isArray(n)) {
                        let e = o(n);
                        e.test(r) && (r = r.replace(e, `/[${t}]`));
                      }
                    for (let [t, n] of e)
                      if (Array.isArray(n)) {
                        let e = o(n.join("/"));
                        e.test(r) && (r = r.replace(e, `/[...${t}]`));
                      }
                    return r;
                  } catch (t) {
                    return e;
                  }
                })(
                  i,
                  Object.keys(a).length ? a : Object.fromEntries(s.entries()),
                ),
                path: i,
              }
            : { route: null, path: i });
      return r.default.createElement(u, {
        path: l,
        route: d,
        ...e,
        basePath: (function () {
          if (void 0 !== t.default && void 0 !== t.default.env)
            return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
        })(),
        framework: "next",
      });
    }
    function l(e) {
      return r.default.createElement(
        r.Suspense,
        { fallback: null },
        r.default.createElement(d, { ...e }),
      );
    }
    e.s(["Analytics", () => l]);
  },
]);
