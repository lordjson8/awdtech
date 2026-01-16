import { QuoteForm } from "@/components/quote/QuoteForm";
import { useTranslations } from "next-intl";
import Header from "@/components/shared/Header";

export default function QuotePage() {
  const t = useTranslations("QuotePage");

  return (
    <>
    <Header />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t("description")}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <QuoteForm />
        </div>
      </div>
    </>
  );
}
