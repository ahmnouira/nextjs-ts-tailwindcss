import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>nextjs-ts-tailwindcss</title>
        <meta
          name="description"
          content="Next.js, TypeScript and Tailwind CSS starter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex h-screen w-screen justify-center items-center">
          <h1 className="text-3xl font-bold text-red-500 underline">
            Hello World!
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
