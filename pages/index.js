import Head from "next/head";
import Intro from "../components/Intro";
import styled from "styled-components";
import HowsThree from "../components/HowsThree";
import HowsEighth from "../components/HowsEighth";
import Tokens from "../components/Tokens";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>sucuro | blockchain-based real estate</title>
        <meta name="description" content="blockchain-based real estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
        <HowsThree />
        <HowsEighth />
        <Tokens />
        <Footer />
      </main>

      <footer></footer>
    </div>
  );
}
