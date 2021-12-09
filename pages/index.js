import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const { data: session, status } = useSession();

  console.log("client session is >>>>", session);

  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify - Web Player</title>
        <link rel="icon" href="/spotifylogo.ico" />
      </Head>

      <main className="flex overflow-hidden scrollbar-hide">
        {/* Sidebar */}
        <Sidebar />

        {/* Center */}
        <Center />
      </main>

      <div className="sticky bottom-0">
        {/* Player */}
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
