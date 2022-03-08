function Results({ requests }) {
  return <div>
      {requests.map(result => (
          <Thumnail key={result.id} res/>
      ))}
  </div>;
}

export default Results;
