import { ChartNoAxesCombined, Code, CodeXml, RefreshCcwDot } from "lucide-react";
import React from "react";

export default function FeaturesTwo() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Notre{" "}
          <span className="text-orange-500  underline decoration-black">
            Mision
          </span>
        </h1>

        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Chez <span className="text-orange-500 font-bold"> AWDTSCH</span>,
          Notre mission est de proposer des solutions digitales elles même
          améliorées de façon continue et permettant une évolution continue des
          business pour les opérateurs économiques, et de la qualité de vie des
          populations africaines. La qualité n’est pas optionnelle chez{" "}
          <span className="text-orange-500 font-bold">AWDTECH</span>
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
             <span
              className="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500"
            >  <CodeXml />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              OFFRIR DES SOLUTIONS DIGITALES
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Fournir des solutions numériques de pointe qui permettent une
              évolution et une croissance continues de l’entreprise
            </p>

          </div>

          <div className="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
              <span
              className="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500"
            >  <RefreshCcwDot />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              AMELIORER LA QUALITE ET LE CYCLE DE VIE
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Développer des produits technologiques innovants qui améliorent la
              qualité de vie des individus et des communautés
            </p>

          
          </div>

          <div className="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
            <span
              className="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500"
            >  <ChartNoAxesCombined />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              PERMETTRE L’EVOLUTION DU BUSINESS
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Donnez aux entreprises les moyens d’évoluer et de s’adapter au
              paysage numérique grâce à nos services numériques complets
            </p>

         
          </div>
        </div>
      </div>
    </section>
  );
}
