import React from "react";
import MealItem from "./meal-item";

export default function MealsGrid({ meals }: { meals: string[] }) {
  return (
    <ul className="w-9/10 max-w-[90rem] grid gap-20 mx-auto mb-8 list-none p-0;">
      {meals.map((meal: any) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
