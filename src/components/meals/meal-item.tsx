import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: any) {
  return (
    <article className="max-w-[90rem] grid gap-5 mx-auto mb-8 list-none p-0">
      <header>
        <div className="flex flex-col justify-between h-[300px] rounded-md shadow-md overflow-hidden transition duration-300 ease-in-out text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500">
          <Image src={image} alt={title} width={300} height={300} />
        </div>
        <div className="pt-2 pb-0 px-4">
          <h2 className="m-0 text-2xl">{title}</h2>
          <p className="text-sm m-0">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 px-4 pb-0">{summary}</p>
        <div className="p-4 text-right">
          <Link
            className="inline-block mt-4 py-2 px-4 border rounded-lg "
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
