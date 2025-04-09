import { getServerClient } from './serverGraphQLClient';
import { ShipsWithMissionsQuery, ShipsMissingAttributesQuery } from '@/util/types/graphql';
import apiCalls from '@/graphql';

export async function getShipsData() {
  const client = getServerClient();
  const { data } = await client.query<ShipsWithMissionsQuery>({
    query: apiCalls.queries.ships,
  });
  return data;
}

export async function getMissingAttributesData() {
  const client = getServerClient();
  const { data } = await client.query<ShipsMissingAttributesQuery>({
    query: apiCalls.queries.shipsMissingAttributes,
    variables: {
      input: {
        attributes: ["name", "image", "type", "home_port", "year_built"]
      }
    }
  });
  return data;
} 