interface ShipHeaderProps {
  name?: string | null;
  id?: string | null;
  size?: 'sm' | 'lg';
}

export default function ShipHeader({ name, id, size = 'sm' }: ShipHeaderProps) {
  const titleSize = size === 'sm' ? 'text-xl' : 'text-2xl';
  const containerMargin = size === 'sm' ? 'mb-4' : 'mb-6';
  const idPadding = size === 'sm' ? 'px-2 py-1' : 'px-3 py-1';
  const idMargin = size === 'sm' ? 'mt-1' : 'mt-2';

  return (
    <div className={`flex flex-col items-center ${containerMargin}`}>
      <h2 className={`${titleSize} font-bold text-center text-gray-800`}>{name}</h2>
      <span className={`text-sm text-gray-500 ${idMargin} bg-gray-50 ${idPadding} rounded-full`}>
        ID: {id}
      </span>
    </div>
  );
} 