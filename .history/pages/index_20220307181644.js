import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import _ from "lodash";

function prepareForSerialization(obj) {
  return obj.mapValues(obj, (value) =>
    typeof value === "undefined" ? null : value
  );
}

export default function Home({ results }) {
  console.log(props);

  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <Header />
      {/*Nav Bar*/}
      <Nav />
      {/*Results*/}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return prepareForSerializatoin({
    props: {
      results: request.results,
    },
  });
}
