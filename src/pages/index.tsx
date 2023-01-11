import Head from "next/head";
import { useEffect, useState } from "react";

import { SocketIOService } from "../services/io";
import { buildOrderBookRaw } from "../services/orderbook";

import { Table } from "../components/Table";

export default function Home() {
  const [bid, setBid] = useState<number[][]>([]);
  const [ask, setAsk] = useState<number[][]>([]);

  useEffect(() => {
    SocketIOService.socket.on("orderbooks", (res) => {
      setBid(buildOrderBookRaw(res?.bid) || []);
      setAsk(buildOrderBookRaw(res?.ask) || []);
    });
  }, []);

  return (
    <>
      <Head>
        <title>OrderBook System</title>
        <meta name="description" content="Orderbook System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2 className="text-2xl text-center my-4">Orderbook</h2>
        <div className="flex items-center w-full justify-center">
          <div>
            <Table columns={["Size", "Bid"]} resources={bid} />
          </div>
          <div>
            <Table columns={["Size", "Ask"]} resources={ask} />
          </div>
        </div>
      </main>
    </>
  );
}
