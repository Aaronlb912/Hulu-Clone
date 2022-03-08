import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div className="">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 key={key} className=>{title}</h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
