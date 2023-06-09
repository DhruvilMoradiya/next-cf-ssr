import Head from "next/head";

export const config = { runtime: "experimental-edge" };

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toString(),
    }, // will be passed to the page component as props
  };
}
export default function Home({ time }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Only SSR</h1>
      <h3>{time}</h3>
    </>
  );
}
