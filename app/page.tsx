import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p className="flex text-2xl items-center justify-center gap-2">
        <span>
          Yohee G Snatiago
        </span>
        <span>
          {'<3'}
        </span>
        <span>
          Lovely mae sobriano
        </span>
      </p>
      <Image width={1000} height={1000} src='/yohee.jpg' alt="yohee" className="w-full h-full" />
    </div>
  );
}
