import { getShipsData, getMissingAttributesData } from './util/fetchData';
import ShipCard from './ships/components/ShipCard';

export default async function Home() {
  const [shipsData, missingAttributesData] = await Promise.all([
    getShipsData(),
    getMissingAttributesData()
  ]);

  const missingAttributesMap = missingAttributesData?.shipsMissingAttributes?.reduce((acc, item) => {
    if (item?.shipId) {
      acc[item.shipId] = item.missingCount;
    }
    return acc;
  }, {} as Record<string, number>) || {};

  return (
    <main className="min-h-screen p-8 bg-black-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">SpaceX Ships</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shipsData?.shipsWithMissions?.map((ship) => (
            <ShipCard 
              key={ship?.id} 
              ship={ship} 
              missingAttributesCount={ship?.id ? missingAttributesMap[ship.id] || 0 : 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
}