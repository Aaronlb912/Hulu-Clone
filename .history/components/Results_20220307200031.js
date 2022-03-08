import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div className="px">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
