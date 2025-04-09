interface StatusBadgeProps {
  label: string;
  value: number | string;
  type: 'error' | 'success' | 'info';
}

export default function StatusBadge({ label, value, type }: StatusBadgeProps) {
  const colorClasses = {
    error: 'bg-red-50 text-red-700 border-red-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200'
  };

  const dotColors = {
    error: '#ef4444',
    success: '#22c55e',
    info: '#3b82f6'
  };

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorClasses[type]} border`}>
      <span 
        className="w-2 h-2 rounded-full mr-2" 
        style={{ backgroundColor: dotColors[type] }}
      />
      {label}: {value}
    </div>
  );
} 