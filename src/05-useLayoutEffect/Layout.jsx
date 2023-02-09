import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  //   if (isLoading) {
  //     return <h1>Cargando...</h1>;
  //   }
  const { author, quote } = !!data && data[0];
  console.log(data, isLoading, hasError);
  return (
    <>
      <h1>BreakingBag Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        disabled={isLoading}
        onClick={() => increment(1)}
        className="btn btn-primary"
      >
        Next Quote
      </button>
    </>
  );
};
