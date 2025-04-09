"use client";

import { useState } from "react";
import apiCalls from "@/graphql";
import { ShipsWithMissionsQuery, ShipsMissingAttributesQuery } from "@/util/types/graphql";
import { useQuery } from "@apollo/client";
import ShipCard from "./ships/components/ShipCard";

export default function Home() {
  const { data: shipsData, loading: shipsLoading, error: shipsError } = useQuery<ShipsWithMissionsQuery>(apiCalls.queries.ships);

  const { data: missingAttributesData, loading: missingAttributesLoading, error: missingAttributesError } = useQuery<ShipsMissingAttributesQuery>(apiCalls.queries.shipsMissingAttributes, {
    variables: {
      input: {
        attributes: ["name", "image", "type", "home_port", "year_built"]
      }
    }
  });

  if (shipsLoading || missingAttributesLoading) return <div className="min-h-screen p-8 bg-gray-50">Loading...</div>;
  if (shipsError) return <div className="min-h-screen p-8 bg-gray-50">Error: {shipsError.message}</div>;
  if (missingAttributesError) return <div className="min-h-screen p-8 bg-gray-50">Error: {missingAttributesError.message}</div>;

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