import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from "../response";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const router = useRouter();
  console.log(results);

  return (
    <div className="s-thumb:bg-red-500 s-track:rounded">
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/google.svg" />
      </Head>
      <SearchHeader />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.GOOGLE_CONTEXT}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // After the SERVER has been rendered and pass the result to client.
  return {
    props: {
      results: data,
    },
  };
}
