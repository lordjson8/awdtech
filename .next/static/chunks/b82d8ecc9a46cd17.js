(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  72912,
  (e, t, r) => {
    "use strict";
    function a({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: a,
      blurDataURL: i,
      objectFit: n,
    }) {
      let o = r ? 40 * r : e,
        s = a ? 40 * a : t,
        l = o && s ? `viewBox='0 0 ${o} ${s}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l ? "none" : "contain" === n ? "xMidYMid" : "cover" === n ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
  },
  34801,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      VALID_LOADERS: function () {
        return n;
      },
      imageConfigDefault: function () {
        return o;
      },
    };
    for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
    let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
      o = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  8813,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      e.r(74815));
    let a = e.r(72912),
      i = e.r(34801),
      n = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function o(e) {
      return void 0 !== e.default;
    }
    function s(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
    }
    function l(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: l = !1,
        preload: d = !1,
        loading: c,
        className: u,
        quality: f,
        width: g,
        height: m,
        fill: p = !1,
        style: h,
        overrideSrc: x,
        onLoad: b,
        onLoadingComplete: v,
        placeholder: y = "empty",
        blurDataURL: j,
        fetchPriority: w,
        decoding: _ = "async",
        layout: P,
        objectFit: O,
        objectPosition: C,
        lazyBoundary: S,
        lazyRoot: E,
        ...N
      },
      k,
    ) {
      var R;
      let z,
        M,
        I,
        { imgConf: T, showAltText: $, blurComplete: A, defaultLoader: D } = k,
        U = T || i.imageConfigDefault;
      if ("allSizes" in U) z = U;
      else {
        let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
          t = U.deviceSizes.sort((e, t) => e - t),
          r = U.qualities?.sort((e, t) => e - t);
        z = { ...U, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === D)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let B = N.loader || D;
      (delete N.loader, delete N.srcSet);
      let L = "__next_img_default" in B;
      if (L) {
        if ("custom" === z.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let e = B;
        B = (t) => {
          let { config: r, ...a } = t;
          return e(a);
        };
      }
      if (P) {
        "fill" === P && (p = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[P];
        e && (h = { ...h, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[P];
        r && !t && (t = r);
      }
      let q = "",
        F = s(g),
        G = s(m);
      if ((R = e) && "object" == typeof R && (o(R) || void 0 !== R.src)) {
        let t = o(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 },
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 },
          );
        if (
          ((M = t.blurWidth),
          (I = t.blurHeight),
          (j = j || t.blurDataURL),
          (q = t.src),
          !p)
        )
          if (F || G) {
            if (F && !G) {
              let e = F / t.width;
              G = Math.round(t.height * e);
            } else if (!F && G) {
              let e = G / t.height;
              F = Math.round(t.width * e);
            }
          } else ((F = t.width), (G = t.height));
      }
      let W = !l && !d && ("lazy" === c || void 0 === c);
      ((!(e = "string" == typeof e ? e : q) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (W = !1)),
        z.unoptimized && (r = !0),
        L &&
          !z.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0));
      let H = s(f),
        X = Object.assign(
          p
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: O,
                objectPosition: C,
              }
            : {},
          $ ? {} : { color: "transparent" },
          h,
        ),
        V =
          A || "empty" === y
            ? null
            : "blur" === y
              ? `url("data:image/svg+xml;charset=utf-8,${(0, a.getImageBlurSvg)({ widthInt: F, heightInt: G, blurWidth: M, blurHeight: I, blurDataURL: j || "", objectFit: X.objectFit })}")`
              : `url("${y}")`,
        J = n.includes(X.objectFit)
          ? "fill" === X.objectFit
            ? "100% 100%"
            : "cover"
          : X.objectFit,
        K = V
          ? {
              backgroundSize: J,
              backgroundPosition: X.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: V,
            }
          : {},
        Q = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: a,
          quality: i,
          sizes: n,
          loader: o,
        }) {
          if (r) return { src: t, srcSet: void 0, sizes: void 0 };
          let { widths: s, kind: l } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              a,
            ) {
              if (a) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  i = [];
                for (let e; (e = r.exec(a)); ) i.push(parseInt(e[2]));
                if (i.length) {
                  let r = 0.01 * Math.min(...i);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1],
                        ),
                      ),
                    ],
                    kind: "x",
                  };
            })(e, a, n),
            d = s.length - 1;
          return {
            sizes: n || "w" !== l ? n : "100vw",
            srcSet: s
              .map(
                (r, a) =>
                  `${o({ config: e, src: t, quality: i, width: r })} ${"w" === l ? r : a + 1}${l}`,
              )
              .join(", "),
            src: o({ config: e, src: t, quality: i, width: s[d] }),
          };
        })({
          config: z,
          src: e,
          unoptimized: r,
          width: F,
          quality: H,
          sizes: t,
          loader: B,
        }),
        Y = W ? "lazy" : c;
      return {
        props: {
          ...N,
          loading: Y,
          fetchPriority: w,
          width: F,
          height: G,
          decoding: _,
          className: u,
          style: { ...X, ...K },
          sizes: Q.sizes,
          srcSet: Q.srcSet,
          src: x || Q.src,
        },
        meta: { unoptimized: r, preload: d || l, placeholder: y, fill: p },
      };
    }
  },
  71146,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let a = e.r(71878),
      i = "undefined" == typeof window,
      n = i ? () => {} : a.useLayoutEffect,
      o = i ? () => {} : a.useEffect;
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function s() {
        if (t && t.mountedInstances) {
          let e = a.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean),
          );
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), s()),
        n(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          ),
        ),
        n(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s);
            }
          ),
        ),
        o(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          ),
        ),
        null
      );
    }
  },
  78412,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return p;
      },
      defaultHead: function () {
        return u;
      },
    };
    for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
    let n = e.r(22757),
      o = e.r(76095),
      s = e.r(70951),
      l = o._(e.r(71878)),
      d = n._(e.r(71146)),
      c = e.r(53685);
    function u() {
      return [
        (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, s.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport",
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                [],
              ),
            )
          : e.concat(t);
    }
    e.r(74815);
    let g = ["name", "httpEquiv", "charSet", "itemProp"];
    function m(e) {
      let t, r, a, i;
      return e
        .reduce(f, [])
        .reverse()
        .concat(u().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (a = new Set()),
          (i = {}),
          (e) => {
            let n = !0,
              o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              o = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (n = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (n = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = g.length; t < r; t++) {
                  let r = g[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) a.has(r) ? (n = !1) : a.add(r);
                    else {
                      let t = e.props[r],
                        a = i[r] || new Set();
                      ("name" !== r || !o) && a.has(t)
                        ? (n = !1)
                        : (a.add(t), (i[r] = a));
                    }
                }
            }
            return n;
          }),
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let p = function ({ children: e }) {
      let t = (0, l.useContext)(c.HeadManagerContext);
      return (0, s.jsx)(d.default, {
        reduceComponentsToState: m,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  42985,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let a = e.r(22757)._(e.r(71878)),
      i = e.r(34801),
      n = a.default.createContext(i.imageConfigDefault);
  },
  41876,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let a = e.r(22757)._(e.r(71878)).default.createContext(null);
  },
  96525,
  (e, t, r) => {
    "use strict";
    function a(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            0,
          )
        : r;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
  },
  15372,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let a = e.r(96525);
    function i({ config: e, src: t, width: r, quality: i }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 },
        );
      let n = (0, a.findClosestQuality)(i, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${n}${(t.startsWith("/_next/static/media/"), "")}`;
    }
    i.__next_img_default = !0;
    let n = i;
  },
  14602,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return y;
        },
      }));
    let a = e.r(22757),
      i = e.r(76095),
      n = e.r(70951),
      o = i._(e.r(71878)),
      s = a._(e.r(13725)),
      l = a._(e.r(78412)),
      d = e.r(8813),
      c = e.r(34801),
      u = e.r(42985);
    e.r(74815);
    let f = e.r(41876),
      g = a._(e.r(15372)),
      m = e.r(81634),
      p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function h(e, t, r, a, i, n, o) {
      let s = e?.src;
      e &&
        e["data-loaded-src"] !== s &&
        ((e["data-loaded-src"] = s),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && i(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let a = !1,
                  i = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => a,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    ((a = !0), t.preventDefault());
                  },
                  stopPropagation: () => {
                    ((i = !0), t.stopPropagation());
                  },
                });
              }
              a?.current && a.current(e);
            }
          }));
    }
    function x(e) {
      return o.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, o.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: a,
          width: i,
          decoding: s,
          className: l,
          style: d,
          fetchPriority: c,
          placeholder: u,
          loading: f,
          unoptimized: g,
          fill: p,
          onLoadRef: b,
          onLoadingCompleteRef: v,
          setBlurComplete: y,
          setShowAltText: j,
          sizesInput: w,
          onLoad: _,
          onError: P,
          ...O
        },
        C,
      ) => {
        let S = (0, o.useCallback)(
            (e) => {
              e && (P && (e.src = e.src), e.complete && h(e, u, b, v, y, g, w));
            },
            [e, u, b, v, y, P, g, w],
          ),
          E = (0, m.useMergedRef)(C, S);
        return (0, n.jsx)("img", {
          ...O,
          ...x(c),
          loading: f,
          width: i,
          height: a,
          decoding: s,
          "data-nimg": p ? "fill" : "1",
          className: l,
          style: d,
          sizes: r,
          srcSet: t,
          src: e,
          ref: E,
          onLoad: (e) => {
            h(e.currentTarget, u, b, v, y, g, w);
          },
          onError: (e) => {
            (j(!0), "empty" !== u && y(!0), P && P(e));
          },
        });
      },
    );
    function v({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...x(t.fetchPriority),
      };
      return e && s.default.preload
        ? (s.default.preload(t.src, r), null)
        : (0, n.jsx)(l.default, {
            children: (0, n.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes,
            ),
          });
    }
    let y = (0, o.forwardRef)((e, t) => {
      let r = (0, o.useContext)(f.RouterContext),
        a = (0, o.useContext)(u.ImageConfigContext),
        i = (0, o.useMemo)(() => {
          let e = p || a || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            i = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: i,
            localPatterns:
              "undefined" == typeof window ? a?.localPatterns : e.localPatterns,
          };
        }, [a]),
        { onLoad: s, onLoadingComplete: l } = e,
        m = (0, o.useRef)(s);
      (0, o.useEffect)(() => {
        m.current = s;
      }, [s]);
      let h = (0, o.useRef)(l);
      (0, o.useEffect)(() => {
        h.current = l;
      }, [l]);
      let [x, y] = (0, o.useState)(!1),
        [j, w] = (0, o.useState)(!1),
        { props: _, meta: P } = (0, d.getImgProps)(e, {
          defaultLoader: g.default,
          imgConf: i,
          blurComplete: x,
          showAltText: j,
        });
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(b, {
            ..._,
            unoptimized: P.unoptimized,
            placeholder: P.placeholder,
            fill: P.fill,
            onLoadRef: m,
            onLoadingCompleteRef: h,
            setBlurComplete: y,
            setShowAltText: w,
            sizesInput: e.sizes,
            ref: t,
          }),
          P.preload
            ? (0, n.jsx)(v, { isAppRouter: !r, imgAttributes: _ })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  32572,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return d;
      },
    };
    for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
    let n = e.r(22757),
      o = e.r(8813),
      s = e.r(14602),
      l = n._(e.r(15372));
    function d(e) {
      let { props: t } = (0, o.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = s.Image;
  },
  55849,
  (e, t, r) => {
    t.exports = e.r(32572);
  },
  97252,
  (e) => {
    "use strict";
    var t = e.i(70951),
      r = e.i(82180),
      a = e.i(84488),
      i = e.i(91865);
    e.s([
      "default",
      0,
      () => {
        let e = (0, i.useTranslations)("ProjectsPage.CallToAction");
        return (0, t.jsx)("section", {
          className:
            "bg-white dark:bg-gray-900 py-20 transition-colors duration-300",
          children: (0, t.jsx)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: (0, t.jsxs)("div", {
              className:
                "bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-3xl p-12 text-center shadow-2xl",
              children: [
                (0, t.jsx)("h2", {
                  className: "text-4xl font-bold text-white mb-4",
                  children: e("title"),
                }),
                (0, t.jsx)("p", {
                  className: "text-orange-100 mb-8 text-lg max-w-2xl mx-auto",
                  children: e("description"),
                }),
                (0, t.jsx)(r.Button, {
                  size: "lg",
                  asChild: !0,
                  className:
                    "bg-white text-orange-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-orange-400 dark:hover:bg-gray-800 font-semibold transition-all duration-300 transform hover:scale-105",
                  children: (0, t.jsx)(a.default, {
                    href: "mailto:support.cm@awdpay.com",
                    children: e("button"),
                  }),
                }),
              ],
            }),
          }),
        });
      },
    ]);
  },
  44008,
  (e) => {
    "use strict";
    var t = e.i(70951),
      r = e.i(91865);
    e.s([
      "default",
      0,
      () => {
        let e = (0, r.useTranslations)("ProjectsPage.Hero");
        return (0, t.jsxs)("section", {
          className:
            "relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black py-24 lg:py-32 overflow-hidden transition-colors duration-300",
          children: [
            (0, t.jsx)("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10",
            }),
            (0, t.jsx)("div", {
              className: "max-w-7xl mx-auto px-8 relative z-10",
              children: (0, t.jsxs)("div", {
                className: "text-center space-y-8",
                children: [
                  (0, t.jsxs)("h1", {
                    className:
                      "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-white dark:to-gray-300",
                        children: e("title1"),
                      }),
                      (0, t.jsx)("span", {
                        className:
                          "block text-transparent bg-clip-text bg-orange-500 mt-2",
                        children: e("title2"),
                      }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto",
                    children: e("subtitle"),
                  }),
                ],
              }),
            }),
          ],
        });
      },
    ]);
  },
  93937,
  (e) => {
    "use strict";
    var t = e.i(70951),
      r = e.i(14880),
      a = e.i(71878),
      i = e.i(99441);
    function n({ className: e, ...r }) {
      return (0, t.jsx)("div", {
        "data-slot": "card",
        className: (0, i.cn)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          e,
        ),
        ...r,
      });
    }
    function o({ className: e, ...r }) {
      return (0, t.jsx)("div", {
        "data-slot": "card-header",
        className: (0, i.cn)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          e,
        ),
        ...r,
      });
    }
    function s({ className: e, ...r }) {
      return (0, t.jsx)("div", {
        "data-slot": "card-title",
        className: (0, i.cn)("leading-none font-semibold", e),
        ...r,
      });
    }
    function l({ className: e, ...r }) {
      return (0, t.jsx)("div", {
        "data-slot": "card-description",
        className: (0, i.cn)("text-muted-foreground text-sm", e),
        ...r,
      });
    }
    function d({ className: e, ...r }) {
      return (0, t.jsx)("div", {
        "data-slot": "card-content",
        className: (0, i.cn)("px-6", e),
        ...r,
      });
    }
    var c = e.i(55849),
      u = e.i(84488),
      f = e.i(82180),
      g = e.i(91865);
    function m({ project: e }) {
      let r = (0, g.useTranslations)("ProjectsPage");
      return (0, t.jsxs)(n, {
        className:
          "group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
        children: [
          (0, t.jsx)(o, {
            className: "p-0",
            children: (0, t.jsxs)("div", {
              className: "relative h-60",
              children: [
                (0, t.jsx)(c.default, {
                  src: e.image,
                  alt: e.title,
                  fill: !0,
                  className:
                    "object-cover transition-transform duration-500 group-hover:scale-110",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10",
                }),
              ],
            }),
          }),
          (0, t.jsxs)(d, {
            className: "p-6 bg-white dark:bg-gray-800",
            children: [
              (0, t.jsx)(s, {
                className:
                  "text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300",
                children: e.title,
              }),
              (0, t.jsx)(l, {
                className:
                  "mt-2 text-gray-600 dark:text-gray-300 h-20 overflow-hidden",
                children: e.description,
              }),
              (0, t.jsx)("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: e.technologies.map((e) =>
                  (0, t.jsx)(
                    "span",
                    {
                      className:
                        "px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full",
                      children: e,
                    },
                    e,
                  ),
                ),
              }),
              (0, t.jsx)("div", {
                className: "mt-6",
                children: (0, t.jsx)(u.default, {
                  href: e.link,
                  target: "_blank",
                  passHref: !0,
                  children: (0, t.jsx)(f.Button, {
                    variant: "outline",
                    className:
                      "w-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300",
                    children: r("viewProject"),
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    e.s(
      [
        "default",
        0,
        () => {
          (0, g.useTranslations)("ProjectsPage.Categories");
          let [e, i] = (0, a.useState)("all"),
            n =
              "all" === e
                ? r.projects
                : r.projects.filter((t) => t.slug.includes(e));
          return (0, t.jsx)("section", {
            className: "py-6 lg:py-6",
            children: (0, t.jsx)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: (0, t.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: n.map((e) => (0, t.jsx)(m, { project: e }, e.id)),
              }),
            }),
          });
        },
      ],
      93937,
    );
  },
]);
