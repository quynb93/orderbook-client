import { OrderBookEntry } from "../../models/orderbook";

export const buildOrderBookRaw = (entires?: OrderBookEntry[]): number[][] => {
  if (!entires?.length) {
    return [];
  }

  return entires.map((entry) => [entry.size, entry.price]);
};
