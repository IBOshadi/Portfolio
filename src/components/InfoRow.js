// InfoRow.js
export default function InfoRow({ label, value }) {
    return (
      <div className="flex items-center gap-3 text-gray-800">
        {/* Blue arrow */}
        <span className="text-blue-600 text-xl font-bold select-none">›</span>
  
        {/* Label and Value */}
        <div>
          <span className="font-semibold">{label}:</span>{' '}
          <span >{value}</span>
        </div>
      </div>
    );
  }