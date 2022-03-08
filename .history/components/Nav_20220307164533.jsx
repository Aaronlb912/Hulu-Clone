function Nav() {
  return (
    <nav>
      <div>{Object.entrties(requests).map((key, { title, url }))}</div>
    </nav>
  );
}

export default Nav;
