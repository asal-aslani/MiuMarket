import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center my-40">
    <Image
      src="/spinner-atom.svg"
      alt="loading"
      className="animate-spin"
    />
  </div>
  );
}
