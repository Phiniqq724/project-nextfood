import Image from "next/image";
import foodImg from "@/../public/image/foods.webp";
import { LinkButton } from "@/components/custom/Button";
import SlideShow from "@/components/custom/slideshow";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <div className="mx-auto h-screen flex">
        <div className="my-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mx-4 md:mx-0">
            <div className="">
              <Image
                src={foodImg}
                alt="foods"
                width={512}
                height={512}
                className="scale-75 md:scale-100"
              />
            </div>
            <div className="flex flex-col gap-4 text-right ">
              <h1 className="text-4xl font-bold">Welcome to Mkankuy Project</h1>
              <p className="text-xl font-medium">
                Project that can help you to find
                <br /> the best recipe for your meal.
              </p>
              <LinkButton
                variants="outline"
                navigate="/meals"
                className="shadow-xl"
              >
                Explore Meals!
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-screen flex">
        <div className="my-auto flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center">Our Signature ^^</h1>
          <SlideShow />
        </div>
      </div>
    </main>
  );
}
