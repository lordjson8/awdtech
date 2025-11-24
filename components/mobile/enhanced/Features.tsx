import Container from '@/components/shared/Container'
import React from 'react'

export default function Features() {
  const mobileFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Applications Natives iOS & Android",
      description: "Développement d'applications natives performantes optimisées spécifiquement pour chaque plateforme avec des expériences utilisateur fluides.",
      linkText: "Voir nos réalisations"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Applications Cross-Platform",
      description: "Solutions multiplateformes avec React Native et Flutter pour un développement rapide et une maintenance simplifiée sur iOS et Android.",
      linkText: "En savoir plus"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "UI/UX Mobile Optimisée",
      description: "Designs intuitifs spécialement conçus pour mobile avec une expérience utilisateur exceptionnelle et des interfaces adaptatives.",
      linkText: "Voir nos designs"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Sécurité Avancée",
      description: "Protection des données sensibles, chiffrement de bout en bout et authentification biométrique pour une sécurité maximale.",
      linkText: "Sécurité détaillée"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Intégration APIs & Backend",
      description: "Connexion transparente avec vos systèmes existants, APIs RESTful et synchronisation des données en temps réel.",
      linkText: "Intégrations"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Publication App Stores",
      description: "Accompagnement complet pour la soumission et l'approbation sur Apple App Store et Google Play Store selon les guidelines.",
      linkText: "Process de publication"
    }
  ]

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Nos Solutions <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Développement Mobile
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 xl:mt-6 dark:text-gray-300">
            Des applications mobiles performantes, sécurisées et intuitives qui transforment 
            l'expérience utilisateur et boostent votre business digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {mobileFeatures.map((feature, index) => (
            <div key={index} className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-500/30">
              <span className="inline-block p-3 text-orange-600 bg-orange-100 rounded-full dark:text-white dark:bg-orange-500">
                {feature.icon}
              </span>

              <h1 className="text-xl font-semibold text-gray-800 capitalize dark:text-white">
                {feature.title}
              </h1>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              <a href="#" className="inline-flex items-center text-sm font-medium text-orange-500 capitalize transition-colors duration-300 transform dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300">
                <span className="mx-1">{feature.linkText}</span>
                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à transformer votre idée en application mobile ?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Discutons de votre projet et créons ensemble une application qui impressionnera vos utilisateurs.
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Démarrer mon projet
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}