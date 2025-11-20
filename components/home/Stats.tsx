const stats = [
  {
    id: 1,
    name: "Années d'expérience",
    value: "+03",
    icon: "📅", // ou "🎯" pour expérience ciblée
  },
  { 
    id: 2, 
    name: "De satisfaction client", 
    value: "95%", 
    icon: "⭐" // ou "😊" pour satisfaction client
  },
  { 
    id: 3, 
    name: "Collaborateurs", 
    value: "+25", 
    icon: "👨‍💼" // ou "💼" pour professionnels
  },
  { 
    id: 4, 
    name: "Projets réalisés", 
    value: "+15", 
    icon: "🚀" // ou "📊" pour projets
  },
];

export default function Stats() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center text-2xl font-semibold mb-6">
          <span className="text-orange-500"> AWDTECH </span> Quelque chiffres
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white items-center justify-center flex-col  dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-orange-500 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-4 text-center">{stat.icon}</div>
              <dt className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2 text-center">
                {stat.name}
              </dt>
              <dd className="text-center text-4xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
