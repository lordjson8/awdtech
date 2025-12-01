"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactForm() {
  const t = useTranslations("ContactPage");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if recently submitted (simple rate limiting)
    const lastSubmission = localStorage.getItem("lastFormSubmission");
    if (lastSubmission) {
      const timeSinceLast = Date.now() - parseInt(lastSubmission);
      if (timeSinceLast < 30000) {
        // 30 seconds cooldown
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
        return;
      }
    }

    // Validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      // API call to your backend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          page: window.location.href,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      // Success
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Store submission timestamp for rate limiting
      localStorage.setItem("lastFormSubmission", Date.now().toString());

      // Analytics tracking
      if (typeof window !== "undefined") {
        // Google Analytics 4
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).gtag) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).gtag("event", "contact_submit", {
            event_category: "Contact",
            event_label: "Form Submission",
          });
        }

        // Facebook Pixel
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).fbq) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).fbq("track", "Contact");
        }
      }

      // Auto-reset
      const timer = setTimeout(() => setSubmitStatus("idle"), 5000);
      return () => clearTimeout(timer);
    } catch (error) {
      console.error("Form submission error:", error);

      setIsSubmitting(false);
      setSubmitStatus("error");

      // Auto-reset error state
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Social links with proper icons - Updated for AWDTECH
  const socialLinks = [
    {
      name: "facebook",
      icon: <FaFacebook className="w-5 h-5" />,
      href: "https://facebook.com/awdtech",
      color: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "twitter",
      icon: <FaTwitter className="w-5 h-5" />,
      href: "https://twitter.com/awdtech",
      color: "hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "linkedin",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://linkedin.com/company/awdtech",
      color: "hover:bg-[#0077B5] hover:text-white",
    },
    {
      name: "whatsapp",
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/237656849690",
      color: "hover:bg-[#25D366] hover:text-white",
    },
  ];

  // Updated contact info for AWDTECH
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      value: "support.cm@awdpay.com",
      action: "mailto:support.cm@awdpay.com",
    },
    {
      icon: <FaPhone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Cameroun",
      value: "+237 656 849 690 / +237 653 624 318",
      action: "tel:+237656849690",
    },
    {
      icon: <FaPhone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Gabon",
      value: "+241 66 50 39 99 / +241 76 38 80 06",
      action: "tel:+24166503999",
    },
    {
      icon: <FaPhone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Côte d'Ivoire",
      value: "+225 27 24 3 73010 / +225 27 24 3 73317",
      action: "tel:+225272473010",
    },
    {
      icon: <FaGlobe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Service",
      value: "Numérique Partout dans le Monde",
      action: "#",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="space-y-8 pt-12"
          >
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              >
                <span className="block text-gray-900 dark:text-white">
                  AWDTECH
                </span>
                <span className="block bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
                  Service Numérique Partout dans le Monde
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-500 dark:text-gray-300 leading-relaxed"
              >
                Nous dynamisons votre entreprise avec notre expertise en technologie. 
                Nous intervenons dans plusieurs pays d'Afrique, d'Europe et d'Amérique 
                pour accompagner votre transformation digitale.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.action}
                  target={item.action === "#" ? undefined : "_blank"}
                  rel={item.action === "#" ? undefined : "noopener noreferrer"}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 group"
                >
                  <div className="p-2 sm:p-3 bg-orange-50 dark:bg-orange-500/10 rounded-lg sm:rounded-xl text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Suivez-nous
                </h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  Connectez-vous avec AWDTECH sur les réseaux sociaux
                </p>
              </div>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-10 h-10 sm:w-12 sm:h-12 
                      flex items-center justify-center 
                      rounded-lg sm:rounded-xl 
                      bg-gray-100 dark:bg-gray-800 
                      text-gray-600 dark:text-gray-300 
                      ${social.color}
                      transition-all duration-300
                      transform hover:scale-110
                      shadow-sm hover:shadow-md
                    `}
                    aria-label={`Suivez AWDTECH sur ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-600 p-6 sm:p-8 lg:p-10 shadow-xl">
              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300">
                      Merci d'avoir contacté AWDTECH. Nous vous répondrons dans les 24 heures ouvrables.
                    </p>
                    <Button
                      className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                      onClick={() => setSubmitStatus("idle")}
                    >
                      Envoyer un autre message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-11 sm:h-12 border-gray-300 dark:border-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                          placeholder="Votre nom complet"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-11 sm:h-12 border-gray-300 dark:border-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-600 dark:text-gray-300"
                      >
                        Sujet *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-11 sm:h-12 border-gray-300 dark:border-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-600 dark:text-gray-300"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        cols={20}
                        className="border-gray-300 dark:border-gray-500 h-[200px] focus:border-orange-500 focus:ring-orange-500 transition-colors resize-none text-sm sm:text-base"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 sm:h-14 bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 text-white text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Envoyer le message
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-orange-500 rounded-lg sm:rounded-xl rotate-12 opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 bg-orange-800 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}