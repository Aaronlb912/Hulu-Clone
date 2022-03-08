import image from "next/image";

function Thumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"

  return (
    <div>
      <Image layout="responsive" 
      src={`${BA}`} height={1080} width={1920} />
    </div>
  );
}

export default Thumbnail;
