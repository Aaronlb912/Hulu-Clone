function Results({ requests }) {
  return <div>
      {requests.map(result => (
          <Thumnail key={result.id} result={result}/>
      ))}
  </div>;
}

export default Results;
