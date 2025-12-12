module.exports = [
  25069,
  (a) => {
    "use strict";
    var b = a.i(68460),
      c = a.i(54298);
    let d = (0, b.cache)(async function () {
      return (await (0, c.default)()).locale;
    });
    a.s(["default", () => d]);
  },
  57060,
  (a, b, c) => {
    "use strict";
    function d(a) {
      if ("function" != typeof WeakMap) return null;
      var b = new WeakMap(),
        c = new WeakMap();
      return (d = function (a) {
        return a ? c : b;
      })(a);
    }
    c._ = function (a, b) {
      if (!b && a && a.__esModule) return a;
      if (null === a || ("object" != typeof a && "function" != typeof a))
        return { default: a };
      var c = d(b);
      if (c && c.has(a)) return c.get(a);
      var e = { __proto__: null },
        f = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var g in a)
        if ("default" !== g && Object.prototype.hasOwnProperty.call(a, g)) {
          var h = f ? Object.getOwnPropertyDescriptor(a, g) : null;
          h && (h.get || h.set)
            ? Object.defineProperty(e, g, h)
            : (e[g] = a[g]);
        }
      return ((e.default = a), c && c.set(a, e), e);
    };
  },
  42570,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(95567);
    a.n(
      d(
        "[project]/awdtech/node_modules/next/dist/client/app-dir/link.js <module evaluation>",
      ),
    );
  },
  46688,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(95567);
    a.n(d("[project]/awdtech/node_modules/next/dist/client/app-dir/link.js"));
  },
  40855,
  (a) => {
    "use strict";
    a.i(42570);
    var b = a.i(46688);
    a.n(b);
  },
  49219,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return i;
      },
      useLinkStatus: function () {
        return h.useLinkStatus;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(57060),
      g = a.r(46580),
      h = f._(a.r(40855));
    function i(a) {
      let b = a.legacyBehavior,
        c =
          "string" == typeof a.children ||
          "number" == typeof a.children ||
          "string" == typeof a.children?.type,
        d = a.children?.type?.$$typeof === Symbol.for("react.client.reference");
      return (
        !b ||
          c ||
          d ||
          (a.children?.type?.$$typeof === Symbol.for("react.lazy")
            ? console.error(
                "Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag.",
              )
            : console.error(
                "Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.",
              )),
        (0, g.jsx)(h.default, { ...a })
      );
    }
    ("function" == typeof c.default ||
      ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  43149,
  98044,
  (a) => {
    "use strict";
    var b = a.i(41125),
      c = a.i(54298),
      d = a.i(68460)["use".trim()];
    function e(a) {
      var b = (0, c.default)();
      try {
        return d(b);
      } catch (b) {
        throw b instanceof TypeError &&
          b.message.includes("Cannot read properties of null (reading 'use')")
          ? Error(
              `\`${a}\` is not callable within an async component. Please refer to https://next-intl.dev/docs/environments/server-client-components#async-components`,
              { cause: b },
            )
          : b;
      }
    }
    function f(...[a]) {
      let c = e("useTranslations");
      return (0, b.default)(c, a);
    }
    (a.s(["default", () => e], 98044),
      a.s(["useTranslations", () => f], 43149));
  },
  99934,
  (a) => {
    a.v((b) =>
      Promise.all(
        ["server/chunks/ssr/awdtech_messages_en_json_e90a18b9._.js"].map((b) =>
          a.l(b),
        ),
      ).then(() => b(37518)),
    );
  },
  54233,
  (a) => {
    a.v((b) =>
      Promise.all(
        ["server/chunks/ssr/awdtech_messages_es_json_8b9cc00b._.js"].map((b) =>
          a.l(b),
        ),
      ).then(() => b(15528)),
    );
  },
  86367,
  (a) => {
    a.v((b) =>
      Promise.all(
        ["server/chunks/ssr/awdtech_messages_fr_json_d2af5ead._.js"].map((b) =>
          a.l(b),
        ),
      ).then(() => b(9298)),
    );
  },
];

//# sourceMappingURL=awdtech_1808a9a3._.js.map
