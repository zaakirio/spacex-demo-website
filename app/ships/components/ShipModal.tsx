"use client";

import { ShipWithMissions } from "@/util/types/graphql";
import ShipImage from "./ShipImage";
import ShipHeader from "./ShipHeader";

interface ShipModalProps {
  ship: ShipWithMissions | null;
  onClose: () => void;
}

export default function ShipModal({ ship, onClose }: ShipModalProps) {
  if (!ship) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 w-full">
          <ShipImage 
            imageUrl={ship.image} 
            altText={ship.name}
            className="rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <ShipHeader name={ship.name} id={ship.id} size="lg" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">Type:</span>
                <span className="text-gray-800">{ship.type || "N/A"}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">Status:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  ship.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {ship.active ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">Class:</span>
                <span className="text-gray-800">{ship.class || "N/A"}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">Home Port:</span>
                <span className="text-gray-800">{ship.home_port || "N/A"}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">Year Built:</span>
                <span className="text-gray-800">{ship.year_built || "N/A"}</span>
              </div>
            </div>
          </div>

          {ship.missionCount && ship.missionCount > 0 && (
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Missions ({ship.missionCount})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ship.missionNames?.map((missionName, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800">{missionName}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 