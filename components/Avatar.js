import Image from "next/image";

function Avatar({ url }) {
  return (
    <Image
      className="rounded-full transition duration-150 transform hover:scale-110"
      src={url}
      alt="Picture of the user"
      width={40}
      height={40}
      objectFit="contain"
    />
  );
}

export default Avatar;
