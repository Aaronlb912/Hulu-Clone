function Results({ results }) {
  return (
    <div>
      {requests.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
