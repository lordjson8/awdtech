const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million', icon: '💳' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion', icon: '💰' },
  { id: 3, name: 'New users annually', value: '46,000', icon: '👥' },
]

export default function Stats() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white items-center justify-center flex-col  dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
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
  )
}