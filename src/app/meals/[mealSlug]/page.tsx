import Image from "next/image";

import { getMeal } from "../../../../lib/meals";
import { notFound } from "next/navigation";

export default function MealDetails({ params }: any) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  } else {
    meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  }

  return (
    <div className="h-full flex mt-10">
      <div className="mx-auto my-auto flex flex-col gap-8">
        <header className="text-center">
          <div className="justify-center flex mb-10">
            <Image
              src={meal.image}
              alt={meal.title}
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">{meal.title}</h1>
            <p className="text-xl font-medium">
              by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p>
            <p className="text-xl font-normal">{meal.summary}</p>
          </div>
        </header>
        <main className="p-4 bg-gray-200 rounded-2xl max-w-[1000px]">
          <p
            dangerouslySetInnerHTML={{
              __html: meal.instructions,
            }}
          ></p>
        </main>
      </div>
    </div>
  );
}
