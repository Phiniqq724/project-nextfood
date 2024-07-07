// "use client";

// import { useState } from "react";
import Image from "next/image";
import Guacamole from "@/../public/image/guacamole.jpg";
import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/../lib/action";
import MealsFormSubmit from "@/components/meals/meal-form-submit";

export default function shareMealPage() {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="mx-auto items-center flex gap-8">
        <header className="text-2xl text-center">
          <Image src={Guacamole} alt="Hello" className="rounded-xl" />
          <h1 className="mt-4">
            Share your <span className="font-bold">Favorite Meal!!</span>
          </h1>
          <p className="text-xl">Or any other meal you feel needs sharing!</p>
        </header>
        <main className="">
          <form className="" action={shareMeal}>
            <div className="flex gap-4">
              <p className="flex flex-col">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-96 bg-gray-300 rounded-xl p-4 focus:outline-none focus:ring-transparent focus:bg-gray-200 duration-500"
                  required
                />
              </p>
              <p className="flex flex-col">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-96 bg-gray-300 rounded-xl p-4 focus:outline-none focus:ring-transparent focus:bg-gray-200 duration-500"
                  required
                />
              </p>
            </div>
            <p className="flex flex-col">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-[784px] bg-gray-300 rounded-xl p-4 focus:outline-none focus:ring-transparent focus:bg-gray-200 duration-500"
                required
              />
            </p>
            <p className="flex flex-col">
              <label htmlFor="summary">Short Summary</label>
              <input
                type="text"
                id="summary"
                name="summary"
                className="w-[784px] bg-gray-300 rounded-xl p-4 focus:outline-none focus:ring-transparent focus:bg-gray-200 duration-500"
                required
              />
            </p>
            <p className="flex flex-col max-w-[784px]">
              <label htmlFor="instructions">Instructions</label>
              <textarea
                id="instructions"
                name="instructions"
                rows={10}
                required
                className="bg-gray-300 rounded-xl p-4 focus:outline-none focus:ring-transparent focus:bg-gray-200 duration-500"
              ></textarea>
            </p>
            <ImagePicker name="image" label="Meal Image" />
            <p className="mt-4">
              <MealsFormSubmit />
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}
