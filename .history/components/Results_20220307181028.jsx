function Results({ requests }) {
  return <div>
      {requests.map(result => (
          <Thumnail key={result.id}/>
      ))}
  </div>;
}

export default Results;
