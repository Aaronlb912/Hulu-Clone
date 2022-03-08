function Results({ requests }) {
  return <div>
      {requests.map(result => (
          <Thumnail key={result.id} result={re/>
      ))}
  </div>;
}

export default Results;
