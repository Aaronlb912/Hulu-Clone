function Results({ requests }) {
  return <div>
      {requests.map(result => (
          <Thumnail/>
      ))}
  </div>;
}

export default Results;
