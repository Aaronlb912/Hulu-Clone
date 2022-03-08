import image from "next/image";

function Thumbnail({ result }) {
  return (
    <div>
      <Image layout="responsive" height={1080} />
    </div>
  );
}

export default Thumbnail;
