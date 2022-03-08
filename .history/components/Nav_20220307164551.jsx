import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>{Object.enties(requests).map((key, { title, url }))}</div>
    </nav>
  );
}

export default Nav;
