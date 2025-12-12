module.exports = [
  "[project]/awdtech/constants/projects.ts [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "languages",
      () => languages,
      "projects",
      () => projects,
    ]);
    const projects = [
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
    ];
    const languages = [
      {
        code: "en",
        name: "English",
        nativeName: "English",
      },
      {
        code: "fr",
        name: "French",
        nativeName: "Français",
      },
      {
        code: "es",
        name: "Spanish",
        nativeName: "Español",
      },
    ];
  },
  "[project]/awdtech/components/home/Products.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Products]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/image.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/constants/projects.ts [app-ssr] (ecmascript)",
      ); // Import projects from constants
    ("use client");
    function Products() {
      const t = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useTranslations"
      ])("Products");
      const [open, setOpen] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])("1");
      const toggleProject = (id) => {
        setOpen(open === id ? "0" : id);
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          className: "py-12 bg-white dark:bg-gray-900",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "mb-10 lg:mb-16 flex justify-center items-center flex-col",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "h2",
                        {
                          className:
                            "text-4xl font-bold text-gray-900 dark:text-white leading-[3.25rem] lg:mb-6 text-center",
                          children: t("title"),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/home/Products.tsx",
                          lineNumber: 19,
                          columnNumber: 11,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          className:
                            "text-lg font-normal text-gray-500 dark:text-gray-400 mb-5 text-center",
                          children: t("description"),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/home/Products.tsx",
                          lineNumber: 22,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/awdtech/components/home/Products.tsx",
                    lineNumber: 18,
                    columnNumber: 9,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "flex flex-col gap-8",
                    children:
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "projects"
                      ].map((project) =>
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "border-b border-gray-200 dark:border-gray-700",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  onClick: () => toggleProject(project.id),
                                  className:
                                    "w-full flex justify-between items-center py-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-4 transition-colors duration-200",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className: "text-left",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h3",
                                            {
                                              className:
                                                "text-2xl font-bold text-gray-900 dark:text-white",
                                              children: t(
                                                `items.${project.slug}.title`,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/awdtech/components/home/Products.tsx",
                                              lineNumber: 34,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              className:
                                                "text-lg text-orange-500 font-medium mt-1",
                                              children: t(
                                                `items.${project.slug}.subtitle`,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/awdtech/components/home/Products.tsx",
                                              lineNumber: 37,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/home/Products.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "svg",
                                      {
                                        className: `w-6 h-6 transition-transform duration-300 text-gray-600 dark:text-gray-400 ${open === project.id ? "transform rotate-180" : ""}`,
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "path",
                                          {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M19 9l-7 7-7-7",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/awdtech/components/home/Products.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19,
                                          },
                                          this,
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/home/Products.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/awdtech/components/home/Products.tsx",
                                  lineNumber: 29,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: `grid overflow-hidden transition-all duration-300 ease-in-out ${open === project.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "overflow-hidden",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className:
                                            "grid grid-cols-1 md:grid-cols-2 gap-8 pb-6 px-4",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "div",
                                              {
                                                className: "space-y-4",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "p",
                                                    {
                                                      className:
                                                        "text-gray-600 dark:text-gray-300 text-lg leading-relaxed",
                                                      children: t(
                                                        `items.${project.slug}.description`,
                                                      ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/awdtech/components/home/Products.tsx",
                                                      lineNumber: 68,
                                                      columnNumber: 23,
                                                    },
                                                    this,
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "a",
                                                    {
                                                      href: project.link,
                                                      target: "_blank",
                                                      className:
                                                        "bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200",
                                                      children: t("learnMore"),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/awdtech/components/home/Products.tsx",
                                                      lineNumber: 71,
                                                      columnNumber: 23,
                                                    },
                                                    this,
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/awdtech/components/home/Products.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21,
                                              },
                                              this,
                                            ),
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "div",
                                              {
                                                className:
                                                  "relative h-64 md:h-80 rounded-xl overflow-hidden",
                                                children: /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "default"
                                                  ],
                                                  {
                                                    src: project.image,
                                                    alt: t(
                                                      `items.${project.slug}.title`,
                                                    ),
                                                    fill: true,
                                                    className: "object-cover",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/awdtech/components/home/Products.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 23,
                                                  },
                                                  this,
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/awdtech/components/home/Products.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21,
                                              },
                                              this,
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/awdtech/components/home/Products.tsx",
                                          lineNumber: 66,
                                          columnNumber: 19,
                                        },
                                        this,
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/awdtech/components/home/Products.tsx",
                                      lineNumber: 65,
                                      columnNumber: 17,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/awdtech/components/home/Products.tsx",
                                  lineNumber: 58,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                            ],
                          },
                          project.id,
                          true,
                          {
                            fileName:
                              "[project]/awdtech/components/home/Products.tsx",
                            lineNumber: 28,
                            columnNumber: 13,
                          },
                          this,
                        ),
                      ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/awdtech/components/home/Products.tsx",
                    lineNumber: 26,
                    columnNumber: 9,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/awdtech/components/home/Products.tsx",
              lineNumber: 17,
              columnNumber: 7,
            },
            this,
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/home/Products.tsx",
          lineNumber: 16,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/awdtech/lib/utils.ts [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["cn", () => cn]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)",
      );
    function cn(...inputs) {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "twMerge"
      ])(
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "clsx"
        ])(inputs),
      );
    }
  },
  "[project]/awdtech/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "DropdownMenu",
      () => DropdownMenu,
      "DropdownMenuCheckboxItem",
      () => DropdownMenuCheckboxItem,
      "DropdownMenuContent",
      () => DropdownMenuContent,
      "DropdownMenuGroup",
      () => DropdownMenuGroup,
      "DropdownMenuItem",
      () => DropdownMenuItem,
      "DropdownMenuLabel",
      () => DropdownMenuLabel,
      "DropdownMenuPortal",
      () => DropdownMenuPortal,
      "DropdownMenuRadioGroup",
      () => DropdownMenuRadioGroup,
      "DropdownMenuRadioItem",
      () => DropdownMenuRadioItem,
      "DropdownMenuSeparator",
      () => DropdownMenuSeparator,
      "DropdownMenuShortcut",
      () => DropdownMenuShortcut,
      "DropdownMenuSub",
      () => DropdownMenuSub,
      "DropdownMenuSubContent",
      () => DropdownMenuSubContent,
      "DropdownMenuSubTrigger",
      () => DropdownMenuSubTrigger,
      "DropdownMenuTrigger",
      () => DropdownMenuTrigger,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/lib/utils.ts [app-ssr] (ecmascript)",
      );
    ("use client");
    function DropdownMenu({ ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Root"
        ],
        {
          "data-slot": "dropdown-menu",
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 12,
          columnNumber: 10,
        },
        this,
      );
    }
    function DropdownMenuPortal({ ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Portal"
        ],
        {
          "data-slot": "dropdown-menu-portal",
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 19,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuTrigger({ ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Trigger"
        ],
        {
          "data-slot": "dropdown-menu-trigger",
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 27,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Portal"
        ],
        {
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "Content"
            ],
            {
              "data-slot": "dropdown-menu-content",
              sideOffset: sideOffset,
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
                className,
              ),
              ...props,
            },
            void 0,
            false,
            {
              fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
              lineNumber: 41,
              columnNumber: 7,
            },
            this,
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 40,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuGroup({ ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Group"
        ],
        {
          "data-slot": "dropdown-menu-group",
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 58,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuItem({
      className,
      inset,
      variant = "default",
      ...props
    }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Item"
        ],
        {
          "data-slot": "dropdown-menu-item",
          "data-inset": inset,
          "data-variant": variant,
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className,
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 72,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuCheckboxItem({
      className,
      children,
      checked,
      ...props
    }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "CheckboxItem"
        ],
        {
          "data-slot": "dropdown-menu-checkbox-item",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className,
          ),
          checked: checked,
          ...props,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className:
                  "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "ItemIndicator"
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__[
                        "CheckIcon"
                      ],
                      {
                        className: "size-4",
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/awdtech/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/awdtech/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7,
              },
              this,
            ),
            children,
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 92,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuRadioGroup({ ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "RadioGroup"
        ],
        {
          "data-slot": "dropdown-menu-radio-group",
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 115,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuRadioItem({ className, children, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "RadioItem"
        ],
        {
          "data-slot": "dropdown-menu-radio-item",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className,
          ),
          ...props,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className:
                  "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "ItemIndicator"
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__[
                        "CircleIcon"
                      ],
                      {
                        className: "size-2 fill-current",
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/awdtech/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/awdtech/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7,
              },
              this,
            ),
            children,
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 128,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuLabel({ className, inset, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Label"
        ],
        {
          "data-slot": "dropdown-menu-label",
          "data-inset": inset,
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 154,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuSeparator({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Separator"
        ],
        {
          "data-slot": "dropdown-menu-separator",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])("bg-border -mx-1 my-1 h-px", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 171,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuShortcut({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "span",
        {
          "data-slot": "dropdown-menu-shortcut",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "text-muted-foreground ml-auto text-xs tracking-widest",
            className,
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 184,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuSub({ ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Sub"
        ],
        {
          "data-slot": "dropdown-menu-sub",
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 198,
          columnNumber: 10,
        },
        this,
      );
    }
    function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "SubTrigger"
        ],
        {
          "data-slot": "dropdown-menu-sub-trigger",
          "data-inset": inset,
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className,
          ),
          ...props,
          children: [
            children,
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__[
                "ChevronRightIcon"
              ],
              {
                className: "ml-auto size-4",
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 210,
          columnNumber: 5,
        },
        this,
      );
    }
    function DropdownMenuSubContent({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "SubContent"
        ],
        {
          "data-slot": "dropdown-menu-sub-content",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
            className,
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/dropdown-menu.tsx",
          lineNumber: 230,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/awdtech/components/ui/button.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Button",
      () => Button,
      "buttonVariants",
      () => buttonVariants,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/lib/utils.ts [app-ssr] (ecmascript)",
      );
    const buttonVariants = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
      "cva"
    ])(
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
        defaultVariants: {
          variant: "default",
          size: "default",
        },
      },
    );
    function Button({ className, variant, size, asChild = false, ...props }) {
      const Comp = asChild
        ? __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Slot"
          ]
        : "button";
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        Comp,
        {
          "data-slot": "button",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            buttonVariants({
              variant,
              size,
              className,
            }),
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/ui/button.tsx",
          lineNumber: 52,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/awdtech/components/theme-toggler.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["ThemeToggler", () => ThemeToggler]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/components/ui/button.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)",
      );
    ("use client");
    function ThemeToggler() {
      const { setTheme } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useTheme"
      ])();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "DropdownMenu"
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "DropdownMenuTrigger"
              ],
              {
                asChild: true,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "Button"
                  ],
                  {
                    variant: "outline",
                    size: "icon",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__[
                          "Sun"
                        ],
                        {
                          className:
                            "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/theme-toggler.tsx",
                          lineNumber: 22,
                          columnNumber: 11,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__[
                          "Moon"
                        ],
                        {
                          className:
                            "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/theme-toggler.tsx",
                          lineNumber: 23,
                          columnNumber: 11,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "span",
                        {
                          className: "sr-only",
                          children: "Toggle theme",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/theme-toggler.tsx",
                          lineNumber: 24,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/awdtech/components/theme-toggler.tsx",
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/theme-toggler.tsx",
                lineNumber: 20,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "DropdownMenuContent"
              ],
              {
                align: "end",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "DropdownMenuItem"
                    ],
                    {
                      onClick: () => setTheme("light"),
                      children: "Light",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/theme-toggler.tsx",
                      lineNumber: 28,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "DropdownMenuItem"
                    ],
                    {
                      onClick: () => setTheme("dark"),
                      children: "Dark",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/theme-toggler.tsx",
                      lineNumber: 31,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "DropdownMenuItem"
                    ],
                    {
                      onClick: () => setTheme("system"),
                      children: "System",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/theme-toggler.tsx",
                      lineNumber: 34,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/awdtech/components/theme-toggler.tsx",
                lineNumber: 27,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/theme-toggler.tsx",
          lineNumber: 19,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/awdtech/i18n/routing.ts [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["routing", () => routing]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript) <export default as defineRouting>",
      );
    const routing = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__[
      "defineRouting"
    ])({
      // A list of all locales that are supported
      locales: ["en", "fr", "es"],
      // Used when no locale matches
      defaultLocale: "fr",
    });
  },
  "[project]/awdtech/i18n/navigation.ts [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Link",
      () => Link,
      "getPathname",
      () => getPathname,
      "redirect",
      () => redirect,
      "usePathname",
      () => usePathname,
      "useRouter",
      () => useRouter,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript) <export default as createNavigation>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/i18n/routing.ts [app-ssr] (ecmascript)",
      );
    const { Link, redirect, usePathname, useRouter, getPathname } = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__[
      "createNavigation"
    ])(
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "routing"
      ],
    );
  },
  "[project]/awdtech/components/mobile-language-selector.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/i18n/navigation.ts [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/lib/utils.ts [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/constants/projects.ts [app-ssr] (ecmascript)",
      );
    ("use client");
    const MobileLanguageSwitcher = ({ onLanguageChange, className }) => {
      const currentLocale = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useLocale"
      ])();
      const currentLanguage =
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "languages"
        ].find((lang) => lang.code === currentLocale) ||
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "languages"
        ][0];
      const handleLanguageClick = () => {
        if (onLanguageChange) {
          onLanguageChange();
        }
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])("w-full", className),
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "flex items-center gap-3 px-4 py-4 border-b border-border",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__[
                      "Globe"
                    ],
                    {
                      className: "w-5 h-5 text-muted-foreground",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/mobile-language-selector.tsx",
                      lineNumber: 31,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className: "font-semibold text-sm text-foreground",
                      children: "Language",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/mobile-language-selector.tsx",
                      lineNumber: 32,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className: "text-xs text-muted-foreground ml-auto",
                      children: currentLanguage.nativeName,
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/mobile-language-selector.tsx",
                      lineNumber: 33,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  "[project]/awdtech/components/mobile-language-selector.tsx",
                lineNumber: 30,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "space-y-2 p-2",
                children:
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "languages"
                  ].map((language) =>
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "Link"
                      ],
                      {
                        href: "/",
                        locale: language.code,
                        className: (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "cn"
                        ])(
                          "flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200",
                          "hover:bg-accent hover:text-accent-foreground border border-transparent",
                          "active:scale-[0.98] active:bg-accent/80",
                          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                          currentLocale === language.code
                            ? "bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20"
                            : "text-foreground hover:border-border",
                        ),
                        onClick: handleLanguageClick,
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "flex items-center gap-3",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "span",
                                  {
                                    className: "text-base font-medium",
                                    children: language.nativeName,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/awdtech/components/mobile-language-selector.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15,
                                  },
                                  ("TURBOPACK compile-time value", void 0),
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "span",
                                  {
                                    className: (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "cn"
                                    ])(
                                      "text-xs",
                                      currentLocale === language.code
                                        ? "text-primary-foreground/80"
                                        : "text-muted-foreground",
                                    ),
                                    children: language.name,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/awdtech/components/mobile-language-selector.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15,
                                  },
                                  ("TURBOPACK compile-time value", void 0),
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/awdtech/components/mobile-language-selector.tsx",
                              lineNumber: 56,
                              columnNumber: 13,
                            },
                            ("TURBOPACK compile-time value", void 0),
                          ),
                          currentLocale === language.code &&
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
                                "Check"
                              ],
                              {
                                className: "w-5 h-5 text-primary-foreground",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/awdtech/components/mobile-language-selector.tsx",
                                lineNumber: 67,
                                columnNumber: 15,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                        ],
                      },
                      language.code,
                      true,
                      {
                        fileName:
                          "[project]/awdtech/components/mobile-language-selector.tsx",
                        lineNumber: 41,
                        columnNumber: 11,
                      },
                      ("TURBOPACK compile-time value", void 0),
                    ),
                  ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/awdtech/components/mobile-language-selector.tsx",
                lineNumber: 39,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/mobile-language-selector.tsx",
          lineNumber: 28,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    const __TURBOPACK__default__export__ = MobileLanguageSwitcher;
  },
  "[project]/awdtech/components/mobile-theme-switcher.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/monitor.js [app-ssr] (ecmascript) <export default as Monitor>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/lib/utils.ts [app-ssr] (ecmascript)",
      );
    ("use client");
    const MobileThemeSwitcher = ({ onThemeChange, className }) => {
      const { theme, setTheme, systemTheme } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useTheme"
      ])();
      const themes = [
        {
          value: "light",
          label: "Light",
          icon: __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__[
            "Sun"
          ],
          description: "Light mode",
        },
        {
          value: "dark",
          label: "Dark",
          icon: __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__[
            "Moon"
          ],
          description: "Dark mode",
        },
        {
          value: "system",
          label: "System",
          icon: __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__[
            "Monitor"
          ],
          description: "Follow device",
        },
      ];
      const currentTheme = themes.find((t) => t.value === theme) || themes[2];
      const handleThemeClick = (themeValue) => {
        setTheme(themeValue);
        if (onThemeChange) {
          onThemeChange();
        }
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])("w-full", className),
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "flex items-center gap-3 px-4 py-4 border-b border-border",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    currentTheme.icon,
                    {
                      className: "w-5 h-5 text-muted-foreground",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/mobile-theme-switcher.tsx",
                      lineNumber: 34,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className: "font-semibold text-sm text-foreground",
                      children: "Theme",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/mobile-theme-switcher.tsx",
                      lineNumber: 35,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className:
                        "text-xs text-muted-foreground ml-auto capitalize",
                      children:
                        theme === "system" ? `System (${systemTheme})` : theme,
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/mobile-theme-switcher.tsx",
                      lineNumber: 36,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  "[project]/awdtech/components/mobile-theme-switcher.tsx",
                lineNumber: 33,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "space-y-2 p-2",
                children: themes.map((themeOption) => {
                  const Icon = themeOption.icon;
                  const isSelected = theme === themeOption.value;
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      onClick: () => handleThemeClick(themeOption.value),
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "cn"
                      ])(
                        "flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200",
                        "hover:bg-accent hover:text-accent-foreground border border-transparent",
                        "active:scale-[0.98] active:bg-accent/80",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                        isSelected
                          ? "bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20"
                          : "text-foreground hover:border-border",
                      ),
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "flex items-center gap-4 flex-1",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "cn"
                                  ])(
                                    "p-2 rounded-lg transition-colors",
                                    isSelected
                                      ? "bg-primary-foreground/20"
                                      : "bg-muted",
                                  ),
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    Icon,
                                    {
                                      className: (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "cn"
                                      ])(
                                        "w-4 h-4 transition-colors",
                                        isSelected
                                          ? "text-primary-foreground"
                                          : "text-muted-foreground",
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/awdtech/components/mobile-theme-switcher.tsx",
                                      lineNumber: 66,
                                      columnNumber: 19,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/awdtech/components/mobile-theme-switcher.tsx",
                                  lineNumber: 62,
                                  columnNumber: 17,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "flex flex-col items-start",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "span",
                                      {
                                        className: "text-base font-medium",
                                        children: themeOption.label,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/mobile-theme-switcher.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19,
                                      },
                                      ("TURBOPACK compile-time value", void 0),
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "span",
                                      {
                                        className: (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "cn"
                                        ])(
                                          "text-xs text-left mt-0.5",
                                          isSelected
                                            ? "text-primary-foreground/80"
                                            : "text-muted-foreground",
                                        ),
                                        children: themeOption.description,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/mobile-theme-switcher.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19,
                                      },
                                      ("TURBOPACK compile-time value", void 0),
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/awdtech/components/mobile-theme-switcher.tsx",
                                  lineNumber: 71,
                                  columnNumber: 17,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/awdtech/components/mobile-theme-switcher.tsx",
                            lineNumber: 61,
                            columnNumber: 15,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                        isSelected &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
                              "Check"
                            ],
                            {
                              className:
                                "w-5 h-5 text-primary-foreground flex-shrink-0",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/awdtech/components/mobile-theme-switcher.tsx",
                              lineNumber: 83,
                              columnNumber: 17,
                            },
                            ("TURBOPACK compile-time value", void 0),
                          ),
                      ],
                    },
                    themeOption.value,
                    true,
                    {
                      fileName:
                        "[project]/awdtech/components/mobile-theme-switcher.tsx",
                      lineNumber: 48,
                      columnNumber: 13,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  );
                }),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/awdtech/components/mobile-theme-switcher.tsx",
                lineNumber: 42,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/mobile-theme-switcher.tsx",
          lineNumber: 31,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    const __TURBOPACK__default__export__ = MobileThemeSwitcher;
  },
  "[project]/awdtech/components/locale-toggler.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/i18n/navigation.ts [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/components/ui/button.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/lib/utils.ts [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/constants/projects.ts [app-ssr] (ecmascript)",
      );
    ("use client");
    const LanguageButton = () => {
      const currentLocale = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useLocale"
      ])();
      const currentLanguage =
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "languages"
        ].find((lang) => lang.code === currentLocale) ||
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "languages"
        ][0];
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "DropdownMenu"
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "DropdownMenuTrigger"
              ],
              {
                asChild: true,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "Button"
                  ],
                  {
                    variant: "outline",
                    size: "sm",
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "cn"
                    ])(
                      "flex items-center gap-2",
                      "bg-background border-border text-foreground",
                      "hover:bg-accent hover:text-accent-foreground",
                      "transition-colors duration-200",
                    ),
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__[
                          "Globe"
                        ],
                        {
                          className: "w-4 h-4",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/locale-toggler.tsx",
                          lineNumber: 35,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "span",
                        {
                          children: currentLanguage.code.toUpperCase(),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/locale-toggler.tsx",
                          lineNumber: 36,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/awdtech/components/locale-toggler.tsx",
                    lineNumber: 25,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/locale-toggler.tsx",
                lineNumber: 24,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "DropdownMenuContent"
              ],
              {
                align: "end",
                className: "w-48 bg-background border-border",
                children:
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "languages"
                  ].map((language) => {
                    const isSelected = currentLocale === language.code;
                    return /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "DropdownMenuItem"
                      ],
                      {
                        asChild: true,
                        className: "p-0",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "Link"
                          ],
                          {
                            href: "/",
                            locale: language.code,
                            className: (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "cn"
                            ])(
                              "flex items-center justify-between w-full px-2 py-1.5 cursor-pointer",
                              "text-foreground hover:bg-accent hover:text-accent-foreground",
                              "transition-colors duration-200",
                              isSelected && "bg-accent text-accent-foreground",
                            ),
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "flex items-center gap-2 flex-1",
                                  children: [
                                    isSelected &&
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
                                          "Check"
                                        ],
                                        {
                                          className:
                                            "w-3 h-3 text-primary flex-shrink-0",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/awdtech/components/locale-toggler.tsx",
                                          lineNumber: 60,
                                          columnNumber: 21,
                                        },
                                        ("TURBOPACK compile-time value",
                                        void 0),
                                      ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "span",
                                      {
                                        className: (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "cn"
                                        ])(
                                          "flex-1",
                                          !isSelected && "ml-5", // Offset for when checkmark isn't shown
                                        ),
                                        children: language.nativeName,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/locale-toggler.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19,
                                      },
                                      ("TURBOPACK compile-time value", void 0),
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/awdtech/components/locale-toggler.tsx",
                                  lineNumber: 58,
                                  columnNumber: 17,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "span",
                                {
                                  className: (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "cn"
                                  ])(
                                    "text-xs",
                                    isSelected
                                      ? "text-primary-foreground/70"
                                      : "text-muted-foreground",
                                  ),
                                  children: language.name,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/awdtech/components/locale-toggler.tsx",
                                  lineNumber: 69,
                                  columnNumber: 17,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/awdtech/components/locale-toggler.tsx",
                            lineNumber: 48,
                            columnNumber: 15,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                      },
                      language.code,
                      false,
                      {
                        fileName:
                          "[project]/awdtech/components/locale-toggler.tsx",
                        lineNumber: 47,
                        columnNumber: 13,
                      },
                      ("TURBOPACK compile-time value", void 0),
                    );
                  }),
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/locale-toggler.tsx",
                lineNumber: 39,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/locale-toggler.tsx",
          lineNumber: 23,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    const __TURBOPACK__default__export__ = LanguageButton;
  },
  "[project]/awdtech/components/shared/Header.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Header]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/@headlessui/react/dist/components/disclosure/disclosure.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$theme$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/components/theme-toggler.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$mobile$2d$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/components/mobile-language-selector.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$mobile$2d$theme$2d$switcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/components/mobile-theme-switcher.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/lib/utils.ts [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$locale$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/components/locale-toggler.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/navigation.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>",
      );
    ("use client");
    function Header({
      scrolledBg = "bg-white/95 dark:bg-black shadow-lg backdrop-blur-sm",
      defaultBg = "bg-transparent",
      threshold = 50,
    }) {
      const [mobileMenuOpen, setMobileMenuOpen] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const t = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useTranslations"
      ])("Header");
      const pathname = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "usePathname"
      ])();
      const services = [
        {
          name: t("webDevelopment"),
          description: t("webDevelopmentDescription"),
          href: "web",
          icon: __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__[
            "Globe"
          ],
        },
        {
          name: t("mobileDevelopment"),
          description: t("mobileDevelopmentDescription"),
          href: "mobile",
          icon: __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__[
            "Smartphone"
          ],
        },
        {
          name: t("graphicDesign"),
          description: t("graphicDesignDescription"),
          href: "graphic",
          icon: __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__[
            "Palette"
          ],
        },
      ];
      const [isScrolled, setIsScrolled] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const [lastScrollY, setLastScrollY] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(0);
      const [isVisible, setIsVisible] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(true);
      const headerRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(() => {
        let ticking = false;
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (!ticking) {
            requestAnimationFrame(() => {
              // Change background when scrolled past threshold
              setIsScrolled(currentScrollY > threshold);
              // Hide/show header based on scroll direction
              if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past 100px - hide header
                setIsVisible(true);
              } else {
                // Scrolling up - show header
                setIsVisible(true);
              }
              setLastScrollY(currentScrollY);
              ticking = false;
            });
            ticking = true;
          }
        };
        // Add scroll event listener with passive for better performance
        window.addEventListener("scroll", handleScroll, {
          passive: true,
        });
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [lastScrollY, threshold]);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "header",
        {
          ref: headerRef,
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "z-50 fixed w-screen top-0 left-0 transition-all duration-300",
            "border-b",
            isScrolled
              ? "border-gray-200  dark:border-gray-800"
              : "border-transparent",
            isVisible ? "translate-y-0" : "-translate-y-full",
            isScrolled ? scrolledBg : defaultBg,
          ),
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "nav",
              {
                "aria-label": "Global",
                className:
                  "mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "flex lg:flex-1",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          href: "/",
                          className: "-m-1.5 p-1.5",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className: "sr-only",
                                children: "AWDTECH",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/awdtech/components/shared/Header.tsx",
                                lineNumber: 158,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "svg",
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "127",
                                height: "30",
                                viewBox: "0 0 127 30",
                                fill: "none",
                                className: "text-foreground",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "g",
                                    {
                                      clipPath: "url(#clip0_9616_17482)",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "text",
                                          {
                                            x: "75",
                                            y: "23",
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "19",
                                            fontWeight: "1000",
                                            fill: "currentColor",
                                            children: "TECH",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/awdtech/components/shared/Header.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "path",
                                          {
                                            d: "M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z",
                                            fill: "#FF6600",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/awdtech/components/shared/Header.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "path",
                                          {
                                            d: "M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z",
                                            fill: "#FF6600",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/awdtech/components/shared/Header.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "path",
                                          {
                                            d: "M46.5529 6.6632C39.9138 6.6632 39.255 12.6625 40.7527 16.9482C40.9759 16.7397 41.0696 16.5902 41.0696 16.5902C41.1524 17.3862 41.3072 18.203 41.3072 18.203C40.3819 18.1821 39.7338 17.6191 39.7338 17.6191C39.8742 17.553 40.0002 17.4835 40.1155 17.4175L37.0191 6.9656C30.7436 6.93432 29.7427 12.659 31.2477 17.4453H30.4304L27.4817 6.9656H21.145L25.5375 22.9545H33.7896C34.6357 22.9545 34.7005 22.8641 34.7005 22.4991C34.7005 19.781 33.3647 17.9041 34.3944 14.0528C33.6888 13.9347 33.2711 14.0007 33.2711 14.0007C34.4412 12.7529 35.4998 12.2385 35.4998 12.2385C35.831 13.3194 35.9714 14.5256 35.9714 14.5256C35.7014 14.4109 35.4494 14.3205 35.2117 14.2475C35.2009 19.1832 38.5421 22.951 40.5295 22.951H45.4224C46.2073 22.951 46.3333 22.5582 46.3333 22.1342C46.3333 21.015 44.6375 17.772 44.6087 15.3215C44.5763 13.6844 45.2352 12.5965 46.6466 12.5965C47.2118 12.5965 47.8995 12.8085 47.8995 12.8085L49.6565 6.90304C49.6565 6.90304 48.3711 6.65973 46.5493 6.65973L46.5529 6.6632Z",
                                            fill: "#FF6600",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/awdtech/components/shared/Header.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/awdtech/components/shared/Header.tsx",
                                      lineNumber: 167,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "defs",
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "clipPath",
                                        {
                                          id: "clip0_9616_17482)",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "rect",
                                            {
                                              width: "127",
                                              height: "30",
                                              fill: "white",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/awdtech/components/shared/Header.tsx",
                                              lineNumber: 194,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/awdtech/components/shared/Header.tsx",
                                          lineNumber: 193,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/awdtech/components/shared/Header.tsx",
                                      lineNumber: 192,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/awdtech/components/shared/Header.tsx",
                                lineNumber: 159,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/awdtech/components/shared/Header.tsx",
                          lineNumber: 157,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/shared/Header.tsx",
                      lineNumber: 156,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "flex lg:hidden",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "button",
                        {
                          type: "button",
                          onClick: () => setMobileMenuOpen(true),
                          className: (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "cn"
                          ])(
                            "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
                            !isScrolled &&
                              !["/fr", "/en", "/es"].includes(pathname)
                              ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                              : isScrolled
                                ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                                : "text-white",
                            "transition-colors duration-200",
                          ),
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className: "sr-only",
                                children: t("openMainMenu"),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/awdtech/components/shared/Header.tsx",
                                lineNumber: 211,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__[
                                "Menu"
                              ],
                              {
                                "aria-hidden": "true",
                                className: "size-6",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/awdtech/components/shared/Header.tsx",
                                lineNumber: 212,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/awdtech/components/shared/Header.tsx",
                          lineNumber: 201,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/shared/Header.tsx",
                      lineNumber: 200,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "hidden lg:flex lg:gap-x-12",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "default"
                          ],
                          {
                            href: "/",
                            className: `text-sm/6 ${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"}   font-semibold  hover:text-primary transition-colors duration-200`,
                            children: t("home"),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Header.tsx",
                            lineNumber: 217,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "DropdownMenu"
                          ],
                          {
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "DropdownMenuTrigger"
                                ],
                                {
                                  asChild: true,
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "button",
                                    {
                                      className: (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "cn"
                                      ])(
                                        "flex items-center gap-x-1 text-sm/6 font-semibold",
                                        "text-foreground hover:text-primary transition-colors duration-200",
                                        "focus:outline-none focus:text-primary",
                                      ),
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className: `${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"}`,
                                            children: [" ", t("services")],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/awdtech/components/shared/Header.tsx",
                                            lineNumber: 231,
                                            columnNumber: 16,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
                                            "ChevronDown"
                                          ],
                                          {
                                            "aria-hidden": "true",
                                            className:
                                              "size-5 flex-none dark:text-gray-500",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/awdtech/components/shared/Header.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/awdtech/components/shared/Header.tsx",
                                      lineNumber: 226,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/awdtech/components/shared/Header.tsx",
                                  lineNumber: 225,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "DropdownMenuContent"
                                ],
                                {
                                  align: "center",
                                  className:
                                    "w-80 rounded-3xl bg-background border border-border shadow-xl",
                                  children: services.map((item) =>
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "DropdownMenuItem"
                                      ],
                                      {
                                        className:
                                          "flex items-center gap-x-6 rounded-3xl p-4 text-sm/6 hover:bg-accent focus:bg-accent cursor-pointer transition-colors duration-200",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "default"
                                          ],
                                          {
                                            href: item.href,
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "flex size-11 flex-none items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-200",
                                                  children: /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    item.icon,
                                                    {
                                                      "aria-hidden": "true",
                                                      className:
                                                        "size-6 text-muted-foreground group-hover:text-primary transition-colors duration-200",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/awdtech/components/shared/Header.tsx",
                                                      lineNumber: 250,
                                                      columnNumber: 23,
                                                    },
                                                    this,
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/awdtech/components/shared/Header.tsx",
                                                  lineNumber: 249,
                                                  columnNumber: 21,
                                                },
                                                this,
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className: "flex-auto",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "span",
                                                      {
                                                        className:
                                                          "block font-semibold text-foreground",
                                                        children: item.name,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/awdtech/components/shared/Header.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 23,
                                                      },
                                                      this,
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "p",
                                                      {
                                                        className:
                                                          "mt-1 text-muted-foreground",
                                                        children:
                                                          item.description,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/awdtech/components/shared/Header.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 23,
                                                      },
                                                      this,
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/awdtech/components/shared/Header.tsx",
                                                  lineNumber: 255,
                                                  columnNumber: 21,
                                                },
                                                this,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/awdtech/components/shared/Header.tsx",
                                            lineNumber: 248,
                                            columnNumber: 19,
                                          },
                                          this,
                                        ),
                                      },
                                      item.name,
                                      false,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/shared/Header.tsx",
                                        lineNumber: 243,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/awdtech/components/shared/Header.tsx",
                                  lineNumber: 238,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Header.tsx",
                            lineNumber: 224,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "default"
                          ],
                          {
                            href: "/projects",
                            className: `${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"} text-sm/6 font-semibold  hover:text-primary transition-colors duration-200`,
                            children: t("projects"),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Header.tsx",
                            lineNumber: 267,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "default"
                          ],
                          {
                            href: "/contact",
                            className: `${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"} text-sm/6 font-semibold  hover:text-primary transition-colors duration-200`,
                            children: t("contact"),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Header.tsx",
                            lineNumber: 273,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/awdtech/components/shared/Header.tsx",
                      lineNumber: 216,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "hidden gap-3 lg:flex lg:flex-1 lg:justify-end",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$locale$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "default"
                          ],
                          {},
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Header.tsx",
                            lineNumber: 281,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$theme$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "ThemeToggler"
                          ],
                          {},
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Header.tsx",
                            lineNumber: 282,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/awdtech/components/shared/Header.tsx",
                      lineNumber: 280,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/awdtech/components/shared/Header.tsx",
                lineNumber: 152,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "Dialog"
              ],
              {
                open: mobileMenuOpen,
                onClose: setMobileMenuOpen,
                className: "lg:hidden",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/awdtech/components/shared/Header.tsx",
                      lineNumber: 290,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "DialogPanel"
                    ],
                    {
                      className:
                        "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-border",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "flex items-center justify-between",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "default"
                                ],
                                {
                                  href: "/",
                                  className: "-m-1.5 p-1.5",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "span",
                                      {
                                        className: "sr-only",
                                        children: "AWDTECH",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/shared/Header.tsx",
                                        lineNumber: 294,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "svg",
                                      {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "127",
                                        height: "30",
                                        viewBox: "0 0 127 30",
                                        fill: "none",
                                        className: "text-foreground",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "g",
                                            {
                                              clipPath:
                                                "url(#clip0_9616_17482)",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "path",
                                                  {
                                                    d: "M79.2157 7.86586C80.177 7.38272 81.2608 7.14288 82.4705 7.14288C83.853 7.14288 85.1168 7.47309 86.2581 8.13002C87.3994 8.78696 88.2995 9.71153 88.9512 10.8968C89.6028 12.0821 89.9305 13.4446 89.9305 14.9844C89.9305 16.5242 89.6028 17.9006 88.9512 19.1137C88.2995 20.3268 86.2581 21.95 82.4705 22.9649C81.2608 22.9649 80.1842 22.7286 79.2445 22.2558C78.3048 21.7831 77.5344 21.1957 76.9403 20.4901V30H73.6567V7.39314H76.9403V9.64549C77.4947 8.93989 78.2544 8.349 79.2157 7.86586ZM85.9124 12.2454C85.4624 11.4773 84.8647 10.8933 84.1267 10.4936C83.3886 10.0939 82.5965 9.89575 81.7504 9.89575C80.9043 9.89575 80.141 10.1008 79.403 10.5075C78.6649 10.9142 78.0672 11.5085 77.6172 12.2871C77.1671 13.0657 76.9403 13.9833 76.9403 15.04C76.9403 16.0967 77.1635 17.0178 77.6172 17.8068C78.0672 18.5958 78.6649 19.1936 79.403 19.6003C80.141 20.007 80.9259 20.2121 81.7504 20.2121C82.5749 20.2121 83.3886 20.0035 84.1267 19.5864C84.8647 19.1693 85.4624 18.561 85.9124 17.7651C86.3625 16.9691 86.5893 16.041 86.5893 14.9844C86.5893 13.9277 86.3625 13.0136 85.9124 12.2454Z",
                                                    fill: "currentColor",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/awdtech/components/shared/Header.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "path",
                                                  {
                                                    d: "M93.0845 10.8968C93.747 9.71153 94.6507 8.78696 95.792 8.13002C96.9333 7.47309 98.1971 7.14288 99.5796 7.14288C100.829 7.14288 101.916 7.37924 102.849 7.85196C103.781 8.32467 104.523 8.91209 105.081 9.61768V7.39314H108.393V22.7147H105.081V20.4345C104.523 21.1575 103.767 21.7588 102.806 22.2419C101.844 22.7251 100.75 22.9649 99.522 22.9649C98.1575 22.9649 96.9117 22.6278 95.7776 21.95C94.6435 21.2722 93.747 20.3268 93.0845 19.1137C92.4221 17.9006 92.0908 16.5242 92.0908 14.9844C92.0908 13.4446 92.4221 12.0821 93.0845 10.8968ZM104.404 12.2871C103.954 11.5085 103.364 10.9142 102.633 10.5075C101.902 10.1008 101.117 9.89575 100.271 9.89575C99.4248 9.89575 98.6399 10.0939 97.909 10.4936C97.1782 10.8933 96.5877 11.4773 96.1377 12.2454C95.6876 13.0136 95.4608 13.9277 95.4608 14.9844C95.4608 16.041 95.6876 16.9691 96.1377 17.7651C96.5877 18.561 97.1854 19.1693 97.9234 19.5864C98.6615 20.0035 99.4464 20.2121 100.271 20.2121C101.095 20.2121 101.902 20.007 102.633 19.6003C103.364 19.1936 103.954 18.5958 104.404 17.8068C104.854 17.0178 105.081 16.0967 105.081 15.04C105.081 13.9833 104.854 13.0657 104.404 12.2871Z",
                                                    fill: "currentColor",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/awdtech/components/shared/Header.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "path",
                                                  {
                                                    d: "M127 7.39313L117.264 29.9166H113.866L117.092 22.4644L110.841 7.39313H114.499L118.964 19.072L123.601 7.39313H127Z",
                                                    fill: "currentColor",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/awdtech/components/shared/Header.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "path",
                                                  {
                                                    d: "M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z",
                                                    fill: "#FF6600",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/awdtech/components/shared/Header.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "path",
                                                  {
                                                    d: "M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z",
                                                    fill: "#FF6600",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/awdtech/components/shared/Header.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "path",
                                                  {
                                                    d: "M46.5529 6.6632C39.9138 6.6632 39.255 12.6625 40.7527 16.9482C40.9759 16.7397 41.0696 16.5902 41.0696 16.5902C41.1524 17.3862 41.3072 18.203 41.3072 18.203C40.3819 18.1821 39.7338 17.6191 39.7338 17.6191C39.8742 17.553 40.0002 17.4835 40.1155 17.4175L37.0191 6.9656C30.7436 6.93432 29.7427 12.659 31.2477 17.4453H30.4304L27.4817 6.9656H21.145L25.5375 22.9545H33.7896C34.6357 22.9545 34.7005 22.8641 34.7005 22.4991C34.7005 19.781 33.3647 17.9041 34.3944 14.0528C33.6888 13.9347 33.2711 14.0007 33.2711 14.0007C34.4412 12.7529 35.4998 12.2385 35.4998 12.2385C35.831 13.3194 35.9714 14.5256 35.9714 14.5256C35.7014 14.4109 35.4494 14.3205 35.2117 14.2475C35.2009 19.1832 38.5421 22.951 40.5295 22.951H45.4224C46.2073 22.951 46.3333 22.5582 46.3333 22.1342C46.3333 21.015 44.6375 17.772 44.6087 15.3215C44.5763 13.6844 45.2352 12.5965 46.6466 12.5965C47.2118 12.5965 47.8995 12.8085 47.8995 12.8085L49.6565 6.90304C49.6565 6.90304 48.3711 6.65973 46.5493 6.65973L46.5529 6.6632Z",
                                                    fill: "#FF6600",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/awdtech/components/shared/Header.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/awdtech/components/shared/Header.tsx",
                                              lineNumber: 303,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "defs",
                                            {
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "clipPath",
                                                {
                                                  id: "clip0_9616_17482)",
                                                  children: /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "rect",
                                                    {
                                                      width: "127",
                                                      height: "30",
                                                      fill: "white",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/awdtech/components/shared/Header.tsx",
                                                      lineNumber: 331,
                                                      columnNumber: 21,
                                                    },
                                                    this,
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/awdtech/components/shared/Header.tsx",
                                                  lineNumber: 330,
                                                  columnNumber: 19,
                                                },
                                                this,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/awdtech/components/shared/Header.tsx",
                                              lineNumber: 329,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/shared/Header.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/awdtech/components/shared/Header.tsx",
                                  lineNumber: 293,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => setMobileMenuOpen(false),
                                  className: (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "cn"
                                  ])(
                                    "-m-2.5 rounded-md p-2.5",
                                    "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
                                    "transition-colors duration-200",
                                  ),
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "span",
                                      {
                                        className: "sr-only",
                                        children: t("closeMenu"),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/shared/Header.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                        "X"
                                      ],
                                      {
                                        "aria-hidden": "true",
                                        className: "size-6",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/awdtech/components/shared/Header.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/awdtech/components/shared/Header.tsx",
                                  lineNumber: 336,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Header.tsx",
                            lineNumber: 292,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "mt-6 flow-root",
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "-my-6 divide-y divide-border",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className: "space-y-2 py-6",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          href: "/",
                                          onClick: () =>
                                            setMobileMenuOpen(false),
                                          className:
                                            "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                          children: t("home"),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/awdtech/components/shared/Header.tsx",
                                          lineNumber: 352,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "Disclosure"
                                        ],
                                        {
                                          as: "div",
                                          className: "-mx-3",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "DisclosureButton"
                                              ],
                                              {
                                                className:
                                                  "group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                children: [
                                                  t("services"),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
                                                      "ChevronDown"
                                                    ],
                                                    {
                                                      "aria-hidden": "true",
                                                      className:
                                                        "size-5 flex-none group-data-open:rotate-180 text-muted-foreground transition-transform duration-200",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/awdtech/components/shared/Header.tsx",
                                                      lineNumber: 362,
                                                      columnNumber: 21,
                                                    },
                                                    this,
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/awdtech/components/shared/Header.tsx",
                                                lineNumber: 360,
                                                columnNumber: 19,
                                              },
                                              this,
                                            ),
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "DisclosurePanel"
                                              ],
                                              {
                                                className: "mt-2 space-y-2",
                                                children: services.map((item) =>
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "default"
                                                    ],
                                                    {
                                                      onClick: () =>
                                                        setMobileMenuOpen(
                                                          false,
                                                        ),
                                                      href: item.href,
                                                      className:
                                                        "block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                      children: item.name,
                                                    },
                                                    item.name,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/awdtech/components/shared/Header.tsx",
                                                      lineNumber: 369,
                                                      columnNumber: 23,
                                                    },
                                                    this,
                                                  ),
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/awdtech/components/shared/Header.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19,
                                              },
                                              this,
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/awdtech/components/shared/Header.tsx",
                                          lineNumber: 359,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          href: "/projects",
                                          onClick: () =>
                                            setMobileMenuOpen(false),
                                          className:
                                            "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                          children: t("projects"),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/awdtech/components/shared/Header.tsx",
                                          lineNumber: 380,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          href: "/contact",
                                          onClick: () =>
                                            setMobileMenuOpen(false),
                                          className:
                                            "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                          children: t("contact"),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/awdtech/components/shared/Header.tsx",
                                          lineNumber: 387,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$mobile$2d$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/awdtech/components/shared/Header.tsx",
                                          lineNumber: 394,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$components$2f$mobile$2d$theme$2d$switcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/awdtech/components/shared/Header.tsx",
                                          lineNumber: 395,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/awdtech/components/shared/Header.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/awdtech/components/shared/Header.tsx",
                                lineNumber: 350,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Header.tsx",
                            lineNumber: 349,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/awdtech/components/shared/Header.tsx",
                      lineNumber: 291,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/awdtech/components/shared/Header.tsx",
                lineNumber: 285,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/shared/Header.tsx",
          lineNumber: 140,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/awdtech/components/shared/AnimatedSection.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    ("use client");
    const AnimatedSection = ({ children }) => {
      const controls = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useAnimation"
      ])();
      const [ref, inView] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useInView"
      ])({
        triggerOnce: true,
        threshold: 0.1,
      });
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "motion"
        ].div,
        {
          ref: ref,
          initial: "hidden",
          animate: controls,
          variants: {
            visible: {
              opacity: 1,
              y: 0,
            },
            hidden: {
              opacity: 0,
              y: 50,
            },
          },
          transition: {
            duration: 1.2,
          },
          children: children,
        },
        void 0,
        false,
        {
          fileName: "[project]/awdtech/components/shared/AnimatedSection.tsx",
          lineNumber: 21,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    const __TURBOPACK__default__export__ = AnimatedSection;
  },
  "[project]/awdtech/components/shared/Clients.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/awdtech/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)",
      );
    ("use client");
    // Import logos - you'll need to replace these with actual AWDTECH partner/client logos
    const waveLogo = "/partners/wave.png";
    const mtnLogo = "/partners/mtn.png";
    const orangeLogo = "/partners/orange.png";
    const moovLogo = "/partners/moov.png";
    const airtelLogo = "/partners/airtel.png";
    const clientLogos = [
      {
        src: waveLogo,
        name: "Wave",
        category: "Fintech",
        description: "Solution de paiement mobile leader en Afrique",
        color: "from-blue-500 to-cyan-500",
      },
      {
        src: mtnLogo,
        name: "MTN",
        category: "Telecom",
        description: "Premier opérateur mobile en Afrique",
        color: "from-yellow-500 to-orange-500",
      },
      {
        src: orangeLogo,
        name: "Orange",
        category: "Telecom",
        description: "Services financiers mobiles innovants",
        color: "from-orange-500 to-red-500",
      },
      {
        src: moovLogo,
        name: "Moov",
        category: "Telecom",
        description: "Plateforme de paiement digital",
        color: "from-green-500 to-emerald-500",
      },
      {
        src: airtelLogo,
        name: "Airtel",
        category: "Telecom",
        description: "Réseau de télécommunications mondial",
        color: "from-red-500 to-pink-500",
      },
    ];
    const LogoPlaceholder = ({ src, name, color, category }) => {
      if (src) {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "img",
          {
            src: src,
            alt: name,
            className:
              "w-24 h-24 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:opacity-70",
          },
          void 0,
          false,
          {
            fileName: "[project]/awdtech/components/shared/Clients.tsx",
            lineNumber: 54,
            columnNumber: 7,
          },
          ("TURBOPACK compile-time value", void 0),
        );
      }
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: `w-24 h-24 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-xl shadow-lg relative`,
          children: [
            name.charAt(0),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm",
                children:
                  category === "Fintech"
                    ? "💳"
                    : category === "Telecom"
                      ? "📱"
                      : "🏢",
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/shared/Clients.tsx",
                lineNumber: 64,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/shared/Clients.tsx",
          lineNumber: 62,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    const LogoCarousel = () => {
      const [hoveredLogo, setHoveredLogo] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(null);
      const duplicatedLogos = [...clientLogos, ...clientLogos];
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "relative w-full overflow-hidden",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent z-10",
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/shared/Clients.tsx",
                lineNumber: 77,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent z-10",
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/shared/Clients.tsx",
                lineNumber: 78,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "motion"
              ].div,
              {
                className: "flex gap-16 py-8",
                animate: {
                  x: ["0%", "-50%"],
                },
                transition: {
                  ease: "linear",
                  duration: 40,
                  repeat: Infinity,
                },
                children: duplicatedLogos.map((logo, index) =>
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "motion"
                    ].div,
                    {
                      className: "flex-shrink-0 group cursor-pointer relative",
                      onHoverStart: () => setHoveredLogo(index),
                      onHoverEnd: () => setHoveredLogo(null),
                      whileHover: {
                        scale: 1.05,
                        zIndex: 20,
                      },
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      },
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "relative mb-4",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                LogoPlaceholder,
                                {
                                  ...logo,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/awdtech/components/shared/Clients.tsx",
                                  lineNumber: 99,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: `absolute inset-0 bg-gradient-to-br ${logo.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/awdtech/components/shared/Clients.tsx",
                                  lineNumber: 100,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Clients.tsx",
                            lineNumber: 98,
                            columnNumber: 13,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "text-center",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  className:
                                    "font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300 text-lg",
                                  children: logo.name,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/awdtech/components/shared/Clients.tsx",
                                  lineNumber: 104,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  className:
                                    "text-sm text-gray-600 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                  children: logo.category,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/awdtech/components/shared/Clients.tsx",
                                  lineNumber: 107,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/awdtech/components/shared/Clients.tsx",
                            lineNumber: 103,
                            columnNumber: 13,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                        hoveredLogo === index &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "motion"
                            ].div,
                            {
                              initial: {
                                opacity: 0,
                                y: 10,
                              },
                              animate: {
                                opacity: 1,
                                y: 0,
                              },
                              transition: {
                                duration: 0.2,
                              },
                              className:
                                "absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white p-3 rounded-lg text-sm whitespace-nowrap shadow-xl z-30",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className: "font-bold",
                                    children: logo.name,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/awdtech/components/shared/Clients.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17,
                                  },
                                  ("TURBOPACK compile-time value", void 0),
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "text-gray-300 dark:text-gray-400 text-xs mt-1 max-w-xs",
                                    children: logo.description,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/awdtech/components/shared/Clients.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17,
                                  },
                                  ("TURBOPACK compile-time value", void 0),
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/awdtech/components/shared/Clients.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17,
                                  },
                                  ("TURBOPACK compile-time value", void 0),
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/awdtech/components/shared/Clients.tsx",
                              lineNumber: 113,
                              columnNumber: 15,
                            },
                            ("TURBOPACK compile-time value", void 0),
                          ),
                      ],
                    },
                    `${logo.name}-${index}`,
                    true,
                    {
                      fileName:
                        "[project]/awdtech/components/shared/Clients.tsx",
                      lineNumber: 90,
                      columnNumber: 11,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/shared/Clients.tsx",
                lineNumber: 80,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/shared/Clients.tsx",
          lineNumber: 76,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    const Clients = () => {
      const t = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useTranslations"
      ])("Clients");
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          className:
            "max-w-7xl mx-auto py-20 lg:py-32 relative overflow-hidden",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "absolute inset-0  transition-colors duration-300",
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/shared/Clients.tsx",
                lineNumber: 136,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "motion"
                  ].div,
                  {
                    className: "mb-12",
                    initial: {
                      opacity: 0,
                      scale: 0.95,
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1,
                    },
                    viewport: {
                      once: true,
                    },
                    transition: {
                      duration: 0.5,
                    },
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "h3",
                        {
                          className:
                            "text-3xl font-bold text-center text-gray-900 dark:text-white mb-8",
                          children: t("title"),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/shared/Clients.tsx",
                          lineNumber: 146,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          className:
                            "text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto",
                          children: t("description"),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/shared/Clients.tsx",
                          lineNumber: 149,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$awdtech$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        LogoCarousel,
                        {},
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/awdtech/components/shared/Clients.tsx",
                          lineNumber: 152,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/awdtech/components/shared/Clients.tsx",
                    lineNumber: 139,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/awdtech/components/shared/Clients.tsx",
                lineNumber: 138,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/awdtech/components/shared/Clients.tsx",
          lineNumber: 135,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    const __TURBOPACK__default__export__ = Clients;
  },
];

//# sourceMappingURL=awdtech_417eadda._.js.map
