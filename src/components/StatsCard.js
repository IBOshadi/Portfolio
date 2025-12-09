// StatsCard.js
export default function StatsCard({ icon, number, title }) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      {/* Icon + Number Row */}
      <div className="flex items-center gap-4 mb-3">
        {/* Icon with blue stroke */}
        <div className="text-blue-500 text-4xl">{icon}</div>

        {/* Big Number */}
        <div className="text-5xl font-bold text-gray-900">{number}</div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-medium text-gray-800 mb-1">{title}</h3>
    </div>
  );
}
