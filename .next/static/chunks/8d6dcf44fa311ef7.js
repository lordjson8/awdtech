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
      objectFit: s,
    }) {
      let n = r ? 40 * r : e,
        l = a ? 40 * a : t,
        o = n && l ? `viewBox='0 0 ${n} ${l}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${o ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`;
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
        return s;
      },
      imageConfigDefault: function () {
        return n;
      },
    };
    for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
    let s = ["default", "imgix", "cloudinary", "akamai", "custom"],
      n = {
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
          return o;
        },
      }),
      e.r(74815));
    let a = e.r(72912),
      i = e.r(34801),
      s = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function n(e) {
      return void 0 !== e.default;
    }
    function l(e) {
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
    function o(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: o = !1,
        preload: d = !1,
        loading: c,
        className: u,
        quality: g,
        width: m,
        height: x,
        fill: p = !1,
        style: h,
        overrideSrc: f,
        onLoad: v,
        onLoadingComplete: b,
        placeholder: j = "empty",
        blurDataURL: w,
        fetchPriority: y,
        decoding: k = "async",
        layout: N,
        objectFit: _,
        objectPosition: P,
        lazyBoundary: C,
        lazyRoot: S,
        ...E
      },
      O,
    ) {
      var M;
      let z,
        R,
        T,
        { imgConf: A, showAltText: I, blurComplete: L, defaultLoader: D } = O,
        $ = A || i.imageConfigDefault;
      if ("allSizes" in $) z = $;
      else {
        let e = [...$.deviceSizes, ...$.imageSizes].sort((e, t) => e - t),
          t = $.deviceSizes.sort((e, t) => e - t),
          r = $.qualities?.sort((e, t) => e - t);
        z = { ...$, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === D)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let F = E.loader || D;
      (delete E.loader, delete E.srcSet);
      let B = "__next_img_default" in F;
      if (B) {
        if ("custom" === z.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let e = F;
        F = (t) => {
          let { config: r, ...a } = t;
          return e(a);
        };
      }
      if (N) {
        "fill" === N && (p = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[N];
        e && (h = { ...h, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[N];
        r && !t && (t = r);
      }
      let W = "",
        H = l(m),
        U = l(x);
      if ((M = e) && "object" == typeof M && (n(M) || void 0 !== M.src)) {
        let t = n(e) ? e.default : e;
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
          ((R = t.blurWidth),
          (T = t.blurHeight),
          (w = w || t.blurDataURL),
          (W = t.src),
          !p)
        )
          if (H || U) {
            if (H && !U) {
              let e = H / t.width;
              U = Math.round(t.height * e);
            } else if (!H && U) {
              let e = U / t.height;
              H = Math.round(t.width * e);
            }
          } else ((H = t.width), (U = t.height));
      }
      let q = !o && !d && ("lazy" === c || void 0 === c);
      ((!(e = "string" == typeof e ? e : W) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (q = !1)),
        z.unoptimized && (r = !0),
        B &&
          !z.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0));
      let G = l(g),
        V = Object.assign(
          p
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: _,
                objectPosition: P,
              }
            : {},
          I ? {} : { color: "transparent" },
          h,
        ),
        X =
          L || "empty" === j
            ? null
            : "blur" === j
              ? `url("data:image/svg+xml;charset=utf-8,${(0, a.getImageBlurSvg)({ widthInt: H, heightInt: U, blurWidth: R, blurHeight: T, blurDataURL: w || "", objectFit: V.objectFit })}")`
              : `url("${j}")`,
        J = s.includes(V.objectFit)
          ? "fill" === V.objectFit
            ? "100% 100%"
            : "cover"
          : V.objectFit,
        K = X
          ? {
              backgroundSize: J,
              backgroundPosition: V.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: X,
            }
          : {},
        Q = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: a,
          quality: i,
          sizes: s,
          loader: n,
        }) {
          if (r) return { src: t, srcSet: void 0, sizes: void 0 };
          let { widths: l, kind: o } = (function (
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
            })(e, a, s),
            d = l.length - 1;
          return {
            sizes: s || "w" !== o ? s : "100vw",
            srcSet: l
              .map(
                (r, a) =>
                  `${n({ config: e, src: t, quality: i, width: r })} ${"w" === o ? r : a + 1}${o}`,
              )
              .join(", "),
            src: n({ config: e, src: t, quality: i, width: l[d] }),
          };
        })({
          config: z,
          src: e,
          unoptimized: r,
          width: H,
          quality: G,
          sizes: t,
          loader: F,
        }),
        Y = q ? "lazy" : c;
      return {
        props: {
          ...E,
          loading: Y,
          fetchPriority: y,
          width: H,
          height: U,
          decoding: k,
          className: u,
          style: { ...V, ...K },
          sizes: Q.sizes,
          srcSet: Q.srcSet,
          src: f || Q.src,
        },
        meta: { unoptimized: r, preload: d || o, placeholder: j, fill: p },
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
          return l;
        },
      }));
    let a = e.r(71878),
      i = "undefined" == typeof window,
      s = i ? () => {} : a.useLayoutEffect,
      n = i ? () => {} : a.useEffect;
    function l(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function l() {
        if (t && t.mountedInstances) {
          let e = a.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean),
          );
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), l()),
        s(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          ),
        ),
        s(
          () => (
            t && (t._pendingUpdate = l),
            () => {
              t && (t._pendingUpdate = l);
            }
          ),
        ),
        n(
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
    let s = e.r(22757),
      n = e.r(76095),
      l = e.r(70951),
      o = n._(e.r(71878)),
      d = s._(e.r(71146)),
      c = e.r(53685);
    function u() {
      return [
        (0, l.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, l.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport",
        ),
      ];
    }
    function g(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
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
    let m = ["name", "httpEquiv", "charSet", "itemProp"];
    function x(e) {
      let t, r, a, i;
      return e
        .reduce(g, [])
        .reverse()
        .concat(u().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (a = new Set()),
          (i = {}),
          (e) => {
            let s = !0,
              n = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              n = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (s = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (s = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = m.length; t < r; t++) {
                  let r = m[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) a.has(r) ? (s = !1) : a.add(r);
                    else {
                      let t = e.props[r],
                        a = i[r] || new Set();
                      ("name" !== r || !n) && a.has(t)
                        ? (s = !1)
                        : (a.add(t), (i[r] = a));
                    }
                }
            }
            return s;
          }),
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return o.default.cloneElement(e, { key: r });
        });
    }
    let p = function ({ children: e }) {
      let t = (0, o.useContext)(c.HeadManagerContext);
      return (0, l.jsx)(d.default, {
        reduceComponentsToState: x,
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
          return s;
        },
      }));
    let a = e.r(22757)._(e.r(71878)),
      i = e.r(34801),
      s = a.default.createContext(i.imageConfigDefault);
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
          return s;
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
      let s = (0, a.findClosestQuality)(i, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${(t.startsWith("/_next/static/media/"), "")}`;
    }
    i.__next_img_default = !0;
    let s = i;
  },
  14602,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return j;
        },
      }));
    let a = e.r(22757),
      i = e.r(76095),
      s = e.r(70951),
      n = i._(e.r(71878)),
      l = a._(e.r(13725)),
      o = a._(e.r(78412)),
      d = e.r(8813),
      c = e.r(34801),
      u = e.r(42985);
    e.r(74815);
    let g = e.r(41876),
      m = a._(e.r(15372)),
      x = e.r(81634),
      p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function h(e, t, r, a, i, s, n) {
      let l = e?.src;
      e &&
        e["data-loaded-src"] !== l &&
        ((e["data-loaded-src"] = l),
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
    function f(e) {
      return n.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = (0, n.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: a,
          width: i,
          decoding: l,
          className: o,
          style: d,
          fetchPriority: c,
          placeholder: u,
          loading: g,
          unoptimized: m,
          fill: p,
          onLoadRef: v,
          onLoadingCompleteRef: b,
          setBlurComplete: j,
          setShowAltText: w,
          sizesInput: y,
          onLoad: k,
          onError: N,
          ..._
        },
        P,
      ) => {
        let C = (0, n.useCallback)(
            (e) => {
              e && (N && (e.src = e.src), e.complete && h(e, u, v, b, j, m, y));
            },
            [e, u, v, b, j, N, m, y],
          ),
          S = (0, x.useMergedRef)(P, C);
        return (0, s.jsx)("img", {
          ..._,
          ...f(c),
          loading: g,
          width: i,
          height: a,
          decoding: l,
          "data-nimg": p ? "fill" : "1",
          className: o,
          style: d,
          sizes: r,
          srcSet: t,
          src: e,
          ref: S,
          onLoad: (e) => {
            h(e.currentTarget, u, v, b, j, m, y);
          },
          onError: (e) => {
            (w(!0), "empty" !== u && j(!0), N && N(e));
          },
        });
      },
    );
    function b({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...f(t.fetchPriority),
      };
      return e && l.default.preload
        ? (l.default.preload(t.src, r), null)
        : (0, s.jsx)(o.default, {
            children: (0, s.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes,
            ),
          });
    }
    let j = (0, n.forwardRef)((e, t) => {
      let r = (0, n.useContext)(g.RouterContext),
        a = (0, n.useContext)(u.ImageConfigContext),
        i = (0, n.useMemo)(() => {
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
        { onLoad: l, onLoadingComplete: o } = e,
        x = (0, n.useRef)(l);
      (0, n.useEffect)(() => {
        x.current = l;
      }, [l]);
      let h = (0, n.useRef)(o);
      (0, n.useEffect)(() => {
        h.current = o;
      }, [o]);
      let [f, j] = (0, n.useState)(!1),
        [w, y] = (0, n.useState)(!1),
        { props: k, meta: N } = (0, d.getImgProps)(e, {
          defaultLoader: m.default,
          imgConf: i,
          blurComplete: f,
          showAltText: w,
        });
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(v, {
            ...k,
            unoptimized: N.unoptimized,
            placeholder: N.placeholder,
            fill: N.fill,
            onLoadRef: x,
            onLoadingCompleteRef: h,
            setBlurComplete: j,
            setShowAltText: y,
            sizesInput: e.sizes,
            ref: t,
          }),
          N.preload
            ? (0, s.jsx)(b, { isAppRouter: !r, imgAttributes: k })
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
    let s = e.r(22757),
      n = e.r(8813),
      l = e.r(14602),
      o = s._(e.r(15372));
    function d(e) {
      let { props: t } = (0, n.getImgProps)(e, {
        defaultLoader: o.default,
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
    let c = l.Image;
  },
  55849,
  (e, t, r) => {
    t.exports = e.r(32572);
  },
  83567,
  (e) => {
    "use strict";
    var t = e.i(70951);
    function r({ children: e }) {
      return (0, t.jsx)("div", {
        className:
          "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8",
        children: e,
      });
    }
    e.s(["default", () => r]);
  },
  59001,
  (e) => {
    "use strict";
    var t = e.i(70951),
      r = e.i(55849),
      a = e.i(83567),
      i = e.i(91865),
      s = e.i(84488);
    e.s([
      "default",
      0,
      () => {
        let e = (0, i.useTranslations)("MobilePage.Hero"),
          n = [
            { icon: "⚡", title: e("feature1Title"), desc: e("feature1Desc") },
            { icon: "🎯", title: e("feature2Title"), desc: e("feature2Desc") },
            { icon: "🚀", title: e("feature3Title"), desc: e("feature3Desc") },
          ];
        return (0, t.jsxs)("section", {
          className:
            "relative  bg-cover bg-center bg-no-repeat min-h-screen pt-6 max-md:mt-32 flex items-center justify-center overflow-hidden   transition-colors duration-300",
          children: [
            (0, t.jsx)("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent dark:from-orange-500/10",
            }),
            (0, t.jsx)(a.default, {
              children: (0, t.jsxs)("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10",
                children: [
                  (0, t.jsxs)("div", {
                    className: "text-center lg:text-left space-y-8",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, t.jsxs)("h1", {
                            className:
                              "text-4xl lg:text-6xl font-black leading-tight tracking-tight",
                            children: [
                              (0, t.jsx)("span", {
                                className:
                                  "block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-white dark:to-gray-300",
                                children: e("title1"),
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 mt-2",
                                children: e("title2"),
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl",
                            dangerouslySetInnerHTML: {
                              __html: e.raw("description"),
                            },
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl",
                        children: n.map((e, r) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              className:
                                "flex items-center gap-3 text-left bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-white/5 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-orange-500/10",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-2xl",
                                  children: e.icon,
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "font-semibold text-gray-900 dark:text-white text-sm",
                                      children: e.title,
                                    }),
                                    (0, t.jsx)("div", {
                                      className:
                                        "text-gray-500 dark:text-gray-400 text-xs",
                                      children: e.desc,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            r,
                          ),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: "flex flex-col sm:flex-row gap-4 pt-8",
                        children: (0, t.jsxs)(s.default, {
                          href: "/contact",
                          className:
                            "group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 overflow-hidden",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000",
                            }),
                            (0, t.jsxs)("span", {
                              className: "relative flex items-center gap-3",
                              children: [
                                e("ctaButton"),
                                (0, t.jsx)("svg", {
                                  className:
                                    "w-5 h-5 group-hover:translate-x-1 transition-transform",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M13 7l5 5m0 0l-5 5m5-5H6",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "relative flex justify-center lg:justify-end",
                    children: (0, t.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-30 dark:opacity-50 animate-pulse",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-[3rem] p-8 shadow-2xl border border-gray-300 dark:border-white/10 backdrop-blur-sm",
                          children: (0, t.jsxs)("div", {
                            className: "relative w-80 h-[600px]",
                            children: [
                              (0, t.jsx)(r.default, {
                                src: "/phone.png",
                                alt: e("imageAlt"),
                                fill: !0,
                                className: "object-contain drop-shadow-2xl",
                                priority: !0,
                                sizes: "(max-width: 768px) 100vw, 50vw",
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "absolute inset-8 rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10",
                                children: (0, t.jsx)("div", {
                                  className:
                                    "absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] animate-shine",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute max-lg:hidden -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12",
                          children: (0, t.jsx)("span", {
                            className: "text-2xl",
                            children: "📱",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute max-lg:hidden -bottom-4 -left-4 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-12",
                          children: (0, t.jsx)("span", {
                            className: "text-xl",
                            children: "🎮",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      },
    ]);
  },
  34512,
  (e) => {
    "use strict";
    var t = e.i(70951),
      r = e.i(91865),
      a = e.i(84488);
    function i() {
      let e = (0, r.useTranslations)("MobilePage.Features"),
        i = [
          {
            icon: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-6 h-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
              }),
            }),
            title: e("native.title"),
            description: e("native.description"),
            linkText: e("native.link"),
          },
          {
            icon: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-6 h-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M13 10V3L4 14h7v7l9-11h-7z",
              }),
            }),
            title: e("crossPlatform.title"),
            description: e("crossPlatform.description"),
            linkText: e("crossPlatform.link"),
          },
          {
            icon: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-6 h-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              }),
            }),
            title: e("uiux.title"),
            description: e("uiux.description"),
            linkText: e("uiux.link"),
          },
          {
            icon: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-6 h-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              }),
            }),
            title: e("security.title"),
            description: e("security.description"),
            linkText: e("security.link"),
          },
          {
            icon: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-6 h-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
              }),
            }),
            title: e("integration.title"),
            description: e("integration.description"),
            linkText: e("integration.link"),
          },
          {
            icon: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-6 h-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
              }),
            }),
            title: e("publication.title"),
            description: e("publication.description"),
            linkText: e("publication.link"),
          },
        ];
      return (0, t.jsx)("section", {
        className: "bg-white dark:bg-gray-900",
        children: (0, t.jsxs)("div", {
          className: "px-6 py-16 mx-auto max-w-7xl",
          children: [
            (0, t.jsxs)("div", {
              className: "text-center max-w-3xl mx-auto mb-16",
              children: [
                (0, t.jsx)("h1", {
                  className:
                    "text-3xl font-bold text-gray-800 capitalize lg:text-4xl dark:text-white",
                  dangerouslySetInnerHTML: { __html: e.raw("title") },
                }),
                (0, t.jsx)("p", {
                  className:
                    "mt-4 text-lg text-gray-600 xl:mt-6 dark:text-gray-300",
                  children: e("description"),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3",
              children: i.map((e, r) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className:
                      "space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-500/30",
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "inline-block p-3 text-orange-600 bg-orange-100 rounded-full dark:text-white dark:bg-orange-500",
                        children: e.icon,
                      }),
                      (0, t.jsx)("h1", {
                        className:
                          "text-xl font-semibold text-gray-800 capitalize dark:text-white",
                        children: e.title,
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-gray-600 dark:text-gray-300 leading-relaxed",
                        children: e.description,
                      }),
                      (0, t.jsxs)("a", {
                        href: "#",
                        className:
                          "inline-flex items-center text-sm font-medium text-orange-500 capitalize transition-colors duration-300 transform dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300",
                        children: [
                          (0, t.jsx)("span", {
                            className: "mx-1",
                            children: e.linkText,
                          }),
                          (0, t.jsx)("svg", {
                            className: "w-4 h-4 mx-1 rtl:-scale-x-100",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, t.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                              clipRule: "evenodd",
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  r,
                ),
              ),
            }),
            (0, t.jsx)("div", {
              className: "text-center mt-16",
              children: (0, t.jsxs)("div", {
                className:
                  "bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white",
                children: [
                  (0, t.jsx)("h3", {
                    className: "text-2xl font-bold mb-4",
                    children: e("cta.title"),
                  }),
                  (0, t.jsx)("p", {
                    className: "text-orange-100 mb-6 max-w-2xl mx-auto",
                    children: e("cta.description"),
                  }),
                  (0, t.jsx)(a.default, {
                    href: "/contact",
                    className:
                      "bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105",
                    children: e("cta.button"),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    e.s(["default", () => i]);
  },
  23474,
  (e) => {
    "use strict";
    var t = e.i(70951),
      r = e.i(78766),
      a = e.i(15830),
      i = e.i(91865);
    e.s([
      "default",
      0,
      () => {
        let e = (0, i.useTranslations)("MobilePage.Expertise"),
          s = [
            {
              name: e("ios.name"),
              description: e("ios.description"),
              stack: [
                {
                  name: "Swift",
                  icon: (0, t.jsx)(r.FaSwift, { className: "text-orange-500" }),
                  level: e("ios.levelExpert"),
                },
                {
                  name: "Objective-C",
                  icon: (0, t.jsx)("span", {
                    className: "text-lg text-gray-600 dark:text-gray-400",
                    children: "",
                  }),
                  level: e("ios.levelAdvanced"),
                },
                {
                  name: "Xcode",
                  icon: (0, t.jsx)(a.SiXcode, { className: "text-blue-500" }),
                  level: e("ios.levelExpert"),
                },
              ],
              gradient: "from-blue-500 to-purple-600",
              projects: e("ios.projects"),
            },
            {
              name: e("android.name"),
              description: e("android.description"),
              stack: [
                {
                  name: "Kotlin",
                  icon: (0, t.jsx)(a.SiKotlin, {
                    className: "text-purple-500",
                  }),
                  level: e("android.levelExpert"),
                },
                {
                  name: "Java",
                  icon: (0, t.jsx)(r.FaJava, { className: "text-red-500" }),
                  level: e("android.levelAdvanced"),
                },
                {
                  name: "Android Studio",
                  icon: (0, t.jsx)(a.SiAndroidstudio, {
                    className: "text-green-500",
                  }),
                  level: e("android.levelExpert"),
                },
              ],
              gradient: "from-green-500 to-emerald-600",
              projects: e("android.projects"),
            },
            {
              name: e("crossPlatform.name"),
              description: e("crossPlatform.description"),
              stack: [
                {
                  name: "React Native",
                  icon: (0, t.jsx)(r.FaReact, { className: "text-cyan-400" }),
                  level: e("crossPlatform.levelExpert"),
                },
                {
                  name: "Flutter",
                  icon: (0, t.jsx)(a.SiFlutter, { className: "text-blue-400" }),
                  level: e("crossPlatform.levelAdvanced"),
                },
                {
                  name: "Dart",
                  icon: (0, t.jsx)(a.SiDart, { className: "text-blue-600" }),
                  level: e("crossPlatform.levelAdvanced"),
                },
              ],
              gradient: "from-cyan-500 to-blue-600",
              projects: e("crossPlatform.projects"),
            },
            {
              name: e("backendCloud.name"),
              description: e("backendCloud.description"),
              stack: [
                {
                  name: "Node.js",
                  icon: (0, t.jsx)(r.FaNodeJs, { className: "text-green-500" }),
                  level: e("backendCloud.levelExpert"),
                },
                {
                  name: "Firebase",
                  icon: (0, t.jsx)(a.SiFirebase, {
                    className: "text-yellow-500",
                  }),
                  level: e("backendCloud.levelExpert"),
                },
                {
                  name: "AWS",
                  icon: (0, t.jsx)(r.FaAws, { className: "text-orange-500" }),
                  level: e("backendCloud.levelAdvanced"),
                },
                {
                  name: "GraphQL",
                  icon: (0, t.jsx)(a.SiGraphql, { className: "text-pink-500" }),
                  level: e("backendCloud.levelIntermediate"),
                },
              ],
              gradient: "from-orange-500 to-red-600",
              projects: e("backendCloud.projects"),
            },
          ],
          n = [
            { number: "50+", label: e("stats.deliveredApps") },
            { number: "95%", label: e("stats.clientSatisfaction") },
            { number: "3+", label: e("stats.yearsExperience") },
            { number: "15K+", label: e("stats.activeUsers") },
          ];
        return (0, t.jsxs)("section", {
          className:
            "relative bg-white dark:bg-gray-900 py-24 overflow-hidden transition-colors duration-300",
          children: [
            (0, t.jsx)("div", {
              className:
                "absolute inset-0 bg-orange-500/5 dark:bg-transparent via-transparent to-transparent",
            }),
            (0, t.jsxs)("div", {
              className: "max-w-7xl mx-auto px-6",
              children: [
                (0, t.jsxs)("div", {
                  className: "text-center max-w-4xl mx-auto mb-20",
                  children: [
                    (0, t.jsx)("h2", {
                      className:
                        "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight",
                      dangerouslySetInnerHTML: { __html: e.raw("title") },
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto",
                      children: e("description"),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10",
                  children: s.map((r, a) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className:
                          "group relative bg-white dark:bg-gray-800 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/10",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "mb-6",
                            children: [
                              (0, t.jsx)("div", {
                                className: `w-12 h-1 bg-gradient-to-r ${r.gradient} rounded-full mb-4 group-hover:w-16 transition-all duration-300`,
                              }),
                              (0, t.jsx)("h3", {
                                className:
                                  "text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 dark:group-hover:from-orange-400 dark:group-hover:to-orange-600 transition-all duration-300",
                                children: r.name,
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: r.description,
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "space-y-4",
                            children: r.stack.map((r, a) =>
                              (0, t.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-2xl border border-gray-200 dark:border-gray-600/30 hover:border-gray-300 dark:hover:border-gray-500/50 transition-all duration-300 group/tech hover:bg-gray-100 dark:hover:bg-gray-700/50",
                                  style: { animationDelay: `${100 * a}ms` },
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, t.jsx)("div", {
                                          className:
                                            "text-2xl transform group-hover/tech:scale-110 transition-transform duration-300",
                                          children: r.icon,
                                        }),
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "text-gray-900 dark:text-white font-semibold text-sm",
                                              children: r.name,
                                            }),
                                            (0, t.jsx)("div", {
                                              className:
                                                "text-gray-500 dark:text-gray-400 text-xs",
                                              children: r.level,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "flex gap-1",
                                      children: [1, 2, 3].map((a) => {
                                        var i;
                                        return (0, t.jsx)(
                                          "div",
                                          {
                                            className: `w-2 h-2 rounded-full transition-all duration-300 ${a <= ((i = r.level) === e("ios.levelExpert") || i === e("android.levelExpert") || i === e("crossPlatform.levelExpert") || i === e("backendCloud.levelExpert") ? 3 : i === e("ios.levelAdvanced") || i === e("android.levelAdvanced") || i === e("crossPlatform.levelAdvanced") || i === e("backendCloud.levelAdvanced") ? 2 : +(i === e("backendCloud.levelIntermediate"))) ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-600"}`,
                                          },
                                          a,
                                        );
                                      }),
                                    }),
                                  ],
                                },
                                r.name,
                              ),
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "mt-6 pt-4 border-t border-gray-200 dark:border-gray-700/50",
                            children: (0, t.jsxs)("div", {
                              className:
                                "flex items-center justify-between text-sm",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-gray-500 dark:text-gray-400",
                                  children: e("projectsDelivered"),
                                }),
                                (0, t.jsx)("span", {
                                  className:
                                    "text-orange-500 dark:text-orange-400 font-semibold",
                                  children: r.projects,
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      r.name,
                    ),
                  ),
                }),
                (0, t.jsx)("div", {
                  className:
                    "grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto",
                  children: n.map((e, r) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className: "text-center group",
                        children: (0, t.jsxs)("div", {
                          className:
                            "bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "text-3xl font-bold text-orange-500 mb-2",
                              children: e.number,
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "text-gray-600 dark:text-gray-400 text-sm font-medium",
                              children: e.label,
                            }),
                          ],
                        }),
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
  42580,
  (e) => {
    "use strict";
    var t = e.i(70951),
      r = e.i(82180),
      a = e.i(84488),
      i = e.i(83567),
      s = e.i(91865);
    e.s([
      "default",
      0,
      () => {
        let e = (0, s.useTranslations)("MobilePage.CallToAction");
        return (0, t.jsx)("section", {
          className:
            "bg-white dark:bg-gray-900 py-20 transition-colors duration-300",
          children: (0, t.jsx)(i.default, {
            children: (0, t.jsxs)("div", {
              className:
                "bg-gradient-to-r w-full from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-3xl p-12 text-center shadow-2xl",
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
]);
