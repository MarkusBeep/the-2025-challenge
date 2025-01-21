import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/images/logo.png"}
      width={200}
      height={200}
      alt="arrow"
      className="w-auto h-auto"
      priority
    />
  );
};

export default Logo;
