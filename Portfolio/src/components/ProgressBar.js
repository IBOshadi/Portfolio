export default function ProgressBar({ label, percentage }) {
  // Ensure percentage is between 0 and 100
  const safePercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="w-full max-w-2xl mx-auto py-3">
      {/* Label and Percentage */}

      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-gray-900">
          {safePercentage}%
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-700 ease-out rounded-full"
          style={{ width: `${safePercentage}%` }}
        />
      </div>
    </div>
  );
}
