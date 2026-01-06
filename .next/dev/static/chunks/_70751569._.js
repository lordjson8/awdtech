(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/contact/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ContactForm() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("ContactPage");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Check if recently submitted (simple rate limiting)
        const lastSubmission = localStorage.getItem("lastFormSubmission");
        if (lastSubmission) {
            const timeSinceLast = Date.now() - parseInt(lastSubmission);
            if (timeSinceLast < 30000) {
                // 30 seconds cooldown
                setSubmitStatus("error");
                setTimeout(()=>setSubmitStatus("idle"), 3000);
                return;
            }
        }
        // Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus("error");
            setTimeout(()=>setSubmitStatus("idle"), 3000);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus("error");
            setTimeout(()=>setSubmitStatus("idle"), 3000);
            return;
        }
        setIsSubmitting(true);
        try {
            // API call to your backend
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent,
                    page: window.location.href
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Submission failed");
            }
            // Success
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            // Store submission timestamp for rate limiting
            localStorage.setItem("lastFormSubmission", Date.now().toString());
            // Analytics tracking
            if ("TURBOPACK compile-time truthy", 1) {
                // Google Analytics 4
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (window.gtag) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.gtag("event", "contact_submit", {
                        event_category: "Contact",
                        event_label: "Form Submission"
                    });
                }
                // Facebook Pixel
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (window.fbq) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.fbq("track", "Contact");
                }
            }
            // Auto-reset
            const timer = setTimeout(()=>setSubmitStatus("idle"), 5000);
            return ()=>clearTimeout(timer);
        } catch (error) {
            /* eslint-disable */ console.error(...oo_tx(`2385708030_121_6_121_52_11`, "Form submission error:", error));
            setIsSubmitting(false);
            setSubmitStatus("error");
            // Auto-reset error state
            setTimeout(()=>setSubmitStatus("idle"), 3000);
        }
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const formVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    // Social links with proper icons - Updated for AWDTECH
    const socialLinks = [
        {
            name: "facebook",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this),
            href: "https://facebook.com/awdtech",
            color: "hover:bg-[#1877F2] hover:text-white"
        },
        {
            name: "twitter",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, this),
            href: "https://twitter.com/awdtech",
            color: "hover:bg-[#1DA1F2] hover:text-white"
        },
        {
            name: "linkedin",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedinIn"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 171,
                columnNumber: 13
            }, this),
            href: "https://linkedin.com/company/awdtech",
            color: "hover:bg-[#0077B5] hover:text-white"
        },
        {
            name: "whatsapp",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 177,
                columnNumber: 13
            }, this),
            href: "https://wa.me/237656849690",
            color: "hover:bg-[#25D366] hover:text-white"
        }
    ];
    // Updated contact info for AWDTECH
    const contactInfo = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                className: "w-5 h-5 sm:w-6 sm:h-6"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, this),
            title: "Email",
            value: "support.cm@awdpay.com",
            action: "mailto:support.cm@awdpay.com"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {
                className: "w-5 h-5 sm:w-6 sm:h-6"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, this),
            title: "Cameroun",
            value: "+237 656 849 690 / +237 653 624 318",
            action: "tel:+237656849690"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {
                className: "w-5 h-5 sm:w-6 sm:h-6"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 198,
                columnNumber: 13
            }, this),
            title: "Gabon",
            value: "+241 66 50 39 99 / +241 76 38 80 06",
            action: "tel:+24166503999"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {
                className: "w-5 h-5 sm:w-6 sm:h-6"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 204,
                columnNumber: 13
            }, this),
            title: "Côte d'Ivoire",
            value: "+225 27 24 3 73010 / +225 27 24 3 73317",
            action: "tel:+225272473010"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGlobe"], {
                className: "w-5 h-5 sm:w-6 sm:h-6"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this),
            title: "Service",
            value: "Numérique Partout dans le Monde",
            action: "#"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-200px)] flex items-center justify-center dient-tbg-grao-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto py-8 lg:py-12 px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        animate: "visible",
                        variants: formVariants,
                        className: "space-y-8 pt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        variants: itemVariants,
                                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-gray-900 dark:text-white",
                                                children: "AWDTECH"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-orange-500 ",
                                                children: "Service Numérique Partout dans le Monde"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        variants: itemVariants,
                                        className: "text-lg text-gray-500 dark:text-gray-300 leading-relaxed",
                                        children: "Nous dynamisons votre entreprise avec notre expertise en technologie. Nous intervenons dans plusieurs pays d'Afrique, d'Europe et d'Amérique pour accompagner votre transformation digitale."
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                className: "space-y-6",
                                children: contactInfo.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.action,
                                        target: item.action === "#" ? undefined : "_blank",
                                        rel: item.action === "#" ? undefined : "noopener noreferrer",
                                        className: "flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 sm:p-3 bg-orange-50 dark:bg-orange-500/10 rounded-lg sm:rounded-xl text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 dark:text-gray-400 mt-1 text-sm",
                                                        children: item.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2",
                                                children: "Suivez-nous"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 dark:text-gray-300 text-sm",
                                                children: "Connectez-vous avec AWDTECH sur les réseaux sociaux"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-3",
                                        children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: `
                      w-10 h-10 sm:w-12 sm:h-12 
                      flex items-center justify-center 
                      rounded-lg sm:rounded-xl 
                      bg-gray-100 dark:bg-gray-800 
                      text-gray-600 dark:text-gray-300 
                      ${social.color}
                      transition-all duration-300
                      transform hover:scale-110
                      shadow-sm hover:shadow-md
                    `,
                                                "aria-label": `Suivez AWDTECH sur ${social.name}`,
                                                children: social.icon
                                            }, social.name, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        animate: "visible",
                        variants: formVariants,
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-600 p-6 sm:p-8 lg:p-10 shadow-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: submitStatus === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    className: "text-center py-8 sm:py-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-8 h-8 sm:w-10 sm:h-10 text-green-500 dark:text-green-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M5 13l4 4L19 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 332,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 331,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2",
                                            children: "Message envoyé avec succès !"
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 346,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-500 dark:text-gray-300",
                                            children: "Merci d'avoir contacté AWDTECH. Nous vous répondrons dans les 24 heures ouvrables."
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 349,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors",
                                            onClick: ()=>setSubmitStatus("idle"),
                                            children: "Envoyer un autre message"
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 353,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, "success", true, {
                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                    lineNumber: 324,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    onSubmit: handleSubmit,
                                    className: "space-y-4 sm:space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "name",
                                                            className: "text-sm font-medium text-gray-600 dark:text-gray-300",
                                                            children: "Nom complet *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "name",
                                                            name: "name",
                                                            value: formData.name,
                                                            onChange: handleChange,
                                                            required: true,
                                                            className: "h-11 sm:h-12 border-gray-300 dark:border-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-colors",
                                                            placeholder: "Votre nom complet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "email",
                                                            className: "text-sm font-medium text-gray-600 dark:text-gray-300",
                                                            children: "Email *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "email",
                                                            name: "email",
                                                            type: "email",
                                                            value: formData.email,
                                                            onChange: handleChange,
                                                            required: true,
                                                            className: "h-11 sm:h-12 border-gray-300 dark:border-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-colors",
                                                            placeholder: "votre@email.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 369,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "subject",
                                                    className: "text-sm font-medium text-gray-600 dark:text-gray-300",
                                                    children: "Sujet *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "subject",
                                                    name: "subject",
                                                    value: formData.subject,
                                                    onChange: handleChange,
                                                    required: true,
                                                    className: "h-11 sm:h-12 border-gray-300 dark:border-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-colors",
                                                    placeholder: "Sujet de votre message"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 407,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    className: "text-sm font-medium text-gray-600 dark:text-gray-300",
                                                    children: "Message *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    id: "message",
                                                    name: "message",
                                                    value: formData.message,
                                                    onChange: handleChange,
                                                    required: true,
                                                    rows: 4,
                                                    cols: 20,
                                                    className: "border-gray-300 dark:border-gray-500 h-[200px] focus:border-orange-500 focus:ring-orange-500 transition-colors resize-none text-sm sm:text-base",
                                                    placeholder: "Décrivez votre projet ou votre demande..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 425,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "w-full h-12 sm:h-14 bg-orange-500  hover:to-orange-600 text-white text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                className: "opacity-75",
                                                                fill: "currentColor",
                                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 27
                                                    }, this),
                                                    "Envoi en cours..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 451,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center",
                                                children: [
                                                    "Envoyer le message",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 sm:w-5 sm:h-5 ml-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 474,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 445,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, "form", true, {
                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                    lineNumber: 361,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 322,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/contact/ContactForm.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/contact/ContactForm.tsx",
            lineNumber: 219,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/contact/ContactForm.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "xKFASO5eyC3qU3PVDGbVcrBhazc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = ContactForm;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1cc9bf=_0x36d2;(function(_0x4237ed,_0x3747f9){var _0x4ba23b=_0x36d2,_0xc38e53=_0x4237ed();while(!![]){try{var _0xcfaff2=parseInt(_0x4ba23b(0x28a))/0x1+parseInt(_0x4ba23b(0x1c9))/0x2*(-parseInt(_0x4ba23b(0x218))/0x3)+parseInt(_0x4ba23b(0x233))/0x4+parseInt(_0x4ba23b(0x1ae))/0x5*(-parseInt(_0x4ba23b(0x1b7))/0x6)+parseInt(_0x4ba23b(0x1b6))/0x7*(parseInt(_0x4ba23b(0x1df))/0x8)+-parseInt(_0x4ba23b(0x285))/0x9*(-parseInt(_0x4ba23b(0x1d3))/0xa)+-parseInt(_0x4ba23b(0x24d))/0xb*(parseInt(_0x4ba23b(0x28e))/0xc);if(_0xcfaff2===_0x3747f9)break;else _0xc38e53['push'](_0xc38e53['shift']());}catch(_0x3340ad){_0xc38e53['push'](_0xc38e53['shift']());}}}(_0x4abd,0x33a2c));function z(_0x12f97f,_0x4412cc,_0x4ecfdf,_0x4965cc,_0x20be30,_0x4db6ae){var _0xdb0397=_0x36d2,_0x40190d,_0x14a3fb,_0x3fdb49,_0x1943f8;this[_0xdb0397(0x206)]=_0x12f97f,this[_0xdb0397(0x297)]=_0x4412cc,this['port']=_0x4ecfdf,this[_0xdb0397(0x2ae)]=_0x4965cc,this['dockerizedApp']=_0x20be30,this[_0xdb0397(0x2a4)]=_0x4db6ae,this[_0xdb0397(0x1eb)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this['_connected']=!0x1,this[_0xdb0397(0x217)]=!0x1,this[_0xdb0397(0x27d)]=((_0x14a3fb=(_0x40190d=_0x12f97f['process'])==null?void 0x0:_0x40190d[_0xdb0397(0x1f5)])==null?void 0x0:_0x14a3fb[_0xdb0397(0x200)])===_0xdb0397(0x1b3),this['_inBrowser']=!((_0x1943f8=(_0x3fdb49=this[_0xdb0397(0x206)]['process'])==null?void 0x0:_0x3fdb49[_0xdb0397(0x25c)])!=null&&_0x1943f8[_0xdb0397(0x212)])&&!this[_0xdb0397(0x27d)],this['_WebSocketClass']=null,this[_0xdb0397(0x1b5)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0xdb0397(0x203)]=_0xdb0397(0x20f),this['_sendErrorMessage']=(this[_0xdb0397(0x264)]?_0xdb0397(0x1ce):_0xdb0397(0x1ad))+this[_0xdb0397(0x203)];}z[_0x1cc9bf(0x1fa)]['getWebSocketClass']=async function(){var _0x5b981c=_0x1cc9bf,_0x392eb8,_0x4f8860;if(this[_0x5b981c(0x2ac)])return this['_WebSocketClass'];let _0x4f21b5;if(this[_0x5b981c(0x264)]||this['_inNextEdge'])_0x4f21b5=this[_0x5b981c(0x206)]['WebSocket'];else{if((_0x392eb8=this[_0x5b981c(0x206)][_0x5b981c(0x1e2)])!=null&&_0x392eb8[_0x5b981c(0x236)])_0x4f21b5=(_0x4f8860=this[_0x5b981c(0x206)][_0x5b981c(0x1e2)])==null?void 0x0:_0x4f8860[_0x5b981c(0x236)];else try{_0x4f21b5=(await new Function(_0x5b981c(0x1d0),_0x5b981c(0x2b1),_0x5b981c(0x2ae),'return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());')(await(0x0,eval)(_0x5b981c(0x1d7)),await(0x0,eval)(_0x5b981c(0x27a)),this[_0x5b981c(0x2ae)]))[_0x5b981c(0x26c)];}catch{try{_0x4f21b5=require(require(_0x5b981c(0x1d0))[_0x5b981c(0x1f4)](this[_0x5b981c(0x2ae)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x5b981c(0x2ac)]=_0x4f21b5,_0x4f21b5;},z[_0x1cc9bf(0x1fa)][_0x1cc9bf(0x1bf)]=function(){var _0x352d1c=_0x1cc9bf;this[_0x352d1c(0x217)]||this[_0x352d1c(0x1e1)]||this[_0x352d1c(0x1b5)]>=this[_0x352d1c(0x293)]||(this[_0x352d1c(0x288)]=!0x1,this[_0x352d1c(0x217)]=!0x0,this[_0x352d1c(0x1b5)]++,this[_0x352d1c(0x272)]=new Promise((_0x2c619c,_0x393e18)=>{var _0x321c4d=_0x352d1c;this['getWebSocketClass']()[_0x321c4d(0x1cf)](_0x314a8b=>{var _0x1dd7df=_0x321c4d;let _0x8bf952=new _0x314a8b(_0x1dd7df(0x1da)+(!this[_0x1dd7df(0x264)]&&this[_0x1dd7df(0x27b)]?_0x1dd7df(0x20e):this['host'])+':'+this[_0x1dd7df(0x283)]);_0x8bf952['onerror']=()=>{var _0x2f65e4=_0x1dd7df;this[_0x2f65e4(0x1eb)]=!0x1,this[_0x2f65e4(0x26b)](_0x8bf952),this['_attemptToReconnectShortly'](),_0x393e18(new Error('logger\\x20websocket\\x20error'));},_0x8bf952[_0x1dd7df(0x25f)]=()=>{var _0x4df140=_0x1dd7df;this[_0x4df140(0x264)]||_0x8bf952[_0x4df140(0x1d8)]&&_0x8bf952[_0x4df140(0x1d8)]['unref']&&_0x8bf952[_0x4df140(0x1d8)][_0x4df140(0x221)](),_0x2c619c(_0x8bf952);},_0x8bf952['onclose']=()=>{var _0x3437aa=_0x1dd7df;this['_allowedToConnectOnSend']=!0x0,this[_0x3437aa(0x26b)](_0x8bf952),this['_attemptToReconnectShortly']();},_0x8bf952[_0x1dd7df(0x266)]=_0x4cbd09=>{var _0x448802=_0x1dd7df;try{if(!(_0x4cbd09!=null&&_0x4cbd09[_0x448802(0x1be)])||!this[_0x448802(0x2a4)])return;let _0x54c7bc=JSON[_0x448802(0x1b4)](_0x4cbd09[_0x448802(0x1be)]);this[_0x448802(0x2a4)](_0x54c7bc[_0x448802(0x289)],_0x54c7bc[_0x448802(0x1f6)],this[_0x448802(0x206)],this[_0x448802(0x264)]);}catch{}};})[_0x321c4d(0x1cf)](_0x56ce89=>(this[_0x321c4d(0x1e1)]=!0x0,this[_0x321c4d(0x217)]=!0x1,this[_0x321c4d(0x288)]=!0x1,this[_0x321c4d(0x1eb)]=!0x0,this[_0x321c4d(0x1b5)]=0x0,_0x56ce89))[_0x321c4d(0x1fb)](_0x4d0508=>(this[_0x321c4d(0x1e1)]=!0x1,this['_connecting']=!0x1,console[_0x321c4d(0x26a)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x321c4d(0x203)]),_0x393e18(new Error(_0x321c4d(0x1d2)+(_0x4d0508&&_0x4d0508[_0x321c4d(0x201)])))));}));},z['prototype'][_0x1cc9bf(0x26b)]=function(_0x310a94){var _0x37cccf=_0x1cc9bf;this[_0x37cccf(0x1e1)]=!0x1,this[_0x37cccf(0x217)]=!0x1;try{_0x310a94[_0x37cccf(0x1bd)]=null,_0x310a94[_0x37cccf(0x245)]=null,_0x310a94[_0x37cccf(0x25f)]=null;}catch{}try{_0x310a94[_0x37cccf(0x205)]<0x2&&_0x310a94[_0x37cccf(0x227)]();}catch{}},z[_0x1cc9bf(0x1fa)]['_attemptToReconnectShortly']=function(){var _0x4918b2=_0x1cc9bf;clearTimeout(this[_0x4918b2(0x24f)]),!(this[_0x4918b2(0x1b5)]>=this['_maxConnectAttemptCount'])&&(this[_0x4918b2(0x24f)]=setTimeout(()=>{var _0x479cf8=_0x4918b2,_0x4563d7;this[_0x479cf8(0x1e1)]||this['_connecting']||(this['_connectToHostNow'](),(_0x4563d7=this[_0x479cf8(0x272)])==null||_0x4563d7[_0x479cf8(0x1fb)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x4918b2(0x24f)]['unref']&&this[_0x4918b2(0x24f)][_0x4918b2(0x221)]());},z['prototype'][_0x1cc9bf(0x1dc)]=async function(_0x1a542e){var _0x5a4b4b=_0x1cc9bf;try{if(!this[_0x5a4b4b(0x1eb)])return;this[_0x5a4b4b(0x288)]&&this[_0x5a4b4b(0x1bf)](),(await this[_0x5a4b4b(0x272)])[_0x5a4b4b(0x1dc)](JSON[_0x5a4b4b(0x24b)](_0x1a542e));}catch(_0x1bba3f){this[_0x5a4b4b(0x278)]?console[_0x5a4b4b(0x26a)](this[_0x5a4b4b(0x29c)]+':\\x20'+(_0x1bba3f&&_0x1bba3f[_0x5a4b4b(0x201)])):(this[_0x5a4b4b(0x278)]=!0x0,console['warn'](this[_0x5a4b4b(0x29c)]+':\\x20'+(_0x1bba3f&&_0x1bba3f['message']),_0x1a542e)),this['_allowedToSend']=!0x1,this[_0x5a4b4b(0x1f0)]();}};function H(_0x1b0a09,_0x314bb3,_0x5ebd0b,_0x438761,_0x1c81c5,_0x462e71,_0x27e8ff,_0x303f82=ne){var _0x1230b6=_0x1cc9bf;let _0x34b1eb=_0x5ebd0b[_0x1230b6(0x1af)](',')[_0x1230b6(0x1e4)](_0x23029c=>{var _0x17b57e=_0x1230b6,_0x2b1d41,_0x47cf93,_0x11d0ca,_0x1695f3,_0x131178,_0x3adedf,_0x55f082,_0xdd61e4;try{if(!_0x1b0a09[_0x17b57e(0x1d1)]){let _0x6c7366=((_0x47cf93=(_0x2b1d41=_0x1b0a09[_0x17b57e(0x1e2)])==null?void 0x0:_0x2b1d41['versions'])==null?void 0x0:_0x47cf93['node'])||((_0x1695f3=(_0x11d0ca=_0x1b0a09[_0x17b57e(0x1e2)])==null?void 0x0:_0x11d0ca[_0x17b57e(0x1f5)])==null?void 0x0:_0x1695f3[_0x17b57e(0x200)])==='edge';(_0x1c81c5==='next.js'||_0x1c81c5==='remix'||_0x1c81c5===_0x17b57e(0x215)||_0x1c81c5===_0x17b57e(0x274))&&(_0x1c81c5+=_0x6c7366?'\\x20server':'\\x20browser');let _0x547070='';_0x1c81c5==='react-native'&&(_0x547070=(((_0x55f082=(_0x3adedf=(_0x131178=_0x1b0a09[_0x17b57e(0x1c0)])==null?void 0x0:_0x131178[_0x17b57e(0x1c5)])==null?void 0x0:_0x3adedf[_0x17b57e(0x210)])==null?void 0x0:_0x55f082[_0x17b57e(0x1cd)])||_0x17b57e(0x1ac))['toLowerCase'](),_0x547070&&(_0x1c81c5+='\\x20'+_0x547070,(_0x547070===_0x17b57e(0x284)||_0x547070===_0x17b57e(0x1ac)&&((_0xdd61e4=_0x1b0a09[_0x17b57e(0x232)])==null?void 0x0:_0xdd61e4[_0x17b57e(0x230)])==='10.0.2.2')&&(_0x314bb3='10.0.2.2'))),_0x1b0a09['_console_ninja_session']={'id':+new Date(),'tool':_0x1c81c5},_0x27e8ff&&_0x1c81c5&&!_0x6c7366&&(_0x547070?console[_0x17b57e(0x23c)]('Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+_0x547070+_0x17b57e(0x1cb)):console['log'](_0x17b57e(0x258)+(_0x1c81c5[_0x17b57e(0x23d)](0x0)[_0x17b57e(0x263)]()+_0x1c81c5[_0x17b57e(0x1c2)](0x1))+',',_0x17b57e(0x239),_0x17b57e(0x254)));}let _0x2934bd=new z(_0x1b0a09,_0x314bb3,_0x23029c,_0x438761,_0x462e71,_0x303f82);return _0x2934bd['send']['bind'](_0x2934bd);}catch(_0x161903){return console['warn'](_0x17b57e(0x2a2),_0x161903&&_0x161903[_0x17b57e(0x201)]),()=>{};}});return _0x1c14eb=>_0x34b1eb['forEach'](_0x287945=>_0x287945(_0x1c14eb));}function ne(_0x4032f4,_0x332ef1,_0x667427,_0x4197b0){var _0x599762=_0x1cc9bf;_0x4197b0&&_0x4032f4===_0x599762(0x240)&&_0x667427['location'][_0x599762(0x240)]();}function b(_0x554a57){var _0x3352bd=_0x1cc9bf,_0x4671a9,_0x54c0b2;let _0x20846c=function(_0x512f52,_0x18c985){return _0x18c985-_0x512f52;},_0x1d37bd;if(_0x554a57[_0x3352bd(0x202)])_0x1d37bd=function(){var _0x47e319=_0x3352bd;return _0x554a57[_0x47e319(0x202)]['now']();};else{if(_0x554a57['process']&&_0x554a57['process']['hrtime']&&((_0x54c0b2=(_0x4671a9=_0x554a57[_0x3352bd(0x1e2)])==null?void 0x0:_0x4671a9[_0x3352bd(0x1f5)])==null?void 0x0:_0x54c0b2['NEXT_RUNTIME'])!=='edge')_0x1d37bd=function(){var _0x64184f=_0x3352bd;return _0x554a57['process'][_0x64184f(0x2a0)]();},_0x20846c=function(_0x10d5f4,_0x2be210){return 0x3e8*(_0x2be210[0x0]-_0x10d5f4[0x0])+(_0x2be210[0x1]-_0x10d5f4[0x1])/0xf4240;};else try{let {performance:_0x1d1d12}=require('perf_hooks');_0x1d37bd=function(){return _0x1d1d12['now']();};}catch{_0x1d37bd=function(){return+new Date();};}}return{'elapsed':_0x20846c,'timeStamp':_0x1d37bd,'now':()=>Date[_0x3352bd(0x244)]()};}function _0x36d2(_0x45364,_0x526de7){var _0x4abdec=_0x4abd();return _0x36d2=function(_0x36d215,_0x265de1){_0x36d215=_0x36d215-0x1ac;var _0x1b6b7c=_0x4abdec[_0x36d215];return _0x1b6b7c;},_0x36d2(_0x45364,_0x526de7);}function _0x4abd(){var _0x2edd5c=['toUpperCase','_inBrowser','some','onmessage','number','[object\\x20Date]','string','warn','_disposeWebsocket','default','reduceOnCount','time','autoExpandPreviousObjects','toString','_isPrimitiveType','_ws','endsWith','angular','_cleanNode','console','','_extendedWarning','unknown','import(\\x27url\\x27)','dockerizedApp','iterator','_inNextEdge','replace','push','_quotedRegExp','autoExpandLimit','[object\\x20Array]','port','android','4653gpnXWv','value','object','_allowedToConnectOnSend','method','219195IeQxdG','strLength','_processTreeNodeResult','127.0.0.1','690168gXosUu','_addLoadNode','','slice','function','_maxConnectAttemptCount','reducePolicy','reduceLimits','current','host','_setNodePermissions','_getOwnPropertyDescriptor','39399','[object\\x20Map]','_sendErrorMessage','timeStamp','sortProps','depth','hrtime','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','noFunctions','eventReceivedCallback','reducedLimits','negativeZero','_hasSymbolPropertyOnItsPath','_sortProps','_p_','resolveGetters','_HTMLAllCollection','_WebSocketClass','call','nodeModules','_addProperty','totalStrLength','url','_dateToString','origin','date','positiveInfinity','next.js','_setNodeQueryPath','Set','concat','react-native','emulator','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','248755AYwszL','split','hits','getter','elapsed','edge','parse','_connectAttemptCount','28RulXnQ','30JSZfMl','_consoleNinjaAllowedToStart','_objectToString','match','sort','indexOf','onclose','data','_connectToHostNow','expo','Error','substr','serialize','props','modules','stack','rootExpression','includes','178LksGJe','defaultLimits',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceOnAccumulatedProcessingTimeMs','osName','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','then','path','_console_ninja_session','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','5310qruWei','_setNodeExpandableState','_Symbol','length','import(\\x27path\\x27)','_socket','autoExpand','ws://','String','send','getOwnPropertySymbols','index','768872lRFuEd','HTMLAllCollection','_connected','process','_blacklistedProperty','map','_isMap','_console_ninja','_regExpToString','cappedProps','_type','_getOwnPropertyNames','_allowedToSend','_treeNodePropertiesBeforeFullValue','...','_addFunctionsNode','boolean','_attemptToReconnectShortly','level','_hasMapOnItsPath','setter','join','env','args','POSITIVE_INFINITY','bind','error','prototype','catch','expressionsToEvaluate','symbol','negativeInfinity','type','NEXT_RUNTIME','message','performance','_webSocketErrorDocsLink','unshift','readyState','global','1.0.0','get','isExpressionToEvaluate','capped','valueOf','ninjaSuppressConsole','nan','gateway.docker.internal','https://tinyurl.com/37x8b79t','ExpoDevice','_ninjaIgnoreNextError','node','elements','parent','astro','allStrLength','_connecting','10401Zenqaz','Number','_getOwnPropertySymbols','next.js','undefined','root_exp_id','_p_name','name','toLowerCase','unref','Buffer','[object\\x20BigInt]','_propertyName','_setNodeExpressionPath','resolve','close','_isPrimitiveWrapperType','NEGATIVE_INFINITY','getOwnPropertyDescriptor',\"/home/fils/.vscode/extensions/wallabyjs.console-ninja-1.0.504/node_modules\",'bound\\x20Promise','root_exp','_treeNodePropertiesAfterFullValue','perLogpoint','hostname','_property','location','22752dilhOK','Map','Symbol','_WebSocket','array','startsWith','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_capIfString','_additionalMetadata','log','charAt','coverage','test','reload','constructor','bigint','count','now','onerror','1','stackTraceLimit','[object\\x20Set]','_isUndefined','1767691819841','stringify','forEach','22szEAAH','autoExpandMaxDepth','_reconnectTimeout','_setNodeLabel','_isNegativeZero','autoExpandPropertyCount','null','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','_hasSetOnItsPath','resetOnProcessingTimeAverageMs','funcName','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','disabledTrace',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"ghost\",\"192.168.100.7\",\"172.21.0.1\",\"10.2.0.2\"],'fromCharCode','versions','_isSet','resetWhenQuietMs','onopen','_undefined','_isArray','trace'];_0x4abd=function(){return _0x2edd5c;};return _0x4abd();}function X(_0x3f2cc3,_0x444a65,_0x948c19){var _0x47f6de=_0x1cc9bf,_0x58fcb7,_0x714d9c,_0x3e7d2,_0x3e66ef,_0x358522,_0x530474,_0x126449;if(_0x3f2cc3[_0x47f6de(0x1b8)]!==void 0x0)return _0x3f2cc3[_0x47f6de(0x1b8)];let _0x1c4f65=((_0x714d9c=(_0x58fcb7=_0x3f2cc3['process'])==null?void 0x0:_0x58fcb7[_0x47f6de(0x25c)])==null?void 0x0:_0x714d9c[_0x47f6de(0x212)])||((_0x3e66ef=(_0x3e7d2=_0x3f2cc3[_0x47f6de(0x1e2)])==null?void 0x0:_0x3e7d2[_0x47f6de(0x1f5)])==null?void 0x0:_0x3e66ef[_0x47f6de(0x200)])==='edge',_0x332f6b=!!(_0x948c19===_0x47f6de(0x2ba)&&((_0x358522=_0x3f2cc3[_0x47f6de(0x1c0)])==null?void 0x0:_0x358522[_0x47f6de(0x1c5)]));function _0x2e0548(_0x117428){var _0x3fecad=_0x47f6de;if(_0x117428[_0x3fecad(0x238)]('/')&&_0x117428[_0x3fecad(0x273)]('/')){let _0x2eb059=new RegExp(_0x117428[_0x3fecad(0x291)](0x1,-0x1));return _0x40eb98=>_0x2eb059[_0x3fecad(0x23f)](_0x40eb98);}else{if(_0x117428['includes']('*')||_0x117428[_0x3fecad(0x1c8)]('?')){let _0x170bc4=new RegExp('^'+_0x117428[_0x3fecad(0x27e)](/\\./g,String[_0x3fecad(0x25b)](0x5c)+'.')[_0x3fecad(0x27e)](/\\*/g,'.*')[_0x3fecad(0x27e)](/\\?/g,'.')+String[_0x3fecad(0x25b)](0x24));return _0x11bd1b=>_0x170bc4[_0x3fecad(0x23f)](_0x11bd1b);}else return _0x331aa3=>_0x331aa3===_0x117428;}}let _0x10619f=_0x444a65[_0x47f6de(0x1e4)](_0x2e0548);return _0x3f2cc3['_consoleNinjaAllowedToStart']=_0x1c4f65||!_0x444a65,!_0x3f2cc3[_0x47f6de(0x1b8)]&&((_0x530474=_0x3f2cc3[_0x47f6de(0x232)])==null?void 0x0:_0x530474[_0x47f6de(0x230)])&&(_0x3f2cc3[_0x47f6de(0x1b8)]=_0x10619f[_0x47f6de(0x265)](_0x798b03=>_0x798b03(_0x3f2cc3['location'][_0x47f6de(0x230)]))),_0x332f6b&&!_0x3f2cc3[_0x47f6de(0x1b8)]&&!((_0x126449=_0x3f2cc3['location'])!=null&&_0x126449[_0x47f6de(0x230)])&&(_0x3f2cc3[_0x47f6de(0x1b8)]=!0x0),_0x3f2cc3[_0x47f6de(0x1b8)];}function J(_0x4fb91b,_0x3c6597,_0x56215a,_0x1ac10d,_0x167e22,_0x58debe){var _0xb96e9f=_0x1cc9bf;_0x4fb91b=_0x4fb91b,_0x3c6597=_0x3c6597,_0x56215a=_0x56215a,_0x1ac10d=_0x1ac10d,_0x167e22=_0x167e22,_0x167e22=_0x167e22||{},_0x167e22['defaultLimits']=_0x167e22[_0xb96e9f(0x1ca)]||{},_0x167e22[_0xb96e9f(0x2a5)]=_0x167e22['reducedLimits']||{},_0x167e22[_0xb96e9f(0x294)]=_0x167e22[_0xb96e9f(0x294)]||{},_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x22f)]=_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x22f)]||{},_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)]=_0x167e22[_0xb96e9f(0x294)]['global']||{};let _0x6f4d67={'perLogpoint':{'reduceOnCount':_0x167e22[_0xb96e9f(0x294)]['perLogpoint']['reduceOnCount']||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x22f)]['reduceOnAccumulatedProcessingTimeMs']||0x64,'resetWhenQuietMs':_0x167e22[_0xb96e9f(0x294)]['perLogpoint'][_0xb96e9f(0x25e)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x167e22['reducePolicy'][_0xb96e9f(0x22f)][_0xb96e9f(0x256)]||0x64},'global':{'reduceOnCount':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)]['reduceOnCount']||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)][_0xb96e9f(0x1cc)]||0x12c,'resetWhenQuietMs':_0x167e22['reducePolicy'][_0xb96e9f(0x206)][_0xb96e9f(0x25e)]||0x32,'resetOnProcessingTimeAverageMs':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)][_0xb96e9f(0x256)]||0x64}},_0x5adaf7=b(_0x4fb91b),_0x394800=_0x5adaf7[_0xb96e9f(0x1b2)],_0x21489e=_0x5adaf7['timeStamp'];function _0x435715(){var _0x30387a=_0xb96e9f;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x30387a(0x280)]=/'([^\\\\']|\\\\')*'/,this[_0x30387a(0x260)]=_0x4fb91b[_0x30387a(0x21c)],this['_HTMLAllCollection']=_0x4fb91b[_0x30387a(0x1e0)],this[_0x30387a(0x299)]=Object[_0x30387a(0x22a)],this['_getOwnPropertyNames']=Object['getOwnPropertyNames'],this['_Symbol']=_0x4fb91b[_0x30387a(0x235)],this[_0x30387a(0x1e7)]=RegExp[_0x30387a(0x1fa)][_0x30387a(0x270)],this['_dateToString']=Date[_0x30387a(0x1fa)][_0x30387a(0x270)];}_0x435715['prototype'][_0xb96e9f(0x1c3)]=function(_0x76cd6b,_0x39c45b,_0x4d4b0f,_0x4fb231){var _0x313e5d=_0xb96e9f,_0x258d79=this,_0x5649bc=_0x4d4b0f[_0x313e5d(0x1d9)];function _0x7e4bff(_0x57d702,_0x2575bb,_0xb55e81){var _0x2281e2=_0x313e5d;_0x2575bb[_0x2281e2(0x1ff)]=_0x2281e2(0x279),_0x2575bb['error']=_0x57d702[_0x2281e2(0x201)],_0x3796b2=_0xb55e81['node'][_0x2281e2(0x296)],_0xb55e81['node'][_0x2281e2(0x296)]=_0x2575bb,_0x258d79['_treeNodePropertiesBeforeFullValue'](_0x2575bb,_0xb55e81);}let _0x5ae676,_0x8c6e47,_0x3cb06c=_0x4fb91b[_0x313e5d(0x20c)];_0x4fb91b[_0x313e5d(0x20c)]=!0x0,_0x4fb91b['console']&&(_0x5ae676=_0x4fb91b['console'][_0x313e5d(0x1f9)],_0x8c6e47=_0x4fb91b['console'][_0x313e5d(0x26a)],_0x5ae676&&(_0x4fb91b[_0x313e5d(0x276)][_0x313e5d(0x1f9)]=function(){}),_0x8c6e47&&(_0x4fb91b['console']['warn']=function(){}));try{try{_0x4d4b0f[_0x313e5d(0x1f1)]++,_0x4d4b0f[_0x313e5d(0x1d9)]&&_0x4d4b0f['autoExpandPreviousObjects'][_0x313e5d(0x27f)](_0x39c45b);var _0x47ccf2,_0x5cfc81,_0x24d24a,_0x20acb4,_0x3c99fb=[],_0x42e7e3=[],_0x2c2168,_0x55fbfd=this[_0x313e5d(0x1e9)](_0x39c45b),_0x1c6758=_0x55fbfd===_0x313e5d(0x237),_0x4f3c4f=!0x1,_0x26190b=_0x55fbfd===_0x313e5d(0x292),_0x3b9bfe=this['_isPrimitiveType'](_0x55fbfd),_0x1ed288=this[_0x313e5d(0x228)](_0x55fbfd),_0x396744=_0x3b9bfe||_0x1ed288,_0x29e1ab={},_0x59fa4d=0x0,_0x71607d=!0x1,_0x3796b2,_0x5df68c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4d4b0f[_0x313e5d(0x29f)]){if(_0x1c6758){if(_0x5cfc81=_0x39c45b[_0x313e5d(0x1d6)],_0x5cfc81>_0x4d4b0f[_0x313e5d(0x213)]){for(_0x24d24a=0x0,_0x20acb4=_0x4d4b0f[_0x313e5d(0x213)],_0x47ccf2=_0x24d24a;_0x47ccf2<_0x20acb4;_0x47ccf2++)_0x42e7e3['push'](_0x258d79[_0x313e5d(0x2af)](_0x3c99fb,_0x39c45b,_0x55fbfd,_0x47ccf2,_0x4d4b0f));_0x76cd6b['cappedElements']=!0x0;}else{for(_0x24d24a=0x0,_0x20acb4=_0x5cfc81,_0x47ccf2=_0x24d24a;_0x47ccf2<_0x20acb4;_0x47ccf2++)_0x42e7e3[_0x313e5d(0x27f)](_0x258d79[_0x313e5d(0x2af)](_0x3c99fb,_0x39c45b,_0x55fbfd,_0x47ccf2,_0x4d4b0f));}_0x4d4b0f[_0x313e5d(0x252)]+=_0x42e7e3[_0x313e5d(0x1d6)];}if(!(_0x55fbfd===_0x313e5d(0x253)||_0x55fbfd===_0x313e5d(0x21c))&&!_0x3b9bfe&&_0x55fbfd!=='String'&&_0x55fbfd!==_0x313e5d(0x222)&&_0x55fbfd!==_0x313e5d(0x242)){var _0x14efcf=_0x4fb231[_0x313e5d(0x1c4)]||_0x4d4b0f[_0x313e5d(0x1c4)];if(this[_0x313e5d(0x25d)](_0x39c45b)?(_0x47ccf2=0x0,_0x39c45b[_0x313e5d(0x24c)](function(_0x4e2e7f){var _0x29982e=_0x313e5d;if(_0x59fa4d++,_0x4d4b0f[_0x29982e(0x252)]++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;return;}if(!_0x4d4b0f[_0x29982e(0x209)]&&_0x4d4b0f[_0x29982e(0x1d9)]&&_0x4d4b0f['autoExpandPropertyCount']>_0x4d4b0f[_0x29982e(0x281)]){_0x71607d=!0x0;return;}_0x42e7e3[_0x29982e(0x27f)](_0x258d79[_0x29982e(0x2af)](_0x3c99fb,_0x39c45b,'Set',_0x47ccf2++,_0x4d4b0f,function(_0x1d24ad){return function(){return _0x1d24ad;};}(_0x4e2e7f)));})):this[_0x313e5d(0x1e5)](_0x39c45b)&&_0x39c45b['forEach'](function(_0x258aec,_0x325faf){var _0x23cca3=_0x313e5d;if(_0x59fa4d++,_0x4d4b0f['autoExpandPropertyCount']++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;return;}if(!_0x4d4b0f['isExpressionToEvaluate']&&_0x4d4b0f[_0x23cca3(0x1d9)]&&_0x4d4b0f[_0x23cca3(0x252)]>_0x4d4b0f[_0x23cca3(0x281)]){_0x71607d=!0x0;return;}var _0x89a54=_0x325faf['toString']();_0x89a54['length']>0x64&&(_0x89a54=_0x89a54[_0x23cca3(0x291)](0x0,0x64)+_0x23cca3(0x1ed)),_0x42e7e3[_0x23cca3(0x27f)](_0x258d79[_0x23cca3(0x2af)](_0x3c99fb,_0x39c45b,_0x23cca3(0x234),_0x89a54,_0x4d4b0f,function(_0x278033){return function(){return _0x278033;};}(_0x258aec)));}),!_0x4f3c4f){try{for(_0x2c2168 in _0x39c45b)if(!(_0x1c6758&&_0x5df68c['test'](_0x2c2168))&&!this[_0x313e5d(0x1e3)](_0x39c45b,_0x2c2168,_0x4d4b0f)){if(_0x59fa4d++,_0x4d4b0f[_0x313e5d(0x252)]++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;break;}if(!_0x4d4b0f[_0x313e5d(0x209)]&&_0x4d4b0f['autoExpand']&&_0x4d4b0f[_0x313e5d(0x252)]>_0x4d4b0f[_0x313e5d(0x281)]){_0x71607d=!0x0;break;}_0x42e7e3[_0x313e5d(0x27f)](_0x258d79['_addObjectProperty'](_0x3c99fb,_0x29e1ab,_0x39c45b,_0x55fbfd,_0x2c2168,_0x4d4b0f));}}catch{}if(_0x29e1ab['_p_length']=!0x0,_0x26190b&&(_0x29e1ab[_0x313e5d(0x21e)]=!0x0),!_0x71607d){var _0x3fdaac=[][_0x313e5d(0x2b9)](this[_0x313e5d(0x1ea)](_0x39c45b))['concat'](this['_getOwnPropertySymbols'](_0x39c45b));for(_0x47ccf2=0x0,_0x5cfc81=_0x3fdaac[_0x313e5d(0x1d6)];_0x47ccf2<_0x5cfc81;_0x47ccf2++)if(_0x2c2168=_0x3fdaac[_0x47ccf2],!(_0x1c6758&&_0x5df68c[_0x313e5d(0x23f)](_0x2c2168['toString']()))&&!this[_0x313e5d(0x1e3)](_0x39c45b,_0x2c2168,_0x4d4b0f)&&!_0x29e1ab[typeof _0x2c2168!=_0x313e5d(0x1fd)?'_p_'+_0x2c2168[_0x313e5d(0x270)]():_0x2c2168]){if(_0x59fa4d++,_0x4d4b0f[_0x313e5d(0x252)]++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;break;}if(!_0x4d4b0f[_0x313e5d(0x209)]&&_0x4d4b0f[_0x313e5d(0x1d9)]&&_0x4d4b0f[_0x313e5d(0x252)]>_0x4d4b0f['autoExpandLimit']){_0x71607d=!0x0;break;}_0x42e7e3[_0x313e5d(0x27f)](_0x258d79['_addObjectProperty'](_0x3c99fb,_0x29e1ab,_0x39c45b,_0x55fbfd,_0x2c2168,_0x4d4b0f));}}}}}if(_0x76cd6b['type']=_0x55fbfd,_0x396744?(_0x76cd6b[_0x313e5d(0x286)]=_0x39c45b['valueOf'](),this[_0x313e5d(0x23a)](_0x55fbfd,_0x76cd6b,_0x4d4b0f,_0x4fb231)):_0x55fbfd===_0x313e5d(0x2b4)?_0x76cd6b[_0x313e5d(0x286)]=this[_0x313e5d(0x2b2)]['call'](_0x39c45b):_0x55fbfd==='bigint'?_0x76cd6b[_0x313e5d(0x286)]=_0x39c45b['toString']():_0x55fbfd==='RegExp'?_0x76cd6b[_0x313e5d(0x286)]=this[_0x313e5d(0x1e7)][_0x313e5d(0x2ad)](_0x39c45b):_0x55fbfd===_0x313e5d(0x1fd)&&this[_0x313e5d(0x1d5)]?_0x76cd6b[_0x313e5d(0x286)]=this[_0x313e5d(0x1d5)][_0x313e5d(0x1fa)][_0x313e5d(0x270)][_0x313e5d(0x2ad)](_0x39c45b):!_0x4d4b0f[_0x313e5d(0x29f)]&&!(_0x55fbfd==='null'||_0x55fbfd==='undefined')&&(delete _0x76cd6b[_0x313e5d(0x286)],_0x76cd6b[_0x313e5d(0x20a)]=!0x0),_0x71607d&&(_0x76cd6b[_0x313e5d(0x1e8)]=!0x0),_0x3796b2=_0x4d4b0f[_0x313e5d(0x212)][_0x313e5d(0x296)],_0x4d4b0f[_0x313e5d(0x212)][_0x313e5d(0x296)]=_0x76cd6b,this[_0x313e5d(0x1ec)](_0x76cd6b,_0x4d4b0f),_0x42e7e3['length']){for(_0x47ccf2=0x0,_0x5cfc81=_0x42e7e3[_0x313e5d(0x1d6)];_0x47ccf2<_0x5cfc81;_0x47ccf2++)_0x42e7e3[_0x47ccf2](_0x47ccf2);}_0x3c99fb[_0x313e5d(0x1d6)]&&(_0x76cd6b['props']=_0x3c99fb);}catch(_0x4300e9){_0x7e4bff(_0x4300e9,_0x76cd6b,_0x4d4b0f);}this[_0x313e5d(0x23b)](_0x39c45b,_0x76cd6b),this[_0x313e5d(0x22e)](_0x76cd6b,_0x4d4b0f),_0x4d4b0f[_0x313e5d(0x212)][_0x313e5d(0x296)]=_0x3796b2,_0x4d4b0f[_0x313e5d(0x1f1)]--,_0x4d4b0f[_0x313e5d(0x1d9)]=_0x5649bc,_0x4d4b0f[_0x313e5d(0x1d9)]&&_0x4d4b0f[_0x313e5d(0x26f)]['pop']();}finally{_0x5ae676&&(_0x4fb91b['console'][_0x313e5d(0x1f9)]=_0x5ae676),_0x8c6e47&&(_0x4fb91b[_0x313e5d(0x276)]['warn']=_0x8c6e47),_0x4fb91b['ninjaSuppressConsole']=_0x3cb06c;}return _0x76cd6b;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x21a)]=function(_0xe5f71a){var _0x47860d=_0xb96e9f;return Object[_0x47860d(0x1dd)]?Object[_0x47860d(0x1dd)](_0xe5f71a):[];},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x25d)]=function(_0x5e19a4){var _0x3e9ebe=_0xb96e9f;return!!(_0x5e19a4&&_0x4fb91b[_0x3e9ebe(0x2b8)]&&this[_0x3e9ebe(0x1b9)](_0x5e19a4)===_0x3e9ebe(0x248)&&_0x5e19a4[_0x3e9ebe(0x24c)]);},_0x435715[_0xb96e9f(0x1fa)]['_blacklistedProperty']=function(_0x400088,_0x487546,_0x25c83d){var _0x5b6258=_0xb96e9f;if(!_0x25c83d[_0x5b6258(0x2aa)]){let _0x1d3a41=this['_getOwnPropertyDescriptor'](_0x400088,_0x487546);if(_0x1d3a41&&_0x1d3a41[_0x5b6258(0x208)])return!0x0;}return _0x25c83d[_0x5b6258(0x2a3)]?typeof _0x400088[_0x487546]==_0x5b6258(0x292):!0x1;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1e9)]=function(_0x3e2827){var _0x3c9595=_0xb96e9f,_0x2d9c62='';return _0x2d9c62=typeof _0x3e2827,_0x2d9c62===_0x3c9595(0x287)?this[_0x3c9595(0x1b9)](_0x3e2827)==='[object\\x20Array]'?_0x2d9c62=_0x3c9595(0x237):this[_0x3c9595(0x1b9)](_0x3e2827)===_0x3c9595(0x268)?_0x2d9c62=_0x3c9595(0x2b4):this[_0x3c9595(0x1b9)](_0x3e2827)===_0x3c9595(0x223)?_0x2d9c62=_0x3c9595(0x242):_0x3e2827===null?_0x2d9c62=_0x3c9595(0x253):_0x3e2827[_0x3c9595(0x241)]&&(_0x2d9c62=_0x3e2827[_0x3c9595(0x241)][_0x3c9595(0x21f)]||_0x2d9c62):_0x2d9c62==='undefined'&&this[_0x3c9595(0x2ab)]&&_0x3e2827 instanceof this['_HTMLAllCollection']&&(_0x2d9c62=_0x3c9595(0x1e0)),_0x2d9c62;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1b9)]=function(_0x4ba920){var _0x2a5a5d=_0xb96e9f;return Object[_0x2a5a5d(0x1fa)][_0x2a5a5d(0x270)][_0x2a5a5d(0x2ad)](_0x4ba920);},_0x435715['prototype'][_0xb96e9f(0x271)]=function(_0x7035e1){var _0x5a3341=_0xb96e9f;return _0x7035e1===_0x5a3341(0x1ef)||_0x7035e1===_0x5a3341(0x269)||_0x7035e1===_0x5a3341(0x267);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x228)]=function(_0x446bde){var _0x5d4a51=_0xb96e9f;return _0x446bde==='Boolean'||_0x446bde===_0x5d4a51(0x1db)||_0x446bde===_0x5d4a51(0x219);},_0x435715['prototype']['_addProperty']=function(_0x434599,_0x588a33,_0xb10858,_0x260c09,_0x294d32,_0x2f9aaf){var _0x465131=this;return function(_0x22dfa0){var _0x3ee84a=_0x36d2,_0x5c9d65=_0x294d32[_0x3ee84a(0x212)]['current'],_0xa12a2e=_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x1de)],_0x2fc0f1=_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x214)];_0x294d32[_0x3ee84a(0x212)]['parent']=_0x5c9d65,_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x1de)]=typeof _0x260c09==_0x3ee84a(0x267)?_0x260c09:_0x22dfa0,_0x434599[_0x3ee84a(0x27f)](_0x465131[_0x3ee84a(0x231)](_0x588a33,_0xb10858,_0x260c09,_0x294d32,_0x2f9aaf)),_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x214)]=_0x2fc0f1,_0x294d32['node'][_0x3ee84a(0x1de)]=_0xa12a2e;};},_0x435715[_0xb96e9f(0x1fa)]['_addObjectProperty']=function(_0x5b6973,_0x70f90e,_0x52a9cf,_0xe07745,_0x4fb91d,_0x336b03,_0x11e3ac){var _0x1121e2=_0xb96e9f,_0x8aec5d=this;return _0x70f90e[typeof _0x4fb91d!=_0x1121e2(0x1fd)?_0x1121e2(0x2a9)+_0x4fb91d['toString']():_0x4fb91d]=!0x0,function(_0x4479f6){var _0x4e8fc5=_0x1121e2,_0x2cbe0d=_0x336b03[_0x4e8fc5(0x212)]['current'],_0x56a74e=_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x1de)],_0x54d803=_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x214)];_0x336b03['node'][_0x4e8fc5(0x214)]=_0x2cbe0d,_0x336b03['node'][_0x4e8fc5(0x1de)]=_0x4479f6,_0x5b6973['push'](_0x8aec5d[_0x4e8fc5(0x231)](_0x52a9cf,_0xe07745,_0x4fb91d,_0x336b03,_0x11e3ac)),_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x214)]=_0x54d803,_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x1de)]=_0x56a74e;};},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x231)]=function(_0x593ebb,_0x5b5f6f,_0x23f42d,_0x37a504,_0x3f7612){var _0x452555=_0xb96e9f,_0x5b1e66=this;_0x3f7612||(_0x3f7612=function(_0x51cec9,_0x131308){return _0x51cec9[_0x131308];});var _0xac5253=_0x23f42d[_0x452555(0x270)](),_0x341e68=_0x37a504[_0x452555(0x1fc)]||{},_0x4b6726=_0x37a504[_0x452555(0x29f)],_0x4d9324=_0x37a504[_0x452555(0x209)];try{var _0x15e737=this[_0x452555(0x1e5)](_0x593ebb),_0x11fa3e=_0xac5253;_0x15e737&&_0x11fa3e[0x0]==='\\x27'&&(_0x11fa3e=_0x11fa3e[_0x452555(0x1c2)](0x1,_0x11fa3e['length']-0x2));var _0x376da5=_0x37a504[_0x452555(0x1fc)]=_0x341e68['_p_'+_0x11fa3e];_0x376da5&&(_0x37a504[_0x452555(0x29f)]=_0x37a504[_0x452555(0x29f)]+0x1),_0x37a504[_0x452555(0x209)]=!!_0x376da5;var _0x465224=typeof _0x23f42d==_0x452555(0x1fd),_0x5d1555={'name':_0x465224||_0x15e737?_0xac5253:this[_0x452555(0x224)](_0xac5253)};if(_0x465224&&(_0x5d1555['symbol']=!0x0),!(_0x5b5f6f===_0x452555(0x237)||_0x5b5f6f===_0x452555(0x1c1))){var _0x96734a=this[_0x452555(0x299)](_0x593ebb,_0x23f42d);if(_0x96734a&&(_0x96734a['set']&&(_0x5d1555[_0x452555(0x1f3)]=!0x0),_0x96734a[_0x452555(0x208)]&&!_0x376da5&&!_0x37a504[_0x452555(0x2aa)]))return _0x5d1555[_0x452555(0x1b1)]=!0x0,this[_0x452555(0x28c)](_0x5d1555,_0x37a504),_0x5d1555;}var _0x3dec1;try{_0x3dec1=_0x3f7612(_0x593ebb,_0x23f42d);}catch(_0x5a1879){return _0x5d1555={'name':_0xac5253,'type':_0x452555(0x279),'error':_0x5a1879[_0x452555(0x201)]},this[_0x452555(0x28c)](_0x5d1555,_0x37a504),_0x5d1555;}var _0x1b695f=this['_type'](_0x3dec1),_0x500382=this[_0x452555(0x271)](_0x1b695f);if(_0x5d1555['type']=_0x1b695f,_0x500382)this['_processTreeNodeResult'](_0x5d1555,_0x37a504,_0x3dec1,function(){var _0x4a9c1b=_0x452555;_0x5d1555[_0x4a9c1b(0x286)]=_0x3dec1[_0x4a9c1b(0x20b)](),!_0x376da5&&_0x5b1e66[_0x4a9c1b(0x23a)](_0x1b695f,_0x5d1555,_0x37a504,{});});else{var _0x35761a=_0x37a504[_0x452555(0x1d9)]&&_0x37a504[_0x452555(0x1f1)]<_0x37a504[_0x452555(0x24e)]&&_0x37a504[_0x452555(0x26f)][_0x452555(0x1bc)](_0x3dec1)<0x0&&_0x1b695f!==_0x452555(0x292)&&_0x37a504['autoExpandPropertyCount']<_0x37a504['autoExpandLimit'];_0x35761a||_0x37a504[_0x452555(0x1f1)]<_0x4b6726||_0x376da5?this[_0x452555(0x1c3)](_0x5d1555,_0x3dec1,_0x37a504,_0x376da5||{}):this[_0x452555(0x28c)](_0x5d1555,_0x37a504,_0x3dec1,function(){var _0x1ba74f=_0x452555;_0x1b695f===_0x1ba74f(0x253)||_0x1b695f===_0x1ba74f(0x21c)||(delete _0x5d1555[_0x1ba74f(0x286)],_0x5d1555[_0x1ba74f(0x20a)]=!0x0);});}return _0x5d1555;}finally{_0x37a504[_0x452555(0x1fc)]=_0x341e68,_0x37a504['depth']=_0x4b6726,_0x37a504[_0x452555(0x209)]=_0x4d9324;}},_0x435715['prototype']['_capIfString']=function(_0x1919f7,_0x59fe25,_0x1e23f2,_0x253da6){var _0x224f8d=_0xb96e9f,_0x2d0f75=_0x253da6['strLength']||_0x1e23f2['strLength'];if((_0x1919f7===_0x224f8d(0x269)||_0x1919f7==='String')&&_0x59fe25[_0x224f8d(0x286)]){let _0x13c391=_0x59fe25['value'][_0x224f8d(0x1d6)];_0x1e23f2[_0x224f8d(0x216)]+=_0x13c391,_0x1e23f2[_0x224f8d(0x216)]>_0x1e23f2[_0x224f8d(0x2b0)]?(_0x59fe25[_0x224f8d(0x20a)]='',delete _0x59fe25[_0x224f8d(0x286)]):_0x13c391>_0x2d0f75&&(_0x59fe25[_0x224f8d(0x20a)]=_0x59fe25['value'][_0x224f8d(0x1c2)](0x0,_0x2d0f75),delete _0x59fe25[_0x224f8d(0x286)]);}},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1e5)]=function(_0x409223){var _0x56da57=_0xb96e9f;return!!(_0x409223&&_0x4fb91b[_0x56da57(0x234)]&&this[_0x56da57(0x1b9)](_0x409223)===_0x56da57(0x29b)&&_0x409223[_0x56da57(0x24c)]);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x224)]=function(_0x3d64c5){var _0x5281f7=_0xb96e9f;if(_0x3d64c5[_0x5281f7(0x1ba)](/^\\d+$/))return _0x3d64c5;var _0xc81808;try{_0xc81808=JSON[_0x5281f7(0x24b)](''+_0x3d64c5);}catch{_0xc81808='\\x22'+this['_objectToString'](_0x3d64c5)+'\\x22';}return _0xc81808[_0x5281f7(0x1ba)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0xc81808=_0xc81808['substr'](0x1,_0xc81808[_0x5281f7(0x1d6)]-0x2):_0xc81808=_0xc81808['replace'](/'/g,'\\x5c\\x27')[_0x5281f7(0x27e)](/\\\\\"/g,'\\x22')[_0x5281f7(0x27e)](/(^\"|\"$)/g,'\\x27'),_0xc81808;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x28c)]=function(_0x3d398e,_0x2564ed,_0x2a614d,_0x2e0c51){var _0x1ad859=_0xb96e9f;this[_0x1ad859(0x1ec)](_0x3d398e,_0x2564ed),_0x2e0c51&&_0x2e0c51(),this[_0x1ad859(0x23b)](_0x2a614d,_0x3d398e),this[_0x1ad859(0x22e)](_0x3d398e,_0x2564ed);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1ec)]=function(_0x12a410,_0x56e89c){var _0x5129a5=_0xb96e9f;this[_0x5129a5(0x2a1)](_0x12a410,_0x56e89c),this['_setNodeQueryPath'](_0x12a410,_0x56e89c),this['_setNodeExpressionPath'](_0x12a410,_0x56e89c),this[_0x5129a5(0x298)](_0x12a410,_0x56e89c);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x2a1)]=function(_0x22705f,_0x568405){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x2b7)]=function(_0x1788d9,_0x4c370d){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x250)]=function(_0x2ec77f,_0x4756d8){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x249)]=function(_0x320029){var _0x5b67b4=_0xb96e9f;return _0x320029===this[_0x5b67b4(0x260)];},_0x435715[_0xb96e9f(0x1fa)]['_treeNodePropertiesAfterFullValue']=function(_0x1b683a,_0x70424a){var _0xe87ec=_0xb96e9f;this[_0xe87ec(0x250)](_0x1b683a,_0x70424a),this['_setNodeExpandableState'](_0x1b683a),_0x70424a[_0xe87ec(0x29e)]&&this[_0xe87ec(0x2a8)](_0x1b683a),this[_0xe87ec(0x1ee)](_0x1b683a,_0x70424a),this[_0xe87ec(0x28f)](_0x1b683a,_0x70424a),this[_0xe87ec(0x275)](_0x1b683a);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x23b)]=function(_0x29b992,_0x465b42){var _0x3f7bf0=_0xb96e9f;try{_0x29b992&&typeof _0x29b992['length']=='number'&&(_0x465b42['length']=_0x29b992['length']);}catch{}if(_0x465b42['type']===_0x3f7bf0(0x267)||_0x465b42[_0x3f7bf0(0x1ff)]===_0x3f7bf0(0x219)){if(isNaN(_0x465b42[_0x3f7bf0(0x286)]))_0x465b42[_0x3f7bf0(0x20d)]=!0x0,delete _0x465b42[_0x3f7bf0(0x286)];else switch(_0x465b42[_0x3f7bf0(0x286)]){case Number[_0x3f7bf0(0x1f7)]:_0x465b42[_0x3f7bf0(0x2b5)]=!0x0,delete _0x465b42[_0x3f7bf0(0x286)];break;case Number[_0x3f7bf0(0x229)]:_0x465b42[_0x3f7bf0(0x1fe)]=!0x0,delete _0x465b42[_0x3f7bf0(0x286)];break;case 0x0:this[_0x3f7bf0(0x251)](_0x465b42[_0x3f7bf0(0x286)])&&(_0x465b42[_0x3f7bf0(0x2a6)]=!0x0);break;}}else _0x465b42[_0x3f7bf0(0x1ff)]==='function'&&typeof _0x29b992[_0x3f7bf0(0x21f)]=='string'&&_0x29b992['name']&&_0x465b42[_0x3f7bf0(0x21f)]&&_0x29b992[_0x3f7bf0(0x21f)]!==_0x465b42[_0x3f7bf0(0x21f)]&&(_0x465b42[_0x3f7bf0(0x257)]=_0x29b992[_0x3f7bf0(0x21f)]);},_0x435715[_0xb96e9f(0x1fa)]['_isNegativeZero']=function(_0x42b720){return 0x1/_0x42b720===Number['NEGATIVE_INFINITY'];},_0x435715['prototype'][_0xb96e9f(0x2a8)]=function(_0x144a29){var _0x2c4118=_0xb96e9f;!_0x144a29[_0x2c4118(0x1c4)]||!_0x144a29[_0x2c4118(0x1c4)][_0x2c4118(0x1d6)]||_0x144a29[_0x2c4118(0x1ff)]===_0x2c4118(0x237)||_0x144a29[_0x2c4118(0x1ff)]===_0x2c4118(0x234)||_0x144a29['type']===_0x2c4118(0x2b8)||_0x144a29[_0x2c4118(0x1c4)][_0x2c4118(0x1bb)](function(_0x4b855e,_0x633de4){var _0x1e421f=_0x2c4118,_0x39c3a3=_0x4b855e[_0x1e421f(0x21f)][_0x1e421f(0x220)](),_0x37871b=_0x633de4[_0x1e421f(0x21f)][_0x1e421f(0x220)]();return _0x39c3a3<_0x37871b?-0x1:_0x39c3a3>_0x37871b?0x1:0x0;});},_0x435715[_0xb96e9f(0x1fa)]['_addFunctionsNode']=function(_0x336383,_0x4b546f){var _0x2943d1=_0xb96e9f;if(!(_0x4b546f[_0x2943d1(0x2a3)]||!_0x336383[_0x2943d1(0x1c4)]||!_0x336383[_0x2943d1(0x1c4)][_0x2943d1(0x1d6)])){for(var _0x2939f5=[],_0x354665=[],_0x1d6193=0x0,_0x5c01d4=_0x336383['props']['length'];_0x1d6193<_0x5c01d4;_0x1d6193++){var _0xf4eeba=_0x336383[_0x2943d1(0x1c4)][_0x1d6193];_0xf4eeba[_0x2943d1(0x1ff)]===_0x2943d1(0x292)?_0x2939f5['push'](_0xf4eeba):_0x354665[_0x2943d1(0x27f)](_0xf4eeba);}if(!(!_0x354665[_0x2943d1(0x1d6)]||_0x2939f5['length']<=0x1)){_0x336383['props']=_0x354665;var _0x3cb13e={'functionsNode':!0x0,'props':_0x2939f5};this[_0x2943d1(0x2a1)](_0x3cb13e,_0x4b546f),this['_setNodeLabel'](_0x3cb13e,_0x4b546f),this[_0x2943d1(0x1d4)](_0x3cb13e),this[_0x2943d1(0x298)](_0x3cb13e,_0x4b546f),_0x3cb13e['id']+='\\x20f',_0x336383[_0x2943d1(0x1c4)][_0x2943d1(0x204)](_0x3cb13e);}}},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x28f)]=function(_0x44ec36,_0xe995a0){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1d4)]=function(_0xd571d){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x261)]=function(_0x4e30ec){var _0x1bd593=_0xb96e9f;return Array['isArray'](_0x4e30ec)||typeof _0x4e30ec==_0x1bd593(0x287)&&this[_0x1bd593(0x1b9)](_0x4e30ec)===_0x1bd593(0x282);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x298)]=function(_0x4e9e0b,_0x2a21be){},_0x435715['prototype'][_0xb96e9f(0x275)]=function(_0x5cbafd){var _0x51c626=_0xb96e9f;delete _0x5cbafd[_0x51c626(0x2a7)],delete _0x5cbafd[_0x51c626(0x255)],delete _0x5cbafd[_0x51c626(0x1f2)];},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x225)]=function(_0x1f27eb,_0x4f203a){};let _0x11e6c9=new _0x435715(),_0x5bd079={'props':_0x167e22[_0xb96e9f(0x1ca)][_0xb96e9f(0x1c4)]||0x64,'elements':_0x167e22[_0xb96e9f(0x1ca)]['elements']||0x64,'strLength':_0x167e22[_0xb96e9f(0x1ca)][_0xb96e9f(0x28b)]||0x400*0x32,'totalStrLength':_0x167e22['defaultLimits'][_0xb96e9f(0x2b0)]||0x400*0x32,'autoExpandLimit':_0x167e22[_0xb96e9f(0x1ca)][_0xb96e9f(0x281)]||0x1388,'autoExpandMaxDepth':_0x167e22['defaultLimits'][_0xb96e9f(0x24e)]||0xa},_0x5c4238={'props':_0x167e22['reducedLimits'][_0xb96e9f(0x1c4)]||0x5,'elements':_0x167e22[_0xb96e9f(0x2a5)][_0xb96e9f(0x213)]||0x5,'strLength':_0x167e22[_0xb96e9f(0x2a5)]['strLength']||0x100,'totalStrLength':_0x167e22[_0xb96e9f(0x2a5)]['totalStrLength']||0x100*0x3,'autoExpandLimit':_0x167e22[_0xb96e9f(0x2a5)][_0xb96e9f(0x281)]||0x1e,'autoExpandMaxDepth':_0x167e22[_0xb96e9f(0x2a5)][_0xb96e9f(0x24e)]||0x2};if(_0x58debe){let _0x522749=_0x11e6c9['serialize'][_0xb96e9f(0x1f8)](_0x11e6c9);_0x11e6c9[_0xb96e9f(0x1c3)]=function(_0xcd83e3,_0x45f15a,_0x40e39d,_0x4e0312){return _0x522749(_0xcd83e3,_0x58debe(_0x45f15a),_0x40e39d,_0x4e0312);};}function _0x1fe57c(_0x5335d4,_0x308a29,_0x25d338,_0x1f532c,_0xab7796,_0x1596fe){var _0x42668e=_0xb96e9f;let _0x2438a5,_0x5087c3;try{_0x5087c3=_0x21489e(),_0x2438a5=_0x56215a[_0x308a29],!_0x2438a5||_0x5087c3-_0x2438a5['ts']>_0x6f4d67['perLogpoint']['resetWhenQuietMs']&&_0x2438a5[_0x42668e(0x243)]&&_0x2438a5[_0x42668e(0x26e)]/_0x2438a5['count']<_0x6f4d67['perLogpoint'][_0x42668e(0x256)]?(_0x56215a[_0x308a29]=_0x2438a5={'count':0x0,'time':0x0,'ts':_0x5087c3},_0x56215a[_0x42668e(0x1b0)]={}):_0x5087c3-_0x56215a[_0x42668e(0x1b0)]['ts']>_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x25e)]&&_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x243)]&&_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x26e)]/_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x243)]<_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x256)]&&(_0x56215a[_0x42668e(0x1b0)]={});let _0x27f89e=[],_0x43039f=_0x2438a5[_0x42668e(0x295)]||_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x295)]?_0x5c4238:_0x5bd079,_0x25b218=_0x149248=>{var _0x2f8652=_0x42668e;let _0x595c72={};return _0x595c72[_0x2f8652(0x1c4)]=_0x149248['props'],_0x595c72[_0x2f8652(0x213)]=_0x149248[_0x2f8652(0x213)],_0x595c72[_0x2f8652(0x28b)]=_0x149248[_0x2f8652(0x28b)],_0x595c72[_0x2f8652(0x2b0)]=_0x149248[_0x2f8652(0x2b0)],_0x595c72[_0x2f8652(0x281)]=_0x149248['autoExpandLimit'],_0x595c72[_0x2f8652(0x24e)]=_0x149248[_0x2f8652(0x24e)],_0x595c72['sortProps']=!0x1,_0x595c72[_0x2f8652(0x2a3)]=!_0x3c6597,_0x595c72['depth']=0x1,_0x595c72[_0x2f8652(0x1f1)]=0x0,_0x595c72['expId']=_0x2f8652(0x21d),_0x595c72[_0x2f8652(0x1c7)]=_0x2f8652(0x22d),_0x595c72[_0x2f8652(0x1d9)]=!0x0,_0x595c72[_0x2f8652(0x26f)]=[],_0x595c72['autoExpandPropertyCount']=0x0,_0x595c72[_0x2f8652(0x2aa)]=_0x167e22['resolveGetters'],_0x595c72[_0x2f8652(0x216)]=0x0,_0x595c72[_0x2f8652(0x212)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x595c72;};for(var _0x4d9c24=0x0;_0x4d9c24<_0xab7796[_0x42668e(0x1d6)];_0x4d9c24++)_0x27f89e[_0x42668e(0x27f)](_0x11e6c9['serialize']({'timeNode':_0x5335d4===_0x42668e(0x26e)||void 0x0},_0xab7796[_0x4d9c24],_0x25b218(_0x43039f),{}));if(_0x5335d4==='trace'||_0x5335d4==='error'){let _0xf38a4a=Error[_0x42668e(0x247)];try{Error[_0x42668e(0x247)]=0x1/0x0,_0x27f89e[_0x42668e(0x27f)](_0x11e6c9[_0x42668e(0x1c3)]({'stackNode':!0x0},new Error()[_0x42668e(0x1c6)],_0x25b218(_0x43039f),{'strLength':0x1/0x0}));}finally{Error[_0x42668e(0x247)]=_0xf38a4a;}}return{'method':'log','version':_0x1ac10d,'args':[{'ts':_0x25d338,'session':_0x1f532c,'args':_0x27f89e,'id':_0x308a29,'context':_0x1596fe}]};}catch(_0x18eeb9){return{'method':_0x42668e(0x23c),'version':_0x1ac10d,'args':[{'ts':_0x25d338,'session':_0x1f532c,'args':[{'type':_0x42668e(0x279),'error':_0x18eeb9&&_0x18eeb9[_0x42668e(0x201)]}],'id':_0x308a29,'context':_0x1596fe}]};}finally{try{if(_0x2438a5&&_0x5087c3){let _0x1248bf=_0x21489e();_0x2438a5['count']++,_0x2438a5['time']+=_0x394800(_0x5087c3,_0x1248bf),_0x2438a5['ts']=_0x1248bf,_0x56215a['hits'][_0x42668e(0x243)]++,_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x26e)]+=_0x394800(_0x5087c3,_0x1248bf),_0x56215a['hits']['ts']=_0x1248bf,(_0x2438a5[_0x42668e(0x243)]>_0x6f4d67[_0x42668e(0x22f)][_0x42668e(0x26d)]||_0x2438a5[_0x42668e(0x26e)]>_0x6f4d67['perLogpoint'][_0x42668e(0x1cc)])&&(_0x2438a5[_0x42668e(0x295)]=!0x0),(_0x56215a['hits'][_0x42668e(0x243)]>_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x26d)]||_0x56215a[_0x42668e(0x1b0)]['time']>_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x1cc)])&&(_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x295)]=!0x0);}}catch{}}}return _0x1fe57c;}function G(_0x12418b){var _0x4c2b55=_0x1cc9bf;if(_0x12418b&&typeof _0x12418b==_0x4c2b55(0x287)&&_0x12418b[_0x4c2b55(0x241)])switch(_0x12418b[_0x4c2b55(0x241)][_0x4c2b55(0x21f)]){case'Promise':return _0x12418b['hasOwnProperty'](Symbol[_0x4c2b55(0x27c)])?Promise[_0x4c2b55(0x226)]():_0x12418b;case _0x4c2b55(0x22c):return Promise[_0x4c2b55(0x226)]();}return _0x12418b;}((_0x58d798,_0x11fd99,_0x10d4ec,_0x3bdd08,_0x155b75,_0x31b6c8,_0xbdb6d1,_0x3068b7,_0x91a82,_0x7a6cf0,_0x2e8c07,_0xf1acf2)=>{var _0x346dd3=_0x1cc9bf;if(_0x58d798['_console_ninja'])return _0x58d798[_0x346dd3(0x1e6)];let _0x4b76c7={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x58d798,_0x3068b7,_0x155b75))return _0x58d798[_0x346dd3(0x1e6)]=_0x4b76c7,_0x58d798[_0x346dd3(0x1e6)];let _0x204b39=b(_0x58d798),_0x62f8a0=_0x204b39['elapsed'],_0x59153e=_0x204b39[_0x346dd3(0x29d)],_0x3f753e=_0x204b39[_0x346dd3(0x244)],_0x4ff01f={'hits':{},'ts':{}},_0x5082fa=J(_0x58d798,_0x91a82,_0x4ff01f,_0x31b6c8,_0xf1acf2,_0x155b75===_0x346dd3(0x21b)?G:void 0x0),_0x48af16=(_0x223141,_0x371f64,_0x35037a,_0x3cd8c9,_0x535304,_0x261762)=>{var _0x296592=_0x346dd3;let _0x53157f=_0x58d798[_0x296592(0x1e6)];try{return _0x58d798['_console_ninja']=_0x4b76c7,_0x5082fa(_0x223141,_0x371f64,_0x35037a,_0x3cd8c9,_0x535304,_0x261762);}finally{_0x58d798[_0x296592(0x1e6)]=_0x53157f;}},_0x39cf02=_0x422f8a=>{_0x4ff01f['ts'][_0x422f8a]=_0x59153e();},_0x1564b3=(_0x212127,_0x2c5a9e)=>{let _0x520a8c=_0x4ff01f['ts'][_0x2c5a9e];if(delete _0x4ff01f['ts'][_0x2c5a9e],_0x520a8c){let _0x3cefa7=_0x62f8a0(_0x520a8c,_0x59153e());_0x5ede0b(_0x48af16('time',_0x212127,_0x3f753e(),_0x2a26cf,[_0x3cefa7],_0x2c5a9e));}},_0x420127=_0x4f93a5=>{var _0x1876f0=_0x346dd3,_0x486c8c;return _0x155b75===_0x1876f0(0x21b)&&_0x58d798[_0x1876f0(0x2b3)]&&((_0x486c8c=_0x4f93a5==null?void 0x0:_0x4f93a5[_0x1876f0(0x1f6)])==null?void 0x0:_0x486c8c['length'])&&(_0x4f93a5['args'][0x0][_0x1876f0(0x2b3)]=_0x58d798[_0x1876f0(0x2b3)]),_0x4f93a5;};_0x58d798[_0x346dd3(0x1e6)]={'consoleLog':(_0x5a1884,_0x212f58)=>{var _0x341c81=_0x346dd3;_0x58d798['console']['log'][_0x341c81(0x21f)]!=='disabledLog'&&_0x5ede0b(_0x48af16(_0x341c81(0x23c),_0x5a1884,_0x3f753e(),_0x2a26cf,_0x212f58));},'consoleTrace':(_0x28f0da,_0x4ebb69)=>{var _0x13396a=_0x346dd3,_0x8657a2,_0x1db2a3;_0x58d798[_0x13396a(0x276)][_0x13396a(0x23c)][_0x13396a(0x21f)]!==_0x13396a(0x259)&&((_0x1db2a3=(_0x8657a2=_0x58d798[_0x13396a(0x1e2)])==null?void 0x0:_0x8657a2[_0x13396a(0x25c)])!=null&&_0x1db2a3[_0x13396a(0x212)]&&(_0x58d798[_0x13396a(0x211)]=!0x0),_0x5ede0b(_0x420127(_0x48af16('trace',_0x28f0da,_0x3f753e(),_0x2a26cf,_0x4ebb69))));},'consoleError':(_0x4da457,_0x1dbd96)=>{_0x58d798['_ninjaIgnoreNextError']=!0x0,_0x5ede0b(_0x420127(_0x48af16('error',_0x4da457,_0x3f753e(),_0x2a26cf,_0x1dbd96)));},'consoleTime':_0x43136f=>{_0x39cf02(_0x43136f);},'consoleTimeEnd':(_0x5c938f,_0x2ca612)=>{_0x1564b3(_0x2ca612,_0x5c938f);},'autoLog':(_0x5b4ec0,_0x290a38)=>{_0x5ede0b(_0x48af16('log',_0x290a38,_0x3f753e(),_0x2a26cf,[_0x5b4ec0]));},'autoLogMany':(_0x2e69a3,_0x46af14)=>{var _0x3dd49d=_0x346dd3;_0x5ede0b(_0x48af16(_0x3dd49d(0x23c),_0x2e69a3,_0x3f753e(),_0x2a26cf,_0x46af14));},'autoTrace':(_0x1483a2,_0x1e2762)=>{var _0x2e5a8b=_0x346dd3;_0x5ede0b(_0x420127(_0x48af16(_0x2e5a8b(0x262),_0x1e2762,_0x3f753e(),_0x2a26cf,[_0x1483a2])));},'autoTraceMany':(_0x46c70a,_0x381c1e)=>{_0x5ede0b(_0x420127(_0x48af16('trace',_0x46c70a,_0x3f753e(),_0x2a26cf,_0x381c1e)));},'autoTime':(_0x236c2b,_0x4d0b4d,_0x1c4cbf)=>{_0x39cf02(_0x1c4cbf);},'autoTimeEnd':(_0x25b203,_0x2a4be9,_0x5e6277)=>{_0x1564b3(_0x2a4be9,_0x5e6277);},'coverage':_0x166355=>{var _0x172574=_0x346dd3;_0x5ede0b({'method':_0x172574(0x23e),'version':_0x31b6c8,'args':[{'id':_0x166355}]});}};let _0x5ede0b=H(_0x58d798,_0x11fd99,_0x10d4ec,_0x3bdd08,_0x155b75,_0x7a6cf0,_0x2e8c07),_0x2a26cf=_0x58d798[_0x346dd3(0x1d1)];return _0x58d798[_0x346dd3(0x1e6)];})(globalThis,_0x1cc9bf(0x28d),_0x1cc9bf(0x29a),_0x1cc9bf(0x22b),_0x1cc9bf(0x2b6),_0x1cc9bf(0x207),_0x1cc9bf(0x24a),_0x1cc9bf(0x25a),_0x1cc9bf(0x277),_0x1cc9bf(0x290),_0x1cc9bf(0x246),{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}});");
    } catch (e) {
        console.error(e);
    }
}
function oo_oo(i, ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
oo_oo; /* istanbul ignore next */ 
function oo_tr(i, ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
oo_tr; /* istanbul ignore next */ 
function oo_tx(i, ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
oo_tx; /* istanbul ignore next */ 
function oo_ts(v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
oo_ts; /* istanbul ignore next */ 
function oo_te(v, i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/AnimatedSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AnimatedSection = ({ children })=>{
    _s();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedSection.useEffect": ()=>{
            if (inView) {
                controls.start("visible");
            }
        }
    }["AnimatedSection.useEffect"], [
        controls,
        inView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: "hidden",
        animate: controls,
        variants: {
            visible: {
                opacity: 1,
                y: 0
            },
            hidden: {
                opacity: 0,
                y: 50
            }
        },
        transition: {
            duration: 1.2
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/shared/AnimatedSection.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedSection, "2NEUvrxzw09dl1eC0Q0pbm0pOIE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = AnimatedSection;
const __TURBOPACK__default__export__ = AnimatedSection;
var _c;
__turbopack_context__.k.register(_c, "AnimatedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme-toggler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggler",
    ()=>ThemeToggler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ThemeToggler() {
    _s();
    const { setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
                        }, void 0, false, {
                            fileName: "[project]/components/theme-toggler.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
                        }, void 0, false, {
                            fileName: "[project]/components/theme-toggler.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        }, void 0, false, {
                            fileName: "[project]/components/theme-toggler.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/theme-toggler.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/theme-toggler.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("light"),
                        children: "Light"
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggler.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("dark"),
                        children: "Dark"
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggler.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("system"),
                        children: "System"
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggler.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/theme-toggler.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/theme-toggler.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ThemeToggler, "a3u8LKbpX4CXbd+e8SJ1SuQ9KPw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggler;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/i18n/routing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-client] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    // A list of all locales that are supported
    locales: [
        "en",
        "fr",
        "es"
    ],
    // Used when no locale matches
    defaultLocale: "fr"
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/i18n/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "getPathname",
    ()=>getPathname,
    "redirect",
    ()=>redirect,
    "usePathname",
    ()=>usePathname,
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-client] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/routing.ts [app-client] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "languages",
    ()=>languages,
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: "1",
        slug: "awd-pay",
        title: "AWDPAY",
        description: "Payment service that simplifies online payments for businesses and individuals.",
        longDescription: "AWDPAY is a comprehensive payment service that enables businesses and individuals to process online payments efficiently. It provides a user-friendly interface for managing transactions, tracking payments, and handling financial operations with enhanced security features.",
        image: "/projects/awdpay.png",
        technologies: [
            "Payment Processing",
            "Security",
            "TypeScript",
            "React",
            "Node.js"
        ],
        link: "https://awdpay.com"
    },
    {
        id: "2",
        slug: "awd-pay-apis",
        title: "AWDPAY APIs",
        description: "Payment APIs with deposit, withdrawal, and transfer functions.",
        longDescription: "AWDPAY APIs offer three major functions: payment, withdrawal, and transfer, providing a faster, more secure, and flexible experience. With integrated functions, you can also trigger deposits, withdrawals, transfers, and purchases without leaving your merchant site.",
        image: "/projects/awdpay-api.png",
        technologies: [
            "API Integration",
            "REST APIs",
            "Payment Processing",
            "Security",
            "TypeScript"
        ],
        link: "https://docs.awdpay.com/"
    },
    {
        id: "3",
        slug: "pdf-tools",
        title: "AWDPDF Tools",
        description: "Simple, reliable, and 100% free PDF tools.",
        longDescription: "All your essential PDF functionalities gathered in one place, easy to use and accessible with one click. A comprehensive suite of tools for all your PDF manipulation needs including merging, splitting, converting, and editing PDF documents.",
        image: "/projects/awdpdf.png",
        technologies: [
            "PDF Processing",
            "JavaScript",
            "React",
            "Cloud Storage",
            "File Handling"
        ],
        link: "https://awdpdf.com/"
    },
    {
        id: "4",
        slug: "codewigs",
        title: "Codewigs",
        description: "Design and create exceptional projects with ready-to-use components.",
        longDescription: "Purchase high-quality scripts, themes, and plugins that are ready to use! Codewigs helps developers and designers create outstanding projects with pre-built components, templates, and libraries to accelerate development workflows.",
        image: "/projects/codewhigs.png",
        technologies: [
            "Component Library",
            "JavaScript",
            "CSS",
            "React",
            "Vue.js",
            "Templates"
        ],
        link: "https://www.codewigs.com/"
    }
];
const languages = [
    {
        code: "en",
        name: "English",
        nativeName: "English"
    },
    {
        code: "fr",
        name: "French",
        nativeName: "Français"
    },
    {
        code: "es",
        name: "Spanish",
        nativeName: "Español"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/mobile-language-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MobileLanguageSwitcher = ({ onLanguageChange, className })=>{
    _s();
    const currentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const currentLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].find((lang)=>lang.code === currentLocale) || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"][0];
    const handleLanguageClick = ()=>{
        if (onLanguageChange) {
            onLanguageChange();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 py-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                        className: "w-5 h-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-language-selector.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm text-foreground",
                        children: "Language"
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-language-selector.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground ml-auto",
                        children: currentLanguage.nativeName
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-language-selector.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/mobile-language-selector.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 p-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: "/",
                        locale: language.code,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200", "hover:bg-accent hover:text-accent-foreground border border-transparent", "active:scale-[0.98] active:bg-accent/80", "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background", currentLocale === language.code ? "bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20" : "text-foreground hover:border-border"),
                        onClick: handleLanguageClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-medium",
                                        children: language.nativeName
                                    }, void 0, false, {
                                        fileName: "[project]/components/mobile-language-selector.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", currentLocale === language.code ? "text-primary-foreground/80" : "text-muted-foreground"),
                                        children: language.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/mobile-language-selector.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/mobile-language-selector.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            currentLocale === language.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-5 h-5 text-primary-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/mobile-language-selector.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, language.code, true, {
                        fileName: "[project]/components/mobile-language-selector.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/mobile-language-selector.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/mobile-language-selector.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileLanguageSwitcher, "5v7EyO29SSap4AEVOHiQ5V/X/DE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = MobileLanguageSwitcher;
const __TURBOPACK__default__export__ = MobileLanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "MobileLanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/mobile-theme-switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MobileThemeSwitcher = ({ onThemeChange, className })=>{
    _s();
    const { theme, setTheme, systemTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const themes = [
        {
            value: "light",
            label: "Light",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
            description: "Light mode"
        },
        {
            value: "dark",
            label: "Dark",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
            description: "Dark mode"
        },
        {
            value: "system",
            label: "System",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
            description: "Follow device"
        }
    ];
    const currentTheme = themes.find((t)=>t.value === theme) || themes[2];
    const handleThemeClick = (themeValue)=>{
        setTheme(themeValue);
        if (onThemeChange) {
            onThemeChange();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 py-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(currentTheme.icon, {
                        className: "w-5 h-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-theme-switcher.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm text-foreground",
                        children: "Theme"
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-theme-switcher.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground ml-auto capitalize",
                        children: theme === "system" ? `System (${systemTheme})` : theme
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-theme-switcher.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/mobile-theme-switcher.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 p-2",
                children: themes.map((themeOption)=>{
                    const Icon = themeOption.icon;
                    const isSelected = theme === themeOption.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleThemeClick(themeOption.value),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200", "hover:bg-accent hover:text-accent-foreground border border-transparent", "active:scale-[0.98] active:bg-accent/80", "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background", isSelected ? "bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20" : "text-foreground hover:border-border"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-lg transition-colors", isSelected ? "bg-primary-foreground/20" : "bg-muted"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-colors", isSelected ? "text-primary-foreground" : "text-muted-foreground")
                                        }, void 0, false, {
                                            fileName: "[project]/components/mobile-theme-switcher.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/mobile-theme-switcher.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-medium",
                                                children: themeOption.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/mobile-theme-switcher.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs text-left mt-0.5", isSelected ? "text-primary-foreground/80" : "text-muted-foreground"),
                                                children: themeOption.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/mobile-theme-switcher.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/mobile-theme-switcher.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/mobile-theme-switcher.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-5 h-5 text-primary-foreground flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/mobile-theme-switcher.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, themeOption.value, true, {
                        fileName: "[project]/components/mobile-theme-switcher.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/components/mobile-theme-switcher.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/mobile-theme-switcher.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileThemeSwitcher, "BJZpip9uX/EBUn43zc/+cs2bil8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = MobileThemeSwitcher;
const __TURBOPACK__default__export__ = MobileThemeSwitcher;
var _c;
__turbopack_context__.k.register(_c, "MobileThemeSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/locale-toggler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const LanguageButton = ()=>{
    _s();
    const currentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const currentLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].find((lang)=>lang.code === currentLocale) || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", "bg-background border-border text-foreground", "hover:bg-accent hover:text-accent-foreground", "transition-colors duration-200"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/locale-toggler.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: currentLanguage.code.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/components/locale-toggler.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/locale-toggler.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/locale-toggler.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "w-48 bg-background border-border",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].map((language)=>{
                    const isSelected = currentLocale === language.code;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        asChild: true,
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            href: "/",
                            locale: language.code,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between w-full px-2 py-1.5 cursor-pointer", "text-foreground hover:bg-accent hover:text-accent-foreground", "transition-colors duration-200", isSelected && "bg-accent text-accent-foreground"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-1",
                                    children: [
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3 text-primary flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/locale-toggler.tsx",
                                            lineNumber: 60,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1", !isSelected && "ml-5"),
                                            children: language.nativeName
                                        }, void 0, false, {
                                            fileName: "[project]/components/locale-toggler.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/locale-toggler.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", isSelected ? "text-primary-foreground/70" : "text-muted-foreground"),
                                    children: language.name
                                }, void 0, false, {
                                    fileName: "[project]/components/locale-toggler.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/locale-toggler.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, language.code, false, {
                        fileName: "[project]/components/locale-toggler.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/components/locale-toggler.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/locale-toggler.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageButton, "5v7EyO29SSap4AEVOHiQ5V/X/DE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = LanguageButton;
const __TURBOPACK__default__export__ = LanguageButton;
var _c;
__turbopack_context__.k.register(_c, "LanguageButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/disclosure/disclosure.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme-toggler.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/mobile-language-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$theme$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/mobile-theme-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$locale$2d$toggler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/locale-toggler.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Header({ scrolledBg = "bg-white/95 dark:bg-black shadow-lg backdrop-blur-sm", defaultBg = "bg-transparent", threshold = 50 }) {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Header");
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const services = [
        {
            name: t("webDevelopment"),
            description: t("webDevelopmentDescription"),
            href: "web",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
        },
        {
            name: t("mobileDevelopment"),
            description: t("mobileDevelopmentDescription"),
            href: "mobile",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
        },
        {
            name: t("graphicDesign"),
            description: t("graphicDesignDescription"),
            href: "graphic",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
        }
    ];
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            let ticking = false;
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    if (!ticking) {
                        requestAnimationFrame({
                            "Header.useEffect.handleScroll": ()=>{
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
                            }
                        }["Header.useEffect.handleScroll"]);
                        ticking = true;
                    }
                }
            }["Header.useEffect.handleScroll"];
            // Add scroll event listener with passive for better performance
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        lastScrollY,
        threshold
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 fixed w-screen top-0 left-0 transition-all duration-300", "border-b", isScrolled ? "border-gray-200  dark:border-gray-800" : "border-transparent", isVisible ? "translate-y-0" : "-translate-y-full", isScrolled ? scrolledBg : defaultBg),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Global",
                className: "mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "-m-1.5 p-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "AWDTECH"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Header.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "127",
                                    height: "30",
                                    viewBox: "0 0 127 30",
                                    fill: "none",
                                    className: "text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            clipPath: "url(#clip0_9616_17482)",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "75",
                                                    y: "23",
                                                    fontFamily: "Inter, sans-serif",
                                                    fontSize: "19",
                                                    fontWeight: "1000",
                                                    fill: "currentColor",
                                                    children: "TECH"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z",
                                                    fill: "#FF6600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z",
                                                    fill: "#FF6600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M46.5529 6.6632C39.9138 6.6632 39.255 12.6625 40.7527 16.9482C40.9759 16.7397 41.0696 16.5902 41.0696 16.5902C41.1524 17.3862 41.3072 18.203 41.3072 18.203C40.3819 18.1821 39.7338 17.6191 39.7338 17.6191C39.8742 17.553 40.0002 17.4835 40.1155 17.4175L37.0191 6.9656C30.7436 6.93432 29.7427 12.659 31.2477 17.4453H30.4304L27.4817 6.9656H21.145L25.5375 22.9545H33.7896C34.6357 22.9545 34.7005 22.8641 34.7005 22.4991C34.7005 19.781 33.3647 17.9041 34.3944 14.0528C33.6888 13.9347 33.2711 14.0007 33.2711 14.0007C34.4412 12.7529 35.4998 12.2385 35.4998 12.2385C35.831 13.3194 35.9714 14.5256 35.9714 14.5256C35.7014 14.4109 35.4494 14.3205 35.2117 14.2475C35.2009 19.1832 38.5421 22.951 40.5295 22.951H45.4224C46.2073 22.951 46.3333 22.5582 46.3333 22.1342C46.3333 21.015 44.6375 17.772 44.6087 15.3215C44.5763 13.6844 45.2352 12.5965 46.6466 12.5965C47.2118 12.5965 47.8995 12.8085 47.8995 12.8085L49.6565 6.90304C49.6565 6.90304 48.3711 6.65973 46.5493 6.65973L46.5529 6.6632Z",
                                                    fill: "#FF6600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Header.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                id: "clip0_9616_17482)",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "127",
                                                    height: "30",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Header.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Header.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Header.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Header.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setMobileMenuOpen(true),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5", !isScrolled && ![
                                "/fr",
                                "/en",
                                "/es"
                            ].includes(pathname) ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" : isScrolled ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" : "text-white", "transition-colors duration-200"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: t("openMainMenu")
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Header.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    "aria-hidden": "true",
                                    className: "size-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Header.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Header.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Header.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex lg:gap-x-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: `text-sm/6 ${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"}   font-semibold  hover:text-primary transition-colors duration-200`,
                                children: t("home")
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-x-1 text-sm/6 font-semibold", "text-foreground hover:text-primary transition-colors duration-200", "focus:outline-none focus:text-primary"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"}`,
                                                    children: [
                                                        " ",
                                                        t("services")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    "aria-hidden": "true",
                                                    className: "size-5 flex-none dark:text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Header.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Header.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "center",
                                        className: "w-80 rounded-3xl bg-background border border-border shadow-xl",
                                        children: services.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: "flex items-center gap-x-6 rounded-3xl p-4 text-sm/6 hover:bg-accent focus:bg-accent cursor-pointer transition-colors duration-200",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex size-11 flex-none items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                "aria-hidden": "true",
                                                                className: "size-6 text-muted-foreground group-hover:text-primary transition-colors duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/Header.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-auto",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-semibold text-foreground",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/Header.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-muted-foreground",
                                                                    children: item.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/Header.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/shared/Header.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this)
                                            }, item.name, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Header.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projects",
                                className: `${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"} text-sm/6 font-semibold  hover:text-primary transition-colors duration-200`,
                                children: t("projects")
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: `${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"} text-sm/6 font-semibold  hover:text-primary transition-colors duration-200`,
                                children: t("contact")
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/Header.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden gap-3 lg:flex lg:flex-1 lg:justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$locale$2d$toggler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggler"], {}, void 0, false, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/Header.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/Header.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: mobileMenuOpen,
                onClose: setMobileMenuOpen,
                className: "lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Header.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPanel"], {
                        className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "-m-1.5 p-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "AWDTECH"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 305,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "127",
                                                height: "30",
                                                viewBox: "0 0 127 30",
                                                fill: "none",
                                                className: "text-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        clipPath: "url(#clip0_9616_17482)",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M79.2157 7.86586C80.177 7.38272 81.2608 7.14288 82.4705 7.14288C83.853 7.14288 85.1168 7.47309 86.2581 8.13002C87.3994 8.78696 88.2995 9.71153 88.9512 10.8968C89.6028 12.0821 89.9305 13.4446 89.9305 14.9844C89.9305 16.5242 89.6028 17.9006 88.9512 19.1137C88.2995 20.3268 86.2581 21.95 82.4705 22.9649C81.2608 22.9649 80.1842 22.7286 79.2445 22.2558C78.3048 21.7831 77.5344 21.1957 76.9403 20.4901V30H73.6567V7.39314H76.9403V9.64549C77.4947 8.93989 78.2544 8.349 79.2157 7.86586ZM85.9124 12.2454C85.4624 11.4773 84.8647 10.8933 84.1267 10.4936C83.3886 10.0939 82.5965 9.89575 81.7504 9.89575C80.9043 9.89575 80.141 10.1008 79.403 10.5075C78.6649 10.9142 78.0672 11.5085 77.6172 12.2871C77.1671 13.0657 76.9403 13.9833 76.9403 15.04C76.9403 16.0967 77.1635 17.0178 77.6172 17.8068C78.0672 18.5958 78.6649 19.1936 79.403 19.6003C80.141 20.007 80.9259 20.2121 81.7504 20.2121C82.5749 20.2121 83.3886 20.0035 84.1267 19.5864C84.8647 19.1693 85.4624 18.561 85.9124 17.7651C86.3625 16.9691 86.5893 16.041 86.5893 14.9844C86.5893 13.9277 86.3625 13.0136 85.9124 12.2454Z",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M93.0845 10.8968C93.747 9.71153 94.6507 8.78696 95.792 8.13002C96.9333 7.47309 98.1971 7.14288 99.5796 7.14288C100.829 7.14288 101.916 7.37924 102.849 7.85196C103.781 8.32467 104.523 8.91209 105.081 9.61768V7.39314H108.393V22.7147H105.081V20.4345C104.523 21.1575 103.767 21.7588 102.806 22.2419C101.844 22.7251 100.75 22.9649 99.522 22.9649C98.1575 22.9649 96.9117 22.6278 95.7776 21.95C94.6435 21.2722 93.747 20.3268 93.0845 19.1137C92.4221 17.9006 92.0908 16.5242 92.0908 14.9844C92.0908 13.4446 92.4221 12.0821 93.0845 10.8968ZM104.404 12.2871C103.954 11.5085 103.364 10.9142 102.633 10.5075C101.902 10.1008 101.117 9.89575 100.271 9.89575C99.4248 9.89575 98.6399 10.0939 97.909 10.4936C97.1782 10.8933 96.5877 11.4773 96.1377 12.2454C95.6876 13.0136 95.4608 13.9277 95.4608 14.9844C95.4608 16.041 95.6876 16.9691 96.1377 17.7651C96.5877 18.561 97.1854 19.1693 97.9234 19.5864C98.6615 20.0035 99.4464 20.2121 100.271 20.2121C101.095 20.2121 101.902 20.007 102.633 19.6003C103.364 19.1936 103.954 18.5958 104.404 17.8068C104.854 17.0178 105.081 16.0967 105.081 15.04C105.081 13.9833 104.854 13.0657 104.404 12.2871Z",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M127 7.39313L117.264 29.9166H113.866L117.092 22.4644L110.841 7.39313H114.499L118.964 19.072L123.601 7.39313H127Z",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z",
                                                                fill: "#FF6600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z",
                                                                fill: "#FF6600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M46.5529 6.6632C39.9138 6.6632 39.255 12.6625 40.7527 16.9482C40.9759 16.7397 41.0696 16.5902 41.0696 16.5902C41.1524 17.3862 41.3072 18.203 41.3072 18.203C40.3819 18.1821 39.7338 17.6191 39.7338 17.6191C39.8742 17.553 40.0002 17.4835 40.1155 17.4175L37.0191 6.9656C30.7436 6.93432 29.7427 12.659 31.2477 17.4453H30.4304L27.4817 6.9656H21.145L25.5375 22.9545H33.7896C34.6357 22.9545 34.7005 22.8641 34.7005 22.4991C34.7005 19.781 33.3647 17.9041 34.3944 14.0528C33.6888 13.9347 33.2711 14.0007 33.2711 14.0007C34.4412 12.7529 35.4998 12.2385 35.4998 12.2385C35.831 13.3194 35.9714 14.5256 35.9714 14.5256C35.7014 14.4109 35.4494 14.3205 35.2117 14.2475C35.2009 19.1832 38.5421 22.951 40.5295 22.951H45.4224C46.2073 22.951 46.3333 22.5582 46.3333 22.1342C46.3333 21.015 44.6375 17.772 44.6087 15.3215C44.5763 13.6844 45.2352 12.5965 46.6466 12.5965C47.2118 12.5965 47.8995 12.8085 47.8995 12.8085L49.6565 6.90304C49.6565 6.90304 48.3711 6.65973 46.5493 6.65973L46.5529 6.6632Z",
                                                                fill: "#FF6600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/shared/Header.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                            id: "clip0_9616_17482)",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "127",
                                                                height: "30",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/Header.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Header.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/Header.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-m-2.5 rounded-md p-2.5", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100", "transition-colors duration-200"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: t("closeMenu")
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 356,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                "aria-hidden": "true",
                                                className: "size-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/Header.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flow-root",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "-my-6 divide-y divide-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 py-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                children: t("home")
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"], {
                                                as: "div",
                                                className: "-mx-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisclosureButton"], {
                                                        className: "group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                        children: [
                                                            t("services"),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                "aria-hidden": "true",
                                                                className: "size-5 flex-none group-data-open:rotate-180 text-muted-foreground transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/shared/Header.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisclosurePanel"], {
                                                        className: "mt-2 space-y-2",
                                                        children: services.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                onClick: ()=>setMobileMenuOpen(false),
                                                                href: item.href,
                                                                className: "block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                                children: item.name
                                                            }, item.name, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Header.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/projects",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                children: t("projects")
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                children: t("contact")
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$theme$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 406,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/Header.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Header.tsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/Header.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/Header.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/Header.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_s(Header, "B1mKZN0rQC5b8XOkGHDiJlVbUUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_70751569._.js.map