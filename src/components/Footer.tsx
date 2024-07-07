import Link from "next/link";
import Image from "next/image";
import linkin from "@/../public/image/Linkedin.png";
import gitHub from "@/../public/image/github.png";

export default function Footer() {
  return (
    <main>
      <footer className="bg-stone w-full flex mt-10 justify-between items-center h-[64px] text-silver">
        <div className="flex gap-8">
          <Link href="https://www.linkedin.com/in/fahrell-sandy-zhariif/">
            <Image
              src={linkin}
              alt="Linkedin"
              width={24}
              height={24}
              className="ml-8"
            />
          </Link>
          <Link href="https://github.com/Phiniqq724">
            <Image src={gitHub} alt="Github" width={24} height={24} />
          </Link>
        </div>
        <h1 className="">© Pikek Projects</h1>
        <div className="mr-16"></div>
      </footer>
    </main>
  );
}
