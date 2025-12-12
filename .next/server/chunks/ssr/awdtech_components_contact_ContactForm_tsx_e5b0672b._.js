module.exports = [
  58886,
  (a) => {
    "use strict";
    var b = a.i(99669),
      c = a.i(61289),
      d = a.i(65916),
      e = a.i(84032);
    function f({ className: a, type: c, ...d }) {
      return (0, b.jsx)("input", {
        type: c,
        "data-slot": "input",
        className: (0, e.cn)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a,
        ),
        ...d,
      });
    }
    function g({ className: a, ...c }) {
      return (0, b.jsx)("textarea", {
        "data-slot": "textarea",
        className: (0, e.cn)(
          "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          a,
        ),
        ...c,
      });
    }
    var h = a.i(16842),
      i = a.i(90520),
      j = a.i(68848),
      k = a.i(6270),
      l = a.i(44817),
      m = a.i(25816),
      n = a.i(82133),
      o = c,
      p = a.i(62579);
    function q(a, b) {
      if ("function" == typeof a) return a(b);
      null != a && (a.current = b);
    }
    class r extends o.Component {
      getSnapshotBeforeUpdate(a) {
        let b = this.props.childRef.current;
        if (b && a.isPresent && !this.props.isPresent) {
          let a = b.offsetParent,
            c = ((0, n.isHTMLElement)(a) && a.offsetWidth) || 0,
            d = this.props.sizeRef.current;
          ((d.height = b.offsetHeight || 0),
            (d.width = b.offsetWidth || 0),
            (d.top = b.offsetTop),
            (d.left = b.offsetLeft),
            (d.right = c - d.width - d.left));
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function s({ children: a, isPresent: d, anchorX: e, root: f }) {
      let g = (0, o.useId)(),
        h = (0, o.useRef)(null),
        i = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
        { nonce: j } = (0, o.useContext)(p.MotionConfigContext),
        k = (function (...a) {
          return c.useCallback(
            (function (...a) {
              return (b) => {
                let c = !1,
                  d = a.map((a) => {
                    let d = q(a, b);
                    return (c || "function" != typeof d || (c = !0), d);
                  });
                if (c)
                  return () => {
                    for (let b = 0; b < d.length; b++) {
                      let c = d[b];
                      "function" == typeof c ? c() : q(a[b], null);
                    }
                  };
              };
            })(...a),
            a,
          );
        })(h, a?.ref);
      return (
        (0, o.useInsertionEffect)(() => {
          let { width: a, height: b, top: c, left: k, right: l } = i.current;
          if (d || !h.current || !a || !b) return;
          let m = "left" === e ? `left: ${k}` : `right: ${l}`;
          h.current.dataset.motionPopId = g;
          let n = document.createElement("style");
          j && (n.nonce = j);
          let o = f ?? document.head;
          return (
            o.appendChild(n),
            n.sheet &&
              n.sheet.insertRule(`
          [data-motion-pop-id="${g}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${b}px !important;
            ${m}px !important;
            top: ${c}px !important;
          }
        `),
            () => {
              o.contains(n) && o.removeChild(n);
            }
          );
        }, [d]),
        (0, b.jsx)(r, {
          isPresent: d,
          childRef: h,
          sizeRef: i,
          children: o.cloneElement(a, { ref: k }),
        })
      );
    }
    let t = ({
      children: a,
      initial: d,
      isPresent: e,
      onExitComplete: f,
      custom: g,
      presenceAffectsLayout: h,
      mode: i,
      anchorX: j,
      root: l,
    }) => {
      let n = (0, k.useConstant)(u),
        o = (0, c.useId)(),
        p = !0,
        q = (0, c.useMemo)(
          () => (
            (p = !1),
            {
              id: o,
              initial: d,
              isPresent: e,
              custom: g,
              onExitComplete: (a) => {
                for (let b of (n.set(a, !0), n.values())) if (!b) return;
                f && f();
              },
              register: (a) => (n.set(a, !1), () => n.delete(a)),
            }
          ),
          [e, n, f],
        );
      return (
        h && p && (q = { ...q }),
        (0, c.useMemo)(() => {
          n.forEach((a, b) => n.set(b, !1));
        }, [e]),
        c.useEffect(() => {
          e || n.size || !f || f();
        }, [e]),
        "popLayout" === i &&
          (a = (0, b.jsx)(s, {
            isPresent: e,
            anchorX: j,
            root: l,
            children: a,
          })),
        (0, b.jsx)(m.PresenceContext.Provider, { value: q, children: a })
      );
    };
    function u() {
      return new Map();
    }
    var v = a.i(15454);
    let w = (a) => a.key || "";
    function x(a) {
      let b = [];
      return (
        c.Children.forEach(a, (a) => {
          (0, c.isValidElement)(a) && b.push(a);
        }),
        b
      );
    }
    let y = ({
      children: a,
      custom: d,
      initial: e = !0,
      onExitComplete: f,
      presenceAffectsLayout: g = !0,
      mode: h = "sync",
      propagate: i = !1,
      anchorX: m = "left",
      root: n,
    }) => {
      let [o, p] = (0, v.usePresence)(i),
        q = (0, c.useMemo)(() => x(a), [a]),
        r = i && !o ? [] : q.map(w),
        s = (0, c.useRef)(!0),
        u = (0, c.useRef)(q),
        y = (0, k.useConstant)(() => new Map()),
        [z, A] = (0, c.useState)(q),
        [B, C] = (0, c.useState)(q);
      (0, l.useIsomorphicLayoutEffect)(() => {
        ((s.current = !1), (u.current = q));
        for (let a = 0; a < B.length; a++) {
          let b = w(B[a]);
          r.includes(b) ? y.delete(b) : !0 !== y.get(b) && y.set(b, !1);
        }
      }, [B, r.length, r.join("-")]);
      let D = [];
      if (q !== z) {
        let a = [...q];
        for (let b = 0; b < B.length; b++) {
          let c = B[b],
            d = w(c);
          r.includes(d) || (a.splice(b, 0, c), D.push(c));
        }
        return ("wait" === h && D.length && (a = D), C(x(a)), A(q), null);
      }
      let { forceRender: E } = (0, c.useContext)(j.LayoutGroupContext);
      return (0, b.jsx)(b.Fragment, {
        children: B.map((a) => {
          let c = w(a),
            j = (!i || !!o) && (q === B || r.includes(c));
          return (0, b.jsx)(
            t,
            {
              isPresent: j,
              initial: (!s.current || !!e) && void 0,
              custom: d,
              presenceAffectsLayout: g,
              mode: h,
              root: n,
              onExitComplete: j
                ? void 0
                : () => {
                    if (!y.has(c)) return;
                    y.set(c, !0);
                    let a = !0;
                    (y.forEach((b) => {
                      b || (a = !1);
                    }),
                      a && (E?.(), C(u.current), i && p?.(), f && f()));
                  },
              anchorX: m,
              children: a,
            },
            c,
          );
        }),
      });
    };
    var z = a.i(94715);
    function A() {
      (0, h.useTranslations)("ContactPage");
      let [a, e] = (0, c.useState)({
          name: "",
          email: "",
          subject: "",
          message: "",
        }),
        [j, k] = (0, c.useState)(!1),
        [l, m] = (0, c.useState)("idle"),
        n = async (b) => {
          b.preventDefault();
          let c = localStorage.getItem("lastFormSubmission");
          if (
            (c && Date.now() - parseInt(c) < 3e4) ||
            !a.name.trim() ||
            !a.email.trim() ||
            !a.message.trim() ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)
          ) {
            (m("error"), setTimeout(() => m("idle"), 3e3));
            return;
          }
          k(!0);
          try {
            let b = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...a,
                  timestamp: new Date().toISOString(),
                  userAgent: navigator.userAgent,
                  page: window.location.href,
                }),
              }),
              c = await b.json();
            if (!b.ok) throw Error(c.message || "Submission failed");
            (k(!1),
              m("success"),
              e({ name: "", email: "", subject: "", message: "" }),
              localStorage.setItem(
                "lastFormSubmission",
                Date.now().toString(),
              ));
            let d = setTimeout(() => m("idle"), 5e3);
            return () => clearTimeout(d);
          } catch (a) {
            (console.error("Form submission error:", a),
              k(!1),
              m("error"),
              setTimeout(() => m("idle"), 3e3));
          }
        },
        o = (a) => {
          let { name: b, value: c } = a.target;
          e((a) => ({ ...a, [b]: c }));
        },
        p = {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 },
          },
        },
        q = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
        r = [
          {
            name: "facebook",
            icon: (0, b.jsx)(z.FaFacebook, { className: "w-5 h-5" }),
            href: "https://facebook.com/awdtech",
            color: "hover:bg-[#1877F2] hover:text-white",
          },
          {
            name: "twitter",
            icon: (0, b.jsx)(z.FaTwitter, { className: "w-5 h-5" }),
            href: "https://twitter.com/awdtech",
            color: "hover:bg-[#1DA1F2] hover:text-white",
          },
          {
            name: "linkedin",
            icon: (0, b.jsx)(z.FaLinkedinIn, { className: "w-5 h-5" }),
            href: "https://linkedin.com/company/awdtech",
            color: "hover:bg-[#0077B5] hover:text-white",
          },
          {
            name: "whatsapp",
            icon: (0, b.jsx)(z.FaWhatsapp, { className: "w-5 h-5" }),
            href: "https://wa.me/237656849690",
            color: "hover:bg-[#25D366] hover:text-white",
          },
        ],
        s = [
          {
            icon: (0, b.jsx)(z.FaEnvelope, {
              className: "w-5 h-5 sm:w-6 sm:h-6",
            }),
            title: "Email",
            value: "support.cm@awdpay.com",
            action: "mailto:support.cm@awdpay.com",
          },
          {
            icon: (0, b.jsx)(z.FaPhone, { className: "w-5 h-5 sm:w-6 sm:h-6" }),
            title: "Cameroun",
            value: "+237 656 849 690 / +237 653 624 318",
            action: "tel:+237656849690",
          },
          {
            icon: (0, b.jsx)(z.FaPhone, { className: "w-5 h-5 sm:w-6 sm:h-6" }),
            title: "Gabon",
            value: "+241 66 50 39 99 / +241 76 38 80 06",
            action: "tel:+24166503999",
          },
          {
            icon: (0, b.jsx)(z.FaPhone, { className: "w-5 h-5 sm:w-6 sm:h-6" }),
            title: "Côte d'Ivoire",
            value: "+225 27 24 3 73010 / +225 27 24 3 73317",
            action: "tel:+225272473010",
          },
          {
            icon: (0, b.jsx)(z.FaGlobe, { className: "w-5 h-5 sm:w-6 sm:h-6" }),
            title: "Service",
            value: "Numérique Partout dans le Monde",
            action: "#",
          },
        ];
      return (0, b.jsx)("div", {
        className:
          "min-h-[calc(100vh-200px)] flex items-center justify-center dient-tbg-grao-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors duration-300",
        children: (0, b.jsx)("div", {
          className:
            "w-full max-w-7xl mx-auto py-8 lg:py-12 px-4 sm:px-6 lg:px-8",
          children: (0, b.jsxs)("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
            children: [
              (0, b.jsxs)(i.motion.div, {
                initial: "hidden",
                animate: "visible",
                variants: p,
                className: "space-y-8 pt-12",
                children: [
                  (0, b.jsxs)("div", {
                    className: "space-y-6",
                    children: [
                      (0, b.jsxs)(i.motion.h1, {
                        variants: q,
                        className:
                          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
                        children: [
                          (0, b.jsx)("span", {
                            className: "block text-gray-900 dark:text-white",
                            children: "AWDTECH",
                          }),
                          (0, b.jsx)("span", {
                            className: "block text-orange-500 ",
                            children: "Service Numérique Partout dans le Monde",
                          }),
                        ],
                      }),
                      (0, b.jsx)(i.motion.p, {
                        variants: q,
                        className:
                          "text-lg text-gray-500 dark:text-gray-300 leading-relaxed",
                        children:
                          "Nous dynamisons votre entreprise avec notre expertise en technologie. Nous intervenons dans plusieurs pays d'Afrique, d'Europe et d'Amérique pour accompagner votre transformation digitale.",
                      }),
                    ],
                  }),
                  (0, b.jsx)(i.motion.div, {
                    variants: q,
                    className: "space-y-6",
                    children: s.map((a, c) =>
                      (0, b.jsxs)(
                        "a",
                        {
                          href: a.action,
                          target: "#" === a.action ? void 0 : "_blank",
                          rel:
                            "#" === a.action ? void 0 : "noopener noreferrer",
                          className:
                            "flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 group",
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "p-2 sm:p-3 bg-orange-50 dark:bg-orange-500/10 rounded-lg sm:rounded-xl text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0",
                              children: a.icon,
                            }),
                            (0, b.jsxs)("div", {
                              className: "min-w-0",
                              children: [
                                (0, b.jsx)("h3", {
                                  className:
                                    "font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base",
                                  children: a.title,
                                }),
                                (0, b.jsx)("p", {
                                  className:
                                    "text-gray-500 dark:text-gray-400 mt-1 text-sm",
                                  children: a.value,
                                }),
                              ],
                            }),
                          ],
                        },
                        c,
                      ),
                    ),
                  }),
                  (0, b.jsxs)(i.motion.div, {
                    variants: q,
                    children: [
                      (0, b.jsxs)("div", {
                        className: "mb-3",
                        children: [
                          (0, b.jsx)("h4", {
                            className:
                              "text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2",
                            children: "Suivez-nous",
                          }),
                          (0, b.jsx)("p", {
                            className:
                              "text-gray-500 dark:text-gray-300 text-sm",
                            children:
                              "Connectez-vous avec AWDTECH sur les réseaux sociaux",
                          }),
                        ],
                      }),
                      (0, b.jsx)("div", {
                        className: "flex space-x-3",
                        children: r.map((a) =>
                          (0, b.jsx)(
                            "a",
                            {
                              href: a.href,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: `
                      w-10 h-10 sm:w-12 sm:h-12 
                      flex items-center justify-center 
                      rounded-lg sm:rounded-xl 
                      bg-gray-100 dark:bg-gray-800 
                      text-gray-600 dark:text-gray-300 
                      ${a.color}
                      transition-all duration-300
                      transform hover:scale-110
                      shadow-sm hover:shadow-md
                    `,
                              "aria-label": `Suivez AWDTECH sur ${a.name}`,
                              children: a.icon,
                            },
                            a.name,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)(i.motion.div, {
                initial: "hidden",
                animate: "visible",
                variants: p,
                className: "relative",
                children: (0, b.jsx)("div", {
                  className:
                    "bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-600 p-6 sm:p-8 lg:p-10 shadow-xl",
                  children: (0, b.jsx)(y, {
                    mode: "wait",
                    children:
                      "success" === l
                        ? (0, b.jsxs)(
                            i.motion.div,
                            {
                              initial: { opacity: 0, scale: 0.9 },
                              animate: { opacity: 1, scale: 1 },
                              exit: { opacity: 0, scale: 0.9 },
                              className: "text-center py-8 sm:py-12",
                              children: [
                                (0, b.jsx)("div", {
                                  className:
                                    "w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6",
                                  children: (0, b.jsx)("svg", {
                                    className:
                                      "w-8 h-8 sm:w-10 sm:h-10 text-green-500 dark:text-green-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, b.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M5 13l4 4L19 7",
                                    }),
                                  }),
                                }),
                                (0, b.jsx)("h3", {
                                  className:
                                    "text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2",
                                  children: "Message envoyé avec succès !",
                                }),
                                (0, b.jsx)("p", {
                                  className:
                                    "text-sm sm:text-base text-gray-500 dark:text-gray-300",
                                  children:
                                    "Merci d'avoir contacté AWDTECH. Nous vous répondrons dans les 24 heures ouvrables.",
                                }),
                                (0, b.jsx)(d.Button, {
                                  className:
                                    "mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors",
                                  onClick: () => m("idle"),
                                  children: "Envoyer un autre message",
                                }),
                              ],
                            },
                            "success",
                          )
                        : (0, b.jsxs)(
                            i.motion.form,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              onSubmit: n,
                              className: "space-y-4 sm:space-y-6",
                              children: [
                                (0, b.jsxs)("div", {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
                                  children: [
                                    (0, b.jsxs)("div", {
                                      className: "space-y-2",
                                      children: [
                                        (0, b.jsx)("label", {
                                          htmlFor: "name",
                                          className:
                                            "text-sm font-medium text-gray-600 dark:text-gray-300",
                                          children: "Nom complet *",
                                        }),
                                        (0, b.jsx)(f, {
                                          id: "name",
                                          name: "name",
                                          value: a.name,
                                          onChange: o,
                                          required: !0,
                                          className:
                                            "h-11 sm:h-12 border-gray-300 dark:border-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-colors",
                                          placeholder: "Votre nom complet",
                                        }),
                                      ],
                                    }),
                                    (0, b.jsxs)("div", {
                                      className: "space-y-2",
                                      children: [
                                        (0, b.jsx)("label", {
                                          htmlFor: "email",
                                          className:
                                            "text-sm font-medium text-gray-600 dark:text-gray-300",
                                          children: "Email *",
                                        }),
                                        (0, b.jsx)(f, {
                                          id: "email",
                                          name: "email",
                                          type: "email",
                                          value: a.email,
                                          onChange: o,
                                          required: !0,
                                          className:
                                            "h-11 sm:h-12 border-gray-300 dark:border-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-colors",
                                          placeholder: "votre@email.com",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, b.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, b.jsx)("label", {
                                      htmlFor: "subject",
                                      className:
                                        "text-sm font-medium text-gray-600 dark:text-gray-300",
                                      children: "Sujet *",
                                    }),
                                    (0, b.jsx)(f, {
                                      id: "subject",
                                      name: "subject",
                                      value: a.subject,
                                      onChange: o,
                                      required: !0,
                                      className:
                                        "h-11 sm:h-12 border-gray-300 dark:border-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-colors",
                                      placeholder: "Sujet de votre message",
                                    }),
                                  ],
                                }),
                                (0, b.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, b.jsx)("label", {
                                      htmlFor: "message",
                                      className:
                                        "text-sm font-medium text-gray-600 dark:text-gray-300",
                                      children: "Message *",
                                    }),
                                    (0, b.jsx)(g, {
                                      id: "message",
                                      name: "message",
                                      value: a.message,
                                      onChange: o,
                                      required: !0,
                                      rows: 4,
                                      cols: 20,
                                      className:
                                        "border-gray-300 dark:border-gray-500 h-[200px] focus:border-orange-500 focus:ring-orange-500 transition-colors resize-none text-sm sm:text-base",
                                      placeholder:
                                        "Décrivez votre projet ou votre demande...",
                                    }),
                                  ],
                                }),
                                (0, b.jsx)(d.Button, {
                                  type: "submit",
                                  disabled: j,
                                  className:
                                    "w-full h-12 sm:h-14 bg-orange-500  hover:to-orange-600 text-white text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                                  children: j
                                    ? (0, b.jsxs)("span", {
                                        className:
                                          "flex items-center justify-center",
                                        children: [
                                          (0, b.jsxs)("svg", {
                                            className:
                                              "animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                              (0, b.jsx)("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4",
                                              }),
                                              (0, b.jsx)("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                              }),
                                            ],
                                          }),
                                          "Envoi en cours...",
                                        ],
                                      })
                                    : (0, b.jsxs)("span", {
                                        className:
                                          "flex items-center justify-center",
                                        children: [
                                          "Envoyer le message",
                                          (0, b.jsx)("svg", {
                                            className:
                                              "w-4 h-4 sm:w-5 sm:h-5 ml-2",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, b.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                            }),
                                          }),
                                        ],
                                      }),
                                }),
                              ],
                            },
                            "form",
                          ),
                  }),
                }),
              }),
            ],
          }),
        }),
      });
    }
    a.s(["default", () => A], 58886);
  },
];

//# sourceMappingURL=awdtech_components_contact_ContactForm_tsx_e5b0672b._.js.map
