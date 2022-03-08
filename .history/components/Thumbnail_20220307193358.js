import image from "next/image";

function Thumbnail({ result }) {
  return (
    <div>
      <Image layout="responsive" srcheight={1080} width={1920} />
    </div>
  );
}

export default Thumbnail;
