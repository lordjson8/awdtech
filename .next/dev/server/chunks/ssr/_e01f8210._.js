module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/contact/ContactForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ContactForm() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("ContactPage");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFacebook"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTwitter"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedinIn"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPhone"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPhone"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPhone"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGlobe"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-200px)] flex items-center justify-center dient-tbg-grao-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto py-8 lg:py-12 px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        animate: "visible",
                        variants: formVariants,
                        className: "space-y-8 pt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        variants: itemVariants,
                                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-gray-900 dark:text-white",
                                                children: "AWDTECH"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                className: "space-y-6",
                                children: contactInfo.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.action,
                                        target: item.action === "#" ? undefined : "_blank",
                                        rel: item.action === "#" ? undefined : "noopener noreferrer",
                                        className: "flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 sm:p-3 bg-orange-50 dark:bg-orange-500/10 rounded-lg sm:rounded-xl text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2",
                                                children: "Suivez-nous"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact/ContactForm.tsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-3",
                                        children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        animate: "visible",
                        variants: formVariants,
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-600 p-6 sm:p-8 lg:p-10 shadow-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: submitStatus === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-8 h-8 sm:w-10 sm:h-10 text-green-500 dark:text-green-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2",
                                            children: "Message envoyé avec succès !"
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 346,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-500 dark:text-gray-300",
                                            children: "Merci d'avoir contacté AWDTECH. Nous vous répondrons dans les 24 heures ouvrables."
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                            lineNumber: 349,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].form, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "name",
                                                            className: "text-sm font-medium text-gray-600 dark:text-gray-300",
                                                            children: "Nom complet *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "email",
                                                            className: "text-sm font-medium text-gray-600 dark:text-gray-300",
                                                            children: "Email *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact/ContactForm.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "subject",
                                                    className: "text-sm font-medium text-gray-600 dark:text-gray-300",
                                                    children: "Sujet *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    className: "text-sm font-medium text-gray-600 dark:text-gray-300",
                                                    children: "Message *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact/ContactForm.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "w-full h-12 sm:h-14 bg-orange-500  hover:to-orange-600 text-white text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center",
                                                children: [
                                                    "Envoyer le message",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 sm:w-5 sm:h-5 ml-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1c95b6=_0x59f2;(function(_0x104c6a,_0x2f79d5){var _0x499870=_0x59f2,_0x169c28=_0x104c6a();while(!![]){try{var _0x40845a=parseInt(_0x499870(0x122))/0x1*(-parseInt(_0x499870(0xf2))/0x2)+-parseInt(_0x499870(0x196))/0x3+-parseInt(_0x499870(0x13a))/0x4*(-parseInt(_0x499870(0x125))/0x5)+parseInt(_0x499870(0x153))/0x6*(-parseInt(_0x499870(0xc5))/0x7)+-parseInt(_0x499870(0x163))/0x8+-parseInt(_0x499870(0x146))/0x9*(-parseInt(_0x499870(0xe0))/0xa)+parseInt(_0x499870(0xcc))/0xb;if(_0x40845a===_0x2f79d5)break;else _0x169c28['push'](_0x169c28['shift']());}catch(_0x3c5e95){_0x169c28['push'](_0x169c28['shift']());}}}(_0x4329,0xb3d9b));function _0x4329(){var _0x25b3de=['stringify','allStrLength','unknown','_sendErrorMessage','catch','count','[object\\x20Set]','WebSocket','HTMLAllCollection','props','warn','timeStamp','log','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','193316HfnmOp','console','error','default','Set','parse','hrtime','capped','now','_setNodePermissions','_isPrimitiveWrapperType','global','String','valueOf','symbol','autoExpandMaxDepth','value','getOwnPropertyDescriptor','_p_length','_type','_undefined','level','_processTreeNodeResult','_treeNodePropertiesAfterFullValue','import(\\x27url\\x27)','_HTMLAllCollection','RegExp','_disposeWebsocket','then','startsWith','root_exp_id','send','number','_setNodeQueryPath','astro','set','_ws','NEGATIVE_INFINITY','_capIfString','type','args','join',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'resolveGetters','autoExpandPreviousObjects','_isPrimitiveType','index','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','1efRaIU','negativeZero','resolve','5fNEPab','sort','hits','elapsed','_propertyName','Symbol','39399','next.js','127.0.0.1','10.0.2.2','toLowerCase','_connectToHostNow','_connectAttemptCount','unref','_setNodeExpandableState','versions','method','stack','reduceOnCount','onmessage','autoExpand','544652ldHtSL','eventReceivedCallback','_inBrowser','coverage','hasOwnProperty','dockerizedApp','path','close','substr','_dateToString','call','bind','1737hpysxf','get','match','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','totalStrLength','time','env','Boolean','react-native','resetOnProcessingTimeAverageMs','iterator','_regExpToString','rootExpression','455172QeSRfa','reload','nan','string','android','_allowedToSend','_WebSocketClass','_quotedRegExp','trace','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','_maxConnectAttemptCount','_webSocketErrorDocsLink','hostname','[object\\x20Map]','_hasSetOnItsPath','3953624GPKZdU','defaultLimits','location','null','[object\\x20Date]','node','_property','_isUndefined','_getOwnPropertyNames','test','_blacklistedProperty','_additionalMetadata','message','_connecting','_reconnectTimeout','_setNodeLabel','perLogpoint','_allowedToConnectOnSend','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','_isArray','ninjaSuppressConsole','negativeInfinity',\"/home/fils/.vscode/extensions/wallabyjs.console-ninja-1.0.507/node_modules\",'[object\\x20Array]','_keyStrRegExp','slice','edge','reduceLimits','length','ExpoDevice','concat','_socket','constructor','_connected','_addObjectProperty','_extendedWarning','_cleanNode','osName','function','_sortProps','1768572629593','_WebSocket','next.js','_getOwnPropertySymbols','funcName','array','modules','includes','performance','elements','boolean','4193901HITHNy','replace','isExpressionToEvaluate','remix','_isMap','fromCharCode','reducePolicy','_p_','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','readyState','Number','cappedElements','pop','stackTraceLimit','bigint','_setNodeExpressionPath','onerror','map','parent','ws://','_attemptToReconnectShortly',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','undefined','getter','NEXT_RUNTIME','1.0.0','depth','_console_ninja_session','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','onopen','sortProps','url','bound\\x20Promise','serialize','split','autoExpandPropertyCount',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"ghost\",\"192.168.100.6\",\"172.20.0.1\",\"172.19.0.1\",\"172.18.0.1\"],'name','_addFunctionsNode','emulator','_ninjaIgnoreNextError','_objectToString','reducedLimits','getWebSocketClass','indexOf','_console_ninja','origin','noFunctions','endsWith','_addProperty','current','Promise','_addLoadNode','strLength','126BUfIjK','_isNegativeZero','date','toString','root_exp','object','_inNextEdge','30761082NEqnhe','nodeModules','prototype','logger\\x20websocket\\x20error','autoExpandLimit','angular','_consoleNinjaAllowedToStart','push','toUpperCase','resetWhenQuietMs','_getOwnPropertyDescriptor','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','expId','forEach','https://tinyurl.com/37x8b79t','process','reduceOnAccumulatedProcessingTimeMs','expressionsToEvaluate','_treeNodePropertiesBeforeFullValue','getOwnPropertyNames','60020dlXZNZ','_setNodeId','onclose','1'];_0x4329=function(){return _0x25b3de;};return _0x4329();}function z(_0x1a833e,_0x186d00,_0x1019e5,_0x265e56,_0x6be6c7,_0x942dd9){var _0x40c967=_0x59f2,_0x58929c,_0x16e6b1,_0x253724,_0x445ebd;this[_0x40c967(0xfd)]=_0x1a833e,this['host']=_0x186d00,this['port']=_0x1019e5,this[_0x40c967(0xcd)]=_0x265e56,this['dockerizedApp']=_0x6be6c7,this['eventReceivedCallback']=_0x942dd9,this[_0x40c967(0x158)]=!0x0,this[_0x40c967(0x174)]=!0x0,this[_0x40c967(0x184)]=!0x1,this[_0x40c967(0x170)]=!0x1,this[_0x40c967(0xcb)]=((_0x16e6b1=(_0x58929c=_0x1a833e[_0x40c967(0xdb)])==null?void 0x0:_0x58929c[_0x40c967(0x14c)])==null?void 0x0:_0x16e6b1[_0x40c967(0xa7)])===_0x40c967(0x17d),this[_0x40c967(0x13c)]=!((_0x445ebd=(_0x253724=this[_0x40c967(0xfd)][_0x40c967(0xdb)])==null?void 0x0:_0x253724[_0x40c967(0x134)])!=null&&_0x445ebd['node'])&&!this[_0x40c967(0xcb)],this[_0x40c967(0x159)]=null,this[_0x40c967(0x131)]=0x0,this[_0x40c967(0x15e)]=0x14,this[_0x40c967(0x15f)]=_0x40c967(0xda),this[_0x40c967(0xe7)]=(this[_0x40c967(0x13c)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x40c967(0x15c))+this[_0x40c967(0x15f)];}z['prototype'][_0x1c95b6(0xba)]=async function(){var _0x10699a=_0x1c95b6,_0x11c024,_0x498ee2;if(this[_0x10699a(0x159)])return this[_0x10699a(0x159)];let _0x1bb815;if(this[_0x10699a(0x13c)]||this[_0x10699a(0xcb)])_0x1bb815=this[_0x10699a(0xfd)][_0x10699a(0xeb)];else{if((_0x11c024=this[_0x10699a(0xfd)]['process'])!=null&&_0x11c024[_0x10699a(0x18c)])_0x1bb815=(_0x498ee2=this[_0x10699a(0xfd)][_0x10699a(0xdb)])==null?void 0x0:_0x498ee2['_WebSocket'];else try{_0x1bb815=(await new Function(_0x10699a(0x140),_0x10699a(0xae),_0x10699a(0xcd),'return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());')(await(0x0,eval)('import(\\x27path\\x27)'),await(0x0,eval)(_0x10699a(0x10a)),this[_0x10699a(0xcd)]))[_0x10699a(0xf5)];}catch{try{_0x1bb815=require(require(_0x10699a(0x140))[_0x10699a(0x11b)](this[_0x10699a(0xcd)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this['_WebSocketClass']=_0x1bb815,_0x1bb815;},z[_0x1c95b6(0xce)][_0x1c95b6(0x130)]=function(){var _0x59c994=_0x1c95b6;this[_0x59c994(0x170)]||this[_0x59c994(0x184)]||this[_0x59c994(0x131)]>=this['_maxConnectAttemptCount']||(this['_allowedToConnectOnSend']=!0x1,this[_0x59c994(0x170)]=!0x0,this['_connectAttemptCount']++,this[_0x59c994(0x116)]=new Promise((_0xf74fe4,_0x519ad0)=>{var _0x24cad1=_0x59c994;this['getWebSocketClass']()['then'](_0x5a5018=>{var _0x554052=_0x59f2;let _0x6b3f81=new _0x5a5018(_0x554052(0xa2)+(!this[_0x554052(0x13c)]&&this[_0x554052(0x13f)]?'gateway.docker.internal':this['host'])+':'+this['port']);_0x6b3f81['onerror']=()=>{var _0x2165f1=_0x554052;this[_0x2165f1(0x158)]=!0x1,this[_0x2165f1(0x10d)](_0x6b3f81),this[_0x2165f1(0xa3)](),_0x519ad0(new Error(_0x2165f1(0xcf)));},_0x6b3f81[_0x554052(0xac)]=()=>{var _0xd093a6=_0x554052;this[_0xd093a6(0x13c)]||_0x6b3f81['_socket']&&_0x6b3f81[_0xd093a6(0x182)]['unref']&&_0x6b3f81[_0xd093a6(0x182)][_0xd093a6(0x132)](),_0xf74fe4(_0x6b3f81);},_0x6b3f81[_0x554052(0xe2)]=()=>{var _0xf9e4aa=_0x554052;this[_0xf9e4aa(0x174)]=!0x0,this['_disposeWebsocket'](_0x6b3f81),this[_0xf9e4aa(0xa3)]();},_0x6b3f81[_0x554052(0x138)]=_0x578779=>{var _0x1566a4=_0x554052;try{if(!(_0x578779!=null&&_0x578779['data'])||!this[_0x1566a4(0x13b)])return;let _0x29ac27=JSON[_0x1566a4(0xf7)](_0x578779['data']);this[_0x1566a4(0x13b)](_0x29ac27[_0x1566a4(0x135)],_0x29ac27[_0x1566a4(0x11a)],this[_0x1566a4(0xfd)],this['_inBrowser']);}catch{}};})[_0x24cad1(0x10e)](_0xe53a06=>(this[_0x24cad1(0x184)]=!0x0,this[_0x24cad1(0x170)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x24cad1(0x158)]=!0x0,this[_0x24cad1(0x131)]=0x0,_0xe53a06))[_0x24cad1(0xe8)](_0x50ee7b=>(this[_0x24cad1(0x184)]=!0x1,this[_0x24cad1(0x170)]=!0x1,console[_0x24cad1(0xee)](_0x24cad1(0xab)+this['_webSocketErrorDocsLink']),_0x519ad0(new Error(_0x24cad1(0x149)+(_0x50ee7b&&_0x50ee7b[_0x24cad1(0x16f)])))));}));},z[_0x1c95b6(0xce)]['_disposeWebsocket']=function(_0x4b2605){var _0x47d2fc=_0x1c95b6;this[_0x47d2fc(0x184)]=!0x1,this[_0x47d2fc(0x170)]=!0x1;try{_0x4b2605['onclose']=null,_0x4b2605[_0x47d2fc(0x9f)]=null,_0x4b2605['onopen']=null;}catch{}try{_0x4b2605[_0x47d2fc(0x98)]<0x2&&_0x4b2605[_0x47d2fc(0x141)]();}catch{}},z['prototype'][_0x1c95b6(0xa3)]=function(){var _0x297488=_0x1c95b6;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x297488(0x15e)])&&(this[_0x297488(0x171)]=setTimeout(()=>{var _0x9d10ae=_0x297488,_0x2d2b3b;this[_0x9d10ae(0x184)]||this[_0x9d10ae(0x170)]||(this[_0x9d10ae(0x130)](),(_0x2d2b3b=this[_0x9d10ae(0x116)])==null||_0x2d2b3b[_0x9d10ae(0xe8)](()=>this[_0x9d10ae(0xa3)]()));},0x1f4),this[_0x297488(0x171)]['unref']&&this[_0x297488(0x171)]['unref']());},z[_0x1c95b6(0xce)]['send']=async function(_0x10b090){var _0x1a97bb=_0x1c95b6;try{if(!this[_0x1a97bb(0x158)])return;this['_allowedToConnectOnSend']&&this[_0x1a97bb(0x130)](),(await this[_0x1a97bb(0x116)])[_0x1a97bb(0x111)](JSON[_0x1a97bb(0xe4)](_0x10b090));}catch(_0x3c9e5c){this[_0x1a97bb(0x186)]?console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x3c9e5c&&_0x3c9e5c[_0x1a97bb(0x16f)])):(this['_extendedWarning']=!0x0,console['warn'](this[_0x1a97bb(0xe7)]+':\\x20'+(_0x3c9e5c&&_0x3c9e5c[_0x1a97bb(0x16f)]),_0x10b090)),this[_0x1a97bb(0x158)]=!0x1,this[_0x1a97bb(0xa3)]();}};function _0x59f2(_0x28568d,_0x53d08b){var _0x4329f7=_0x4329();return _0x59f2=function(_0x59f2f3,_0x4671cc){_0x59f2f3=_0x59f2f3-0x97;var _0x1f9ecb=_0x4329f7[_0x59f2f3];return _0x1f9ecb;},_0x59f2(_0x28568d,_0x53d08b);}function H(_0xe3741b,_0x4ae31c,_0x4795ef,_0x338323,_0x49b65b,_0x2f9168,_0xd371c0,_0x12d422=ne){var _0x39f6a3=_0x1c95b6;let _0x4ed75c=_0x4795ef[_0x39f6a3(0xb1)](',')[_0x39f6a3(0xa0)](_0x443699=>{var _0x525713=_0x39f6a3,_0x595aa9,_0x1d39d2,_0x22466f,_0xfbcdfa,_0x140c68,_0x1b0227,_0x5d0369,_0x490733;try{if(!_0xe3741b['_console_ninja_session']){let _0x7836b8=((_0x1d39d2=(_0x595aa9=_0xe3741b[_0x525713(0xdb)])==null?void 0x0:_0x595aa9[_0x525713(0x134)])==null?void 0x0:_0x1d39d2[_0x525713(0x168)])||((_0xfbcdfa=(_0x22466f=_0xe3741b[_0x525713(0xdb)])==null?void 0x0:_0x22466f['env'])==null?void 0x0:_0xfbcdfa['NEXT_RUNTIME'])===_0x525713(0x17d);(_0x49b65b===_0x525713(0x12c)||_0x49b65b===_0x525713(0x199)||_0x49b65b===_0x525713(0x114)||_0x49b65b===_0x525713(0xd1))&&(_0x49b65b+=_0x7836b8?'\\x20server':'\\x20browser');let _0x58eb55='';_0x49b65b===_0x525713(0x14e)&&(_0x58eb55=(((_0x5d0369=(_0x1b0227=(_0x140c68=_0xe3741b['expo'])==null?void 0x0:_0x140c68[_0x525713(0x191)])==null?void 0x0:_0x1b0227[_0x525713(0x180)])==null?void 0x0:_0x5d0369[_0x525713(0x188)])||'emulator')['toLowerCase'](),_0x58eb55&&(_0x49b65b+='\\x20'+_0x58eb55,(_0x58eb55===_0x525713(0x157)||_0x58eb55===_0x525713(0xb6)&&((_0x490733=_0xe3741b[_0x525713(0x165)])==null?void 0x0:_0x490733[_0x525713(0x160)])===_0x525713(0x12e))&&(_0x4ae31c=_0x525713(0x12e)))),_0xe3741b[_0x525713(0xaa)]={'id':+new Date(),'tool':_0x49b65b},_0xd371c0&&_0x49b65b&&!_0x7836b8&&(_0x58eb55?console['log'](_0x525713(0xd7)+_0x58eb55+_0x525713(0xa4)):console[_0x525713(0xf0)](_0x525713(0x97)+(_0x49b65b['charAt'](0x0)[_0x525713(0xd4)]()+_0x49b65b['substr'](0x1))+',',_0x525713(0x121),_0x525713(0x175)));}let _0x474d19=new z(_0xe3741b,_0x4ae31c,_0x443699,_0x338323,_0x2f9168,_0x12d422);return _0x474d19[_0x525713(0x111)][_0x525713(0x145)](_0x474d19);}catch(_0x454646){return console[_0x525713(0xee)](_0x525713(0xf1),_0x454646&&_0x454646[_0x525713(0x16f)]),()=>{};}});return _0x53f3f2=>_0x4ed75c['forEach'](_0x4483b4=>_0x4483b4(_0x53f3f2));}function ne(_0x465c6d,_0x5c195e,_0x4519b8,_0x37d837){var _0x499ec3=_0x1c95b6;_0x37d837&&_0x465c6d===_0x499ec3(0x154)&&_0x4519b8[_0x499ec3(0x165)]['reload']();}function b(_0x4cbbf0){var _0x23c718=_0x1c95b6,_0x2bf60a,_0x25d92a;let _0x1d71da=function(_0x3e8ed4,_0x5968f0){return _0x5968f0-_0x3e8ed4;},_0x41a166;if(_0x4cbbf0['performance'])_0x41a166=function(){var _0x2c4335=_0x59f2;return _0x4cbbf0[_0x2c4335(0x193)]['now']();};else{if(_0x4cbbf0[_0x23c718(0xdb)]&&_0x4cbbf0[_0x23c718(0xdb)]['hrtime']&&((_0x25d92a=(_0x2bf60a=_0x4cbbf0[_0x23c718(0xdb)])==null?void 0x0:_0x2bf60a[_0x23c718(0x14c)])==null?void 0x0:_0x25d92a[_0x23c718(0xa7)])!==_0x23c718(0x17d))_0x41a166=function(){var _0x311ffb=_0x23c718;return _0x4cbbf0[_0x311ffb(0xdb)][_0x311ffb(0xf8)]();},_0x1d71da=function(_0x5ea6bc,_0x468ab0){return 0x3e8*(_0x468ab0[0x0]-_0x5ea6bc[0x0])+(_0x468ab0[0x1]-_0x5ea6bc[0x1])/0xf4240;};else try{let {performance:_0x2119aa}=require('perf_hooks');_0x41a166=function(){var _0x28d818=_0x23c718;return _0x2119aa[_0x28d818(0xfa)]();};}catch{_0x41a166=function(){return+new Date();};}}return{'elapsed':_0x1d71da,'timeStamp':_0x41a166,'now':()=>Date[_0x23c718(0xfa)]()};}function X(_0x97309f,_0x1f17ac,_0xbf4aa4){var _0x30fe92=_0x1c95b6,_0xa4e4e3,_0x263072,_0x12dbc0,_0x5917b6,_0x2364ca,_0x3fece5,_0xf9da17;if(_0x97309f['_consoleNinjaAllowedToStart']!==void 0x0)return _0x97309f[_0x30fe92(0xd2)];let _0x54ee94=((_0x263072=(_0xa4e4e3=_0x97309f[_0x30fe92(0xdb)])==null?void 0x0:_0xa4e4e3[_0x30fe92(0x134)])==null?void 0x0:_0x263072[_0x30fe92(0x168)])||((_0x5917b6=(_0x12dbc0=_0x97309f['process'])==null?void 0x0:_0x12dbc0[_0x30fe92(0x14c)])==null?void 0x0:_0x5917b6[_0x30fe92(0xa7)])===_0x30fe92(0x17d),_0x530d32=!!(_0xbf4aa4==='react-native'&&((_0x2364ca=_0x97309f['expo'])==null?void 0x0:_0x2364ca[_0x30fe92(0x191)]));function _0x1a7d18(_0x270eca){var _0x4d4e58=_0x30fe92;if(_0x270eca[_0x4d4e58(0x10f)]('/')&&_0x270eca[_0x4d4e58(0xbf)]('/')){let _0x3d6a25=new RegExp(_0x270eca[_0x4d4e58(0x17c)](0x1,-0x1));return _0x36d331=>_0x3d6a25[_0x4d4e58(0x16c)](_0x36d331);}else{if(_0x270eca['includes']('*')||_0x270eca[_0x4d4e58(0x192)]('?')){let _0x2ccf54=new RegExp('^'+_0x270eca['replace'](/\\./g,String[_0x4d4e58(0x19b)](0x5c)+'.')[_0x4d4e58(0x197)](/\\*/g,'.*')['replace'](/\\?/g,'.')+String['fromCharCode'](0x24));return _0x534ac4=>_0x2ccf54['test'](_0x534ac4);}else return _0x435cc0=>_0x435cc0===_0x270eca;}}let _0x32a484=_0x1f17ac['map'](_0x1a7d18);return _0x97309f[_0x30fe92(0xd2)]=_0x54ee94||!_0x1f17ac,!_0x97309f['_consoleNinjaAllowedToStart']&&((_0x3fece5=_0x97309f['location'])==null?void 0x0:_0x3fece5[_0x30fe92(0x160)])&&(_0x97309f[_0x30fe92(0xd2)]=_0x32a484['some'](_0x26867f=>_0x26867f(_0x97309f[_0x30fe92(0x165)][_0x30fe92(0x160)]))),_0x530d32&&!_0x97309f['_consoleNinjaAllowedToStart']&&!((_0xf9da17=_0x97309f[_0x30fe92(0x165)])!=null&&_0xf9da17[_0x30fe92(0x160)])&&(_0x97309f[_0x30fe92(0xd2)]=!0x0),_0x97309f['_consoleNinjaAllowedToStart'];}function J(_0x482c58,_0x1a603d,_0x3af3bf,_0x164182,_0x10050f,_0x22fbfb){var _0x277e4f=_0x1c95b6;_0x482c58=_0x482c58,_0x1a603d=_0x1a603d,_0x3af3bf=_0x3af3bf,_0x164182=_0x164182,_0x10050f=_0x10050f,_0x10050f=_0x10050f||{},_0x10050f[_0x277e4f(0x164)]=_0x10050f['defaultLimits']||{},_0x10050f['reducedLimits']=_0x10050f[_0x277e4f(0xb9)]||{},_0x10050f[_0x277e4f(0x19c)]=_0x10050f[_0x277e4f(0x19c)]||{},_0x10050f['reducePolicy'][_0x277e4f(0x173)]=_0x10050f[_0x277e4f(0x19c)][_0x277e4f(0x173)]||{},_0x10050f['reducePolicy'][_0x277e4f(0xfd)]=_0x10050f[_0x277e4f(0x19c)][_0x277e4f(0xfd)]||{};let _0x4c41bf={'perLogpoint':{'reduceOnCount':_0x10050f[_0x277e4f(0x19c)]['perLogpoint'][_0x277e4f(0x137)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x10050f['reducePolicy']['perLogpoint'][_0x277e4f(0xdc)]||0x64,'resetWhenQuietMs':_0x10050f['reducePolicy'][_0x277e4f(0x173)]['resetWhenQuietMs']||0x1f4,'resetOnProcessingTimeAverageMs':_0x10050f[_0x277e4f(0x19c)][_0x277e4f(0x173)][_0x277e4f(0x14f)]||0x64},'global':{'reduceOnCount':_0x10050f['reducePolicy'][_0x277e4f(0xfd)][_0x277e4f(0x137)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x10050f['reducePolicy'][_0x277e4f(0xfd)][_0x277e4f(0xdc)]||0x12c,'resetWhenQuietMs':_0x10050f[_0x277e4f(0x19c)]['global']['resetWhenQuietMs']||0x32,'resetOnProcessingTimeAverageMs':_0x10050f[_0x277e4f(0x19c)][_0x277e4f(0xfd)]['resetOnProcessingTimeAverageMs']||0x64}},_0x293e98=b(_0x482c58),_0x33f35a=_0x293e98['elapsed'],_0x1dc329=_0x293e98[_0x277e4f(0xef)];function _0x2fae0c(){var _0x3a2321=_0x277e4f;this[_0x3a2321(0x17b)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x3a2321(0x15a)]=/'([^\\\\']|\\\\')*'/,this[_0x3a2321(0x106)]=_0x482c58['undefined'],this[_0x3a2321(0x10b)]=_0x482c58[_0x3a2321(0xec)],this['_getOwnPropertyDescriptor']=Object[_0x3a2321(0x103)],this['_getOwnPropertyNames']=Object[_0x3a2321(0xdf)],this['_Symbol']=_0x482c58[_0x3a2321(0x12a)],this['_regExpToString']=RegExp[_0x3a2321(0xce)][_0x3a2321(0xc8)],this[_0x3a2321(0x143)]=Date[_0x3a2321(0xce)][_0x3a2321(0xc8)];}_0x2fae0c[_0x277e4f(0xce)]['serialize']=function(_0x3d4e06,_0x4381b7,_0x2d8baa,_0x4bf88f){var _0x44631d=_0x277e4f,_0x2f79cb=this,_0x2f171f=_0x2d8baa[_0x44631d(0x139)];function _0x55de05(_0x45bebe,_0x1a5c4c,_0x50ebec){var _0x4e3c49=_0x44631d;_0x1a5c4c[_0x4e3c49(0x119)]=_0x4e3c49(0xe6),_0x1a5c4c['error']=_0x45bebe[_0x4e3c49(0x16f)],_0x12cb1b=_0x50ebec[_0x4e3c49(0x168)]['current'],_0x50ebec[_0x4e3c49(0x168)][_0x4e3c49(0xc1)]=_0x1a5c4c,_0x2f79cb[_0x4e3c49(0xde)](_0x1a5c4c,_0x50ebec);}let _0x46a07e,_0x452e4f,_0x20fa09=_0x482c58[_0x44631d(0x177)];_0x482c58[_0x44631d(0x177)]=!0x0,_0x482c58['console']&&(_0x46a07e=_0x482c58['console'][_0x44631d(0xf4)],_0x452e4f=_0x482c58[_0x44631d(0xf3)][_0x44631d(0xee)],_0x46a07e&&(_0x482c58[_0x44631d(0xf3)]['error']=function(){}),_0x452e4f&&(_0x482c58['console']['warn']=function(){}));try{try{_0x2d8baa[_0x44631d(0x107)]++,_0x2d8baa[_0x44631d(0x139)]&&_0x2d8baa[_0x44631d(0x11e)]['push'](_0x4381b7);var _0x54a5e9,_0x963611,_0x17d615,_0x348737,_0x2becc2=[],_0x314ea7=[],_0x2faeef,_0x22f2d7=this[_0x44631d(0x105)](_0x4381b7),_0x4c415c=_0x22f2d7===_0x44631d(0x190),_0xa12098=!0x1,_0x1af4ca=_0x22f2d7===_0x44631d(0x189),_0x13da75=this[_0x44631d(0x11f)](_0x22f2d7),_0x337d3d=this[_0x44631d(0xfc)](_0x22f2d7),_0x131fd5=_0x13da75||_0x337d3d,_0x8c2a7={},_0xb7b21a=0x0,_0x2abc35=!0x1,_0x12cb1b,_0x4576b8=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2d8baa['depth']){if(_0x4c415c){if(_0x963611=_0x4381b7['length'],_0x963611>_0x2d8baa[_0x44631d(0x194)]){for(_0x17d615=0x0,_0x348737=_0x2d8baa[_0x44631d(0x194)],_0x54a5e9=_0x17d615;_0x54a5e9<_0x348737;_0x54a5e9++)_0x314ea7[_0x44631d(0xd3)](_0x2f79cb[_0x44631d(0xc0)](_0x2becc2,_0x4381b7,_0x22f2d7,_0x54a5e9,_0x2d8baa));_0x3d4e06[_0x44631d(0x9a)]=!0x0;}else{for(_0x17d615=0x0,_0x348737=_0x963611,_0x54a5e9=_0x17d615;_0x54a5e9<_0x348737;_0x54a5e9++)_0x314ea7[_0x44631d(0xd3)](_0x2f79cb['_addProperty'](_0x2becc2,_0x4381b7,_0x22f2d7,_0x54a5e9,_0x2d8baa));}_0x2d8baa[_0x44631d(0xb2)]+=_0x314ea7['length'];}if(!(_0x22f2d7===_0x44631d(0x166)||_0x22f2d7===_0x44631d(0xa5))&&!_0x13da75&&_0x22f2d7!==_0x44631d(0xfe)&&_0x22f2d7!=='Buffer'&&_0x22f2d7!==_0x44631d(0x9d)){var _0x16d665=_0x4bf88f[_0x44631d(0xed)]||_0x2d8baa[_0x44631d(0xed)];if(this['_isSet'](_0x4381b7)?(_0x54a5e9=0x0,_0x4381b7[_0x44631d(0xd9)](function(_0x10a48e){var _0x279f6c=_0x44631d;if(_0xb7b21a++,_0x2d8baa[_0x279f6c(0xb2)]++,_0xb7b21a>_0x16d665){_0x2abc35=!0x0;return;}if(!_0x2d8baa[_0x279f6c(0x198)]&&_0x2d8baa[_0x279f6c(0x139)]&&_0x2d8baa['autoExpandPropertyCount']>_0x2d8baa['autoExpandLimit']){_0x2abc35=!0x0;return;}_0x314ea7[_0x279f6c(0xd3)](_0x2f79cb['_addProperty'](_0x2becc2,_0x4381b7,_0x279f6c(0xf6),_0x54a5e9++,_0x2d8baa,function(_0x2d46b7){return function(){return _0x2d46b7;};}(_0x10a48e)));})):this[_0x44631d(0x19a)](_0x4381b7)&&_0x4381b7[_0x44631d(0xd9)](function(_0x17bf05,_0x3611ba){var _0x18d10a=_0x44631d;if(_0xb7b21a++,_0x2d8baa[_0x18d10a(0xb2)]++,_0xb7b21a>_0x16d665){_0x2abc35=!0x0;return;}if(!_0x2d8baa[_0x18d10a(0x198)]&&_0x2d8baa[_0x18d10a(0x139)]&&_0x2d8baa[_0x18d10a(0xb2)]>_0x2d8baa[_0x18d10a(0xd0)]){_0x2abc35=!0x0;return;}var _0x36013d=_0x3611ba[_0x18d10a(0xc8)]();_0x36013d['length']>0x64&&(_0x36013d=_0x36013d[_0x18d10a(0x17c)](0x0,0x64)+'...'),_0x314ea7['push'](_0x2f79cb[_0x18d10a(0xc0)](_0x2becc2,_0x4381b7,'Map',_0x36013d,_0x2d8baa,function(_0x55e2c0){return function(){return _0x55e2c0;};}(_0x17bf05)));}),!_0xa12098){try{for(_0x2faeef in _0x4381b7)if(!(_0x4c415c&&_0x4576b8[_0x44631d(0x16c)](_0x2faeef))&&!this[_0x44631d(0x16d)](_0x4381b7,_0x2faeef,_0x2d8baa)){if(_0xb7b21a++,_0x2d8baa[_0x44631d(0xb2)]++,_0xb7b21a>_0x16d665){_0x2abc35=!0x0;break;}if(!_0x2d8baa['isExpressionToEvaluate']&&_0x2d8baa[_0x44631d(0x139)]&&_0x2d8baa[_0x44631d(0xb2)]>_0x2d8baa[_0x44631d(0xd0)]){_0x2abc35=!0x0;break;}_0x314ea7['push'](_0x2f79cb[_0x44631d(0x185)](_0x2becc2,_0x8c2a7,_0x4381b7,_0x22f2d7,_0x2faeef,_0x2d8baa));}}catch{}if(_0x8c2a7[_0x44631d(0x104)]=!0x0,_0x1af4ca&&(_0x8c2a7['_p_name']=!0x0),!_0x2abc35){var _0x5cc5f2=[][_0x44631d(0x181)](this[_0x44631d(0x16b)](_0x4381b7))[_0x44631d(0x181)](this[_0x44631d(0x18e)](_0x4381b7));for(_0x54a5e9=0x0,_0x963611=_0x5cc5f2[_0x44631d(0x17f)];_0x54a5e9<_0x963611;_0x54a5e9++)if(_0x2faeef=_0x5cc5f2[_0x54a5e9],!(_0x4c415c&&_0x4576b8[_0x44631d(0x16c)](_0x2faeef[_0x44631d(0xc8)]()))&&!this[_0x44631d(0x16d)](_0x4381b7,_0x2faeef,_0x2d8baa)&&!_0x8c2a7[typeof _0x2faeef!='symbol'?_0x44631d(0x19d)+_0x2faeef[_0x44631d(0xc8)]():_0x2faeef]){if(_0xb7b21a++,_0x2d8baa[_0x44631d(0xb2)]++,_0xb7b21a>_0x16d665){_0x2abc35=!0x0;break;}if(!_0x2d8baa[_0x44631d(0x198)]&&_0x2d8baa[_0x44631d(0x139)]&&_0x2d8baa[_0x44631d(0xb2)]>_0x2d8baa['autoExpandLimit']){_0x2abc35=!0x0;break;}_0x314ea7[_0x44631d(0xd3)](_0x2f79cb[_0x44631d(0x185)](_0x2becc2,_0x8c2a7,_0x4381b7,_0x22f2d7,_0x2faeef,_0x2d8baa));}}}}}if(_0x3d4e06[_0x44631d(0x119)]=_0x22f2d7,_0x131fd5?(_0x3d4e06['value']=_0x4381b7[_0x44631d(0xff)](),this[_0x44631d(0x118)](_0x22f2d7,_0x3d4e06,_0x2d8baa,_0x4bf88f)):_0x22f2d7==='date'?_0x3d4e06[_0x44631d(0x102)]=this[_0x44631d(0x143)][_0x44631d(0x144)](_0x4381b7):_0x22f2d7===_0x44631d(0x9d)?_0x3d4e06['value']=_0x4381b7[_0x44631d(0xc8)]():_0x22f2d7===_0x44631d(0x10c)?_0x3d4e06['value']=this[_0x44631d(0x151)][_0x44631d(0x144)](_0x4381b7):_0x22f2d7===_0x44631d(0x100)&&this['_Symbol']?_0x3d4e06['value']=this['_Symbol'][_0x44631d(0xce)][_0x44631d(0xc8)][_0x44631d(0x144)](_0x4381b7):!_0x2d8baa['depth']&&!(_0x22f2d7===_0x44631d(0x166)||_0x22f2d7===_0x44631d(0xa5))&&(delete _0x3d4e06[_0x44631d(0x102)],_0x3d4e06[_0x44631d(0xf9)]=!0x0),_0x2abc35&&(_0x3d4e06['cappedProps']=!0x0),_0x12cb1b=_0x2d8baa[_0x44631d(0x168)]['current'],_0x2d8baa['node']['current']=_0x3d4e06,this[_0x44631d(0xde)](_0x3d4e06,_0x2d8baa),_0x314ea7['length']){for(_0x54a5e9=0x0,_0x963611=_0x314ea7[_0x44631d(0x17f)];_0x54a5e9<_0x963611;_0x54a5e9++)_0x314ea7[_0x54a5e9](_0x54a5e9);}_0x2becc2[_0x44631d(0x17f)]&&(_0x3d4e06[_0x44631d(0xed)]=_0x2becc2);}catch(_0x27b5d3){_0x55de05(_0x27b5d3,_0x3d4e06,_0x2d8baa);}this[_0x44631d(0x16e)](_0x4381b7,_0x3d4e06),this[_0x44631d(0x109)](_0x3d4e06,_0x2d8baa),_0x2d8baa['node']['current']=_0x12cb1b,_0x2d8baa[_0x44631d(0x107)]--,_0x2d8baa[_0x44631d(0x139)]=_0x2f171f,_0x2d8baa[_0x44631d(0x139)]&&_0x2d8baa[_0x44631d(0x11e)][_0x44631d(0x9b)]();}finally{_0x46a07e&&(_0x482c58[_0x44631d(0xf3)][_0x44631d(0xf4)]=_0x46a07e),_0x452e4f&&(_0x482c58[_0x44631d(0xf3)][_0x44631d(0xee)]=_0x452e4f),_0x482c58['ninjaSuppressConsole']=_0x20fa09;}return _0x3d4e06;},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x18e)]=function(_0x256dd5){var _0x5f56f6=_0x277e4f;return Object[_0x5f56f6(0x15d)]?Object[_0x5f56f6(0x15d)](_0x256dd5):[];},_0x2fae0c[_0x277e4f(0xce)]['_isSet']=function(_0x4d9a38){var _0x30846f=_0x277e4f;return!!(_0x4d9a38&&_0x482c58[_0x30846f(0xf6)]&&this['_objectToString'](_0x4d9a38)===_0x30846f(0xea)&&_0x4d9a38['forEach']);},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x16d)]=function(_0x382cd3,_0x184eb7,_0xdc6a55){var _0x1835e0=_0x277e4f;if(!_0xdc6a55[_0x1835e0(0x11d)]){let _0xd27415=this[_0x1835e0(0xd6)](_0x382cd3,_0x184eb7);if(_0xd27415&&_0xd27415[_0x1835e0(0x147)])return!0x0;}return _0xdc6a55[_0x1835e0(0xbe)]?typeof _0x382cd3[_0x184eb7]==_0x1835e0(0x189):!0x1;},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x105)]=function(_0x2ed968){var _0x56911e=_0x277e4f,_0x298213='';return _0x298213=typeof _0x2ed968,_0x298213===_0x56911e(0xca)?this[_0x56911e(0xb8)](_0x2ed968)===_0x56911e(0x17a)?_0x298213=_0x56911e(0x190):this[_0x56911e(0xb8)](_0x2ed968)===_0x56911e(0x167)?_0x298213=_0x56911e(0xc7):this[_0x56911e(0xb8)](_0x2ed968)==='[object\\x20BigInt]'?_0x298213=_0x56911e(0x9d):_0x2ed968===null?_0x298213=_0x56911e(0x166):_0x2ed968['constructor']&&(_0x298213=_0x2ed968['constructor'][_0x56911e(0xb4)]||_0x298213):_0x298213===_0x56911e(0xa5)&&this[_0x56911e(0x10b)]&&_0x2ed968 instanceof this[_0x56911e(0x10b)]&&(_0x298213=_0x56911e(0xec)),_0x298213;},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0xb8)]=function(_0x592fda){var _0x1c4cce=_0x277e4f;return Object[_0x1c4cce(0xce)]['toString']['call'](_0x592fda);},_0x2fae0c['prototype'][_0x277e4f(0x11f)]=function(_0xff078f){var _0x10eb61=_0x277e4f;return _0xff078f===_0x10eb61(0x195)||_0xff078f===_0x10eb61(0x156)||_0xff078f===_0x10eb61(0x112);},_0x2fae0c[_0x277e4f(0xce)]['_isPrimitiveWrapperType']=function(_0x17228f){var _0x2db15e=_0x277e4f;return _0x17228f===_0x2db15e(0x14d)||_0x17228f===_0x2db15e(0xfe)||_0x17228f===_0x2db15e(0x99);},_0x2fae0c[_0x277e4f(0xce)]['_addProperty']=function(_0x325aa1,_0x179d8b,_0x131008,_0x3d1596,_0x4ad49c,_0x4448e6){var _0x1ec002=this;return function(_0x53bfbd){var _0x483a87=_0x59f2,_0x346b8b=_0x4ad49c[_0x483a87(0x168)][_0x483a87(0xc1)],_0x3cb8b2=_0x4ad49c[_0x483a87(0x168)]['index'],_0x5cae7b=_0x4ad49c[_0x483a87(0x168)][_0x483a87(0xa1)];_0x4ad49c['node'][_0x483a87(0xa1)]=_0x346b8b,_0x4ad49c[_0x483a87(0x168)][_0x483a87(0x120)]=typeof _0x3d1596==_0x483a87(0x112)?_0x3d1596:_0x53bfbd,_0x325aa1[_0x483a87(0xd3)](_0x1ec002['_property'](_0x179d8b,_0x131008,_0x3d1596,_0x4ad49c,_0x4448e6)),_0x4ad49c[_0x483a87(0x168)][_0x483a87(0xa1)]=_0x5cae7b,_0x4ad49c[_0x483a87(0x168)][_0x483a87(0x120)]=_0x3cb8b2;};},_0x2fae0c['prototype'][_0x277e4f(0x185)]=function(_0x3d16a7,_0xf69405,_0x400d39,_0x4fb87a,_0x3358d9,_0x192219,_0x4e200f){var _0x12f539=_0x277e4f,_0x58395f=this;return _0xf69405[typeof _0x3358d9!=_0x12f539(0x100)?_0x12f539(0x19d)+_0x3358d9['toString']():_0x3358d9]=!0x0,function(_0x64e96f){var _0xc053b0=_0x12f539,_0xc5d962=_0x192219[_0xc053b0(0x168)][_0xc053b0(0xc1)],_0x82810=_0x192219[_0xc053b0(0x168)][_0xc053b0(0x120)],_0x5b95f8=_0x192219[_0xc053b0(0x168)]['parent'];_0x192219[_0xc053b0(0x168)][_0xc053b0(0xa1)]=_0xc5d962,_0x192219['node'][_0xc053b0(0x120)]=_0x64e96f,_0x3d16a7['push'](_0x58395f['_property'](_0x400d39,_0x4fb87a,_0x3358d9,_0x192219,_0x4e200f)),_0x192219[_0xc053b0(0x168)][_0xc053b0(0xa1)]=_0x5b95f8,_0x192219[_0xc053b0(0x168)][_0xc053b0(0x120)]=_0x82810;};},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x169)]=function(_0x19826b,_0x25c535,_0x3ab11e,_0x44376f,_0x595da3){var _0x39c7c0=_0x277e4f,_0x2d0413=this;_0x595da3||(_0x595da3=function(_0x4e1e01,_0x3ad23d){return _0x4e1e01[_0x3ad23d];});var _0x3a1d81=_0x3ab11e['toString'](),_0x41f6c4=_0x44376f['expressionsToEvaluate']||{},_0x126a20=_0x44376f['depth'],_0x43399d=_0x44376f[_0x39c7c0(0x198)];try{var _0x4df445=this[_0x39c7c0(0x19a)](_0x19826b),_0x55d53b=_0x3a1d81;_0x4df445&&_0x55d53b[0x0]==='\\x27'&&(_0x55d53b=_0x55d53b['substr'](0x1,_0x55d53b[_0x39c7c0(0x17f)]-0x2));var _0x55dd04=_0x44376f[_0x39c7c0(0xdd)]=_0x41f6c4[_0x39c7c0(0x19d)+_0x55d53b];_0x55dd04&&(_0x44376f['depth']=_0x44376f[_0x39c7c0(0xa9)]+0x1),_0x44376f['isExpressionToEvaluate']=!!_0x55dd04;var _0x4e10bc=typeof _0x3ab11e==_0x39c7c0(0x100),_0x1632da={'name':_0x4e10bc||_0x4df445?_0x3a1d81:this[_0x39c7c0(0x129)](_0x3a1d81)};if(_0x4e10bc&&(_0x1632da[_0x39c7c0(0x100)]=!0x0),!(_0x25c535===_0x39c7c0(0x190)||_0x25c535==='Error')){var _0x5496e2=this['_getOwnPropertyDescriptor'](_0x19826b,_0x3ab11e);if(_0x5496e2&&(_0x5496e2[_0x39c7c0(0x115)]&&(_0x1632da['setter']=!0x0),_0x5496e2[_0x39c7c0(0x147)]&&!_0x55dd04&&!_0x44376f[_0x39c7c0(0x11d)]))return _0x1632da[_0x39c7c0(0xa6)]=!0x0,this['_processTreeNodeResult'](_0x1632da,_0x44376f),_0x1632da;}var _0x19c6dc;try{_0x19c6dc=_0x595da3(_0x19826b,_0x3ab11e);}catch(_0xffbbaf){return _0x1632da={'name':_0x3a1d81,'type':'unknown','error':_0xffbbaf['message']},this[_0x39c7c0(0x108)](_0x1632da,_0x44376f),_0x1632da;}var _0x14edd4=this[_0x39c7c0(0x105)](_0x19c6dc),_0x4b73fc=this[_0x39c7c0(0x11f)](_0x14edd4);if(_0x1632da['type']=_0x14edd4,_0x4b73fc)this['_processTreeNodeResult'](_0x1632da,_0x44376f,_0x19c6dc,function(){var _0x178896=_0x39c7c0;_0x1632da['value']=_0x19c6dc[_0x178896(0xff)](),!_0x55dd04&&_0x2d0413[_0x178896(0x118)](_0x14edd4,_0x1632da,_0x44376f,{});});else{var _0x846a55=_0x44376f[_0x39c7c0(0x139)]&&_0x44376f[_0x39c7c0(0x107)]<_0x44376f['autoExpandMaxDepth']&&_0x44376f[_0x39c7c0(0x11e)][_0x39c7c0(0xbb)](_0x19c6dc)<0x0&&_0x14edd4!=='function'&&_0x44376f['autoExpandPropertyCount']<_0x44376f[_0x39c7c0(0xd0)];_0x846a55||_0x44376f[_0x39c7c0(0x107)]<_0x126a20||_0x55dd04?this[_0x39c7c0(0xb0)](_0x1632da,_0x19c6dc,_0x44376f,_0x55dd04||{}):this[_0x39c7c0(0x108)](_0x1632da,_0x44376f,_0x19c6dc,function(){var _0x1f8f9d=_0x39c7c0;_0x14edd4===_0x1f8f9d(0x166)||_0x14edd4===_0x1f8f9d(0xa5)||(delete _0x1632da[_0x1f8f9d(0x102)],_0x1632da[_0x1f8f9d(0xf9)]=!0x0);});}return _0x1632da;}finally{_0x44376f[_0x39c7c0(0xdd)]=_0x41f6c4,_0x44376f[_0x39c7c0(0xa9)]=_0x126a20,_0x44376f[_0x39c7c0(0x198)]=_0x43399d;}},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x118)]=function(_0x5d5ed4,_0x406134,_0x3d2fa8,_0x2720a5){var _0x397679=_0x277e4f,_0x307088=_0x2720a5[_0x397679(0xc4)]||_0x3d2fa8['strLength'];if((_0x5d5ed4===_0x397679(0x156)||_0x5d5ed4===_0x397679(0xfe))&&_0x406134[_0x397679(0x102)]){let _0x554bcb=_0x406134[_0x397679(0x102)][_0x397679(0x17f)];_0x3d2fa8[_0x397679(0xe5)]+=_0x554bcb,_0x3d2fa8[_0x397679(0xe5)]>_0x3d2fa8['totalStrLength']?(_0x406134['capped']='',delete _0x406134['value']):_0x554bcb>_0x307088&&(_0x406134['capped']=_0x406134['value'][_0x397679(0x142)](0x0,_0x307088),delete _0x406134['value']);}},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x19a)]=function(_0x8bbd3c){var _0x1e3dc5=_0x277e4f;return!!(_0x8bbd3c&&_0x482c58['Map']&&this['_objectToString'](_0x8bbd3c)===_0x1e3dc5(0x161)&&_0x8bbd3c[_0x1e3dc5(0xd9)]);},_0x2fae0c[_0x277e4f(0xce)]['_propertyName']=function(_0xc5ea8a){var _0x4947b5=_0x277e4f;if(_0xc5ea8a[_0x4947b5(0x148)](/^\\d+$/))return _0xc5ea8a;var _0x369951;try{_0x369951=JSON[_0x4947b5(0xe4)](''+_0xc5ea8a);}catch{_0x369951='\\x22'+this[_0x4947b5(0xb8)](_0xc5ea8a)+'\\x22';}return _0x369951[_0x4947b5(0x148)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x369951=_0x369951[_0x4947b5(0x142)](0x1,_0x369951[_0x4947b5(0x17f)]-0x2):_0x369951=_0x369951[_0x4947b5(0x197)](/'/g,'\\x5c\\x27')[_0x4947b5(0x197)](/\\\\\"/g,'\\x22')[_0x4947b5(0x197)](/(^\"|\"$)/g,'\\x27'),_0x369951;},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x108)]=function(_0x331897,_0x4e7d1b,_0x431dd5,_0x1915e9){var _0x1eaec4=_0x277e4f;this[_0x1eaec4(0xde)](_0x331897,_0x4e7d1b),_0x1915e9&&_0x1915e9(),this[_0x1eaec4(0x16e)](_0x431dd5,_0x331897),this[_0x1eaec4(0x109)](_0x331897,_0x4e7d1b);},_0x2fae0c['prototype'][_0x277e4f(0xde)]=function(_0x5b8aa8,_0x29be75){var _0x21427a=_0x277e4f;this['_setNodeId'](_0x5b8aa8,_0x29be75),this[_0x21427a(0x113)](_0x5b8aa8,_0x29be75),this[_0x21427a(0x9e)](_0x5b8aa8,_0x29be75),this['_setNodePermissions'](_0x5b8aa8,_0x29be75);},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0xe1)]=function(_0x4e080b,_0x1a084e){},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x113)]=function(_0x4701f5,_0x9cb0a3){},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x172)]=function(_0x57f7bc,_0x3af7fd){},_0x2fae0c['prototype'][_0x277e4f(0x16a)]=function(_0x52a86a){var _0x178a87=_0x277e4f;return _0x52a86a===this[_0x178a87(0x106)];},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x109)]=function(_0x2a5698,_0x371260){var _0x268432=_0x277e4f;this[_0x268432(0x172)](_0x2a5698,_0x371260),this[_0x268432(0x133)](_0x2a5698),_0x371260['sortProps']&&this[_0x268432(0x18a)](_0x2a5698),this[_0x268432(0xb5)](_0x2a5698,_0x371260),this[_0x268432(0xc3)](_0x2a5698,_0x371260),this[_0x268432(0x187)](_0x2a5698);},_0x2fae0c['prototype'][_0x277e4f(0x16e)]=function(_0x334c28,_0x19c55f){var _0xa5f11e=_0x277e4f;try{_0x334c28&&typeof _0x334c28['length']==_0xa5f11e(0x112)&&(_0x19c55f[_0xa5f11e(0x17f)]=_0x334c28[_0xa5f11e(0x17f)]);}catch{}if(_0x19c55f['type']===_0xa5f11e(0x112)||_0x19c55f[_0xa5f11e(0x119)]==='Number'){if(isNaN(_0x19c55f['value']))_0x19c55f[_0xa5f11e(0x155)]=!0x0,delete _0x19c55f[_0xa5f11e(0x102)];else switch(_0x19c55f[_0xa5f11e(0x102)]){case Number['POSITIVE_INFINITY']:_0x19c55f['positiveInfinity']=!0x0,delete _0x19c55f[_0xa5f11e(0x102)];break;case Number[_0xa5f11e(0x117)]:_0x19c55f[_0xa5f11e(0x178)]=!0x0,delete _0x19c55f[_0xa5f11e(0x102)];break;case 0x0:this[_0xa5f11e(0xc6)](_0x19c55f['value'])&&(_0x19c55f[_0xa5f11e(0x123)]=!0x0);break;}}else _0x19c55f[_0xa5f11e(0x119)]==='function'&&typeof _0x334c28[_0xa5f11e(0xb4)]==_0xa5f11e(0x156)&&_0x334c28['name']&&_0x19c55f[_0xa5f11e(0xb4)]&&_0x334c28[_0xa5f11e(0xb4)]!==_0x19c55f['name']&&(_0x19c55f[_0xa5f11e(0x18f)]=_0x334c28[_0xa5f11e(0xb4)]);},_0x2fae0c['prototype']['_isNegativeZero']=function(_0x5a3cd8){return 0x1/_0x5a3cd8===Number['NEGATIVE_INFINITY'];},_0x2fae0c['prototype'][_0x277e4f(0x18a)]=function(_0x209a98){var _0x2d6438=_0x277e4f;!_0x209a98['props']||!_0x209a98['props']['length']||_0x209a98[_0x2d6438(0x119)]===_0x2d6438(0x190)||_0x209a98[_0x2d6438(0x119)]==='Map'||_0x209a98[_0x2d6438(0x119)]===_0x2d6438(0xf6)||_0x209a98['props'][_0x2d6438(0x126)](function(_0x4f7731,_0x418fd0){var _0x1e6015=_0x2d6438,_0x282174=_0x4f7731[_0x1e6015(0xb4)][_0x1e6015(0x12f)](),_0x5cd246=_0x418fd0[_0x1e6015(0xb4)][_0x1e6015(0x12f)]();return _0x282174<_0x5cd246?-0x1:_0x282174>_0x5cd246?0x1:0x0;});},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0xb5)]=function(_0x2936b6,_0x4e3a47){var _0x39df4a=_0x277e4f;if(!(_0x4e3a47[_0x39df4a(0xbe)]||!_0x2936b6[_0x39df4a(0xed)]||!_0x2936b6[_0x39df4a(0xed)][_0x39df4a(0x17f)])){for(var _0x3a7d28=[],_0x3932c8=[],_0x346617=0x0,_0x13f452=_0x2936b6[_0x39df4a(0xed)]['length'];_0x346617<_0x13f452;_0x346617++){var _0x1bd325=_0x2936b6[_0x39df4a(0xed)][_0x346617];_0x1bd325[_0x39df4a(0x119)]===_0x39df4a(0x189)?_0x3a7d28[_0x39df4a(0xd3)](_0x1bd325):_0x3932c8['push'](_0x1bd325);}if(!(!_0x3932c8[_0x39df4a(0x17f)]||_0x3a7d28[_0x39df4a(0x17f)]<=0x1)){_0x2936b6['props']=_0x3932c8;var _0x59c54b={'functionsNode':!0x0,'props':_0x3a7d28};this[_0x39df4a(0xe1)](_0x59c54b,_0x4e3a47),this[_0x39df4a(0x172)](_0x59c54b,_0x4e3a47),this[_0x39df4a(0x133)](_0x59c54b),this[_0x39df4a(0xfb)](_0x59c54b,_0x4e3a47),_0x59c54b['id']+='\\x20f',_0x2936b6['props']['unshift'](_0x59c54b);}}},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0xc3)]=function(_0x585e69,_0xd65202){},_0x2fae0c['prototype']['_setNodeExpandableState']=function(_0x589940){},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x176)]=function(_0x29740b){var _0x8fe98e=_0x277e4f;return Array['isArray'](_0x29740b)||typeof _0x29740b==_0x8fe98e(0xca)&&this[_0x8fe98e(0xb8)](_0x29740b)==='[object\\x20Array]';},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0xfb)]=function(_0x1b51f8,_0x2733e2){},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x187)]=function(_0x687098){var _0x26f394=_0x277e4f;delete _0x687098['_hasSymbolPropertyOnItsPath'],delete _0x687098[_0x26f394(0x162)],delete _0x687098['_hasMapOnItsPath'];},_0x2fae0c[_0x277e4f(0xce)][_0x277e4f(0x9e)]=function(_0x4a3905,_0x79bae8){};let _0x25b511=new _0x2fae0c(),_0x5f2f40={'props':_0x10050f[_0x277e4f(0x164)][_0x277e4f(0xed)]||0x64,'elements':_0x10050f[_0x277e4f(0x164)][_0x277e4f(0x194)]||0x64,'strLength':_0x10050f['defaultLimits'][_0x277e4f(0xc4)]||0x400*0x32,'totalStrLength':_0x10050f[_0x277e4f(0x164)][_0x277e4f(0x14a)]||0x400*0x32,'autoExpandLimit':_0x10050f[_0x277e4f(0x164)][_0x277e4f(0xd0)]||0x1388,'autoExpandMaxDepth':_0x10050f[_0x277e4f(0x164)][_0x277e4f(0x101)]||0xa},_0x5bc28c={'props':_0x10050f[_0x277e4f(0xb9)][_0x277e4f(0xed)]||0x5,'elements':_0x10050f[_0x277e4f(0xb9)][_0x277e4f(0x194)]||0x5,'strLength':_0x10050f[_0x277e4f(0xb9)]['strLength']||0x100,'totalStrLength':_0x10050f[_0x277e4f(0xb9)]['totalStrLength']||0x100*0x3,'autoExpandLimit':_0x10050f[_0x277e4f(0xb9)][_0x277e4f(0xd0)]||0x1e,'autoExpandMaxDepth':_0x10050f[_0x277e4f(0xb9)][_0x277e4f(0x101)]||0x2};if(_0x22fbfb){let _0x1a935c=_0x25b511[_0x277e4f(0xb0)][_0x277e4f(0x145)](_0x25b511);_0x25b511[_0x277e4f(0xb0)]=function(_0x23c40d,_0x566ac2,_0x2fa4ac,_0x1d6627){return _0x1a935c(_0x23c40d,_0x22fbfb(_0x566ac2),_0x2fa4ac,_0x1d6627);};}function _0x3c59e5(_0x1a936a,_0xb2ae39,_0x53f772,_0x99dd6,_0x47d8d2,_0x5561c9){var _0x3d66b5=_0x277e4f;let _0x19c0a0,_0xf7a90e;try{_0xf7a90e=_0x1dc329(),_0x19c0a0=_0x3af3bf[_0xb2ae39],!_0x19c0a0||_0xf7a90e-_0x19c0a0['ts']>_0x4c41bf['perLogpoint'][_0x3d66b5(0xd5)]&&_0x19c0a0[_0x3d66b5(0xe9)]&&_0x19c0a0[_0x3d66b5(0x14b)]/_0x19c0a0[_0x3d66b5(0xe9)]<_0x4c41bf[_0x3d66b5(0x173)][_0x3d66b5(0x14f)]?(_0x3af3bf[_0xb2ae39]=_0x19c0a0={'count':0x0,'time':0x0,'ts':_0xf7a90e},_0x3af3bf[_0x3d66b5(0x127)]={}):_0xf7a90e-_0x3af3bf[_0x3d66b5(0x127)]['ts']>_0x4c41bf[_0x3d66b5(0xfd)]['resetWhenQuietMs']&&_0x3af3bf[_0x3d66b5(0x127)][_0x3d66b5(0xe9)]&&_0x3af3bf[_0x3d66b5(0x127)][_0x3d66b5(0x14b)]/_0x3af3bf['hits'][_0x3d66b5(0xe9)]<_0x4c41bf['global'][_0x3d66b5(0x14f)]&&(_0x3af3bf[_0x3d66b5(0x127)]={});let _0x33e37=[],_0x3b019e=_0x19c0a0[_0x3d66b5(0x17e)]||_0x3af3bf[_0x3d66b5(0x127)]['reduceLimits']?_0x5bc28c:_0x5f2f40,_0x6df03e=_0xa3de0a=>{var _0x4ca78e=_0x3d66b5;let _0x3515b6={};return _0x3515b6[_0x4ca78e(0xed)]=_0xa3de0a[_0x4ca78e(0xed)],_0x3515b6[_0x4ca78e(0x194)]=_0xa3de0a[_0x4ca78e(0x194)],_0x3515b6[_0x4ca78e(0xc4)]=_0xa3de0a[_0x4ca78e(0xc4)],_0x3515b6[_0x4ca78e(0x14a)]=_0xa3de0a[_0x4ca78e(0x14a)],_0x3515b6[_0x4ca78e(0xd0)]=_0xa3de0a['autoExpandLimit'],_0x3515b6[_0x4ca78e(0x101)]=_0xa3de0a['autoExpandMaxDepth'],_0x3515b6[_0x4ca78e(0xad)]=!0x1,_0x3515b6[_0x4ca78e(0xbe)]=!_0x1a603d,_0x3515b6[_0x4ca78e(0xa9)]=0x1,_0x3515b6[_0x4ca78e(0x107)]=0x0,_0x3515b6[_0x4ca78e(0xd8)]=_0x4ca78e(0x110),_0x3515b6[_0x4ca78e(0x152)]=_0x4ca78e(0xc9),_0x3515b6[_0x4ca78e(0x139)]=!0x0,_0x3515b6[_0x4ca78e(0x11e)]=[],_0x3515b6[_0x4ca78e(0xb2)]=0x0,_0x3515b6[_0x4ca78e(0x11d)]=_0x10050f[_0x4ca78e(0x11d)],_0x3515b6['allStrLength']=0x0,_0x3515b6['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3515b6;};for(var _0x30fae4=0x0;_0x30fae4<_0x47d8d2[_0x3d66b5(0x17f)];_0x30fae4++)_0x33e37[_0x3d66b5(0xd3)](_0x25b511[_0x3d66b5(0xb0)]({'timeNode':_0x1a936a===_0x3d66b5(0x14b)||void 0x0},_0x47d8d2[_0x30fae4],_0x6df03e(_0x3b019e),{}));if(_0x1a936a===_0x3d66b5(0x15b)||_0x1a936a===_0x3d66b5(0xf4)){let _0x136956=Error[_0x3d66b5(0x9c)];try{Error[_0x3d66b5(0x9c)]=0x1/0x0,_0x33e37[_0x3d66b5(0xd3)](_0x25b511[_0x3d66b5(0xb0)]({'stackNode':!0x0},new Error()[_0x3d66b5(0x136)],_0x6df03e(_0x3b019e),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x136956;}}return{'method':_0x3d66b5(0xf0),'version':_0x164182,'args':[{'ts':_0x53f772,'session':_0x99dd6,'args':_0x33e37,'id':_0xb2ae39,'context':_0x5561c9}]};}catch(_0xd6c567){return{'method':_0x3d66b5(0xf0),'version':_0x164182,'args':[{'ts':_0x53f772,'session':_0x99dd6,'args':[{'type':_0x3d66b5(0xe6),'error':_0xd6c567&&_0xd6c567[_0x3d66b5(0x16f)]}],'id':_0xb2ae39,'context':_0x5561c9}]};}finally{try{if(_0x19c0a0&&_0xf7a90e){let _0x3b0c6e=_0x1dc329();_0x19c0a0['count']++,_0x19c0a0[_0x3d66b5(0x14b)]+=_0x33f35a(_0xf7a90e,_0x3b0c6e),_0x19c0a0['ts']=_0x3b0c6e,_0x3af3bf[_0x3d66b5(0x127)][_0x3d66b5(0xe9)]++,_0x3af3bf[_0x3d66b5(0x127)][_0x3d66b5(0x14b)]+=_0x33f35a(_0xf7a90e,_0x3b0c6e),_0x3af3bf[_0x3d66b5(0x127)]['ts']=_0x3b0c6e,(_0x19c0a0['count']>_0x4c41bf[_0x3d66b5(0x173)][_0x3d66b5(0x137)]||_0x19c0a0[_0x3d66b5(0x14b)]>_0x4c41bf[_0x3d66b5(0x173)][_0x3d66b5(0xdc)])&&(_0x19c0a0[_0x3d66b5(0x17e)]=!0x0),(_0x3af3bf[_0x3d66b5(0x127)]['count']>_0x4c41bf[_0x3d66b5(0xfd)][_0x3d66b5(0x137)]||_0x3af3bf['hits'][_0x3d66b5(0x14b)]>_0x4c41bf[_0x3d66b5(0xfd)][_0x3d66b5(0xdc)])&&(_0x3af3bf[_0x3d66b5(0x127)][_0x3d66b5(0x17e)]=!0x0);}}catch{}}}return _0x3c59e5;}function G(_0x1b1121){var _0x15ddf7=_0x1c95b6;if(_0x1b1121&&typeof _0x1b1121=='object'&&_0x1b1121[_0x15ddf7(0x183)])switch(_0x1b1121[_0x15ddf7(0x183)][_0x15ddf7(0xb4)]){case _0x15ddf7(0xc2):return _0x1b1121[_0x15ddf7(0x13e)](Symbol[_0x15ddf7(0x150)])?Promise[_0x15ddf7(0x124)]():_0x1b1121;case _0x15ddf7(0xaf):return Promise[_0x15ddf7(0x124)]();}return _0x1b1121;}((_0x2c3c31,_0x3ccdd0,_0xf49543,_0x3254ba,_0x32cc40,_0x3ef990,_0x26a98b,_0x577a5c,_0x431363,_0x4dd277,_0x4a4df0,_0x370729)=>{var _0x22672a=_0x1c95b6;if(_0x2c3c31[_0x22672a(0xbc)])return _0x2c3c31[_0x22672a(0xbc)];let _0x454561={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x2c3c31,_0x577a5c,_0x32cc40))return _0x2c3c31[_0x22672a(0xbc)]=_0x454561,_0x2c3c31['_console_ninja'];let _0x41883b=b(_0x2c3c31),_0x2f9954=_0x41883b[_0x22672a(0x128)],_0x30c286=_0x41883b[_0x22672a(0xef)],_0x3db84a=_0x41883b[_0x22672a(0xfa)],_0x4c75f3={'hits':{},'ts':{}},_0x2412f1=J(_0x2c3c31,_0x431363,_0x4c75f3,_0x3ef990,_0x370729,_0x32cc40===_0x22672a(0x12c)?G:void 0x0),_0x43161d=(_0x1bca05,_0x242667,_0x208051,_0x483cd5,_0x47e542,_0x4735e7)=>{var _0xd73c2d=_0x22672a;let _0x53c307=_0x2c3c31['_console_ninja'];try{return _0x2c3c31[_0xd73c2d(0xbc)]=_0x454561,_0x2412f1(_0x1bca05,_0x242667,_0x208051,_0x483cd5,_0x47e542,_0x4735e7);}finally{_0x2c3c31[_0xd73c2d(0xbc)]=_0x53c307;}},_0x20e1b3=_0x553730=>{_0x4c75f3['ts'][_0x553730]=_0x30c286();},_0x1df185=(_0x96b5ae,_0x228ba9)=>{var _0x38f2a9=_0x22672a;let _0x5044bf=_0x4c75f3['ts'][_0x228ba9];if(delete _0x4c75f3['ts'][_0x228ba9],_0x5044bf){let _0x462fdd=_0x2f9954(_0x5044bf,_0x30c286());_0x482bc1(_0x43161d(_0x38f2a9(0x14b),_0x96b5ae,_0x3db84a(),_0x4b7626,[_0x462fdd],_0x228ba9));}},_0xb8f9ba=_0x31539c=>{var _0x2e39c6=_0x22672a,_0x378d9b;return _0x32cc40==='next.js'&&_0x2c3c31[_0x2e39c6(0xbd)]&&((_0x378d9b=_0x31539c==null?void 0x0:_0x31539c[_0x2e39c6(0x11a)])==null?void 0x0:_0x378d9b['length'])&&(_0x31539c[_0x2e39c6(0x11a)][0x0][_0x2e39c6(0xbd)]=_0x2c3c31[_0x2e39c6(0xbd)]),_0x31539c;};_0x2c3c31['_console_ninja']={'consoleLog':(_0xea6f48,_0x4a43c2)=>{var _0x5f53d5=_0x22672a;_0x2c3c31['console'][_0x5f53d5(0xf0)][_0x5f53d5(0xb4)]!=='disabledLog'&&_0x482bc1(_0x43161d('log',_0xea6f48,_0x3db84a(),_0x4b7626,_0x4a43c2));},'consoleTrace':(_0x432c25,_0x10df0a)=>{var _0x59366c=_0x22672a,_0x112bb4,_0x368be5;_0x2c3c31[_0x59366c(0xf3)]['log'][_0x59366c(0xb4)]!=='disabledTrace'&&((_0x368be5=(_0x112bb4=_0x2c3c31[_0x59366c(0xdb)])==null?void 0x0:_0x112bb4[_0x59366c(0x134)])!=null&&_0x368be5[_0x59366c(0x168)]&&(_0x2c3c31[_0x59366c(0xb7)]=!0x0),_0x482bc1(_0xb8f9ba(_0x43161d(_0x59366c(0x15b),_0x432c25,_0x3db84a(),_0x4b7626,_0x10df0a))));},'consoleError':(_0x1abecc,_0x4068a5)=>{var _0x142ef8=_0x22672a;_0x2c3c31[_0x142ef8(0xb7)]=!0x0,_0x482bc1(_0xb8f9ba(_0x43161d(_0x142ef8(0xf4),_0x1abecc,_0x3db84a(),_0x4b7626,_0x4068a5)));},'consoleTime':_0x11ca92=>{_0x20e1b3(_0x11ca92);},'consoleTimeEnd':(_0x524954,_0x3bf1a0)=>{_0x1df185(_0x3bf1a0,_0x524954);},'autoLog':(_0x1fdc31,_0x576a58)=>{var _0x5dee33=_0x22672a;_0x482bc1(_0x43161d(_0x5dee33(0xf0),_0x576a58,_0x3db84a(),_0x4b7626,[_0x1fdc31]));},'autoLogMany':(_0x366b0c,_0x43c94f)=>{var _0x22efc2=_0x22672a;_0x482bc1(_0x43161d(_0x22efc2(0xf0),_0x366b0c,_0x3db84a(),_0x4b7626,_0x43c94f));},'autoTrace':(_0x393bba,_0x643052)=>{var _0x12c8c3=_0x22672a;_0x482bc1(_0xb8f9ba(_0x43161d(_0x12c8c3(0x15b),_0x643052,_0x3db84a(),_0x4b7626,[_0x393bba])));},'autoTraceMany':(_0x522fea,_0x45d534)=>{var _0x2890d1=_0x22672a;_0x482bc1(_0xb8f9ba(_0x43161d(_0x2890d1(0x15b),_0x522fea,_0x3db84a(),_0x4b7626,_0x45d534)));},'autoTime':(_0x3e98b6,_0x3203dd,_0x538249)=>{_0x20e1b3(_0x538249);},'autoTimeEnd':(_0x57fa75,_0x3343c4,_0x385728)=>{_0x1df185(_0x3343c4,_0x385728);},'coverage':_0x86fbff=>{var _0x58538a=_0x22672a;_0x482bc1({'method':_0x58538a(0x13d),'version':_0x3ef990,'args':[{'id':_0x86fbff}]});}};let _0x482bc1=H(_0x2c3c31,_0x3ccdd0,_0xf49543,_0x3254ba,_0x32cc40,_0x4dd277,_0x4a4df0),_0x4b7626=_0x2c3c31[_0x22672a(0xaa)];return _0x2c3c31[_0x22672a(0xbc)];})(globalThis,_0x1c95b6(0x12d),_0x1c95b6(0x12b),_0x1c95b6(0x179),_0x1c95b6(0x18d),_0x1c95b6(0xa8),_0x1c95b6(0x18b),_0x1c95b6(0xb3),'','',_0x1c95b6(0xe3),_0x1c95b6(0x11c));");
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
}),
"[project]/components/shared/AnimatedSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const AnimatedSection = ({ children })=>{
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (inView) {
            controls.start("visible");
        }
    }, [
        controls,
        inView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
const __TURBOPACK__default__export__ = AnimatedSection;
}),
"[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
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
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
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
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
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
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
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
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/theme-toggler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggler",
    ()=>ThemeToggler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ThemeToggler() {
    const { setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
                        }, void 0, false, {
                            fileName: "[project]/components/theme-toggler.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
                        }, void 0, false, {
                            fileName: "[project]/components/theme-toggler.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("light"),
                        children: "Light"
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggler.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("dark"),
                        children: "Dark"
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggler.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
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
}),
"[project]/i18n/routing.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    // A list of all locales that are supported
    locales: [
        "en",
        "fr",
        "es"
    ],
    // Used when no locale matches
    defaultLocale: "fr"
});
}),
"[project]/i18n/navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/routing.ts [app-ssr] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routing"]);
}),
"[project]/constants/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/components/mobile-language-selector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/projects.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const MobileLanguageSwitcher = ({ onLanguageChange, className })=>{
    const currentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const currentLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"].find((lang)=>lang.code === currentLocale) || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"][0];
    const handleLanguageClick = ()=>{
        if (onLanguageChange) {
            onLanguageChange();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 py-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                        className: "w-5 h-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-language-selector.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm text-foreground",
                        children: "Language"
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-language-selector.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 p-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"].map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        href: "/",
                        locale: language.code,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200", "hover:bg-accent hover:text-accent-foreground border border-transparent", "active:scale-[0.98] active:bg-accent/80", "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background", currentLocale === language.code ? "bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20" : "text-foreground hover:border-border"),
                        onClick: handleLanguageClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-medium",
                                        children: language.nativeName
                                    }, void 0, false, {
                                        fileName: "[project]/components/mobile-language-selector.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs", currentLocale === language.code ? "text-primary-foreground/80" : "text-muted-foreground"),
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
                            currentLocale === language.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
const __TURBOPACK__default__export__ = MobileLanguageSwitcher;
}),
"[project]/components/mobile-theme-switcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const MobileThemeSwitcher = ({ onThemeChange, className })=>{
    const { theme, setTheme, systemTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const themes = [
        {
            value: "light",
            label: "Light",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
            description: "Light mode"
        },
        {
            value: "dark",
            label: "Dark",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
            description: "Dark mode"
        },
        {
            value: "system",
            label: "System",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 py-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(currentTheme.icon, {
                        className: "w-5 h-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-theme-switcher.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm text-foreground",
                        children: "Theme"
                    }, void 0, false, {
                        fileName: "[project]/components/mobile-theme-switcher.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 p-2",
                children: themes.map((themeOption)=>{
                    const Icon = themeOption.icon;
                    const isSelected = theme === themeOption.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleThemeClick(themeOption.value),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200", "hover:bg-accent hover:text-accent-foreground border border-transparent", "active:scale-[0.98] active:bg-accent/80", "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background", isSelected ? "bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20" : "text-foreground hover:border-border"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-lg transition-colors", isSelected ? "bg-primary-foreground/20" : "bg-muted"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-colors", isSelected ? "text-primary-foreground" : "text-muted-foreground")
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-medium",
                                                children: themeOption.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/mobile-theme-switcher.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs text-left mt-0.5", isSelected ? "text-primary-foreground/80" : "text-muted-foreground"),
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
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
const __TURBOPACK__default__export__ = MobileThemeSwitcher;
}),
"[project]/components/locale-toggler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/projects.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const LanguageButton = ()=>{
    const currentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const currentLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"].find((lang)=>lang.code === currentLocale) || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", "bg-background border-border text-foreground", "hover:bg-accent hover:text-accent-foreground", "transition-colors duration-200"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/locale-toggler.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "w-48 bg-background border-border",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"].map((language)=>{
                    const isSelected = currentLocale === language.code;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        asChild: true,
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            href: "/",
                            locale: language.code,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between w-full px-2 py-1.5 cursor-pointer", "text-foreground hover:bg-accent hover:text-accent-foreground", "transition-colors duration-200", isSelected && "bg-accent text-accent-foreground"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-1",
                                    children: [
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3 text-primary flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/locale-toggler.tsx",
                                            lineNumber: 60,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1", !isSelected && "ml-5"),
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs", isSelected ? "text-primary-foreground/70" : "text-muted-foreground"),
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
const __TURBOPACK__default__export__ = LanguageButton;
}),
"[project]/components/shared/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/disclosure/disclosure.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme-toggler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/mobile-language-selector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$theme$2d$switcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/mobile-theme-switcher.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$locale$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/locale-toggler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
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
;
function Header({ scrolledBg = "bg-white/95 dark:bg-black shadow-lg backdrop-blur-sm", defaultBg = "bg-transparent", threshold = 50 }) {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("Header");
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const services = [
        {
            name: t("webDevelopment"),
            description: t("webDevelopmentDescription"),
            href: "web",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
        },
        {
            name: t("mobileDevelopment"),
            description: t("mobileDevelopmentDescription"),
            href: "mobile",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
        },
        {
            name: t("graphicDesign"),
            description: t("graphicDesignDescription"),
            href: "graphic",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
        }
    ];
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let ticking = false;
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            if (!ticking) {
                requestAnimationFrame(()=>{
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
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        lastScrollY,
        threshold
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 fixed w-screen top-0 left-0 transition-all duration-300", "border-b", isScrolled ? "border-gray-200  dark:border-gray-800" : "border-transparent", isVisible ? "translate-y-0" : "-translate-y-full", isScrolled ? scrolledBg : defaultBg),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Global",
                className: "mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "-m-1.5 p-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "AWDTECH"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Header.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "127",
                                    height: "30",
                                    viewBox: "0 0 127 30",
                                    fill: "none",
                                    className: "text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            clipPath: "url(#clip0_9616_17482)",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z",
                                                    fill: "#FF6600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z",
                                                    fill: "#FF6600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Header.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                id: "clip0_9616_17482)",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setMobileMenuOpen(true),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5", !isScrolled && ![
                                "/fr",
                                "/en",
                                "/es"
                            ].includes(pathname) ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" : isScrolled ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" : "text-white", "transition-colors duration-200"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: t("openMainMenu")
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Header.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex lg:gap-x-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: `text-sm/6 ${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"}   font-semibold  hover:text-primary transition-colors duration-200`,
                                children: t("home")
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-x-1 text-sm/6 font-semibold", "text-foreground hover:text-primary transition-colors duration-200", "focus:outline-none focus:text-primary"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "center",
                                        className: "w-80 rounded-3xl bg-background border border-border shadow-xl",
                                        children: services.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: "flex items-center gap-x-6 rounded-3xl p-4 text-sm/6 hover:bg-accent focus:bg-accent cursor-pointer transition-colors duration-200",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex size-11 flex-none items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-auto",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-semibold text-foreground",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/Header.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projects",
                                className: `${!isScrolled && pathname !== "/fr" && pathname !== "/en" ? "text-black dark:text-white" : isScrolled ? "dark:text-white text-black" : "text-white"} text-sm/6 font-semibold  hover:text-primary transition-colors duration-200`,
                                children: t("projects")
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden gap-3 lg:flex lg:flex-1 lg:justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$locale$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/shared/Header.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggler"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: mobileMenuOpen,
                onClose: setMobileMenuOpen,
                className: "lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Header.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPanel"], {
                        className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "-m-1.5 p-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "AWDTECH"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 305,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "127",
                                                height: "30",
                                                viewBox: "0 0 127 30",
                                                fill: "none",
                                                className: "text-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        clipPath: "url(#clip0_9616_17482)",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M79.2157 7.86586C80.177 7.38272 81.2608 7.14288 82.4705 7.14288C83.853 7.14288 85.1168 7.47309 86.2581 8.13002C87.3994 8.78696 88.2995 9.71153 88.9512 10.8968C89.6028 12.0821 89.9305 13.4446 89.9305 14.9844C89.9305 16.5242 89.6028 17.9006 88.9512 19.1137C88.2995 20.3268 86.2581 21.95 82.4705 22.9649C81.2608 22.9649 80.1842 22.7286 79.2445 22.2558C78.3048 21.7831 77.5344 21.1957 76.9403 20.4901V30H73.6567V7.39314H76.9403V9.64549C77.4947 8.93989 78.2544 8.349 79.2157 7.86586ZM85.9124 12.2454C85.4624 11.4773 84.8647 10.8933 84.1267 10.4936C83.3886 10.0939 82.5965 9.89575 81.7504 9.89575C80.9043 9.89575 80.141 10.1008 79.403 10.5075C78.6649 10.9142 78.0672 11.5085 77.6172 12.2871C77.1671 13.0657 76.9403 13.9833 76.9403 15.04C76.9403 16.0967 77.1635 17.0178 77.6172 17.8068C78.0672 18.5958 78.6649 19.1936 79.403 19.6003C80.141 20.007 80.9259 20.2121 81.7504 20.2121C82.5749 20.2121 83.3886 20.0035 84.1267 19.5864C84.8647 19.1693 85.4624 18.561 85.9124 17.7651C86.3625 16.9691 86.5893 16.041 86.5893 14.9844C86.5893 13.9277 86.3625 13.0136 85.9124 12.2454Z",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M93.0845 10.8968C93.747 9.71153 94.6507 8.78696 95.792 8.13002C96.9333 7.47309 98.1971 7.14288 99.5796 7.14288C100.829 7.14288 101.916 7.37924 102.849 7.85196C103.781 8.32467 104.523 8.91209 105.081 9.61768V7.39314H108.393V22.7147H105.081V20.4345C104.523 21.1575 103.767 21.7588 102.806 22.2419C101.844 22.7251 100.75 22.9649 99.522 22.9649C98.1575 22.9649 96.9117 22.6278 95.7776 21.95C94.6435 21.2722 93.747 20.3268 93.0845 19.1137C92.4221 17.9006 92.0908 16.5242 92.0908 14.9844C92.0908 13.4446 92.4221 12.0821 93.0845 10.8968ZM104.404 12.2871C103.954 11.5085 103.364 10.9142 102.633 10.5075C101.902 10.1008 101.117 9.89575 100.271 9.89575C99.4248 9.89575 98.6399 10.0939 97.909 10.4936C97.1782 10.8933 96.5877 11.4773 96.1377 12.2454C95.6876 13.0136 95.4608 13.9277 95.4608 14.9844C95.4608 16.041 95.6876 16.9691 96.1377 17.7651C96.5877 18.561 97.1854 19.1693 97.9234 19.5864C98.6615 20.0035 99.4464 20.2121 100.271 20.2121C101.095 20.2121 101.902 20.007 102.633 19.6003C103.364 19.1936 103.954 18.5958 104.404 17.8068C104.854 17.0178 105.081 16.0967 105.081 15.04C105.081 13.9833 104.854 13.0657 104.404 12.2871Z",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M127 7.39313L117.264 29.9166H113.866L117.092 22.4644L110.841 7.39313H114.499L118.964 19.072L123.601 7.39313H127Z",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z",
                                                                fill: "#FF6600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z",
                                                                fill: "#FF6600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/Header.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                            id: "clip0_9616_17482)",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-m-2.5 rounded-md p-2.5", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100", "transition-colors duration-200"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: t("closeMenu")
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 356,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flow-root",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "-my-6 divide-y divide-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 py-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                children: t("home")
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disclosure"], {
                                                as: "div",
                                                className: "-mx-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisclosureButton"], {
                                                        className: "group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                        children: [
                                                            t("services"),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisclosurePanel"], {
                                                        className: "mt-2 space-y-2",
                                                        children: services.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/projects",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                children: t("projects")
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200",
                                                children: t("contact")
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/components/shared/Header.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$theme$2d$switcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}),
];

//# sourceMappingURL=_e01f8210._.js.map