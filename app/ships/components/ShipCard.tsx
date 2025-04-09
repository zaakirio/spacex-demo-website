"use client";

import { ShipWithMissions } from "@/util/types/graphql";
import { useState } from "react";
import ShipModal from "./ShipModal";
import ShipImage from "./ShipImage";
import ShipHeader from "./ShipHeader";
import StatusBadge from "./StatusBadge";

interface ShipCardProps {
  ship: ShipWithMissions | null;
  missingAttributesCount: number;
}

export default function ShipCard({ ship, missingAttributesCount }: ShipCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!ship) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 hover:shadow-xl"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick(e as any);
          }
        }}
      >
        <div className="relative h-48 w-full group">
          <ShipImage imageUrl={ship.image} altText={ship.name} />
        </div>
        
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <ShipHeader name={ship.name} id={ship.id} />
          
          <div className="mt-auto">
            <div className="flex flex-col space-y-2">
              <StatusBadge 
                label="Missing attributes" 
                value={missingAttributesCount} 
                type={missingAttributesCount > 0 ? 'error' : 'success'} 
              />
              <StatusBadge 
                label="Missions" 
                value={ship.missionCount || 0} 
                type="info" 
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ShipModal
          ship={ship}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
} 