module.exports = [
  36549,
  (a) => {
    "use strict";
    var b = a.i(61289);
    function c(a, b) {
      if ("function" == typeof a) return a(b);
      null != a && (a.current = b);
    }
    function d(...a) {
      return (b) => {
        let d = !1,
          e = a.map((a) => {
            let e = c(a, b);
            return (d || "function" != typeof e || (d = !0), e);
          });
        if (d)
          return () => {
            for (let b = 0; b < e.length; b++) {
              let d = e[b];
              "function" == typeof d ? d() : c(a[b], null);
            }
          };
      };
    }
    function e(...a) {
      return b.useCallback(d(...a), a);
    }
    a.s(["composeRefs", () => d, "useComposedRefs", () => e]);
  },
  37477,
  (a) => {
    "use strict";
    let b, c, d;
    var e = a.i(61289),
      f = a.i(36549),
      g = a.i(99669),
      h = Symbol.for("react.lazy"),
      i = e[" use ".trim().toString()];
    function j(a) {
      var b;
      return (
        null != a &&
        "object" == typeof a &&
        "$$typeof" in a &&
        a.$$typeof === h &&
        "_payload" in a &&
        "object" == typeof (b = a._payload) &&
        null !== b &&
        "then" in b
      );
    }
    var k =
        (((d = e.forwardRef((a, b) => {
          let { children: c, ...d } = a;
          if (
            (j(c) && "function" == typeof i && (c = i(c._payload)),
            e.isValidElement(c))
          ) {
            var g;
            let a,
              h,
              i =
                ((g = c),
                (h =
                  (a = Object.getOwnPropertyDescriptor(g.props, "ref")?.get) &&
                  "isReactWarning" in a &&
                  a.isReactWarning)
                  ? g.ref
                  : (h =
                        (a = Object.getOwnPropertyDescriptor(g, "ref")?.get) &&
                        "isReactWarning" in a &&
                        a.isReactWarning)
                    ? g.props.ref
                    : g.props.ref || g.ref),
              j = (function (a, b) {
                let c = { ...b };
                for (let d in b) {
                  let e = a[d],
                    f = b[d];
                  /^on[A-Z]/.test(d)
                    ? e && f
                      ? (c[d] = (...a) => {
                          let b = f(...a);
                          return (e(...a), b);
                        })
                      : e && (c[d] = e)
                    : "style" === d
                      ? (c[d] = { ...e, ...f })
                      : "className" === d &&
                        (c[d] = [e, f].filter(Boolean).join(" "));
                }
                return { ...a, ...c };
              })(d, c.props);
            return (
              c.type !== e.Fragment &&
                (j.ref = b ? (0, f.composeRefs)(b, i) : i),
              e.cloneElement(c, j)
            );
          }
          return e.Children.count(c) > 1 ? e.Children.only(null) : null;
        })).displayName = "Slot.SlotClone"),
        (b = d),
        ((c = e.forwardRef((a, c) => {
          let { children: d, ...f } = a;
          j(d) && "function" == typeof i && (d = i(d._payload));
          let h = e.Children.toArray(d),
            k = h.find(m);
          if (k) {
            let a = k.props.children,
              d = h.map((b) =>
                b !== k
                  ? b
                  : e.Children.count(a) > 1
                    ? e.Children.only(null)
                    : e.isValidElement(a)
                      ? a.props.children
                      : null,
              );
            return (0, g.jsx)(b, {
              ...f,
              ref: c,
              children: e.isValidElement(a)
                ? e.cloneElement(a, void 0, d)
                : null,
            });
          }
          return (0, g.jsx)(b, { ...f, ref: c, children: d });
        })).displayName = "Slot.Slot"),
        c),
      l = Symbol("radix.slottable");
    function m(a) {
      return (
        e.isValidElement(a) &&
        "function" == typeof a.type &&
        "__radixId" in a.type &&
        a.type.__radixId === l
      );
    }
    a.s(["Slot", () => k]);
  },
  10319,
  (a) => {
    "use strict";
    function b() {
      for (var a, b, c = 0, d = "", e = arguments.length; c < e; c++)
        (a = arguments[c]) &&
          (b = (function a(b) {
            var c,
              d,
              e = "";
            if ("string" == typeof b || "number" == typeof b) e += b;
            else if ("object" == typeof b)
              if (Array.isArray(b)) {
                var f = b.length;
                for (c = 0; c < f; c++)
                  b[c] && (d = a(b[c])) && (e && (e += " "), (e += d));
              } else for (d in b) b[d] && (e && (e += " "), (e += d));
            return e;
          })(a)) &&
          (d && (d += " "), (d += b));
      return d;
    }
    a.s(["clsx", () => b]);
  },
  44778,
  (a) => {
    "use strict";
    var b = a.i(10319);
    let c = (a) => ("boolean" == typeof a ? `${a}` : 0 === a ? "0" : a),
      d = b.clsx;
    a.s([
      "cva",
      0,
      (a, b) => (e) => {
        var f;
        if ((null == b ? void 0 : b.variants) == null)
          return d(
            a,
            null == e ? void 0 : e.class,
            null == e ? void 0 : e.className,
          );
        let { variants: g, defaultVariants: h } = b,
          i = Object.keys(g).map((a) => {
            let b = null == e ? void 0 : e[a],
              d = null == h ? void 0 : h[a];
            if (null === b) return null;
            let f = c(b) || c(d);
            return g[a][f];
          }),
          j =
            e &&
            Object.entries(e).reduce((a, b) => {
              let [c, d] = b;
              return (void 0 === d || (a[c] = d), a);
            }, {});
        return d(
          a,
          i,
          null == b || null == (f = b.compoundVariants)
            ? void 0
            : f.reduce((a, b) => {
                let { class: c, className: d, ...e } = b;
                return Object.entries(e).every((a) => {
                  let [b, c] = a;
                  return Array.isArray(c)
                    ? c.includes({ ...h, ...j }[b])
                    : { ...h, ...j }[b] === c;
                })
                  ? [...a, c, d]
                  : a;
              }, []),
          null == e ? void 0 : e.class,
          null == e ? void 0 : e.className,
        );
      },
    ]);
  },
  84032,
  (a) => {
    "use strict";
    var b = a.i(10319);
    let c = (a = new Map(), b = null, c) => ({
        nextPart: a,
        validators: b,
        classGroupId: c,
      }),
      d = [],
      e = (a, b, c) => {
        if (0 == a.length - b) return c.classGroupId;
        let d = a[b],
          f = c.nextPart.get(d);
        if (f) {
          let c = e(a, b + 1, f);
          if (c) return c;
        }
        let g = c.validators;
        if (null === g) return;
        let h = 0 === b ? a.join("-") : a.slice(b).join("-"),
          i = g.length;
        for (let a = 0; a < i; a++) {
          let b = g[a];
          if (b.validator(h)) return b.classGroupId;
        }
      },
      f = (a, b) => {
        let d = c();
        for (let c in a) g(a[c], d, c, b);
        return d;
      },
      g = (a, b, c, d) => {
        let e = a.length;
        for (let f = 0; f < e; f++) h(a[f], b, c, d);
      },
      h = (a, b, c, d) => {
        "string" == typeof a
          ? i(a, b, c)
          : "function" == typeof a
            ? j(a, b, c, d)
            : k(a, b, c, d);
      },
      i = (a, b, c) => {
        ("" === a ? b : l(b, a)).classGroupId = c;
      },
      j = (a, b, c, d) => {
        m(a)
          ? g(a(d), b, c, d)
          : (null === b.validators && (b.validators = []),
            b.validators.push({ classGroupId: c, validator: a }));
      },
      k = (a, b, c, d) => {
        let e = Object.entries(a),
          f = e.length;
        for (let a = 0; a < f; a++) {
          let [f, h] = e[a];
          g(h, l(b, f), c, d);
        }
      },
      l = (a, b) => {
        let d = a,
          e = b.split("-"),
          f = e.length;
        for (let a = 0; a < f; a++) {
          let b = e[a],
            f = d.nextPart.get(b);
          (f || ((f = c()), d.nextPart.set(b, f)), (d = f));
        }
        return d;
      },
      m = (a) => "isThemeGetter" in a && !0 === a.isThemeGetter,
      n = [],
      o = (a, b, c, d, e) => ({
        modifiers: a,
        hasImportantModifier: b,
        baseClassName: c,
        maybePostfixModifierPosition: d,
        isExternal: e,
      }),
      p = /\s+/,
      q = (a) => {
        let b;
        if ("string" == typeof a) return a;
        let c = "";
        for (let d = 0; d < a.length; d++)
          a[d] && (b = q(a[d])) && (c && (c += " "), (c += b));
        return c;
      },
      r = [],
      s = (a) => {
        let b = (b) => b[a] || r;
        return ((b.isThemeGetter = !0), b);
      },
      t = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
      u = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
      v = /^\d+\/\d+$/,
      w = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      x =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      y = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      z = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      A =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      B = (a) => v.test(a),
      C = (a) => !!a && !Number.isNaN(Number(a)),
      D = (a) => !!a && Number.isInteger(Number(a)),
      E = (a) => a.endsWith("%") && C(a.slice(0, -1)),
      F = (a) => w.test(a),
      G = () => !0,
      H = (a) => x.test(a) && !y.test(a),
      I = () => !1,
      J = (a) => z.test(a),
      K = (a) => A.test(a),
      L = (a) => !N(a) && !T(a),
      M = (a) => $(a, ac, I),
      N = (a) => t.test(a),
      O = (a) => $(a, ad, H),
      P = (a) => $(a, ae, C),
      Q = (a) => $(a, aa, I),
      R = (a) => $(a, ab, K),
      S = (a) => $(a, ag, J),
      T = (a) => u.test(a),
      U = (a) => _(a, ad),
      V = (a) => _(a, af),
      W = (a) => _(a, aa),
      X = (a) => _(a, ac),
      Y = (a) => _(a, ab),
      Z = (a) => _(a, ag, !0),
      $ = (a, b, c) => {
        let d = t.exec(a);
        return !!d && (d[1] ? b(d[1]) : c(d[2]));
      },
      _ = (a, b, c = !1) => {
        let d = u.exec(a);
        return !!d && (d[1] ? b(d[1]) : c);
      },
      aa = (a) => "position" === a || "percentage" === a,
      ab = (a) => "image" === a || "url" === a,
      ac = (a) => "length" === a || "size" === a || "bg-size" === a,
      ad = (a) => "length" === a,
      ae = (a) => "number" === a,
      af = (a) => "family-name" === a,
      ag = (a) => "shadow" === a,
      ah = ((a, ...b) => {
        let c,
          g,
          h,
          i,
          j = (a) => {
            let b = g(a);
            if (b) return b;
            let d = ((a, b) => {
              let {
                  parseClassName: c,
                  getClassGroupId: d,
                  getConflictingClassGroupIds: e,
                  sortModifiers: f,
                } = b,
                g = [],
                h = a.trim().split(p),
                i = "";
              for (let a = h.length - 1; a >= 0; a -= 1) {
                let b = h[a],
                  {
                    isExternal: j,
                    modifiers: k,
                    hasImportantModifier: l,
                    baseClassName: m,
                    maybePostfixModifierPosition: n,
                  } = c(b);
                if (j) {
                  i = b + (i.length > 0 ? " " + i : i);
                  continue;
                }
                let o = !!n,
                  p = d(o ? m.substring(0, n) : m);
                if (!p) {
                  if (!o || !(p = d(m))) {
                    i = b + (i.length > 0 ? " " + i : i);
                    continue;
                  }
                  o = !1;
                }
                let q =
                    0 === k.length
                      ? ""
                      : 1 === k.length
                        ? k[0]
                        : f(k).join(":"),
                  r = l ? q + "!" : q,
                  s = r + p;
                if (g.indexOf(s) > -1) continue;
                g.push(s);
                let t = e(p, o);
                for (let a = 0; a < t.length; ++a) {
                  let b = t[a];
                  g.push(r + b);
                }
                i = b + (i.length > 0 ? " " + i : i);
              }
              return i;
            })(a, c);
            return (h(a, d), d);
          };
        return (
          (i = (k) => {
            var l;
            let m;
            return (
              (g = (c = {
                cache: ((a) => {
                  if (a < 1) return { get: () => void 0, set: () => {} };
                  let b = 0,
                    c = Object.create(null),
                    d = Object.create(null),
                    e = (e, f) => {
                      ((c[e] = f),
                        ++b > a &&
                          ((b = 0), (d = c), (c = Object.create(null))));
                    };
                  return {
                    get(a) {
                      let b = c[a];
                      return void 0 !== b
                        ? b
                        : void 0 !== (b = d[a])
                          ? (e(a, b), b)
                          : void 0;
                    },
                    set(a, b) {
                      a in c ? (c[a] = b) : e(a, b);
                    },
                  };
                })((l = b.reduce((a, b) => b(a), a())).cacheSize),
                parseClassName: ((a) => {
                  let { prefix: b, experimentalParseClassName: c } = a,
                    d = (a) => {
                      let b,
                        c = [],
                        d = 0,
                        e = 0,
                        f = 0,
                        g = a.length;
                      for (let h = 0; h < g; h++) {
                        let g = a[h];
                        if (0 === d && 0 === e) {
                          if (":" === g) {
                            (c.push(a.slice(f, h)), (f = h + 1));
                            continue;
                          }
                          if ("/" === g) {
                            b = h;
                            continue;
                          }
                        }
                        "[" === g
                          ? d++
                          : "]" === g
                            ? d--
                            : "(" === g
                              ? e++
                              : ")" === g && e--;
                      }
                      let h = 0 === c.length ? a : a.slice(f),
                        i = h,
                        j = !1;
                      return (
                        h.endsWith("!")
                          ? ((i = h.slice(0, -1)), (j = !0))
                          : h.startsWith("!") && ((i = h.slice(1)), (j = !0)),
                        o(c, j, i, b && b > f ? b - f : void 0)
                      );
                    };
                  if (b) {
                    let a = b + ":",
                      c = d;
                    d = (b) =>
                      b.startsWith(a)
                        ? c(b.slice(a.length))
                        : o(n, !1, b, void 0, !0);
                  }
                  if (c) {
                    let a = d;
                    d = (b) => c({ className: b, parseClassName: a });
                  }
                  return d;
                })(l),
                sortModifiers:
                  ((m = new Map()),
                  l.orderSensitiveModifiers.forEach((a, b) => {
                    m.set(a, 1e6 + b);
                  }),
                  (a) => {
                    let b = [],
                      c = [];
                    for (let d = 0; d < a.length; d++) {
                      let e = a[d],
                        f = "[" === e[0],
                        g = m.has(e);
                      f || g
                        ? (c.length > 0 && (c.sort(), b.push(...c), (c = [])),
                          b.push(e))
                        : c.push(e);
                    }
                    return (c.length > 0 && (c.sort(), b.push(...c)), b);
                  }),
                ...((a) => {
                  let b = ((a) => {
                      let { theme: b, classGroups: c } = a;
                      return f(c, b);
                    })(a),
                    {
                      conflictingClassGroups: c,
                      conflictingClassGroupModifiers: g,
                    } = a;
                  return {
                    getClassGroupId: (a) => {
                      if (a.startsWith("[") && a.endsWith("]")) {
                        var c;
                        let b, d, e;
                        return -1 === (c = a).slice(1, -1).indexOf(":")
                          ? void 0
                          : ((d = (b = c.slice(1, -1)).indexOf(":")),
                            (e = b.slice(0, d)) ? "arbitrary.." + e : void 0);
                      }
                      let d = a.split("-"),
                        f = +("" === d[0] && d.length > 1);
                      return e(d, f, b);
                    },
                    getConflictingClassGroupIds: (a, b) => {
                      if (b) {
                        let b = g[a],
                          e = c[a];
                        if (b) {
                          if (e) {
                            let a = Array(e.length + b.length);
                            for (let b = 0; b < e.length; b++) a[b] = e[b];
                            for (let c = 0; c < b.length; c++)
                              a[e.length + c] = b[c];
                            return a;
                          }
                          return b;
                        }
                        return e || d;
                      }
                      return c[a] || d;
                    },
                  };
                })(l),
              }).cache.get),
              (h = c.cache.set),
              (i = j),
              j(k)
            );
          }),
          (...a) =>
            i(
              ((...a) => {
                let b,
                  c,
                  d = 0,
                  e = "";
                for (; d < a.length; )
                  (b = a[d++]) && (c = q(b)) && (e && (e += " "), (e += c));
                return e;
              })(...a),
            )
        );
      })(() => {
        let a = s("color"),
          b = s("font"),
          c = s("text"),
          d = s("font-weight"),
          e = s("tracking"),
          f = s("leading"),
          g = s("breakpoint"),
          h = s("container"),
          i = s("spacing"),
          j = s("radius"),
          k = s("shadow"),
          l = s("inset-shadow"),
          m = s("text-shadow"),
          n = s("drop-shadow"),
          o = s("blur"),
          p = s("perspective"),
          q = s("aspect"),
          r = s("ease"),
          t = s("animate"),
          u = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          v = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          w = () => [...v(), T, N],
          x = () => ["auto", "hidden", "clip", "visible", "scroll"],
          y = () => ["auto", "contain", "none"],
          z = () => [T, N, i],
          A = () => [B, "full", "auto", ...z()],
          H = () => [D, "none", "subgrid", T, N],
          I = () => ["auto", { span: ["full", D, T, N] }, D, T, N],
          J = () => [D, "auto", T, N],
          K = () => ["auto", "min", "max", "fr", T, N],
          $ = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          _ = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          aa = () => ["auto", ...z()],
          ab = () => [
            B,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...z(),
          ],
          ac = () => [a, T, N],
          ad = () => [...v(), W, Q, { position: [T, N] }],
          ae = () => [
            "no-repeat",
            { repeat: ["", "x", "y", "space", "round"] },
          ],
          af = () => ["auto", "cover", "contain", X, M, { size: [T, N] }],
          ag = () => [E, U, O],
          ah = () => ["", "none", "full", j, T, N],
          ai = () => ["", C, U, O],
          aj = () => ["solid", "dashed", "dotted", "double"],
          ak = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          al = () => [C, E, W, Q],
          am = () => ["", "none", o, T, N],
          an = () => ["none", C, T, N],
          ao = () => ["none", C, T, N],
          ap = () => [C, T, N],
          aq = () => [B, "full", ...z()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [F],
            breakpoint: [F],
            color: [G],
            container: [F],
            "drop-shadow": [F],
            ease: ["in", "out", "in-out"],
            font: [L],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [F],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [F],
            shadow: [F],
            spacing: ["px", C],
            text: [F],
            "text-shadow": [F],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", B, N, T, q] }],
            container: ["container"],
            columns: [{ columns: [C, N, T, h] }],
            "break-after": [{ "break-after": u() }],
            "break-before": [{ "break-before": u() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: w() }],
            overflow: [{ overflow: x() }],
            "overflow-x": [{ "overflow-x": x() }],
            "overflow-y": [{ "overflow-y": x() }],
            overscroll: [{ overscroll: y() }],
            "overscroll-x": [{ "overscroll-x": y() }],
            "overscroll-y": [{ "overscroll-y": y() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: A() }],
            "inset-x": [{ "inset-x": A() }],
            "inset-y": [{ "inset-y": A() }],
            start: [{ start: A() }],
            end: [{ end: A() }],
            top: [{ top: A() }],
            right: [{ right: A() }],
            bottom: [{ bottom: A() }],
            left: [{ left: A() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [D, "auto", T, N] }],
            basis: [{ basis: [B, "full", "auto", h, ...z()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [C, B, "auto", "initial", "none", N] }],
            grow: [{ grow: ["", C, T, N] }],
            shrink: [{ shrink: ["", C, T, N] }],
            order: [{ order: [D, "first", "last", "none", T, N] }],
            "grid-cols": [{ "grid-cols": H() }],
            "col-start-end": [{ col: I() }],
            "col-start": [{ "col-start": J() }],
            "col-end": [{ "col-end": J() }],
            "grid-rows": [{ "grid-rows": H() }],
            "row-start-end": [{ row: I() }],
            "row-start": [{ "row-start": J() }],
            "row-end": [{ "row-end": J() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": K() }],
            "auto-rows": [{ "auto-rows": K() }],
            gap: [{ gap: z() }],
            "gap-x": [{ "gap-x": z() }],
            "gap-y": [{ "gap-y": z() }],
            "justify-content": [{ justify: [...$(), "normal"] }],
            "justify-items": [{ "justify-items": [..._(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ..._()] }],
            "align-content": [{ content: ["normal", ...$()] }],
            "align-items": [{ items: [..._(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ..._(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": $() }],
            "place-items": [{ "place-items": [..._(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ..._()] }],
            p: [{ p: z() }],
            px: [{ px: z() }],
            py: [{ py: z() }],
            ps: [{ ps: z() }],
            pe: [{ pe: z() }],
            pt: [{ pt: z() }],
            pr: [{ pr: z() }],
            pb: [{ pb: z() }],
            pl: [{ pl: z() }],
            m: [{ m: aa() }],
            mx: [{ mx: aa() }],
            my: [{ my: aa() }],
            ms: [{ ms: aa() }],
            me: [{ me: aa() }],
            mt: [{ mt: aa() }],
            mr: [{ mr: aa() }],
            mb: [{ mb: aa() }],
            ml: [{ ml: aa() }],
            "space-x": [{ "space-x": z() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": z() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: ab() }],
            w: [{ w: [h, "screen", ...ab()] }],
            "min-w": [{ "min-w": [h, "screen", "none", ...ab()] }],
            "max-w": [
              {
                "max-w": [
                  h,
                  "screen",
                  "none",
                  "prose",
                  { screen: [g] },
                  ...ab(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...ab()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...ab()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...ab()] }],
            "font-size": [{ text: ["base", c, U, O] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [d, T, P] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  E,
                  N,
                ],
              },
            ],
            "font-family": [{ font: [V, N, b] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [e, T, N] }],
            "line-clamp": [{ "line-clamp": [C, "none", T, P] }],
            leading: [{ leading: [f, ...z()] }],
            "list-image": [{ "list-image": ["none", T, N] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", T, N] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: ac() }],
            "text-color": [{ text: ac() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...aj(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [C, "from-font", "auto", T, O] },
            ],
            "text-decoration-color": [{ decoration: ac() }],
            "underline-offset": [{ "underline-offset": [C, "auto", T, N] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: z() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  T,
                  N,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", T, N] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: ad() }],
            "bg-repeat": [{ bg: ae() }],
            "bg-size": [{ bg: af() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      D,
                      T,
                      N,
                    ],
                    radial: ["", T, N],
                    conic: [D, T, N],
                  },
                  Y,
                  R,
                ],
              },
            ],
            "bg-color": [{ bg: ac() }],
            "gradient-from-pos": [{ from: ag() }],
            "gradient-via-pos": [{ via: ag() }],
            "gradient-to-pos": [{ to: ag() }],
            "gradient-from": [{ from: ac() }],
            "gradient-via": [{ via: ac() }],
            "gradient-to": [{ to: ac() }],
            rounded: [{ rounded: ah() }],
            "rounded-s": [{ "rounded-s": ah() }],
            "rounded-e": [{ "rounded-e": ah() }],
            "rounded-t": [{ "rounded-t": ah() }],
            "rounded-r": [{ "rounded-r": ah() }],
            "rounded-b": [{ "rounded-b": ah() }],
            "rounded-l": [{ "rounded-l": ah() }],
            "rounded-ss": [{ "rounded-ss": ah() }],
            "rounded-se": [{ "rounded-se": ah() }],
            "rounded-ee": [{ "rounded-ee": ah() }],
            "rounded-es": [{ "rounded-es": ah() }],
            "rounded-tl": [{ "rounded-tl": ah() }],
            "rounded-tr": [{ "rounded-tr": ah() }],
            "rounded-br": [{ "rounded-br": ah() }],
            "rounded-bl": [{ "rounded-bl": ah() }],
            "border-w": [{ border: ai() }],
            "border-w-x": [{ "border-x": ai() }],
            "border-w-y": [{ "border-y": ai() }],
            "border-w-s": [{ "border-s": ai() }],
            "border-w-e": [{ "border-e": ai() }],
            "border-w-t": [{ "border-t": ai() }],
            "border-w-r": [{ "border-r": ai() }],
            "border-w-b": [{ "border-b": ai() }],
            "border-w-l": [{ "border-l": ai() }],
            "divide-x": [{ "divide-x": ai() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": ai() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...aj(), "hidden", "none"] }],
            "divide-style": [{ divide: [...aj(), "hidden", "none"] }],
            "border-color": [{ border: ac() }],
            "border-color-x": [{ "border-x": ac() }],
            "border-color-y": [{ "border-y": ac() }],
            "border-color-s": [{ "border-s": ac() }],
            "border-color-e": [{ "border-e": ac() }],
            "border-color-t": [{ "border-t": ac() }],
            "border-color-r": [{ "border-r": ac() }],
            "border-color-b": [{ "border-b": ac() }],
            "border-color-l": [{ "border-l": ac() }],
            "divide-color": [{ divide: ac() }],
            "outline-style": [{ outline: [...aj(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [C, T, N] }],
            "outline-w": [{ outline: ["", C, U, O] }],
            "outline-color": [{ outline: ac() }],
            shadow: [{ shadow: ["", "none", k, Z, S] }],
            "shadow-color": [{ shadow: ac() }],
            "inset-shadow": [{ "inset-shadow": ["none", l, Z, S] }],
            "inset-shadow-color": [{ "inset-shadow": ac() }],
            "ring-w": [{ ring: ai() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: ac() }],
            "ring-offset-w": [{ "ring-offset": [C, O] }],
            "ring-offset-color": [{ "ring-offset": ac() }],
            "inset-ring-w": [{ "inset-ring": ai() }],
            "inset-ring-color": [{ "inset-ring": ac() }],
            "text-shadow": [{ "text-shadow": ["none", m, Z, S] }],
            "text-shadow-color": [{ "text-shadow": ac() }],
            opacity: [{ opacity: [C, T, N] }],
            "mix-blend": [
              { "mix-blend": [...ak(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": ak() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [C] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": al() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": al() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": ac() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": ac() }],
            "mask-image-t-from-pos": [{ "mask-t-from": al() }],
            "mask-image-t-to-pos": [{ "mask-t-to": al() }],
            "mask-image-t-from-color": [{ "mask-t-from": ac() }],
            "mask-image-t-to-color": [{ "mask-t-to": ac() }],
            "mask-image-r-from-pos": [{ "mask-r-from": al() }],
            "mask-image-r-to-pos": [{ "mask-r-to": al() }],
            "mask-image-r-from-color": [{ "mask-r-from": ac() }],
            "mask-image-r-to-color": [{ "mask-r-to": ac() }],
            "mask-image-b-from-pos": [{ "mask-b-from": al() }],
            "mask-image-b-to-pos": [{ "mask-b-to": al() }],
            "mask-image-b-from-color": [{ "mask-b-from": ac() }],
            "mask-image-b-to-color": [{ "mask-b-to": ac() }],
            "mask-image-l-from-pos": [{ "mask-l-from": al() }],
            "mask-image-l-to-pos": [{ "mask-l-to": al() }],
            "mask-image-l-from-color": [{ "mask-l-from": ac() }],
            "mask-image-l-to-color": [{ "mask-l-to": ac() }],
            "mask-image-x-from-pos": [{ "mask-x-from": al() }],
            "mask-image-x-to-pos": [{ "mask-x-to": al() }],
            "mask-image-x-from-color": [{ "mask-x-from": ac() }],
            "mask-image-x-to-color": [{ "mask-x-to": ac() }],
            "mask-image-y-from-pos": [{ "mask-y-from": al() }],
            "mask-image-y-to-pos": [{ "mask-y-to": al() }],
            "mask-image-y-from-color": [{ "mask-y-from": ac() }],
            "mask-image-y-to-color": [{ "mask-y-to": ac() }],
            "mask-image-radial": [{ "mask-radial": [T, N] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": al() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": al() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": ac() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": ac() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": v() }],
            "mask-image-conic-pos": [{ "mask-conic": [C] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": al() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": al() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": ac() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": ac() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: ad() }],
            "mask-repeat": [{ mask: ae() }],
            "mask-size": [{ mask: af() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", T, N] }],
            filter: [{ filter: ["", "none", T, N] }],
            blur: [{ blur: am() }],
            brightness: [{ brightness: [C, T, N] }],
            contrast: [{ contrast: [C, T, N] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", n, Z, S] }],
            "drop-shadow-color": [{ "drop-shadow": ac() }],
            grayscale: [{ grayscale: ["", C, T, N] }],
            "hue-rotate": [{ "hue-rotate": [C, T, N] }],
            invert: [{ invert: ["", C, T, N] }],
            saturate: [{ saturate: [C, T, N] }],
            sepia: [{ sepia: ["", C, T, N] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", T, N] }],
            "backdrop-blur": [{ "backdrop-blur": am() }],
            "backdrop-brightness": [{ "backdrop-brightness": [C, T, N] }],
            "backdrop-contrast": [{ "backdrop-contrast": [C, T, N] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", C, T, N] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [C, T, N] }],
            "backdrop-invert": [{ "backdrop-invert": ["", C, T, N] }],
            "backdrop-opacity": [{ "backdrop-opacity": [C, T, N] }],
            "backdrop-saturate": [{ "backdrop-saturate": [C, T, N] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", C, T, N] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": z() }],
            "border-spacing-x": [{ "border-spacing-x": z() }],
            "border-spacing-y": [{ "border-spacing-y": z() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  T,
                  N,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [C, "initial", T, N] }],
            ease: [{ ease: ["linear", "initial", r, T, N] }],
            delay: [{ delay: [C, T, N] }],
            animate: [{ animate: ["none", t, T, N] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [p, T, N] }],
            "perspective-origin": [{ "perspective-origin": w() }],
            rotate: [{ rotate: an() }],
            "rotate-x": [{ "rotate-x": an() }],
            "rotate-y": [{ "rotate-y": an() }],
            "rotate-z": [{ "rotate-z": an() }],
            scale: [{ scale: ao() }],
            "scale-x": [{ "scale-x": ao() }],
            "scale-y": [{ "scale-y": ao() }],
            "scale-z": [{ "scale-z": ao() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: ap() }],
            "skew-x": [{ "skew-x": ap() }],
            "skew-y": [{ "skew-y": ap() }],
            transform: [{ transform: [T, N, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: w() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: aq() }],
            "translate-x": [{ "translate-x": aq() }],
            "translate-y": [{ "translate-y": aq() }],
            "translate-z": [{ "translate-z": aq() }],
            "translate-none": ["translate-none"],
            accent: [{ accent: ac() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: ac() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  T,
                  N,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": z() }],
            "scroll-mx": [{ "scroll-mx": z() }],
            "scroll-my": [{ "scroll-my": z() }],
            "scroll-ms": [{ "scroll-ms": z() }],
            "scroll-me": [{ "scroll-me": z() }],
            "scroll-mt": [{ "scroll-mt": z() }],
            "scroll-mr": [{ "scroll-mr": z() }],
            "scroll-mb": [{ "scroll-mb": z() }],
            "scroll-ml": [{ "scroll-ml": z() }],
            "scroll-p": [{ "scroll-p": z() }],
            "scroll-px": [{ "scroll-px": z() }],
            "scroll-py": [{ "scroll-py": z() }],
            "scroll-ps": [{ "scroll-ps": z() }],
            "scroll-pe": [{ "scroll-pe": z() }],
            "scroll-pt": [{ "scroll-pt": z() }],
            "scroll-pr": [{ "scroll-pr": z() }],
            "scroll-pb": [{ "scroll-pb": z() }],
            "scroll-pl": [{ "scroll-pl": z() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  T,
                  N,
                ],
              },
            ],
            fill: [{ fill: ["none", ...ac()] }],
            "stroke-w": [{ stroke: [C, U, O, P] }],
            stroke: [{ stroke: ["none", ...ac()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    function ai(...a) {
      return ah((0, b.clsx)(a));
    }
    a.s(["cn", () => ai], 84032);
  },
  65916,
  (a) => {
    "use strict";
    var b = a.i(99669),
      c = a.i(37477),
      d = a.i(44778),
      e = a.i(84032);
    let f = (0, d.cva)(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline:
              "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost:
              "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      },
    );
    function g({ className: a, variant: d, size: g, asChild: h = !1, ...i }) {
      let j = h ? c.Slot : "button";
      return (0, b.jsx)(j, {
        "data-slot": "button",
        className: (0, e.cn)(f({ variant: d, size: g, className: a })),
        ...i,
      });
    }
    a.s(["Button", () => g]);
  },
  16842,
  (a) => {
    "use strict";
    var b = a.i(29047);
    function c(a, b) {
      return (...a) => {
        try {
          return b(...a);
        } catch {
          throw Error(void 0);
        }
      };
    }
    let d = c(0, b.useTranslations);
    (c(0, b.useFormatter), a.s(["useTranslations", () => d]));
  },
  89293,
  (a) => {
    "use strict";
    a.s([
      "languages",
      0,
      [
        { code: "en", name: "English", nativeName: "English" },
        { code: "fr", name: "French", nativeName: "Français" },
        { code: "es", name: "Spanish", nativeName: "Español" },
      ],
      "projects",
      0,
      [
        {
          id: "1",
          slug: "awd-pay",
          title: "AWDPAY",
          description:
            "Payment service that simplifies online payments for businesses and individuals.",
          longDescription:
            "AWDPAY is a comprehensive payment service that enables businesses and individuals to process online payments efficiently. It provides a user-friendly interface for managing transactions, tracking payments, and handling financial operations with enhanced security features.",
          image: "/projects/awdpay.png",
          technologies: [
            "Payment Processing",
            "Security",
            "TypeScript",
            "React",
            "Node.js",
          ],
          link: "https://awdpay.com",
        },
        {
          id: "2",
          slug: "awd-pay-apis",
          title: "AWDPAY APIs",
          description:
            "Payment APIs with deposit, withdrawal, and transfer functions.",
          longDescription:
            "AWDPAY APIs offer three major functions: payment, withdrawal, and transfer, providing a faster, more secure, and flexible experience. With integrated functions, you can also trigger deposits, withdrawals, transfers, and purchases without leaving your merchant site.",
          image: "/projects/awdpay-api.png",
          technologies: [
            "API Integration",
            "REST APIs",
            "Payment Processing",
            "Security",
            "TypeScript",
          ],
          link: "https://docs.awdpay.com/",
        },
        {
          id: "3",
          slug: "pdf-tools",
          title: "AWDPDF Tools",
          description: "Simple, reliable, and 100% free PDF tools.",
          longDescription:
            "All your essential PDF functionalities gathered in one place, easy to use and accessible with one click. A comprehensive suite of tools for all your PDF manipulation needs including merging, splitting, converting, and editing PDF documents.",
          image: "/projects/awdpdf.png",
          technologies: [
            "PDF Processing",
            "JavaScript",
            "React",
            "Cloud Storage",
            "File Handling",
          ],
          link: "https://awdpdf.com/",
        },
        {
          id: "4",
          slug: "codewigs",
          title: "Codewigs",
          description:
            "Design and create exceptional projects with ready-to-use components.",
          longDescription:
            "Purchase high-quality scripts, themes, and plugins that are ready to use! Codewigs helps developers and designers create outstanding projects with pre-built components, templates, and libraries to accelerate development workflows.",
          image: "/projects/codewhigs.png",
          technologies: [
            "Component Library",
            "JavaScript",
            "CSS",
            "React",
            "Vue.js",
            "Templates",
          ],
          link: "https://www.codewigs.com/",
        },
      ],
    ]);
  },
  90520,
  44134,
  68848,
  62579,
  25816,
  6270,
  44817,
  59055,
  81211,
  15454,
  82133,
  (a) => {
    "use strict";
    let b, c, d;
    var e,
      f = a.i(61289);
    let g = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
      ],
      h = new Set(g),
      i = (a) => (180 * a) / Math.PI,
      j = (a) => l(i(Math.atan2(a[1], a[0]))),
      k = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
        rotate: j,
        rotateZ: j,
        skewX: (a) => i(Math.atan(a[1])),
        skewY: (a) => i(Math.atan(a[2])),
        skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
      },
      l = (a) => ((a %= 360) < 0 && (a += 360), a),
      m = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
      n = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
      o = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: m,
        scaleY: n,
        scale: (a) => (m(a) + n(a)) / 2,
        rotateX: (a) => l(i(Math.atan2(a[6], a[5]))),
        rotateY: (a) => l(i(Math.atan2(-a[2], a[0]))),
        rotateZ: j,
        rotate: j,
        skewX: (a) => i(Math.atan(a[4])),
        skewY: (a) => i(Math.atan(a[1])),
        skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
      };
    function p(a) {
      return +!!a.includes("scale");
    }
    function q(a, b) {
      let c, d;
      if (!a || "none" === a) return p(b);
      let e = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
      if (e) ((c = o), (d = e));
      else {
        let b = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        ((c = k), (d = b));
      }
      if (!d) return p(b);
      let f = c[b],
        g = d[1].split(",").map(r);
      return "function" == typeof f ? f(g) : g[f];
    }
    function r(a) {
      return parseFloat(a.trim());
    }
    let s = (a) => (b) => "string" == typeof b && b.startsWith(a),
      t = s("--"),
      u = s("var(--"),
      v = (a) => !!u(a) && w.test(a.split("/*")[0].trim()),
      w =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    function x({ top: a, left: b, right: c, bottom: d }) {
      return { x: { min: b, max: c }, y: { min: a, max: d } };
    }
    let y = (a, b, c) => a + (b - a) * c;
    function z(a) {
      return void 0 === a || 1 === a;
    }
    function A({ scale: a, scaleX: b, scaleY: c }) {
      return !z(a) || !z(b) || !z(c);
    }
    function B(a) {
      return (
        A(a) ||
        C(a) ||
        a.z ||
        a.rotate ||
        a.rotateX ||
        a.rotateY ||
        a.skewX ||
        a.skewY
      );
    }
    function C(a) {
      var b, c;
      return ((b = a.x) && "0%" !== b) || ((c = a.y) && "0%" !== c);
    }
    function D(a, b, c, d, e) {
      return (void 0 !== e && (a = d + e * (a - d)), d + c * (a - d) + b);
    }
    function E(a, b = 0, c = 1, d, e) {
      ((a.min = D(a.min, b, c, d, e)), (a.max = D(a.max, b, c, d, e)));
    }
    function F(a, { x: b, y: c }) {
      (E(a.x, b.translate, b.scale, b.originPoint),
        E(a.y, c.translate, c.scale, c.originPoint));
    }
    function G(a, b) {
      ((a.min = a.min + b), (a.max = a.max + b));
    }
    function H(a, b, c, d, e = 0.5) {
      let f = y(a.min, a.max, e);
      E(a, b, c, f, d);
    }
    function I(a, b) {
      (H(a.x, b.x, b.scaleX, b.scale, b.originX),
        H(a.y, b.y, b.scaleY, b.scale, b.originY));
    }
    function J(a, b) {
      return x(
        (function (a, b) {
          if (!b) return a;
          let c = b({ x: a.left, y: a.top }),
            d = b({ x: a.right, y: a.bottom });
          return { top: c.y, left: c.x, bottom: d.y, right: d.x };
        })(a.getBoundingClientRect(), b),
      );
    }
    let K = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...g,
      ]),
      L = (a, b, c) => (c > b ? b : c < a ? a : c),
      M = {
        test: (a) => "number" == typeof a,
        parse: parseFloat,
        transform: (a) => a,
      },
      N = { ...M, transform: (a) => L(0, 1, a) },
      O = { ...M, default: 1 },
      P = (a) => ({
        test: (b) =>
          "string" == typeof b && b.endsWith(a) && 1 === b.split(" ").length,
        parse: parseFloat,
        transform: (b) => `${b}${a}`,
      }),
      Q = P("deg"),
      R = P("%"),
      S = P("px"),
      T = P("vh"),
      U = P("vw"),
      V = {
        ...R,
        parse: (a) => R.parse(a) / 100,
        transform: (a) => R.transform(100 * a),
      },
      W = (a) => (b) => b.test(a),
      X = [M, S, R, Q, U, T, { test: (a) => "auto" === a, parse: (a) => a }],
      Y = (a) => X.find(W(a)),
      Z = () => {},
      $ = () => {};
    a.s(["invariant", () => $, "warning", () => Z], 44134);
    let _ = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
      aa = (a) => a === M || a === S,
      ab = new Set(["x", "y", "z"]),
      ac = g.filter((a) => !ab.has(a)),
      ad = {
        width: ({ x: a }, { paddingLeft: b = "0", paddingRight: c = "0" }) =>
          a.max - a.min - parseFloat(b) - parseFloat(c),
        height: ({ y: a }, { paddingTop: b = "0", paddingBottom: c = "0" }) =>
          a.max - a.min - parseFloat(b) - parseFloat(c),
        top: (a, { top: b }) => parseFloat(b),
        left: (a, { left: b }) => parseFloat(b),
        bottom: ({ y: a }, { top: b }) => parseFloat(b) + (a.max - a.min),
        right: ({ x: a }, { left: b }) => parseFloat(b) + (a.max - a.min),
        x: (a, { transform: b }) => q(b, "x"),
        y: (a, { transform: b }) => q(b, "y"),
      };
    ((ad.translateX = ad.x), (ad.translateY = ad.y));
    let ae = (a) => a,
      af = {},
      ag = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
    function ah(a, b) {
      let c = !1,
        d = !0,
        e = { delta: 0, timestamp: 0, isProcessing: !1 },
        f = () => (c = !0),
        g = ag.reduce(
          (a, c) => (
            (a[c] = (function (a, b) {
              let c = new Set(),
                d = new Set(),
                e = !1,
                f = !1,
                g = new WeakSet(),
                h = { delta: 0, timestamp: 0, isProcessing: !1 },
                i = 0;
              function j(b) {
                (g.has(b) && (k.schedule(b), a()), i++, b(h));
              }
              let k = {
                schedule: (a, b = !1, f = !1) => {
                  let h = f && e ? c : d;
                  return (b && g.add(a), h.has(a) || h.add(a), a);
                },
                cancel: (a) => {
                  (d.delete(a), g.delete(a));
                },
                process: (a) => {
                  if (((h = a), e)) {
                    f = !0;
                    return;
                  }
                  ((e = !0),
                    ([c, d] = [d, c]),
                    c.forEach(j),
                    b,
                    (i = 0),
                    c.clear(),
                    (e = !1),
                    f && ((f = !1), k.process(a)));
                },
              };
              return k;
            })(f, b ? c : void 0)),
            a
          ),
          {},
        ),
        {
          setup: h,
          read: i,
          resolveKeyframes: j,
          preUpdate: k,
          update: l,
          preRender: m,
          render: n,
          postRender: o,
        } = g,
        p = () => {
          let f = af.useManualTiming ? e.timestamp : performance.now();
          ((c = !1),
            af.useManualTiming ||
              (e.delta = d
                ? 1e3 / 60
                : Math.max(Math.min(f - e.timestamp, 40), 1)),
            (e.timestamp = f),
            (e.isProcessing = !0),
            h.process(e),
            i.process(e),
            j.process(e),
            k.process(e),
            l.process(e),
            m.process(e),
            n.process(e),
            o.process(e),
            (e.isProcessing = !1),
            c && b && ((d = !1), a(p)));
        };
      return {
        schedule: ag.reduce((b, f) => {
          let h = g[f];
          return (
            (b[f] = (b, f = !1, g = !1) => (
              !c && ((c = !0), (d = !0), e.isProcessing || a(p)),
              h.schedule(b, f, g)
            )),
            b
          );
        }, {}),
        cancel: (a) => {
          for (let b = 0; b < ag.length; b++) g[ag[b]].cancel(a);
        },
        state: e,
        steps: g,
      };
    }
    let {
        schedule: ai,
        cancel: aj,
        state: ak,
        steps: al,
      } = ah(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : ae,
        !0,
      ),
      am = new Set(),
      an = !1,
      ao = !1,
      ap = !1;
    function aq() {
      if (ao) {
        let a = Array.from(am).filter((a) => a.needsMeasurement),
          b = new Set(a.map((a) => a.element)),
          c = new Map();
        (b.forEach((a) => {
          let b,
            d =
              ((b = []),
              ac.forEach((c) => {
                let d = a.getValue(c);
                void 0 !== d &&
                  (b.push([c, d.get()]), d.set(+!!c.startsWith("scale")));
              }),
              b);
          d.length && (c.set(a, d), a.render());
        }),
          a.forEach((a) => a.measureInitialState()),
          b.forEach((a) => {
            a.render();
            let b = c.get(a);
            b &&
              b.forEach(([b, c]) => {
                a.getValue(b)?.set(c);
              });
          }),
          a.forEach((a) => a.measureEndState()),
          a.forEach((a) => {
            void 0 !== a.suspendedScrollY &&
              window.scrollTo(0, a.suspendedScrollY);
          }));
      }
      ((ao = !1), (an = !1), am.forEach((a) => a.complete(ap)), am.clear());
    }
    function ar() {
      am.forEach((a) => {
        (a.readKeyframes(), a.needsMeasurement && (ao = !0));
      });
    }
    class as {
      constructor(a, b, c, d, e, f = !1) {
        ((this.state = "pending"),
          (this.isAsync = !1),
          (this.needsMeasurement = !1),
          (this.unresolvedKeyframes = [...a]),
          (this.onComplete = b),
          (this.name = c),
          (this.motionValue = d),
          (this.element = e),
          (this.isAsync = f));
      }
      scheduleResolve() {
        ((this.state = "scheduled"),
          this.isAsync
            ? (am.add(this),
              an || ((an = !0), ai.read(ar), ai.resolveKeyframes(aq)))
            : (this.readKeyframes(), this.complete()));
      }
      readKeyframes() {
        let {
          unresolvedKeyframes: a,
          name: b,
          element: c,
          motionValue: d,
        } = this;
        if (null === a[0]) {
          let e = d?.get(),
            f = a[a.length - 1];
          if (void 0 !== e) a[0] = e;
          else if (c && b) {
            let d = c.readValue(b, f);
            null != d && (a[0] = d);
          }
          (void 0 === a[0] && (a[0] = f), d && void 0 === e && d.set(a[0]));
        }
        for (let b = 1; b < a.length; b++) a[b] ?? (a[b] = a[b - 1]);
      }
      setFinalKeyframe() {}
      measureInitialState() {}
      renderEndStyles() {}
      measureEndState() {}
      complete(a = !1) {
        ((this.state = "complete"),
          this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
          am.delete(this));
      }
      cancel() {
        "scheduled" === this.state &&
          (am.delete(this), (this.state = "pending"));
      }
      resume() {
        "pending" === this.state && this.scheduleResolve();
      }
    }
    let at = (a) => Math.round(1e5 * a) / 1e5,
      au = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
      av =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
      aw = (a, b) => (c) =>
        !!(
          ("string" == typeof c && av.test(c) && c.startsWith(a)) ||
          (b && null != c && Object.prototype.hasOwnProperty.call(c, b))
        ),
      ax = (a, b, c) => (d) => {
        if ("string" != typeof d) return d;
        let [e, f, g, h] = d.match(au);
        return {
          [a]: parseFloat(e),
          [b]: parseFloat(f),
          [c]: parseFloat(g),
          alpha: void 0 !== h ? parseFloat(h) : 1,
        };
      },
      ay = { ...M, transform: (a) => Math.round(L(0, 255, a)) },
      az = {
        test: aw("rgb", "red"),
        parse: ax("red", "green", "blue"),
        transform: ({ red: a, green: b, blue: c, alpha: d = 1 }) =>
          "rgba(" +
          ay.transform(a) +
          ", " +
          ay.transform(b) +
          ", " +
          ay.transform(c) +
          ", " +
          at(N.transform(d)) +
          ")",
      },
      aA = {
        test: aw("#"),
        parse: function (a) {
          let b = "",
            c = "",
            d = "",
            e = "";
          return (
            a.length > 5
              ? ((b = a.substring(1, 3)),
                (c = a.substring(3, 5)),
                (d = a.substring(5, 7)),
                (e = a.substring(7, 9)))
              : ((b = a.substring(1, 2)),
                (c = a.substring(2, 3)),
                (d = a.substring(3, 4)),
                (e = a.substring(4, 5)),
                (b += b),
                (c += c),
                (d += d),
                (e += e)),
            {
              red: parseInt(b, 16),
              green: parseInt(c, 16),
              blue: parseInt(d, 16),
              alpha: e ? parseInt(e, 16) / 255 : 1,
            }
          );
        },
        transform: az.transform,
      },
      aB = {
        test: aw("hsl", "hue"),
        parse: ax("hue", "saturation", "lightness"),
        transform: ({ hue: a, saturation: b, lightness: c, alpha: d = 1 }) =>
          "hsla(" +
          Math.round(a) +
          ", " +
          R.transform(at(b)) +
          ", " +
          R.transform(at(c)) +
          ", " +
          at(N.transform(d)) +
          ")",
      },
      aC = {
        test: (a) => az.test(a) || aA.test(a) || aB.test(a),
        parse: (a) =>
          az.test(a) ? az.parse(a) : aB.test(a) ? aB.parse(a) : aA.parse(a),
        transform: (a) =>
          "string" == typeof a
            ? a
            : a.hasOwnProperty("red")
              ? az.transform(a)
              : aB.transform(a),
        getAnimatableNone: (a) => {
          let b = aC.parse(a);
          return ((b.alpha = 0), aC.transform(b));
        },
      },
      aD =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
      aE = "number",
      aF = "color",
      aG =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function aH(a) {
      let b = a.toString(),
        c = [],
        d = { color: [], number: [], var: [] },
        e = [],
        f = 0,
        g = b
          .replace(
            aG,
            (a) => (
              aC.test(a)
                ? (d.color.push(f), e.push(aF), c.push(aC.parse(a)))
                : a.startsWith("var(")
                  ? (d.var.push(f), e.push("var"), c.push(a))
                  : (d.number.push(f), e.push(aE), c.push(parseFloat(a))),
              ++f,
              "${}"
            ),
          )
          .split("${}");
      return { values: c, split: g, indexes: d, types: e };
    }
    function aI(a) {
      return aH(a).values;
    }
    function aJ(a) {
      let { split: b, types: c } = aH(a),
        d = b.length;
      return (a) => {
        let e = "";
        for (let f = 0; f < d; f++)
          if (((e += b[f]), void 0 !== a[f])) {
            let b = c[f];
            b === aE
              ? (e += at(a[f]))
              : b === aF
                ? (e += aC.transform(a[f]))
                : (e += a[f]);
          }
        return e;
      };
    }
    let aK = (a) =>
        "number" == typeof a ? 0 : aC.test(a) ? aC.getAnimatableNone(a) : a,
      aL = {
        test: function (a) {
          return (
            isNaN(a) &&
            "string" == typeof a &&
            (a.match(au)?.length || 0) + (a.match(aD)?.length || 0) > 0
          );
        },
        parse: aI,
        createTransformer: aJ,
        getAnimatableNone: function (a) {
          let b = aI(a);
          return aJ(a)(b.map(aK));
        },
      },
      aM = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function aN(a) {
      let [b, c] = a.slice(0, -1).split("(");
      if ("drop-shadow" === b) return a;
      let [d] = c.match(au) || [];
      if (!d) return a;
      let e = c.replace(d, ""),
        f = +!!aM.has(b);
      return (d !== c && (f *= 100), b + "(" + f + e + ")");
    }
    let aO = /\b([a-z-]*)\(.*?\)/gu,
      aP = {
        ...aL,
        getAnimatableNone: (a) => {
          let b = a.match(aO);
          return b ? b.map(aN).join(" ") : a;
        },
      },
      aQ = { ...M, transform: Math.round },
      aR = {
        borderWidth: S,
        borderTopWidth: S,
        borderRightWidth: S,
        borderBottomWidth: S,
        borderLeftWidth: S,
        borderRadius: S,
        radius: S,
        borderTopLeftRadius: S,
        borderTopRightRadius: S,
        borderBottomRightRadius: S,
        borderBottomLeftRadius: S,
        width: S,
        maxWidth: S,
        height: S,
        maxHeight: S,
        top: S,
        right: S,
        bottom: S,
        left: S,
        padding: S,
        paddingTop: S,
        paddingRight: S,
        paddingBottom: S,
        paddingLeft: S,
        margin: S,
        marginTop: S,
        marginRight: S,
        marginBottom: S,
        marginLeft: S,
        backgroundPositionX: S,
        backgroundPositionY: S,
        rotate: Q,
        rotateX: Q,
        rotateY: Q,
        rotateZ: Q,
        scale: O,
        scaleX: O,
        scaleY: O,
        scaleZ: O,
        skew: Q,
        skewX: Q,
        skewY: Q,
        distance: S,
        translateX: S,
        translateY: S,
        translateZ: S,
        x: S,
        y: S,
        z: S,
        perspective: S,
        transformPerspective: S,
        opacity: N,
        originX: V,
        originY: V,
        originZ: S,
        zIndex: aQ,
        fillOpacity: N,
        strokeOpacity: N,
        numOctaves: aQ,
      },
      aS = {
        ...aR,
        color: aC,
        backgroundColor: aC,
        outlineColor: aC,
        fill: aC,
        stroke: aC,
        borderColor: aC,
        borderTopColor: aC,
        borderRightColor: aC,
        borderBottomColor: aC,
        borderLeftColor: aC,
        filter: aP,
        WebkitFilter: aP,
      },
      aT = (a) => aS[a];
    function aU(a, b) {
      let c = aT(a);
      return (
        c !== aP && (c = aL),
        c.getAnimatableNone ? c.getAnimatableNone(b) : void 0
      );
    }
    let aV = new Set(["auto", "none", "0"]);
    class aW extends as {
      constructor(a, b, c, d, e) {
        super(a, b, c, d, e, !0);
      }
      readKeyframes() {
        let { unresolvedKeyframes: a, element: b, name: c } = this;
        if (!b || !b.current) return;
        super.readKeyframes();
        for (let c = 0; c < a.length; c++) {
          let d = a[c];
          if ("string" == typeof d && v((d = d.trim()))) {
            let e = (function a(b, c, d = 1) {
              $(
                d <= 4,
                `Max CSS variable fallback depth detected in property "${b}". This may indicate a circular fallback dependency.`,
                "max-css-var-depth",
              );
              let [e, f] = (function (a) {
                let b = _.exec(a);
                if (!b) return [,];
                let [, c, d, e] = b;
                return [`--${c ?? d}`, e];
              })(b);
              if (!e) return;
              let g = window.getComputedStyle(c).getPropertyValue(e);
              if (g) {
                let a = g.trim();
                return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a)
                  ? parseFloat(a)
                  : a;
              }
              return v(f) ? a(f, c, d + 1) : f;
            })(d, b.current);
            (void 0 !== e && (a[c] = e),
              c === a.length - 1 && (this.finalKeyframe = d));
          }
        }
        if ((this.resolveNoneKeyframes(), !K.has(c) || 2 !== a.length)) return;
        let [d, e] = a,
          f = Y(d),
          g = Y(e);
        if (f !== g)
          if (aa(f) && aa(g))
            for (let b = 0; b < a.length; b++) {
              let c = a[b];
              "string" == typeof c && (a[b] = parseFloat(c));
            }
          else ad[c] && (this.needsMeasurement = !0);
      }
      resolveNoneKeyframes() {
        let { unresolvedKeyframes: a, name: b } = this,
          c = [];
        for (let b = 0; b < a.length; b++)
          (null === a[b] ||
            (function (a) {
              if ("number" == typeof a) return 0 === a;
              if (null === a) return !0;
              return "none" === a || "0" === a || /^0[^.\s]+$/u.test(a);
            })(a[b])) &&
            c.push(b);
        c.length &&
          (function (a, b, c) {
            let d,
              e = 0;
            for (; e < a.length && !d; ) {
              let b = a[e];
              ("string" == typeof b &&
                !aV.has(b) &&
                aH(b).values.length &&
                (d = a[e]),
                e++);
            }
            if (d && c) for (let e of b) a[e] = aU(c, d);
          })(a, c, b);
      }
      measureInitialState() {
        let { element: a, unresolvedKeyframes: b, name: c } = this;
        if (!a || !a.current) return;
        ("height" === c && (this.suspendedScrollY = window.pageYOffset),
          (this.measuredOrigin = ad[c](
            a.measureViewportBox(),
            window.getComputedStyle(a.current),
          )),
          (b[0] = this.measuredOrigin));
        let d = b[b.length - 1];
        void 0 !== d && a.getValue(c, d).jump(d, !1);
      }
      measureEndState() {
        let { element: a, name: b, unresolvedKeyframes: c } = this;
        if (!a || !a.current) return;
        let d = a.getValue(b);
        d && d.jump(this.measuredOrigin, !1);
        let e = c.length - 1,
          f = c[e];
        ((c[e] = ad[b](
          a.measureViewportBox(),
          window.getComputedStyle(a.current),
        )),
          null !== f &&
            void 0 === this.finalKeyframe &&
            (this.finalKeyframe = f),
          this.removedTransforms?.length &&
            this.removedTransforms.forEach(([b, c]) => {
              a.getValue(b).set(c);
            }),
          this.resolveNoneKeyframes());
      }
    }
    let aX = (a) => !!(a && a.getVelocity);
    function aY() {
      b = void 0;
    }
    let aZ = {
      now: () => (
        void 0 === b &&
          aZ.set(
            ak.isProcessing || af.useManualTiming
              ? ak.timestamp
              : performance.now(),
          ),
        b
      ),
      set: (a) => {
        ((b = a), queueMicrotask(aY));
      },
    };
    function a$(a, b) {
      -1 === a.indexOf(b) && a.push(b);
    }
    function a_(a, b) {
      let c = a.indexOf(b);
      c > -1 && a.splice(c, 1);
    }
    class a0 {
      constructor() {
        this.subscriptions = [];
      }
      add(a) {
        return (a$(this.subscriptions, a), () => a_(this.subscriptions, a));
      }
      notify(a, b, c) {
        let d = this.subscriptions.length;
        if (d)
          if (1 === d) this.subscriptions[0](a, b, c);
          else
            for (let e = 0; e < d; e++) {
              let d = this.subscriptions[e];
              d && d(a, b, c);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    class a1 {
      constructor(a, b = {}) {
        ((this.canTrackVelocity = null),
          (this.events = {}),
          (this.updateAndNotify = (a) => {
            let b = aZ.now();
            if (
              (this.updatedAt !== b && this.setPrevFrameValue(),
              (this.prev = this.current),
              this.setCurrent(a),
              this.current !== this.prev &&
                (this.events.change?.notify(this.current), this.dependents))
            )
              for (let a of this.dependents) a.dirty();
          }),
          (this.hasAnimated = !1),
          this.setCurrent(a),
          (this.owner = b.owner));
      }
      setCurrent(a) {
        ((this.current = a),
          (this.updatedAt = aZ.now()),
          null === this.canTrackVelocity &&
            void 0 !== a &&
            (this.canTrackVelocity = !isNaN(parseFloat(this.current))));
      }
      setPrevFrameValue(a = this.current) {
        ((this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt));
      }
      onChange(a) {
        return this.on("change", a);
      }
      on(a, b) {
        this.events[a] || (this.events[a] = new a0());
        let c = this.events[a].add(b);
        return "change" === a
          ? () => {
              (c(),
                ai.read(() => {
                  this.events.change.getSize() || this.stop();
                }));
            }
          : c;
      }
      clearListeners() {
        for (let a in this.events) this.events[a].clear();
      }
      attach(a, b) {
        ((this.passiveEffect = a), (this.stopPassiveEffect = b));
      }
      set(a) {
        this.passiveEffect
          ? this.passiveEffect(a, this.updateAndNotify)
          : this.updateAndNotify(a);
      }
      setWithVelocity(a, b, c) {
        (this.set(b),
          (this.prev = void 0),
          (this.prevFrameValue = a),
          (this.prevUpdatedAt = this.updatedAt - c));
      }
      jump(a, b = !0) {
        (this.updateAndNotify(a),
          (this.prev = a),
          (this.prevUpdatedAt = this.prevFrameValue = void 0),
          b && this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect());
      }
      dirty() {
        this.events.change?.notify(this.current);
      }
      addDependent(a) {
        (this.dependents || (this.dependents = new Set()),
          this.dependents.add(a));
      }
      removeDependent(a) {
        this.dependents && this.dependents.delete(a);
      }
      get() {
        return (d && d.push(this), this.current);
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        var a;
        let b = aZ.now();
        if (
          !this.canTrackVelocity ||
          void 0 === this.prevFrameValue ||
          b - this.updatedAt > 30
        )
          return 0;
        let c = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return (
          (a = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
          c ? (1e3 / c) * a : 0
        );
      }
      start(a) {
        return (
          this.stop(),
          new Promise((b) => {
            ((this.hasAnimated = !0),
              (this.animation = a(b)),
              this.events.animationStart &&
                this.events.animationStart.notify());
          }).then(() => {
            (this.events.animationComplete &&
              this.events.animationComplete.notify(),
              this.clearAnimation());
          })
        );
      }
      stop() {
        (this.animation &&
          (this.animation.stop(),
          this.events.animationCancel && this.events.animationCancel.notify()),
          this.clearAnimation());
      }
      isAnimating() {
        return !!this.animation;
      }
      clearAnimation() {
        delete this.animation;
      }
      destroy() {
        (this.dependents?.clear(),
          this.events.destroy?.notify(),
          this.clearListeners(),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect());
      }
    }
    function a2(a, b) {
      return new a1(a, b);
    }
    let a3 = [...X, aC, aL],
      { schedule: a4 } = ah(queueMicrotask, !1),
      a5 = {
        animation: [
          "animate",
          "variants",
          "whileHover",
          "whileTap",
          "exit",
          "whileInView",
          "whileFocus",
          "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      },
      a6 = {};
    for (let a in a5) a6[a] = { isEnabled: (b) => a5[a].some((a) => !!b[a]) };
    let a7 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
      a8 = () => ({ x: a7(), y: a7() }),
      a9 = () => ({ min: 0, max: 0 }),
      ba = () => ({ x: a9(), y: a9() }),
      bb = null,
      bc = { current: !1 },
      bd = new WeakMap();
    function be(a) {
      return null !== a && "object" == typeof a && "function" == typeof a.start;
    }
    function bf(a) {
      return "string" == typeof a || Array.isArray(a);
    }
    let bg = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ],
      bh = ["initial", ...bg];
    function bi(a) {
      return be(a.animate) || bh.some((b) => bf(a[b]));
    }
    function bj(a) {
      return !!(bi(a) || a.variants);
    }
    function bk(a) {
      let b = [{}, {}];
      return (
        a?.values.forEach((a, c) => {
          ((b[0][c] = a.get()), (b[1][c] = a.getVelocity()));
        }),
        b
      );
    }
    function bl(a, b, c, d) {
      if ("function" == typeof b) {
        let [e, f] = bk(d);
        b = b(void 0 !== c ? c : a.custom, e, f);
      }
      if (
        ("string" == typeof b && (b = a.variants && a.variants[b]),
        "function" == typeof b)
      ) {
        let [e, f] = bk(d);
        b = b(void 0 !== c ? c : a.custom, e, f);
      }
      return b;
    }
    let bm = [
      "AnimationStart",
      "AnimationComplete",
      "Update",
      "BeforeLayoutMeasure",
      "LayoutMeasure",
      "LayoutAnimationStart",
      "LayoutAnimationComplete",
    ];
    class bn {
      scrapeMotionValuesFromProps(a, b, c) {
        return {};
      }
      constructor(
        {
          parent: a,
          props: b,
          presenceContext: c,
          reducedMotionConfig: d,
          blockInitialAnimation: e,
          visualState: f,
        },
        g = {},
      ) {
        ((this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.values = new Map()),
          (this.KeyframeResolver = as),
          (this.features = {}),
          (this.valueSubscriptions = new Map()),
          (this.prevMotionValues = {}),
          (this.events = {}),
          (this.propEventSubscriptions = {}),
          (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
          (this.render = () => {
            this.current &&
              (this.triggerBuild(),
              this.renderInstance(
                this.current,
                this.renderState,
                this.props.style,
                this.projection,
              ));
          }),
          (this.renderScheduledAt = 0),
          (this.scheduleRender = () => {
            let a = aZ.now();
            this.renderScheduledAt < a &&
              ((this.renderScheduledAt = a), ai.render(this.render, !1, !0));
          }));
        const { latestValues: h, renderState: i } = f;
        ((this.latestValues = h),
          (this.baseTarget = { ...h }),
          (this.initialValues = b.initial ? { ...h } : {}),
          (this.renderState = i),
          (this.parent = a),
          (this.props = b),
          (this.presenceContext = c),
          (this.depth = a ? a.depth + 1 : 0),
          (this.reducedMotionConfig = d),
          (this.options = g),
          (this.blockInitialAnimation = !!e),
          (this.isControllingVariants = bi(b)),
          (this.isVariantNode = bj(b)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = !!(a && a.current)));
        const { willChange: j, ...k } = this.scrapeMotionValuesFromProps(
          b,
          {},
          this,
        );
        for (const a in k) {
          const b = k[a];
          void 0 !== h[a] && aX(b) && b.set(h[a]);
        }
      }
      mount(a) {
        ((this.current = a),
          bd.set(a, this),
          this.projection &&
            !this.projection.instance &&
            this.projection.mount(a),
          this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((a, b) => this.bindToMotionValue(b, a)),
          bc.current || (bc.current = !0),
          (this.shouldReduceMotion =
            "never" !== this.reducedMotionConfig &&
            ("always" === this.reducedMotionConfig || bb)),
          this.parent?.addChild(this),
          this.update(this.props, this.presenceContext));
      }
      unmount() {
        for (let a in (this.projection && this.projection.unmount(),
        aj(this.notifyUpdate),
        aj(this.render),
        this.valueSubscriptions.forEach((a) => a()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this),
        this.events))
          this.events[a].clear();
        for (let a in this.features) {
          let b = this.features[a];
          b && (b.unmount(), (b.isMounted = !1));
        }
        this.current = null;
      }
      addChild(a) {
        (this.children.add(a),
          this.enteringChildren ?? (this.enteringChildren = new Set()),
          this.enteringChildren.add(a));
      }
      removeChild(a) {
        (this.children.delete(a),
          this.enteringChildren && this.enteringChildren.delete(a));
      }
      bindToMotionValue(a, b) {
        let c;
        this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)();
        let d = h.has(a);
        d && this.onBindTransform && this.onBindTransform();
        let e = b.on("change", (b) => {
          ((this.latestValues[a] = b),
            this.props.onUpdate && ai.preRender(this.notifyUpdate),
            d && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        });
        (window.MotionCheckAppearSync &&
          (c = window.MotionCheckAppearSync(this, a, b)),
          this.valueSubscriptions.set(a, () => {
            (e(), c && c(), b.owner && b.stop());
          }));
      }
      sortNodePosition(a) {
        return this.current &&
          this.sortInstanceNodePosition &&
          this.type === a.type
          ? this.sortInstanceNodePosition(this.current, a.current)
          : 0;
      }
      updateFeatures() {
        let a = "animation";
        for (a in a6) {
          let b = a6[a];
          if (!b) continue;
          let { isEnabled: c, Feature: d } = b;
          if (
            (!this.features[a] &&
              d &&
              c(this.props) &&
              (this.features[a] = new d(this)),
            this.features[a])
          ) {
            let b = this.features[a];
            b.isMounted ? b.update() : (b.mount(), (b.isMounted = !0));
          }
        }
      }
      triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
      }
      measureViewportBox() {
        return this.current
          ? this.measureInstanceViewportBox(this.current, this.props)
          : ba();
      }
      getStaticValue(a) {
        return this.latestValues[a];
      }
      setStaticValue(a, b) {
        this.latestValues[a] = b;
      }
      update(a, b) {
        ((a.transformTemplate || this.props.transformTemplate) &&
          this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = a),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = b));
        for (let b = 0; b < bm.length; b++) {
          let c = bm[b];
          this.propEventSubscriptions[c] &&
            (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
          let d = a["on" + c];
          d && (this.propEventSubscriptions[c] = this.on(c, d));
        }
        ((this.prevMotionValues = (function (a, b, c) {
          for (let d in b) {
            let e = b[d],
              f = c[d];
            if (aX(e)) a.addValue(d, e);
            else if (aX(f)) a.addValue(d, a2(e, { owner: a }));
            else if (f !== e)
              if (a.hasValue(d)) {
                let b = a.getValue(d);
                !0 === b.liveStyle ? b.jump(e) : b.hasAnimated || b.set(e);
              } else {
                let b = a.getStaticValue(d);
                a.addValue(d, a2(void 0 !== b ? b : e, { owner: a }));
              }
          }
          for (let d in c) void 0 === b[d] && a.removeValue(d);
          return b;
        })(
          this,
          this.scrapeMotionValuesFromProps(a, this.prevProps, this),
          this.prevMotionValues,
        )),
          this.handleChildMotionValue && this.handleChildMotionValue());
      }
      getProps() {
        return this.props;
      }
      getVariant(a) {
        return this.props.variants ? this.props.variants[a] : void 0;
      }
      getDefaultTransition() {
        return this.props.transition;
      }
      getTransformPagePoint() {
        return this.props.transformPagePoint;
      }
      getClosestVariantNode() {
        return this.isVariantNode
          ? this
          : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
      }
      addVariantChild(a) {
        let b = this.getClosestVariantNode();
        if (b)
          return (
            b.variantChildren && b.variantChildren.add(a),
            () => b.variantChildren.delete(a)
          );
      }
      addValue(a, b) {
        let c = this.values.get(a);
        b !== c &&
          (c && this.removeValue(a),
          this.bindToMotionValue(a, b),
          this.values.set(a, b),
          (this.latestValues[a] = b.get()));
      }
      removeValue(a) {
        this.values.delete(a);
        let b = this.valueSubscriptions.get(a);
        (b && (b(), this.valueSubscriptions.delete(a)),
          delete this.latestValues[a],
          this.removeValueFromRenderState(a, this.renderState));
      }
      hasValue(a) {
        return this.values.has(a);
      }
      getValue(a, b) {
        if (this.props.values && this.props.values[a])
          return this.props.values[a];
        let c = this.values.get(a);
        return (
          void 0 === c &&
            void 0 !== b &&
            ((c = a2(null === b ? void 0 : b, { owner: this })),
            this.addValue(a, c)),
          c
        );
      }
      readValue(a, b) {
        let c =
          void 0 === this.latestValues[a] && this.current
            ? (this.getBaseTargetFromProps(this.props, a) ??
              this.readValueFromInstance(this.current, a, this.options))
            : this.latestValues[a];
        if (null != c) {
          let d, e;
          if (
            "string" == typeof c &&
            ((d = c),
            /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(d) ||
              ((e = c), /^0[^.\s]+$/u.test(e)))
          )
            c = parseFloat(c);
          else {
            let d;
            ((d = c), !a3.find(W(d)) && aL.test(b) && (c = aU(a, b)));
          }
          this.setBaseTarget(a, aX(c) ? c.get() : c);
        }
        return aX(c) ? c.get() : c;
      }
      setBaseTarget(a, b) {
        this.baseTarget[a] = b;
      }
      getBaseTarget(a) {
        let b,
          { initial: c } = this.props;
        if ("string" == typeof c || "object" == typeof c) {
          let d = bl(this.props, c, this.presenceContext?.custom);
          d && (b = d[a]);
        }
        if (c && void 0 !== b) return b;
        let d = this.getBaseTargetFromProps(this.props, a);
        return void 0 === d || aX(d)
          ? void 0 !== this.initialValues[a] && void 0 === b
            ? void 0
            : this.baseTarget[a]
          : d;
      }
      on(a, b) {
        return (
          this.events[a] || (this.events[a] = new a0()),
          this.events[a].add(b)
        );
      }
      notify(a, ...b) {
        this.events[a] && this.events[a].notify(...b);
      }
      scheduleRenderMicrotask() {
        a4.render(this.render);
      }
    }
    class bo extends bn {
      constructor() {
        (super(...arguments), (this.KeyframeResolver = aW));
      }
      sortInstanceNodePosition(a, b) {
        return 2 & a.compareDocumentPosition(b) ? 1 : -1;
      }
      getBaseTargetFromProps(a, b) {
        return a.style ? a.style[b] : void 0;
      }
      removeValueFromRenderState(a, { vars: b, style: c }) {
        (delete b[a], delete c[a]);
      }
      handleChildMotionValue() {
        this.childSubscription &&
          (this.childSubscription(), delete this.childSubscription);
        let { children: a } = this.props;
        aX(a) &&
          (this.childSubscription = a.on("change", (a) => {
            this.current && (this.current.textContent = `${a}`);
          }));
      }
    }
    let bp = (a, b) => (b && "number" == typeof a ? b.transform(a) : a),
      bq = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      },
      br = g.length;
    function bs(a, b, c) {
      let { style: d, vars: e, transformOrigin: f } = a,
        i = !1,
        j = !1;
      for (let a in b) {
        let c = b[a];
        if (h.has(a)) {
          i = !0;
          continue;
        }
        if (t(a)) {
          e[a] = c;
          continue;
        }
        {
          let b = bp(c, aR[a]);
          a.startsWith("origin") ? ((j = !0), (f[a] = b)) : (d[a] = b);
        }
      }
      if (
        (!b.transform &&
          (i || c
            ? (d.transform = (function (a, b, c) {
                let d = "",
                  e = !0;
                for (let f = 0; f < br; f++) {
                  let h = g[f],
                    i = a[h];
                  if (void 0 === i) continue;
                  let j = !0;
                  if (
                    !(j =
                      "number" == typeof i
                        ? i === +!!h.startsWith("scale")
                        : 0 === parseFloat(i)) ||
                    c
                  ) {
                    let a = bp(i, aR[h]);
                    if (!j) {
                      e = !1;
                      let b = bq[h] || h;
                      d += `${b}(${a}) `;
                    }
                    c && (b[h] = a);
                  }
                }
                return (
                  (d = d.trim()),
                  c ? (d = c(b, e ? "" : d)) : e && (d = "none"),
                  d
                );
              })(b, a.transform, c))
            : d.transform && (d.transform = "none")),
        j)
      ) {
        let { originX: a = "50%", originY: b = "50%", originZ: c = 0 } = f;
        d.transformOrigin = `${a} ${b} ${c}`;
      }
    }
    function bt(a, { style: b, vars: c }, d, e) {
      let f,
        g = a.style;
      for (f in b) g[f] = b[f];
      for (f in (e?.applyProjectionStyles(g, d), c)) g.setProperty(f, c[f]);
    }
    function bu(a, b) {
      return b.max === b.min ? 0 : (a / (b.max - b.min)) * 100;
    }
    let bv = {
        correct: (a, b) => {
          if (!b.target) return a;
          if ("string" == typeof a)
            if (!S.test(a)) return a;
            else a = parseFloat(a);
          let c = bu(a, b.target.x),
            d = bu(a, b.target.y);
          return `${c}% ${d}%`;
        },
      },
      bw = {
        borderRadius: {
          ...bv,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: bv,
        borderTopRightRadius: bv,
        borderBottomLeftRadius: bv,
        borderBottomRightRadius: bv,
        boxShadow: {
          correct: (a, { treeScale: b, projectionDelta: c }) => {
            let d = aL.parse(a);
            if (d.length > 5) return a;
            let e = aL.createTransformer(a),
              f = +("number" != typeof d[0]),
              g = c.x.scale * b.x,
              h = c.y.scale * b.y;
            ((d[0 + f] /= g), (d[1 + f] /= h));
            let i = y(g, h, 0.5);
            return (
              "number" == typeof d[2 + f] && (d[2 + f] /= i),
              "number" == typeof d[3 + f] && (d[3 + f] /= i),
              e(d)
            );
          },
        },
      };
    function bx(a, { layout: b, layoutId: c }) {
      return (
        h.has(a) ||
        a.startsWith("origin") ||
        ((b || void 0 !== c) && (!!bw[a] || "opacity" === a))
      );
    }
    function by(a, b, c) {
      let { style: d } = a,
        e = {};
      for (let f in d)
        (aX(d[f]) ||
          (b.style && aX(b.style[f])) ||
          bx(f, a) ||
          c?.getValue(f)?.liveStyle !== void 0) &&
          (e[f] = d[f]);
      return e;
    }
    class bz extends bo {
      constructor() {
        (super(...arguments), (this.type = "html"), (this.renderInstance = bt));
      }
      readValueFromInstance(a, b) {
        if (h.has(b))
          return this.projection?.isProjecting
            ? p(b)
            : ((a, b) => {
                let { transform: c = "none" } = getComputedStyle(a);
                return q(c, b);
              })(a, b);
        {
          let c = window.getComputedStyle(a),
            d = (t(b) ? c.getPropertyValue(b) : c[b]) || 0;
          return "string" == typeof d ? d.trim() : d;
        }
      }
      measureInstanceViewportBox(a, { transformPagePoint: b }) {
        return J(a, b);
      }
      build(a, b, c) {
        bs(a, b, c.transformTemplate);
      }
      scrapeMotionValuesFromProps(a, b, c) {
        return by(a, b, c);
      }
    }
    let bA = (a) => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
      bB = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      bC = { offset: "strokeDashoffset", array: "strokeDasharray" };
    function bD(
      a,
      {
        attrX: b,
        attrY: c,
        attrScale: d,
        pathLength: e,
        pathSpacing: f = 1,
        pathOffset: g = 0,
        ...h
      },
      i,
      j,
      k,
    ) {
      if ((bs(a, h, j), i)) {
        a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
        return;
      }
      ((a.attrs = a.style), (a.style = {}));
      let { attrs: l, style: m } = a;
      (l.transform && ((m.transform = l.transform), delete l.transform),
        (m.transform || l.transformOrigin) &&
          ((m.transformOrigin = l.transformOrigin ?? "50% 50%"),
          delete l.transformOrigin),
        m.transform &&
          ((m.transformBox = k?.transformBox ?? "fill-box"),
          delete l.transformBox),
        void 0 !== b && (l.x = b),
        void 0 !== c && (l.y = c),
        void 0 !== d && (l.scale = d),
        void 0 !== e &&
          (function (a, b, c = 1, d = 0, e = !0) {
            a.pathLength = 1;
            let f = e ? bB : bC;
            a[f.offset] = S.transform(-d);
            let g = S.transform(b),
              h = S.transform(c);
            a[f.array] = `${g} ${h}`;
          })(l, e, f, g, !1));
    }
    let bE = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]),
      bF = (a) => "string" == typeof a && "svg" === a.toLowerCase();
    function bG(a, b, c) {
      let d = by(a, b, c);
      for (let c in a)
        (aX(a[c]) || aX(b[c])) &&
          (d[
            -1 !== g.indexOf(c)
              ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
              : c
          ] = a[c]);
      return d;
    }
    class bH extends bo {
      constructor() {
        (super(...arguments),
          (this.type = "svg"),
          (this.isSVGTag = !1),
          (this.measureInstanceViewportBox = ba));
      }
      getBaseTargetFromProps(a, b) {
        return a[b];
      }
      readValueFromInstance(a, b) {
        if (h.has(b)) {
          let a = aT(b);
          return (a && a.default) || 0;
        }
        return ((b = bE.has(b) ? b : bA(b)), a.getAttribute(b));
      }
      scrapeMotionValuesFromProps(a, b, c) {
        return bG(a, b, c);
      }
      build(a, b, c) {
        bD(a, b, this.isSVGTag, c.transformTemplate, c.style);
      }
      renderInstance(a, b, c, d) {
        for (let c in (bt(a, b, void 0, d), b.attrs))
          a.setAttribute(bE.has(c) ? c : bA(c), b.attrs[c]);
      }
      mount(a) {
        ((this.isSVGTag = bF(a.tagName)), super.mount(a));
      }
    }
    let bI = [
      "animate",
      "circle",
      "defs",
      "desc",
      "ellipse",
      "g",
      "image",
      "line",
      "filter",
      "marker",
      "mask",
      "metadata",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "rect",
      "stop",
      "switch",
      "symbol",
      "svg",
      "text",
      "tspan",
      "use",
      "view",
    ];
    function bJ(a) {
      if ("string" != typeof a || a.includes("-"));
      else if (bI.indexOf(a) > -1 || /[A-Z]/u.test(a)) return !0;
      return !1;
    }
    var bK = a.i(99669);
    let bL = (0, f.createContext)({});
    (a.s(["LayoutGroupContext", () => bL], 68848),
      (0, f.createContext)({ strict: !1 }));
    let bM = (0, f.createContext)({
      transformPagePoint: (a) => a,
      isStatic: !1,
      reducedMotion: "never",
    });
    a.s(["MotionConfigContext", () => bM], 62579);
    let bN = (0, f.createContext)({});
    function bO(a) {
      return Array.isArray(a) ? a.join(" ") : a;
    }
    let bP = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    });
    function bQ(a, b, c) {
      for (let d in b) aX(b[d]) || bx(d, c) || (a[d] = b[d]);
    }
    let bR = () => ({ ...bP(), attrs: {} }),
      bS = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
    function bT(a) {
      return (
        a.startsWith("while") ||
        (a.startsWith("drag") && "draggable" !== a) ||
        a.startsWith("layout") ||
        a.startsWith("onTap") ||
        a.startsWith("onPan") ||
        a.startsWith("onLayout") ||
        bS.has(a)
      );
    }
    let bU = (a) => !bT(a);
    try {
      ((e = (() => {
        let a = Error("Cannot find module '@emotion/is-prop-valid'");
        throw ((a.code = "MODULE_NOT_FOUND"), a);
      })().default),
        "function" == typeof e &&
          (bU = (a) => (a.startsWith("on") ? !bT(a) : e(a))));
    } catch {}
    let bV = (0, f.createContext)(null);
    function bW(a) {
      let b = (0, f.useRef)(null);
      return (null === b.current && (b.current = a()), b.current);
    }
    function bX(a) {
      return aX(a) ? a.get() : a;
    }
    (a.s(["PresenceContext", () => bV], 25816),
      a.s(["useConstant", () => bW], 6270));
    let bY = (a) => (b, c) => {
        let d = (0, f.useContext)(bN),
          e = (0, f.useContext)(bV),
          g = () =>
            (function (
              { scrapeMotionValuesFromProps: a, createRenderState: b },
              c,
              d,
              e,
            ) {
              return {
                latestValues: (function (a, b, c, d) {
                  let e = {},
                    f = d(a, {});
                  for (let a in f) e[a] = bX(f[a]);
                  let { initial: g, animate: h } = a,
                    i = bi(a),
                    j = bj(a);
                  b &&
                    j &&
                    !i &&
                    !1 !== a.inherit &&
                    (void 0 === g && (g = b.initial),
                    void 0 === h && (h = b.animate));
                  let k = !!c && !1 === c.initial,
                    l = (k = k || !1 === g) ? h : g;
                  if (l && "boolean" != typeof l && !be(l)) {
                    let b = Array.isArray(l) ? l : [l];
                    for (let c = 0; c < b.length; c++) {
                      let d = bl(a, b[c]);
                      if (d) {
                        let { transitionEnd: a, transition: b, ...c } = d;
                        for (let a in c) {
                          let b = c[a];
                          if (Array.isArray(b)) {
                            let a = k ? b.length - 1 : 0;
                            b = b[a];
                          }
                          null !== b && (e[a] = b);
                        }
                        for (let b in a) e[b] = a[b];
                      }
                    }
                  }
                  return e;
                })(c, d, e, a),
                renderState: b(),
              };
            })(a, b, d, e);
        return c ? g() : bW(g);
      },
      bZ = bY({ scrapeMotionValuesFromProps: by, createRenderState: bP }),
      b$ = bY({ scrapeMotionValuesFromProps: bG, createRenderState: bR }),
      b_ = Symbol.for("motionComponentSymbol");
    function b0(a) {
      return (
        a &&
        "object" == typeof a &&
        Object.prototype.hasOwnProperty.call(a, "current")
      );
    }
    let b1 = "data-" + bA("framerAppearId"),
      b2 = (0, f.createContext)({}),
      b3 = f.useEffect;
    function b4(a, { forwardMotionProps: b = !1 } = {}, c, d) {
      c &&
        (function (a) {
          for (let b in a) a6[b] = { ...a6[b], ...a[b] };
        })(c);
      let e = bJ(a) ? b$ : bZ;
      function g(c, d) {
        var g;
        let h,
          i = {
            ...(0, f.useContext)(bM),
            ...c,
            layoutId: (function ({ layoutId: a }) {
              let b = (0, f.useContext)(bL).id;
              return b && void 0 !== a ? b + "-" + a : a;
            })(c),
          },
          { isStatic: j } = i,
          k = (function (a) {
            let { initial: b, animate: c } = (function (a, b) {
              if (bi(a)) {
                let { initial: b, animate: c } = a;
                return {
                  initial: !1 === b || bf(b) ? b : void 0,
                  animate: bf(c) ? c : void 0,
                };
              }
              return !1 !== a.inherit ? b : {};
            })(a, (0, f.useContext)(bN));
            return (0, f.useMemo)(
              () => ({ initial: b, animate: c }),
              [bO(b), bO(c)],
            );
          })(c),
          l = e(c, j);
        return (0, bK.jsxs)(bN.Provider, {
          value: k,
          children: [
            h && k.visualElement
              ? (0, bK.jsx)(h, { visualElement: k.visualElement, ...i })
              : null,
            (function (a, b, c, { latestValues: d }, e, g = !1) {
              let h = (
                  bJ(a)
                    ? function (a, b, c, d) {
                        let e = (0, f.useMemo)(() => {
                          let c = bR();
                          return (
                            bD(c, b, bF(d), a.transformTemplate, a.style),
                            { ...c.attrs, style: { ...c.style } }
                          );
                        }, [b]);
                        if (a.style) {
                          let b = {};
                          (bQ(b, a.style, a), (e.style = { ...b, ...e.style }));
                        }
                        return e;
                      }
                    : function (a, b) {
                        let c,
                          d,
                          e = {},
                          g =
                            ((c = a.style || {}),
                            bQ((d = {}), c, a),
                            Object.assign(
                              d,
                              (function ({ transformTemplate: a }, b) {
                                return (0, f.useMemo)(() => {
                                  let c = bP();
                                  return (
                                    bs(c, b, a),
                                    Object.assign({}, c.vars, c.style)
                                  );
                                }, [b]);
                              })(a, b),
                            ),
                            d);
                        return (
                          a.drag &&
                            !1 !== a.dragListener &&
                            ((e.draggable = !1),
                            (g.userSelect =
                              g.WebkitUserSelect =
                              g.WebkitTouchCallout =
                                "none"),
                            (g.touchAction =
                              !0 === a.drag
                                ? "none"
                                : `pan-${"x" === a.drag ? "y" : "x"}`)),
                          void 0 === a.tabIndex &&
                            (a.onTap || a.onTapStart || a.whileTap) &&
                            (e.tabIndex = 0),
                          (e.style = g),
                          e
                        );
                      }
                )(b, d, e, a),
                i = (function (a, b, c) {
                  let d = {};
                  for (let e in a)
                    ("values" !== e || "object" != typeof a.values) &&
                      (bU(e) ||
                        (!0 === c && bT(e)) ||
                        (!b && !bT(e)) ||
                        (a.draggable && e.startsWith("onDrag"))) &&
                      (d[e] = a[e]);
                  return d;
                })(b, "string" == typeof a, g),
                j = a !== f.Fragment ? { ...i, ...h, ref: c } : {},
                { children: k } = b,
                l = (0, f.useMemo)(() => (aX(k) ? k.get() : k), [k]);
              return (0, f.createElement)(a, { ...j, children: l });
            })(
              a,
              c,
              ((g = k.visualElement),
              (0, f.useCallback)(
                (a) => {
                  (a && l.onMount && l.onMount(a),
                    g && (a ? g.mount(a) : g.unmount()),
                    d &&
                      ("function" == typeof d
                        ? d(a)
                        : b0(d) && (d.current = a)));
                },
                [g],
              )),
              l,
              j,
              b,
            ),
          ],
        });
      }
      g.displayName = `motion.${"string" == typeof a ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
      let h = (0, f.forwardRef)(g);
      return ((h[b_] = a), h);
    }
    function b5(a, b, c) {
      let d = a.getProps();
      return bl(d, b, void 0 !== c ? c : d.custom, a);
    }
    function b6(a, b) {
      return a?.[b] ?? a?.default ?? a;
    }
    a.s(["useIsomorphicLayoutEffect", () => b3], 44817);
    let b7 = (a) => Array.isArray(a);
    function b8(a, b) {
      let { transitionEnd: c = {}, transition: d = {}, ...e } = b5(a, b) || {};
      for (let b in (e = { ...e, ...c })) {
        var f;
        let c = b7((f = e[b])) ? f[f.length - 1] || 0 : f;
        a.hasValue(b) ? a.getValue(b).set(c) : a.addValue(b, a2(c));
      }
    }
    function b9(a, b) {
      let c = a.getValue("willChange");
      if (aX(c) && c.add) return c.add(b);
      if (!c && af.WillChange) {
        let c = new af.WillChange("auto");
        (a.addValue("willChange", c), c.add(b));
      }
    }
    a.s(["setTarget", () => b8], 59055);
    function ca(a) {
      ((a.duration = 0), (a.type = "keyframes"));
    }
    let cb = (a, b) => (c) => b(a(c)),
      cc = (...a) => a.reduce(cb),
      cd = (a) => 1e3 * a,
      ce = { layout: 0, mainThread: 0, waapi: 0 };
    function cf(a, b, c) {
      return (c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6)
        ? a + (b - a) * 6 * c
        : c < 0.5
          ? b
          : c < 2 / 3
            ? a + (b - a) * (2 / 3 - c) * 6
            : a;
    }
    function cg(a, b) {
      return (c) => (c > 0 ? b : a);
    }
    let ch = (a, b, c) => {
        let d = a * a,
          e = c * (b * b - d) + d;
        return e < 0 ? 0 : Math.sqrt(e);
      },
      ci = [aA, az, aB];
    function cj(a) {
      let b = ci.find((b) => b.test(a));
      if (
        (Z(
          !!b,
          `'${a}' is not an animatable color. Use the equivalent color code instead.`,
          "color-not-animatable",
        ),
        !b)
      )
        return !1;
      let c = b.parse(a);
      return (
        b === aB &&
          (c = (function ({ hue: a, saturation: b, lightness: c, alpha: d }) {
            ((a /= 360), (c /= 100));
            let e = 0,
              f = 0,
              g = 0;
            if ((b /= 100)) {
              let d = c < 0.5 ? c * (1 + b) : c + b - c * b,
                h = 2 * c - d;
              ((e = cf(h, d, a + 1 / 3)),
                (f = cf(h, d, a)),
                (g = cf(h, d, a - 1 / 3)));
            } else e = f = g = c;
            return {
              red: Math.round(255 * e),
              green: Math.round(255 * f),
              blue: Math.round(255 * g),
              alpha: d,
            };
          })(c)),
        c
      );
    }
    let ck = (a, b) => {
        let c = cj(a),
          d = cj(b);
        if (!c || !d) return cg(a, b);
        let e = { ...c };
        return (a) => (
          (e.red = ch(c.red, d.red, a)),
          (e.green = ch(c.green, d.green, a)),
          (e.blue = ch(c.blue, d.blue, a)),
          (e.alpha = y(c.alpha, d.alpha, a)),
          az.transform(e)
        );
      },
      cl = new Set(["none", "hidden"]);
    function cm(a, b) {
      return (c) => y(a, b, c);
    }
    function cn(a) {
      return "number" == typeof a
        ? cm
        : "string" == typeof a
          ? v(a)
            ? cg
            : aC.test(a)
              ? ck
              : cq
          : Array.isArray(a)
            ? co
            : "object" == typeof a
              ? aC.test(a)
                ? ck
                : cp
              : cg;
    }
    function co(a, b) {
      let c = [...a],
        d = c.length,
        e = a.map((a, c) => cn(a)(a, b[c]));
      return (a) => {
        for (let b = 0; b < d; b++) c[b] = e[b](a);
        return c;
      };
    }
    function cp(a, b) {
      let c = { ...a, ...b },
        d = {};
      for (let e in c)
        void 0 !== a[e] && void 0 !== b[e] && (d[e] = cn(a[e])(a[e], b[e]));
      return (a) => {
        for (let b in d) c[b] = d[b](a);
        return c;
      };
    }
    let cq = (a, b) => {
      let c = aL.createTransformer(b),
        d = aH(a),
        e = aH(b);
      if (
        !(
          d.indexes.var.length === e.indexes.var.length &&
          d.indexes.color.length === e.indexes.color.length &&
          d.indexes.number.length >= e.indexes.number.length
        )
      )
        return (
          Z(
            !0,
            `Complex values '${a}' and '${b}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            "complex-values-different",
          ),
          cg(a, b)
        );
      if ((cl.has(a) && !e.values.length) || (cl.has(b) && !d.values.length))
        return cl.has(a) ? (c) => (c <= 0 ? a : b) : (c) => (c >= 1 ? b : a);
      return cc(
        co(
          (function (a, b) {
            let c = [],
              d = { color: 0, var: 0, number: 0 };
            for (let e = 0; e < b.values.length; e++) {
              let f = b.types[e],
                g = a.indexes[f][d[f]],
                h = a.values[g] ?? 0;
              ((c[e] = h), d[f]++);
            }
            return c;
          })(d, e),
          e.values,
        ),
        c,
      );
    };
    function cr(a, b, c) {
      return "number" == typeof a &&
        "number" == typeof b &&
        "number" == typeof c
        ? y(a, b, c)
        : cn(a)(a, b);
    }
    let cs = (a) => {
        let b = ({ timestamp: b }) => a(b);
        return {
          start: (a = !0) => ai.update(b, a),
          stop: () => aj(b),
          now: () => (ak.isProcessing ? ak.timestamp : aZ.now()),
        };
      },
      ct = (a, b, c = 10) => {
        let d = "",
          e = Math.max(Math.round(b / c), 2);
        for (let b = 0; b < e; b++)
          d += Math.round(1e4 * a(b / (e - 1))) / 1e4 + ", ";
        return `linear(${d.substring(0, d.length - 2)})`;
      };
    function cu(a) {
      let b = 0,
        c = a.next(b);
      for (; !c.done && b < 2e4; ) ((b += 50), (c = a.next(b)));
      return b >= 2e4 ? 1 / 0 : b;
    }
    function cv(a, b, c) {
      var d, e;
      let f = Math.max(b - 5, 0);
      return ((d = c - a(f)), (e = b - f) ? (1e3 / e) * d : 0);
    }
    let cw = 0.01,
      cx = 2,
      cy = 0.005,
      cz = 0.5;
    function cA(a, b) {
      return a * Math.sqrt(1 - b * b);
    }
    let cB = ["duration", "bounce"],
      cC = ["stiffness", "damping", "mass"];
    function cD(a, b) {
      return b.some((b) => void 0 !== a[b]);
    }
    function cE(a = 0.3, b = 0.3) {
      let c,
        d =
          "object" != typeof a
            ? { visualDuration: a, keyframes: [0, 1], bounce: b }
            : a,
        { restSpeed: e, restDelta: f } = d,
        g = d.keyframes[0],
        h = d.keyframes[d.keyframes.length - 1],
        i = { done: !1, value: g },
        {
          stiffness: j,
          damping: k,
          mass: l,
          duration: m,
          velocity: n,
          isResolvedFromDuration: o,
        } = (function (a) {
          let b = {
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1,
            ...a,
          };
          if (!cD(a, cC) && cD(a, cB))
            if (a.visualDuration) {
              let c = (2 * Math.PI) / (1.2 * a.visualDuration),
                d = c * c,
                e = 2 * L(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(d);
              b = { ...b, mass: 1, stiffness: d, damping: e };
            } else {
              let c = (function ({
                duration: a = 800,
                bounce: b = 0.3,
                velocity: c = 0,
                mass: d = 1,
              }) {
                let e, f;
                Z(
                  a <= cd(10),
                  "Spring duration must be 10 seconds or less",
                  "spring-duration-limit",
                );
                let g = 1 - b;
                ((g = L(0.05, 1, g)),
                  (a = L(0.01, 10, a / 1e3)),
                  g < 1
                    ? ((e = (b) => {
                        let d = b * g,
                          e = d * a;
                        return 0.001 - ((d - c) / cA(b, g)) * Math.exp(-e);
                      }),
                      (f = (b) => {
                        let d = b * g * a,
                          f = Math.pow(g, 2) * Math.pow(b, 2) * a,
                          h = Math.exp(-d),
                          i = cA(Math.pow(b, 2), g);
                        return (
                          ((d * c + c - f) * h * (-e(b) + 0.001 > 0 ? -1 : 1)) /
                          i
                        );
                      }))
                    : ((e = (b) =>
                        -0.001 + Math.exp(-b * a) * ((b - c) * a + 1)),
                      (f = (b) => a * a * (c - b) * Math.exp(-b * a))));
                let h = (function (a, b, c) {
                  let d = c;
                  for (let c = 1; c < 12; c++) d -= a(d) / b(d);
                  return d;
                })(e, f, 5 / a);
                if (((a = cd(a)), isNaN(h)))
                  return { stiffness: 100, damping: 10, duration: a };
                {
                  let b = Math.pow(h, 2) * d;
                  return {
                    stiffness: b,
                    damping: 2 * g * Math.sqrt(d * b),
                    duration: a,
                  };
                }
              })(a);
              (b = { ...b, ...c, mass: 1 }).isResolvedFromDuration = !0;
            }
          return b;
        })({ ...d, velocity: -((d.velocity || 0) / 1e3) }),
        p = n || 0,
        q = k / (2 * Math.sqrt(j * l)),
        r = h - g,
        s = Math.sqrt(j / l) / 1e3,
        t = 5 > Math.abs(r);
      if ((e || (e = t ? cw : cx), f || (f = t ? cy : cz), q < 1)) {
        let a = cA(s, q);
        c = (b) =>
          h -
          Math.exp(-q * s * b) *
            (((p + q * s * r) / a) * Math.sin(a * b) + r * Math.cos(a * b));
      } else if (1 === q)
        c = (a) => h - Math.exp(-s * a) * (r + (p + s * r) * a);
      else {
        let a = s * Math.sqrt(q * q - 1);
        c = (b) => {
          let c = Math.exp(-q * s * b),
            d = Math.min(a * b, 300);
          return (
            h -
            (c * ((p + q * s * r) * Math.sinh(d) + a * r * Math.cosh(d))) / a
          );
        };
      }
      let u = {
        calculatedDuration: (o && m) || null,
        next: (a) => {
          let b = c(a);
          if (o) i.done = a >= m;
          else {
            let d = 0 === a ? p : 0;
            q < 1 && (d = 0 === a ? cd(p) : cv(c, a, b));
            let g = Math.abs(h - b) <= f;
            i.done = Math.abs(d) <= e && g;
          }
          return ((i.value = i.done ? h : b), i);
        },
        toString: () => {
          let a = Math.min(cu(u), 2e4),
            b = ct((b) => u.next(a * b).value, a, 30);
          return a + "ms " + b;
        },
        toTransition: () => {},
      };
      return u;
    }
    function cF({
      keyframes: a,
      velocity: b = 0,
      power: c = 0.8,
      timeConstant: d = 325,
      bounceDamping: e = 10,
      bounceStiffness: f = 500,
      modifyTarget: g,
      min: h,
      max: i,
      restDelta: j = 0.5,
      restSpeed: k,
    }) {
      let l,
        m,
        n = a[0],
        o = { done: !1, value: n },
        p = c * b,
        q = n + p,
        r = void 0 === g ? q : g(q);
      r !== q && (p = r - n);
      let s = (a) => -p * Math.exp(-a / d),
        t = (a) => r + s(a),
        u = (a) => {
          let b = s(a),
            c = t(a);
          ((o.done = Math.abs(b) <= j), (o.value = o.done ? r : c));
        },
        v = (a) => {
          let b;
          if (
            ((b = o.value), (void 0 !== h && b < h) || (void 0 !== i && b > i))
          ) {
            var c;
            ((l = a),
              (m = cE({
                keyframes: [
                  o.value,
                  ((c = o.value),
                  void 0 === h
                    ? i
                    : void 0 === i || Math.abs(h - c) < Math.abs(i - c)
                      ? h
                      : i),
                ],
                velocity: cv(t, a, o.value),
                damping: e,
                stiffness: f,
                restDelta: j,
                restSpeed: k,
              })));
          }
        };
      return (
        v(0),
        {
          calculatedDuration: null,
          next: (a) => {
            let b = !1;
            return (m || void 0 !== l || ((b = !0), u(a), v(a)),
            void 0 !== l && a >= l)
              ? m.next(a - l)
              : (b || u(a), o);
          },
        }
      );
    }
    cE.applyToOptions = (a) => {
      let b = (function (a, b = 100, c) {
        let d = c({ ...a, keyframes: [0, b] }),
          e = Math.min(cu(d), 2e4);
        return {
          type: "keyframes",
          ease: (a) => d.next(e * a).value / b,
          duration: e / 1e3,
        };
      })(a, 100, cE);
      return (
        (a.ease = b.ease),
        (a.duration = cd(b.duration)),
        (a.type = "keyframes"),
        a
      );
    };
    let cG = (a, b, c) =>
      (((1 - 3 * c + 3 * b) * a + (3 * c - 6 * b)) * a + 3 * b) * a;
    function cH(a, b, c, d) {
      return a === b && c === d
        ? ae
        : (e) =>
            0 === e || 1 === e
              ? e
              : cG(
                  (function (a, b, c, d, e) {
                    let f,
                      g,
                      h = 0;
                    do
                      (f = cG((g = b + (c - b) / 2), d, e) - a) > 0
                        ? (c = g)
                        : (b = g);
                    while (Math.abs(f) > 1e-7 && ++h < 12);
                    return g;
                  })(e, 0, 1, a, c),
                  b,
                  d,
                );
    }
    let cI = cH(0.42, 0, 1, 1),
      cJ = cH(0, 0, 0.58, 1),
      cK = cH(0.42, 0, 0.58, 1),
      cL = (a) => (b) => (b <= 0.5 ? a(2 * b) / 2 : (2 - a(2 * (1 - b))) / 2),
      cM = (a) => (b) => 1 - a(1 - b),
      cN = cH(0.33, 1.53, 0.69, 0.99),
      cO = cM(cN),
      cP = cL(cO),
      cQ = (a) =>
        (a *= 2) < 1 ? 0.5 * cO(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
      cR = (a) => 1 - Math.sin(Math.acos(a)),
      cS = cM(cR),
      cT = cL(cR),
      cU = (a) => Array.isArray(a) && "number" == typeof a[0],
      cV = {
        linear: ae,
        easeIn: cI,
        easeInOut: cK,
        easeOut: cJ,
        circIn: cR,
        circInOut: cT,
        circOut: cS,
        backIn: cO,
        backInOut: cP,
        backOut: cN,
        anticipate: cQ,
      },
      cW = (a) => {
        if (cU(a)) {
          $(
            4 === a.length,
            "Cubic bezier arrays must contain four numerical values.",
            "cubic-bezier-length",
          );
          let [b, c, d, e] = a;
          return cH(b, c, d, e);
        }
        return "string" == typeof a
          ? ($(
              void 0 !== cV[a],
              `Invalid easing type '${a}'`,
              "invalid-easing-type",
            ),
            cV[a])
          : a;
      },
      cX = (a, b, c) => {
        let d = b - a;
        return 0 === d ? 1 : (c - a) / d;
      };
    function cY({
      duration: a = 300,
      keyframes: b,
      times: c,
      ease: d = "easeInOut",
    }) {
      var e;
      let f,
        g = Array.isArray(d) && "number" != typeof d[0] ? d.map(cW) : cW(d),
        h = { done: !1, value: b[0] },
        i = (function (a, b, { clamp: c = !0, ease: d, mixer: e } = {}) {
          let f = a.length;
          if (
            ($(
              f === b.length,
              "Both input and output ranges must be the same length",
              "range-length",
            ),
            1 === f)
          )
            return () => b[0];
          if (2 === f && b[0] === b[1]) return () => b[1];
          let g = a[0] === a[1];
          a[0] > a[f - 1] && ((a = [...a].reverse()), (b = [...b].reverse()));
          let h = (function (a, b, c) {
              let d = [],
                e = c || af.mix || cr,
                f = a.length - 1;
              for (let c = 0; c < f; c++) {
                let f = e(a[c], a[c + 1]);
                (b && (f = cc(Array.isArray(b) ? b[c] || ae : b, f)),
                  d.push(f));
              }
              return d;
            })(b, d, e),
            i = h.length,
            j = (c) => {
              if (g && c < a[0]) return b[0];
              let d = 0;
              if (i > 1) for (; d < a.length - 2 && !(c < a[d + 1]); d++);
              let e = cX(a[d], a[d + 1], c);
              return h[d](e);
            };
          return c ? (b) => j(L(a[0], a[f - 1], b)) : j;
        })(
          ((e =
            c && c.length === b.length
              ? c
              : (!(function (a, b) {
                  let c = a[a.length - 1];
                  for (let d = 1; d <= b; d++) {
                    let e = cX(0, b, d);
                    a.push(y(c, 1, e));
                  }
                })((f = [0]), b.length - 1),
                f)),
          e.map((b) => b * a)),
          b,
          {
            ease: Array.isArray(g)
              ? g
              : b.map(() => g || cK).splice(0, b.length - 1),
          },
        );
      return {
        calculatedDuration: a,
        next: (b) => ((h.value = i(b)), (h.done = b >= a), h),
      };
    }
    let cZ = (a) => null !== a;
    function c$(a, { repeat: b, repeatType: c = "loop" }, d, e = 1) {
      let f = a.filter(cZ),
        g = e < 0 || (b && "loop" !== c && b % 2 == 1) ? 0 : f.length - 1;
      return g && void 0 !== d ? d : f[g];
    }
    let c_ = { decay: cF, inertia: cF, tween: cY, keyframes: cY, spring: cE };
    function c0(a) {
      "string" == typeof a.type && (a.type = c_[a.type]);
    }
    class c1 {
      constructor() {
        this.updateFinished();
      }
      get finished() {
        return this._finished;
      }
      updateFinished() {
        this._finished = new Promise((a) => {
          this.resolve = a;
        });
      }
      notifyFinished() {
        this.resolve();
      }
      then(a, b) {
        return this.finished.then(a, b);
      }
    }
    let c2 = (a) => a / 100;
    class c3 extends c1 {
      constructor(a) {
        (super(),
          (this.state = "idle"),
          (this.startTime = null),
          (this.isStopped = !1),
          (this.currentTime = 0),
          (this.holdTime = null),
          (this.playbackSpeed = 1),
          (this.stop = () => {
            let { motionValue: a } = this.options;
            (a && a.updatedAt !== aZ.now() && this.tick(aZ.now()),
              (this.isStopped = !0),
              "idle" !== this.state &&
                (this.teardown(), this.options.onStop?.()));
          }),
          ce.mainThread++,
          (this.options = a),
          this.initAnimation(),
          this.play(),
          !1 === a.autoplay && this.pause());
      }
      initAnimation() {
        let { options: a } = this;
        c0(a);
        let {
            type: b = cY,
            repeat: c = 0,
            repeatDelay: d = 0,
            repeatType: e,
            velocity: f = 0,
          } = a,
          { keyframes: g } = a,
          h = b || cY;
        h !== cY &&
          "number" != typeof g[0] &&
          ((this.mixKeyframes = cc(c2, cr(g[0], g[1]))), (g = [0, 100]));
        let i = h({ ...a, keyframes: g });
        ("mirror" === e &&
          (this.mirroredGenerator = h({
            ...a,
            keyframes: [...g].reverse(),
            velocity: -f,
          })),
          null === i.calculatedDuration && (i.calculatedDuration = cu(i)));
        let { calculatedDuration: j } = i;
        ((this.calculatedDuration = j),
          (this.resolvedDuration = j + d),
          (this.totalDuration = this.resolvedDuration * (c + 1) - d),
          (this.generator = i));
      }
      updateTime(a) {
        let b = Math.round(a - this.startTime) * this.playbackSpeed;
        null !== this.holdTime
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = b);
      }
      tick(a, b = !1) {
        let {
          generator: c,
          totalDuration: d,
          mixKeyframes: e,
          mirroredGenerator: f,
          resolvedDuration: g,
          calculatedDuration: h,
        } = this;
        if (null === this.startTime) return c.next(0);
        let {
          delay: i = 0,
          keyframes: j,
          repeat: k,
          repeatType: l,
          repeatDelay: m,
          type: n,
          onUpdate: o,
          finalKeyframe: p,
        } = this.options;
        (this.speed > 0
          ? (this.startTime = Math.min(this.startTime, a))
          : this.speed < 0 &&
            (this.startTime = Math.min(a - d / this.speed, this.startTime)),
          b ? (this.currentTime = a) : this.updateTime(a));
        let q = this.currentTime - i * (this.playbackSpeed >= 0 ? 1 : -1),
          r = this.playbackSpeed >= 0 ? q < 0 : q > d;
        ((this.currentTime = Math.max(q, 0)),
          "finished" === this.state &&
            null === this.holdTime &&
            (this.currentTime = d));
        let s = this.currentTime,
          t = c;
        if (k) {
          let a = Math.min(this.currentTime, d) / g,
            b = Math.floor(a),
            c = a % 1;
          (!c && a >= 1 && (c = 1),
            1 === c && b--,
            (b = Math.min(b, k + 1)) % 2 &&
              ("reverse" === l
                ? ((c = 1 - c), m && (c -= m / g))
                : "mirror" === l && (t = f)),
            (s = L(0, 1, c) * g));
        }
        let u = r ? { done: !1, value: j[0] } : t.next(s);
        e && (u.value = e(u.value));
        let { done: v } = u;
        r ||
          null === h ||
          (v =
            this.playbackSpeed >= 0
              ? this.currentTime >= d
              : this.currentTime <= 0);
        let w =
          null === this.holdTime &&
          ("finished" === this.state || ("running" === this.state && v));
        return (
          w && n !== cF && (u.value = c$(j, this.options, p, this.speed)),
          o && o(u.value),
          w && this.finish(),
          u
        );
      }
      then(a, b) {
        return this.finished.then(a, b);
      }
      get duration() {
        return this.calculatedDuration / 1e3;
      }
      get iterationDuration() {
        let { delay: a = 0 } = this.options || {};
        return this.duration + a / 1e3;
      }
      get time() {
        return this.currentTime / 1e3;
      }
      set time(a) {
        ((a = cd(a)),
          (this.currentTime = a),
          null === this.startTime ||
          null !== this.holdTime ||
          0 === this.playbackSpeed
            ? (this.holdTime = a)
            : this.driver &&
              (this.startTime = this.driver.now() - a / this.playbackSpeed),
          this.driver?.start(!1));
      }
      get speed() {
        return this.playbackSpeed;
      }
      set speed(a) {
        this.updateTime(aZ.now());
        let b = this.playbackSpeed !== a;
        ((this.playbackSpeed = a), b && (this.time = this.currentTime / 1e3));
      }
      play() {
        if (this.isStopped) return;
        let { driver: a = cs, startTime: b } = this.options;
        (this.driver || (this.driver = a((a) => this.tick(a))),
          this.options.onPlay?.());
        let c = this.driver.now();
        ("finished" === this.state
          ? (this.updateFinished(), (this.startTime = c))
          : null !== this.holdTime
            ? (this.startTime = c - this.holdTime)
            : this.startTime || (this.startTime = b ?? c),
          "finished" === this.state &&
            this.speed < 0 &&
            (this.startTime += this.calculatedDuration),
          (this.holdTime = null),
          (this.state = "running"),
          this.driver.start());
      }
      pause() {
        ((this.state = "paused"),
          this.updateTime(aZ.now()),
          (this.holdTime = this.currentTime));
      }
      complete() {
        ("running" !== this.state && this.play(),
          (this.state = "finished"),
          (this.holdTime = null));
      }
      finish() {
        (this.notifyFinished(),
          this.teardown(),
          (this.state = "finished"),
          this.options.onComplete?.());
      }
      cancel() {
        ((this.holdTime = null),
          (this.startTime = 0),
          this.tick(0),
          this.teardown(),
          this.options.onCancel?.());
      }
      teardown() {
        ((this.state = "idle"),
          this.stopDriver(),
          (this.startTime = this.holdTime = null),
          ce.mainThread--);
      }
      stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
      }
      sample(a) {
        return ((this.startTime = 0), this.tick(a, !0));
      }
      attachTimeline(a) {
        return (
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"),
            (this.options.ease = "linear"),
            this.initAnimation()),
          this.driver?.stop(),
          a.observe(this)
        );
      }
    }
    function c4(a) {
      let b;
      return () => (void 0 === b && (b = a()), b);
    }
    let c5 = c4(() => void 0 !== window.ScrollTimeline),
      c6 = {},
      c7 =
        ((c = c4(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (a) {
            return !1;
          }
          return !0;
        })),
        () => c6.linearEasing ?? c()),
      c8 = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`,
      c9 = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: c8([0, 0.65, 0.55, 1]),
        circOut: c8([0.55, 0, 1, 0.45]),
        backIn: c8([0.31, 0.01, 0.66, -0.59]),
        backOut: c8([0.33, 1.53, 0.69, 0.99]),
      };
    function da(a) {
      return "function" == typeof a && "applyToOptions" in a;
    }
    class db extends c1 {
      constructor(a) {
        if ((super(), (this.finishedTime = null), (this.isStopped = !1), !a))
          return;
        const {
          element: b,
          name: c,
          keyframes: d,
          pseudoElement: e,
          allowFlatten: f = !1,
          finalKeyframe: g,
          onComplete: h,
        } = a;
        ((this.isPseudoElement = !!e),
          (this.allowFlatten = f),
          (this.options = a),
          $(
            "string" != typeof a.type,
            'Mini animate() doesn\'t support "type" as a string.',
            "mini-spring",
          ));
        const i = (function ({ type: a, ...b }) {
          return da(a) && c7()
            ? a.applyToOptions(b)
            : (b.duration ?? (b.duration = 300),
              b.ease ?? (b.ease = "easeOut"),
              b);
        })(a);
        ((this.animation = (function (
          a,
          b,
          c,
          {
            delay: d = 0,
            duration: e = 300,
            repeat: f = 0,
            repeatType: g = "loop",
            ease: h = "easeOut",
            times: i,
          } = {},
          j,
        ) {
          let k = { [b]: c };
          i && (k.offset = i);
          let l = (function a(b, c) {
            if (b)
              return "function" == typeof b
                ? c7()
                  ? ct(b, c)
                  : "ease-out"
                : cU(b)
                  ? c8(b)
                  : Array.isArray(b)
                    ? b.map((b) => a(b, c) || c9.easeOut)
                    : c9[b];
          })(h, e);
          Array.isArray(l) && (k.easing = l);
          let m = {
            delay: d,
            duration: e,
            easing: Array.isArray(l) ? "linear" : l,
            fill: "both",
            iterations: f + 1,
            direction: "reverse" === g ? "alternate" : "normal",
          };
          j && (m.pseudoElement = j);
          let n = a.animate(k, m);
          return n;
        })(b, c, d, i, e)),
          !1 === i.autoplay && this.animation.pause(),
          (this.animation.onfinish = () => {
            if (((this.finishedTime = this.time), !e)) {
              let a = c$(d, this.options, g, this.speed);
              (this.updateMotionValue
                ? this.updateMotionValue(a)
                : c.startsWith("--")
                  ? b.style.setProperty(c, a)
                  : (b.style[c] = a),
                this.animation.cancel());
            }
            (h?.(), this.notifyFinished());
          }));
      }
      play() {
        this.isStopped ||
          (this.animation.play(),
          "finished" === this.state && this.updateFinished());
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.finish?.();
      }
      cancel() {
        try {
          this.animation.cancel();
        } catch (a) {}
      }
      stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        let { state: a } = this;
        "idle" !== a &&
          "finished" !== a &&
          (this.updateMotionValue
            ? this.updateMotionValue()
            : this.commitStyles(),
          this.isPseudoElement || this.cancel());
      }
      commitStyles() {
        this.isPseudoElement || this.animation.commitStyles?.();
      }
      get duration() {
        return (
          Number(this.animation.effect?.getComputedTiming?.().duration || 0) /
          1e3
        );
      }
      get iterationDuration() {
        let { delay: a = 0 } = this.options || {};
        return this.duration + a / 1e3;
      }
      get time() {
        return (Number(this.animation.currentTime) || 0) / 1e3;
      }
      set time(a) {
        ((this.finishedTime = null), (this.animation.currentTime = cd(a)));
      }
      get speed() {
        return this.animation.playbackRate;
      }
      set speed(a) {
        (a < 0 && (this.finishedTime = null),
          (this.animation.playbackRate = a));
      }
      get state() {
        return null !== this.finishedTime
          ? "finished"
          : this.animation.playState;
      }
      get startTime() {
        return Number(this.animation.startTime);
      }
      set startTime(a) {
        this.animation.startTime = a;
      }
      attachTimeline({ timeline: a, observe: b }) {
        return (this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: "linear" }),
        (this.animation.onfinish = null),
        a && c5())
          ? ((this.animation.timeline = a), ae)
          : b(this);
      }
    }
    let dc = { anticipate: cQ, backInOut: cP, circInOut: cT };
    class dd extends db {
      constructor(a) {
        (!(function (a) {
          "string" == typeof a.ease && a.ease in dc && (a.ease = dc[a.ease]);
        })(a),
          c0(a),
          super(a),
          a.startTime && (this.startTime = a.startTime),
          (this.options = a));
      }
      updateMotionValue(a) {
        let {
          motionValue: b,
          onUpdate: c,
          onComplete: d,
          element: e,
          ...f
        } = this.options;
        if (!b) return;
        if (void 0 !== a) return void b.set(a);
        let g = new c3({ ...f, autoplay: !1 }),
          h = cd(this.finishedTime ?? this.time);
        (b.setWithVelocity(g.sample(h - 10).value, g.sample(h).value, 10),
          g.stop());
      }
    }
    let de = (a, b) =>
        "zIndex" !== b &&
        !!(
          "number" == typeof a ||
          Array.isArray(a) ||
          ("string" == typeof a &&
            (aL.test(a) || "0" === a) &&
            !a.startsWith("url("))
        ),
      df = new Set(["opacity", "clipPath", "filter", "transform"]),
      dg = c4(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class dh extends c1 {
      constructor({
        autoplay: a = !0,
        delay: b = 0,
        type: c = "keyframes",
        repeat: d = 0,
        repeatDelay: e = 0,
        repeatType: f = "loop",
        keyframes: g,
        name: h,
        motionValue: i,
        element: j,
        ...k
      }) {
        (super(),
          (this.stop = () => {
            (this._animation && (this._animation.stop(), this.stopTimeline?.()),
              this.keyframeResolver?.cancel());
          }),
          (this.createdAt = aZ.now()));
        const l = {
            autoplay: a,
            delay: b,
            type: c,
            repeat: d,
            repeatDelay: e,
            repeatType: f,
            name: h,
            motionValue: i,
            element: j,
            ...k,
          },
          m = j?.KeyframeResolver || as;
        ((this.keyframeResolver = new m(
          g,
          (a, b, c) => this.onKeyframesResolved(a, b, l, !c),
          h,
          i,
          j,
        )),
          this.keyframeResolver?.scheduleResolve());
      }
      onKeyframesResolved(a, b, c, d) {
        this.keyframeResolver = void 0;
        let {
          name: e,
          type: f,
          velocity: g,
          delay: h,
          isHandoff: i,
          onUpdate: j,
        } = c;
        ((this.resolvedAt = aZ.now()),
          !(function (a, b, c, d) {
            let e = a[0];
            if (null === e) return !1;
            if ("display" === b || "visibility" === b) return !0;
            let f = a[a.length - 1],
              g = de(e, b),
              h = de(f, b);
            return (
              Z(
                g === h,
                `You are trying to animate ${b} from "${e}" to "${f}". "${g ? f : e}" is not an animatable value.`,
                "value-not-animatable",
              ),
              !!g &&
                !!h &&
                ((function (a) {
                  let b = a[0];
                  if (1 === a.length) return !0;
                  for (let c = 0; c < a.length; c++) if (a[c] !== b) return !0;
                })(a) ||
                  (("spring" === c || da(c)) && d))
            );
          })(a, e, f, g) &&
            ((af.instantAnimations || !h) && j?.(c$(a, c, b)),
            (a[0] = a[a.length - 1]),
            ca(c),
            (c.repeat = 0)));
        let k = {
            startTime: d
              ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                ? this.resolvedAt
                : this.createdAt
              : void 0,
            finalKeyframe: b,
            ...c,
            keyframes: a,
          },
          l =
            !i &&
            (function (a) {
              let {
                motionValue: b,
                name: c,
                repeatDelay: d,
                repeatType: e,
                damping: f,
                type: g,
              } = a;
              if (!(b?.owner?.current instanceof HTMLElement)) return !1;
              let { onUpdate: h, transformTemplate: i } = b.owner.getProps();
              return (
                dg() &&
                c &&
                df.has(c) &&
                ("transform" !== c || !i) &&
                !h &&
                !d &&
                "mirror" !== e &&
                0 !== f &&
                "inertia" !== g
              );
            })(k)
              ? new dd({ ...k, element: k.motionValue.owner.current })
              : new c3(k);
        (l.finished.then(() => this.notifyFinished()).catch(ae),
          this.pendingTimeline &&
            ((this.stopTimeline = l.attachTimeline(this.pendingTimeline)),
            (this.pendingTimeline = void 0)),
          (this._animation = l));
      }
      get finished() {
        return this._animation ? this.animation.finished : this._finished;
      }
      then(a, b) {
        return this.finished.finally(a).then(() => {});
      }
      get animation() {
        return (
          this._animation ||
            (this.keyframeResolver?.resume(), (ap = !0), ar(), aq(), (ap = !1)),
          this._animation
        );
      }
      get duration() {
        return this.animation.duration;
      }
      get iterationDuration() {
        return this.animation.iterationDuration;
      }
      get time() {
        return this.animation.time;
      }
      set time(a) {
        this.animation.time = a;
      }
      get speed() {
        return this.animation.speed;
      }
      get state() {
        return this.animation.state;
      }
      set speed(a) {
        this.animation.speed = a;
      }
      get startTime() {
        return this.animation.startTime;
      }
      attachTimeline(a) {
        return (
          this._animation
            ? (this.stopTimeline = this.animation.attachTimeline(a))
            : (this.pendingTimeline = a),
          () => this.stop()
        );
      }
      play() {
        this.animation.play();
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.complete();
      }
      cancel() {
        (this._animation && this.animation.cancel(),
          this.keyframeResolver?.cancel());
      }
    }
    let di = (a) => null !== a,
      dj = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      dk = { type: "keyframes", duration: 0.8 },
      dl = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      dm =
        (a, b, c, d = {}, e, f) =>
        (g) => {
          let i = b6(d, a) || {},
            j = i.delay || d.delay || 0,
            { elapsed: k = 0 } = d;
          k -= cd(j);
          let l = {
            keyframes: Array.isArray(c) ? c : [null, c],
            ease: "easeOut",
            velocity: b.getVelocity(),
            ...i,
            delay: -k,
            onUpdate: (a) => {
              (b.set(a), i.onUpdate && i.onUpdate(a));
            },
            onComplete: () => {
              (g(), i.onComplete && i.onComplete());
            },
            name: a,
            motionValue: b,
            element: f ? void 0 : e,
          };
          (!(function ({
            when: a,
            delay: b,
            delayChildren: c,
            staggerChildren: d,
            staggerDirection: e,
            repeat: f,
            repeatType: g,
            repeatDelay: h,
            from: i,
            elapsed: j,
            ...k
          }) {
            return !!Object.keys(k).length;
          })(i) &&
            Object.assign(
              l,
              ((a, { keyframes: b }) =>
                b.length > 2
                  ? dk
                  : h.has(a)
                    ? a.startsWith("scale")
                      ? {
                          type: "spring",
                          stiffness: 550,
                          damping: 0 === b[1] ? 2 * Math.sqrt(550) : 30,
                          restSpeed: 10,
                        }
                      : dj
                    : dl)(a, l),
            ),
            l.duration && (l.duration = cd(l.duration)),
            l.repeatDelay && (l.repeatDelay = cd(l.repeatDelay)),
            void 0 !== l.from && (l.keyframes[0] = l.from));
          let m = !1;
          if (
            ((!1 !== l.type && (0 !== l.duration || l.repeatDelay)) ||
              (ca(l), 0 === l.delay && (m = !0)),
            (af.instantAnimations || af.skipAnimations) &&
              ((m = !0), ca(l), (l.delay = 0)),
            (l.allowFlatten = !i.type && !i.ease),
            m && !f && void 0 !== b.get())
          ) {
            let a = (function (a, { repeat: b, repeatType: c = "loop" }, d) {
              let e = a.filter(di),
                f = b && "loop" !== c && b % 2 == 1 ? 0 : e.length - 1;
              return e[f];
            })(l.keyframes, i);
            if (void 0 !== a)
              return void ai.update(() => {
                (l.onUpdate(a), l.onComplete());
              });
          }
          return i.isSync ? new c3(l) : new dh(l);
        };
    function dn(a, b, { delay: c = 0, transitionOverride: d, type: e } = {}) {
      let {
        transition: f = a.getDefaultTransition(),
        transitionEnd: g,
        ...h
      } = b;
      d && (f = d);
      let i = [],
        j = e && a.animationState && a.animationState.getState()[e];
      for (let b in h) {
        let d = a.getValue(b, a.latestValues[b] ?? null),
          e = h[b];
        if (
          void 0 === e ||
          (j &&
            (function ({ protectedKeys: a, needsAnimating: b }, c) {
              let d = a.hasOwnProperty(c) && !0 !== b[c];
              return ((b[c] = !1), d);
            })(j, b))
        )
          continue;
        let g = { delay: c, ...b6(f || {}, b) },
          k = d.get();
        if (
          void 0 !== k &&
          !d.isAnimating &&
          !Array.isArray(e) &&
          e === k &&
          !g.velocity
        )
          continue;
        let l = !1;
        if (window.MotionHandoffAnimation) {
          let c = a.props[b1];
          if (c) {
            let a = window.MotionHandoffAnimation(c, b, ai);
            null !== a && ((g.startTime = a), (l = !0));
          }
        }
        (b9(a, b),
          d.start(
            dm(
              b,
              d,
              e,
              a.shouldReduceMotion && K.has(b) ? { type: !1 } : g,
              a,
              l,
            ),
          ));
        let m = d.animation;
        m && i.push(m);
      }
      return (
        g &&
          Promise.all(i).then(() => {
            ai.update(() => {
              g && b8(a, g);
            });
          }),
        i
      );
    }
    function dp(a, b, c, d = 0, e = 1) {
      let f = Array.from(a)
          .sort((a, b) => a.sortNodePosition(b))
          .indexOf(b),
        g = a.size,
        h = (g - 1) * d;
      return "function" == typeof c ? c(f, g) : 1 === e ? f * d : h - f * d;
    }
    function dq(a, b, c = {}) {
      let d = b5(a, b, "exit" === c.type ? a.presenceContext?.custom : void 0),
        { transition: e = a.getDefaultTransition() || {} } = d || {};
      c.transitionOverride && (e = c.transitionOverride);
      let f = d ? () => Promise.all(dn(a, d, c)) : () => Promise.resolve(),
        g =
          a.variantChildren && a.variantChildren.size
            ? (d = 0) => {
                let {
                  delayChildren: f = 0,
                  staggerChildren: g,
                  staggerDirection: h,
                } = e;
                return (function (a, b, c = 0, d = 0, e = 0, f = 1, g) {
                  let h = [];
                  for (let i of a.variantChildren)
                    (i.notify("AnimationStart", b),
                      h.push(
                        dq(i, b, {
                          ...g,
                          delay:
                            c +
                            ("function" == typeof d ? 0 : d) +
                            dp(a.variantChildren, i, d, e, f),
                        }).then(() => i.notify("AnimationComplete", b)),
                      ));
                  return Promise.all(h);
                })(a, b, d, f, g, h, c);
              }
            : () => Promise.resolve(),
        { when: h } = e;
      if (!h) return Promise.all([f(), g(c.delay)]);
      {
        let [a, b] = "beforeChildren" === h ? [f, g] : [g, f];
        return a().then(() => b());
      }
    }
    function dr(a, b, c = {}) {
      let d;
      if ((a.notify("AnimationStart", b), Array.isArray(b)))
        d = Promise.all(b.map((b) => dq(a, b, c)));
      else if ("string" == typeof b) d = dq(a, b, c);
      else {
        let e = "function" == typeof b ? b5(a, b, c.custom) : b;
        d = Promise.all(dn(a, e, c));
      }
      return d.then(() => {
        a.notify("AnimationComplete", b);
      });
    }
    function ds(a, b) {
      if (!Array.isArray(b)) return !1;
      let c = b.length;
      if (c !== a.length) return !1;
      for (let d = 0; d < c; d++) if (b[d] !== a[d]) return !1;
      return !0;
    }
    a.s(["animateVisualElement", () => dr], 81211);
    let dt = bh.length,
      du = [...bg].reverse(),
      dv = bg.length;
    function dw(a = !1) {
      return {
        isActive: a,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
      };
    }
    function dx() {
      return {
        animate: dw(!0),
        whileInView: dw(),
        whileHover: dw(),
        whileTap: dw(),
        whileDrag: dw(),
        whileFocus: dw(),
        exit: dw(),
      };
    }
    class dy {
      constructor(a) {
        ((this.isMounted = !1), (this.node = a));
      }
      update() {}
    }
    let dz = 0,
      dA = { x: !1, y: !1 };
    function dB(a, b, c, d = { passive: !0 }) {
      return (a.addEventListener(b, c, d), () => a.removeEventListener(b, c));
    }
    let dC = (a) =>
      "mouse" === a.pointerType
        ? "number" != typeof a.button || a.button <= 0
        : !1 !== a.isPrimary;
    function dD(a) {
      return { point: { x: a.pageX, y: a.pageY } };
    }
    function dE(a, b, c, d) {
      return dB(a, b, (a) => dC(a) && c(a, dD(a)), d);
    }
    function dF(a) {
      return a.max - a.min;
    }
    function dG(a, b, c, d = 0.5) {
      ((a.origin = d),
        (a.originPoint = y(b.min, b.max, a.origin)),
        (a.scale = dF(c) / dF(b)),
        (a.translate = y(c.min, c.max, a.origin) - a.originPoint),
        ((a.scale >= 0.9999 && a.scale <= 1.0001) || isNaN(a.scale)) &&
          (a.scale = 1),
        ((a.translate >= -0.01 && a.translate <= 0.01) || isNaN(a.translate)) &&
          (a.translate = 0));
    }
    function dH(a, b, c, d) {
      (dG(a.x, b.x, c.x, d ? d.originX : void 0),
        dG(a.y, b.y, c.y, d ? d.originY : void 0));
    }
    function dI(a, b, c) {
      ((a.min = c.min + b.min), (a.max = a.min + dF(b)));
    }
    function dJ(a, b, c) {
      ((a.min = b.min - c.min), (a.max = a.min + dF(b)));
    }
    function dK(a, b, c) {
      (dJ(a.x, b.x, c.x), dJ(a.y, b.y, c.y));
    }
    function dL(a) {
      return [a("x"), a("y")];
    }
    let dM = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
      dN = (a, b) => Math.abs(a - b);
    class dO {
      constructor(
        a,
        b,
        {
          transformPagePoint: c,
          contextWindow: d = window,
          dragSnapToOrigin: e = !1,
          distanceThreshold: f = 3,
        } = {},
      ) {
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.handlers = {}),
          (this.contextWindow = window),
          (this.updatePoint = () => {
            var a, b;
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            let c = dR(this.lastMoveEventInfo, this.history),
              d = null !== this.startEvent,
              e =
                ((a = c.offset),
                (b = { x: 0, y: 0 }),
                Math.sqrt(dN(a.x, b.x) ** 2 + dN(a.y, b.y) ** 2) >=
                  this.distanceThreshold);
            if (!d && !e) return;
            let { point: f } = c,
              { timestamp: g } = ak;
            this.history.push({ ...f, timestamp: g });
            let { onStart: h, onMove: i } = this.handlers;
            (d ||
              (h && h(this.lastMoveEvent, c),
              (this.startEvent = this.lastMoveEvent)),
              i && i(this.lastMoveEvent, c));
          }),
          (this.handlePointerMove = (a, b) => {
            ((this.lastMoveEvent = a),
              (this.lastMoveEventInfo = dP(b, this.transformPagePoint)),
              ai.update(this.updatePoint, !0));
          }),
          (this.handlePointerUp = (a, b) => {
            this.end();
            let {
              onEnd: c,
              onSessionEnd: d,
              resumeAnimation: e,
            } = this.handlers;
            if (
              (this.dragSnapToOrigin && e && e(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
            )
              return;
            let f = dR(
              "pointercancel" === a.type
                ? this.lastMoveEventInfo
                : dP(b, this.transformPagePoint),
              this.history,
            );
            (this.startEvent && c && c(a, f), d && d(a, f));
          }),
          !dC(a))
        )
          return;
        ((this.dragSnapToOrigin = e),
          (this.handlers = b),
          (this.transformPagePoint = c),
          (this.distanceThreshold = f),
          (this.contextWindow = d || window));
        const g = dP(dD(a), this.transformPagePoint),
          { point: h } = g,
          { timestamp: i } = ak;
        this.history = [{ ...h, timestamp: i }];
        const { onSessionStart: j } = b;
        (j && j(a, dR(g, this.history)),
          (this.removeListeners = cc(
            dE(this.contextWindow, "pointermove", this.handlePointerMove),
            dE(this.contextWindow, "pointerup", this.handlePointerUp),
            dE(this.contextWindow, "pointercancel", this.handlePointerUp),
          )));
      }
      updateHandlers(a) {
        this.handlers = a;
      }
      end() {
        (this.removeListeners && this.removeListeners(), aj(this.updatePoint));
      }
    }
    function dP(a, b) {
      return b ? { point: b(a.point) } : a;
    }
    function dQ(a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }
    function dR({ point: a }, b) {
      return {
        point: a,
        delta: dQ(a, dS(b)),
        offset: dQ(a, b[0]),
        velocity: (function (a, b) {
          if (a.length < 2) return { x: 0, y: 0 };
          let c = a.length - 1,
            d = null,
            e = dS(a);
          for (
            ;
            c >= 0 && ((d = a[c]), !(e.timestamp - d.timestamp > cd(0.1)));
          )
            c--;
          if (!d) return { x: 0, y: 0 };
          let f = (e.timestamp - d.timestamp) / 1e3;
          if (0 === f) return { x: 0, y: 0 };
          let g = { x: (e.x - d.x) / f, y: (e.y - d.y) / f };
          return (g.x === 1 / 0 && (g.x = 0), g.y === 1 / 0 && (g.y = 0), g);
        })(b, 0.1),
      };
    }
    function dS(a) {
      return a[a.length - 1];
    }
    function dT(a, b, c) {
      return {
        min: void 0 !== b ? a.min + b : void 0,
        max: void 0 !== c ? a.max + c - (a.max - a.min) : void 0,
      };
    }
    function dU(a, b) {
      let c = b.min - a.min,
        d = b.max - a.max;
      return (
        b.max - b.min < a.max - a.min && ([c, d] = [d, c]),
        { min: c, max: d }
      );
    }
    function dV(a, b, c) {
      return { min: dW(a, b), max: dW(a, c) };
    }
    function dW(a, b) {
      return "number" == typeof a ? a : a[b] || 0;
    }
    let dX = new WeakMap();
    class dY {
      constructor(a) {
        ((this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = ba()),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null),
          (this.visualElement = a));
      }
      start(a, { snapToCursor: b = !1, distanceThreshold: c } = {}) {
        let { presenceContext: d } = this.visualElement;
        if (d && !1 === d.isPresent) return;
        let e = (a) => {
            let { dragSnapToOrigin: c } = this.getProps();
            (c ? this.pauseAnimation() : this.stopAnimation(),
              b && this.snapToCursor(dD(a).point));
          },
          f = (a, b) => {
            let {
              drag: c,
              dragPropagation: d,
              onDragStart: e,
            } = this.getProps();
            if (
              c &&
              !d &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = (function (a) {
                if ("x" === a || "y" === a)
                  if (dA[a]) return null;
                  else
                    return (
                      (dA[a] = !0),
                      () => {
                        dA[a] = !1;
                      }
                    );
                return dA.x || dA.y
                  ? null
                  : ((dA.x = dA.y = !0),
                    () => {
                      dA.x = dA.y = !1;
                    });
              })(c)),
              !this.openDragLock)
            )
              return;
            ((this.latestPointerEvent = a),
              (this.latestPanInfo = b),
              (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              dL((a) => {
                let b = this.getAxisMotionValue(a).get() || 0;
                if (R.test(b)) {
                  let { projection: c } = this.visualElement;
                  if (c && c.layout) {
                    let d = c.layout.layoutBox[a];
                    d && (b = dF(d) * (parseFloat(b) / 100));
                  }
                }
                this.originPoint[a] = b;
              }),
              e && ai.postRender(() => e(a, b)),
              b9(this.visualElement, "transform"));
            let { animationState: f } = this.visualElement;
            f && f.setActive("whileDrag", !0);
          },
          g = (a, b) => {
            ((this.latestPointerEvent = a), (this.latestPanInfo = b));
            let {
              dragPropagation: c,
              dragDirectionLock: d,
              onDirectionLock: e,
              onDrag: f,
            } = this.getProps();
            if (!c && !this.openDragLock) return;
            let { offset: g } = b;
            if (d && null === this.currentDirection) {
              ((this.currentDirection = (function (a, b = 10) {
                let c = null;
                return (
                  Math.abs(a.y) > b
                    ? (c = "y")
                    : Math.abs(a.x) > b && (c = "x"),
                  c
                );
              })(g)),
                null !== this.currentDirection &&
                  e &&
                  e(this.currentDirection));
              return;
            }
            (this.updateAxis("x", b.point, g),
              this.updateAxis("y", b.point, g),
              this.visualElement.render(),
              f && f(a, b));
          },
          h = (a, b) => {
            ((this.latestPointerEvent = a),
              (this.latestPanInfo = b),
              this.stop(a, b),
              (this.latestPointerEvent = null),
              (this.latestPanInfo = null));
          },
          i = () =>
            dL(
              (a) =>
                "paused" === this.getAnimationState(a) &&
                this.getAxisMotionValue(a).animation?.play(),
            ),
          { dragSnapToOrigin: j } = this.getProps();
        this.panSession = new dO(
          a,
          {
            onSessionStart: e,
            onStart: f,
            onMove: g,
            onSessionEnd: h,
            resumeAnimation: i,
          },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: j,
            distanceThreshold: c,
            contextWindow: dM(this.visualElement),
          },
        );
      }
      stop(a, b) {
        let c = a || this.latestPointerEvent,
          d = b || this.latestPanInfo,
          e = this.isDragging;
        if ((this.cancel(), !e || !d || !c)) return;
        let { velocity: f } = d;
        this.startAnimation(f);
        let { onDragEnd: g } = this.getProps();
        g && ai.postRender(() => g(c, d));
      }
      cancel() {
        this.isDragging = !1;
        let { projection: a, animationState: b } = this.visualElement;
        (a && (a.isAnimationBlocked = !1),
          this.panSession && this.panSession.end(),
          (this.panSession = void 0));
        let { dragPropagation: c } = this.getProps();
        (!c &&
          this.openDragLock &&
          (this.openDragLock(), (this.openDragLock = null)),
          b && b.setActive("whileDrag", !1));
      }
      updateAxis(a, b, c) {
        let { drag: d } = this.getProps();
        if (!c || !dZ(a, d, this.currentDirection)) return;
        let e = this.getAxisMotionValue(a),
          f = this.originPoint[a] + c[a];
        (this.constraints &&
          this.constraints[a] &&
          (f = (function (a, { min: b, max: c }, d) {
            return (
              void 0 !== b && a < b
                ? (a = d ? y(b, a, d.min) : Math.max(a, b))
                : void 0 !== c &&
                  a > c &&
                  (a = d ? y(c, a, d.max) : Math.min(a, c)),
              a
            );
          })(f, this.constraints[a], this.elastic[a])),
          e.set(f));
      }
      resolveConstraints() {
        let { dragConstraints: a, dragElastic: b } = this.getProps(),
          c =
            this.visualElement.projection &&
            !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : this.visualElement.projection?.layout,
          d = this.constraints;
        (a && b0(a)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : a && c
            ? (this.constraints = (function (
                a,
                { top: b, left: c, bottom: d, right: e },
              ) {
                return { x: dT(a.x, c, e), y: dT(a.y, b, d) };
              })(c.layoutBox, a))
            : (this.constraints = !1),
          (this.elastic = (function (a = 0.35) {
            return (
              !1 === a ? (a = 0) : !0 === a && (a = 0.35),
              { x: dV(a, "left", "right"), y: dV(a, "top", "bottom") }
            );
          })(b)),
          d !== this.constraints &&
            c &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            dL((a) => {
              var b, d;
              let e;
              !1 !== this.constraints &&
                this.getAxisMotionValue(a) &&
                (this.constraints[a] =
                  ((b = c.layoutBox[a]),
                  (d = this.constraints[a]),
                  (e = {}),
                  void 0 !== d.min && (e.min = d.min - b.min),
                  void 0 !== d.max && (e.max = d.max - b.min),
                  e));
            }));
      }
      resolveRefConstraints() {
        var a;
        let { dragConstraints: b, onMeasureDragConstraints: c } =
          this.getProps();
        if (!b || !b0(b)) return !1;
        let d = b.current;
        $(
          null !== d,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          "drag-constraints-ref",
        );
        let { projection: e } = this.visualElement;
        if (!e || !e.layout) return !1;
        let f = (function (a, b, c) {
            let d = J(a, c),
              { scroll: e } = b;
            return (e && (G(d.x, e.offset.x), G(d.y, e.offset.y)), d);
          })(d, e.root, this.visualElement.getTransformPagePoint()),
          g = ((a = e.layout.layoutBox), { x: dU(a.x, f.x), y: dU(a.y, f.y) });
        if (c) {
          let a = c(
            (function ({ x: a, y: b }) {
              return { top: b.min, right: a.max, bottom: b.max, left: a.min };
            })(g),
          );
          ((this.hasMutatedConstraints = !!a), a && (g = x(a)));
        }
        return g;
      }
      startAnimation(a) {
        let {
            drag: b,
            dragMomentum: c,
            dragElastic: d,
            dragTransition: e,
            dragSnapToOrigin: f,
            onDragTransitionEnd: g,
          } = this.getProps(),
          h = this.constraints || {};
        return Promise.all(
          dL((g) => {
            if (!dZ(g, b, this.currentDirection)) return;
            let i = (h && h[g]) || {};
            f && (i = { min: 0, max: 0 });
            let j = {
              type: "inertia",
              velocity: c ? a[g] : 0,
              bounceStiffness: d ? 200 : 1e6,
              bounceDamping: d ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...e,
              ...i,
            };
            return this.startAxisValueAnimation(g, j);
          }),
        ).then(g);
      }
      startAxisValueAnimation(a, b) {
        let c = this.getAxisMotionValue(a);
        return (
          b9(this.visualElement, a),
          c.start(dm(a, c, 0, b, this.visualElement, !1))
        );
      }
      stopAnimation() {
        dL((a) => this.getAxisMotionValue(a).stop());
      }
      pauseAnimation() {
        dL((a) => this.getAxisMotionValue(a).animation?.pause());
      }
      getAnimationState(a) {
        return this.getAxisMotionValue(a).animation?.state;
      }
      getAxisMotionValue(a) {
        let b = `_drag${a.toUpperCase()}`,
          c = this.visualElement.getProps();
        return (
          c[b] ||
          this.visualElement.getValue(
            a,
            (c.initial ? c.initial[a] : void 0) || 0,
          )
        );
      }
      snapToCursor(a) {
        dL((b) => {
          let { drag: c } = this.getProps();
          if (!dZ(b, c, this.currentDirection)) return;
          let { projection: d } = this.visualElement,
            e = this.getAxisMotionValue(b);
          if (d && d.layout) {
            let { min: c, max: f } = d.layout.layoutBox[b];
            e.set(a[b] - y(c, f, 0.5));
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let { drag: a, dragConstraints: b } = this.getProps(),
          { projection: c } = this.visualElement;
        if (!b0(b) || !c || !this.constraints) return;
        this.stopAnimation();
        let d = { x: 0, y: 0 };
        dL((a) => {
          let b = this.getAxisMotionValue(a);
          if (b && !1 !== this.constraints) {
            var c, e;
            let f,
              g,
              h,
              i = b.get();
            d[a] =
              ((c = { min: i, max: i }),
              (e = this.constraints[a]),
              (f = 0.5),
              (g = dF(c)),
              (h = dF(e)) > g
                ? (f = cX(e.min, e.max - g, c.min))
                : g > h && (f = cX(c.min, c.max - h, e.min)),
              L(0, 1, f));
          }
        });
        let { transformTemplate: e } = this.visualElement.getProps();
        ((this.visualElement.current.style.transform = e ? e({}, "") : "none"),
          c.root && c.root.updateScroll(),
          c.updateLayout(),
          this.resolveConstraints(),
          dL((b) => {
            if (!dZ(b, a, null)) return;
            let c = this.getAxisMotionValue(b),
              { min: e, max: f } = this.constraints[b];
            c.set(y(e, f, d[b]));
          }));
      }
      addListeners() {
        if (!this.visualElement.current) return;
        dX.set(this.visualElement, this);
        let a = dE(this.visualElement.current, "pointerdown", (a) => {
            let { drag: b, dragListener: c = !0 } = this.getProps();
            b && c && this.start(a);
          }),
          b = () => {
            let { dragConstraints: a } = this.getProps();
            b0(a) &&
              a.current &&
              (this.constraints = this.resolveRefConstraints());
          },
          { projection: c } = this.visualElement,
          d = c.addEventListener("measure", b);
        (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
          ai.read(b));
        let e = dB(window, "resize", () =>
            this.scalePositionWithinConstraints(),
          ),
          f = c.addEventListener(
            "didUpdate",
            ({ delta: a, hasLayoutChanged: b }) => {
              this.isDragging &&
                b &&
                (dL((b) => {
                  let c = this.getAxisMotionValue(b);
                  c &&
                    ((this.originPoint[b] += a[b].translate),
                    c.set(c.get() + a[b].translate));
                }),
                this.visualElement.render());
            },
          );
        return () => {
          (e(), a(), d(), f && f());
        };
      }
      getProps() {
        let a = this.visualElement.getProps(),
          {
            drag: b = !1,
            dragDirectionLock: c = !1,
            dragPropagation: d = !1,
            dragConstraints: e = !1,
            dragElastic: f = 0.35,
            dragMomentum: g = !0,
          } = a;
        return {
          ...a,
          drag: b,
          dragDirectionLock: c,
          dragPropagation: d,
          dragConstraints: e,
          dragElastic: f,
          dragMomentum: g,
        };
      }
    }
    function dZ(a, b, c) {
      return (!0 === b || b === a) && (null === c || c === a);
    }
    let d$ = (a) => (b, c) => {
      a && ai.postRender(() => a(b, c));
    };
    var d_ = f;
    function d0(a = !0) {
      let b = (0, f.useContext)(bV);
      if (null === b) return [!0, null];
      let { isPresent: c, onExitComplete: d, register: e } = b,
        g = (0, f.useId)();
      (0, f.useEffect)(() => {
        if (a) return e(g);
      }, [a]);
      let h = (0, f.useCallback)(() => a && d && d(g), [g, d, a]);
      return !c && d ? [!1, h] : [!0];
    }
    a.s(["usePresence", () => d0], 15454);
    let d1 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
      d2 = !1;
    class d3 extends d_.Component {
      componentDidMount() {
        let {
            visualElement: a,
            layoutGroup: b,
            switchLayoutGroup: c,
            layoutId: d,
          } = this.props,
          { projection: e } = a;
        (e &&
          (b.group && b.group.add(e),
          c && c.register && d && c.register(e),
          d2 && e.root.didUpdate(),
          e.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          e.setOptions({
            ...e.options,
            onExitComplete: () => this.safeToRemove(),
          })),
          (d1.hasEverUpdated = !0));
      }
      getSnapshotBeforeUpdate(a) {
        let {
            layoutDependency: b,
            visualElement: c,
            drag: d,
            isPresent: e,
          } = this.props,
          { projection: f } = c;
        return (
          f &&
            ((f.isPresent = e),
            (d2 = !0),
            d || a.layoutDependency !== b || void 0 === b || a.isPresent !== e
              ? f.willUpdate()
              : this.safeToRemove(),
            a.isPresent !== e &&
              (e
                ? f.promote()
                : f.relegate() ||
                  ai.postRender(() => {
                    let a = f.getStack();
                    (a && a.members.length) || this.safeToRemove();
                  }))),
          null
        );
      }
      componentDidUpdate() {
        let { projection: a } = this.props.visualElement;
        a &&
          (a.root.didUpdate(),
          a4.postRender(() => {
            !a.currentAnimation && a.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        let {
            visualElement: a,
            layoutGroup: b,
            switchLayoutGroup: c,
          } = this.props,
          { projection: d } = a;
        ((d2 = !0),
          d &&
            (d.scheduleCheckAfterUnmount(),
            b && b.group && b.group.remove(d),
            c && c.deregister && c.deregister(d)));
      }
      safeToRemove() {
        let { safeToRemove: a } = this.props;
        a && a();
      }
      render() {
        return null;
      }
    }
    function d4(a) {
      let [b, c] = d0(),
        d = (0, d_.useContext)(bL);
      return (0, bK.jsx)(d3, {
        ...a,
        layoutGroup: d,
        switchLayoutGroup: (0, d_.useContext)(b2),
        isPresent: b,
        safeToRemove: c,
      });
    }
    function d5(a) {
      return "object" == typeof a && null !== a;
    }
    function d6(a) {
      return d5(a) && "ownerSVGElement" in a;
    }
    let d7 = (a, b) => a.depth - b.depth;
    class d8 {
      constructor() {
        ((this.children = []), (this.isDirty = !1));
      }
      add(a) {
        (a$(this.children, a), (this.isDirty = !0));
      }
      remove(a) {
        (a_(this.children, a), (this.isDirty = !0));
      }
      forEach(a) {
        (this.isDirty && this.children.sort(d7),
          (this.isDirty = !1),
          this.children.forEach(a));
      }
    }
    let d9 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
      ea = d9.length,
      eb = (a) => ("string" == typeof a ? parseFloat(a) : a),
      ec = (a) => "number" == typeof a || S.test(a);
    function ed(a, b) {
      return void 0 !== a[b] ? a[b] : a.borderRadius;
    }
    let ee = eg(0, 0.5, cS),
      ef = eg(0.5, 0.95, ae);
    function eg(a, b, c) {
      return (d) => (d < a ? 0 : d > b ? 1 : c(cX(a, b, d)));
    }
    function eh(a, b) {
      ((a.min = b.min), (a.max = b.max));
    }
    function ei(a, b) {
      (eh(a.x, b.x), eh(a.y, b.y));
    }
    function ej(a, b) {
      ((a.translate = b.translate),
        (a.scale = b.scale),
        (a.originPoint = b.originPoint),
        (a.origin = b.origin));
    }
    function ek(a, b, c, d, e) {
      return (
        (a -= b),
        (a = d + (1 / c) * (a - d)),
        void 0 !== e && (a = d + (1 / e) * (a - d)),
        a
      );
    }
    function el(a, b, [c, d, e], f, g) {
      !(function (a, b = 0, c = 1, d = 0.5, e, f = a, g = a) {
        if (
          (R.test(b) &&
            ((b = parseFloat(b)), (b = y(g.min, g.max, b / 100) - g.min)),
          "number" != typeof b)
        )
          return;
        let h = y(f.min, f.max, d);
        (a === f && (h -= b),
          (a.min = ek(a.min, b, c, h, e)),
          (a.max = ek(a.max, b, c, h, e)));
      })(a, b[c], b[d], b[e], b.scale, f, g);
    }
    let em = ["x", "scaleX", "originX"],
      en = ["y", "scaleY", "originY"];
    function eo(a, b, c, d) {
      (el(a.x, b, em, c ? c.x : void 0, d ? d.x : void 0),
        el(a.y, b, en, c ? c.y : void 0, d ? d.y : void 0));
    }
    function ep(a) {
      return 0 === a.translate && 1 === a.scale;
    }
    function eq(a) {
      return ep(a.x) && ep(a.y);
    }
    function er(a, b) {
      return a.min === b.min && a.max === b.max;
    }
    function es(a, b) {
      return (
        Math.round(a.min) === Math.round(b.min) &&
        Math.round(a.max) === Math.round(b.max)
      );
    }
    function et(a, b) {
      return es(a.x, b.x) && es(a.y, b.y);
    }
    function eu(a) {
      return dF(a.x) / dF(a.y);
    }
    function ev(a, b) {
      return (
        a.translate === b.translate &&
        a.scale === b.scale &&
        a.originPoint === b.originPoint
      );
    }
    class ew {
      constructor() {
        this.members = [];
      }
      add(a) {
        (a$(this.members, a), a.scheduleRender());
      }
      remove(a) {
        if (
          (a_(this.members, a),
          a === this.prevLead && (this.prevLead = void 0),
          a === this.lead)
        ) {
          let a = this.members[this.members.length - 1];
          a && this.promote(a);
        }
      }
      relegate(a) {
        let b,
          c = this.members.findIndex((b) => a === b);
        if (0 === c) return !1;
        for (let a = c; a >= 0; a--) {
          let c = this.members[a];
          if (!1 !== c.isPresent) {
            b = c;
            break;
          }
        }
        return !!b && (this.promote(b), !0);
      }
      promote(a, b) {
        let c = this.lead;
        if (a !== c && ((this.prevLead = c), (this.lead = a), a.show(), c)) {
          (c.instance && c.scheduleRender(),
            a.scheduleRender(),
            (a.resumeFrom = c),
            b && (a.resumeFrom.preserveOpacity = !0),
            c.snapshot &&
              ((a.snapshot = c.snapshot),
              (a.snapshot.latestValues = c.animationValues || c.latestValues)),
            a.root && a.root.isUpdating && (a.isLayoutDirty = !0));
          let { crossfade: d } = a.options;
          !1 === d && c.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((a) => {
          let { options: b, resumingFrom: c } = a;
          (b.onExitComplete && b.onExitComplete(),
            c && c.options.onExitComplete && c.options.onExitComplete());
        });
      }
      scheduleRender() {
        this.members.forEach((a) => {
          a.instance && a.scheduleRender(!1);
        });
      }
      removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
      }
    }
    let ex = ["", "X", "Y", "Z"],
      ey = 0;
    function ez(a, b, c, d) {
      let { latestValues: e } = b;
      e[a] && ((c[a] = e[a]), b.setStaticValue(a, 0), d && (d[a] = 0));
    }
    function eA({
      attachResizeListener: a,
      defaultParent: b,
      measureScroll: c,
      checkIsScrollRoot: d,
      resetTransform: e,
    }) {
      return class {
        constructor(a = {}, c = b?.()) {
          ((this.id = ey++),
            (this.animationId = 0),
            (this.animationCommitId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.hasCheckedOptimisedAppear = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.layoutVersion = 0),
            (this.updateScheduled = !1),
            (this.scheduleUpdate = () => this.update()),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating &&
                ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              ((this.projectionUpdateScheduled = !1),
                this.nodes.forEach(eD),
                this.nodes.forEach(eK),
                this.nodes.forEach(eL),
                this.nodes.forEach(eE));
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.linkedParentVersion = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = a),
            (this.root = c ? c.root || c : this),
            (this.path = c ? [...c.path, c] : []),
            (this.parent = c),
            (this.depth = c ? c.depth + 1 : 0));
          for (let a = 0; a < this.path.length; a++)
            this.path[a].shouldResetTransform = !0;
          this.root === this && (this.nodes = new d8());
        }
        addEventListener(a, b) {
          return (
            this.eventHandlers.has(a) || this.eventHandlers.set(a, new a0()),
            this.eventHandlers.get(a).add(b)
          );
        }
        notifyListeners(a, ...b) {
          let c = this.eventHandlers.get(a);
          c && c.notify(...b);
        }
        hasListeners(a) {
          return this.eventHandlers.has(a);
        }
        mount(b) {
          if (this.instance) return;
          ((this.isSVG = d6(b) && !(d6(b) && "svg" === b.tagName)),
            (this.instance = b));
          let { layoutId: c, layout: d, visualElement: e } = this.options;
          if (
            (e && !e.current && e.mount(b),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (d || c) && (this.isLayoutDirty = !0),
            a)
          ) {
            let c,
              d = 0,
              e = () => (this.root.updateBlockedByResize = !1);
            (ai.read(() => {
              d = window.innerWidth;
            }),
              a(b, () => {
                let a = window.innerWidth;
                if (a !== d) {
                  let b, f;
                  ((d = a),
                    (this.root.updateBlockedByResize = !0),
                    c && c(),
                    (b = aZ.now()),
                    (f = ({ timestamp: a }) => {
                      let c = a - b;
                      c >= 250 && (aj(f), e(c - 250));
                    }),
                    ai.setup(f, !0),
                    (c = () => aj(f)),
                    d1.hasAnimatedSinceResize &&
                      ((d1.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(eJ)));
                }
              }));
          }
          (c && this.root.registerSharedNode(c, this),
            !1 !== this.options.animate &&
              e &&
              (c || d) &&
              this.addEventListener(
                "didUpdate",
                ({
                  delta: a,
                  hasLayoutChanged: b,
                  hasRelativeLayoutChanged: c,
                  layout: d,
                }) => {
                  if (this.isTreeAnimationBlocked()) {
                    ((this.target = void 0), (this.relativeTarget = void 0));
                    return;
                  }
                  let f =
                      this.options.transition || e.getDefaultTransition() || eR,
                    {
                      onLayoutAnimationStart: g,
                      onLayoutAnimationComplete: h,
                    } = e.getProps(),
                    i = !this.targetLayout || !et(this.targetLayout, d),
                    j = !b && c;
                  if (
                    this.options.layoutRoot ||
                    this.resumeFrom ||
                    j ||
                    (b && (i || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0));
                    let b = { ...b6(f, "layout"), onPlay: g, onComplete: h };
                    ((e.shouldReduceMotion || this.options.layoutRoot) &&
                      ((b.delay = 0), (b.type = !1)),
                      this.startAnimation(b),
                      this.setAnimationOrigin(a, j));
                  } else
                    (b || eJ(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete());
                  this.targetLayout = d;
                },
              ));
        }
        unmount() {
          (this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this));
          let a = this.getStack();
          (a && a.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            this.eventHandlers.clear(),
            aj(this.updateProjection));
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return (
            this.isAnimationBlocked ||
            (this.parent && this.parent.isTreeAnimationBlocked()) ||
            !1
          );
        }
        startUpdate() {
          !this.isUpdateBlocked() &&
            ((this.isUpdating = !0),
            this.nodes && this.nodes.forEach(eM),
            this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: a } = this.options;
          return a && a.getProps().transformTemplate;
        }
        willUpdate(a = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              (function a(b) {
                if (((b.hasCheckedOptimisedAppear = !0), b.root === b)) return;
                let { visualElement: c } = b.options;
                if (!c) return;
                let d = c.props[b1];
                if (window.MotionHasOptimisedAnimation(d, "transform")) {
                  let { layout: a, layoutId: c } = b.options;
                  window.MotionCancelOptimisedAnimation(
                    d,
                    "transform",
                    ai,
                    !(a || c),
                  );
                }
                let { parent: e } = b;
                e && !e.hasCheckedOptimisedAppear && a(e);
              })(this),
            this.root.isUpdating || this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let a = 0; a < this.path.length; a++) {
            let b = this.path[a];
            ((b.shouldResetTransform = !0),
              b.updateScroll("snapshot"),
              b.options.layoutRoot && b.willUpdate(!1));
          }
          let { layoutId: b, layout: c } = this.options;
          if (void 0 === b && !c) return;
          let d = this.getTransformTemplate();
          ((this.prevTransformTemplateValue = d
            ? d(this.latestValues, "")
            : void 0),
            this.updateSnapshot(),
            a && this.notifyListeners("willUpdate"));
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            (this.unblockUpdate(),
              this.clearAllSnapshots(),
              this.nodes.forEach(eG));
            return;
          }
          if (this.animationId <= this.animationCommitId)
            return void this.nodes.forEach(eH);
          ((this.animationCommitId = this.animationId),
            this.isUpdating
              ? ((this.isUpdating = !1),
                this.nodes.forEach(eI),
                this.nodes.forEach(eB),
                this.nodes.forEach(eC))
              : this.nodes.forEach(eH),
            this.clearAllSnapshots());
          let a = aZ.now();
          ((ak.delta = L(0, 1e3 / 60, a - ak.timestamp)),
            (ak.timestamp = a),
            (ak.isProcessing = !0),
            al.update.process(ak),
            al.preRender.process(ak),
            al.render.process(ak),
            (ak.isProcessing = !1));
        }
        didUpdate() {
          this.updateScheduled ||
            ((this.updateScheduled = !0), a4.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          (this.nodes.forEach(eF), this.sharedNodes.forEach(eN));
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0),
            ai.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          ai.postRender(() => {
            this.isLayoutDirty
              ? this.root.didUpdate()
              : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot &&
            this.instance &&
            ((this.snapshot = this.measure()),
            !this.snapshot ||
              dF(this.snapshot.measuredBox.x) ||
              dF(this.snapshot.measuredBox.y) ||
              (this.snapshot = void 0));
        }
        updateLayout() {
          if (
            !this.instance ||
            (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) &&
              !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let a = 0; a < this.path.length; a++)
              this.path[a].updateScroll();
          let a = this.layout;
          ((this.layout = this.measure(!1)),
            this.layoutVersion++,
            (this.layoutCorrected = ba()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox));
          let { visualElement: b } = this.options;
          b &&
            b.notify(
              "LayoutMeasure",
              this.layout.layoutBox,
              a ? a.layoutBox : void 0,
            );
        }
        updateScroll(a = "measure") {
          let b = !!(this.options.layoutScroll && this.instance);
          if (
            (this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === a &&
              (b = !1),
            b && this.instance)
          ) {
            let b = d(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: a,
              isRoot: b,
              offset: c(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : b,
            };
          }
        }
        resetTransform() {
          if (!e) return;
          let a =
              this.isLayoutDirty ||
              this.shouldResetTransform ||
              this.options.alwaysMeasureLayout,
            b = this.projectionDelta && !eq(this.projectionDelta),
            c = this.getTransformTemplate(),
            d = c ? c(this.latestValues, "") : void 0,
            f = d !== this.prevTransformTemplateValue;
          a &&
            this.instance &&
            (b || B(this.latestValues) || f) &&
            (e(this.instance, d),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
        measure(a = !0) {
          var b;
          let c = this.measurePageBox(),
            d = this.removeElementScroll(c);
          return (
            a && (d = this.removeTransform(d)),
            eU((b = d).x),
            eU(b.y),
            {
              animationId: this.root.animationId,
              measuredBox: c,
              layoutBox: d,
              latestValues: {},
              source: this.id,
            }
          );
        }
        measurePageBox() {
          let { visualElement: a } = this.options;
          if (!a) return ba();
          let b = a.measureViewportBox();
          if (!(this.scroll?.wasRoot || this.path.some(eW))) {
            let { scroll: a } = this.root;
            a && (G(b.x, a.offset.x), G(b.y, a.offset.y));
          }
          return b;
        }
        removeElementScroll(a) {
          let b = ba();
          if ((ei(b, a), this.scroll?.wasRoot)) return b;
          for (let c = 0; c < this.path.length; c++) {
            let d = this.path[c],
              { scroll: e, options: f } = d;
            d !== this.root &&
              e &&
              f.layoutScroll &&
              (e.wasRoot && ei(b, a), G(b.x, e.offset.x), G(b.y, e.offset.y));
          }
          return b;
        }
        applyTransform(a, b = !1) {
          let c = ba();
          ei(c, a);
          for (let a = 0; a < this.path.length; a++) {
            let d = this.path[a];
            (!b &&
              d.options.layoutScroll &&
              d.scroll &&
              d !== d.root &&
              I(c, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
              B(d.latestValues) && I(c, d.latestValues));
          }
          return (B(this.latestValues) && I(c, this.latestValues), c);
        }
        removeTransform(a) {
          let b = ba();
          ei(b, a);
          for (let a = 0; a < this.path.length; a++) {
            let c = this.path[a];
            if (!c.instance || !B(c.latestValues)) continue;
            A(c.latestValues) && c.updateSnapshot();
            let d = ba();
            (ei(d, c.measurePageBox()),
              eo(
                b,
                c.latestValues,
                c.snapshot ? c.snapshot.layoutBox : void 0,
                d,
              ));
          }
          return (B(this.latestValues) && eo(b, this.latestValues), b);
        }
        setTargetDelta(a) {
          ((this.targetDelta = a),
            this.root.scheduleUpdateProjection(),
            (this.isProjectionDirty = !0));
        }
        setOptions(a) {
          this.options = {
            ...this.options,
            ...a,
            crossfade: void 0 === a.crossfade || a.crossfade,
          };
        }
        clearMeasurements() {
          ((this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1));
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== ak.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(a = !1) {
          let b = this.getLead();
          (this.isProjectionDirty ||
            (this.isProjectionDirty = b.isProjectionDirty),
            this.isTransformDirty ||
              (this.isTransformDirty = b.isTransformDirty),
            this.isSharedProjectionDirty ||
              (this.isSharedProjectionDirty = b.isSharedProjectionDirty));
          let c = !!this.resumingFrom || this !== b;
          if (
            !(
              a ||
              (c && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              this.parent?.isProjectionDirty ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            )
          )
            return;
          let { layout: d, layoutId: e } = this.options;
          if (!this.layout || !(d || e)) return;
          this.resolvedRelativeTargetAt = ak.timestamp;
          let f = this.getClosestProjectingParent();
          if (
            (f &&
              this.linkedParentVersion !== f.layoutVersion &&
              !f.options.layoutRoot &&
              this.removeRelativeTarget(),
            this.targetDelta ||
              this.relativeTarget ||
              (f && f.layout
                ? this.createRelativeTarget(
                    f,
                    this.layout.layoutBox,
                    f.layout.layoutBox,
                  )
                : this.removeRelativeTarget()),
            this.relativeTarget || this.targetDelta)
          ) {
            if (
              (this.target ||
                ((this.target = ba()), (this.targetWithTransforms = ba())),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target)
            ) {
              var g, h, i;
              (this.forceRelativeParentToResolveTarget(),
                (g = this.target),
                (h = this.relativeTarget),
                (i = this.relativeParent.target),
                dI(g.x, h.x, i.x),
                dI(g.y, h.y, i.y));
            } else
              this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : ei(this.target, this.layout.layoutBox),
                  F(this.target, this.targetDelta))
                : ei(this.target, this.layout.layoutBox);
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              f &&
              !!f.resumingFrom == !!this.resumingFrom &&
              !f.options.layoutScroll &&
              f.target &&
              1 !== this.animationProgress
                ? this.createRelativeTarget(f, this.target, f.target)
                : (this.relativeParent = this.relativeTarget = void 0));
          }
        }
        getClosestProjectingParent() {
          if (
            !(
              !this.parent ||
              A(this.parent.latestValues) ||
              C(this.parent.latestValues)
            )
          )
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!(
            (this.relativeTarget ||
              this.targetDelta ||
              this.options.layoutRoot) &&
            this.layout
          );
        }
        createRelativeTarget(a, b, c) {
          ((this.relativeParent = a),
            (this.linkedParentVersion = a.layoutVersion),
            this.forceRelativeParentToResolveTarget(),
            (this.relativeTarget = ba()),
            (this.relativeTargetOrigin = ba()),
            dK(this.relativeTargetOrigin, b, c),
            ei(this.relativeTarget, this.relativeTargetOrigin));
        }
        removeRelativeTarget() {
          this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
          let a = this.getLead(),
            b = !!this.resumingFrom || this !== a,
            c = !0;
          if (
            ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
              (c = !1),
            b &&
              (this.isSharedProjectionDirty || this.isTransformDirty) &&
              (c = !1),
            this.resolvedRelativeTargetAt === ak.timestamp && (c = !1),
            c)
          )
            return;
          let { layout: d, layoutId: e } = this.options;
          if (
            ((this.isTreeAnimating = !!(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating ||
              (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(d || e))
          )
            return;
          ei(this.layoutCorrected, this.layout.layoutBox);
          let f = this.treeScale.x,
            g = this.treeScale.y;
          (!(function (a, b, c, d = !1) {
            let e,
              f,
              g = c.length;
            if (g) {
              b.x = b.y = 1;
              for (let h = 0; h < g; h++) {
                f = (e = c[h]).projectionDelta;
                let { visualElement: g } = e.options;
                (!g ||
                  !g.props.style ||
                  "contents" !== g.props.style.display) &&
                  (d &&
                    e.options.layoutScroll &&
                    e.scroll &&
                    e !== e.root &&
                    I(a, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }),
                  f && ((b.x *= f.x.scale), (b.y *= f.y.scale), F(a, f)),
                  d && B(e.latestValues) && I(a, e.latestValues));
              }
              (b.x < 1.0000000000001 && b.x > 0.999999999999 && (b.x = 1),
                b.y < 1.0000000000001 && b.y > 0.999999999999 && (b.y = 1));
            }
          })(this.layoutCorrected, this.treeScale, this.path, b),
            a.layout &&
              !a.target &&
              (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
              ((a.target = a.layout.layoutBox),
              (a.targetWithTransforms = ba())));
          let { target: h } = a;
          if (!h) {
            this.prevProjectionDelta &&
              (this.createProjectionDeltas(), this.scheduleRender());
            return;
          }
          (this.projectionDelta && this.prevProjectionDelta
            ? (ej(this.prevProjectionDelta.x, this.projectionDelta.x),
              ej(this.prevProjectionDelta.y, this.projectionDelta.y))
            : this.createProjectionDeltas(),
            dH(
              this.projectionDelta,
              this.layoutCorrected,
              h,
              this.latestValues,
            ),
            (this.treeScale.x === f &&
              this.treeScale.y === g &&
              ev(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              ev(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners("projectionUpdate", h)));
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(a = !0) {
          if ((this.options.visualElement?.scheduleRender(), a)) {
            let a = this.getStack();
            a && a.scheduleRender();
          }
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          ((this.prevProjectionDelta = a8()),
            (this.projectionDelta = a8()),
            (this.projectionDeltaWithTransform = a8()));
        }
        setAnimationOrigin(a, b = !1) {
          let c,
            d = this.snapshot,
            e = d ? d.latestValues : {},
            f = { ...this.latestValues },
            g = a8();
          ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !b));
          let h = ba(),
            i =
              (d ? d.source : void 0) !==
              (this.layout ? this.layout.source : void 0),
            j = this.getStack(),
            k = !j || j.members.length <= 1,
            l = !!(
              i &&
              !k &&
              !0 === this.options.crossfade &&
              !this.path.some(eQ)
            );
          ((this.animationProgress = 0),
            (this.mixTargetDelta = (b) => {
              let d = b / 1e3;
              if (
                (eO(g.x, a.x, d),
                eO(g.y, a.y, d),
                this.setTargetDelta(g),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout)
              ) {
                var j, m, n, o, p, q;
                (dK(
                  h,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                ),
                  (n = this.relativeTarget),
                  (o = this.relativeTargetOrigin),
                  (p = h),
                  (q = d),
                  eP(n.x, o.x, p.x, q),
                  eP(n.y, o.y, p.y, q),
                  c &&
                    ((j = this.relativeTarget),
                    (m = c),
                    er(j.x, m.x) && er(j.y, m.y)) &&
                    (this.isProjectionDirty = !1),
                  c || (c = ba()),
                  ei(c, this.relativeTarget));
              }
              (i &&
                ((this.animationValues = f),
                (function (a, b, c, d, e, f) {
                  e
                    ? ((a.opacity = y(0, c.opacity ?? 1, ee(d))),
                      (a.opacityExit = y(b.opacity ?? 1, 0, ef(d))))
                    : f && (a.opacity = y(b.opacity ?? 1, c.opacity ?? 1, d));
                  for (let e = 0; e < ea; e++) {
                    let f = `border${d9[e]}Radius`,
                      g = ed(b, f),
                      h = ed(c, f);
                    (void 0 !== g || void 0 !== h) &&
                      (g || (g = 0),
                      h || (h = 0),
                      0 === g || 0 === h || ec(g) === ec(h)
                        ? ((a[f] = Math.max(y(eb(g), eb(h), d), 0)),
                          (R.test(h) || R.test(g)) && (a[f] += "%"))
                        : (a[f] = h));
                  }
                  (b.rotate || c.rotate) &&
                    (a.rotate = y(b.rotate || 0, c.rotate || 0, d));
                })(f, e, this.latestValues, d, l, k)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = d));
            }),
            this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
        }
        startAnimation(a) {
          (this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation &&
              (aj(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = ai.update(() => {
              var b, c, d;
              let e;
              ((d1.hasAnimatedSinceResize = !0),
                ce.layout++,
                this.motionValue || (this.motionValue = a2(0)),
                (this.currentAnimation =
                  ((b = this.motionValue),
                  (c = [0, 1e3]),
                  (d = {
                    ...a,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (b) => {
                      (this.mixTargetDelta(b), a.onUpdate && a.onUpdate(b));
                    },
                    onStop: () => {
                      ce.layout--;
                    },
                    onComplete: () => {
                      (ce.layout--,
                        a.onComplete && a.onComplete(),
                        this.completeAnimation());
                    },
                  }),
                  (e = aX(b) ? b : a2(b)).start(dm("", e, c, d)),
                  e.animation)),
                this.resumingFrom &&
                  (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0));
            })));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
            (this.resumingFrom.preserveOpacity = void 0));
          let a = this.getStack();
          (a && a.exitAnimationComplete(),
            (this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                void 0),
            this.notifyListeners("animationComplete"));
        }
        finishAnimation() {
          (this.currentAnimation &&
            (this.mixTargetDelta && this.mixTargetDelta(1e3),
            this.currentAnimation.stop()),
            this.completeAnimation());
        }
        applyTransformsToTarget() {
          let a = this.getLead(),
            {
              targetWithTransforms: b,
              target: c,
              layout: d,
              latestValues: e,
            } = a;
          if (b && c && d) {
            if (
              this !== a &&
              this.layout &&
              d &&
              eV(this.options.animationType, this.layout.layoutBox, d.layoutBox)
            ) {
              c = this.target || ba();
              let b = dF(this.layout.layoutBox.x);
              ((c.x.min = a.target.x.min), (c.x.max = c.x.min + b));
              let d = dF(this.layout.layoutBox.y);
              ((c.y.min = a.target.y.min), (c.y.max = c.y.min + d));
            }
            (ei(b, c),
              I(b, e),
              dH(
                this.projectionDeltaWithTransform,
                this.layoutCorrected,
                b,
                e,
              ));
          }
        }
        registerSharedNode(a, b) {
          (this.sharedNodes.has(a) || this.sharedNodes.set(a, new ew()),
            this.sharedNodes.get(a).add(b));
          let c = b.options.initialPromotionConfig;
          b.promote({
            transition: c ? c.transition : void 0,
            preserveFollowOpacity:
              c && c.shouldPreserveFollowOpacity
                ? c.shouldPreserveFollowOpacity(b)
                : void 0,
          });
        }
        isLead() {
          let a = this.getStack();
          return !a || a.lead === this;
        }
        getLead() {
          let { layoutId: a } = this.options;
          return (a && this.getStack()?.lead) || this;
        }
        getPrevLead() {
          let { layoutId: a } = this.options;
          return a ? this.getStack()?.prevLead : void 0;
        }
        getStack() {
          let { layoutId: a } = this.options;
          if (a) return this.root.sharedNodes.get(a);
        }
        promote({
          needsReset: a,
          transition: b,
          preserveFollowOpacity: c,
        } = {}) {
          let d = this.getStack();
          (d && d.promote(this, c),
            a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            b && this.setOptions({ transition: b }));
        }
        relegate() {
          let a = this.getStack();
          return !!a && a.relegate(this);
        }
        resetSkewAndRotation() {
          let { visualElement: a } = this.options;
          if (!a) return;
          let b = !1,
            { latestValues: c } = a;
          if (
            ((c.z ||
              c.rotate ||
              c.rotateX ||
              c.rotateY ||
              c.rotateZ ||
              c.skewX ||
              c.skewY) &&
              (b = !0),
            !b)
          )
            return;
          let d = {};
          c.z && ez("z", a, d, this.animationValues);
          for (let b = 0; b < ex.length; b++)
            (ez(`rotate${ex[b]}`, a, d, this.animationValues),
              ez(`skew${ex[b]}`, a, d, this.animationValues));
          for (let b in (a.render(), d))
            (a.setStaticValue(b, d[b]),
              this.animationValues && (this.animationValues[b] = d[b]));
          a.scheduleRender();
        }
        applyProjectionStyles(a, b) {
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) {
            a.visibility = "hidden";
            return;
          }
          let c = this.getTransformTemplate();
          if (this.needsReset) {
            ((this.needsReset = !1),
              (a.visibility = ""),
              (a.opacity = ""),
              (a.pointerEvents = bX(b?.pointerEvents) || ""),
              (a.transform = c ? c(this.latestValues, "") : "none"));
            return;
          }
          let d = this.getLead();
          if (!this.projectionDelta || !this.layout || !d.target) {
            (this.options.layoutId &&
              ((a.opacity =
                void 0 !== this.latestValues.opacity
                  ? this.latestValues.opacity
                  : 1),
              (a.pointerEvents = bX(b?.pointerEvents) || "")),
              this.hasProjected &&
                !B(this.latestValues) &&
                ((a.transform = c ? c({}, "") : "none"),
                (this.hasProjected = !1)));
            return;
          }
          a.visibility = "";
          let e = d.animationValues || d.latestValues;
          this.applyTransformsToTarget();
          let f = (function (a, b, c) {
            let d = "",
              e = a.x.translate / b.x,
              f = a.y.translate / b.y,
              g = c?.z || 0;
            if (
              ((e || f || g) && (d = `translate3d(${e}px, ${f}px, ${g}px) `),
              (1 !== b.x || 1 !== b.y) &&
                (d += `scale(${1 / b.x}, ${1 / b.y}) `),
              c)
            ) {
              let {
                transformPerspective: a,
                rotate: b,
                rotateX: e,
                rotateY: f,
                skewX: g,
                skewY: h,
              } = c;
              (a && (d = `perspective(${a}px) ${d}`),
                b && (d += `rotate(${b}deg) `),
                e && (d += `rotateX(${e}deg) `),
                f && (d += `rotateY(${f}deg) `),
                g && (d += `skewX(${g}deg) `),
                h && (d += `skewY(${h}deg) `));
            }
            let h = a.x.scale * b.x,
              i = a.y.scale * b.y;
            return (
              (1 !== h || 1 !== i) && (d += `scale(${h}, ${i})`),
              d || "none"
            );
          })(this.projectionDeltaWithTransform, this.treeScale, e);
          (c && (f = c(e, f)), (a.transform = f));
          let { x: g, y: h } = this.projectionDelta;
          for (let b in ((a.transformOrigin = `${100 * g.origin}% ${100 * h.origin}% 0`),
          d.animationValues
            ? (a.opacity =
                d === this
                  ? (e.opacity ?? this.latestValues.opacity ?? 1)
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : e.opacityExit)
            : (a.opacity =
                d === this
                  ? void 0 !== e.opacity
                    ? e.opacity
                    : ""
                  : void 0 !== e.opacityExit
                    ? e.opacityExit
                    : 0),
          bw)) {
            if (void 0 === e[b]) continue;
            let { correct: c, applyTo: g, isCSSVariable: h } = bw[b],
              i = "none" === f ? e[b] : c(e[b], d);
            if (g) {
              let b = g.length;
              for (let c = 0; c < b; c++) a[g[c]] = i;
            } else
              h
                ? (this.options.visualElement.renderState.vars[b] = i)
                : (a[b] = i);
          }
          this.options.layoutId &&
            (a.pointerEvents =
              d === this ? bX(b?.pointerEvents) || "" : "none");
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          (this.root.nodes.forEach((a) => a.currentAnimation?.stop()),
            this.root.nodes.forEach(eG),
            this.root.sharedNodes.clear());
        }
      };
    }
    function eB(a) {
      a.updateLayout();
    }
    function eC(a) {
      let b = a.resumeFrom?.snapshot || a.snapshot;
      if (a.isLead() && a.layout && b && a.hasListeners("didUpdate")) {
        let { layoutBox: c, measuredBox: d } = a.layout,
          { animationType: e } = a.options,
          f = b.source !== a.layout.source;
        "size" === e
          ? dL((a) => {
              let d = f ? b.measuredBox[a] : b.layoutBox[a],
                e = dF(d);
              ((d.min = c[a].min), (d.max = d.min + e));
            })
          : eV(e, b.layoutBox, c) &&
            dL((d) => {
              let e = f ? b.measuredBox[d] : b.layoutBox[d],
                g = dF(c[d]);
              ((e.max = e.min + g),
                a.relativeTarget &&
                  !a.currentAnimation &&
                  ((a.isProjectionDirty = !0),
                  (a.relativeTarget[d].max = a.relativeTarget[d].min + g)));
            });
        let g = a8();
        dH(g, c, b.layoutBox);
        let h = a8();
        f
          ? dH(h, a.applyTransform(d, !0), b.measuredBox)
          : dH(h, c, b.layoutBox);
        let i = !eq(g),
          j = !1;
        if (!a.resumeFrom) {
          let d = a.getClosestProjectingParent();
          if (d && !d.resumeFrom) {
            let { snapshot: e, layout: f } = d;
            if (e && f) {
              let g = ba();
              dK(g, b.layoutBox, e.layoutBox);
              let h = ba();
              (dK(h, c, f.layoutBox),
                et(g, h) || (j = !0),
                d.options.layoutRoot &&
                  ((a.relativeTarget = h),
                  (a.relativeTargetOrigin = g),
                  (a.relativeParent = d)));
            }
          }
        }
        a.notifyListeners("didUpdate", {
          layout: c,
          snapshot: b,
          delta: h,
          layoutDelta: g,
          hasLayoutChanged: i,
          hasRelativeLayoutChanged: j,
        });
      } else if (a.isLead()) {
        let { onExitComplete: b } = a.options;
        b && b();
      }
      a.options.transition = void 0;
    }
    function eD(a) {
      a.parent &&
        (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
        a.isSharedProjectionDirty ||
          (a.isSharedProjectionDirty = !!(
            a.isProjectionDirty ||
            a.parent.isProjectionDirty ||
            a.parent.isSharedProjectionDirty
          )),
        a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
    }
    function eE(a) {
      a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
    }
    function eF(a) {
      a.clearSnapshot();
    }
    function eG(a) {
      a.clearMeasurements();
    }
    function eH(a) {
      a.isLayoutDirty = !1;
    }
    function eI(a) {
      let { visualElement: b } = a.options;
      (b &&
        b.getProps().onBeforeLayoutMeasure &&
        b.notify("BeforeLayoutMeasure"),
        a.resetTransform());
    }
    function eJ(a) {
      (a.finishAnimation(),
        (a.targetDelta = a.relativeTarget = a.target = void 0),
        (a.isProjectionDirty = !0));
    }
    function eK(a) {
      a.resolveTargetDelta();
    }
    function eL(a) {
      a.calcProjection();
    }
    function eM(a) {
      a.resetSkewAndRotation();
    }
    function eN(a) {
      a.removeLeadSnapshot();
    }
    function eO(a, b, c) {
      ((a.translate = y(b.translate, 0, c)),
        (a.scale = y(b.scale, 1, c)),
        (a.origin = b.origin),
        (a.originPoint = b.originPoint));
    }
    function eP(a, b, c, d) {
      ((a.min = y(b.min, c.min, d)), (a.max = y(b.max, c.max, d)));
    }
    function eQ(a) {
      return a.animationValues && void 0 !== a.animationValues.opacityExit;
    }
    let eR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      eS = (a) =>
        "undefined" != typeof navigator &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(a),
      eT = eS("applewebkit/") && !eS("chrome/") ? Math.round : ae;
    function eU(a) {
      ((a.min = eT(a.min)), (a.max = eT(a.max)));
    }
    function eV(a, b, c) {
      return (
        "position" === a ||
        ("preserve-aspect" === a && !(0.2 >= Math.abs(eu(b) - eu(c))))
      );
    }
    function eW(a) {
      return a !== a.root && a.scroll?.wasRoot;
    }
    let eX = eA({
        attachResizeListener: (a, b) => dB(a, "resize", b),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body.scrollLeft,
          y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => !0,
      }),
      eY = { current: void 0 },
      eZ = eA({
        measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
        defaultParent: () => {
          if (!eY.current) {
            let a = new eX({});
            (a.mount(window),
              a.setOptions({ layoutScroll: !0 }),
              (eY.current = a));
          }
          return eY.current;
        },
        resetTransform: (a, b) => {
          a.style.transform = void 0 !== b ? b : "none";
        },
        checkIsScrollRoot: (a) =>
          "fixed" === window.getComputedStyle(a).position,
      });
    function e$(a, b) {
      let c = (function (a, b, c) {
          if (a instanceof EventTarget) return [a];
          if ("string" == typeof a) {
            let b = document,
              c = void 0 ?? b.querySelectorAll(a);
            return c ? Array.from(c) : [];
          }
          return Array.from(a);
        })(a),
        d = new AbortController();
      return [c, { passive: !0, ...b, signal: d.signal }, () => d.abort()];
    }
    function e_(a) {
      return !("touch" === a.pointerType || dA.x || dA.y);
    }
    function e0(a, b, c) {
      let { props: d } = a;
      a.animationState &&
        d.whileHover &&
        a.animationState.setActive("whileHover", "Start" === c);
      let e = d["onHover" + c];
      e && ai.postRender(() => e(b, dD(b)));
    }
    function e1(a) {
      return d5(a) && "offsetHeight" in a;
    }
    a.s(["isHTMLElement", () => e1], 82133);
    let e2 = (a, b) => !!b && (a === b || e2(a, b.parentElement)),
      e3 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
      e4 = new WeakSet();
    function e5(a) {
      return (b) => {
        "Enter" === b.key && a(b);
      };
    }
    function e6(a, b) {
      a.dispatchEvent(
        new PointerEvent("pointer" + b, { isPrimary: !0, bubbles: !0 }),
      );
    }
    function e7(a) {
      return dC(a) && !(dA.x || dA.y);
    }
    function e8(a, b, c) {
      let { props: d } = a;
      if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
      a.animationState &&
        d.whileTap &&
        a.animationState.setActive("whileTap", "Start" === c);
      let e = d["onTap" + ("End" === c ? "" : c)];
      e && ai.postRender(() => e(b, dD(b)));
    }
    let e9 = new WeakMap(),
      fa = new WeakMap(),
      fb = (a) => {
        let b = e9.get(a.target);
        b && b(a);
      },
      fc = (a) => {
        a.forEach(fb);
      },
      fd = { some: 0, all: 1 },
      fe = (function (a, b) {
        if ("undefined" == typeof Proxy) return b4;
        let c = new Map(),
          d = (c, d) => b4(c, d, a, b);
        return new Proxy((a, b) => d(a, b), {
          get: (e, f) =>
            "create" === f
              ? d
              : (c.has(f) || c.set(f, b4(f, void 0, a, b)), c.get(f)),
        });
      })(
        {
          animation: {
            Feature: class extends dy {
              constructor(a) {
                (super(a),
                  a.animationState ||
                    (a.animationState = (function (a) {
                      let b = (b) =>
                          Promise.all(
                            b.map(({ animation: b, options: c }) =>
                              dr(a, b, c),
                            ),
                          ),
                        c = dx(),
                        d = !0,
                        e = (b) => (c, d) => {
                          let e = b5(
                            a,
                            d,
                            "exit" === b ? a.presenceContext?.custom : void 0,
                          );
                          if (e) {
                            let { transition: a, transitionEnd: b, ...d } = e;
                            c = { ...c, ...d, ...b };
                          }
                          return c;
                        };
                      function f(f) {
                        let { props: g } = a,
                          h =
                            (function a(b) {
                              if (!b) return;
                              if (!b.isControllingVariants) {
                                let c = (b.parent && a(b.parent)) || {};
                                return (
                                  void 0 !== b.props.initial &&
                                    (c.initial = b.props.initial),
                                  c
                                );
                              }
                              let c = {};
                              for (let a = 0; a < dt; a++) {
                                let d = bh[a],
                                  e = b.props[d];
                                (bf(e) || !1 === e) && (c[d] = e);
                              }
                              return c;
                            })(a.parent) || {},
                          i = [],
                          j = new Set(),
                          k = {},
                          l = 1 / 0;
                        for (let b = 0; b < dv; b++) {
                          var m, n;
                          let o = du[b],
                            p = c[o],
                            q = void 0 !== g[o] ? g[o] : h[o],
                            r = bf(q),
                            s = o === f ? p.isActive : null;
                          !1 === s && (l = b);
                          let t = q === h[o] && q !== g[o] && r;
                          if (
                            (t && d && a.manuallyAnimateOnMount && (t = !1),
                            (p.protectedKeys = { ...k }),
                            (!p.isActive && null === s) ||
                              (!q && !p.prevProp) ||
                              be(q) ||
                              "boolean" == typeof q)
                          )
                            continue;
                          let u =
                              ((m = p.prevProp),
                              "string" == typeof (n = q)
                                ? n !== m
                                : !!Array.isArray(n) && !ds(n, m)),
                            v =
                              u ||
                              (o === f && p.isActive && !t && r) ||
                              (b > l && r),
                            w = !1,
                            x = Array.isArray(q) ? q : [q],
                            y = x.reduce(e(o), {});
                          !1 === s && (y = {});
                          let { prevResolvedValues: z = {} } = p,
                            A = { ...z, ...y },
                            B = (b) => {
                              ((v = !0),
                                j.has(b) && ((w = !0), j.delete(b)),
                                (p.needsAnimating[b] = !0));
                              let c = a.getValue(b);
                              c && (c.liveStyle = !1);
                            };
                          for (let a in A) {
                            let b = y[a],
                              c = z[a];
                            if (!k.hasOwnProperty(a))
                              (b7(b) && b7(c) ? ds(b, c) : b === c)
                                ? void 0 !== b && j.has(a)
                                  ? B(a)
                                  : (p.protectedKeys[a] = !0)
                                : null != b
                                  ? B(a)
                                  : j.add(a);
                          }
                          ((p.prevProp = q),
                            (p.prevResolvedValues = y),
                            p.isActive && (k = { ...k, ...y }),
                            d && a.blockInitialAnimation && (v = !1));
                          let C = t && u,
                            D = !C || w;
                          v &&
                            D &&
                            i.push(
                              ...x.map((b) => {
                                let c = { type: o };
                                if (
                                  "string" == typeof b &&
                                  d &&
                                  !C &&
                                  a.manuallyAnimateOnMount &&
                                  a.parent
                                ) {
                                  let { parent: d } = a,
                                    e = b5(d, b);
                                  if (d.enteringChildren && e) {
                                    let { delayChildren: b } =
                                      e.transition || {};
                                    c.delay = dp(d.enteringChildren, a, b);
                                  }
                                }
                                return { animation: b, options: c };
                              }),
                            );
                        }
                        if (j.size) {
                          let b = {};
                          if ("boolean" != typeof g.initial) {
                            let c = b5(
                              a,
                              Array.isArray(g.initial)
                                ? g.initial[0]
                                : g.initial,
                            );
                            c && c.transition && (b.transition = c.transition);
                          }
                          (j.forEach((c) => {
                            let d = a.getBaseTarget(c),
                              e = a.getValue(c);
                            (e && (e.liveStyle = !0), (b[c] = d ?? null));
                          }),
                            i.push({ animation: b }));
                        }
                        let o = !!i.length;
                        return (
                          d &&
                            (!1 === g.initial || g.initial === g.animate) &&
                            !a.manuallyAnimateOnMount &&
                            (o = !1),
                          (d = !1),
                          o ? b(i) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: f,
                        setActive: function (b, d) {
                          if (c[b].isActive === d) return Promise.resolve();
                          (a.variantChildren?.forEach((a) =>
                            a.animationState?.setActive(b, d),
                          ),
                            (c[b].isActive = d));
                          let e = f(b);
                          for (let a in c) c[a].protectedKeys = {};
                          return e;
                        },
                        setAnimateFunction: function (c) {
                          b = c(a);
                        },
                        getState: () => c,
                        reset: () => {
                          c = dx();
                        },
                      };
                    })(a)));
              }
              updateAnimationControlsSubscription() {
                let { animate: a } = this.node.getProps();
                be(a) && (this.unmountControls = a.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: a } = this.node.getProps(),
                  { animate: b } = this.node.prevProps || {};
                a !== b && this.updateAnimationControlsSubscription();
              }
              unmount() {
                (this.node.animationState.reset(), this.unmountControls?.());
              }
            },
          },
          exit: {
            Feature: class extends dy {
              constructor() {
                (super(...arguments), (this.id = dz++));
              }
              update() {
                if (!this.node.presenceContext) return;
                let { isPresent: a, onExitComplete: b } =
                    this.node.presenceContext,
                  { isPresent: c } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || a === c) return;
                let d = this.node.animationState.setActive("exit", !a);
                b &&
                  !a &&
                  d.then(() => {
                    b(this.id);
                  });
              }
              mount() {
                let { register: a, onExitComplete: b } =
                  this.node.presenceContext || {};
                (b && b(this.id), a && (this.unmount = a(this.id)));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends dy {
              constructor() {
                (super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1));
              }
              startObserver() {
                var a;
                let b;
                this.unmount();
                let { viewport: c = {} } = this.node.getProps(),
                  { root: d, margin: e, amount: f = "some", once: g } = c,
                  h = {
                    root: d ? d.current : void 0,
                    rootMargin: e,
                    threshold: "number" == typeof f ? f : fd[f],
                  },
                  i = (a) => {
                    let { isIntersecting: b } = a;
                    if (
                      this.isInView === b ||
                      ((this.isInView = b), g && !b && this.hasEnteredView)
                    )
                      return;
                    (b && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", b));
                    let { onViewportEnter: c, onViewportLeave: d } =
                        this.node.getProps(),
                      e = b ? c : d;
                    e && e(a);
                  };
                return (
                  (a = this.node.current),
                  (b = (function ({ root: a, ...b }) {
                    let c = a || document;
                    fa.has(c) || fa.set(c, {});
                    let d = fa.get(c),
                      e = JSON.stringify(b);
                    return (
                      d[e] ||
                        (d[e] = new IntersectionObserver(fc, {
                          root: a,
                          ...b,
                        })),
                      d[e]
                    );
                  })(h)),
                  e9.set(a, i),
                  b.observe(a),
                  () => {
                    (e9.delete(a), b.unobserve(a));
                  }
                );
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: a, prevProps: b } = this.node;
                ["amount", "margin", "root"].some(
                  (function ({ viewport: a = {} }, { viewport: b = {} } = {}) {
                    return (c) => a[c] !== b[c];
                  })(a, b),
                ) && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends dy {
              mount() {
                let { current: a } = this.node;
                a &&
                  (this.unmount = (function (a, b, c = {}) {
                    let [d, e, f] = e$(a, c),
                      g = (a) => {
                        let d = a.currentTarget;
                        if (!e7(a)) return;
                        e4.add(d);
                        let f = b(d, a),
                          g = (a, b) => {
                            (window.removeEventListener("pointerup", h),
                              window.removeEventListener("pointercancel", i),
                              e4.has(d) && e4.delete(d),
                              e7(a) &&
                                "function" == typeof f &&
                                f(a, { success: b }));
                          },
                          h = (a) => {
                            g(
                              a,
                              d === window ||
                                d === document ||
                                c.useGlobalTarget ||
                                e2(d, a.target),
                            );
                          },
                          i = (a) => {
                            g(a, !1);
                          };
                        (window.addEventListener("pointerup", h, e),
                          window.addEventListener("pointercancel", i, e));
                      };
                    return (
                      d.forEach((a) => {
                        ((c.useGlobalTarget ? window : a).addEventListener(
                          "pointerdown",
                          g,
                          e,
                        ),
                        e1(a)) &&
                          (a.addEventListener("focus", (a) =>
                            ((a, b) => {
                              let c = a.currentTarget;
                              if (!c) return;
                              let d = e5(() => {
                                if (e4.has(c)) return;
                                e6(c, "down");
                                let a = e5(() => {
                                  e6(c, "up");
                                });
                                (c.addEventListener("keyup", a, b),
                                  c.addEventListener(
                                    "blur",
                                    () => e6(c, "cancel"),
                                    b,
                                  ));
                              });
                              (c.addEventListener("keydown", d, b),
                                c.addEventListener(
                                  "blur",
                                  () => c.removeEventListener("keydown", d),
                                  b,
                                ));
                            })(a, e),
                          ),
                          e3.has(a.tagName) ||
                            -1 !== a.tabIndex ||
                            a.hasAttribute("tabindex") ||
                            (a.tabIndex = 0));
                      }),
                      f
                    );
                  })(
                    a,
                    (a, b) => (
                      e8(this.node, b, "Start"),
                      (a, { success: b }) =>
                        e8(this.node, a, b ? "End" : "Cancel")
                    ),
                    { useGlobalTarget: this.node.props.globalTapTarget },
                  ));
              }
              unmount() {}
            },
          },
          focus: {
            Feature: class extends dy {
              constructor() {
                (super(...arguments), (this.isActive = !1));
              }
              onFocus() {
                let a = !1;
                try {
                  a = this.node.current.matches(":focus-visible");
                } catch (b) {
                  a = !0;
                }
                a &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = cc(
                  dB(this.node.current, "focus", () => this.onFocus()),
                  dB(this.node.current, "blur", () => this.onBlur()),
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends dy {
              mount() {
                let { current: a } = this.node;
                a &&
                  (this.unmount = (function (a, b, c = {}) {
                    let [d, e, f] = e$(a, c),
                      g = (a) => {
                        if (!e_(a)) return;
                        let { target: c } = a,
                          d = b(c, a);
                        if ("function" != typeof d || !c) return;
                        let f = (a) => {
                          e_(a) &&
                            (d(a), c.removeEventListener("pointerleave", f));
                        };
                        c.addEventListener("pointerleave", f, e);
                      };
                    return (
                      d.forEach((a) => {
                        a.addEventListener("pointerenter", g, e);
                      }),
                      f
                    );
                  })(
                    a,
                    (a, b) => (
                      e0(this.node, b, "Start"),
                      (a) => e0(this.node, a, "End")
                    ),
                  ));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends dy {
              constructor() {
                (super(...arguments), (this.removePointerDownListener = ae));
              }
              onPointerDown(a) {
                this.session = new dO(a, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: dM(this.node),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: a,
                  onPanStart: b,
                  onPan: c,
                  onPanEnd: d,
                } = this.node.getProps();
                return {
                  onSessionStart: d$(a),
                  onStart: d$(b),
                  onMove: c,
                  onEnd: (a, b) => {
                    (delete this.session, d && ai.postRender(() => d(a, b)));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = dE(
                  this.node.current,
                  "pointerdown",
                  (a) => this.onPointerDown(a),
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                (this.removePointerDownListener(),
                  this.session && this.session.end());
              }
            },
          },
          drag: {
            Feature: class extends dy {
              constructor(a) {
                (super(a),
                  (this.removeGroupControls = ae),
                  (this.removeListeners = ae),
                  (this.controls = new dY(a)));
              }
              mount() {
                let { dragControls: a } = this.node.getProps();
                (a && (this.removeGroupControls = a.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || ae));
              }
              unmount() {
                (this.removeGroupControls(), this.removeListeners());
              }
            },
            ProjectionNode: eZ,
            MeasureLayout: d4,
          },
          layout: { ProjectionNode: eZ, MeasureLayout: d4 },
        },
        (a, b) =>
          bJ(a) ? new bH(b) : new bz(b, { allowProjection: a !== f.Fragment }),
      );
    a.s(["motion", () => fe], 90520);
  },
  90863,
  (a) => {
    "use strict";
    var b,
      c,
      d = a.i(99669),
      e = a.i(90520),
      f = a.i(6270),
      g = a.i(44817),
      h = a.i(44134),
      i = a.i(59055),
      j = a.i(81211);
    function k(a, b) {
      [...b].reverse().forEach((c) => {
        let d = a.getVariant(c);
        (d && (0, i.setTarget)(a, d),
          a.variantChildren &&
            a.variantChildren.forEach((a) => {
              k(a, b);
            }));
      });
    }
    function l() {
      let a = !1,
        b = new Set(),
        c = {
          subscribe: (a) => (b.add(a), () => void b.delete(a)),
          start(c, d) {
            (0, h.invariant)(
              a,
              "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.",
            );
            let e = [];
            return (
              b.forEach((a) => {
                e.push(
                  (0, j.animateVisualElement)(a, c, { transitionOverride: d }),
                );
              }),
              Promise.all(e)
            );
          },
          set: (c) => (
            (0, h.invariant)(
              a,
              "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
            ),
            b.forEach((a) => {
              var b, d;
              ((b = a),
                Array.isArray((d = c))
                  ? k(b, d)
                  : "string" == typeof d
                    ? k(b, [d])
                    : (0, i.setTarget)(b, d));
            })
          ),
          stop() {
            b.forEach((a) => {
              a.values.forEach((a) => a.stop());
            });
          },
          mount: () => (
            (a = !0),
            () => {
              ((a = !1), c.stop());
            }
          ),
        };
      return c;
    }
    let m = function () {
      let a = (0, f.useConstant)(l);
      return ((0, g.useIsomorphicLayoutEffect)(a.mount, []), a);
    };
    var n = a.i(61289),
      o = Object.defineProperty,
      p = new Map(),
      q = new WeakMap(),
      r = 0;
    (n.Component,
      null != (null != (c = n.useInsertionEffect) ? c : n.useLayoutEffect) ||
        n.useEffect,
      a.s(
        [
          "default",
          0,
          ({ children: a }) => {
            let c = m(),
              [f, g] = (function ({
                threshold: a,
                delay: c,
                trackVisibility: d,
                rootMargin: e,
                root: f,
                triggerOnce: g,
                skip: h,
                initialInView: i,
                fallbackInView: j,
                onChange: k,
              } = {}) {
                var l;
                let [m, o] = n.useState(null),
                  s = n.useRef(k),
                  t = n.useRef(i),
                  [u, v] = n.useState({ inView: !!i, entry: void 0 });
                ((s.current = k),
                  n.useEffect(() => {
                    let k;
                    if ((void 0 === t.current && (t.current = i), !h && m))
                      return (
                        (k = (function (a, c, d = {}, e = b) {
                          if (
                            void 0 === window.IntersectionObserver &&
                            void 0 !== e
                          ) {
                            let b = a.getBoundingClientRect();
                            return (
                              c(e, {
                                isIntersecting: e,
                                target: a,
                                intersectionRatio:
                                  "number" == typeof d.threshold
                                    ? d.threshold
                                    : 0,
                                time: 0,
                                boundingClientRect: b,
                                intersectionRect: b,
                                rootBounds: b,
                              }),
                              () => {}
                            );
                          }
                          let {
                              id: f,
                              observer: g,
                              elements: h,
                            } = (function (a) {
                              let b = Object.keys(a)
                                  .sort()
                                  .filter((b) => void 0 !== a[b])
                                  .map((b) => {
                                    var c;
                                    return `${b}_${"root" === b ? (!(c = a.root) ? "0" : (q.has(c) || ((r += 1), q.set(c, r.toString())), q.get(c))) : a[b]}`;
                                  })
                                  .toString(),
                                c = p.get(b);
                              if (!c) {
                                let d,
                                  e = new Map(),
                                  f = new IntersectionObserver((b) => {
                                    b.forEach((b) => {
                                      var c;
                                      let f =
                                        b.isIntersecting &&
                                        d.some((a) => b.intersectionRatio >= a);
                                      (a.trackVisibility &&
                                        void 0 === b.isVisible &&
                                        (b.isVisible = f),
                                        null == (c = e.get(b.target)) ||
                                          c.forEach((a) => {
                                            a(f, b);
                                          }));
                                    });
                                  }, a);
                                ((d =
                                  f.thresholds ||
                                  (Array.isArray(a.threshold)
                                    ? a.threshold
                                    : [a.threshold || 0])),
                                  (c = { id: b, observer: f, elements: e }),
                                  p.set(b, c));
                              }
                              return c;
                            })(d),
                            i = h.get(a) || [];
                          return (
                            h.has(a) || h.set(a, i),
                            i.push(c),
                            g.observe(a),
                            function () {
                              (i.splice(i.indexOf(c), 1),
                                0 === i.length && (h.delete(a), g.unobserve(a)),
                                0 === h.size && (g.disconnect(), p.delete(f)));
                            }
                          );
                        })(
                          m,
                          (a, b) => {
                            let c = t.current;
                            ((t.current = a),
                              (void 0 !== c || a) &&
                                (v({ inView: a, entry: b }),
                                s.current && s.current(a, b),
                                b.isIntersecting &&
                                  g &&
                                  k &&
                                  (k(), (k = void 0))));
                          },
                          {
                            root: f,
                            rootMargin: e,
                            threshold: a,
                            trackVisibility: d,
                            delay: c,
                          },
                          j,
                        )),
                        () => {
                          k && k();
                        }
                      );
                  }, [
                    Array.isArray(a) ? a.toString() : a,
                    m,
                    f,
                    e,
                    g,
                    h,
                    d,
                    j,
                    c,
                  ]));
                let w = null == (l = u.entry) ? void 0 : l.target,
                  x = n.useRef(void 0);
                m ||
                  !w ||
                  g ||
                  h ||
                  x.current === w ||
                  ((x.current = w),
                  v({ inView: !!i, entry: void 0 }),
                  (t.current = i));
                let y = [o, u.inView, u.entry];
                return ((y.ref = y[0]), (y.inView = y[1]), (y.entry = y[2]), y);
              })({ triggerOnce: !0, threshold: 0.1 });
            return (
              (0, n.useEffect)(() => {
                g && c.start("visible");
              }, [c, g]),
              (0, d.jsx)(e.motion.div, {
                ref: f,
                initial: "hidden",
                animate: c,
                variants: {
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                },
                transition: { duration: 1.2 },
                children: a,
              })
            );
          },
        ],
        90863,
      ));
  },
  77314,
  (a, b, c) => {
    "use strict";
    var d = a.r(61289),
      e =
        "function" == typeof Object.is
          ? Object.is
          : function (a, b) {
              return (
                (a === b && (0 !== a || 1 / a == 1 / b)) || (a != a && b != b)
              );
            },
      f = d.useSyncExternalStore,
      g = d.useRef,
      h = d.useEffect,
      i = d.useMemo,
      j = d.useDebugValue;
    c.useSyncExternalStoreWithSelector = function (a, b, c, d, k) {
      var l = g(null);
      if (null === l.current) {
        var m = { hasValue: !1, value: null };
        l.current = m;
      } else m = l.current;
      var n = f(
        a,
        (l = i(
          function () {
            function a(a) {
              if (!h) {
                if (
                  ((h = !0), (f = a), (a = d(a)), void 0 !== k && m.hasValue)
                ) {
                  var b = m.value;
                  if (k(b, a)) return (g = b);
                }
                return (g = a);
              }
              if (((b = g), e(f, a))) return b;
              var c = d(a);
              return void 0 !== k && k(b, c)
                ? ((f = a), b)
                : ((f = a), (g = c));
            }
            var f,
              g,
              h = !1,
              i = void 0 === c ? null : c;
            return [
              function () {
                return a(b());
              },
              null === i
                ? void 0
                : function () {
                    return a(i());
                  },
            ];
          },
          [b, c, d, k],
        ))[0],
        l[1],
      );
      return (
        h(
          function () {
            ((m.hasValue = !0), (m.value = n));
          },
          [n],
        ),
        j(n),
        n
      );
    };
  },
  77967,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(77314);
  },
  39713,
  (a) => {
    "use strict";
    let b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B;
    var C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T = a.i(99669),
      U = a.i(61289),
      V =
        (((b = V || {}).Space = " "),
        (b.Enter = "Enter"),
        (b.Escape = "Escape"),
        (b.Backspace = "Backspace"),
        (b.Delete = "Delete"),
        (b.ArrowLeft = "ArrowLeft"),
        (b.ArrowUp = "ArrowUp"),
        (b.ArrowRight = "ArrowRight"),
        (b.ArrowDown = "ArrowDown"),
        (b.Home = "Home"),
        (b.End = "End"),
        (b.PageUp = "PageUp"),
        (b.PageDown = "PageDown"),
        (b.Tab = "Tab"),
        b),
      W = Object.defineProperty,
      X = (a, b, c) => {
        let d;
        return (
          (d = "symbol" != typeof b ? b + "" : b) in a
            ? W(a, d, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (a[d] = c),
          c
        );
      };
    let Y = new (class {
        constructor() {
          (X(this, "current", this.detect()),
            X(this, "handoffState", "pending"),
            X(this, "currentId", 0));
        }
        set(a) {
          this.current !== a &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = a));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "server";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      })(),
      Z = (a, b) => {
        Y.isServer ? (0, U.useEffect)(a, b) : (0, U.useLayoutEffect)(a, b);
      };
    function $(a) {
      let b = (0, U.useRef)(a);
      return (
        Z(() => {
          b.current = a;
        }, [a]),
        b
      );
    }
    function _(a, b, c, d) {
      let e = $(c);
      (0, U.useEffect)(() => {
        function c(a) {
          e.current(a);
        }
        return (
          (a = null != a ? a : window).addEventListener(b, c, d),
          () => a.removeEventListener(b, c, d)
        );
      }, [a, b, d]);
    }
    class aa extends Map {
      constructor(a) {
        (super(), (this.factory = a));
      }
      get(a) {
        let b = super.get(a);
        return (void 0 === b && ((b = this.factory(a)), this.set(a, b)), b);
      }
    }
    function ab(a) {
      "function" == typeof queueMicrotask
        ? queueMicrotask(a)
        : Promise.resolve()
            .then(a)
            .catch((a) =>
              setTimeout(() => {
                throw a;
              }),
            );
    }
    function ac() {
      let a = [],
        b = {
          addEventListener: (a, c, d, e) => (
            a.addEventListener(c, d, e),
            b.add(() => a.removeEventListener(c, d, e))
          ),
          requestAnimationFrame(...a) {
            let c = requestAnimationFrame(...a);
            return b.add(() => cancelAnimationFrame(c));
          },
          nextFrame: (...a) =>
            b.requestAnimationFrame(() => b.requestAnimationFrame(...a)),
          setTimeout(...a) {
            let c = setTimeout(...a);
            return b.add(() => clearTimeout(c));
          },
          microTask(...a) {
            let c = { current: !0 };
            return (
              ab(() => {
                c.current && a[0]();
              }),
              b.add(() => {
                c.current = !1;
              })
            );
          },
          style(a, b, c) {
            let d = a.style.getPropertyValue(b);
            return (
              Object.assign(a.style, { [b]: c }),
              this.add(() => {
                Object.assign(a.style, { [b]: d });
              })
            );
          },
          group(a) {
            let b = ac();
            return (a(b), this.add(() => b.dispose()));
          },
          add: (b) => (
            a.includes(b) || a.push(b),
            () => {
              let c = a.indexOf(b);
              if (c >= 0) for (let b of a.splice(c, 1)) b();
            }
          ),
          dispose() {
            for (let b of a.splice(0)) b();
          },
        };
      return b;
    }
    var ad = Object.defineProperty,
      ae = (a, b, c) => {
        if (!b.has(a)) throw TypeError("Cannot " + c);
      },
      af = (a, b, c) => (
        ae(a, b, "read from private field"),
        c ? c.call(a) : b.get(a)
      ),
      ag = (a, b, c) => {
        if (b.has(a))
          throw TypeError("Cannot add the same private member more than once");
        b instanceof WeakSet ? b.add(a) : b.set(a, c);
      },
      ah = (a, b, c, d) => (
        ae(a, b, "write to private field"),
        d ? d.call(a, c) : b.set(a, c),
        c
      );
    class ai {
      constructor(a) {
        (ag(this, K, {}),
          ag(this, L, new aa(() => new Set())),
          ag(this, M, new Set()),
          ((a, b, c) => {
            let d;
            return (d = "symbol" != typeof b ? b + "" : b) in a
              ? ad(a, d, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: c,
                })
              : (a[d] = c);
          })(this, "disposables", ac()),
          ah(this, K, a),
          Y.isServer &&
            this.disposables.microTask(() => {
              this.dispose();
            }));
      }
      dispose() {
        this.disposables.dispose();
      }
      get state() {
        return af(this, K);
      }
      subscribe(a, b) {
        if (Y.isServer) return () => {};
        let c = { selector: a, callback: b, current: a(af(this, K)) };
        return (
          af(this, M).add(c),
          this.disposables.add(() => {
            af(this, M).delete(c);
          })
        );
      }
      on(a, b) {
        return Y.isServer
          ? () => {}
          : (af(this, L).get(a).add(b),
            this.disposables.add(() => {
              af(this, L).get(a).delete(b);
            }));
      }
      send(a) {
        let b = this.reduce(af(this, K), a);
        if (b !== af(this, K)) {
          for (let a of (ah(this, K, b), af(this, M))) {
            let b = a.selector(af(this, K));
            aj(a.current, b) || ((a.current = b), a.callback(b));
          }
          for (let b of af(this, L).get(a.type)) b(af(this, K), a);
        }
      }
    }
    function aj(a, b) {
      return (
        !!Object.is(a, b) ||
        ("object" == typeof a &&
          null !== a &&
          "object" == typeof b &&
          null !== b &&
          (Array.isArray(a) && Array.isArray(b)
            ? a.length === b.length &&
              ak(a[Symbol.iterator](), b[Symbol.iterator]())
            : (a instanceof Map && b instanceof Map) ||
                (a instanceof Set && b instanceof Set)
              ? a.size === b.size && ak(a.entries(), b.entries())
              : !!(al(a) && al(b)) &&
                ak(
                  Object.entries(a)[Symbol.iterator](),
                  Object.entries(b)[Symbol.iterator](),
                )))
      );
    }
    function ak(a, b) {
      for (;;) {
        let c = a.next(),
          d = b.next();
        if (c.done && d.done) return !0;
        if (c.done || d.done || !Object.is(c.value, d.value)) return !1;
      }
    }
    function al(a) {
      if ("[object Object]" !== Object.prototype.toString.call(a)) return !1;
      let b = Object.getPrototypeOf(a);
      return null === b || null === Object.getPrototypeOf(b);
    }
    function am(a, b, ...c) {
      if (a in b) {
        let d = b[a];
        return "function" == typeof d ? d(...c) : d;
      }
      let d = Error(
        `Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(
          b,
        )
          .map((a) => `"${a}"`)
          .join(", ")}.`,
      );
      throw (Error.captureStackTrace && Error.captureStackTrace(d, am), d);
    }
    ((K = new WeakMap()), (L = new WeakMap()), (M = new WeakMap()));
    var an = Object.defineProperty,
      ao = (a, b, c) => {
        let d;
        return (
          (d = "symbol" != typeof b ? b + "" : b) in a
            ? an(a, d, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (a[d] = c),
          c
        );
      },
      ap =
        (((c = ap || {})[(c.Push = 0)] = "Push"), (c[(c.Pop = 1)] = "Pop"), c);
    let aq = {
      0(a, b) {
        let c = b.id,
          d = a.stack,
          e = a.stack.indexOf(c);
        if (-1 !== e) {
          let b = a.stack.slice();
          return (b.splice(e, 1), b.push(c), (d = b), { ...a, stack: d });
        }
        return { ...a, stack: [...a.stack, c] };
      },
      1(a, b) {
        let c = b.id,
          d = a.stack.indexOf(c);
        if (-1 === d) return a;
        let e = a.stack.slice();
        return (e.splice(d, 1), { ...a, stack: e });
      },
    };
    class ar extends ai {
      constructor() {
        (super(...arguments),
          ao(this, "actions", {
            push: (a) => this.send({ type: 0, id: a }),
            pop: (a) => this.send({ type: 1, id: a }),
          }),
          ao(this, "selectors", {
            isTop: (a, b) => a.stack[a.stack.length - 1] === b,
            inStack: (a, b) => a.stack.includes(b),
          }));
      }
      static new() {
        return new ar({ stack: [] });
      }
      reduce(a, b) {
        return am(b.type, aq, a, b);
      }
    }
    let as = new aa(() => ar.new());
    var at = a.i(77967);
    let au = function (a) {
      let b = $(a);
      return U.default.useCallback((...a) => b.current(...a), [b]);
    };
    function av(a, b, c = aj) {
      return (0, at.useSyncExternalStoreWithSelector)(
        au((b) => a.subscribe(aw, b)),
        au(() => a.state),
        au(() => a.state),
        au(b),
        c,
      );
    }
    function aw(a) {
      return a;
    }
    function ax(a, b) {
      let c = (0, U.useId)(),
        d = as.get(b),
        [e, f] = av(
          d,
          (0, U.useCallback)(
            (a) => [d.selectors.isTop(a, c), d.selectors.inStack(a, c)],
            [d, c],
          ),
        );
      return (
        Z(() => {
          if (a) return (d.actions.push(c), () => d.actions.pop(c));
        }, [d, a, c]),
        !!a && (!f || e)
      );
    }
    function ay(a) {
      var b;
      return Y.isServer
        ? null
        : null == a
          ? document
          : null != (b = null == a ? void 0 : a.ownerDocument)
            ? b
            : document;
    }
    function az(a) {
      var b, c;
      return Y.isServer
        ? null
        : null == a
          ? document
          : null !=
              (c =
                null == (b = null == a ? void 0 : a.getRootNode)
                  ? void 0
                  : b.call(a))
            ? c
            : document;
    }
    function aA(a) {
      var b, c;
      return null != (c = null == (b = az(a)) ? void 0 : b.activeElement)
        ? c
        : null;
    }
    let aB = new Map(),
      aC = new Map();
    function aD(a) {
      var b;
      let c = null != (b = aC.get(a)) ? b : 0;
      return (
        aC.set(a, c + 1),
        0 !== c ||
          (aB.set(a, {
            "aria-hidden": a.getAttribute("aria-hidden"),
            inert: a.inert,
          }),
          a.setAttribute("aria-hidden", "true"),
          (a.inert = !0)),
        () =>
          (function (a) {
            var b;
            let c = null != (b = aC.get(a)) ? b : 1;
            if ((1 === c ? aC.delete(a) : aC.set(a, c - 1), 1 !== c)) return;
            let d = aB.get(a);
            d &&
              (null === d["aria-hidden"]
                ? a.removeAttribute("aria-hidden")
                : a.setAttribute("aria-hidden", d["aria-hidden"]),
              (a.inert = d.inert),
              aB.delete(a));
          })(a)
      );
    }
    function aE(a) {
      return (
        "object" == typeof a && null !== a && "nodeType" in a && "tagName" in a
      );
    }
    function aF(a) {
      return aE(a) && "accessKey" in a;
    }
    function aG(a) {
      return aE(a) && "tabIndex" in a;
    }
    function aH(a) {
      return aF(a) && "LEGEND" === a.nodeName;
    }
    let aI = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "details>summary",
        "textarea:not([disabled])",
      ]
        .map((a) => `${a}:not([tabindex='-1'])`)
        .join(","),
      aJ = ["[data-autofocus]"]
        .map((a) => `${a}:not([tabindex='-1'])`)
        .join(",");
    var aK =
        (((d = aK || {})[(d.First = 1)] = "First"),
        (d[(d.Previous = 2)] = "Previous"),
        (d[(d.Next = 4)] = "Next"),
        (d[(d.Last = 8)] = "Last"),
        (d[(d.WrapAround = 16)] = "WrapAround"),
        (d[(d.NoScroll = 32)] = "NoScroll"),
        (d[(d.AutoFocus = 64)] = "AutoFocus"),
        d),
      aL =
        (((e = aL || {})[(e.Error = 0)] = "Error"),
        (e[(e.Overflow = 1)] = "Overflow"),
        (e[(e.Success = 2)] = "Success"),
        (e[(e.Underflow = 3)] = "Underflow"),
        e),
      aM =
        (((f = aM || {})[(f.Previous = -1)] = "Previous"),
        (f[(f.Next = 1)] = "Next"),
        f),
      aN =
        (((g = aN || {})[(g.Strict = 0)] = "Strict"),
        (g[(g.Loose = 1)] = "Loose"),
        g),
      aO =
        (((h = aO || {})[(h.Keyboard = 0)] = "Keyboard"),
        (h[(h.Mouse = 1)] = "Mouse"),
        h);
    function aP(a) {
      null == a || a.focus({ preventScroll: !0 });
    }
    function aQ(
      a,
      b,
      { sorted: c = !0, relativeTo: d = null, skipElements: e = [] } = {},
    ) {
      var f, g, h;
      let i = Array.isArray(a) ? (a.length > 0 ? az(a[0]) : document) : az(a),
        j = Array.isArray(a)
          ? c
            ? (function (a, b = (a) => a) {
                return a.slice().sort((a, c) => {
                  let d = b(a),
                    e = b(c);
                  if (null === d || null === e) return 0;
                  let f = d.compareDocumentPosition(e);
                  return f & Node.DOCUMENT_POSITION_FOLLOWING
                    ? -1
                    : f & Node.DOCUMENT_POSITION_PRECEDING
                      ? 1
                      : 0;
                });
              })(a)
            : a
          : 64 & b
            ? (function (a = document.body) {
                return null == a
                  ? []
                  : Array.from(a.querySelectorAll(aJ)).sort((a, b) =>
                      Math.sign(
                        (a.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (b.tabIndex || Number.MAX_SAFE_INTEGER),
                      ),
                    );
              })(a)
            : (function (a = document.body) {
                return null == a
                  ? []
                  : Array.from(a.querySelectorAll(aI)).sort((a, b) =>
                      Math.sign(
                        (a.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (b.tabIndex || Number.MAX_SAFE_INTEGER),
                      ),
                    );
              })(a);
      (e.length > 0 &&
        j.length > 1 &&
        (j = j.filter(
          (a) =>
            !e.some((b) =>
              null != b && "current" in b
                ? (null == b ? void 0 : b.current) === a
                : b === a,
            ),
        )),
        (d = null != d ? d : null == i ? void 0 : i.activeElement));
      let k = (() => {
          if (5 & b) return 1;
          if (10 & b) return -1;
          throw Error(
            "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
          );
        })(),
        l = (() => {
          if (1 & b) return 0;
          if (2 & b) return Math.max(0, j.indexOf(d)) - 1;
          if (4 & b) return Math.max(0, j.indexOf(d)) + 1;
          if (8 & b) return j.length - 1;
          throw Error(
            "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
          );
        })(),
        m = 32 & b ? { preventScroll: !0 } : {},
        n = 0,
        o = j.length,
        p;
      do {
        if (n >= o || n + o <= 0) return 0;
        let a = l + n;
        if (16 & b) a = (a + o) % o;
        else {
          if (a < 0) return 3;
          if (a >= o) return 1;
        }
        (null == (p = j[a]) || p.focus(m), (n += k));
      } while (p !== aA(p));
      return (
        6 & b &&
          null !=
            (h =
              null == (g = null == (f = p) ? void 0 : f.matches)
                ? void 0
                : g.call(f, "textarea,input")) &&
          h &&
          p.select(),
        2
      );
    }
    function aR() {
      return (
        /iPhone/gi.test(window.navigator.platform) ||
        (/Mac/gi.test(window.navigator.platform) &&
          window.navigator.maxTouchPoints > 0)
      );
    }
    function aS() {
      return aR() || /Android/gi.test(window.navigator.userAgent);
    }
    function aT(a, b, c, d) {
      let e = $(c);
      (0, U.useEffect)(() => {
        if (a)
          return (
            document.addEventListener(b, c, d),
            () => document.removeEventListener(b, c, d)
          );
        function c(a) {
          e.current(a);
        }
      }, [a, b, d]);
    }
    function aU(a, b, c, d) {
      let e = $(c);
      (0, U.useEffect)(() => {
        if (a)
          return (
            window.addEventListener(b, c, d),
            () => window.removeEventListener(b, c, d)
          );
        function c(a) {
          e.current(a);
        }
      }, [a, b, d]);
    }
    function aV(...a) {
      return (0, U.useMemo)(() => ay(...a), [...a]);
    }
    function aW(...a) {
      return Array.from(
        new Set(a.flatMap((a) => ("string" == typeof a ? a.split(" ") : []))),
      )
        .filter(Boolean)
        .join(" ");
    }
    var aX =
        (((i = aX || {})[(i.None = 0)] = "None"),
        (i[(i.RenderStrategy = 1)] = "RenderStrategy"),
        (i[(i.Static = 2)] = "Static"),
        i),
      aY =
        (((j = aY || {})[(j.Unmount = 0)] = "Unmount"),
        (j[(j.Hidden = 1)] = "Hidden"),
        j);
    function aZ() {
      let a,
        b,
        c =
          ((a = (0, U.useRef)([])),
          (b = (0, U.useCallback)((b) => {
            for (let c of a.current)
              null != c && ("function" == typeof c ? c(b) : (c.current = b));
          }, [])),
          (...c) => {
            if (!c.every((a) => null == a)) return ((a.current = c), b);
          });
      return (0, U.useCallback)(
        (a) =>
          (function ({
            ourProps: a,
            theirProps: b,
            slot: c,
            defaultTag: d,
            features: e,
            visible: f = !0,
            name: g,
            mergeRefs: h,
          }) {
            h = null != h ? h : a_;
            let i = a0(b, a);
            if (f) return a$(i, c, d, g, h);
            let j = null != e ? e : 0;
            if (2 & j) {
              let { static: a = !1, ...b } = i;
              if (a) return a$(b, c, d, g, h);
            }
            if (1 & j) {
              let { unmount: a = !0, ...b } = i;
              return am(+!a, {
                0: () => null,
                1: () =>
                  a$(
                    { ...b, hidden: !0, style: { display: "none" } },
                    c,
                    d,
                    g,
                    h,
                  ),
              });
            }
            return a$(i, c, d, g, h);
          })({ mergeRefs: c, ...a }),
        [c],
      );
    }
    function a$(a, b = {}, c, d, e) {
      let {
          as: f = c,
          children: g,
          refName: h = "ref",
          ...i
        } = a4(a, ["unmount", "static"]),
        j = void 0 !== a.ref ? { [h]: a.ref } : {},
        k = "function" == typeof g ? g(b) : g;
      ("className" in i &&
        i.className &&
        "function" == typeof i.className &&
        (i.className = i.className(b)),
        i["aria-labelledby"] &&
          i["aria-labelledby"] === i.id &&
          (i["aria-labelledby"] = void 0));
      let l = {};
      if (b) {
        let a = !1,
          c = [];
        for (let [d, e] of Object.entries(b))
          ("boolean" == typeof e && (a = !0),
            !0 === e &&
              c.push(d.replace(/([A-Z])/g, (a) => `-${a.toLowerCase()}`)));
        if (a)
          for (let a of ((l["data-headlessui-state"] = c.join(" ")), c))
            l[`data-${a}`] = "";
      }
      if (
        a5(f) &&
        (Object.keys(a3(i)).length > 0 || Object.keys(a3(l)).length > 0)
      )
        if (
          !(0, U.isValidElement)(k) ||
          (Array.isArray(k) && k.length > 1) ||
          a5(k.type)
        ) {
          if (Object.keys(a3(i)).length > 0)
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${d} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(a3(i))
                  .concat(Object.keys(a3(l)))
                  .map((a) => `  - ${a}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((a) => `  - ${a}`).join(`
`),
              ].join(`
`),
            );
        } else {
          var m;
          let a = k.props,
            b = null == a ? void 0 : a.className,
            c =
              "function" == typeof b
                ? (...a) => aW(b(...a), i.className)
                : aW(b, i.className),
            d = a0(k.props, a3(a4(i, ["ref"])));
          for (let a in l) a in d && delete l[a];
          return (0, U.cloneElement)(
            k,
            Object.assign(
              {},
              d,
              l,
              j,
              {
                ref: e(
                  ((m = k),
                  U.default.version.split(".")[0] >= "19"
                    ? m.props.ref
                    : m.ref),
                  j.ref,
                ),
              },
              c ? { className: c } : {},
            ),
          );
        }
      return (0, U.createElement)(
        f,
        Object.assign({}, a4(i, ["ref"]), !a5(f) && j, !a5(f) && l),
        k,
      );
    }
    function a_(...a) {
      return a.every((a) => null == a)
        ? void 0
        : (b) => {
            for (let c of a)
              null != c && ("function" == typeof c ? c(b) : (c.current = b));
          };
    }
    function a0(...a) {
      if (0 === a.length) return {};
      if (1 === a.length) return a[0];
      let b = {},
        c = {};
      for (let d of a)
        for (let a in d)
          a.startsWith("on") && "function" == typeof d[a]
            ? (null != c[a] || (c[a] = []), c[a].push(d[a]))
            : (b[a] = d[a]);
      if (b.disabled || b["aria-disabled"])
        for (let a in c)
          /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(a) &&
            (c[a] = [
              (a) => {
                var b;
                return null == (b = null == a ? void 0 : a.preventDefault)
                  ? void 0
                  : b.call(a);
              },
            ]);
      for (let a in c)
        Object.assign(b, {
          [a](b, ...d) {
            for (let e of c[a]) {
              if (
                (b instanceof Event ||
                  (null == b ? void 0 : b.nativeEvent) instanceof Event) &&
                b.defaultPrevented
              )
                return;
              e(b, ...d);
            }
          },
        });
      return b;
    }
    function a1(...a) {
      if (0 === a.length) return {};
      if (1 === a.length) return a[0];
      let b = {},
        c = {};
      for (let d of a)
        for (let a in d)
          a.startsWith("on") && "function" == typeof d[a]
            ? (null != c[a] || (c[a] = []), c[a].push(d[a]))
            : (b[a] = d[a]);
      for (let a in c)
        Object.assign(b, {
          [a](...b) {
            for (let d of c[a]) null == d || d(...b);
          },
        });
      return b;
    }
    function a2(a) {
      var b;
      return Object.assign((0, U.forwardRef)(a), {
        displayName: null != (b = a.displayName) ? b : a.name,
      });
    }
    function a3(a) {
      let b = Object.assign({}, a);
      for (let a in b) void 0 === b[a] && delete b[a];
      return b;
    }
    function a4(a, b = []) {
      let c = Object.assign({}, a);
      for (let a of b) a in c && delete c[a];
      return c;
    }
    function a5(a) {
      return a === U.Fragment || a === Symbol.for("react.fragment");
    }
    var a6 =
      (((k = a6 || {})[(k.None = 1)] = "None"),
      (k[(k.Focusable = 2)] = "Focusable"),
      (k[(k.Hidden = 4)] = "Hidden"),
      k);
    let a7 = a2(function (a, b) {
        var c;
        let { features: d = 1, ...e } = a,
          f = {
            ref: b,
            "aria-hidden":
              (2 & d) == 2 || (null != (c = e["aria-hidden"]) ? c : void 0),
            hidden: (4 & d) == 4 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & d) == 4 && (2 & d) != 2 && { display: "none" }),
            },
          };
        return aZ()({
          ourProps: f,
          theirProps: e,
          slot: {},
          defaultTag: "span",
          name: "Hidden",
        });
      }),
      a8 = (0, U.createContext)(null);
    function a9({ children: a, node: b }) {
      let [c, d] = (0, U.useState)(null),
        e = ba(null != b ? b : c);
      return U.default.createElement(
        a8.Provider,
        { value: e },
        a,
        null === e &&
          U.default.createElement(a7, {
            features: a6.Hidden,
            ref: (a) => {
              var b, c;
              if (a) {
                for (let e of null !=
                (c =
                  null == (b = ay(a))
                    ? void 0
                    : b.querySelectorAll("html > *, body > *"))
                  ? c
                  : [])
                  if (
                    e !== document.body &&
                    e !== document.head &&
                    aE(e) &&
                    null != e &&
                    e.contains(a)
                  ) {
                    d(e);
                    break;
                  }
              }
            },
          }),
      );
    }
    function ba(a = null) {
      var b;
      return null != (b = (0, U.useContext)(a8)) ? b : a;
    }
    function bb(a) {
      let b = {};
      for (let c of a) Object.assign(b, c(b));
      return b;
    }
    let bc =
      ((C = () => new Map()),
      (D = {
        PUSH(a, b) {
          var c;
          let d =
            null != (c = this.get(a))
              ? c
              : {
                  doc: a,
                  count: 0,
                  d: ac(),
                  meta: new Set(),
                  computedMeta: {},
                };
          return (
            d.count++,
            d.meta.add(b),
            (d.computedMeta = bb(d.meta)),
            this.set(a, d),
            this
          );
        },
        POP(a, b) {
          let c = this.get(a);
          return (
            c && (c.count--, c.meta.delete(b), (c.computedMeta = bb(c.meta))),
            this
          );
        },
        SCROLL_PREVENT(a) {
          let b,
            c = { doc: a.doc, d: a.d, meta: () => a.computedMeta },
            d = [
              aR()
                ? {
                    before({ doc: a, d: b, meta: c }) {
                      function d(a) {
                        for (let b of c().containers)
                          for (let c of b()) if (c.contains(a)) return !0;
                        return !1;
                      }
                      b.microTask(() => {
                        var c;
                        if (
                          "auto" !==
                          window.getComputedStyle(a.documentElement)
                            .scrollBehavior
                        ) {
                          let c = ac();
                          (c.style(a.documentElement, "scrollBehavior", "auto"),
                            b.add(() => b.microTask(() => c.dispose())));
                        }
                        let e =
                            null != (c = window.scrollY)
                              ? c
                              : window.pageYOffset,
                          f = null;
                        (b.addEventListener(
                          a,
                          "click",
                          (b) => {
                            if (aG(b.target))
                              try {
                                let c = b.target.closest("a");
                                if (!c) return;
                                let { hash: e } = new URL(c.href),
                                  g = a.querySelector(e);
                                aG(g) && !d(g) && (f = g);
                              } catch {}
                          },
                          !0,
                        ),
                          b.group((c) => {
                            b.addEventListener(a, "touchstart", (a) => {
                              var b;
                              if (
                                (c.dispose(),
                                aG(a.target) &&
                                  aE((b = a.target)) &&
                                  "style" in b)
                              )
                                if (d(a.target)) {
                                  let b = a.target;
                                  for (
                                    ;
                                    b.parentElement && d(b.parentElement);
                                  )
                                    b = b.parentElement;
                                  c.style(b, "overscrollBehavior", "contain");
                                } else c.style(a.target, "touchAction", "none");
                            });
                          }),
                          b.addEventListener(
                            a,
                            "touchmove",
                            (a) => {
                              if (aG(a.target)) {
                                var b;
                                if (
                                  !(
                                    aF((b = a.target)) && "INPUT" === b.nodeName
                                  )
                                )
                                  if (d(a.target)) {
                                    let b = a.target;
                                    for (
                                      ;
                                      b.parentElement &&
                                      "" !== b.dataset.headlessuiPortal &&
                                      !(
                                        b.scrollHeight > b.clientHeight ||
                                        b.scrollWidth > b.clientWidth
                                      );
                                    )
                                      b = b.parentElement;
                                    "" === b.dataset.headlessuiPortal &&
                                      a.preventDefault();
                                  } else a.preventDefault();
                              }
                            },
                            { passive: !1 },
                          ),
                          b.add(() => {
                            var a;
                            (e !==
                              (null != (a = window.scrollY)
                                ? a
                                : window.pageYOffset) && window.scrollTo(0, e),
                              f &&
                                f.isConnected &&
                                (f.scrollIntoView({ block: "nearest" }),
                                (f = null)));
                          }));
                      });
                    },
                  }
                : {},
              {
                before({ doc: a }) {
                  var c;
                  let d = a.documentElement;
                  b = Math.max(
                    0,
                    (null != (c = a.defaultView) ? c : window).innerWidth -
                      d.clientWidth,
                  );
                },
                after({ doc: a, d: c }) {
                  let d = a.documentElement,
                    e = Math.max(0, d.clientWidth - d.offsetWidth),
                    f = Math.max(0, b - e);
                  c.style(d, "paddingRight", `${f}px`);
                },
              },
              {
                before({ doc: a, d: b }) {
                  b.style(a.documentElement, "overflow", "hidden");
                },
              },
            ];
          (d.forEach(({ before: a }) => (null == a ? void 0 : a(c))),
            d.forEach(({ after: a }) => (null == a ? void 0 : a(c))));
        },
        SCROLL_ALLOW({ d: a }) {
          a.dispose();
        },
        TEARDOWN({ doc: a }) {
          this.delete(a);
        },
      }),
      (l = C()),
      (m = new Set()),
      {
        getSnapshot: () => l,
        subscribe: (a) => (m.add(a), () => m.delete(a)),
        dispatch(a, ...b) {
          let c = D[a].call(l, ...b);
          c && ((l = c), m.forEach((a) => a()));
        },
      });
    function bd() {
      let a,
        b =
          ((a = "undefined" == typeof document),
          "useSyncExternalStore" in U &&
            (0, U.useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !a,
            )),
        [c, d] = U.useState(Y.isHandoffComplete);
      return (
        c && !1 === Y.isHandoffComplete && d(!1),
        U.useEffect(() => {
          !0 !== c && d(!0);
        }, [c]),
        U.useEffect(() => Y.handoff(), []),
        !b && c
      );
    }
    function be(a) {
      return (0, U.useMemo)(() => a, Object.values(a));
    }
    bc.subscribe(() => {
      let a = bc.getSnapshot(),
        b = new Map();
      for (let [c] of a) b.set(c, c.documentElement.style.overflow);
      for (let c of a.values()) {
        let a = "hidden" === b.get(c.doc),
          d = 0 !== c.count;
        (((d && !a) || (!d && a)) &&
          bc.dispatch(c.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", c),
          0 === c.count && bc.dispatch("TEARDOWN", c));
      }
    });
    let bf = Symbol();
    function bg(a, b = !0) {
      return Object.assign(a, { [bf]: b });
    }
    function bh(...a) {
      let b = (0, U.useRef)(a);
      (0, U.useEffect)(() => {
        b.current = a;
      }, [a]);
      let c = au((a) => {
        for (let c of b.current)
          null != c && ("function" == typeof c ? c(a) : (c.current = a));
      });
      return a.every((a) => null == a || (null == a ? void 0 : a[bf]))
        ? void 0
        : c;
    }
    let bi = (0, U.createContext)(() => {});
    function bj({ value: a, children: b }) {
      return U.default.createElement(bi.Provider, { value: a }, b);
    }
    let bk = (0, U.createContext)(null);
    bk.displayName = "OpenClosedContext";
    var bl =
      (((n = bl || {})[(n.Open = 1)] = "Open"),
      (n[(n.Closed = 2)] = "Closed"),
      (n[(n.Closing = 4)] = "Closing"),
      (n[(n.Opening = 8)] = "Opening"),
      n);
    function bm() {
      return (0, U.useContext)(bk);
    }
    function bn({ value: a, children: b }) {
      return U.default.createElement(bk.Provider, { value: a }, b);
    }
    function bo({ children: a }) {
      return U.default.createElement(bk.Provider, { value: null }, a);
    }
    let bp = (0, U.createContext)(!1);
    function bq(a) {
      return U.default.createElement(
        bp.Provider,
        { value: a.force },
        a.children,
      );
    }
    let br = (0, U.createContext)(void 0),
      bs = (0, U.createContext)(null);
    bs.displayName = "DescriptionContext";
    let bt = Object.assign(
      a2(function (a, b) {
        let c = (0, U.useId)(),
          d = (0, U.useContext)(br),
          { id: e = `headlessui-description-${c}`, ...f } = a,
          g = (function a() {
            let b = (0, U.useContext)(bs);
            if (null === b) {
              let b = Error(
                "You used a <Description /> component, but it is not inside a relevant parent.",
              );
              throw (
                Error.captureStackTrace && Error.captureStackTrace(b, a),
                b
              );
            }
            return b;
          })(),
          h = bh(b);
        Z(() => g.register(e), [e, g.register]);
        let i = be({ ...g.slot, disabled: d || !1 }),
          j = { ref: h, ...g.props, id: e };
        return aZ()({
          ourProps: j,
          theirProps: f,
          slot: i,
          defaultTag: "p",
          name: g.name || "Description",
        });
      }),
      {},
    );
    function bu() {
      let [a] = (0, U.useState)(ac);
      return ((0, U.useEffect)(() => () => a.dispose(), [a]), a);
    }
    function bv() {
      let a = (0, U.useRef)(!1);
      return (
        Z(
          () => (
            (a.current = !0),
            () => {
              a.current = !1;
            }
          ),
          [],
        ),
        a
      );
    }
    function bw(a) {
      let b = au(a),
        c = (0, U.useRef)(!1);
      (0, U.useEffect)(
        () => (
          (c.current = !1),
          () => {
            ((c.current = !0),
              ab(() => {
                c.current && b();
              }));
          }
        ),
        [b],
      );
    }
    var bx =
      (((o = bx || {})[(o.Forwards = 0)] = "Forwards"),
      (o[(o.Backwards = 1)] = "Backwards"),
      o);
    function by(a, b) {
      let c = (0, U.useRef)([]),
        d = au(a);
      (0, U.useEffect)(() => {
        let a = [...c.current];
        for (let [e, f] of b.entries())
          if (c.current[e] !== f) {
            let e = d(b, a);
            return ((c.current = b), e);
          }
      }, [d, ...b]);
    }
    let bz = [];
    function bA(a) {
      if (!a) return new Set();
      if ("function" == typeof a) return new Set(a());
      let b = new Set();
      for (let c of a.current) aE(c.current) && b.add(c.current);
      return b;
    }
    var bB =
      (((p = bB || {})[(p.None = 0)] = "None"),
      (p[(p.InitialFocus = 1)] = "InitialFocus"),
      (p[(p.TabLock = 2)] = "TabLock"),
      (p[(p.FocusLock = 4)] = "FocusLock"),
      (p[(p.RestoreFocus = 8)] = "RestoreFocus"),
      (p[(p.AutoFocus = 16)] = "AutoFocus"),
      p);
    let bC = Object.assign(
      a2(function (a, b) {
        let c,
          d = (0, U.useRef)(null),
          e = bh(d, b),
          {
            initialFocus: f,
            initialFocusFallback: g,
            containers: h,
            features: i = 15,
            ...j
          } = a;
        bd() || (i = 0);
        let k = aV(d.current);
        !(function (a, { ownerDocument: b }) {
          let c = !!(8 & a),
            d = (function (a = !0) {
              let b = (0, U.useRef)(bz.slice());
              return (
                by(
                  ([a], [c]) => {
                    (!0 === c &&
                      !1 === a &&
                      ab(() => {
                        b.current.splice(0);
                      }),
                      !1 === c && !0 === a && (b.current = bz.slice()));
                  },
                  [a, bz, b],
                ),
                au(() => {
                  var a;
                  return null !=
                    (a = b.current.find((a) => null != a && a.isConnected))
                    ? a
                    : null;
                })
              );
            })(c);
          (by(() => {
            var a;
            c || (aA((a = null == b ? void 0 : b.body)) === a && aP(d()));
          }, [c]),
            bw(() => {
              c && aP(d());
            }));
        })(i, { ownerDocument: k });
        let l = (function (
          a,
          {
            ownerDocument: b,
            container: c,
            initialFocus: d,
            initialFocusFallback: e,
          },
        ) {
          let f = (0, U.useRef)(null),
            g = ax(!!(1 & a), "focus-trap#initial-focus"),
            h = bv();
          return (
            by(() => {
              if (0 === a) return;
              if (!g) {
                null != e && e.current && aP(e.current);
                return;
              }
              let i = c.current;
              i &&
                ab(() => {
                  if (!h.current) return;
                  let c = null == b ? void 0 : b.activeElement;
                  if (null != d && d.current) {
                    if ((null == d ? void 0 : d.current) === c) {
                      f.current = c;
                      return;
                    }
                  } else if (i.contains(c)) {
                    f.current = c;
                    return;
                  }
                  if (null != d && d.current) aP(d.current);
                  else {
                    if (16 & a) {
                      if (aQ(i, aK.First | aK.AutoFocus) !== aL.Error) return;
                    } else if (aQ(i, aK.First) !== aL.Error) return;
                    if (
                      null != e &&
                      e.current &&
                      (aP(e.current),
                      (null == b ? void 0 : b.activeElement) === e.current)
                    )
                      return;
                    console.warn(
                      "There are no focusable elements inside the <FocusTrap />",
                    );
                  }
                  f.current = null == b ? void 0 : b.activeElement;
                });
            }, [e, g, a]),
            f
          );
        })(i, {
          ownerDocument: k,
          container: d,
          initialFocus: f,
          initialFocusFallback: g,
        });
        !(function (
          a,
          {
            ownerDocument: b,
            container: c,
            containers: d,
            previousActiveElement: e,
          },
        ) {
          let f = bv(),
            g = !!(4 & a);
          _(
            null == b ? void 0 : b.defaultView,
            "focus",
            (a) => {
              if (!g || !f.current) return;
              let b = bA(d);
              aF(c.current) && b.add(c.current);
              let h = e.current;
              if (!h) return;
              let i = a.target;
              aF(i)
                ? bD(b, i)
                  ? ((e.current = i), aP(i))
                  : (a.preventDefault(), a.stopPropagation(), aP(h))
                : aP(e.current);
            },
            !0,
          );
        })(i, {
          ownerDocument: k,
          container: d,
          containers: h,
          previousActiveElement: l,
        });
        let m =
            ((c = (0, U.useRef)(0)),
            aU(
              !0,
              "keydown",
              (a) => {
                "Tab" === a.key && (c.current = +!!a.shiftKey);
              },
              !0,
            ),
            c),
          n = au((a) => {
            if (!aF(d.current)) return;
            let b = d.current;
            am(m.current, {
              [bx.Forwards]: () => {
                aQ(b, aK.First, { skipElements: [a.relatedTarget, g] });
              },
              [bx.Backwards]: () => {
                aQ(b, aK.Last, { skipElements: [a.relatedTarget, g] });
              },
            });
          }),
          o = ax(!!(2 & i), "focus-trap#tab-lock"),
          p = bu(),
          q = (0, U.useRef)(!1),
          r = aZ();
        return U.default.createElement(
          U.default.Fragment,
          null,
          o &&
            U.default.createElement(a7, {
              as: "button",
              type: "button",
              "data-headlessui-focus-guard": !0,
              onFocus: n,
              features: a6.Focusable,
            }),
          r({
            ourProps: {
              ref: e,
              onKeyDown(a) {
                "Tab" == a.key &&
                  ((q.current = !0),
                  p.requestAnimationFrame(() => {
                    q.current = !1;
                  }));
              },
              onBlur(a) {
                if (!(4 & i)) return;
                let b = bA(h);
                aF(d.current) && b.add(d.current);
                let c = a.relatedTarget;
                aG(c) &&
                  "true" !== c.dataset.headlessuiFocusGuard &&
                  (bD(b, c) ||
                    (q.current
                      ? aQ(
                          d.current,
                          am(m.current, {
                            [bx.Forwards]: () => aK.Next,
                            [bx.Backwards]: () => aK.Previous,
                          }) | aK.WrapAround,
                          { relativeTo: a.target },
                        )
                      : aG(a.target) && aP(a.target)));
              },
            },
            theirProps: j,
            defaultTag: "div",
            name: "FocusTrap",
          }),
          o &&
            U.default.createElement(a7, {
              as: "button",
              type: "button",
              "data-headlessui-focus-guard": !0,
              onFocus: n,
              features: a6.Focusable,
            }),
        );
      }),
      { features: bB },
    );
    function bD(a, b) {
      for (let c of a) if (c.contains(b)) return !0;
      return !1;
    }
    var bE = a.i(19308);
    let bF = U.Fragment,
      bG = a2(function (a, b) {
        let { ownerDocument: c = null, ...d } = a,
          e = (0, U.useRef)(null),
          f = bh(
            bg((a) => {
              e.current = a;
            }),
            b,
          ),
          g = aV(e.current),
          h = (function (a) {
            let b = (0, U.useContext)(bp),
              c = (0, U.useContext)(bI),
              [d, e] = (0, U.useState)(() => {
                var d;
                if (!b && null !== c) return null != (d = c.current) ? d : null;
                if (Y.isServer) return null;
                let e =
                  null == a
                    ? void 0
                    : a.getElementById("headlessui-portal-root");
                if (e) return e;
                if (null === a) return null;
                let f = a.createElement("div");
                return (
                  f.setAttribute("id", "headlessui-portal-root"),
                  a.body.appendChild(f)
                );
              });
            return (
              (0, U.useEffect)(() => {
                null !== d &&
                  ((null != a && a.body.contains(d)) ||
                    null == a ||
                    a.body.appendChild(d));
              }, [d, a]),
              (0, U.useEffect)(() => {
                b || (null !== c && e(c.current));
              }, [c, e, b]),
              d
            );
          })(null != c ? c : g),
          i = (0, U.useContext)(bJ),
          j = bu(),
          k = aZ();
        return (
          bw(() => {
            var a;
            h &&
              h.childNodes.length <= 0 &&
              (null == (a = h.parentElement) || a.removeChild(h));
          }),
          h
            ? (0, bE.createPortal)(
                U.default.createElement(
                  "div",
                  {
                    "data-headlessui-portal": "",
                    ref: (a) => {
                      (j.dispose(), i && a && j.add(i.register(a)));
                    },
                  },
                  k({
                    ourProps: { ref: f },
                    theirProps: d,
                    slot: {},
                    defaultTag: bF,
                    name: "Portal",
                  }),
                ),
                h,
              )
            : null
        );
      }),
      bH = U.Fragment,
      bI = (0, U.createContext)(null),
      bJ = (0, U.createContext)(null),
      bK = a2(function (a, b) {
        let c = bh(b),
          { enabled: d = !0, ownerDocument: e, ...f } = a,
          g = aZ();
        return d
          ? U.default.createElement(bG, { ...f, ownerDocument: e, ref: c })
          : g({
              ourProps: { ref: c },
              theirProps: f,
              slot: {},
              defaultTag: bF,
              name: "Portal",
            });
      }),
      bL = a2(function (a, b) {
        let { target: c, ...d } = a,
          e = { ref: bh(b) },
          f = aZ();
        return U.default.createElement(
          bI.Provider,
          { value: c },
          f({
            ourProps: e,
            theirProps: d,
            defaultTag: bH,
            name: "Popover.Group",
          }),
        );
      }),
      bM = Object.assign(bK, { Group: bL });
    "undefined" != typeof process &&
      "undefined" != typeof globalThis &&
      "undefined" != typeof Element &&
      (null == (N = null == process ? void 0 : process.env)
        ? void 0
        : N.NODE_ENV) === "test" &&
      void 0 ===
        (null == (O = null == Element ? void 0 : Element.prototype)
          ? void 0
          : O.getAnimations) &&
      (Element.prototype.getAnimations = function () {
        return (
          console.warn(
            [
              "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
              "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
              "",
              "Example usage:",
              "```js",
              "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
              "mockAnimationsApi()",
              "```",
            ].join(`
`),
          ),
          []
        );
      });
    var bN =
      (((q = bN || {})[(q.None = 0)] = "None"),
      (q[(q.Closed = 1)] = "Closed"),
      (q[(q.Enter = 2)] = "Enter"),
      (q[(q.Leave = 4)] = "Leave"),
      q);
    function bO(a) {
      let b = {};
      for (let c in a) !0 === a[c] && (b[`data-${c}`] = "");
      return b;
    }
    function bP(a, b, c, d) {
      let [e, f] = (0, U.useState)(c),
        {
          hasFlag: g,
          addFlag: h,
          removeFlag: i,
        } = (function (a = 0) {
          let [b, c] = (0, U.useState)(a),
            d = (0, U.useCallback)((a) => c(a), []),
            e = (0, U.useCallback)((a) => c((b) => b | a), []),
            f = (0, U.useCallback)((a) => (b & a) === a, [b]);
          return {
            flags: b,
            setFlag: d,
            addFlag: e,
            hasFlag: f,
            removeFlag: (0, U.useCallback)((a) => c((b) => b & ~a), []),
            toggleFlag: (0, U.useCallback)((a) => c((b) => b ^ a), []),
          };
        })(a && e ? 3 : 0),
        j = (0, U.useRef)(!1),
        k = (0, U.useRef)(!1);
      return (
        Z(() => {
          var e;
          if (a) {
            if ((c && f(!0), !b)) {
              c && h(3);
              return;
            }
            return (
              null == (e = null == d ? void 0 : d.start) || e.call(d, c),
              (function (a, { prepare: b, run: c, done: d, inFlight: e }) {
                let f = ac();
                return (
                  (function (a, { inFlight: b, prepare: c }) {
                    if (null != b && b.current) return c();
                    let d = a.style.transition;
                    ((a.style.transition = "none"),
                      c(),
                      a.offsetHeight,
                      (a.style.transition = d));
                  })(a, { prepare: b, inFlight: e }),
                  f.nextFrame(() => {
                    (c(),
                      f.requestAnimationFrame(() => {
                        f.add(
                          (function (a, b) {
                            var c, d;
                            let e = ac();
                            if (!a) return e.dispose;
                            let f = !1;
                            e.add(() => {
                              f = !0;
                            });
                            let g =
                              null !=
                              (d =
                                null == (c = a.getAnimations)
                                  ? void 0
                                  : c
                                      .call(a)
                                      .filter(
                                        (a) => a instanceof CSSTransition,
                                      ))
                                ? d
                                : [];
                            return (
                              0 === g.length
                                ? b()
                                : Promise.allSettled(
                                    g.map((a) => a.finished),
                                  ).then(() => {
                                    f || b();
                                  }),
                              e.dispose
                            );
                          })(a, d),
                        );
                      }));
                  }),
                  f.dispose
                );
              })(b, {
                inFlight: j,
                prepare() {
                  (k.current ? (k.current = !1) : (k.current = j.current),
                    (j.current = !0),
                    k.current || (c ? (h(3), i(4)) : (h(4), i(2))));
                },
                run() {
                  k.current
                    ? c
                      ? (i(3), h(4))
                      : (i(4), h(3))
                    : c
                      ? i(1)
                      : h(1);
                },
                done() {
                  var a, e, g, h;
                  (k.current &&
                    (null !=
                    (h =
                      null == (g = (e = b).getAnimations) ? void 0 : g.call(e))
                      ? h
                      : []
                    ).some(
                      (a) =>
                        a instanceof CSSTransition &&
                        "finished" !== a.playState,
                    )) ||
                    ((j.current = !1),
                    i(7),
                    c || f(!1),
                    null == (a = null == d ? void 0 : d.end) || a.call(d, c));
                },
              })
            );
          }
        }, [a, c, b, bu()]),
        a
          ? [
              e,
              {
                closed: g(1),
                enter: g(2),
                leave: g(4),
                transition: g(2) || g(4),
              },
            ]
          : [
              c,
              {
                closed: void 0,
                enter: void 0,
                leave: void 0,
                transition: void 0,
              },
            ]
      );
    }
    function bQ(a) {
      var b;
      return (
        !!(
          a.enter ||
          a.enterFrom ||
          a.enterTo ||
          a.leave ||
          a.leaveFrom ||
          a.leaveTo
        ) ||
        !a5(null != (b = a.as) ? b : bW) ||
        1 === U.default.Children.count(a.children)
      );
    }
    let bR = (0, U.createContext)(null);
    bR.displayName = "TransitionContext";
    var bS = (((r = bS || {}).Visible = "visible"), (r.Hidden = "hidden"), r);
    let bT = (0, U.createContext)(null);
    function bU(a) {
      return "children" in a
        ? bU(a.children)
        : a.current
            .filter(({ el: a }) => null !== a.current)
            .filter(({ state: a }) => "visible" === a).length > 0;
    }
    function bV(a, b) {
      let c = $(a),
        d = (0, U.useRef)([]),
        e = bv(),
        f = bu(),
        g = au((a, b = aY.Hidden) => {
          let g = d.current.findIndex(({ el: b }) => b === a);
          -1 !== g &&
            (am(b, {
              [aY.Unmount]() {
                d.current.splice(g, 1);
              },
              [aY.Hidden]() {
                d.current[g].state = "hidden";
              },
            }),
            f.microTask(() => {
              var a;
              !bU(d) && e.current && (null == (a = c.current) || a.call(c));
            }));
        }),
        h = au((a) => {
          let b = d.current.find(({ el: b }) => b === a);
          return (
            b
              ? "visible" !== b.state && (b.state = "visible")
              : d.current.push({ el: a, state: "visible" }),
            () => g(a, aY.Unmount)
          );
        }),
        i = (0, U.useRef)([]),
        j = (0, U.useRef)(Promise.resolve()),
        k = (0, U.useRef)({ enter: [], leave: [] }),
        l = au((a, c, d) => {
          (i.current.splice(0),
            b &&
              (b.chains.current[c] = b.chains.current[c].filter(
                ([b]) => b !== a,
              )),
            null == b ||
              b.chains.current[c].push([
                a,
                new Promise((a) => {
                  i.current.push(a);
                }),
              ]),
            null == b ||
              b.chains.current[c].push([
                a,
                new Promise((a) => {
                  Promise.all(k.current[c].map(([a, b]) => b)).then(() => a());
                }),
              ]),
            "enter" === c
              ? (j.current = j.current
                  .then(() => (null == b ? void 0 : b.wait.current))
                  .then(() => d(c)))
              : d(c));
        }),
        m = au((a, b, c) => {
          Promise.all(k.current[b].splice(0).map(([a, b]) => b))
            .then(() => {
              var a;
              null == (a = i.current.shift()) || a();
            })
            .then(() => c(b));
        });
      return (0, U.useMemo)(
        () => ({
          children: d,
          register: h,
          unregister: g,
          onStart: l,
          onStop: m,
          wait: j,
          chains: k,
        }),
        [h, g, d, l, m, k, j],
      );
    }
    bT.displayName = "NestingContext";
    let bW = U.Fragment,
      bX = aX.RenderStrategy,
      bY = a2(function (a, b) {
        let { show: c, appear: d = !1, unmount: e = !0, ...f } = a,
          g = (0, U.useRef)(null),
          h = bh(...(bQ(a) ? [g, b] : null === b ? [] : [b]));
        bd();
        let i = bm();
        if (
          (void 0 === c && null !== i && (c = (i & bl.Open) === bl.Open),
          void 0 === c)
        )
          throw Error(
            "A <Transition /> is used but it is missing a `show={true | false}` prop.",
          );
        let [j, k] = (0, U.useState)(c ? "visible" : "hidden"),
          l = bV(() => {
            c || k("hidden");
          }),
          [m, n] = (0, U.useState)(!0),
          o = (0, U.useRef)([c]);
        Z(() => {
          !1 !== m &&
            o.current[o.current.length - 1] !== c &&
            (o.current.push(c), n(!1));
        }, [o, c]);
        let p = (0, U.useMemo)(
          () => ({ show: c, appear: d, initial: m }),
          [c, d, m],
        );
        Z(() => {
          c ? k("visible") : bU(l) || null === g.current || k("hidden");
        }, [c, l]);
        let q = { unmount: e },
          r = au(() => {
            var b;
            (m && n(!1), null == (b = a.beforeEnter) || b.call(a));
          }),
          s = au(() => {
            var b;
            (m && n(!1), null == (b = a.beforeLeave) || b.call(a));
          }),
          t = aZ();
        return U.default.createElement(
          bT.Provider,
          { value: l },
          U.default.createElement(
            bR.Provider,
            { value: p },
            t({
              ourProps: {
                ...q,
                as: U.Fragment,
                children: U.default.createElement(bZ, {
                  ref: h,
                  ...q,
                  ...f,
                  beforeEnter: r,
                  beforeLeave: s,
                }),
              },
              theirProps: {},
              defaultTag: U.Fragment,
              features: bX,
              visible: "visible" === j,
              name: "Transition",
            }),
          ),
        );
      }),
      bZ = a2(function (a, b) {
        var c, d;
        let {
            transition: e = !0,
            beforeEnter: f,
            afterEnter: g,
            beforeLeave: h,
            afterLeave: i,
            enter: j,
            enterFrom: k,
            enterTo: l,
            entered: m,
            leave: n,
            leaveFrom: o,
            leaveTo: p,
            ...q
          } = a,
          [r, s] = (0, U.useState)(null),
          t = (0, U.useRef)(null),
          u = bQ(a),
          v = bh(...(u ? [t, b, s] : null === b ? [] : [b])),
          w = null == (c = q.unmount) || c ? aY.Unmount : aY.Hidden,
          {
            show: x,
            appear: y,
            initial: z,
          } = (function () {
            let a = (0, U.useContext)(bR);
            if (null === a)
              throw Error(
                "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
              );
            return a;
          })(),
          [A, B] = (0, U.useState)(x ? "visible" : "hidden"),
          C = (function () {
            let a = (0, U.useContext)(bT);
            if (null === a)
              throw Error(
                "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
              );
            return a;
          })(),
          { register: D, unregister: E } = C;
        (Z(() => D(t), [D, t]),
          Z(() => {
            if (w === aY.Hidden && t.current)
              return x && "visible" !== A
                ? void B("visible")
                : am(A, { hidden: () => E(t), visible: () => D(t) });
          }, [A, t, D, E, x, w]));
        let F = bd();
        Z(() => {
          if (u && F && "visible" === A && null === t.current)
            throw Error(
              "Did you forget to passthrough the `ref` to the actual DOM node?",
            );
        }, [t, A, F, u]);
        let G = z && !y,
          H = y && x && z,
          I = (0, U.useRef)(!1),
          J = bV(() => {
            I.current || (B("hidden"), E(t));
          }, C),
          K = au((a) => {
            ((I.current = !0),
              J.onStart(t, a ? "enter" : "leave", (a) => {
                "enter" === a
                  ? null == f || f()
                  : "leave" === a && (null == h || h());
              }));
          }),
          L = au((a) => {
            let b = a ? "enter" : "leave";
            ((I.current = !1),
              J.onStop(t, b, (a) => {
                "enter" === a
                  ? null == g || g()
                  : "leave" === a && (null == i || i());
              }),
              "leave" !== b || bU(J) || (B("hidden"), E(t)));
          });
        (0, U.useEffect)(() => {
          (u && e) || (K(x), L(x));
        }, [x, u, e]);
        let [, M] = bP(!(!e || !u || !F || G), r, x, { start: K, end: L }),
          N = a3({
            ref: v,
            className:
              (null ==
              (d = aW(
                q.className,
                H && j,
                H && k,
                M.enter && j,
                M.enter && M.closed && k,
                M.enter && !M.closed && l,
                M.leave && n,
                M.leave && !M.closed && o,
                M.leave && M.closed && p,
                !M.transition && x && m,
              ))
                ? void 0
                : d.trim()) || void 0,
            ...bO(M),
          }),
          O = 0;
        ("visible" === A && (O |= bl.Open),
          "hidden" === A && (O |= bl.Closed),
          x && "hidden" === A && (O |= bl.Opening),
          x || "visible" !== A || (O |= bl.Closing));
        let P = aZ();
        return U.default.createElement(
          bT.Provider,
          { value: J },
          U.default.createElement(
            bn,
            { value: O },
            P({
              ourProps: N,
              theirProps: q,
              defaultTag: bW,
              features: bX,
              visible: "visible" === A,
              name: "Transition.Child",
            }),
          ),
        );
      }),
      b$ = a2(function (a, b) {
        let c = null !== (0, U.useContext)(bR),
          d = null !== bm();
        return U.default.createElement(
          U.default.Fragment,
          null,
          !c && d
            ? U.default.createElement(bY, { ref: b, ...a })
            : U.default.createElement(bZ, { ref: b, ...a }),
        );
      }),
      b_ = Object.assign(bY, { Child: b$, Root: bY });
    var b0 =
        (((s = b0 || {})[(s.Open = 0)] = "Open"),
        (s[(s.Closed = 1)] = "Closed"),
        s),
      b1 = (((t = b1 || {})[(t.SetTitleId = 0)] = "SetTitleId"), t);
    let b2 = {
        0: (a, b) => (a.titleId === b.id ? a : { ...a, titleId: b.id }),
      },
      b3 = (0, U.createContext)(null);
    function b4(a) {
      let b = (0, U.useContext)(b3);
      if (null === b) {
        let b = Error(`<${a} /> is missing a parent <Dialog /> component.`);
        throw (Error.captureStackTrace && Error.captureStackTrace(b, b4), b);
      }
      return b;
    }
    function b5(a, b) {
      return am(b.type, b2, a, b);
    }
    b3.displayName = "DialogContext";
    let b6 = a2(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = (0, U.useId)(),
          {
            id: n = `headlessui-dialog-${m}`,
            open: o,
            onClose: p,
            initialFocus: q,
            role: r = "dialog",
            autoFocus: s = !0,
            __demoMode: t = !1,
            unmount: u = !1,
            ...v
          } = a,
          w = (0, U.useRef)(!1);
        r =
          "dialog" === r || "alertdialog" === r
            ? r
            : (w.current ||
                ((w.current = !0),
                console.warn(
                  `Invalid role [${r}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
                )),
              "dialog");
        let x = bm();
        void 0 === o && null !== x && (o = (x & bl.Open) === bl.Open);
        let y = (0, U.useRef)(null),
          z = bh(y, b),
          A = aV(y.current),
          B = +!o,
          [C, D] = (0, U.useReducer)(b5, {
            titleId: null,
            descriptionId: null,
            panelRef: (0, U.createRef)(),
          }),
          E = au(() => p(!1)),
          F = au((a) => D({ type: 0, id: a })),
          G = !!bd() && 0 === B,
          [H, I] =
            ((c = (0, U.useContext)(bJ)),
            (d = (0, U.useRef)([])),
            (e = au(
              (a) => (d.current.push(a), c && c.register(a), () => f(a)),
            )),
            (f = au((a) => {
              let b = d.current.indexOf(a);
              (-1 !== b && d.current.splice(b, 1), c && c.unregister(a));
            })),
            (g = (0, U.useMemo)(
              () => ({ register: e, unregister: f, portals: d }),
              [e, f, d],
            )),
            [
              d,
              (0, U.useMemo)(
                () =>
                  function ({ children: a }) {
                    return U.default.createElement(
                      bJ.Provider,
                      { value: g },
                      a,
                    );
                  },
                [g],
              ),
            ]),
          J = ba(),
          { resolveContainers: K } = (function ({
            defaultContainers: a = [],
            portals: b,
            mainTreeNode: c,
          } = {}) {
            let d = au(() => {
              var d, e;
              let f = ay(c),
                g = [];
              for (let b of a)
                null !== b &&
                  (aE(b)
                    ? g.push(b)
                    : "current" in b && aE(b.current) && g.push(b.current));
              if (null != b && b.current) for (let a of b.current) g.push(a);
              for (let a of null !=
              (d =
                null == f ? void 0 : f.querySelectorAll("html > *, body > *"))
                ? d
                : [])
                a !== document.body &&
                  a !== document.head &&
                  aE(a) &&
                  "headlessui-portal-root" !== a.id &&
                  ((c &&
                    (a.contains(c) ||
                      a.contains(
                        null == (e = null == c ? void 0 : c.getRootNode())
                          ? void 0
                          : e.host,
                      ))) ||
                    g.some((b) => a.contains(b)) ||
                    g.push(a));
              return g;
            });
            return {
              resolveContainers: d,
              contains: au((a) => d().some((b) => b.contains(a))),
            };
          })({
            mainTreeNode: J,
            portals: H,
            defaultContainers: [
              {
                get current() {
                  var L;
                  return null != (L = C.panelRef.current) ? L : y.current;
                },
              },
            ],
          }),
          M = null !== x && (x & bl.Closing) === bl.Closing;
        !(function (a, { allowed: b, disallowed: c } = {}) {
          let d = ax(a, "inert-others");
          Z(() => {
            var a, e;
            if (!d) return;
            let f = ac();
            for (let b of null != (a = null == c ? void 0 : c()) ? a : [])
              b && f.add(aD(b));
            let g = null != (e = null == b ? void 0 : b()) ? e : [];
            for (let a of g) {
              if (!a) continue;
              let b = ay(a);
              if (!b) continue;
              let c = a.parentElement;
              for (; c && c !== b.body; ) {
                for (let a of c.children)
                  g.some((b) => a.contains(b)) || f.add(aD(a));
                c = c.parentElement;
              }
            }
            return f.dispose;
          }, [d, b, c]);
        })(!t && !M && G, {
          allowed: au(() => {
            var a, b;
            return [
              null !=
              (b =
                null == (a = y.current)
                  ? void 0
                  : a.closest("[data-headlessui-portal]"))
                ? b
                : null,
            ];
          }),
          disallowed: au(() => {
            var a;
            return [
              null !=
              (a =
                null == J
                  ? void 0
                  : J.closest("body > *:not(#headlessui-portal-root)"))
                ? a
                : null,
            ];
          }),
        });
        let N = as.get(null);
        Z(() => {
          if (G) return (N.actions.push(n), () => N.actions.pop(n));
        }, [N, n, G]);
        let O = av(
          N,
          (0, U.useCallback)((a) => N.selectors.isTop(a, n), [N, n]),
        );
        ((h = $((a) => {
          (a.preventDefault(), E());
        })),
          (i = (0, U.useCallback)(
            function (a, b) {
              if (a.defaultPrevented) return;
              let c = b(a);
              if (null !== c && c.getRootNode().contains(c) && c.isConnected) {
                for (let b of (function a(b) {
                  return "function" == typeof b
                    ? a(b())
                    : Array.isArray(b) || b instanceof Set
                      ? b
                      : [b];
                })(K))
                  if (
                    null !== b &&
                    (b.contains(c) ||
                      (a.composed && a.composedPath().includes(b)))
                  )
                    return;
                return (
                  (function (a, b = 0) {
                    var c;
                    return (
                      a !== (null == (c = ay(a)) ? void 0 : c.body) &&
                      am(b, {
                        0: () => a.matches(aI),
                        1() {
                          let b = a;
                          for (; null !== b; ) {
                            if (b.matches(aI)) return !0;
                            b = b.parentElement;
                          }
                          return !1;
                        },
                      })
                    );
                  })(c, aN.Loose) ||
                    -1 === c.tabIndex ||
                    a.preventDefault(),
                  h.current(a, c)
                );
              }
            },
            [h, K],
          )),
          (j = (0, U.useRef)(null)),
          aT(
            O,
            "pointerdown",
            (a) => {
              var b, c;
              aS() ||
                (j.current =
                  (null ==
                  (c = null == (b = a.composedPath) ? void 0 : b.call(a))
                    ? void 0
                    : c[0]) || a.target);
            },
            !0,
          ),
          aT(
            O,
            "pointerup",
            (a) => {
              if (aS() || !j.current) return;
              let b = j.current;
              return ((j.current = null), i(a, () => b));
            },
            !0,
          ),
          (k = (0, U.useRef)({ x: 0, y: 0 })),
          aT(
            O,
            "touchstart",
            (a) => {
              ((k.current.x = a.touches[0].clientX),
                (k.current.y = a.touches[0].clientY));
            },
            !0,
          ),
          aT(
            O,
            "touchend",
            (a) => {
              let b = {
                x: a.changedTouches[0].clientX,
                y: a.changedTouches[0].clientY,
              };
              if (
                !(
                  Math.abs(b.x - k.current.x) >= 30 ||
                  Math.abs(b.y - k.current.y) >= 30
                )
              )
                return i(a, () => (aG(a.target) ? a.target : null));
            },
            !0,
          ),
          aU(
            O,
            "blur",
            (a) =>
              i(a, () => {
                var a;
                return aF((a = window.document.activeElement)) &&
                  "IFRAME" === a.nodeName
                  ? window.document.activeElement
                  : null;
              }),
            !0,
          ),
          (function (
            a,
            b = "undefined" != typeof document ? document.defaultView : null,
            c,
          ) {
            let d = ax(a, "escape");
            _(b, "keydown", (a) => {
              d && (a.defaultPrevented || (a.key === V.Escape && c(a)));
            });
          })(O, null == A ? void 0 : A.defaultView, (a) => {
            (a.preventDefault(),
              a.stopPropagation(),
              document.activeElement &&
                "blur" in document.activeElement &&
                "function" == typeof document.activeElement.blur &&
                document.activeElement.blur(),
              E());
          }),
          (function (a, b, c = () => [document.body]) {
            !(function (a, b, c = () => ({ containers: [] })) {
              let d = (0, U.useSyncExternalStore)(
                  bc.subscribe,
                  bc.getSnapshot,
                  bc.getSnapshot,
                ),
                e = b ? d.get(b) : void 0;
              (e && e.count,
                Z(() => {
                  if (!(!b || !a))
                    return (
                      bc.dispatch("PUSH", b, c),
                      () => bc.dispatch("POP", b, c)
                    );
                }, [a, b]));
            })(ax(a, "scroll-lock"), b, (a) => {
              var b;
              return {
                containers: [...(null != (b = a.containers) ? b : []), c],
              };
            });
          })(!t && !M && G, A, K),
          (l = $((a) => {
            let b = a.getBoundingClientRect();
            0 === b.x && 0 === b.y && 0 === b.width && 0 === b.height && E();
          })),
          (0, U.useEffect)(() => {
            if (!G) return;
            let a = null === y ? null : aF(y) ? y : y.current;
            if (!a) return;
            let b = ac();
            if ("undefined" != typeof ResizeObserver) {
              let c = new ResizeObserver(() => l.current(a));
              (c.observe(a), b.add(() => c.disconnect()));
            }
            if ("undefined" != typeof IntersectionObserver) {
              let c = new IntersectionObserver(() => l.current(a));
              (c.observe(a), b.add(() => c.disconnect()));
            }
            return () => b.dispose();
          }, [y, l, G]));
        let [P, Q] = (function () {
            let [a, b] = (0, U.useState)([]);
            return [
              a.length > 0 ? a.join(" ") : void 0,
              (0, U.useMemo)(
                () =>
                  function (a) {
                    let c = au(
                        (a) => (
                          b((b) => [...b, a]),
                          () =>
                            b((b) => {
                              let c = b.slice(),
                                d = c.indexOf(a);
                              return (-1 !== d && c.splice(d, 1), c);
                            })
                        ),
                      ),
                      d = (0, U.useMemo)(
                        () => ({
                          register: c,
                          slot: a.slot,
                          name: a.name,
                          props: a.props,
                          value: a.value,
                        }),
                        [c, a.slot, a.name, a.props, a.value],
                      );
                    return U.default.createElement(
                      bs.Provider,
                      { value: d },
                      a.children,
                    );
                  },
                [b],
              ),
            ];
          })(),
          R = (0, U.useMemo)(
            () => [{ dialogState: B, close: E, setTitleId: F, unmount: u }, C],
            [B, E, F, u, C],
          ),
          S = be({ open: 0 === B }),
          T = {
            ref: z,
            id: n,
            role: r,
            tabIndex: -1,
            "aria-modal": t ? void 0 : 0 === B || void 0,
            "aria-labelledby": C.titleId,
            "aria-describedby": P,
            unmount: u,
          },
          W = !(function () {
            var a;
            let [b] = (0, U.useState)(() => null),
              [c, d] = (0, U.useState)(
                null != (a = null == b ? void 0 : b.matches) && a,
              );
            return (
              Z(() => {
                if (b)
                  return (
                    b.addEventListener("change", a),
                    () => b.removeEventListener("change", a)
                  );
                function a(a) {
                  d(a.matches);
                }
              }, [b]),
              c
            );
          })(),
          X = bB.None;
        G &&
          !t &&
          ((X |= bB.RestoreFocus),
          (X |= bB.TabLock),
          s && (X |= bB.AutoFocus),
          W && (X |= bB.InitialFocus));
        let Y = aZ();
        return U.default.createElement(
          bo,
          null,
          U.default.createElement(
            bq,
            { force: !0 },
            U.default.createElement(
              bM,
              null,
              U.default.createElement(
                b3.Provider,
                { value: R },
                U.default.createElement(
                  bL,
                  { target: y },
                  U.default.createElement(
                    bq,
                    { force: !1 },
                    U.default.createElement(
                      Q,
                      { slot: S },
                      U.default.createElement(
                        I,
                        null,
                        U.default.createElement(
                          bC,
                          {
                            initialFocus: q,
                            initialFocusFallback: y,
                            containers: K,
                            features: X,
                          },
                          U.default.createElement(
                            bj,
                            { value: E },
                            Y({
                              ourProps: T,
                              theirProps: v,
                              slot: S,
                              defaultTag: b7,
                              features: b8,
                              visible: 0 === B,
                              name: "Dialog",
                            }),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }),
      b7 = "div",
      b8 = aX.RenderStrategy | aX.Static,
      b9 = a2(function (a, b) {
        let { transition: c = !1, open: d, ...e } = a,
          f = bm(),
          g = a.hasOwnProperty("open") || null !== f,
          h = a.hasOwnProperty("onClose");
        if (!g && !h)
          throw Error(
            "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
          );
        if (!g)
          throw Error(
            "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
          );
        if (!h)
          throw Error(
            "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
          );
        if (!f && "boolean" != typeof a.open)
          throw Error(
            `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a.open}`,
          );
        if ("function" != typeof a.onClose)
          throw Error(
            `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a.onClose}`,
          );
        return (void 0 !== d || c) && !e.static
          ? U.default.createElement(
              a9,
              null,
              U.default.createElement(
                b_,
                { show: d, transition: c, unmount: e.unmount },
                U.default.createElement(b6, { ref: b, ...e }),
              ),
            )
          : U.default.createElement(
              a9,
              null,
              U.default.createElement(b6, { ref: b, open: d, ...e }),
            );
      }),
      ca = a2(function (a, b) {
        let c = (0, U.useId)(),
          {
            id: d = `headlessui-dialog-panel-${c}`,
            transition: e = !1,
            ...f
          } = a,
          [{ dialogState: g, unmount: h }, i] = b4("Dialog.Panel"),
          j = bh(b, i.panelRef),
          k = be({ open: 0 === g }),
          l = au((a) => {
            a.stopPropagation();
          }),
          m = e ? b$ : U.Fragment,
          n = aZ();
        return U.default.createElement(
          m,
          { ...(e ? { unmount: h } : {}) },
          n({
            ourProps: { ref: j, id: d, onClick: l },
            theirProps: f,
            slot: k,
            defaultTag: "div",
            name: "Dialog.Panel",
          }),
        );
      }),
      cb = Object.assign(b9, {
        Panel: ca,
        Title:
          (a2(function (a, b) {
            let { transition: c = !1, ...d } = a,
              [{ dialogState: e, unmount: f }] = b4("Dialog.Backdrop"),
              g = be({ open: 0 === e }),
              h = c ? b$ : U.Fragment,
              i = aZ();
            return U.default.createElement(
              h,
              { ...(c ? { unmount: f } : {}) },
              i({
                ourProps: { ref: b, "aria-hidden": !0 },
                theirProps: d,
                slot: g,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              }),
            );
          }),
          a2(function (a, b) {
            let c = (0, U.useId)(),
              { id: d = `headlessui-dialog-title-${c}`, ...e } = a,
              [{ dialogState: f, setTitleId: g }] = b4("Dialog.Title"),
              h = bh(b);
            (0, U.useEffect)(() => (g(d), () => g(null)), [d, g]);
            let i = be({ open: 0 === f });
            return aZ()({
              ourProps: { ref: h, id: d },
              theirProps: e,
              slot: i,
              defaultTag: "h2",
              name: "Dialog.Title",
            });
          })),
        Description: bt,
      }),
      cc =
        "undefined" != typeof document ? U.default.useLayoutEffect : () => {},
      cd = null != (P = U.default.useInsertionEffect) ? P : cc,
      ce = (a) => {
        var b;
        return null != (b = null == a ? void 0 : a.ownerDocument)
          ? b
          : document;
      };
    "undefined" != typeof Element && Element.prototype;
    let cf = [
      "input:not([disabled]):not([type=hidden])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "a[href]",
      "area[href]",
      "summary",
      "iframe",
      "object",
      "embed",
      "audio[controls]",
      "video[controls]",
      '[contenteditable]:not([contenteditable^="false"])',
      "permission",
    ];
    function cg(a) {
      return (
        (a.nativeEvent = a),
        (a.isDefaultPrevented = () => a.defaultPrevented),
        (a.isPropagationStopped = () => a.cancelBubble),
        (a.persist = () => {}),
        a
      );
    }
    function ch(a) {
      var b;
      let c,
        d = (0, U.useRef)({ isFocused: !1, observer: null });
      cc(() => {
        let a = d.current;
        return () => {
          a.observer && (a.observer.disconnect(), (a.observer = null));
        };
      }, []);
      let e =
        ((b = (b) => {
          null == a || a(b);
        }),
        (c = (0, U.useRef)(null)),
        cd(() => {
          c.current = b;
        }, [b]),
        (0, U.useCallback)((...a) => {
          let b = c.current;
          return null == b ? void 0 : b(...a);
        }, []));
      return (0, U.useCallback)(
        (a) => {
          if (
            a.target instanceof HTMLButtonElement ||
            a.target instanceof HTMLInputElement ||
            a.target instanceof HTMLTextAreaElement ||
            a.target instanceof HTMLSelectElement
          ) {
            d.current.isFocused = !0;
            let b = a.target;
            (b.addEventListener(
              "focusout",
              (a) => {
                ((d.current.isFocused = !1),
                  b.disabled && e(cg(a)),
                  d.current.observer &&
                    (d.current.observer.disconnect(),
                    (d.current.observer = null)));
              },
              { once: !0 },
            ),
              (d.current.observer = new MutationObserver(() => {
                if (d.current.isFocused && b.disabled) {
                  var a;
                  null == (a = d.current.observer) || a.disconnect();
                  let c =
                    b === document.activeElement
                      ? null
                      : document.activeElement;
                  (b.dispatchEvent(
                    new FocusEvent("blur", { relatedTarget: c }),
                  ),
                    b.dispatchEvent(
                      new FocusEvent("focusout", {
                        bubbles: !0,
                        relatedTarget: c,
                      }),
                    ));
                }
              })),
              d.current.observer.observe(b, {
                attributes: !0,
                attributeFilter: ["disabled"],
              }));
          }
        },
        [e],
      );
    }
    (cf.join(":not([hidden]),"),
      cf.push('[tabindex]:not([tabindex="-1"]):not([disabled])'),
      cf.join(':not([hidden]):not([tabindex="-1"]),'));
    function ci(a) {
      let b = null;
      return () => (null == b && (b = a()), b);
    }
    let cj = ci(function () {
        return !1;
      }),
      ck = ci(function () {
        return !1;
      }),
      cl = ci(function () {
        return cj() && navigator.maxTouchPoints > 1;
      }),
      cm = ci(function () {
        return ck() || cl();
      });
    (ci(function () {
      return cj() || cm();
    }),
      ci(function () {
        return !1;
      }),
      ci(function () {
        return !1;
      }));
    let cn = ci(function () {
      return !1;
    });
    ci(function () {
      return !1;
    });
    let co = { prefix: String(Math.round(1e10 * Math.random())), current: 0 };
    (U.default.createContext(co), U.default.createContext(!1), new WeakMap());
    U.default.useId;
    let cp = null,
      cq = new Set(),
      cr = new Map(),
      cs = !1,
      ct = !1,
      cu = { Tab: !0, Escape: !0 };
    function cv(a, b) {
      for (let c of cq) c(a, b);
    }
    function cw(a) {
      ((cs = !0),
        a.metaKey ||
          (!cj() && a.altKey) ||
          a.ctrlKey ||
          "Control" === a.key ||
          "Shift" === a.key ||
          "Meta" === a.key ||
          ((cp = "keyboard"), cv("keyboard", a)));
    }
    function cx(a) {
      ((cp = "pointer"),
        ("mousedown" === a.type || "pointerdown" === a.type) &&
          ((cs = !0), cv("pointer", a)));
    }
    function cy(a) {
      (("" === a.pointerType && a.isTrusted) ||
        (cn() && a.pointerType
          ? "click" === a.type && 1 === a.buttons
          : 0 === a.detail && !a.pointerType)) &&
        ((cs = !0), (cp = "virtual"));
    }
    function cz(a) {
      a.target !== window &&
        a.target !== document &&
        a.isTrusted &&
        (cs || ct || ((cp = "virtual"), cv("virtual", a)),
        (cs = !1),
        (ct = !1));
    }
    function cA() {
      ((cs = !1), (ct = !0));
    }
    function cB(a) {}
    function cC() {
      return "pointer" !== cp;
    }
    "undefined" != typeof document &&
      ("loading" !== (v = ce(void 0)).readyState
        ? cB(void 0)
        : ((u = () => {
            cB(void 0);
          }),
          v.addEventListener("DOMContentLoaded", u)),
      () => {
        var a, b;
        let c, d;
        return (
          (a = void 0),
          (b = u),
          (c =
            a && "window" in a && a.window === a
              ? a
              : ce(a).defaultView || window),
          (d = ce(a)),
          void (b && d.removeEventListener("DOMContentLoaded", b),
          cr.has(c) &&
            ((c.HTMLElement.prototype.focus = cr.get(c).focus),
            d.removeEventListener("keydown", cw, !0),
            d.removeEventListener("keyup", cw, !0),
            d.removeEventListener("click", cy, !0),
            c.removeEventListener("focus", cz, !0),
            c.removeEventListener("blur", cA, !1),
            "undefined" != typeof PointerEvent &&
              (d.removeEventListener("pointerdown", cx, !0),
              d.removeEventListener("pointermove", cx, !0),
              d.removeEventListener("pointerup", cx, !0)),
            cr.delete(c)))
        );
      });
    let cD = new Set([
      "checkbox",
      "radio",
      "range",
      "color",
      "file",
      "image",
      "button",
      "submit",
      "reset",
    ]);
    function cE(a, b) {
      return !!b && !!a && a.contains(b);
    }
    function cF() {
      let a = (0, U.useRef)(new Map()),
        b = (0, U.useCallback)((b, c, d, e) => {
          let f = (null == e ? void 0 : e.once)
            ? (...b) => {
                (a.current.delete(d), d(...b));
              }
            : d;
          (a.current.set(d, { type: c, eventTarget: b, fn: f, options: e }),
            b.addEventListener(c, f, e));
        }, []),
        c = (0, U.useCallback)((b, c, d, e) => {
          var f;
          let g = (null == (f = a.current.get(d)) ? void 0 : f.fn) || d;
          (b.removeEventListener(c, g, e), a.current.delete(d));
        }, []),
        d = (0, U.useCallback)(() => {
          a.current.forEach((a, b) => {
            c(a.eventTarget, a.type, b, a.options);
          });
        }, [c]);
      return (
        (0, U.useEffect)(() => d, [d]),
        {
          addGlobalListener: b,
          removeGlobalListener: c,
          removeAllGlobalListeners: d,
        }
      );
    }
    let cG = !1,
      cH = 0;
    function cI(a) {
      "touch" === a.pointerType &&
        ((cG = !0),
        setTimeout(() => {
          cG = !1;
        }, 50));
    }
    function cJ() {
      if ("undefined" != typeof document)
        return (
          0 === cH &&
            "undefined" != typeof PointerEvent &&
            document.addEventListener("pointerup", cI),
          cH++,
          () => {
            --cH > 0 ||
              ("undefined" != typeof PointerEvent &&
                document.removeEventListener("pointerup", cI));
          }
        );
    }
    let cK =
      null != (Q = U.default.startTransition)
        ? Q
        : function (a) {
            a();
          };
    var cL =
        (((w = cL || {})[(w.Open = 0)] = "Open"),
        (w[(w.Closed = 1)] = "Closed"),
        w),
      cM =
        (((x = cM || {})[(x.ToggleDisclosure = 0)] = "ToggleDisclosure"),
        (x[(x.CloseDisclosure = 1)] = "CloseDisclosure"),
        (x[(x.SetButtonId = 2)] = "SetButtonId"),
        (x[(x.SetPanelId = 3)] = "SetPanelId"),
        (x[(x.SetButtonElement = 4)] = "SetButtonElement"),
        (x[(x.SetPanelElement = 5)] = "SetPanelElement"),
        x);
    let cN = {
        0: (a) => ({
          ...a,
          disclosureState: am(a.disclosureState, { 0: 1, 1: 0 }),
        }),
        1: (a) => (1 === a.disclosureState ? a : { ...a, disclosureState: 1 }),
        2: (a, b) =>
          a.buttonId === b.buttonId ? a : { ...a, buttonId: b.buttonId },
        3: (a, b) =>
          a.panelId === b.panelId ? a : { ...a, panelId: b.panelId },
        4: (a, b) =>
          a.buttonElement === b.element
            ? a
            : { ...a, buttonElement: b.element },
        5: (a, b) =>
          a.panelElement === b.element ? a : { ...a, panelElement: b.element },
      },
      cO = (0, U.createContext)(null);
    function cP(a) {
      let b = (0, U.useContext)(cO);
      if (null === b) {
        let b = Error(`<${a} /> is missing a parent <Disclosure /> component.`);
        throw (Error.captureStackTrace && Error.captureStackTrace(b, cP), b);
      }
      return b;
    }
    cO.displayName = "DisclosureContext";
    let cQ = (0, U.createContext)(null);
    cQ.displayName = "DisclosureAPIContext";
    let cR = (0, U.createContext)(null);
    function cS(a, b) {
      return am(b.type, cN, a, b);
    }
    cR.displayName = "DisclosurePanelContext";
    let cT = U.Fragment,
      cU = aX.RenderStrategy | aX.Static,
      cV = a2(function (a, b) {
        let { defaultOpen: c = !1, ...d } = a,
          e = (0, U.useRef)(null),
          f = bh(
            b,
            bg(
              (a) => {
                e.current = a;
              },
              void 0 === a.as || a5(a.as),
            ),
          ),
          g = (0, U.useReducer)(cS, {
            disclosureState: +!c,
            buttonElement: null,
            panelElement: null,
            buttonId: null,
            panelId: null,
          }),
          [{ disclosureState: h, buttonId: i }, j] = g,
          k = au((a) => {
            j({ type: 1 });
            let b = ay(e.current);
            if (!b || !i) return;
            let c = a
              ? aG(a)
                ? a
                : "current" in a && aG(a.current)
                  ? a.current
                  : b.getElementById(i)
              : b.getElementById(i);
            null == c || c.focus();
          }),
          l = (0, U.useMemo)(() => ({ close: k }), [k]),
          m = be({ open: 0 === h, close: k }),
          n = aZ();
        return U.default.createElement(
          cO.Provider,
          { value: g },
          U.default.createElement(
            cQ.Provider,
            { value: l },
            U.default.createElement(
              bj,
              { value: k },
              U.default.createElement(
                bn,
                { value: am(h, { 0: bl.Open, 1: bl.Closed }) },
                n({
                  ourProps: { ref: f },
                  theirProps: d,
                  slot: m,
                  defaultTag: cT,
                  name: "Disclosure",
                }),
              ),
            ),
          ),
        );
      }),
      cW = a2(function (a, b) {
        var c;
        let d = (0, U.useId)(),
          {
            id: e = `headlessui-disclosure-button-${d}`,
            disabled: f = !1,
            autoFocus: g = !1,
            ...h
          } = a,
          [i, j] = cP("Disclosure.Button"),
          k = (0, U.useContext)(cR),
          l = null !== k && k === i.panelId,
          m = bh(
            (0, U.useRef)(null),
            b,
            au((a) => {
              if (!l) return j({ type: 4, element: a });
            }),
          );
        (0, U.useEffect)(() => {
          if (!l)
            return (
              j({ type: 2, buttonId: e }),
              () => {
                j({ type: 2, buttonId: null });
              }
            );
        }, [e, j, l]);
        let n = au((a) => {
            var b;
            if (l) {
              if (1 === i.disclosureState) return;
              switch (a.key) {
                case V.Space:
                case V.Enter:
                  (a.preventDefault(),
                    a.stopPropagation(),
                    j({ type: 0 }),
                    null == (b = i.buttonElement) || b.focus());
              }
            } else
              switch (a.key) {
                case V.Space:
                case V.Enter:
                  (a.preventDefault(), a.stopPropagation(), j({ type: 0 }));
              }
          }),
          o = au((a) => {
            a.key === V.Space && a.preventDefault();
          }),
          p = au((a) => {
            var b;
            (function (a) {
              var b;
              let c = a.parentElement,
                d = null;
              for (; c && !(aF((b = c)) && "FIELDSET" === b.nodeName); )
                (aH(c) && (d = c), (c = c.parentElement));
              let e = (null == c ? void 0 : c.getAttribute("disabled")) === "";
              return (
                !(
                  e &&
                  (function (a) {
                    if (!a) return !1;
                    let b = a.previousElementSibling;
                    for (; null !== b; ) {
                      if (aH(b)) return !1;
                      b = b.previousElementSibling;
                    }
                    return !0;
                  })(d)
                ) && e
              );
            })(a.currentTarget) ||
              f ||
              (l
                ? (j({ type: 0 }), null == (b = i.buttonElement) || b.focus())
                : j({ type: 0 }));
          }),
          { isFocusVisible: q, focusProps: r } = (function (a = {}) {
            var b;
            let { autoFocus: c = !1, isTextInput: d, within: e } = a,
              f = (0, U.useRef)({ isFocused: !1, isFocusVisible: c || cC() }),
              [g, h] = (0, U.useState)(!1),
              [i, j] = (0, U.useState)(
                () => f.current.isFocused && f.current.isFocusVisible,
              ),
              k = (0, U.useCallback)(
                () => j(f.current.isFocused && f.current.isFocusVisible),
                [],
              ),
              l = (0, U.useCallback)(
                (a) => {
                  ((f.current.isFocused = a), h(a), k());
                },
                [k],
              );
            ((b = { isTextInput: d }),
              cB(),
              (0, U.useEffect)(() => {
                let a = (a, c) => {
                  var d;
                  let e, g, h, i, j;
                  ((d = !!(null == b ? void 0 : b.isTextInput)),
                    (e = ce(null == c ? void 0 : c.target)),
                    (g = HTMLInputElement),
                    (h = HTMLTextAreaElement),
                    (i = HTMLElement),
                    (j = KeyboardEvent),
                    ((d =
                      d ||
                      (e.activeElement instanceof g &&
                        !cD.has(e.activeElement.type)) ||
                      e.activeElement instanceof h ||
                      (e.activeElement instanceof i &&
                        e.activeElement.isContentEditable)) &&
                      "keyboard" === a &&
                      c instanceof j &&
                      !cu[c.key]) ||
                      ((a) => {
                        ((f.current.isFocusVisible = a), k());
                      })(cC()));
                };
                return (
                  cq.add(a),
                  () => {
                    cq.delete(a);
                  }
                );
              }, []));
            let { focusProps: m } = (function (a) {
                let {
                    isDisabled: b,
                    onFocus: c,
                    onBlur: d,
                    onFocusChange: e,
                  } = a,
                  f = (0, U.useCallback)(
                    (a) => {
                      if (a.target === a.currentTarget)
                        return (d && d(a), e && e(!1), !0);
                    },
                    [d, e],
                  ),
                  g = ch(f),
                  h = (0, U.useCallback)(
                    (a) => {
                      var b;
                      let d = ce(a.target),
                        f = d
                          ? ((a = document) => a.activeElement)(d)
                          : ((a = document) => a.activeElement)();
                      a.target === a.currentTarget &&
                        f === ((b = a.nativeEvent), b.target) &&
                        (c && c(a), e && e(!0), g(a));
                    },
                    [e, c, g],
                  );
                return {
                  focusProps: {
                    onFocus: !b && (c || e || d) ? h : void 0,
                    onBlur: !b && (d || e) ? f : void 0,
                  },
                };
              })({ isDisabled: e, onFocusChange: l }),
              { focusWithinProps: n } = (function (a) {
                let {
                    isDisabled: b,
                    onBlurWithin: c,
                    onFocusWithin: d,
                    onFocusWithinChange: e,
                  } = a,
                  f = (0, U.useRef)({ isFocusWithin: !1 }),
                  { addGlobalListener: g, removeAllGlobalListeners: h } = cF(),
                  i = (0, U.useCallback)(
                    (a) => {
                      a.currentTarget.contains(a.target) &&
                        f.current.isFocusWithin &&
                        !a.currentTarget.contains(a.relatedTarget) &&
                        ((f.current.isFocusWithin = !1),
                        h(),
                        c && c(a),
                        e && e(!1));
                    },
                    [c, e, f, h],
                  ),
                  j = ch(i),
                  k = (0, U.useCallback)(
                    (a) => {
                      var b;
                      if (!a.currentTarget.contains(a.target)) return;
                      let c = ce(a.target),
                        h = ((a = document) => a.activeElement)(c);
                      if (
                        !f.current.isFocusWithin &&
                        h === ((b = a.nativeEvent), b.target)
                      ) {
                        (d && d(a),
                          e && e(!0),
                          (f.current.isFocusWithin = !0),
                          j(a));
                        let b = a.currentTarget;
                        g(
                          c,
                          "focus",
                          (a) => {
                            if (f.current.isFocusWithin && !cE(b, a.target)) {
                              let d = new c.defaultView.FocusEvent("blur", {
                                relatedTarget: a.target,
                              });
                              (Object.defineProperty(d, "target", { value: b }),
                                Object.defineProperty(d, "currentTarget", {
                                  value: b,
                                }),
                                i(cg(d)));
                            }
                          },
                          { capture: !0 },
                        );
                      }
                    },
                    [d, e, j, g, i],
                  );
                return b
                  ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
                  : { focusWithinProps: { onFocus: k, onBlur: i } };
              })({ isDisabled: !e, onFocusWithinChange: l });
            return { isFocused: g, isFocusVisible: i, focusProps: e ? n : m };
          })({ autoFocus: g }),
          { isHovered: s, hoverProps: t } = (function (a) {
            let {
                onHoverStart: b,
                onHoverChange: c,
                onHoverEnd: d,
                isDisabled: e,
              } = a,
              [f, g] = (0, U.useState)(!1),
              h = (0, U.useRef)({
                isHovered: !1,
                ignoreEmulatedMouseEvents: !1,
                pointerType: "",
                target: null,
              }).current;
            (0, U.useEffect)(cJ, []);
            let { addGlobalListener: i, removeAllGlobalListeners: j } = cF(),
              { hoverProps: k, triggerHoverEnd: l } = (0, U.useMemo)(() => {
                let a = (a, b) => {
                    let e = h.target;
                    ((h.pointerType = ""),
                      (h.target = null),
                      "touch" !== b &&
                        h.isHovered &&
                        e &&
                        ((h.isHovered = !1),
                        j(),
                        d && d({ type: "hoverend", target: e, pointerType: b }),
                        c && c(!1),
                        g(!1)));
                  },
                  f = {};
                return (
                  "undefined" != typeof PointerEvent &&
                    ((f.onPointerEnter = (d) => {
                      (cG && "mouse" === d.pointerType) ||
                        ((d, f) => {
                          if (
                            ((h.pointerType = f),
                            e ||
                              "touch" === f ||
                              h.isHovered ||
                              !d.currentTarget.contains(d.target))
                          )
                            return;
                          h.isHovered = !0;
                          let j = d.currentTarget;
                          ((h.target = j),
                            i(
                              ce(d.target),
                              "pointerover",
                              (b) => {
                                h.isHovered &&
                                  h.target &&
                                  !cE(h.target, b.target) &&
                                  a(b, b.pointerType);
                              },
                              { capture: !0 },
                            ),
                            b &&
                              b({
                                type: "hoverstart",
                                target: j,
                                pointerType: f,
                              }),
                            c && c(!0),
                            g(!0));
                        })(d, d.pointerType);
                    }),
                    (f.onPointerLeave = (b) => {
                      !e &&
                        b.currentTarget.contains(b.target) &&
                        a(b, b.pointerType);
                    })),
                  { hoverProps: f, triggerHoverEnd: a }
                );
              }, [b, c, d, e, h, i, j]);
            return (
              (0, U.useEffect)(() => {
                e && l({ currentTarget: h.target }, h.pointerType);
              }, [e]),
              { hoverProps: k, isHovered: f }
            );
          })({ isDisabled: f }),
          { pressed: u, pressProps: v } = (function ({
            disabled: a = !1,
          } = {}) {
            let b = (0, U.useRef)(null),
              [c, d] = (0, U.useState)(!1),
              e = bu(),
              f = au(() => {
                ((b.current = null), d(!1), e.dispose());
              }),
              g = au((a) => {
                if ((e.dispose(), null === b.current)) {
                  ((b.current = a.currentTarget), d(!0));
                  {
                    let c = ay(a.currentTarget);
                    (e.addEventListener(c, "pointerup", f, !1),
                      e.addEventListener(
                        c,
                        "pointermove",
                        (a) => {
                          if (b.current) {
                            var c, e;
                            let f, g;
                            d(
                              ((f = a.width / 2),
                              (g = a.height / 2),
                              (c = {
                                top: a.clientY - g,
                                right: a.clientX + f,
                                bottom: a.clientY + g,
                                left: a.clientX - f,
                              }),
                              (e = b.current.getBoundingClientRect()),
                              !(
                                !c ||
                                !e ||
                                c.right < e.left ||
                                c.left > e.right ||
                                c.bottom < e.top ||
                                c.top > e.bottom
                              )),
                            );
                          }
                        },
                        !1,
                      ),
                      e.addEventListener(c, "pointercancel", f, !1));
                  }
                }
              });
            return {
              pressed: c,
              pressProps: a
                ? {}
                : { onPointerDown: g, onPointerUp: f, onClick: f },
            };
          })({ disabled: f }),
          w = be({
            open: 0 === i.disclosureState,
            hover: s,
            active: u,
            disabled: f,
            focus: q,
            autofocus: g,
          }),
          x =
            ((c = i.buttonElement),
            (0, U.useMemo)(() => {
              var b;
              if (a.type) return a.type;
              let d = null != (b = a.as) ? b : "button";
              if (
                ("string" == typeof d && "button" === d.toLowerCase()) ||
                ((null == c ? void 0 : c.tagName) === "BUTTON" &&
                  !c.hasAttribute("type"))
              )
                return "button";
            }, [a.type, a.as, c])),
          y = l
            ? a1(
                {
                  ref: m,
                  type: x,
                  disabled: f || void 0,
                  autoFocus: g,
                  onKeyDown: n,
                  onClick: p,
                },
                r,
                t,
                v,
              )
            : a1(
                {
                  ref: m,
                  id: e,
                  type: x,
                  "aria-expanded": 0 === i.disclosureState,
                  "aria-controls": i.panelElement ? i.panelId : void 0,
                  disabled: f || void 0,
                  autoFocus: g,
                  onKeyDown: n,
                  onKeyUp: o,
                  onClick: p,
                },
                r,
                t,
                v,
              );
        return aZ()({
          ourProps: y,
          theirProps: h,
          slot: w,
          defaultTag: "button",
          name: "Disclosure.Button",
        });
      }),
      cX = a2(function (a, b) {
        let c = (0, U.useId)(),
          {
            id: d = `headlessui-disclosure-panel-${c}`,
            transition: e = !1,
            ...f
          } = a,
          [g, h] = cP("Disclosure.Panel"),
          { close: i } = (function a(b) {
            let c = (0, U.useContext)(cQ);
            if (null === c) {
              let c = Error(
                `<${b} /> is missing a parent <Disclosure /> component.`,
              );
              throw (
                Error.captureStackTrace && Error.captureStackTrace(c, a),
                c
              );
            }
            return c;
          })("Disclosure.Panel"),
          [j, k] = (0, U.useState)(null),
          l = bh(
            b,
            au((a) => {
              cK(() => h({ type: 5, element: a }));
            }),
            k,
          );
        (0, U.useEffect)(
          () => (
            h({ type: 3, panelId: d }),
            () => {
              h({ type: 3, panelId: null });
            }
          ),
          [d, h],
        );
        let m = bm(),
          [n, o] = bP(
            e,
            j,
            null !== m ? (m & bl.Open) === bl.Open : 0 === g.disclosureState,
          ),
          p = be({ open: 0 === g.disclosureState, close: i }),
          q = { ref: l, id: d, ...bO(o) },
          r = aZ();
        return U.default.createElement(
          bo,
          null,
          U.default.createElement(
            cR.Provider,
            { value: g.panelId },
            r({
              ourProps: q,
              theirProps: f,
              slot: p,
              defaultTag: "div",
              features: cU,
              visible: n,
              name: "Disclosure.Panel",
            }),
          ),
        );
      }),
      cY = Object.assign(cV, { Button: cW, Panel: cX });
    function cZ(a, b, { checkForDefaultPrevented: c = !0 } = {}) {
      return function (d) {
        if ((a?.(d), !1 === c || !d.defaultPrevented)) return b?.(d);
      };
    }
    var c$ = a.i(36549);
    function c_(a, b = []) {
      let c = [],
        d = () => {
          let b = c.map((a) => U.createContext(a));
          return function (c) {
            let d = c?.[a] || b;
            return U.useMemo(
              () => ({ [`__scope${a}`]: { ...c, [a]: d } }),
              [c, d],
            );
          };
        };
      return (
        (d.scopeName = a),
        [
          function (b, d) {
            let e = U.createContext(d),
              f = c.length;
            c = [...c, d];
            let g = (b) => {
              let { scope: c, children: d, ...g } = b,
                h = c?.[a]?.[f] || e,
                i = U.useMemo(() => g, Object.values(g));
              return (0, T.jsx)(h.Provider, { value: i, children: d });
            };
            return (
              (g.displayName = b + "Provider"),
              [
                g,
                function (c, g) {
                  let h = g?.[a]?.[f] || e,
                    i = U.useContext(h);
                  if (i) return i;
                  if (void 0 !== d) return d;
                  throw Error(`\`${c}\` must be used within \`${b}\``);
                },
              ]
            );
          },
          (function (...a) {
            let b = a[0];
            if (1 === a.length) return b;
            let c = () => {
              let c = a.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
              return function (a) {
                let d = c.reduce((b, { useScope: c, scopeName: d }) => {
                  let e = c(a)[`__scope${d}`];
                  return { ...b, ...e };
                }, {});
                return U.useMemo(() => ({ [`__scope${b.scopeName}`]: d }), [d]);
              };
            };
            return ((c.scopeName = b.scopeName), c);
          })(d, ...b),
        ]
      );
    }
    var c0 = globalThis?.document ? U.useLayoutEffect : () => {};
    (U[" useEffectEvent ".trim().toString()],
      U[" useInsertionEffect ".trim().toString()]);
    var c1 = U[" useInsertionEffect ".trim().toString()] || c0;
    function c2({
      prop: a,
      defaultProp: b,
      onChange: c = () => {},
      caller: d,
    }) {
      let [e, f, g] = (function ({ defaultProp: a, onChange: b }) {
          let [c, d] = U.useState(a),
            e = U.useRef(c),
            f = U.useRef(b);
          return (
            c1(() => {
              f.current = b;
            }, [b]),
            U.useEffect(() => {
              e.current !== c && (f.current?.(c), (e.current = c));
            }, [c, e]),
            [c, d, f]
          );
        })({ defaultProp: b, onChange: c }),
        h = void 0 !== a,
        i = h ? a : e;
      {
        let b = U.useRef(void 0 !== a);
        U.useEffect(() => {
          let a = b.current;
          if (a !== h) {
            let b = h ? "controlled" : "uncontrolled";
            console.warn(
              `${d} is changing from ${a ? "controlled" : "uncontrolled"} to ${b}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
            );
          }
          b.current = h;
        }, [h, d]);
      }
      return [
        i,
        U.useCallback(
          (b) => {
            if (h) {
              let c = "function" == typeof b ? b(a) : b;
              c !== a && g.current?.(c);
            } else f(b);
          },
          [h, a, f, g],
        ),
      ];
    }
    Symbol("RADIX:SYNC_STATE");
    var c3 = Symbol("radix.slottable");
    function c4(a) {
      return (
        U.isValidElement(a) &&
        "function" == typeof a.type &&
        "__radixId" in a.type &&
        a.type.__radixId === c3
      );
    }
    var c5 = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "select",
      "span",
      "svg",
      "ul",
    ].reduce((a, b) => {
      var c, d;
      let e,
        f,
        g,
        h =
          ((d = c = `Primitive.${b}`),
          ((e = U.forwardRef((a, b) => {
            let { children: c, ...d } = a;
            if (U.isValidElement(c)) {
              var e;
              let a,
                f,
                g =
                  ((e = c),
                  (f =
                    (a = Object.getOwnPropertyDescriptor(
                      e.props,
                      "ref",
                    )?.get) &&
                    "isReactWarning" in a &&
                    a.isReactWarning)
                    ? e.ref
                    : (f =
                          (a = Object.getOwnPropertyDescriptor(
                            e,
                            "ref",
                          )?.get) &&
                          "isReactWarning" in a &&
                          a.isReactWarning)
                      ? e.props.ref
                      : e.props.ref || e.ref),
                h = (function (a, b) {
                  let c = { ...b };
                  for (let d in b) {
                    let e = a[d],
                      f = b[d];
                    /^on[A-Z]/.test(d)
                      ? e && f
                        ? (c[d] = (...a) => {
                            let b = f(...a);
                            return (e(...a), b);
                          })
                        : e && (c[d] = e)
                      : "style" === d
                        ? (c[d] = { ...e, ...f })
                        : "className" === d &&
                          (c[d] = [e, f].filter(Boolean).join(" "));
                  }
                  return { ...a, ...c };
                })(d, c.props);
              return (
                c.type !== U.Fragment &&
                  (h.ref = b ? (0, c$.composeRefs)(b, g) : g),
                U.cloneElement(c, h)
              );
            }
            return U.Children.count(c) > 1 ? U.Children.only(null) : null;
          })).displayName = `${d}.SlotClone`),
          (f = e),
          ((g = U.forwardRef((a, b) => {
            let { children: c, ...d } = a,
              e = U.Children.toArray(c),
              g = e.find(c4);
            if (g) {
              let a = g.props.children,
                c = e.map((b) =>
                  b !== g
                    ? b
                    : U.Children.count(a) > 1
                      ? U.Children.only(null)
                      : U.isValidElement(a)
                        ? a.props.children
                        : null,
                );
              return (0, T.jsx)(f, {
                ...d,
                ref: b,
                children: U.isValidElement(a)
                  ? U.cloneElement(a, void 0, c)
                  : null,
              });
            }
            return (0, T.jsx)(f, { ...d, ref: b, children: c });
          })).displayName = `${c}.Slot`),
          g),
        i = U.forwardRef((a, c) => {
          let { asChild: d, ...e } = a;
          return (0, T.jsx)(d ? h : b, { ...e, ref: c });
        });
      return ((i.displayName = `Primitive.${b}`), { ...a, [b]: i });
    }, {});
    function c6(a, b) {
      a && bE.flushSync(() => a.dispatchEvent(b));
    }
    function c7(a) {
      var b;
      let c,
        d =
          ((b = a),
          ((c = U.forwardRef((a, b) => {
            let { children: c, ...d } = a;
            if (U.isValidElement(c)) {
              var e;
              let a,
                f,
                g =
                  ((e = c),
                  (f =
                    (a = Object.getOwnPropertyDescriptor(
                      e.props,
                      "ref",
                    )?.get) &&
                    "isReactWarning" in a &&
                    a.isReactWarning)
                    ? e.ref
                    : (f =
                          (a = Object.getOwnPropertyDescriptor(
                            e,
                            "ref",
                          )?.get) &&
                          "isReactWarning" in a &&
                          a.isReactWarning)
                      ? e.props.ref
                      : e.props.ref || e.ref),
                h = (function (a, b) {
                  let c = { ...b };
                  for (let d in b) {
                    let e = a[d],
                      f = b[d];
                    /^on[A-Z]/.test(d)
                      ? e && f
                        ? (c[d] = (...a) => {
                            let b = f(...a);
                            return (e(...a), b);
                          })
                        : e && (c[d] = e)
                      : "style" === d
                        ? (c[d] = { ...e, ...f })
                        : "className" === d &&
                          (c[d] = [e, f].filter(Boolean).join(" "));
                  }
                  return { ...a, ...c };
                })(d, c.props);
              return (
                c.type !== U.Fragment &&
                  (h.ref = b ? (0, c$.composeRefs)(b, g) : g),
                U.cloneElement(c, h)
              );
            }
            return U.Children.count(c) > 1 ? U.Children.only(null) : null;
          })).displayName = `${b}.SlotClone`),
          c),
        e = U.forwardRef((a, b) => {
          let { children: c, ...e } = a,
            f = U.Children.toArray(c),
            g = f.find(c9);
          if (g) {
            let a = g.props.children,
              c = f.map((b) =>
                b !== g
                  ? b
                  : U.Children.count(a) > 1
                    ? U.Children.only(null)
                    : U.isValidElement(a)
                      ? a.props.children
                      : null,
              );
            return (0, T.jsx)(d, {
              ...e,
              ref: b,
              children: U.isValidElement(a)
                ? U.cloneElement(a, void 0, c)
                : null,
            });
          }
          return (0, T.jsx)(d, { ...e, ref: b, children: c });
        });
      return ((e.displayName = `${a}.Slot`), e);
    }
    var c8 = Symbol("radix.slottable");
    function c9(a) {
      return (
        U.isValidElement(a) &&
        "function" == typeof a.type &&
        "__radixId" in a.type &&
        a.type.__radixId === c8
      );
    }
    function da(a) {
      let b = a + "CollectionProvider",
        [c, d] = c_(b),
        [e, f] = c(b, { collectionRef: { current: null }, itemMap: new Map() }),
        g = (a) => {
          let { scope: b, children: c } = a,
            d = U.default.useRef(null),
            f = U.default.useRef(new Map()).current;
          return (0, T.jsx)(e, {
            scope: b,
            itemMap: f,
            collectionRef: d,
            children: c,
          });
        };
      g.displayName = b;
      let h = a + "CollectionSlot",
        i = c7(h),
        j = U.default.forwardRef((a, b) => {
          let { scope: c, children: d } = a,
            e = f(h, c),
            g = (0, c$.useComposedRefs)(b, e.collectionRef);
          return (0, T.jsx)(i, { ref: g, children: d });
        });
      j.displayName = h;
      let k = a + "CollectionItemSlot",
        l = "data-radix-collection-item",
        m = c7(k),
        n = U.default.forwardRef((a, b) => {
          let { scope: c, children: d, ...e } = a,
            g = U.default.useRef(null),
            h = (0, c$.useComposedRefs)(b, g),
            i = f(k, c);
          return (
            U.default.useEffect(
              () => (
                i.itemMap.set(g, { ref: g, ...e }),
                () => void i.itemMap.delete(g)
              ),
            ),
            (0, T.jsx)(m, { ...{ [l]: "" }, ref: h, children: d })
          );
        });
      return (
        (n.displayName = k),
        [
          { Provider: g, Slot: j, ItemSlot: n },
          function (b) {
            let c = f(a + "CollectionConsumer", b);
            return U.default.useCallback(() => {
              let a = c.collectionRef.current;
              if (!a) return [];
              let b = Array.from(a.querySelectorAll(`[${l}]`));
              return Array.from(c.itemMap.values()).sort(
                (a, c) => b.indexOf(a.ref.current) - b.indexOf(c.ref.current),
              );
            }, [c.collectionRef, c.itemMap]);
          },
          d,
        ]
      );
    }
    var db = new WeakMap();
    function dc(a, b) {
      var c, d;
      let e, f, g;
      if ("at" in Array.prototype) return Array.prototype.at.call(a, b);
      let h =
        ((c = a),
        (d = b),
        (e = c.length),
        (g = (f = dd(d)) >= 0 ? f : e + f) < 0 || g >= e ? -1 : g);
      return -1 === h ? void 0 : a[h];
    }
    function dd(a) {
      return a != a || 0 === a ? 0 : Math.trunc(a);
    }
    (class a extends Map {
      #a;
      constructor(a) {
        (super(a), (this.#a = [...super.keys()]), db.set(this, !0));
      }
      set(a, b) {
        return (
          db.get(this) &&
            (this.has(a) ? (this.#a[this.#a.indexOf(a)] = a) : this.#a.push(a)),
          super.set(a, b),
          this
        );
      }
      insert(a, b, c) {
        let d,
          e = this.has(b),
          f = this.#a.length,
          g = dd(a),
          h = g >= 0 ? g : f + g,
          i = h < 0 || h >= f ? -1 : h;
        if (i === this.size || (e && i === this.size - 1) || -1 === i)
          return (this.set(b, c), this);
        let j = this.size + +!e;
        g < 0 && h++;
        let k = [...this.#a],
          l = !1;
        for (let a = h; a < j; a++)
          if (h === a) {
            let f = k[a];
            (k[a] === b && (f = k[a + 1]),
              e && this.delete(b),
              (d = this.get(f)),
              this.set(b, c));
          } else {
            l || k[a - 1] !== b || (l = !0);
            let c = k[l ? a : a - 1],
              e = d;
            ((d = this.get(c)), this.delete(c), this.set(c, e));
          }
        return this;
      }
      with(b, c, d) {
        let e = new a(this);
        return (e.insert(b, c, d), e);
      }
      before(a) {
        let b = this.#a.indexOf(a) - 1;
        if (!(b < 0)) return this.entryAt(b);
      }
      setBefore(a, b, c) {
        let d = this.#a.indexOf(a);
        return -1 === d ? this : this.insert(d, b, c);
      }
      after(a) {
        let b = this.#a.indexOf(a);
        if (-1 !== (b = -1 === b || b === this.size - 1 ? -1 : b + 1))
          return this.entryAt(b);
      }
      setAfter(a, b, c) {
        let d = this.#a.indexOf(a);
        return -1 === d ? this : this.insert(d + 1, b, c);
      }
      first() {
        return this.entryAt(0);
      }
      last() {
        return this.entryAt(-1);
      }
      clear() {
        return ((this.#a = []), super.clear());
      }
      delete(a) {
        let b = super.delete(a);
        return (b && this.#a.splice(this.#a.indexOf(a), 1), b);
      }
      deleteAt(a) {
        let b = this.keyAt(a);
        return void 0 !== b && this.delete(b);
      }
      at(a) {
        let b = dc(this.#a, a);
        if (void 0 !== b) return this.get(b);
      }
      entryAt(a) {
        let b = dc(this.#a, a);
        if (void 0 !== b) return [b, this.get(b)];
      }
      indexOf(a) {
        return this.#a.indexOf(a);
      }
      keyAt(a) {
        return dc(this.#a, a);
      }
      from(a, b) {
        let c = this.indexOf(a);
        if (-1 === c) return;
        let d = c + b;
        return (
          d < 0 && (d = 0),
          d >= this.size && (d = this.size - 1),
          this.at(d)
        );
      }
      keyFrom(a, b) {
        let c = this.indexOf(a);
        if (-1 === c) return;
        let d = c + b;
        return (
          d < 0 && (d = 0),
          d >= this.size && (d = this.size - 1),
          this.keyAt(d)
        );
      }
      find(a, b) {
        let c = 0;
        for (let d of this) {
          if (Reflect.apply(a, b, [d, c, this])) return d;
          c++;
        }
      }
      findIndex(a, b) {
        let c = 0;
        for (let d of this) {
          if (Reflect.apply(a, b, [d, c, this])) return c;
          c++;
        }
        return -1;
      }
      filter(b, c) {
        let d = [],
          e = 0;
        for (let a of this)
          (Reflect.apply(b, c, [a, e, this]) && d.push(a), e++);
        return new a(d);
      }
      map(b, c) {
        let d = [],
          e = 0;
        for (let a of this)
          (d.push([a[0], Reflect.apply(b, c, [a, e, this])]), e++);
        return new a(d);
      }
      reduce(...a) {
        let [b, c] = a,
          d = 0,
          e = c ?? this.at(0);
        for (let c of this)
          ((e =
            0 === d && 1 === a.length
              ? c
              : Reflect.apply(b, this, [e, c, d, this])),
            d++);
        return e;
      }
      reduceRight(...a) {
        let [b, c] = a,
          d = c ?? this.at(-1);
        for (let c = this.size - 1; c >= 0; c--) {
          let e = this.at(c);
          d =
            c === this.size - 1 && 1 === a.length
              ? e
              : Reflect.apply(b, this, [d, e, c, this]);
        }
        return d;
      }
      toSorted(b) {
        return new a([...this.entries()].sort(b));
      }
      toReversed() {
        let b = new a();
        for (let a = this.size - 1; a >= 0; a--) {
          let c = this.keyAt(a),
            d = this.get(c);
          b.set(c, d);
        }
        return b;
      }
      toSpliced(...b) {
        let c = [...this.entries()];
        return (c.splice(...b), new a(c));
      }
      slice(b, c) {
        let d = new a(),
          e = this.size - 1;
        if (void 0 === b) return d;
        (b < 0 && (b += this.size), void 0 !== c && c > 0 && (e = c - 1));
        for (let a = b; a <= e; a++) {
          let b = this.keyAt(a),
            c = this.get(b);
          d.set(b, c);
        }
        return d;
      }
      every(a, b) {
        let c = 0;
        for (let d of this) {
          if (!Reflect.apply(a, b, [d, c, this])) return !1;
          c++;
        }
        return !0;
      }
      some(a, b) {
        let c = 0;
        for (let d of this) {
          if (Reflect.apply(a, b, [d, c, this])) return !0;
          c++;
        }
        return !1;
      }
    });
    var de = U.createContext(void 0);
    function df(a) {
      let b = U.useContext(de);
      return a || b || "ltr";
    }
    function dg(a) {
      let b = U.useRef(a);
      return (
        U.useEffect(() => {
          b.current = a;
        }),
        U.useMemo(
          () =>
            (...a) =>
              b.current?.(...a),
          [],
        )
      );
    }
    var dh = "dismissableLayer.update",
      di = U.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
      }),
      dj = U.forwardRef((a, b) => {
        let {
            disableOutsidePointerEvents: c = !1,
            onEscapeKeyDown: d,
            onPointerDownOutside: e,
            onFocusOutside: f,
            onInteractOutside: g,
            onDismiss: h,
            ...i
          } = a,
          j = U.useContext(di),
          [k, l] = U.useState(null),
          m = k?.ownerDocument ?? globalThis?.document,
          [, n] = U.useState({}),
          o = (0, c$.useComposedRefs)(b, (a) => l(a)),
          p = Array.from(j.layers),
          [q] = [...j.layersWithOutsidePointerEventsDisabled].slice(-1),
          r = p.indexOf(q),
          s = k ? p.indexOf(k) : -1,
          t = j.layersWithOutsidePointerEventsDisabled.size > 0,
          u = s >= r,
          v = (function (a, b = globalThis?.document) {
            let c = dg(a),
              d = U.useRef(!1),
              e = U.useRef(() => {});
            return (
              U.useEffect(() => {
                let a = (a) => {
                    if (a.target && !d.current) {
                      let d = function () {
                          dl("dismissableLayer.pointerDownOutside", c, f, {
                            discrete: !0,
                          });
                        },
                        f = { originalEvent: a };
                      "touch" === a.pointerType
                        ? (b.removeEventListener("click", e.current),
                          (e.current = d),
                          b.addEventListener("click", e.current, { once: !0 }))
                        : d();
                    } else b.removeEventListener("click", e.current);
                    d.current = !1;
                  },
                  f = window.setTimeout(() => {
                    b.addEventListener("pointerdown", a);
                  }, 0);
                return () => {
                  (window.clearTimeout(f),
                    b.removeEventListener("pointerdown", a),
                    b.removeEventListener("click", e.current));
                };
              }, [b, c]),
              { onPointerDownCapture: () => (d.current = !0) }
            );
          })((a) => {
            let b = a.target,
              c = [...j.branches].some((a) => a.contains(b));
            u && !c && (e?.(a), g?.(a), a.defaultPrevented || h?.());
          }, m),
          w = (function (a, b = globalThis?.document) {
            let c = dg(a),
              d = U.useRef(!1);
            return (
              U.useEffect(() => {
                let a = (a) => {
                  a.target &&
                    !d.current &&
                    dl(
                      "dismissableLayer.focusOutside",
                      c,
                      { originalEvent: a },
                      { discrete: !1 },
                    );
                };
                return (
                  b.addEventListener("focusin", a),
                  () => b.removeEventListener("focusin", a)
                );
              }, [b, c]),
              {
                onFocusCapture: () => (d.current = !0),
                onBlurCapture: () => (d.current = !1),
              }
            );
          })((a) => {
            let b = a.target;
            ![...j.branches].some((a) => a.contains(b)) &&
              (f?.(a), g?.(a), a.defaultPrevented || h?.());
          }, m);
        return (
          !(function (a, b = globalThis?.document) {
            let c = dg(a);
            U.useEffect(() => {
              let a = (a) => {
                "Escape" === a.key && c(a);
              };
              return (
                b.addEventListener("keydown", a, { capture: !0 }),
                () => b.removeEventListener("keydown", a, { capture: !0 })
              );
            }, [c, b]);
          })((a) => {
            s === j.layers.size - 1 &&
              (d?.(a), !a.defaultPrevented && h && (a.preventDefault(), h()));
          }, m),
          U.useEffect(() => {
            if (k)
              return (
                c &&
                  (0 === j.layersWithOutsidePointerEventsDisabled.size &&
                    ((R = m.body.style.pointerEvents),
                    (m.body.style.pointerEvents = "none")),
                  j.layersWithOutsidePointerEventsDisabled.add(k)),
                j.layers.add(k),
                dk(),
                () => {
                  c &&
                    1 === j.layersWithOutsidePointerEventsDisabled.size &&
                    (m.body.style.pointerEvents = R);
                }
              );
          }, [k, m, c, j]),
          U.useEffect(
            () => () => {
              k &&
                (j.layers.delete(k),
                j.layersWithOutsidePointerEventsDisabled.delete(k),
                dk());
            },
            [k, j],
          ),
          U.useEffect(() => {
            let a = () => n({});
            return (
              document.addEventListener(dh, a),
              () => document.removeEventListener(dh, a)
            );
          }, []),
          (0, T.jsx)(c5.div, {
            ...i,
            ref: o,
            style: {
              pointerEvents: t ? (u ? "auto" : "none") : void 0,
              ...a.style,
            },
            onFocusCapture: cZ(a.onFocusCapture, w.onFocusCapture),
            onBlurCapture: cZ(a.onBlurCapture, w.onBlurCapture),
            onPointerDownCapture: cZ(
              a.onPointerDownCapture,
              v.onPointerDownCapture,
            ),
          })
        );
      });
    function dk() {
      let a = new CustomEvent(dh);
      document.dispatchEvent(a);
    }
    function dl(a, b, c, { discrete: d }) {
      let e = c.originalEvent.target,
        f = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: c });
      (b && e.addEventListener(a, b, { once: !0 }),
        d ? c6(e, f) : e.dispatchEvent(f));
    }
    ((dj.displayName = "DismissableLayer"),
      (U.forwardRef((a, b) => {
        let c = U.useContext(di),
          d = U.useRef(null),
          e = (0, c$.useComposedRefs)(b, d);
        return (
          U.useEffect(() => {
            let a = d.current;
            if (a)
              return (
                c.branches.add(a),
                () => {
                  c.branches.delete(a);
                }
              );
          }, [c.branches]),
          (0, T.jsx)(c5.div, { ...a, ref: e })
        );
      }).displayName = "DismissableLayerBranch"));
    var dm = 0;
    function dn() {
      let a = document.createElement("span");
      return (
        a.setAttribute("data-radix-focus-guard", ""),
        (a.tabIndex = 0),
        (a.style.outline = "none"),
        (a.style.opacity = "0"),
        (a.style.position = "fixed"),
        (a.style.pointerEvents = "none"),
        a
      );
    }
    var dp = "focusScope.autoFocusOnMount",
      dq = "focusScope.autoFocusOnUnmount",
      dr = { bubbles: !1, cancelable: !0 },
      ds = U.forwardRef((a, b) => {
        let {
            loop: c = !1,
            trapped: d = !1,
            onMountAutoFocus: e,
            onUnmountAutoFocus: f,
            ...g
          } = a,
          [h, i] = U.useState(null),
          j = dg(e),
          k = dg(f),
          l = U.useRef(null),
          m = (0, c$.useComposedRefs)(b, (a) => i(a)),
          n = U.useRef({
            paused: !1,
            pause() {
              this.paused = !0;
            },
            resume() {
              this.paused = !1;
            },
          }).current;
        (U.useEffect(() => {
          if (d) {
            let a = function (a) {
                if (n.paused || !h) return;
                let b = a.target;
                h.contains(b) ? (l.current = b) : dv(l.current, { select: !0 });
              },
              b = function (a) {
                if (n.paused || !h) return;
                let b = a.relatedTarget;
                null !== b && (h.contains(b) || dv(l.current, { select: !0 }));
              };
            (document.addEventListener("focusin", a),
              document.addEventListener("focusout", b));
            let c = new MutationObserver(function (a) {
              if (document.activeElement === document.body)
                for (let b of a) b.removedNodes.length > 0 && dv(h);
            });
            return (
              h && c.observe(h, { childList: !0, subtree: !0 }),
              () => {
                (document.removeEventListener("focusin", a),
                  document.removeEventListener("focusout", b),
                  c.disconnect());
              }
            );
          }
        }, [d, h, n.paused]),
          U.useEffect(() => {
            if (h) {
              dw.add(n);
              let a = document.activeElement;
              if (!h.contains(a)) {
                let b = new CustomEvent(dp, dr);
                (h.addEventListener(dp, j),
                  h.dispatchEvent(b),
                  b.defaultPrevented ||
                    ((function (a, { select: b = !1 } = {}) {
                      let c = document.activeElement;
                      for (let d of a)
                        if (
                          (dv(d, { select: b }), document.activeElement !== c)
                        )
                          return;
                    })(
                      dt(h).filter((a) => "A" !== a.tagName),
                      { select: !0 },
                    ),
                    document.activeElement === a && dv(h)));
              }
              return () => {
                (h.removeEventListener(dp, j),
                  setTimeout(() => {
                    let b = new CustomEvent(dq, dr);
                    (h.addEventListener(dq, k),
                      h.dispatchEvent(b),
                      b.defaultPrevented ||
                        dv(a ?? document.body, { select: !0 }),
                      h.removeEventListener(dq, k),
                      dw.remove(n));
                  }, 0));
              };
            }
          }, [h, j, k, n]));
        let o = U.useCallback(
          (a) => {
            if ((!c && !d) || n.paused) return;
            let b = "Tab" === a.key && !a.altKey && !a.ctrlKey && !a.metaKey,
              e = document.activeElement;
            if (b && e) {
              var f;
              let b,
                d = a.currentTarget,
                [g, h] = [du((b = dt((f = d))), f), du(b.reverse(), f)];
              g && h
                ? a.shiftKey || e !== h
                  ? a.shiftKey &&
                    e === g &&
                    (a.preventDefault(), c && dv(h, { select: !0 }))
                  : (a.preventDefault(), c && dv(g, { select: !0 }))
                : e === d && a.preventDefault();
            }
          },
          [c, d, n.paused],
        );
        return (0, T.jsx)(c5.div, { tabIndex: -1, ...g, ref: m, onKeyDown: o });
      });
    function dt(a) {
      let b = [],
        c = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (a) => {
            let b = "INPUT" === a.tagName && "hidden" === a.type;
            return a.disabled || a.hidden || b
              ? NodeFilter.FILTER_SKIP
              : a.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
          },
        });
      for (; c.nextNode(); ) b.push(c.currentNode);
      return b;
    }
    function du(a, b) {
      for (let c of a)
        if (
          !(function (a, { upTo: b }) {
            if ("hidden" === getComputedStyle(a).visibility) return !0;
            for (; a && (void 0 === b || a !== b); ) {
              if ("none" === getComputedStyle(a).display) return !0;
              a = a.parentElement;
            }
            return !1;
          })(c, { upTo: b })
        )
          return c;
    }
    function dv(a, { select: b = !1 } = {}) {
      if (a && a.focus) {
        var c;
        let d = document.activeElement;
        (a.focus({ preventScroll: !0 }),
          a !== d &&
            (c = a) instanceof HTMLInputElement &&
            "select" in c &&
            b &&
            a.select());
      }
    }
    ds.displayName = "FocusScope";
    var dw =
      ((A = []),
      {
        add(a) {
          let b = A[0];
          (a !== b && b?.pause(), (A = dx(A, a)).unshift(a));
        },
        remove(a) {
          ((A = dx(A, a)), A[0]?.resume());
        },
      });
    function dx(a, b) {
      let c = [...a],
        d = c.indexOf(b);
      return (-1 !== d && c.splice(d, 1), c);
    }
    var dy = U[" useId ".trim().toString()] || (() => void 0),
      dz = 0;
    function dA(a) {
      let [b, c] = U.useState(dy());
      return (
        c0(() => {
          a || c((a) => a ?? String(dz++));
        }, [a]),
        a || (b ? `radix-${b}` : "")
      );
    }
    let dB = ["top", "right", "bottom", "left"],
      dC = Math.min,
      dD = Math.max,
      dE = Math.round,
      dF = Math.floor,
      dG = (a) => ({ x: a, y: a }),
      dH = { left: "right", right: "left", bottom: "top", top: "bottom" },
      dI = { start: "end", end: "start" };
    function dJ(a, b) {
      return "function" == typeof a ? a(b) : a;
    }
    function dK(a) {
      return a.split("-")[0];
    }
    function dL(a) {
      return a.split("-")[1];
    }
    function dM(a) {
      return "x" === a ? "y" : "x";
    }
    function dN(a) {
      return "y" === a ? "height" : "width";
    }
    let dO = new Set(["top", "bottom"]);
    function dP(a) {
      return dO.has(dK(a)) ? "y" : "x";
    }
    function dQ(a) {
      return a.replace(/start|end/g, (a) => dI[a]);
    }
    let dR = ["left", "right"],
      dS = ["right", "left"],
      dT = ["top", "bottom"],
      dU = ["bottom", "top"];
    function dV(a) {
      return a.replace(/left|right|bottom|top/g, (a) => dH[a]);
    }
    function dW(a) {
      return "number" != typeof a
        ? { top: 0, right: 0, bottom: 0, left: 0, ...a }
        : { top: a, right: a, bottom: a, left: a };
    }
    function dX(a) {
      let { x: b, y: c, width: d, height: e } = a;
      return {
        width: d,
        height: e,
        top: c,
        left: b,
        right: b + d,
        bottom: c + e,
        x: b,
        y: c,
      };
    }
    function dY(a, b, c) {
      let d,
        { reference: e, floating: f } = a,
        g = dP(b),
        h = dM(dP(b)),
        i = dN(h),
        j = dK(b),
        k = "y" === g,
        l = e.x + e.width / 2 - f.width / 2,
        m = e.y + e.height / 2 - f.height / 2,
        n = e[i] / 2 - f[i] / 2;
      switch (j) {
        case "top":
          d = { x: l, y: e.y - f.height };
          break;
        case "bottom":
          d = { x: l, y: e.y + e.height };
          break;
        case "right":
          d = { x: e.x + e.width, y: m };
          break;
        case "left":
          d = { x: e.x - f.width, y: m };
          break;
        default:
          d = { x: e.x, y: e.y };
      }
      switch (dL(b)) {
        case "start":
          d[h] -= n * (c && k ? -1 : 1);
          break;
        case "end":
          d[h] += n * (c && k ? -1 : 1);
      }
      return d;
    }
    let dZ = async (a, b, c) => {
      let {
          placement: d = "bottom",
          strategy: e = "absolute",
          middleware: f = [],
          platform: g,
        } = c,
        h = f.filter(Boolean),
        i = await (null == g.isRTL ? void 0 : g.isRTL(b)),
        j = await g.getElementRects({ reference: a, floating: b, strategy: e }),
        { x: k, y: l } = dY(j, d, i),
        m = d,
        n = {},
        o = 0;
      for (let c = 0; c < h.length; c++) {
        let { name: f, fn: p } = h[c],
          {
            x: q,
            y: r,
            data: s,
            reset: t,
          } = await p({
            x: k,
            y: l,
            initialPlacement: d,
            placement: m,
            strategy: e,
            middlewareData: n,
            rects: j,
            platform: g,
            elements: { reference: a, floating: b },
          });
        ((k = null != q ? q : k),
          (l = null != r ? r : l),
          (n = { ...n, [f]: { ...n[f], ...s } }),
          t &&
            o <= 50 &&
            (o++,
            "object" == typeof t &&
              (t.placement && (m = t.placement),
              t.rects &&
                (j =
                  !0 === t.rects
                    ? await g.getElementRects({
                        reference: a,
                        floating: b,
                        strategy: e,
                      })
                    : t.rects),
              ({ x: k, y: l } = dY(j, m, i))),
            (c = -1)));
      }
      return { x: k, y: l, placement: m, strategy: e, middlewareData: n };
    };
    async function d$(a, b) {
      var c;
      void 0 === b && (b = {});
      let { x: d, y: e, platform: f, rects: g, elements: h, strategy: i } = a,
        {
          boundary: j = "clippingAncestors",
          rootBoundary: k = "viewport",
          elementContext: l = "floating",
          altBoundary: m = !1,
          padding: n = 0,
        } = dJ(b, a),
        o = dW(n),
        p = h[m ? ("floating" === l ? "reference" : "floating") : l],
        q = dX(
          await f.getClippingRect({
            element:
              null ==
                (c = await (null == f.isElement ? void 0 : f.isElement(p))) || c
                ? p
                : p.contextElement ||
                  (await (null == f.getDocumentElement
                    ? void 0
                    : f.getDocumentElement(h.floating))),
            boundary: j,
            rootBoundary: k,
            strategy: i,
          }),
        ),
        r =
          "floating" === l
            ? { x: d, y: e, width: g.floating.width, height: g.floating.height }
            : g.reference,
        s = await (null == f.getOffsetParent
          ? void 0
          : f.getOffsetParent(h.floating)),
        t = ((await (null == f.isElement ? void 0 : f.isElement(s))) &&
          (await (null == f.getScale ? void 0 : f.getScale(s)))) || {
          x: 1,
          y: 1,
        },
        u = dX(
          f.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: h,
                rect: r,
                offsetParent: s,
                strategy: i,
              })
            : r,
        );
      return {
        top: (q.top - u.top + o.top) / t.y,
        bottom: (u.bottom - q.bottom + o.bottom) / t.y,
        left: (q.left - u.left + o.left) / t.x,
        right: (u.right - q.right + o.right) / t.x,
      };
    }
    function d_(a, b) {
      return {
        top: a.top - b.height,
        right: a.right - b.width,
        bottom: a.bottom - b.height,
        left: a.left - b.width,
      };
    }
    function d0(a) {
      return dB.some((b) => a[b] >= 0);
    }
    let d1 = new Set(["left", "top"]);
    async function d2(a, b) {
      let { placement: c, platform: d, elements: e } = a,
        f = await (null == d.isRTL ? void 0 : d.isRTL(e.floating)),
        g = dK(c),
        h = dL(c),
        i = "y" === dP(c),
        j = d1.has(g) ? -1 : 1,
        k = f && i ? -1 : 1,
        l = dJ(b, a),
        {
          mainAxis: m,
          crossAxis: n,
          alignmentAxis: o,
        } = "number" == typeof l
          ? { mainAxis: l, crossAxis: 0, alignmentAxis: null }
          : {
              mainAxis: l.mainAxis || 0,
              crossAxis: l.crossAxis || 0,
              alignmentAxis: l.alignmentAxis,
            };
      return (
        h && "number" == typeof o && (n = "end" === h ? -1 * o : o),
        i ? { x: n * k, y: m * j } : { x: m * j, y: n * k }
      );
    }
    function d3(a) {
      return (function (a) {
        return !1;
      })(a)
        ? (a.nodeName || "").toLowerCase()
        : "#document";
    }
    function d4(a) {
      var b;
      return (
        (null == a || null == (b = a.ownerDocument) ? void 0 : b.defaultView) ||
        window
      );
    }
    function d5(a) {
      var b;
      return null ==
        (b =
          ((function (a) {
            return !1;
          })(a)
            ? a.ownerDocument
            : a.document) || window.document)
        ? void 0
        : b.documentElement;
    }
    function d6(a) {
      return !1;
    }
    let d7 = new Set(["inline", "contents"]);
    function d8(a) {
      let { overflow: b, overflowX: c, overflowY: d, display: e } = ej(a);
      return /auto|scroll|overlay|hidden|clip/.test(b + d + c) && !d7.has(e);
    }
    let d9 = new Set(["table", "td", "th"]),
      ea = [":popover-open", ":modal"];
    function eb(a) {
      return ea.some((b) => {
        try {
          return a.matches(b);
        } catch (a) {
          return !1;
        }
      });
    }
    let ec = ["transform", "translate", "scale", "rotate", "perspective"],
      ed = [
        "transform",
        "translate",
        "scale",
        "rotate",
        "perspective",
        "filter",
      ],
      ee = ["paint", "layout", "strict", "content"];
    function ef(a) {
      let b = eg(),
        c = a;
      return (
        ec.some((a) => !!c[a] && "none" !== c[a]) ||
        (!!c.containerType && "normal" !== c.containerType) ||
        (!b && !!c.backdropFilter && "none" !== c.backdropFilter) ||
        (!b && !!c.filter && "none" !== c.filter) ||
        ed.some((a) => (c.willChange || "").includes(a)) ||
        ee.some((a) => (c.contain || "").includes(a))
      );
    }
    function eg() {
      return (
        "undefined" != typeof CSS &&
        !!CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")
      );
    }
    let eh = new Set(["html", "body", "#document"]);
    function ei(a) {
      return eh.has(d3(a));
    }
    function ej(a) {
      return d4(a).getComputedStyle(a);
    }
    function ek(a) {
      return { scrollLeft: a.scrollX, scrollTop: a.scrollY };
    }
    function el(a) {
      if ("html" === d3(a)) return a;
      let b = a.assignedSlot || a.parentNode || !1 || d5(a);
      return b;
    }
    function em(a, b, c) {
      var d;
      (void 0 === b && (b = []), void 0 === c && (c = !0));
      let e = (function a(b) {
          let c = el(b);
          return ei(c)
            ? b.ownerDocument
              ? b.ownerDocument.body
              : b.body
            : a(c);
        })(a),
        f = e === (null == (d = a.ownerDocument) ? void 0 : d.body),
        g = d4(e);
      if (f) {
        let a = en(g);
        return b.concat(
          g,
          g.visualViewport || [],
          d8(e) ? e : [],
          a && c ? em(a) : [],
        );
      }
      return b.concat(e, em(e, [], c));
    }
    function en(a) {
      return a.parent && Object.getPrototypeOf(a.parent)
        ? a.frameElement
        : null;
    }
    function eo(a) {
      let b = ej(a),
        c = parseFloat(b.width) || 0,
        d = parseFloat(b.height) || 0,
        e = !1,
        f = e ? a.offsetWidth : c,
        g = e ? a.offsetHeight : d,
        h = dE(c) !== f || dE(d) !== g;
      return (h && ((c = f), (d = g)), { width: c, height: d, $: h });
    }
    function ep(a) {
      return (0, a.contextElement);
    }
    function eq(a) {
      let b = ep(a);
      1;
      return dG(1);
    }
    let er = dG(0);
    function es(a) {
      let b = d4(a);
      return eg() && b.visualViewport
        ? { x: b.visualViewport.offsetLeft, y: b.visualViewport.offsetTop }
        : er;
    }
    function et(a, b, c, d) {
      var e;
      (void 0 === b && (b = !1), void 0 === c && (c = !1));
      let f = a.getBoundingClientRect(),
        g = ep(a),
        h = dG(1);
      b && (d || (h = eq(a)));
      let i = (void 0 === (e = c) && (e = !1), d && (!e || d === d4(g)) && e)
          ? es(g)
          : dG(0),
        j = (f.left + i.x) / h.x,
        k = (f.top + i.y) / h.y,
        l = f.width / h.x,
        m = f.height / h.y;
      if (g) {
        let a = d4(g),
          b = d,
          c = a,
          e = en(c);
        for (; e && d && b !== c; ) {
          let a = eq(e),
            b = e.getBoundingClientRect(),
            d = ej(e),
            f = b.left + (e.clientLeft + parseFloat(d.paddingLeft)) * a.x,
            g = b.top + (e.clientTop + parseFloat(d.paddingTop)) * a.y;
          ((j *= a.x),
            (k *= a.y),
            (l *= a.x),
            (m *= a.y),
            (j += f),
            (k += g),
            (e = en((c = d4(e)))));
        }
      }
      return dX({ width: l, height: m, x: j, y: k });
    }
    function eu(a, b) {
      let c = ek(a).scrollLeft;
      return b ? b.left + c : et(d5(a)).left + c;
    }
    function ev(a, b) {
      let c = a.getBoundingClientRect();
      return { x: c.left + b.scrollLeft - eu(a, c), y: c.top + b.scrollTop };
    }
    function ew(a, b, c) {
      var d;
      let e;
      if ("viewport" === b)
        e = (function (a, b) {
          let c = d4(a),
            d = d5(a),
            e = c.visualViewport,
            f = d.clientWidth,
            g = d.clientHeight,
            h = 0,
            i = 0;
          if (e) {
            ((f = e.width), (g = e.height));
            let a = eg();
            (!a || (a && "fixed" === b)) &&
              ((h = e.offsetLeft), (i = e.offsetTop));
          }
          let j = eu(d);
          if (j <= 0) {
            let a = d.ownerDocument,
              b = a.body,
              c = getComputedStyle(b),
              e =
                ("CSS1Compat" === a.compatMode &&
                  parseFloat(c.marginLeft) + parseFloat(c.marginRight)) ||
                0,
              g = Math.abs(d.clientWidth - b.clientWidth - e);
            g <= 25 && (f -= g);
          } else j <= 25 && (f += j);
          return { width: f, height: g, x: h, y: i };
        })(a, c);
      else if ("document" === b) {
        let b, c, f, g, h, i, j;
        ((d = d5(a)),
          (b = d5(d)),
          (c = ek(d)),
          (f = d.ownerDocument.body),
          (g = dD(b.scrollWidth, b.clientWidth, f.scrollWidth, f.clientWidth)),
          (h = dD(
            b.scrollHeight,
            b.clientHeight,
            f.scrollHeight,
            f.clientHeight,
          )),
          (i = -c.scrollLeft + eu(d)),
          (j = -c.scrollTop),
          "rtl" === ej(f).direction &&
            (i += dD(b.clientWidth, f.clientWidth) - g),
          (e = { width: g, height: h, x: i, y: j }));
      } else {
        1;
        {
          let c = es(a);
          e = { x: b.x - c.x, y: b.y - c.y, width: b.width, height: b.height };
        }
      }
      return dX(e);
    }
    function ex(a) {
      return "static" === ej(a).position;
    }
    function ey(a, b) {
      1;
      return null;
    }
    function ez(a, b) {
      var c;
      let d = d4(a);
      if (eb(a)) return d;
      1;
      {
        let b = el(a);
        for (; b && !ei(b); ) {
          0;
          b = el(b);
        }
        return d;
      }
    }
    let eA = async function (a) {
        let b = this.getOffsetParent || ez,
          c = this.getDimensions,
          d = await c(a.floating);
        return {
          reference: (function (a, b, c) {
            var d;
            let e = ((d = 0), !1),
              f = d5(b),
              g = "fixed" === c,
              h = et(a, !0, g, b),
              i = { scrollLeft: 0, scrollTop: 0 },
              j = dG(0);
            if (e || (!e && !g))
              if ((("body" !== d3(b) || d8(f)) && (i = ek(b)), e)) {
                let a = et(b, !0, g, b);
                ((j.x = a.x + b.clientLeft), (j.y = a.y + b.clientTop));
              } else f && (j.x = eu(f));
            g && !e && f && (j.x = eu(f));
            let k = !f || e || g ? dG(0) : ev(f, i);
            return {
              x: h.left + i.scrollLeft - j.x - k.x,
              y: h.top + i.scrollTop - j.y - k.y,
              width: h.width,
              height: h.height,
            };
          })(a.reference, await b(a.floating), a.strategy),
          floating: { x: 0, y: 0, width: d.width, height: d.height },
        };
      },
      eB = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (a) {
          var b, c;
          let { elements: d, rect: e, offsetParent: f, strategy: g } = a,
            h = "fixed" === g,
            i = d5(f),
            j = !!d && eb(d.floating);
          if (f === i || (j && h)) return e;
          let k = { scrollLeft: 0, scrollTop: 0 },
            l = dG(1),
            m = dG(0),
            n = ((b = 0), !1);
          (n || (!n && !h)) &&
            (("body" !== d3(f) || d8(i)) && (k = ek(f)), (c = 0), 0);
          let o = !i || n || h ? dG(0) : ev(i, k);
          return {
            width: e.width * l.x,
            height: e.height * l.y,
            x: e.x * l.x - k.scrollLeft * l.x + m.x + o.x,
            y: e.y * l.y - k.scrollTop * l.y + m.y + o.y,
          };
        },
        getDocumentElement: d5,
        getClippingRect: function (a) {
          let { element: b, boundary: c, rootBoundary: d, strategy: e } = a,
            f = [
              ...("clippingAncestors" === c
                ? eb(b)
                  ? []
                  : (function (a, b) {
                      var c;
                      let d = b.get(a);
                      if (d) return d;
                      let e = em(a, [], !1).filter((a) => {
                          var b;
                          return ((b = 0), !1);
                        }),
                        f = "fixed" === ej(a).position,
                        g = f ? el(a) : a;
                      return ((c = 0), b.set(a, e), e);
                    })(b, this._c)
                : [].concat(c)),
              d,
            ],
            g = f[0],
            h = f.reduce(
              (a, c) => {
                let d = ew(b, c, e);
                return (
                  (a.top = dD(d.top, a.top)),
                  (a.right = dC(d.right, a.right)),
                  (a.bottom = dC(d.bottom, a.bottom)),
                  (a.left = dD(d.left, a.left)),
                  a
                );
              },
              ew(b, g, e),
            );
          return {
            width: h.right - h.left,
            height: h.bottom - h.top,
            x: h.left,
            y: h.top,
          };
        },
        getOffsetParent: ez,
        getElementRects: eA,
        getClientRects: function (a) {
          return Array.from(a.getClientRects());
        },
        getDimensions: function (a) {
          let { width: b, height: c } = eo(a);
          return { width: b, height: c };
        },
        getScale: eq,
        isElement: d6,
        isRTL: function (a) {
          return "rtl" === ej(a).direction;
        },
      };
    function eC(a, b) {
      return (
        a.x === b.x &&
        a.y === b.y &&
        a.width === b.width &&
        a.height === b.height
      );
    }
    let eD = (a) => ({
      name: "arrow",
      options: a,
      async fn(b) {
        let {
            x: c,
            y: d,
            placement: e,
            rects: f,
            platform: g,
            elements: h,
            middlewareData: i,
          } = b,
          { element: j, padding: k = 0 } = dJ(a, b) || {};
        if (null == j) return {};
        let l = dW(k),
          m = { x: c, y: d },
          n = dM(dP(e)),
          o = dN(n),
          p = await g.getDimensions(j),
          q = "y" === n,
          r = q ? "clientHeight" : "clientWidth",
          s = f.reference[o] + f.reference[n] - m[n] - f.floating[o],
          t = m[n] - f.reference[n],
          u = await (null == g.getOffsetParent ? void 0 : g.getOffsetParent(j)),
          v = u ? u[r] : 0;
        (v && (await (null == g.isElement ? void 0 : g.isElement(u)))) ||
          (v = h.floating[r] || f.floating[o]);
        let w = v / 2 - p[o] / 2 - 1,
          x = dC(l[q ? "top" : "left"], w),
          y = dC(l[q ? "bottom" : "right"], w),
          z = v - p[o] - y,
          A = v / 2 - p[o] / 2 + (s / 2 - t / 2),
          B = dD(x, dC(A, z)),
          C =
            !i.arrow &&
            null != dL(e) &&
            A !== B &&
            f.reference[o] / 2 - (A < x ? x : y) - p[o] / 2 < 0,
          D = C ? (A < x ? A - x : A - z) : 0;
        return {
          [n]: m[n] + D,
          data: {
            [n]: B,
            centerOffset: A - B - D,
            ...(C && { alignmentOffset: D }),
          },
          reset: C,
        };
      },
    });
    var eE =
      "undefined" != typeof document ? U.useLayoutEffect : function () {};
    function eF(a, b) {
      let c, d, e;
      if (a === b) return !0;
      if (typeof a != typeof b) return !1;
      if ("function" == typeof a && a.toString() === b.toString()) return !0;
      if (a && b && "object" == typeof a) {
        if (Array.isArray(a)) {
          if ((c = a.length) !== b.length) return !1;
          for (d = c; 0 != d--; ) if (!eF(a[d], b[d])) return !1;
          return !0;
        }
        if ((c = (e = Object.keys(a)).length) !== Object.keys(b).length)
          return !1;
        for (d = c; 0 != d--; ) if (!{}.hasOwnProperty.call(b, e[d])) return !1;
        for (d = c; 0 != d--; ) {
          let c = e[d];
          if (("_owner" !== c || !a.$$typeof) && !eF(a[c], b[c])) return !1;
        }
        return !0;
      }
      return a != a && b != b;
    }
    function eG(a, b) {
      let c = 1;
      return Math.round(b * c) / c;
    }
    function eH(a) {
      let b = U.useRef(a);
      return (
        eE(() => {
          b.current = a;
        }),
        b
      );
    }
    var eI = U.forwardRef((a, b) => {
      let { children: c, width: d = 10, height: e = 5, ...f } = a;
      return (0, T.jsx)(c5.svg, {
        ...f,
        ref: b,
        width: d,
        height: e,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: a.asChild
          ? c
          : (0, T.jsx)("polygon", { points: "0,0 30,0 15,10" }),
      });
    });
    eI.displayName = "Arrow";
    var eJ = "Popper",
      [eK, eL] = c_(eJ),
      [eM, eN] = eK(eJ),
      eO = (a) => {
        let { __scopePopper: b, children: c } = a,
          [d, e] = U.useState(null);
        return (0, T.jsx)(eM, {
          scope: b,
          anchor: d,
          onAnchorChange: e,
          children: c,
        });
      };
    eO.displayName = eJ;
    var eP = "PopperAnchor",
      eQ = U.forwardRef((a, b) => {
        let { __scopePopper: c, virtualRef: d, ...e } = a,
          f = eN(eP, c),
          g = U.useRef(null),
          h = (0, c$.useComposedRefs)(b, g),
          i = U.useRef(null);
        return (
          U.useEffect(() => {
            let a = i.current;
            ((i.current = d?.current || g.current),
              a !== i.current && f.onAnchorChange(i.current));
          }),
          d ? null : (0, T.jsx)(c5.div, { ...e, ref: h })
        );
      });
    eQ.displayName = eP;
    var eR = "PopperContent",
      [eS, eT] = eK(eR),
      eU = U.forwardRef((a, b) => {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
        let {
            __scopePopper: x,
            side: y = "bottom",
            sideOffset: z = 0,
            align: A = "center",
            alignOffset: B = 0,
            arrowPadding: C = 0,
            avoidCollisions: D = !0,
            collisionBoundary: E = [],
            collisionPadding: F = 0,
            sticky: G = "partial",
            hideWhenDetached: H = !1,
            updatePositionStrategy: I = "optimized",
            onPlaced: J,
            ...K
          } = a,
          L = eN(eR, x),
          [M, N] = U.useState(null),
          O = (0, c$.useComposedRefs)(b, (a) => N(a)),
          [P, Q] = U.useState(null),
          R = (function (a) {
            let [b, c] = U.useState(void 0);
            return (
              c0(() => {
                if (a) {
                  c({ width: a.offsetWidth, height: a.offsetHeight });
                  let b = new ResizeObserver((b) => {
                    let d, e;
                    if (!Array.isArray(b) || !b.length) return;
                    let f = b[0];
                    if ("borderBoxSize" in f) {
                      let a = f.borderBoxSize,
                        b = Array.isArray(a) ? a[0] : a;
                      ((d = b.inlineSize), (e = b.blockSize));
                    } else ((d = a.offsetWidth), (e = a.offsetHeight));
                    c({ width: d, height: e });
                  });
                  return (
                    b.observe(a, { box: "border-box" }),
                    () => b.unobserve(a)
                  );
                }
                c(void 0);
              }, [a]),
              b
            );
          })(P),
          S = R?.width ?? 0,
          V = R?.height ?? 0,
          W =
            "number" == typeof F
              ? F
              : { top: 0, right: 0, bottom: 0, left: 0, ...F },
          X = Array.isArray(E) ? E : [E],
          Y = X.length > 0,
          Z = { padding: W, boundary: X.filter(eY), altBoundary: Y },
          {
            refs: $,
            floatingStyles: _,
            placement: aa,
            isPositioned: ab,
            middlewareData: ac,
          } = (function (a) {
            void 0 === a && (a = {});
            let {
                placement: b = "bottom",
                strategy: c = "absolute",
                middleware: d = [],
                platform: e,
                elements: { reference: f, floating: g } = {},
                transform: h = !0,
                whileElementsMounted: i,
                open: j,
              } = a,
              [k, l] = U.useState({
                x: 0,
                y: 0,
                strategy: c,
                placement: b,
                middlewareData: {},
                isPositioned: !1,
              }),
              [m, n] = U.useState(d);
            eF(m, d) || n(d);
            let [o, p] = U.useState(null),
              [q, r] = U.useState(null),
              s = U.useCallback((a) => {
                a !== w.current && ((w.current = a), p(a));
              }, []),
              t = U.useCallback((a) => {
                a !== x.current && ((x.current = a), r(a));
              }, []),
              u = f || o,
              v = g || q,
              w = U.useRef(null),
              x = U.useRef(null),
              y = U.useRef(k),
              z = null != i,
              A = eH(i),
              B = eH(e),
              C = eH(j),
              D = U.useCallback(() => {
                var a, d;
                let e, f, g;
                if (!w.current || !x.current) return;
                let h = { placement: b, strategy: c, middleware: m };
                (B.current && (h.platform = B.current),
                  ((a = w.current),
                  (d = x.current),
                  (e = new Map()),
                  (g = { ...(f = { platform: eB, ...h }).platform, _c: e }),
                  dZ(a, d, { ...f, platform: g })).then((a) => {
                    let b = { ...a, isPositioned: !1 !== C.current };
                    E.current &&
                      !eF(y.current, b) &&
                      ((y.current = b),
                      bE.flushSync(() => {
                        l(b);
                      }));
                  }));
              }, [m, b, c, B, C]);
            eE(() => {
              !1 === j &&
                y.current.isPositioned &&
                ((y.current.isPositioned = !1),
                l((a) => ({ ...a, isPositioned: !1 })));
            }, [j]);
            let E = U.useRef(!1);
            (eE(
              () => (
                (E.current = !0),
                () => {
                  E.current = !1;
                }
              ),
              [],
            ),
              eE(() => {
                if ((u && (w.current = u), v && (x.current = v), u && v)) {
                  if (A.current) return A.current(u, v, D);
                  D();
                }
              }, [u, v, D, A, z]));
            let F = U.useMemo(
                () => ({
                  reference: w,
                  floating: x,
                  setReference: s,
                  setFloating: t,
                }),
                [s, t],
              ),
              G = U.useMemo(() => ({ reference: u, floating: v }), [u, v]),
              H = U.useMemo(() => {
                let a = { position: c, left: 0, top: 0 };
                if (!G.floating) return a;
                let b = eG(G.floating, k.x),
                  d = eG(G.floating, k.y);
                if (h)
                  return {
                    ...a,
                    transform: "translate(" + b + "px, " + d + "px)",
                    ...(G.floating, false),
                  };
                return { position: c, left: b, top: d };
              }, [c, h, G.floating, k.x, k.y]);
            return U.useMemo(
              () => ({
                ...k,
                update: D,
                refs: F,
                elements: G,
                floatingStyles: H,
              }),
              [k, D, F, G, H],
            );
          })({
            strategy: "fixed",
            placement: y + ("center" !== A ? "-" + A : ""),
            whileElementsMounted: (...a) =>
              (function (a, b, c, d) {
                let e;
                void 0 === d && (d = {});
                let {
                    ancestorScroll: f = !0,
                    ancestorResize: g = !0,
                    elementResize: h = "function" == typeof ResizeObserver,
                    layoutShift: i = "function" == typeof IntersectionObserver,
                    animationFrame: j = !1,
                  } = d,
                  k = ep(a),
                  l = f || g ? [...(k ? em(k) : []), ...em(b)] : [];
                l.forEach((a) => {
                  (f && a.addEventListener("scroll", c, { passive: !0 }),
                    g && a.addEventListener("resize", c));
                });
                let m =
                    k && i
                      ? (function (a, b) {
                          let c,
                            d = null,
                            e = d5(a);
                          function f() {
                            var a;
                            (clearTimeout(c),
                              null == (a = d) || a.disconnect(),
                              (d = null));
                          }
                          return (
                            !(function g(h, i) {
                              (void 0 === h && (h = !1),
                                void 0 === i && (i = 1),
                                f());
                              let j = a.getBoundingClientRect(),
                                { left: k, top: l, width: m, height: n } = j;
                              if ((h || b(), !m || !n)) return;
                              let o = {
                                  rootMargin:
                                    -dF(l) +
                                    "px " +
                                    -dF(e.clientWidth - (k + m)) +
                                    "px " +
                                    -dF(e.clientHeight - (l + n)) +
                                    "px " +
                                    -dF(k) +
                                    "px",
                                  threshold: dD(0, dC(1, i)) || 1,
                                },
                                p = !0;
                              function q(b) {
                                let d = b[0].intersectionRatio;
                                if (d !== i) {
                                  if (!p) return g();
                                  d
                                    ? g(!1, d)
                                    : (c = setTimeout(() => {
                                        g(!1, 1e-7);
                                      }, 1e3));
                                }
                                (1 !== d ||
                                  eC(j, a.getBoundingClientRect()) ||
                                  g(),
                                  (p = !1));
                              }
                              try {
                                d = new IntersectionObserver(q, {
                                  ...o,
                                  root: e.ownerDocument,
                                });
                              } catch (a) {
                                d = new IntersectionObserver(q, o);
                              }
                              d.observe(a);
                            })(!0),
                            f
                          );
                        })(k, c)
                      : null,
                  n = -1,
                  o = null;
                h &&
                  ((o = new ResizeObserver((a) => {
                    let [d] = a;
                    (d &&
                      d.target === k &&
                      o &&
                      (o.unobserve(b),
                      cancelAnimationFrame(n),
                      (n = requestAnimationFrame(() => {
                        var a;
                        null == (a = o) || a.observe(b);
                      }))),
                      c());
                  })),
                  k && !j && o.observe(k),
                  o.observe(b));
                let p = j ? et(a) : null;
                return (
                  j &&
                    (function b() {
                      let d = et(a);
                      (p && !eC(p, d) && c(),
                        (p = d),
                        (e = requestAnimationFrame(b)));
                    })(),
                  c(),
                  () => {
                    var a;
                    (l.forEach((a) => {
                      (f && a.removeEventListener("scroll", c),
                        g && a.removeEventListener("resize", c));
                    }),
                      null == m || m(),
                      null == (a = o) || a.disconnect(),
                      (o = null),
                      j && cancelAnimationFrame(e));
                  }
                );
              })(...a, { animationFrame: "always" === I }),
            elements: { reference: L.anchor },
            middleware: [
              {
                ...{
                  name: "offset",
                  options: (e = c = { mainAxis: z + V, alignmentAxis: B }),
                  async fn(a) {
                    var b, c;
                    let { x: d, y: f, placement: g, middlewareData: h } = a,
                      i = await d2(a, e);
                    return g ===
                      (null == (b = h.offset) ? void 0 : b.placement) &&
                      null != (c = h.arrow) &&
                      c.alignmentOffset
                      ? {}
                      : {
                          x: d + i.x,
                          y: f + i.y,
                          data: { ...i, placement: g },
                        };
                  },
                },
                options: [c, d],
              },
              D && {
                ...{
                  name: "shift",
                  options:
                    (k = i =
                      {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter:
                          "partial" === G
                            ? {
                                ...(void 0 === (h = f) && (h = {}),
                                {
                                  options: h,
                                  fn(a) {
                                    let {
                                        x: b,
                                        y: c,
                                        placement: d,
                                        rects: e,
                                        middlewareData: f,
                                      } = a,
                                      {
                                        offset: g = 0,
                                        mainAxis: i = !0,
                                        crossAxis: j = !0,
                                      } = dJ(h, a),
                                      k = { x: b, y: c },
                                      l = dP(d),
                                      m = dM(l),
                                      n = k[m],
                                      o = k[l],
                                      p = dJ(g, a),
                                      q =
                                        "number" == typeof p
                                          ? { mainAxis: p, crossAxis: 0 }
                                          : { mainAxis: 0, crossAxis: 0, ...p };
                                    if (i) {
                                      let a = "y" === m ? "height" : "width",
                                        b =
                                          e.reference[m] -
                                          e.floating[a] +
                                          q.mainAxis,
                                        c =
                                          e.reference[m] +
                                          e.reference[a] -
                                          q.mainAxis;
                                      n < b ? (n = b) : n > c && (n = c);
                                    }
                                    if (j) {
                                      var r, s;
                                      let a = "y" === m ? "width" : "height",
                                        b = d1.has(dK(d)),
                                        c =
                                          e.reference[l] -
                                          e.floating[a] +
                                          ((b &&
                                            (null == (r = f.offset)
                                              ? void 0
                                              : r[l])) ||
                                            0) +
                                          (b ? 0 : q.crossAxis),
                                        g =
                                          e.reference[l] +
                                          e.reference[a] +
                                          (b
                                            ? 0
                                            : (null == (s = f.offset)
                                                ? void 0
                                                : s[l]) || 0) -
                                          (b ? q.crossAxis : 0);
                                      o < c ? (o = c) : o > g && (o = g);
                                    }
                                    return { [m]: n, [l]: o };
                                  },
                                }),
                                options: [f, g],
                              }
                            : void 0,
                        ...Z,
                      }),
                  async fn(a) {
                    let { x: b, y: c, placement: d } = a,
                      {
                        mainAxis: e = !0,
                        crossAxis: f = !1,
                        limiter: g = {
                          fn: (a) => {
                            let { x: b, y: c } = a;
                            return { x: b, y: c };
                          },
                        },
                        ...h
                      } = dJ(k, a),
                      i = { x: b, y: c },
                      j = await d$(a, h),
                      l = dP(dK(d)),
                      m = dM(l),
                      n = i[m],
                      o = i[l];
                    if (e) {
                      let a = "y" === m ? "top" : "left",
                        b = "y" === m ? "bottom" : "right",
                        c = n + j[a],
                        d = n - j[b];
                      n = dD(c, dC(n, d));
                    }
                    if (f) {
                      let a = "y" === l ? "top" : "left",
                        b = "y" === l ? "bottom" : "right",
                        c = o + j[a],
                        d = o - j[b];
                      o = dD(c, dC(o, d));
                    }
                    let p = g.fn({ ...a, [m]: n, [l]: o });
                    return {
                      ...p,
                      data: {
                        x: p.x - b,
                        y: p.y - c,
                        enabled: { [m]: e, [l]: f },
                      },
                    };
                  },
                },
                options: [i, j],
              },
              D && {
                ...{
                  name: "flip",
                  options: (n = l = { ...Z }),
                  async fn(a) {
                    var b, c, d, e, f, g, h, i;
                    let j,
                      k,
                      l,
                      {
                        placement: m,
                        middlewareData: o,
                        rects: p,
                        initialPlacement: q,
                        platform: r,
                        elements: s,
                      } = a,
                      {
                        mainAxis: t = !0,
                        crossAxis: u = !0,
                        fallbackPlacements: v,
                        fallbackStrategy: w = "bestFit",
                        fallbackAxisSideDirection: x = "none",
                        flipAlignment: y = !0,
                        ...z
                      } = dJ(n, a);
                    if (null != (b = o.arrow) && b.alignmentOffset) return {};
                    let A = dK(m),
                      B = dP(q),
                      C = dK(q) === q,
                      D = await (null == r.isRTL
                        ? void 0
                        : r.isRTL(s.floating)),
                      E =
                        v ||
                        (C || !y ? [dV(q)] : ((j = dV(q)), [dQ(q), j, dQ(j)])),
                      F = "none" !== x;
                    !v &&
                      F &&
                      E.push(
                        ...((k = dL(q)),
                        (l = (function (a, b, c) {
                          switch (a) {
                            case "top":
                            case "bottom":
                              if (c) return b ? dS : dR;
                              return b ? dR : dS;
                            case "left":
                            case "right":
                              return b ? dT : dU;
                            default:
                              return [];
                          }
                        })(dK(q), "start" === x, D)),
                        k &&
                          ((l = l.map((a) => a + "-" + k)),
                          y && (l = l.concat(l.map(dQ)))),
                        l),
                      );
                    let G = [q, ...E],
                      H = await d$(a, z),
                      I = [],
                      J = (null == (c = o.flip) ? void 0 : c.overflows) || [];
                    if ((t && I.push(H[A]), u)) {
                      let a,
                        b,
                        c,
                        d,
                        e =
                          ((g = m),
                          (h = p),
                          void 0 === (i = D) && (i = !1),
                          (a = dL(g)),
                          (c = dN((b = dM(dP(g))))),
                          (d =
                            "x" === b
                              ? a === (i ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === a
                                ? "bottom"
                                : "top"),
                          h.reference[c] > h.floating[c] && (d = dV(d)),
                          [d, dV(d)]);
                      I.push(H[e[0]], H[e[1]]);
                    }
                    if (
                      ((J = [...J, { placement: m, overflows: I }]),
                      !I.every((a) => a <= 0))
                    ) {
                      let a =
                          ((null == (d = o.flip) ? void 0 : d.index) || 0) + 1,
                        b = G[a];
                      if (
                        b &&
                        ("alignment" !== u ||
                          B === dP(b) ||
                          J.every(
                            (a) => dP(a.placement) !== B || a.overflows[0] > 0,
                          ))
                      )
                        return {
                          data: { index: a, overflows: J },
                          reset: { placement: b },
                        };
                      let c =
                        null ==
                        (e = J.filter((a) => a.overflows[0] <= 0).sort(
                          (a, b) => a.overflows[1] - b.overflows[1],
                        )[0])
                          ? void 0
                          : e.placement;
                      if (!c)
                        switch (w) {
                          case "bestFit": {
                            let a =
                              null ==
                              (f = J.filter((a) => {
                                if (F) {
                                  let b = dP(a.placement);
                                  return b === B || "y" === b;
                                }
                                return !0;
                              })
                                .map((a) => [
                                  a.placement,
                                  a.overflows
                                    .filter((a) => a > 0)
                                    .reduce((a, b) => a + b, 0),
                                ])
                                .sort((a, b) => a[1] - b[1])[0])
                                ? void 0
                                : f[0];
                            a && (c = a);
                            break;
                          }
                          case "initialPlacement":
                            c = q;
                        }
                      if (m !== c) return { reset: { placement: c } };
                    }
                    return {};
                  },
                },
                options: [l, m],
              },
              {
                ...{
                  name: "size",
                  options:
                    (q = o =
                      {
                        ...Z,
                        apply: ({
                          elements: a,
                          rects: b,
                          availableWidth: c,
                          availableHeight: d,
                        }) => {
                          let { width: e, height: f } = b.reference,
                            g = a.floating.style;
                          (g.setProperty(
                            "--radix-popper-available-width",
                            `${c}px`,
                          ),
                            g.setProperty(
                              "--radix-popper-available-height",
                              `${d}px`,
                            ),
                            g.setProperty(
                              "--radix-popper-anchor-width",
                              `${e}px`,
                            ),
                            g.setProperty(
                              "--radix-popper-anchor-height",
                              `${f}px`,
                            ));
                        },
                      }),
                  async fn(a) {
                    var b, c;
                    let d,
                      e,
                      { placement: f, rects: g, platform: h, elements: i } = a,
                      { apply: j = () => {}, ...k } = dJ(q, a),
                      l = await d$(a, k),
                      m = dK(f),
                      n = dL(f),
                      o = "y" === dP(f),
                      { width: p, height: r } = g.floating;
                    "top" === m || "bottom" === m
                      ? ((d = m),
                        (e =
                          n ===
                          ((await (null == h.isRTL
                            ? void 0
                            : h.isRTL(i.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((e = m), (d = "end" === n ? "top" : "bottom"));
                    let s = r - l.top - l.bottom,
                      t = p - l.left - l.right,
                      u = dC(r - l[d], s),
                      v = dC(p - l[e], t),
                      w = !a.middlewareData.shift,
                      x = u,
                      y = v;
                    if (
                      (null != (b = a.middlewareData.shift) &&
                        b.enabled.x &&
                        (y = t),
                      null != (c = a.middlewareData.shift) &&
                        c.enabled.y &&
                        (x = s),
                      w && !n)
                    ) {
                      let a = dD(l.left, 0),
                        b = dD(l.right, 0),
                        c = dD(l.top, 0),
                        d = dD(l.bottom, 0);
                      o
                        ? (y =
                            p -
                            2 *
                              (0 !== a || 0 !== b
                                ? a + b
                                : dD(l.left, l.right)))
                        : (x =
                            r -
                            2 *
                              (0 !== c || 0 !== d
                                ? c + d
                                : dD(l.top, l.bottom)));
                    }
                    await j({ ...a, availableWidth: y, availableHeight: x });
                    let z = await h.getDimensions(i.floating);
                    return p !== z.width || r !== z.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                options: [o, p],
              },
              P && {
                ...{
                  name: "arrow",
                  options: (t = r = { element: P, padding: C }),
                  fn(a) {
                    let { element: b, padding: c } =
                      "function" == typeof t ? t(a) : t;
                    return b && {}.hasOwnProperty.call(b, "current")
                      ? null != b.current
                        ? eD({ element: b.current, padding: c }).fn(a)
                        : {}
                      : b
                        ? eD({ element: b, padding: c }).fn(a)
                        : {};
                  },
                },
                options: [r, s],
              },
              eZ({ arrowWidth: S, arrowHeight: V }),
              H && {
                ...{
                  name: "hide",
                  options: (w = u = { strategy: "referenceHidden", ...Z }),
                  async fn(a) {
                    let { rects: b } = a,
                      { strategy: c = "referenceHidden", ...d } = dJ(w, a);
                    switch (c) {
                      case "referenceHidden": {
                        let c = d_(
                          await d$(a, { ...d, elementContext: "reference" }),
                          b.reference,
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: c,
                            referenceHidden: d0(c),
                          },
                        };
                      }
                      case "escaped": {
                        let c = d_(
                          await d$(a, { ...d, altBoundary: !0 }),
                          b.floating,
                        );
                        return { data: { escapedOffsets: c, escaped: d0(c) } };
                      }
                      default:
                        return {};
                    }
                  },
                },
                options: [u, v],
              },
            ],
          }),
          [ad, ae] = e$(aa),
          af = dg(J);
        c0(() => {
          ab && af?.();
        }, [ab, af]);
        let ag = ac.arrow?.x,
          ah = ac.arrow?.y,
          ai = ac.arrow?.centerOffset !== 0,
          [aj, ak] = U.useState();
        return (
          c0(() => {
            M && ak(window.getComputedStyle(M).zIndex);
          }, [M]),
          (0, T.jsx)("div", {
            ref: $.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ..._,
              transform: ab ? _.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: aj,
              "--radix-popper-transform-origin": [
                ac.transformOrigin?.x,
                ac.transformOrigin?.y,
              ].join(" "),
              ...(ac.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none",
              }),
            },
            dir: a.dir,
            children: (0, T.jsx)(eS, {
              scope: x,
              placedSide: ad,
              onArrowChange: Q,
              arrowX: ag,
              arrowY: ah,
              shouldHideArrow: ai,
              children: (0, T.jsx)(c5.div, {
                "data-side": ad,
                "data-align": ae,
                ...K,
                ref: O,
                style: { ...K.style, animation: ab ? void 0 : "none" },
              }),
            }),
          })
        );
      });
    eU.displayName = eR;
    var eV = "PopperArrow",
      eW = { top: "bottom", right: "left", bottom: "top", left: "right" },
      eX = U.forwardRef(function (a, b) {
        let { __scopePopper: c, ...d } = a,
          e = eT(eV, c),
          f = eW[e.placedSide];
        return (0, T.jsx)("span", {
          ref: e.onArrowChange,
          style: {
            position: "absolute",
            left: e.arrowX,
            top: e.arrowY,
            [f]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0",
            }[e.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)",
            }[e.placedSide],
            visibility: e.shouldHideArrow ? "hidden" : void 0,
          },
          children: (0, T.jsx)(eI, {
            ...d,
            ref: b,
            style: { ...d.style, display: "block" },
          }),
        });
      });
    function eY(a) {
      return null !== a;
    }
    eX.displayName = eV;
    var eZ = (a) => ({
      name: "transformOrigin",
      options: a,
      fn(b) {
        let { placement: c, rects: d, middlewareData: e } = b,
          f = e.arrow?.centerOffset !== 0,
          g = f ? 0 : a.arrowWidth,
          h = f ? 0 : a.arrowHeight,
          [i, j] = e$(c),
          k = { start: "0%", center: "50%", end: "100%" }[j],
          l = (e.arrow?.x ?? 0) + g / 2,
          m = (e.arrow?.y ?? 0) + h / 2,
          n = "",
          o = "";
        return (
          "bottom" === i
            ? ((n = f ? k : `${l}px`), (o = `${-h}px`))
            : "top" === i
              ? ((n = f ? k : `${l}px`), (o = `${d.floating.height + h}px`))
              : "right" === i
                ? ((n = `${-h}px`), (o = f ? k : `${m}px`))
                : "left" === i &&
                  ((n = `${d.floating.width + h}px`), (o = f ? k : `${m}px`)),
          { data: { x: n, y: o } }
        );
      },
    });
    function e$(a) {
      let [b, c = "center"] = a.split("-");
      return [b, c];
    }
    var e_ = U.forwardRef((a, b) => {
      let { container: c, ...d } = a,
        [e, f] = U.useState(!1);
      c0(() => f(!0), []);
      let g = c || (e && globalThis?.document?.body);
      return g
        ? bE.default.createPortal((0, T.jsx)(c5.div, { ...d, ref: b }), g)
        : null;
    });
    e_.displayName = "Portal";
    var e0 = (a) => {
      var b;
      let c,
        d,
        { present: e, children: f } = a,
        g = (function (a) {
          var b, c;
          let [d, e] = U.useState(),
            f = U.useRef(null),
            g = U.useRef(a),
            h = U.useRef("none"),
            [i, j] =
              ((b = a ? "mounted" : "unmounted"),
              (c = {
                mounted: {
                  UNMOUNT: "unmounted",
                  ANIMATION_OUT: "unmountSuspended",
                },
                unmountSuspended: {
                  MOUNT: "mounted",
                  ANIMATION_END: "unmounted",
                },
                unmounted: { MOUNT: "mounted" },
              }),
              U.useReducer((a, b) => c[a][b] ?? a, b));
          return (
            U.useEffect(() => {
              let a = e1(f.current);
              h.current = "mounted" === i ? a : "none";
            }, [i]),
            c0(() => {
              let b = f.current,
                c = g.current;
              if (c !== a) {
                let d = h.current,
                  e = e1(b);
                (a
                  ? j("MOUNT")
                  : "none" === e || b?.display === "none"
                    ? j("UNMOUNT")
                    : c && d !== e
                      ? j("ANIMATION_OUT")
                      : j("UNMOUNT"),
                  (g.current = a));
              }
            }, [a, j]),
            c0(() => {
              if (d) {
                let a,
                  b = d.ownerDocument.defaultView ?? window,
                  c = (c) => {
                    let e = e1(f.current).includes(CSS.escape(c.animationName));
                    if (
                      c.target === d &&
                      e &&
                      (j("ANIMATION_END"), !g.current)
                    ) {
                      let c = d.style.animationFillMode;
                      ((d.style.animationFillMode = "forwards"),
                        (a = b.setTimeout(() => {
                          "forwards" === d.style.animationFillMode &&
                            (d.style.animationFillMode = c);
                        })));
                    }
                  },
                  e = (a) => {
                    a.target === d && (h.current = e1(f.current));
                  };
                return (
                  d.addEventListener("animationstart", e),
                  d.addEventListener("animationcancel", c),
                  d.addEventListener("animationend", c),
                  () => {
                    (b.clearTimeout(a),
                      d.removeEventListener("animationstart", e),
                      d.removeEventListener("animationcancel", c),
                      d.removeEventListener("animationend", c));
                  }
                );
              }
              j("ANIMATION_END");
            }, [d, j]),
            {
              isPresent: ["mounted", "unmountSuspended"].includes(i),
              ref: U.useCallback((a) => {
                ((f.current = a ? getComputedStyle(a) : null), e(a));
              }, []),
            }
          );
        })(e),
        h =
          "function" == typeof f
            ? f({ present: g.isPresent })
            : U.Children.only(f),
        i = (0, c$.useComposedRefs)(
          g.ref,
          ((b = h),
          (d =
            (c = Object.getOwnPropertyDescriptor(b.props, "ref")?.get) &&
            "isReactWarning" in c &&
            c.isReactWarning)
            ? b.ref
            : (d =
                  (c = Object.getOwnPropertyDescriptor(b, "ref")?.get) &&
                  "isReactWarning" in c &&
                  c.isReactWarning)
              ? b.props.ref
              : b.props.ref || b.ref),
        );
      return "function" == typeof f || g.isPresent
        ? U.cloneElement(h, { ref: i })
        : null;
    };
    function e1(a) {
      return a?.animationName || "none";
    }
    e0.displayName = "Presence";
    var e2 = "rovingFocusGroup.onEntryFocus",
      e3 = { bubbles: !1, cancelable: !0 },
      e4 = "RovingFocusGroup",
      [e5, e6, e7] = da(e4),
      [e8, e9] = c_(e4, [e7]),
      [fa, fb] = e8(e4),
      fc = U.forwardRef((a, b) =>
        (0, T.jsx)(e5.Provider, {
          scope: a.__scopeRovingFocusGroup,
          children: (0, T.jsx)(e5.Slot, {
            scope: a.__scopeRovingFocusGroup,
            children: (0, T.jsx)(fd, { ...a, ref: b }),
          }),
        }),
      );
    fc.displayName = e4;
    var fd = U.forwardRef((a, b) => {
        let {
            __scopeRovingFocusGroup: c,
            orientation: d,
            loop: e = !1,
            dir: f,
            currentTabStopId: g,
            defaultCurrentTabStopId: h,
            onCurrentTabStopIdChange: i,
            onEntryFocus: j,
            preventScrollOnEntryFocus: k = !1,
            ...l
          } = a,
          m = U.useRef(null),
          n = (0, c$.useComposedRefs)(b, m),
          o = df(f),
          [p, q] = c2({
            prop: g,
            defaultProp: h ?? null,
            onChange: i,
            caller: e4,
          }),
          [r, s] = U.useState(!1),
          t = dg(j),
          u = e6(c),
          v = U.useRef(!1),
          [w, x] = U.useState(0);
        return (
          U.useEffect(() => {
            let a = m.current;
            if (a)
              return (
                a.addEventListener(e2, t),
                () => a.removeEventListener(e2, t)
              );
          }, [t]),
          (0, T.jsx)(fa, {
            scope: c,
            orientation: d,
            dir: o,
            loop: e,
            currentTabStopId: p,
            onItemFocus: U.useCallback((a) => q(a), [q]),
            onItemShiftTab: U.useCallback(() => s(!0), []),
            onFocusableItemAdd: U.useCallback(() => x((a) => a + 1), []),
            onFocusableItemRemove: U.useCallback(() => x((a) => a - 1), []),
            children: (0, T.jsx)(c5.div, {
              tabIndex: r || 0 === w ? -1 : 0,
              "data-orientation": d,
              ...l,
              ref: n,
              style: { outline: "none", ...a.style },
              onMouseDown: cZ(a.onMouseDown, () => {
                v.current = !0;
              }),
              onFocus: cZ(a.onFocus, (a) => {
                let b = !v.current;
                if (a.target === a.currentTarget && b && !r) {
                  let b = new CustomEvent(e2, e3);
                  if ((a.currentTarget.dispatchEvent(b), !b.defaultPrevented)) {
                    let a = u().filter((a) => a.focusable);
                    fh(
                      [a.find((a) => a.active), a.find((a) => a.id === p), ...a]
                        .filter(Boolean)
                        .map((a) => a.ref.current),
                      k,
                    );
                  }
                }
                v.current = !1;
              }),
              onBlur: cZ(a.onBlur, () => s(!1)),
            }),
          })
        );
      }),
      fe = "RovingFocusGroupItem",
      ff = U.forwardRef((a, b) => {
        let {
            __scopeRovingFocusGroup: c,
            focusable: d = !0,
            active: e = !1,
            tabStopId: f,
            children: g,
            ...h
          } = a,
          i = dA(),
          j = f || i,
          k = fb(fe, c),
          l = k.currentTabStopId === j,
          m = e6(c),
          {
            onFocusableItemAdd: n,
            onFocusableItemRemove: o,
            currentTabStopId: p,
          } = k;
        return (
          U.useEffect(() => {
            if (d) return (n(), () => o());
          }, [d, n, o]),
          (0, T.jsx)(e5.ItemSlot, {
            scope: c,
            id: j,
            focusable: d,
            active: e,
            children: (0, T.jsx)(c5.span, {
              tabIndex: l ? 0 : -1,
              "data-orientation": k.orientation,
              ...h,
              ref: b,
              onMouseDown: cZ(a.onMouseDown, (a) => {
                d ? k.onItemFocus(j) : a.preventDefault();
              }),
              onFocus: cZ(a.onFocus, () => k.onItemFocus(j)),
              onKeyDown: cZ(a.onKeyDown, (a) => {
                if ("Tab" === a.key && a.shiftKey)
                  return void k.onItemShiftTab();
                if (a.target !== a.currentTarget) return;
                let b = (function (a, b, c) {
                  var d;
                  let e =
                    ((d = a.key),
                    "rtl" !== c
                      ? d
                      : "ArrowLeft" === d
                        ? "ArrowRight"
                        : "ArrowRight" === d
                          ? "ArrowLeft"
                          : d);
                  if (
                    !(
                      "vertical" === b &&
                      ["ArrowLeft", "ArrowRight"].includes(e)
                    ) &&
                    !(
                      "horizontal" === b && ["ArrowUp", "ArrowDown"].includes(e)
                    )
                  )
                    return fg[e];
                })(a, k.orientation, k.dir);
                if (void 0 !== b) {
                  if (a.metaKey || a.ctrlKey || a.altKey || a.shiftKey) return;
                  a.preventDefault();
                  let e = m()
                    .filter((a) => a.focusable)
                    .map((a) => a.ref.current);
                  if ("last" === b) e.reverse();
                  else if ("prev" === b || "next" === b) {
                    var c, d;
                    "prev" === b && e.reverse();
                    let f = e.indexOf(a.currentTarget);
                    e = k.loop
                      ? ((c = e),
                        (d = f + 1),
                        c.map((a, b) => c[(d + b) % c.length]))
                      : e.slice(f + 1);
                  }
                  setTimeout(() => fh(e));
                }
              }),
              children:
                "function" == typeof g
                  ? g({ isCurrentTabStop: l, hasTabStop: null != p })
                  : g,
            }),
          })
        );
      });
    ff.displayName = fe;
    var fg = {
      ArrowLeft: "prev",
      ArrowUp: "prev",
      ArrowRight: "next",
      ArrowDown: "next",
      PageUp: "first",
      Home: "first",
      PageDown: "last",
      End: "last",
    };
    function fh(a, b = !1) {
      let c = document.activeElement;
      for (let d of a)
        if (
          d === c ||
          (d.focus({ preventScroll: b }), document.activeElement !== c)
        )
          return;
    }
    var fi = Symbol("radix.slottable");
    function fj(a) {
      return (
        U.isValidElement(a) &&
        "function" == typeof a.type &&
        "__radixId" in a.type &&
        a.type.__radixId === fi
      );
    }
    var fk = new WeakMap(),
      fl = new WeakMap(),
      fm = {},
      fn = 0,
      fo = function (a) {
        return a && (a.host || fo(a.parentNode));
      },
      fp = function (a, b, c, d) {
        var e = (Array.isArray(a) ? a : [a])
          .map(function (a) {
            if (b.contains(a)) return a;
            var c = fo(a);
            return c && b.contains(c)
              ? c
              : (console.error(
                  "aria-hidden",
                  a,
                  "in not contained inside",
                  b,
                  ". Doing nothing",
                ),
                null);
          })
          .filter(function (a) {
            return !!a;
          });
        fm[c] || (fm[c] = new WeakMap());
        var f = fm[c],
          g = [],
          h = new Set(),
          i = new Set(e),
          j = function (a) {
            !a || h.has(a) || (h.add(a), j(a.parentNode));
          };
        e.forEach(j);
        var k = function (a) {
          !a ||
            i.has(a) ||
            Array.prototype.forEach.call(a.children, function (a) {
              if (h.has(a)) k(a);
              else
                try {
                  var b = a.getAttribute(d),
                    e = null !== b && "false" !== b,
                    i = (fk.get(a) || 0) + 1,
                    j = (f.get(a) || 0) + 1;
                  (fk.set(a, i),
                    f.set(a, j),
                    g.push(a),
                    1 === i && e && fl.set(a, !0),
                    1 === j && a.setAttribute(c, "true"),
                    e || a.setAttribute(d, "true"));
                } catch (b) {
                  console.error("aria-hidden: cannot operate on ", a, b);
                }
            });
        };
        return (
          k(b),
          h.clear(),
          fn++,
          function () {
            (g.forEach(function (a) {
              var b = fk.get(a) - 1,
                e = f.get(a) - 1;
              (fk.set(a, b),
                f.set(a, e),
                b || (fl.has(a) || a.removeAttribute(d), fl.delete(a)),
                e || a.removeAttribute(c));
            }),
              --fn ||
                ((fk = new WeakMap()),
                (fk = new WeakMap()),
                (fl = new WeakMap()),
                (fm = {})));
          }
        );
      },
      fq = function (a, b, c) {
        void 0 === c && (c = "data-aria-hidden");
        var d = Array.from(Array.isArray(a) ? a : [a]),
          e =
            b ||
            ("undefined" == typeof document
              ? null
              : (Array.isArray(a) ? a[0] : a).ownerDocument.body);
        return e
          ? (d.push.apply(
              d,
              Array.from(e.querySelectorAll("[aria-live], script")),
            ),
            fp(d, e, c, "aria-hidden"))
          : function () {
              return null;
            };
      },
      fr = a.i(40806),
      fs = "right-scroll-bar-position",
      ft = "width-before-scroll-bar";
    function fu(a, b) {
      return ("function" == typeof a ? a(b) : a && (a.current = b), a);
    }
    var fv = U.useEffect,
      fw = new WeakMap(),
      fx =
        (void 0 === E && (E = {}),
        ((void 0 === F &&
          (F = function (a) {
            return a;
          }),
        (G = []),
        (H = !1),
        (I = {
          read: function () {
            if (H)
              throw Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
              );
            return G.length ? G[G.length - 1] : null;
          },
          useMedium: function (a) {
            var b = F(a, H);
            return (
              G.push(b),
              function () {
                G = G.filter(function (a) {
                  return a !== b;
                });
              }
            );
          },
          assignSyncMedium: function (a) {
            for (H = !0; G.length; ) {
              var b = G;
              ((G = []), b.forEach(a));
            }
            G = {
              push: function (b) {
                return a(b);
              },
              filter: function () {
                return G;
              },
            };
          },
          assignMedium: function (a) {
            H = !0;
            var b = [];
            if (G.length) {
              var c = G;
              ((G = []), c.forEach(a), (b = G));
            }
            var d = function () {
                var c = b;
                ((b = []), c.forEach(a));
              },
              e = function () {
                return Promise.resolve().then(d);
              };
            (e(),
              (G = {
                push: function (a) {
                  (b.push(a), e());
                },
                filter: function (a) {
                  return ((b = b.filter(a)), G);
                },
              }));
          },
        })).options = (0, fr.__assign)({ async: !0, ssr: !1 }, E)),
        I),
      fy = function () {},
      fz = U.forwardRef(function (a, b) {
        var c,
          d,
          e,
          f,
          g = U.useRef(null),
          h = U.useState({
            onScrollCapture: fy,
            onWheelCapture: fy,
            onTouchMoveCapture: fy,
          }),
          i = h[0],
          j = h[1],
          k = a.forwardProps,
          l = a.children,
          m = a.className,
          n = a.removeScrollBar,
          o = a.enabled,
          p = a.shards,
          q = a.sideCar,
          r = a.noRelative,
          s = a.noIsolation,
          t = a.inert,
          u = a.allowPinchZoom,
          v = a.as,
          w = a.gapMode,
          x = (0, fr.__rest)(a, [
            "forwardProps",
            "children",
            "className",
            "removeScrollBar",
            "enabled",
            "shards",
            "sideCar",
            "noRelative",
            "noIsolation",
            "inert",
            "allowPinchZoom",
            "as",
            "gapMode",
          ]),
          y =
            ((c = [g, b]),
            (d = function (a) {
              return c.forEach(function (b) {
                return fu(b, a);
              });
            }),
            ((e = (0, U.useState)(function () {
              return {
                value: null,
                callback: d,
                facade: {
                  get current() {
                    return e.value;
                  },
                  set current(value) {
                    var a = e.value;
                    a !== value && ((e.value = value), e.callback(value, a));
                  },
                },
              };
            })[0]).callback = d),
            (f = e.facade),
            fv(
              function () {
                var a = fw.get(f);
                if (a) {
                  var b = new Set(a),
                    d = new Set(c),
                    e = f.current;
                  (b.forEach(function (a) {
                    d.has(a) || fu(a, null);
                  }),
                    d.forEach(function (a) {
                      b.has(a) || fu(a, e);
                    }));
                }
                fw.set(f, c);
              },
              [c],
            ),
            f),
          z = (0, fr.__assign)((0, fr.__assign)({}, x), i);
        return U.createElement(
          U.Fragment,
          null,
          o &&
            U.createElement(q, {
              sideCar: fx,
              removeScrollBar: n,
              shards: p,
              noRelative: r,
              noIsolation: s,
              inert: t,
              setCallbacks: j,
              allowPinchZoom: !!u,
              lockRef: g,
              gapMode: w,
            }),
          k
            ? U.cloneElement(
                U.Children.only(l),
                (0, fr.__assign)((0, fr.__assign)({}, z), { ref: y }),
              )
            : U.createElement(
                void 0 === v ? "div" : v,
                (0, fr.__assign)({}, z, { className: m, ref: y }),
                l,
              ),
        );
      });
    ((fz.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
      (fz.classNames = { fullWidth: ft, zeroRight: fs }));
    var fA = function (a) {
      var b = a.sideCar,
        c = (0, fr.__rest)(a, ["sideCar"]);
      if (!b)
        throw Error(
          "Sidecar: please provide `sideCar` property to import the right car",
        );
      var d = b.read();
      if (!d) throw Error("Sidecar medium not found");
      return U.createElement(d, (0, fr.__assign)({}, c));
    };
    fA.isSideCarExport = !0;
    var fB = function () {
        var a = 0,
          b = null;
        return {
          add: function (c) {
            if (
              0 == a &&
              (b = (function () {
                if (!document) return null;
                var a = document.createElement("style");
                a.type = "text/css";
                var b =
                  S ||
                  ("undefined" != typeof __webpack_nonce__
                    ? __webpack_nonce__
                    : void 0);
                return (b && a.setAttribute("nonce", b), a);
              })())
            ) {
              var d, e;
              ((d = b).styleSheet
                ? (d.styleSheet.cssText = c)
                : d.appendChild(document.createTextNode(c)),
                (e = b),
                (
                  document.head || document.getElementsByTagName("head")[0]
                ).appendChild(e));
            }
            a++;
          },
          remove: function () {
            --a ||
              !b ||
              (b.parentNode && b.parentNode.removeChild(b), (b = null));
          },
        };
      },
      fC = function () {
        var a = fB();
        return function (b, c) {
          U.useEffect(
            function () {
              return (
                a.add(b),
                function () {
                  a.remove();
                }
              );
            },
            [b && c],
          );
        };
      },
      fD = function () {
        var a = fC();
        return function (b) {
          return (a(b.styles, b.dynamic), null);
        };
      },
      fE = { left: 0, top: 0, right: 0, gap: 0 },
      fF = fD(),
      fG = "data-scroll-locked",
      fH = function (a, b, c, d) {
        var e = a.left,
          f = a.top,
          g = a.right,
          h = a.gap;
        return (
          void 0 === c && (c = "margin"),
          "\n  ."
            .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
            .concat(d, ";\n   padding-right: ")
            .concat(h, "px ")
            .concat(d, ";\n  }\n  body[")
            .concat(fG, "] {\n    overflow: hidden ")
            .concat(d, ";\n    overscroll-behavior: contain;\n    ")
            .concat(
              [
                b && "position: relative ".concat(d, ";"),
                "margin" === c &&
                  "\n    padding-left: "
                    .concat(e, "px;\n    padding-top: ")
                    .concat(f, "px;\n    padding-right: ")
                    .concat(
                      g,
                      "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                    )
                    .concat(h, "px ")
                    .concat(d, ";\n    "),
                "padding" === c &&
                  "padding-right: ".concat(h, "px ").concat(d, ";"),
              ]
                .filter(Boolean)
                .join(""),
              "\n  }\n  \n  .",
            )
            .concat(fs, " {\n    right: ")
            .concat(h, "px ")
            .concat(d, ";\n  }\n  \n  .")
            .concat(ft, " {\n    margin-right: ")
            .concat(h, "px ")
            .concat(d, ";\n  }\n  \n  .")
            .concat(fs, " .")
            .concat(fs, " {\n    right: 0 ")
            .concat(d, ";\n  }\n  \n  .")
            .concat(ft, " .")
            .concat(ft, " {\n    margin-right: 0 ")
            .concat(d, ";\n  }\n  \n  body[")
            .concat(fG, "] {\n    ")
            .concat("--removed-body-scroll-bar-size", ": ")
            .concat(h, "px;\n  }\n")
        );
      },
      fI = function () {
        var a = parseInt(document.body.getAttribute(fG) || "0", 10);
        return isFinite(a) ? a : 0;
      },
      fJ = function () {
        U.useEffect(function () {
          return (
            document.body.setAttribute(fG, (fI() + 1).toString()),
            function () {
              var a = fI() - 1;
              a <= 0
                ? document.body.removeAttribute(fG)
                : document.body.setAttribute(fG, a.toString());
            }
          );
        }, []);
      },
      fK = function (a) {
        var b = a.noRelative,
          c = a.noImportant,
          d = a.gapMode,
          e = void 0 === d ? "margin" : d;
        fJ();
        var f = U.useMemo(
          function () {
            return (void 0 === e, fE);
          },
          [e],
        );
        return U.createElement(fF, {
          styles: fH(f, !b, e, c ? "" : "!important"),
        });
      },
      fL = function (a, b) {
        if (!(a instanceof Element)) return !1;
        var c = window.getComputedStyle(a);
        return (
          "hidden" !== c[b] &&
          (c.overflowY !== c.overflowX ||
            "TEXTAREA" === a.tagName ||
            "visible" !== c[b])
        );
      },
      fM = function (a, b) {
        var c = b.ownerDocument,
          d = b;
        do {
          if (
            ("undefined" != typeof ShadowRoot &&
              d instanceof ShadowRoot &&
              (d = d.host),
            fN(a, d))
          ) {
            var e = fO(a, d);
            if (e[1] > e[2]) return !0;
          }
          d = d.parentNode;
        } while (d && d !== c.body);
        return !1;
      },
      fN = function (a, b) {
        return "v" === a ? fL(b, "overflowY") : fL(b, "overflowX");
      },
      fO = function (a, b) {
        return "v" === a
          ? [b.scrollTop, b.scrollHeight, b.clientHeight]
          : [b.scrollLeft, b.scrollWidth, b.clientWidth];
      },
      fP = function (a, b, c, d, e) {
        var f,
          g =
            ((f = window.getComputedStyle(b).direction),
            "h" === a && "rtl" === f ? -1 : 1),
          h = g * d,
          i = c.target,
          j = b.contains(i),
          k = !1,
          l = h > 0,
          m = 0,
          n = 0;
        do {
          if (!i) break;
          var o = fO(a, i),
            p = o[0],
            q = o[1] - o[2] - g * p;
          (p || q) && fN(a, i) && ((m += q), (n += p));
          var r = i.parentNode;
          i = r && r.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? r.host : r;
        } while (
          (!j && i !== document.body) ||
          (j && (b.contains(i) || b === i))
        );
        return (
          l && ((e && 1 > Math.abs(m)) || (!e && h > m))
            ? (k = !0)
            : !l && ((e && 1 > Math.abs(n)) || (!e && -h > n)) && (k = !0),
          k
        );
      },
      fQ = function (a) {
        return "changedTouches" in a
          ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY]
          : [0, 0];
      },
      fR = function (a) {
        return [a.deltaX, a.deltaY];
      },
      fS = function (a) {
        return a && "current" in a ? a.current : a;
      },
      fT = 0,
      fU = [];
    let fV =
      ((J = function (a) {
        var b = U.useRef([]),
          c = U.useRef([0, 0]),
          d = U.useRef(),
          e = U.useState(fT++)[0],
          f = U.useState(fD)[0],
          g = U.useRef(a);
        (U.useEffect(
          function () {
            g.current = a;
          },
          [a],
        ),
          U.useEffect(
            function () {
              if (a.inert) {
                document.body.classList.add("block-interactivity-".concat(e));
                var b = (0, fr.__spreadArray)(
                  [a.lockRef.current],
                  (a.shards || []).map(fS),
                  !0,
                ).filter(Boolean);
                return (
                  b.forEach(function (a) {
                    return a.classList.add("allow-interactivity-".concat(e));
                  }),
                  function () {
                    (document.body.classList.remove(
                      "block-interactivity-".concat(e),
                    ),
                      b.forEach(function (a) {
                        return a.classList.remove(
                          "allow-interactivity-".concat(e),
                        );
                      }));
                  }
                );
              }
            },
            [a.inert, a.lockRef.current, a.shards],
          ));
        var h = U.useCallback(function (a, b) {
            if (
              ("touches" in a && 2 === a.touches.length) ||
              ("wheel" === a.type && a.ctrlKey)
            )
              return !g.current.allowPinchZoom;
            var e,
              f = fQ(a),
              h = c.current,
              i = "deltaX" in a ? a.deltaX : h[0] - f[0],
              j = "deltaY" in a ? a.deltaY : h[1] - f[1],
              k = a.target,
              l = Math.abs(i) > Math.abs(j) ? "h" : "v";
            if ("touches" in a && "h" === l && "range" === k.type) return !1;
            var m = window.getSelection(),
              n = m && m.anchorNode;
            if (n && (n === k || n.contains(k))) return !1;
            var o = fM(l, k);
            if (!o) return !0;
            if (
              (o ? (e = l) : ((e = "v" === l ? "h" : "v"), (o = fM(l, k))), !o)
            )
              return !1;
            if (
              (!d.current &&
                "changedTouches" in a &&
                (i || j) &&
                (d.current = e),
              !e)
            )
              return !0;
            var p = d.current || e;
            return fP(p, b, a, "h" === p ? i : j, !0);
          }, []),
          i = U.useCallback(function (a) {
            if (fU.length && fU[fU.length - 1] === f) {
              var c = "deltaY" in a ? fR(a) : fQ(a),
                d = b.current.filter(function (b) {
                  var d;
                  return (
                    b.name === a.type &&
                    (b.target === a.target || a.target === b.shadowParent) &&
                    ((d = b.delta), d[0] === c[0] && d[1] === c[1])
                  );
                })[0];
              if (d && d.should) {
                a.cancelable && a.preventDefault();
                return;
              }
              if (!d) {
                var e = (g.current.shards || [])
                  .map(fS)
                  .filter(Boolean)
                  .filter(function (b) {
                    return b.contains(a.target);
                  });
                (e.length > 0 ? h(a, e[0]) : !g.current.noIsolation) &&
                  a.cancelable &&
                  a.preventDefault();
              }
            }
          }, []),
          j = U.useCallback(function (a, c, d, e) {
            var f = {
              name: a,
              delta: c,
              target: d,
              should: e,
              shadowParent: (function (a) {
                for (var b = null; null !== a; )
                  (a instanceof ShadowRoot && ((b = a.host), (a = a.host)),
                    (a = a.parentNode));
                return b;
              })(d),
            };
            (b.current.push(f),
              setTimeout(function () {
                b.current = b.current.filter(function (a) {
                  return a !== f;
                });
              }, 1));
          }, []),
          k = U.useCallback(function (a) {
            ((c.current = fQ(a)), (d.current = void 0));
          }, []),
          l = U.useCallback(function (b) {
            j(b.type, fR(b), b.target, h(b, a.lockRef.current));
          }, []),
          m = U.useCallback(function (b) {
            j(b.type, fQ(b), b.target, h(b, a.lockRef.current));
          }, []);
        U.useEffect(function () {
          return (
            fU.push(f),
            a.setCallbacks({
              onScrollCapture: l,
              onWheelCapture: l,
              onTouchMoveCapture: m,
            }),
            document.addEventListener("wheel", i, !1),
            document.addEventListener("touchmove", i, !1),
            document.addEventListener("touchstart", k, !1),
            function () {
              ((fU = fU.filter(function (a) {
                return a !== f;
              })),
                document.removeEventListener("wheel", i, !1),
                document.removeEventListener("touchmove", i, !1),
                document.removeEventListener("touchstart", k, !1));
            }
          );
        }, []);
        var n = a.removeScrollBar,
          o = a.inert;
        return U.createElement(
          U.Fragment,
          null,
          o
            ? U.createElement(f, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    e,
                    " {pointer-events: none;}\n  .allow-interactivity-",
                  )
                  .concat(e, " {pointer-events: all;}\n"),
              })
            : null,
          n
            ? U.createElement(fK, {
                noRelative: a.noRelative,
                gapMode: a.gapMode,
              })
            : null,
        );
      }),
      fx.useMedium(J),
      fA);
    var fW = U.forwardRef(function (a, b) {
      return U.createElement(
        fz,
        (0, fr.__assign)({}, a, { ref: b, sideCar: fV }),
      );
    });
    fW.classNames = fz.classNames;
    var fX = ["Enter", " "],
      fY = ["ArrowUp", "PageDown", "End"],
      fZ = ["ArrowDown", "PageUp", "Home", ...fY],
      f$ = { ltr: [...fX, "ArrowRight"], rtl: [...fX, "ArrowLeft"] },
      f_ = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
      f0 = "Menu",
      [f1, f2, f3] = da(f0),
      [f4, f5] = c_(f0, [f3, eL, e9]),
      f6 = eL(),
      f7 = e9(),
      [f8, f9] = f4(f0),
      [ga, gb] = f4(f0),
      gc = (a) => {
        let {
            __scopeMenu: b,
            open: c = !1,
            children: d,
            dir: e,
            onOpenChange: f,
            modal: g = !0,
          } = a,
          h = f6(b),
          [i, j] = U.useState(null),
          k = U.useRef(!1),
          l = dg(f),
          m = df(e);
        return (
          U.useEffect(() => {
            let a = () => {
                ((k.current = !0),
                  document.addEventListener("pointerdown", b, {
                    capture: !0,
                    once: !0,
                  }),
                  document.addEventListener("pointermove", b, {
                    capture: !0,
                    once: !0,
                  }));
              },
              b = () => (k.current = !1);
            return (
              document.addEventListener("keydown", a, { capture: !0 }),
              () => {
                (document.removeEventListener("keydown", a, { capture: !0 }),
                  document.removeEventListener("pointerdown", b, {
                    capture: !0,
                  }),
                  document.removeEventListener("pointermove", b, {
                    capture: !0,
                  }));
              }
            );
          }, []),
          (0, T.jsx)(eO, {
            ...h,
            children: (0, T.jsx)(f8, {
              scope: b,
              open: c,
              onOpenChange: l,
              content: i,
              onContentChange: j,
              children: (0, T.jsx)(ga, {
                scope: b,
                onClose: U.useCallback(() => l(!1), [l]),
                isUsingKeyboardRef: k,
                dir: m,
                modal: g,
                children: d,
              }),
            }),
          })
        );
      };
    gc.displayName = f0;
    var gd = U.forwardRef((a, b) => {
      let { __scopeMenu: c, ...d } = a,
        e = f6(c);
      return (0, T.jsx)(eQ, { ...e, ...d, ref: b });
    });
    gd.displayName = "MenuAnchor";
    var ge = "MenuPortal",
      [gf, gg] = f4(ge, { forceMount: void 0 }),
      gh = (a) => {
        let { __scopeMenu: b, forceMount: c, children: d, container: e } = a,
          f = f9(ge, b);
        return (0, T.jsx)(gf, {
          scope: b,
          forceMount: c,
          children: (0, T.jsx)(e0, {
            present: c || f.open,
            children: (0, T.jsx)(e_, {
              asChild: !0,
              container: e,
              children: d,
            }),
          }),
        });
      };
    gh.displayName = ge;
    var gi = "MenuContent",
      [gj, gk] = f4(gi),
      gl = U.forwardRef((a, b) => {
        let c = gg(gi, a.__scopeMenu),
          { forceMount: d = c.forceMount, ...e } = a,
          f = f9(gi, a.__scopeMenu),
          g = gb(gi, a.__scopeMenu);
        return (0, T.jsx)(f1.Provider, {
          scope: a.__scopeMenu,
          children: (0, T.jsx)(e0, {
            present: d || f.open,
            children: (0, T.jsx)(f1.Slot, {
              scope: a.__scopeMenu,
              children: g.modal
                ? (0, T.jsx)(gm, { ...e, ref: b })
                : (0, T.jsx)(gn, { ...e, ref: b }),
            }),
          }),
        });
      }),
      gm = U.forwardRef((a, b) => {
        let c = f9(gi, a.__scopeMenu),
          d = U.useRef(null),
          e = (0, c$.useComposedRefs)(b, d);
        return (
          U.useEffect(() => {
            let a = d.current;
            if (a) return fq(a);
          }, []),
          (0, T.jsx)(gp, {
            ...a,
            ref: e,
            trapFocus: c.open,
            disableOutsidePointerEvents: c.open,
            disableOutsideScroll: !0,
            onFocusOutside: cZ(a.onFocusOutside, (a) => a.preventDefault(), {
              checkForDefaultPrevented: !1,
            }),
            onDismiss: () => c.onOpenChange(!1),
          })
        );
      }),
      gn = U.forwardRef((a, b) => {
        let c = f9(gi, a.__scopeMenu);
        return (0, T.jsx)(gp, {
          ...a,
          ref: b,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          disableOutsideScroll: !1,
          onDismiss: () => c.onOpenChange(!1),
        });
      }),
      go =
        (((B = U.forwardRef((a, b) => {
          let { children: c, ...d } = a;
          if (U.isValidElement(c)) {
            var e;
            let a,
              f,
              g =
                ((e = c),
                (f =
                  (a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get) &&
                  "isReactWarning" in a &&
                  a.isReactWarning)
                  ? e.ref
                  : (f =
                        (a = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                        "isReactWarning" in a &&
                        a.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref),
              h = (function (a, b) {
                let c = { ...b };
                for (let d in b) {
                  let e = a[d],
                    f = b[d];
                  /^on[A-Z]/.test(d)
                    ? e && f
                      ? (c[d] = (...a) => {
                          let b = f(...a);
                          return (e(...a), b);
                        })
                      : e && (c[d] = e)
                    : "style" === d
                      ? (c[d] = { ...e, ...f })
                      : "className" === d &&
                        (c[d] = [e, f].filter(Boolean).join(" "));
                }
                return { ...a, ...c };
              })(d, c.props);
            return (
              c.type !== U.Fragment &&
                (h.ref = b ? (0, c$.composeRefs)(b, g) : g),
              U.cloneElement(c, h)
            );
          }
          return U.Children.count(c) > 1 ? U.Children.only(null) : null;
        })).displayName = "MenuContent.ScrollLock.SlotClone"),
        (y = B),
        ((z = U.forwardRef((a, b) => {
          let { children: c, ...d } = a,
            e = U.Children.toArray(c),
            f = e.find(fj);
          if (f) {
            let a = f.props.children,
              c = e.map((b) =>
                b !== f
                  ? b
                  : U.Children.count(a) > 1
                    ? U.Children.only(null)
                    : U.isValidElement(a)
                      ? a.props.children
                      : null,
              );
            return (0, T.jsx)(y, {
              ...d,
              ref: b,
              children: U.isValidElement(a)
                ? U.cloneElement(a, void 0, c)
                : null,
            });
          }
          return (0, T.jsx)(y, { ...d, ref: b, children: c });
        })).displayName = "MenuContent.ScrollLock.Slot"),
        z),
      gp = U.forwardRef((a, b) => {
        let {
            __scopeMenu: c,
            loop: d = !1,
            trapFocus: e,
            onOpenAutoFocus: f,
            onCloseAutoFocus: g,
            disableOutsidePointerEvents: h,
            onEntryFocus: i,
            onEscapeKeyDown: j,
            onPointerDownOutside: k,
            onFocusOutside: l,
            onInteractOutside: m,
            onDismiss: n,
            disableOutsideScroll: o,
            ...p
          } = a,
          q = f9(gi, c),
          r = gb(gi, c),
          s = f6(c),
          t = f7(c),
          u = f2(c),
          [v, w] = U.useState(null),
          x = U.useRef(null),
          y = (0, c$.useComposedRefs)(b, x, q.onContentChange),
          z = U.useRef(0),
          A = U.useRef(""),
          B = U.useRef(0),
          C = U.useRef(null),
          D = U.useRef("right"),
          E = U.useRef(0),
          F = o ? fW : U.Fragment;
        (U.useEffect(() => () => window.clearTimeout(z.current), []),
          U.useEffect(() => {
            let a = document.querySelectorAll("[data-radix-focus-guard]");
            return (
              document.body.insertAdjacentElement("afterbegin", a[0] ?? dn()),
              document.body.insertAdjacentElement("beforeend", a[1] ?? dn()),
              dm++,
              () => {
                (1 === dm &&
                  document
                    .querySelectorAll("[data-radix-focus-guard]")
                    .forEach((a) => a.remove()),
                  dm--);
              }
            );
          }, []));
        let G = U.useCallback((a) => {
          var b, c;
          return (
            D.current === C.current?.side &&
            ((b = a),
            !!(c = C.current?.area) &&
              (function (a, b) {
                let { x: c, y: d } = a,
                  e = !1;
                for (let a = 0, f = b.length - 1; a < b.length; f = a++) {
                  let g = b[a],
                    h = b[f],
                    i = g.x,
                    j = g.y,
                    k = h.x,
                    l = h.y;
                  j > d != l > d &&
                    c < ((k - i) * (d - j)) / (l - j) + i &&
                    (e = !e);
                }
                return e;
              })({ x: b.clientX, y: b.clientY }, c))
          );
        }, []);
        return (0, T.jsx)(gj, {
          scope: c,
          searchRef: A,
          onItemEnter: U.useCallback(
            (a) => {
              G(a) && a.preventDefault();
            },
            [G],
          ),
          onItemLeave: U.useCallback(
            (a) => {
              G(a) || (x.current?.focus(), w(null));
            },
            [G],
          ),
          onTriggerLeave: U.useCallback(
            (a) => {
              G(a) && a.preventDefault();
            },
            [G],
          ),
          pointerGraceTimerRef: B,
          onPointerGraceIntentChange: U.useCallback((a) => {
            C.current = a;
          }, []),
          children: (0, T.jsx)(F, {
            ...(o ? { as: go, allowPinchZoom: !0 } : void 0),
            children: (0, T.jsx)(ds, {
              asChild: !0,
              trapped: e,
              onMountAutoFocus: cZ(f, (a) => {
                (a.preventDefault(), x.current?.focus({ preventScroll: !0 }));
              }),
              onUnmountAutoFocus: g,
              children: (0, T.jsx)(dj, {
                asChild: !0,
                disableOutsidePointerEvents: h,
                onEscapeKeyDown: j,
                onPointerDownOutside: k,
                onFocusOutside: l,
                onInteractOutside: m,
                onDismiss: n,
                children: (0, T.jsx)(fc, {
                  asChild: !0,
                  ...t,
                  dir: r.dir,
                  orientation: "vertical",
                  loop: d,
                  currentTabStopId: v,
                  onCurrentTabStopIdChange: w,
                  onEntryFocus: cZ(i, (a) => {
                    r.isUsingKeyboardRef.current || a.preventDefault();
                  }),
                  preventScrollOnEntryFocus: !0,
                  children: (0, T.jsx)(eU, {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "data-state": gP(q.open),
                    "data-radix-menu-content": "",
                    dir: r.dir,
                    ...s,
                    ...p,
                    ref: y,
                    style: { outline: "none", ...p.style },
                    onKeyDown: cZ(p.onKeyDown, (a) => {
                      let b =
                          a.target.closest("[data-radix-menu-content]") ===
                          a.currentTarget,
                        c = a.ctrlKey || a.altKey || a.metaKey,
                        d = 1 === a.key.length;
                      if (b) {
                        var e;
                        let b, f, g, h, i, j;
                        ("Tab" === a.key && a.preventDefault(),
                          !c &&
                            d &&
                            ((e = a.key),
                            (b = A.current + e),
                            (f = u().filter((a) => !a.disabled)),
                            (g = document.activeElement),
                            (h = f.find((a) => a.ref.current === g)?.textValue),
                            (i = (function (a, b, c) {
                              var d;
                              let e =
                                  b.length > 1 &&
                                  Array.from(b).every((a) => a === b[0])
                                    ? b[0]
                                    : b,
                                f = c ? a.indexOf(c) : -1,
                                g =
                                  ((d = Math.max(f, 0)),
                                  a.map((b, c) => a[(d + c) % a.length]));
                              1 === e.length && (g = g.filter((a) => a !== c));
                              let h = g.find((a) =>
                                a.toLowerCase().startsWith(e.toLowerCase()),
                              );
                              return h !== c ? h : void 0;
                            })(
                              f.map((a) => a.textValue),
                              b,
                              h,
                            )),
                            (j = f.find((a) => a.textValue === i)?.ref.current),
                            (function a(b) {
                              ((A.current = b),
                                window.clearTimeout(z.current),
                                "" !== b &&
                                  (z.current = window.setTimeout(
                                    () => a(""),
                                    1e3,
                                  )));
                            })(b),
                            j && setTimeout(() => j.focus())));
                      }
                      let f = x.current;
                      if (a.target !== f || !fZ.includes(a.key)) return;
                      a.preventDefault();
                      let g = u()
                        .filter((a) => !a.disabled)
                        .map((a) => a.ref.current);
                      (fY.includes(a.key) && g.reverse(),
                        (function (a) {
                          let b = document.activeElement;
                          for (let c of a)
                            if (
                              c === b ||
                              (c.focus(), document.activeElement !== b)
                            )
                              return;
                        })(g));
                    }),
                    onBlur: cZ(a.onBlur, (a) => {
                      a.currentTarget.contains(a.target) ||
                        (window.clearTimeout(z.current), (A.current = ""));
                    }),
                    onPointerMove: cZ(
                      a.onPointerMove,
                      gS((a) => {
                        let b = a.target,
                          c = E.current !== a.clientX;
                        a.currentTarget.contains(b) &&
                          c &&
                          ((D.current =
                            a.clientX > E.current ? "right" : "left"),
                          (E.current = a.clientX));
                      }),
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      });
    gl.displayName = gi;
    var gq = U.forwardRef((a, b) => {
      let { __scopeMenu: c, ...d } = a;
      return (0, T.jsx)(c5.div, { role: "group", ...d, ref: b });
    });
    gq.displayName = "MenuGroup";
    var gr = U.forwardRef((a, b) => {
      let { __scopeMenu: c, ...d } = a;
      return (0, T.jsx)(c5.div, { ...d, ref: b });
    });
    gr.displayName = "MenuLabel";
    var gs = "MenuItem",
      gt = "menu.itemSelect",
      gu = U.forwardRef((a, b) => {
        let { disabled: c = !1, onSelect: d, ...e } = a,
          f = U.useRef(null),
          g = gb(gs, a.__scopeMenu),
          h = gk(gs, a.__scopeMenu),
          i = (0, c$.useComposedRefs)(b, f),
          j = U.useRef(!1);
        return (0, T.jsx)(gv, {
          ...e,
          ref: i,
          disabled: c,
          onClick: cZ(a.onClick, () => {
            let a = f.current;
            if (!c && a) {
              let b = new CustomEvent(gt, { bubbles: !0, cancelable: !0 });
              (a.addEventListener(gt, (a) => d?.(a), { once: !0 }),
                c6(a, b),
                b.defaultPrevented ? (j.current = !1) : g.onClose());
            }
          }),
          onPointerDown: (b) => {
            (a.onPointerDown?.(b), (j.current = !0));
          },
          onPointerUp: cZ(a.onPointerUp, (a) => {
            j.current || a.currentTarget?.click();
          }),
          onKeyDown: cZ(a.onKeyDown, (a) => {
            let b = "" !== h.searchRef.current;
            c ||
              (b && " " === a.key) ||
              (fX.includes(a.key) &&
                (a.currentTarget.click(), a.preventDefault()));
          }),
        });
      });
    gu.displayName = gs;
    var gv = U.forwardRef((a, b) => {
        let { __scopeMenu: c, disabled: d = !1, textValue: e, ...f } = a,
          g = gk(gs, c),
          h = f7(c),
          i = U.useRef(null),
          j = (0, c$.useComposedRefs)(b, i),
          [k, l] = U.useState(!1),
          [m, n] = U.useState("");
        return (
          U.useEffect(() => {
            let a = i.current;
            a && n((a.textContent ?? "").trim());
          }, [f.children]),
          (0, T.jsx)(f1.ItemSlot, {
            scope: c,
            disabled: d,
            textValue: e ?? m,
            children: (0, T.jsx)(ff, {
              asChild: !0,
              ...h,
              focusable: !d,
              children: (0, T.jsx)(c5.div, {
                role: "menuitem",
                "data-highlighted": k ? "" : void 0,
                "aria-disabled": d || void 0,
                "data-disabled": d ? "" : void 0,
                ...f,
                ref: j,
                onPointerMove: cZ(
                  a.onPointerMove,
                  gS((a) => {
                    d
                      ? g.onItemLeave(a)
                      : (g.onItemEnter(a),
                        a.defaultPrevented ||
                          a.currentTarget.focus({ preventScroll: !0 }));
                  }),
                ),
                onPointerLeave: cZ(
                  a.onPointerLeave,
                  gS((a) => g.onItemLeave(a)),
                ),
                onFocus: cZ(a.onFocus, () => l(!0)),
                onBlur: cZ(a.onBlur, () => l(!1)),
              }),
            }),
          })
        );
      }),
      gw = U.forwardRef((a, b) => {
        let { checked: c = !1, onCheckedChange: d, ...e } = a;
        return (0, T.jsx)(gE, {
          scope: a.__scopeMenu,
          checked: c,
          children: (0, T.jsx)(gu, {
            role: "menuitemcheckbox",
            "aria-checked": gQ(c) ? "mixed" : c,
            ...e,
            ref: b,
            "data-state": gR(c),
            onSelect: cZ(e.onSelect, () => d?.(!!gQ(c) || !c), {
              checkForDefaultPrevented: !1,
            }),
          }),
        });
      });
    gw.displayName = "MenuCheckboxItem";
    var gx = "MenuRadioGroup",
      [gy, gz] = f4(gx, { value: void 0, onValueChange: () => {} }),
      gA = U.forwardRef((a, b) => {
        let { value: c, onValueChange: d, ...e } = a,
          f = dg(d);
        return (0, T.jsx)(gy, {
          scope: a.__scopeMenu,
          value: c,
          onValueChange: f,
          children: (0, T.jsx)(gq, { ...e, ref: b }),
        });
      });
    gA.displayName = gx;
    var gB = "MenuRadioItem",
      gC = U.forwardRef((a, b) => {
        let { value: c, ...d } = a,
          e = gz(gB, a.__scopeMenu),
          f = c === e.value;
        return (0, T.jsx)(gE, {
          scope: a.__scopeMenu,
          checked: f,
          children: (0, T.jsx)(gu, {
            role: "menuitemradio",
            "aria-checked": f,
            ...d,
            ref: b,
            "data-state": gR(f),
            onSelect: cZ(d.onSelect, () => e.onValueChange?.(c), {
              checkForDefaultPrevented: !1,
            }),
          }),
        });
      });
    gC.displayName = gB;
    var gD = "MenuItemIndicator",
      [gE, gF] = f4(gD, { checked: !1 }),
      gG = U.forwardRef((a, b) => {
        let { __scopeMenu: c, forceMount: d, ...e } = a,
          f = gF(gD, c);
        return (0, T.jsx)(e0, {
          present: d || gQ(f.checked) || !0 === f.checked,
          children: (0, T.jsx)(c5.span, {
            ...e,
            ref: b,
            "data-state": gR(f.checked),
          }),
        });
      });
    gG.displayName = gD;
    var gH = U.forwardRef((a, b) => {
      let { __scopeMenu: c, ...d } = a;
      return (0, T.jsx)(c5.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...d,
        ref: b,
      });
    });
    gH.displayName = "MenuSeparator";
    var gI = U.forwardRef((a, b) => {
      let { __scopeMenu: c, ...d } = a,
        e = f6(c);
      return (0, T.jsx)(eX, { ...e, ...d, ref: b });
    });
    gI.displayName = "MenuArrow";
    var [gJ, gK] = f4("MenuSub"),
      gL = "MenuSubTrigger",
      gM = U.forwardRef((a, b) => {
        let c = f9(gL, a.__scopeMenu),
          d = gb(gL, a.__scopeMenu),
          e = gK(gL, a.__scopeMenu),
          f = gk(gL, a.__scopeMenu),
          g = U.useRef(null),
          { pointerGraceTimerRef: h, onPointerGraceIntentChange: i } = f,
          j = { __scopeMenu: a.__scopeMenu },
          k = U.useCallback(() => {
            (g.current && window.clearTimeout(g.current), (g.current = null));
          }, []);
        return (
          U.useEffect(() => k, [k]),
          U.useEffect(() => {
            let a = h.current;
            return () => {
              (window.clearTimeout(a), i(null));
            };
          }, [h, i]),
          (0, T.jsx)(gd, {
            asChild: !0,
            ...j,
            children: (0, T.jsx)(gv, {
              id: e.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": c.open,
              "aria-controls": e.contentId,
              "data-state": gP(c.open),
              ...a,
              ref: (0, c$.composeRefs)(b, e.onTriggerChange),
              onClick: (b) => {
                (a.onClick?.(b),
                  a.disabled ||
                    b.defaultPrevented ||
                    (b.currentTarget.focus(), c.open || c.onOpenChange(!0)));
              },
              onPointerMove: cZ(
                a.onPointerMove,
                gS((b) => {
                  (f.onItemEnter(b),
                    !b.defaultPrevented &&
                      (a.disabled ||
                        c.open ||
                        g.current ||
                        (f.onPointerGraceIntentChange(null),
                        (g.current = window.setTimeout(() => {
                          (c.onOpenChange(!0), k());
                        }, 100)))));
                }),
              ),
              onPointerLeave: cZ(
                a.onPointerLeave,
                gS((a) => {
                  k();
                  let b = c.content?.getBoundingClientRect();
                  if (b) {
                    let d = c.content?.dataset.side,
                      e = "right" === d,
                      g = b[e ? "left" : "right"],
                      i = b[e ? "right" : "left"];
                    (f.onPointerGraceIntentChange({
                      area: [
                        { x: a.clientX + (e ? -5 : 5), y: a.clientY },
                        { x: g, y: b.top },
                        { x: i, y: b.top },
                        { x: i, y: b.bottom },
                        { x: g, y: b.bottom },
                      ],
                      side: d,
                    }),
                      window.clearTimeout(h.current),
                      (h.current = window.setTimeout(
                        () => f.onPointerGraceIntentChange(null),
                        300,
                      )));
                  } else {
                    if ((f.onTriggerLeave(a), a.defaultPrevented)) return;
                    f.onPointerGraceIntentChange(null);
                  }
                }),
              ),
              onKeyDown: cZ(a.onKeyDown, (b) => {
                let e = "" !== f.searchRef.current;
                a.disabled ||
                  (e && " " === b.key) ||
                  (f$[d.dir].includes(b.key) &&
                    (c.onOpenChange(!0),
                    c.content?.focus(),
                    b.preventDefault()));
              }),
            }),
          })
        );
      });
    gM.displayName = gL;
    var gN = "MenuSubContent",
      gO = U.forwardRef((a, b) => {
        let c = gg(gi, a.__scopeMenu),
          { forceMount: d = c.forceMount, ...e } = a,
          f = f9(gi, a.__scopeMenu),
          g = gb(gi, a.__scopeMenu),
          h = gK(gN, a.__scopeMenu),
          i = U.useRef(null),
          j = (0, c$.useComposedRefs)(b, i);
        return (0, T.jsx)(f1.Provider, {
          scope: a.__scopeMenu,
          children: (0, T.jsx)(e0, {
            present: d || f.open,
            children: (0, T.jsx)(f1.Slot, {
              scope: a.__scopeMenu,
              children: (0, T.jsx)(gp, {
                id: h.contentId,
                "aria-labelledby": h.triggerId,
                ...e,
                ref: j,
                align: "start",
                side: "rtl" === g.dir ? "left" : "right",
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                trapFocus: !1,
                onOpenAutoFocus: (a) => {
                  (g.isUsingKeyboardRef.current && i.current?.focus(),
                    a.preventDefault());
                },
                onCloseAutoFocus: (a) => a.preventDefault(),
                onFocusOutside: cZ(a.onFocusOutside, (a) => {
                  a.target !== h.trigger && f.onOpenChange(!1);
                }),
                onEscapeKeyDown: cZ(a.onEscapeKeyDown, (a) => {
                  (g.onClose(), a.preventDefault());
                }),
                onKeyDown: cZ(a.onKeyDown, (a) => {
                  let b = a.currentTarget.contains(a.target),
                    c = f_[g.dir].includes(a.key);
                  b &&
                    c &&
                    (f.onOpenChange(!1),
                    h.trigger?.focus(),
                    a.preventDefault());
                }),
              }),
            }),
          }),
        });
      });
    function gP(a) {
      return a ? "open" : "closed";
    }
    function gQ(a) {
      return "indeterminate" === a;
    }
    function gR(a) {
      return gQ(a) ? "indeterminate" : a ? "checked" : "unchecked";
    }
    function gS(a) {
      return (b) => ("mouse" === b.pointerType ? a(b) : void 0);
    }
    gO.displayName = gN;
    var gT = "DropdownMenu",
      [gU, gV] = c_(gT, [f5]),
      gW = f5(),
      [gX, gY] = gU(gT),
      gZ = (a) => {
        let {
            __scopeDropdownMenu: b,
            children: c,
            dir: d,
            open: e,
            defaultOpen: f,
            onOpenChange: g,
            modal: h = !0,
          } = a,
          i = gW(b),
          j = U.useRef(null),
          [k, l] = c2({
            prop: e,
            defaultProp: f ?? !1,
            onChange: g,
            caller: gT,
          });
        return (0, T.jsx)(gX, {
          scope: b,
          triggerId: dA(),
          triggerRef: j,
          contentId: dA(),
          open: k,
          onOpenChange: l,
          onOpenToggle: U.useCallback(() => l((a) => !a), [l]),
          modal: h,
          children: (0, T.jsx)(gc, {
            ...i,
            open: k,
            onOpenChange: l,
            dir: d,
            modal: h,
            children: c,
          }),
        });
      };
    gZ.displayName = gT;
    var g$ = "DropdownMenuTrigger",
      g_ = U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, disabled: d = !1, ...e } = a,
          f = gY(g$, c),
          g = gW(c);
        return (0, T.jsx)(gd, {
          asChild: !0,
          ...g,
          children: (0, T.jsx)(c5.button, {
            type: "button",
            id: f.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": f.open,
            "aria-controls": f.open ? f.contentId : void 0,
            "data-state": f.open ? "open" : "closed",
            "data-disabled": d ? "" : void 0,
            disabled: d,
            ...e,
            ref: (0, c$.composeRefs)(b, f.triggerRef),
            onPointerDown: cZ(a.onPointerDown, (a) => {
              !d &&
                0 === a.button &&
                !1 === a.ctrlKey &&
                (f.onOpenToggle(), f.open || a.preventDefault());
            }),
            onKeyDown: cZ(a.onKeyDown, (a) => {
              !d &&
                (["Enter", " "].includes(a.key) && f.onOpenToggle(),
                "ArrowDown" === a.key && f.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(a.key) &&
                  a.preventDefault());
            }),
          }),
        });
      });
    g_.displayName = g$;
    var g0 = (a) => {
      let { __scopeDropdownMenu: b, ...c } = a,
        d = gW(b);
      return (0, T.jsx)(gh, { ...d, ...c });
    };
    g0.displayName = "DropdownMenuPortal";
    var g1 = "DropdownMenuContent",
      g2 = U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gY(g1, c),
          f = gW(c),
          g = U.useRef(!1);
        return (0, T.jsx)(gl, {
          id: e.contentId,
          "aria-labelledby": e.triggerId,
          ...f,
          ...d,
          ref: b,
          onCloseAutoFocus: cZ(a.onCloseAutoFocus, (a) => {
            (g.current || e.triggerRef.current?.focus(),
              (g.current = !1),
              a.preventDefault());
          }),
          onInteractOutside: cZ(a.onInteractOutside, (a) => {
            let b = a.detail.originalEvent,
              c = 0 === b.button && !0 === b.ctrlKey,
              d = 2 === b.button || c;
            (!e.modal || d) && (g.current = !0);
          }),
          style: {
            ...a.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
    ((g2.displayName = g1),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gq, { ...e, ...d, ref: b });
      }).displayName = "DropdownMenuGroup"),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gr, { ...e, ...d, ref: b });
      }).displayName = "DropdownMenuLabel"));
    var g3 = U.forwardRef((a, b) => {
      let { __scopeDropdownMenu: c, ...d } = a,
        e = gW(c);
      return (0, T.jsx)(gu, { ...e, ...d, ref: b });
    });
    ((g3.displayName = "DropdownMenuItem"),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gw, { ...e, ...d, ref: b });
      }).displayName = "DropdownMenuCheckboxItem"),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gA, { ...e, ...d, ref: b });
      }).displayName = "DropdownMenuRadioGroup"),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gC, { ...e, ...d, ref: b });
      }).displayName = "DropdownMenuRadioItem"),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gG, { ...e, ...d, ref: b });
      }).displayName = "DropdownMenuItemIndicator"),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gH, { ...e, ...d, ref: b });
      }).displayName = "DropdownMenuSeparator"),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gI, { ...e, ...d, ref: b });
      }).displayName = "DropdownMenuArrow"),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gM, { ...e, ...d, ref: b });
      }).displayName = "DropdownMenuSubTrigger"),
      (U.forwardRef((a, b) => {
        let { __scopeDropdownMenu: c, ...d } = a,
          e = gW(c);
        return (0, T.jsx)(gO, {
          ...e,
          ...d,
          ref: b,
          style: {
            ...a.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      }).displayName = "DropdownMenuSubContent"));
    let g4 = (a) => {
        let b = a.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, b, c) =>
          c ? c.toUpperCase() : b.toLowerCase(),
        );
        return b.charAt(0).toUpperCase() + b.slice(1);
      },
      g5 = (...a) =>
        a
          .filter((a, b, c) => !!a && "" !== a.trim() && c.indexOf(a) === b)
          .join(" ")
          .trim();
    var g6 = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let g7 = (0, U.forwardRef)(
        (
          {
            color: a = "currentColor",
            size: b = 24,
            strokeWidth: c = 2,
            absoluteStrokeWidth: d,
            className: e = "",
            children: f,
            iconNode: g,
            ...h
          },
          i,
        ) =>
          (0, U.createElement)(
            "svg",
            {
              ref: i,
              ...g6,
              width: b,
              height: b,
              stroke: a,
              strokeWidth: d ? (24 * Number(c)) / Number(b) : c,
              className: g5("lucide", e),
              ...(!f &&
                !((a) => {
                  for (let b in a)
                    if (b.startsWith("aria-") || "role" === b || "title" === b)
                      return !0;
                })(h) && { "aria-hidden": "true" }),
              ...h,
            },
            [
              ...g.map(([a, b]) => (0, U.createElement)(a, b)),
              ...(Array.isArray(f) ? f : [f]),
            ],
          ),
      ),
      g8 = (a, b) => {
        let c = (0, U.forwardRef)(({ className: c, ...d }, e) =>
          (0, U.createElement)(g7, {
            ref: e,
            iconNode: b,
            className: g5(
              `lucide-${g4(a)
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              `lucide-${a}`,
              c,
            ),
            ...d,
          }),
        );
        return ((c.displayName = g4(a)), c);
      },
      g9 = g8("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
    (g8("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]),
      g8("circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]));
    var ha = a.i(84032);
    function hb({ ...a }) {
      return (0, T.jsx)(gZ, { "data-slot": "dropdown-menu", ...a });
    }
    function hc({ ...a }) {
      return (0, T.jsx)(g_, { "data-slot": "dropdown-menu-trigger", ...a });
    }
    function hd({ className: a, sideOffset: b = 4, ...c }) {
      return (0, T.jsx)(g0, {
        children: (0, T.jsx)(g2, {
          "data-slot": "dropdown-menu-content",
          sideOffset: b,
          className: (0, ha.cn)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a,
          ),
          ...c,
        }),
      });
    }
    function he({ className: a, inset: b, variant: c = "default", ...d }) {
      return (0, T.jsx)(g3, {
        "data-slot": "dropdown-menu-item",
        "data-inset": b,
        "data-variant": c,
        className: (0, ha.cn)(
          "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          a,
        ),
        ...d,
      });
    }
    let hf = g8("menu", [
        ["path", { d: "M4 5h16", key: "1tepv9" }],
        ["path", { d: "M4 12h16", key: "1lakjw" }],
        ["path", { d: "M4 19h16", key: "1djgab" }],
      ]),
      hg = g8("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]),
      hh = g8("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
      hi = g8("moon", [
        [
          "path",
          {
            d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
            key: "kfwtm",
          },
        ],
      ]),
      hj = g8("sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    var hk = a.i(66455),
      hl = a.i(65916);
    function hm() {
      let { setTheme: a } = (0, hk.useTheme)();
      return (0, T.jsxs)(hb, {
        children: [
          (0, T.jsx)(hc, {
            asChild: !0,
            children: (0, T.jsxs)(hl.Button, {
              variant: "outline",
              size: "icon",
              children: [
                (0, T.jsx)(hj, {
                  className:
                    "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90",
                }),
                (0, T.jsx)(hi, {
                  className:
                    "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0",
                }),
                (0, T.jsx)("span", {
                  className: "sr-only",
                  children: "Toggle theme",
                }),
              ],
            }),
          }),
          (0, T.jsxs)(hd, {
            align: "end",
            children: [
              (0, T.jsx)(he, { onClick: () => a("light"), children: "Light" }),
              (0, T.jsx)(he, { onClick: () => a("dark"), children: "Dark" }),
              (0, T.jsx)(he, {
                onClick: () => a("system"),
                children: "System",
              }),
            ],
          }),
        ],
      });
    }
    var hn = a.i(16842),
      ho = a.i(30289),
      hp = a.i(6400),
      hq = a.i(29047),
      hr = U["use".trim()];
    function hs(a) {
      let b;
      return (
        ("object" == typeof a
          ? null == a.host && null == a.hostname
          : !/^[a-z]+:/i.test(a)) &&
        (null == (b = "object" == typeof a ? a.pathname : a) ||
          !!b.startsWith("/"))
      );
    }
    function ht(a, b) {
      return a.replace(RegExp(`^${b}`), "") || "/";
    }
    function hu(a, b) {
      return b === a || b.startsWith(`${a}/`);
    }
    function hv(a, b, c) {
      return "string" == typeof a ? a : a[b] || c;
    }
    function hw(a) {
      let b = (function () {
          try {
            return "true" === process.env._next_intl_trailing_slash;
          } catch {
            return !1;
          }
        })(),
        [c, ...d] = a.split("#"),
        e = d.join("#"),
        f = c;
      if ("/" !== f) {
        let a = f.endsWith("/");
        b && !a ? (f += "/") : !b && a && (f = f.slice(0, -1));
      }
      return (e && (f += "#" + e), f);
    }
    function hx(a, b) {
      let c,
        d = hw(a),
        e = hw(b);
      return ((c = d
        .replace(/\/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?")
        .replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?")
        .replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)")
        .replace(/\[([^\]]+)\]/g, "([^/]+)")),
      RegExp(`^${c}$`)).test(e);
    }
    function hy(a, b) {
      return ("never" !== b.mode && b.prefixes?.[a]) || "/" + a;
    }
    function hz(a) {
      return a.includes("[[...");
    }
    function hA(a) {
      return a.includes("[...");
    }
    function hB(a) {
      return a.includes("[");
    }
    function hC(a, b) {
      let c = a.split("/"),
        d = b.split("/"),
        e = Math.max(c.length, d.length);
      for (let a = 0; a < e; a++) {
        let b = c[a],
          e = d[a];
        if (!b && e) return -1;
        if (b && !e) return 1;
        if (b || e) {
          if (!hB(b) && hB(e)) return -1;
          if (hB(b) && !hB(e)) return 1;
          if (!hA(b) && hA(e)) return -1;
          if (hA(b) && !hA(e)) return 1;
          if (!hz(b) && hz(e)) return -1;
          if (hz(b) && !hz(e)) return 1;
        }
      }
      return 0;
    }
    function hD(a) {
      let b = new URLSearchParams();
      for (let [c, d] of Object.entries(a))
        Array.isArray(d)
          ? d.forEach((a) => {
              b.append(c, String(a));
            })
          : b.set(c, String(d));
      return "?" + b.toString();
    }
    function hE(a, b, c, d) {
      if (!a || d === c || null == d || !b) return;
      let e = (function (a, b = window.location.pathname) {
          return "/" === a ? b : b.replace(a, "");
        })(b),
        { name: f, ...g } = a;
      g.path || (g.path = "" !== e ? e : "/");
      let h = `${f}=${d};`;
      for (let [a, b] of Object.entries(g))
        ((h += `${"maxAge" === a ? "max-age" : a}`),
          "boolean" != typeof b && (h += "=" + b),
          (h += ";"));
      document.cookie = h;
    }
    var hF = (0, U.forwardRef)(function (
      { href: a, locale: b, localeCookie: c, onClick: d, prefetch: e, ...f },
      g,
    ) {
      let h = (0, hq.useLocale)(),
        i = null != b && b !== h,
        j = (0, hp.usePathname)();
      return (
        i && (e = !1),
        (0, T.jsx)(ho.default, {
          ref: g,
          href: a,
          hrefLang: i ? b : void 0,
          onClick: function (a) {
            (hE(c, j, h, b), d && d(a));
          },
          prefetch: e,
          ...f,
        })
      );
    });
    let {
        Link: hG,
        redirect: hH,
        usePathname: hI,
        useRouter: hJ,
        getPathname: hK,
      } = (function (a) {
        let {
          Link: b,
          config: c,
          getPathname: d,
          ...e
        } = (function (a, b) {
          var c, d, e;
          let f = {
              ...(c = b || {}),
              localePrefix:
                "object" == typeof (e = c.localePrefix)
                  ? e
                  : { mode: e || "always" },
              localeCookie: !!((d = c.localeCookie) ?? 1) && {
                name: "NEXT_LOCALE",
                sameSite: "lax",
                ...("object" == typeof d && d),
              },
              localeDetection: c.localeDetection ?? !0,
              alternateLinks: c.alternateLinks ?? !0,
            },
            g = f.pathnames,
            h = (0, U.forwardRef)(function ({ href: b, locale: c, ...d }, e) {
              let h, j;
              "object" == typeof b
                ? ((h = b.pathname), (j = b.params))
                : (h = b);
              let k = hs(b),
                l = a(),
                m = "function" == typeof l.then ? hr(l) : l,
                n = k
                  ? i({
                      locale: c || m,
                      href: null == g ? h : { pathname: h, params: j },
                      forcePrefix: null != c || void 0,
                    })
                  : h;
              return (0, T.jsx)(hF, {
                ref: e,
                href: "object" == typeof b ? { ...b, pathname: n } : n,
                locale: c,
                localeCookie: f.localeCookie,
                ...d,
              });
            });
          function i(a) {
            let b,
              { forcePrefix: c, href: d, locale: e } = a;
            return (
              null == g
                ? "object" == typeof d
                  ? ((b = d.pathname), d.query && (b += hD(d.query)))
                  : (b = d)
                : (b = (function ({
                    pathname: a,
                    locale: b,
                    params: c,
                    pathnames: d,
                    query: e,
                  }) {
                    function f(a) {
                      let f,
                        g = d[a];
                      return (
                        g
                          ? ((f = hv(g, b, a)),
                            c &&
                              Object.entries(c).forEach(([a, b]) => {
                                let c, d;
                                (Array.isArray(b)
                                  ? ((c = `(\\[)?\\[...${a}\\](\\])?`),
                                    (d = b.map((a) => String(a)).join("/")))
                                  : ((c = `\\[${a}\\]`), (d = String(b))),
                                  (f = f.replace(RegExp(c, "g"), d)));
                              }),
                            (f = new URL(
                              (f = f.replace(/\[\[\.\.\..+\]\]/g, "")),
                              "http://l",
                            ).pathname))
                          : (f = a),
                        (f = hw(f)),
                        e && (f += hD(e)),
                        f
                      );
                    }
                    if ("string" == typeof a) return f(a);
                    {
                      let { pathname: b, ...c } = a;
                      return { ...c, pathname: f(b) };
                    }
                  })({
                    locale: e,
                    ...("string" == typeof d ? { pathname: d } : d),
                    pathnames: f.pathnames,
                  })),
              (function (a, b, c, d) {
                var e, f;
                let g,
                  h,
                  { mode: i } = c.localePrefix;
                return (
                  void 0 !== d
                    ? (g = d)
                    : hs(a) &&
                      ("always" === i
                        ? (g = !0)
                        : "as-needed" === i &&
                          (g = c.domains
                            ? !c.domains.some((a) => a.defaultLocale === b)
                            : b !== c.defaultLocale)),
                  g
                    ? ((e = hy(b, c.localePrefix)),
                      (f = a),
                      (h = e),
                      /^\/(\?.*)?$/.test(f) && (f = f.slice(1)),
                      (h += f))
                    : a
                );
              })(b, e, f, c)
            );
          }
          function j(a) {
            return function (b, ...c) {
              return a(i(b), ...c);
            };
          }
          return {
            config: f,
            Link: h,
            redirect: j(hp.redirect),
            permanentRedirect: j(hp.permanentRedirect),
            getPathname: i,
          };
        })(hq.useLocale, a);
        return {
          ...e,
          Link: b,
          usePathname: function () {
            let a,
              b,
              d =
                ((a = (0, hp.usePathname)()),
                (b = (0, hq.useLocale)()),
                (0, U.useMemo)(() => {
                  if (!a) return a;
                  let d = a,
                    e = hy(b, c.localePrefix);
                  if (hu(e, a)) d = ht(a, e);
                  else if (
                    "never" !== c.localePrefix.mode &&
                    c.localePrefix.prefixes
                  ) {
                    let c = "/" + b;
                    hu(c, a) && (d = ht(a, c));
                  }
                  return d;
                }, [c.localePrefix, b, a])),
              e = (0, hq.useLocale)();
            return (0, U.useMemo)(
              () =>
                d && c.pathnames
                  ? (function (a, b, c) {
                      let d = Object.keys(c).sort(hC),
                        e = decodeURI(b);
                      for (let b of d) {
                        let d = c[b];
                        if ("string" == typeof d) {
                          if (hx(d, e)) return b;
                        } else if (hx(hv(d, a, b), e)) return b;
                      }
                      return b;
                    })(e, d, c.pathnames)
                  : d,
              [e, d],
            );
          },
          useRouter: function () {
            let a = (0, hp.useRouter)(),
              b = (0, hq.useLocale)(),
              e = (0, hp.usePathname)();
            return (0, U.useMemo)(() => {
              function f(a) {
                return function (f, g) {
                  let { locale: h, ...i } = g || {},
                    j = [
                      d({
                        href: f,
                        locale: h || b,
                        forcePrefix: null != h || void 0,
                      }),
                    ];
                  (Object.keys(i).length > 0 && j.push(i),
                    hE(c.localeCookie, e, b, h),
                    a(...j));
                };
              }
              return {
                ...a,
                push: f(a.push),
                replace: f(a.replace),
                prefetch: f(a.prefetch),
              };
            }, [b, e, a]);
          },
          getPathname: d,
        };
      })({ locales: ["en", "fr", "es"], defaultLocale: "fr" }),
      hL = g8("globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
    var hM = a.i(89293);
    let hN = ({ onLanguageChange: a, className: b }) => {
        let c = (0, hq.useLocale)(),
          d = hM.languages.find((a) => a.code === c) || hM.languages[0],
          e = () => {
            a && a();
          };
        return (0, T.jsxs)("div", {
          className: (0, ha.cn)("w-full", b),
          children: [
            (0, T.jsxs)("div", {
              className:
                "flex items-center gap-3 px-4 py-4 border-b border-border",
              children: [
                (0, T.jsx)(hL, { className: "w-5 h-5 text-muted-foreground" }),
                (0, T.jsx)("span", {
                  className: "font-semibold text-sm text-foreground",
                  children: "Language",
                }),
                (0, T.jsx)("span", {
                  className: "text-xs text-muted-foreground ml-auto",
                  children: d.nativeName,
                }),
              ],
            }),
            (0, T.jsx)("div", {
              className: "space-y-2 p-2",
              children: hM.languages.map((a) =>
                (0, T.jsxs)(
                  hG,
                  {
                    href: "/",
                    locale: a.code,
                    className: (0, ha.cn)(
                      "flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200",
                      "hover:bg-accent hover:text-accent-foreground border border-transparent",
                      "active:scale-[0.98] active:bg-accent/80",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                      c === a.code
                        ? "bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20"
                        : "text-foreground hover:border-border",
                    ),
                    onClick: e,
                    children: [
                      (0, T.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, T.jsx)("span", {
                            className: "text-base font-medium",
                            children: a.nativeName,
                          }),
                          (0, T.jsx)("span", {
                            className: (0, ha.cn)(
                              "text-xs",
                              c === a.code
                                ? "text-primary-foreground/80"
                                : "text-muted-foreground",
                            ),
                            children: a.name,
                          }),
                        ],
                      }),
                      c === a.code &&
                        (0, T.jsx)(g9, {
                          className: "w-5 h-5 text-primary-foreground",
                        }),
                    ],
                  },
                  a.code,
                ),
              ),
            }),
          ],
        });
      },
      hO = g8("monitor", [
        [
          "rect",
          { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
        ],
        ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
        ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
      ]),
      hP = ({ onThemeChange: a, className: b }) => {
        let { theme: c, setTheme: d, systemTheme: e } = (0, hk.useTheme)(),
          f = [
            {
              value: "light",
              label: "Light",
              icon: hj,
              description: "Light mode",
            },
            {
              value: "dark",
              label: "Dark",
              icon: hi,
              description: "Dark mode",
            },
            {
              value: "system",
              label: "System",
              icon: hO,
              description: "Follow device",
            },
          ],
          g = f.find((a) => a.value === c) || f[2];
        return (0, T.jsxs)("div", {
          className: (0, ha.cn)("w-full", b),
          children: [
            (0, T.jsxs)("div", {
              className:
                "flex items-center gap-3 px-4 py-4 border-b border-border",
              children: [
                (0, T.jsx)(g.icon, {
                  className: "w-5 h-5 text-muted-foreground",
                }),
                (0, T.jsx)("span", {
                  className: "font-semibold text-sm text-foreground",
                  children: "Theme",
                }),
                (0, T.jsx)("span", {
                  className: "text-xs text-muted-foreground ml-auto capitalize",
                  children: "system" === c ? `System (${e})` : c,
                }),
              ],
            }),
            (0, T.jsx)("div", {
              className: "space-y-2 p-2",
              children: f.map((b) => {
                let e = b.icon,
                  f = c === b.value;
                return (0, T.jsxs)(
                  "button",
                  {
                    onClick: () => {
                      (d(b.value), a && a());
                    },
                    className: (0, ha.cn)(
                      "flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200",
                      "hover:bg-accent hover:text-accent-foreground border border-transparent",
                      "active:scale-[0.98] active:bg-accent/80",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                      f
                        ? "bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20"
                        : "text-foreground hover:border-border",
                    ),
                    children: [
                      (0, T.jsxs)("div", {
                        className: "flex items-center gap-4 flex-1",
                        children: [
                          (0, T.jsx)("div", {
                            className: (0, ha.cn)(
                              "p-2 rounded-lg transition-colors",
                              f ? "bg-primary-foreground/20" : "bg-muted",
                            ),
                            children: (0, T.jsx)(e, {
                              className: (0, ha.cn)(
                                "w-4 h-4 transition-colors",
                                f
                                  ? "text-primary-foreground"
                                  : "text-muted-foreground",
                              ),
                            }),
                          }),
                          (0, T.jsxs)("div", {
                            className: "flex flex-col items-start",
                            children: [
                              (0, T.jsx)("span", {
                                className: "text-base font-medium",
                                children: b.label,
                              }),
                              (0, T.jsx)("span", {
                                className: (0, ha.cn)(
                                  "text-xs text-left mt-0.5",
                                  f
                                    ? "text-primary-foreground/80"
                                    : "text-muted-foreground",
                                ),
                                children: b.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                      f &&
                        (0, T.jsx)(g9, {
                          className:
                            "w-5 h-5 text-primary-foreground flex-shrink-0",
                        }),
                    ],
                  },
                  b.value,
                );
              }),
            }),
          ],
        });
      },
      hQ = () => {
        let a = (0, hq.useLocale)(),
          b = hM.languages.find((b) => b.code === a) || hM.languages[0];
        return (0, T.jsxs)(hb, {
          children: [
            (0, T.jsx)(hc, {
              asChild: !0,
              children: (0, T.jsxs)(hl.Button, {
                variant: "outline",
                size: "sm",
                className: (0, ha.cn)(
                  "flex items-center gap-2",
                  "bg-background border-border text-foreground",
                  "hover:bg-accent hover:text-accent-foreground",
                  "transition-colors duration-200",
                ),
                children: [
                  (0, T.jsx)(hL, { className: "w-4 h-4" }),
                  (0, T.jsx)("span", { children: b.code.toUpperCase() }),
                ],
              }),
            }),
            (0, T.jsx)(hd, {
              align: "end",
              className: "w-48 bg-background border-border",
              children: hM.languages.map((b) => {
                let c = a === b.code;
                return (0, T.jsx)(
                  he,
                  {
                    asChild: !0,
                    className: "p-0",
                    children: (0, T.jsxs)(hG, {
                      href: "/",
                      locale: b.code,
                      className: (0, ha.cn)(
                        "flex items-center justify-between w-full px-2 py-1.5 cursor-pointer",
                        "text-foreground hover:bg-accent hover:text-accent-foreground",
                        "transition-colors duration-200",
                        c && "bg-accent text-accent-foreground",
                      ),
                      children: [
                        (0, T.jsxs)("div", {
                          className: "flex items-center gap-2 flex-1",
                          children: [
                            c &&
                              (0, T.jsx)(g9, {
                                className: "w-3 h-3 text-primary flex-shrink-0",
                              }),
                            (0, T.jsx)("span", {
                              className: (0, ha.cn)("flex-1", !c && "ml-5"),
                              children: b.nativeName,
                            }),
                          ],
                        }),
                        (0, T.jsx)("span", {
                          className: (0, ha.cn)(
                            "text-xs",
                            c
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground",
                          ),
                          children: b.name,
                        }),
                      ],
                    }),
                  },
                  b.code,
                );
              }),
            }),
          ],
        });
      },
      hR = g8("smartphone", [
        [
          "rect",
          {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2",
            key: "1yt0o3",
          },
        ],
        ["path", { d: "M12 18h.01", key: "mhygvu" }],
      ]),
      hS = g8("palette", [
        [
          "path",
          {
            d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
            key: "e79jfc",
          },
        ],
        [
          "circle",
          {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w",
          },
        ],
        [
          "circle",
          {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f",
          },
        ],
        [
          "circle",
          {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx",
          },
        ],
        [
          "circle",
          {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn",
          },
        ],
      ]);
    function hT({
      scrolledBg: a = "bg-white/95 dark:bg-black shadow-lg backdrop-blur-sm",
      defaultBg: b = "bg-transparent",
      threshold: c = 50,
    }) {
      let [d, e] = (0, U.useState)(!1),
        f = (0, hn.useTranslations)("Header"),
        g = (0, hp.usePathname)(),
        h = [
          {
            name: f("webDevelopment"),
            description: f("webDevelopmentDescription"),
            href: "web",
            icon: hL,
          },
          {
            name: f("mobileDevelopment"),
            description: f("mobileDevelopmentDescription"),
            href: "mobile",
            icon: hR,
          },
          {
            name: f("graphicDesign"),
            description: f("graphicDesignDescription"),
            href: "graphic",
            icon: hS,
          },
        ],
        [i, j] = (0, U.useState)(!1),
        [k, l] = (0, U.useState)(0),
        [m, n] = (0, U.useState)(!0),
        o = (0, U.useRef)(null);
      return (
        (0, U.useEffect)(() => {
          let a = !1,
            b = () => {
              let b = window.scrollY;
              a ||
                (requestAnimationFrame(() => {
                  (j(b > c), n(!0), l(b), (a = !1));
                }),
                (a = !0));
            };
          return (
            window.addEventListener("scroll", b, { passive: !0 }),
            () => {
              window.removeEventListener("scroll", b);
            }
          );
        }, [k, c]),
        (0, T.jsxs)("header", {
          ref: o,
          className: (0, ha.cn)(
            "z-50 fixed w-screen top-0 left-0 transition-all duration-300",
            "border-b",
            i ? "border-gray-200  dark:border-gray-800" : "border-transparent",
            m ? "translate-y-0" : "-translate-y-full",
            i ? a : b,
          ),
          children: [
            (0, T.jsxs)("nav", {
              "aria-label": "Global",
              className:
                "mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8",
              children: [
                (0, T.jsx)("div", {
                  className: "flex lg:flex-1",
                  children: (0, T.jsxs)(ho.default, {
                    href: "/",
                    className: "-m-1.5 p-1.5",
                    children: [
                      (0, T.jsx)("span", {
                        className: "sr-only",
                        children: "AWDTECH",
                      }),
                      (0, T.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "127",
                        height: "30",
                        viewBox: "0 0 127 30",
                        fill: "none",
                        className: "text-foreground",
                        children: [
                          (0, T.jsxs)("g", {
                            clipPath: "url(#clip0_9616_17482)",
                            children: [
                              (0, T.jsx)("text", {
                                x: "75",
                                y: "23",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "19",
                                fontWeight: "1000",
                                fill: "currentColor",
                                children: "TECH",
                              }),
                              (0, T.jsx)("path", {
                                d: "M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z",
                                fill: "#FF6600",
                              }),
                              (0, T.jsx)("path", {
                                d: "M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z",
                                fill: "#FF6600",
                              }),
                              (0, T.jsx)("path", {
                                d: "M46.5529 6.6632C39.9138 6.6632 39.255 12.6625 40.7527 16.9482C40.9759 16.7397 41.0696 16.5902 41.0696 16.5902C41.1524 17.3862 41.3072 18.203 41.3072 18.203C40.3819 18.1821 39.7338 17.6191 39.7338 17.6191C39.8742 17.553 40.0002 17.4835 40.1155 17.4175L37.0191 6.9656C30.7436 6.93432 29.7427 12.659 31.2477 17.4453H30.4304L27.4817 6.9656H21.145L25.5375 22.9545H33.7896C34.6357 22.9545 34.7005 22.8641 34.7005 22.4991C34.7005 19.781 33.3647 17.9041 34.3944 14.0528C33.6888 13.9347 33.2711 14.0007 33.2711 14.0007C34.4412 12.7529 35.4998 12.2385 35.4998 12.2385C35.831 13.3194 35.9714 14.5256 35.9714 14.5256C35.7014 14.4109 35.4494 14.3205 35.2117 14.2475C35.2009 19.1832 38.5421 22.951 40.5295 22.951H45.4224C46.2073 22.951 46.3333 22.5582 46.3333 22.1342C46.3333 21.015 44.6375 17.772 44.6087 15.3215C44.5763 13.6844 45.2352 12.5965 46.6466 12.5965C47.2118 12.5965 47.8995 12.8085 47.8995 12.8085L49.6565 6.90304C49.6565 6.90304 48.3711 6.65973 46.5493 6.65973L46.5529 6.6632Z",
                                fill: "#FF6600",
                              }),
                            ],
                          }),
                          (0, T.jsx)("defs", {
                            children: (0, T.jsx)("clipPath", {
                              id: "clip0_9616_17482)",
                              children: (0, T.jsx)("rect", {
                                width: "127",
                                height: "30",
                                fill: "white",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, T.jsx)("div", {
                  className: "flex lg:hidden",
                  children: (0, T.jsxs)("button", {
                    type: "button",
                    onClick: () => e(!0),
                    className: (0, ha.cn)(
                      "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
                      i || ["/fr", "/en", "/es"].includes(g)
                        ? i
                          ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                          : "text-white"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
                      "transition-colors duration-200",
                    ),
                    children: [
                      (0, T.jsx)("span", {
                        className: "sr-only",
                        children: f("openMainMenu"),
                      }),
                      (0, T.jsx)(hf, {
                        "aria-hidden": "true",
                        className: "size-6",
                      }),
                    ],
                  }),
                }),
                (0, T.jsxs)("div", {
                  className: "hidden lg:flex lg:gap-x-12",
                  children: [
                    (0, T.jsx)(ho.default, {
                      href: "/",
                      className: `text-sm/6 ${!i && "/fr" !== g && "/en" !== g ? "text-black dark:text-white" : i ? "dark:text-white text-black" : "text-white"}   font-semibold  hover:text-primary transition-colors duration-200`,
                      children: f("home"),
                    }),
                    (0, T.jsxs)(hb, {
                      children: [
                        (0, T.jsx)(hc, {
                          asChild: !0,
                          children: (0, T.jsxs)("button", {
                            className: (0, ha.cn)(
                              "flex items-center gap-x-1 text-sm/6 font-semibold",
                              "text-foreground hover:text-primary transition-colors duration-200",
                              "focus:outline-none focus:text-primary",
                            ),
                            children: [
                              (0, T.jsxs)("span", {
                                className: `${!i && "/fr" !== g && "/en" !== g ? "text-black dark:text-white" : i ? "dark:text-white text-black" : "text-white"}`,
                                children: [" ", f("services")],
                              }),
                              (0, T.jsx)(hh, {
                                "aria-hidden": "true",
                                className:
                                  "size-5 flex-none dark:text-gray-500",
                              }),
                            ],
                          }),
                        }),
                        (0, T.jsx)(hd, {
                          align: "center",
                          className:
                            "w-80 rounded-3xl bg-background border border-border shadow-xl",
                          children: h.map((a) =>
                            (0, T.jsx)(
                              he,
                              {
                                className:
                                  "flex items-center gap-x-6 rounded-3xl p-4 text-sm/6 hover:bg-accent focus:bg-accent cursor-pointer transition-colors duration-200",
                                asChild: !0,
                                children: (0, T.jsxs)(ho.default, {
                                  href: a.href,
                                  children: [
                                    (0, T.jsx)("div", {
                                      className:
                                        "flex size-11 flex-none items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-200",
                                      children: (0, T.jsx)(a.icon, {
                                        "aria-hidden": "true",
                                        className:
                                          "size-6 text-muted-foreground group-hover:text-primary transition-colors duration-200",
                                      }),
                                    }),
                                    (0, T.jsxs)("div", {
                                      className: "flex-auto",
                                      children: [
                                        (0, T.jsx)("span", {
                                          className:
                                            "block font-semibold text-foreground",
                                          children: a.name,
                                        }),
                                        (0, T.jsx)("p", {
                                          className:
                                            "mt-1 text-muted-foreground",
                                          children: a.description,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              a.name,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, T.jsx)(ho.default, {
                      href: "/projects",
                      className: `${!i && "/fr" !== g && "/en" !== g ? "text-black dark:text-white" : i ? "dark:text-white text-black" : "text-white"} text-sm/6 font-semibold  hover:text-primary transition-colors duration-200`,
                      children: f("projects"),
                    }),
                    (0, T.jsx)(ho.default, {
                      href: "/contact",
                      className: `${!i && "/fr" !== g && "/en" !== g ? "text-black dark:text-white" : i ? "dark:text-white text-black" : "text-white"} text-sm/6 font-semibold  hover:text-primary transition-colors duration-200`,
                      children: f("contact"),
                    }),
                  ],
                }),
                (0, T.jsxs)("div", {
                  className: "hidden gap-3 lg:flex lg:flex-1 lg:justify-end",
                  children: [(0, T.jsx)(hQ, {}), (0, T.jsx)(hm, {})],
                }),
              ],
            }),
            (0, T.jsxs)(cb, {
              open: d,
              onClose: e,
              className: "lg:hidden",
              children: [
                (0, T.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
                }),
                (0, T.jsxs)(ca, {
                  className:
                    "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-border",
                  children: [
                    (0, T.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, T.jsxs)(ho.default, {
                          href: "/",
                          className: "-m-1.5 p-1.5",
                          children: [
                            (0, T.jsx)("span", {
                              className: "sr-only",
                              children: "AWDTECH",
                            }),
                            (0, T.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "127",
                              height: "30",
                              viewBox: "0 0 127 30",
                              fill: "none",
                              className: "text-foreground",
                              children: [
                                (0, T.jsxs)("g", {
                                  clipPath: "url(#clip0_9616_17482)",
                                  children: [
                                    (0, T.jsx)("path", {
                                      d: "M79.2157 7.86586C80.177 7.38272 81.2608 7.14288 82.4705 7.14288C83.853 7.14288 85.1168 7.47309 86.2581 8.13002C87.3994 8.78696 88.2995 9.71153 88.9512 10.8968C89.6028 12.0821 89.9305 13.4446 89.9305 14.9844C89.9305 16.5242 89.6028 17.9006 88.9512 19.1137C88.2995 20.3268 86.2581 21.95 82.4705 22.9649C81.2608 22.9649 80.1842 22.7286 79.2445 22.2558C78.3048 21.7831 77.5344 21.1957 76.9403 20.4901V30H73.6567V7.39314H76.9403V9.64549C77.4947 8.93989 78.2544 8.349 79.2157 7.86586ZM85.9124 12.2454C85.4624 11.4773 84.8647 10.8933 84.1267 10.4936C83.3886 10.0939 82.5965 9.89575 81.7504 9.89575C80.9043 9.89575 80.141 10.1008 79.403 10.5075C78.6649 10.9142 78.0672 11.5085 77.6172 12.2871C77.1671 13.0657 76.9403 13.9833 76.9403 15.04C76.9403 16.0967 77.1635 17.0178 77.6172 17.8068C78.0672 18.5958 78.6649 19.1936 79.403 19.6003C80.141 20.007 80.9259 20.2121 81.7504 20.2121C82.5749 20.2121 83.3886 20.0035 84.1267 19.5864C84.8647 19.1693 85.4624 18.561 85.9124 17.7651C86.3625 16.9691 86.5893 16.041 86.5893 14.9844C86.5893 13.9277 86.3625 13.0136 85.9124 12.2454Z",
                                      fill: "currentColor",
                                    }),
                                    (0, T.jsx)("path", {
                                      d: "M93.0845 10.8968C93.747 9.71153 94.6507 8.78696 95.792 8.13002C96.9333 7.47309 98.1971 7.14288 99.5796 7.14288C100.829 7.14288 101.916 7.37924 102.849 7.85196C103.781 8.32467 104.523 8.91209 105.081 9.61768V7.39314H108.393V22.7147H105.081V20.4345C104.523 21.1575 103.767 21.7588 102.806 22.2419C101.844 22.7251 100.75 22.9649 99.522 22.9649C98.1575 22.9649 96.9117 22.6278 95.7776 21.95C94.6435 21.2722 93.747 20.3268 93.0845 19.1137C92.4221 17.9006 92.0908 16.5242 92.0908 14.9844C92.0908 13.4446 92.4221 12.0821 93.0845 10.8968ZM104.404 12.2871C103.954 11.5085 103.364 10.9142 102.633 10.5075C101.902 10.1008 101.117 9.89575 100.271 9.89575C99.4248 9.89575 98.6399 10.0939 97.909 10.4936C97.1782 10.8933 96.5877 11.4773 96.1377 12.2454C95.6876 13.0136 95.4608 13.9277 95.4608 14.9844C95.4608 16.041 95.6876 16.9691 96.1377 17.7651C96.5877 18.561 97.1854 19.1693 97.9234 19.5864C98.6615 20.0035 99.4464 20.2121 100.271 20.2121C101.095 20.2121 101.902 20.007 102.633 19.6003C103.364 19.1936 103.954 18.5958 104.404 17.8068C104.854 17.0178 105.081 16.0967 105.081 15.04C105.081 13.9833 104.854 13.0657 104.404 12.2871Z",
                                      fill: "currentColor",
                                    }),
                                    (0, T.jsx)("path", {
                                      d: "M127 7.39313L117.264 29.9166H113.866L117.092 22.4644L110.841 7.39313H114.499L118.964 19.072L123.601 7.39313H127Z",
                                      fill: "currentColor",
                                    }),
                                    (0, T.jsx)("path", {
                                      d: "M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z",
                                      fill: "#FF6600",
                                    }),
                                    (0, T.jsx)("path", {
                                      d: "M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z",
                                      fill: "#FF6600",
                                    }),
                                    (0, T.jsx)("path", {
                                      d: "M46.5529 6.6632C39.9138 6.6632 39.255 12.6625 40.7527 16.9482C40.9759 16.7397 41.0696 16.5902 41.0696 16.5902C41.1524 17.3862 41.3072 18.203 41.3072 18.203C40.3819 18.1821 39.7338 17.6191 39.7338 17.6191C39.8742 17.553 40.0002 17.4835 40.1155 17.4175L37.0191 6.9656C30.7436 6.93432 29.7427 12.659 31.2477 17.4453H30.4304L27.4817 6.9656H21.145L25.5375 22.9545H33.7896C34.6357 22.9545 34.7005 22.8641 34.7005 22.4991C34.7005 19.781 33.3647 17.9041 34.3944 14.0528C33.6888 13.9347 33.2711 14.0007 33.2711 14.0007C34.4412 12.7529 35.4998 12.2385 35.4998 12.2385C35.831 13.3194 35.9714 14.5256 35.9714 14.5256C35.7014 14.4109 35.4494 14.3205 35.2117 14.2475C35.2009 19.1832 38.5421 22.951 40.5295 22.951H45.4224C46.2073 22.951 46.3333 22.5582 46.3333 22.1342C46.3333 21.015 44.6375 17.772 44.6087 15.3215C44.5763 13.6844 45.2352 12.5965 46.6466 12.5965C47.2118 12.5965 47.8995 12.8085 47.8995 12.8085L49.6565 6.90304C49.6565 6.90304 48.3711 6.65973 46.5493 6.65973L46.5529 6.6632Z",
                                      fill: "#FF6600",
                                    }),
                                  ],
                                }),
                                (0, T.jsx)("defs", {
                                  children: (0, T.jsx)("clipPath", {
                                    id: "clip0_9616_17482)",
                                    children: (0, T.jsx)("rect", {
                                      width: "127",
                                      height: "30",
                                      fill: "white",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, T.jsxs)("button", {
                          type: "button",
                          onClick: () => e(!1),
                          className: (0, ha.cn)(
                            "-m-2.5 rounded-md p-2.5",
                            "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
                            "transition-colors duration-200",
                          ),
                          children: [
                            (0, T.jsx)("span", {
                              className: "sr-only",
                              children: f("closeMenu"),
                            }),
                            (0, T.jsx)(hg, {
                              "aria-hidden": "true",
                              className: "size-6",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, T.jsx)("div", {
                      className: "mt-6 flow-root",
                      children: (0, T.jsx)("div", {
                        className: "-my-6 divide-y divide-border",
                        children: (0, T.jsxs)("div", {
                          className: "space-y-2 py-6",
                          children: [
                            (0, T.jsx)(ho.default, {
                              href: "/",
                              onClick: () => e(!1),
                              className:
                                "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                              children: f("home"),
                            }),
                            (0, T.jsxs)(cY, {
                              as: "div",
                              className: "-mx-3",
                              children: [
                                (0, T.jsxs)(cW, {
                                  className:
                                    "group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                  children: [
                                    f("services"),
                                    (0, T.jsx)(hh, {
                                      "aria-hidden": "true",
                                      className:
                                        "size-5 flex-none group-data-open:rotate-180 text-muted-foreground transition-transform duration-200",
                                    }),
                                  ],
                                }),
                                (0, T.jsx)(cX, {
                                  className: "mt-2 space-y-2",
                                  children: h.map((a) =>
                                    (0, T.jsx)(
                                      ho.default,
                                      {
                                        onClick: () => e(!1),
                                        href: a.href,
                                        className:
                                          "block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                        children: a.name,
                                      },
                                      a.name,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            (0, T.jsx)(ho.default, {
                              href: "/projects",
                              onClick: () => e(!1),
                              className:
                                "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                              children: f("projects"),
                            }),
                            (0, T.jsx)(ho.default, {
                              href: "/contact",
                              onClick: () => e(!1),
                              className:
                                "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                              children: f("contact"),
                            }),
                            (0, T.jsx)(hN, {}),
                            (0, T.jsx)(hP, {}),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    a.s(["default", () => hT], 39713);
  },
];

//# sourceMappingURL=awdtech_fcfea68a._.js.map
