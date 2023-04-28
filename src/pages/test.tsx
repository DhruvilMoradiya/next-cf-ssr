import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // add Cache-Control HTTP Header to response
  ctx.res.setHeader("age", 1000);
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};
export default function Home({ time }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>SSR with Caching</h1>
      <h3>{time}</h3>
    </>
  );
}
