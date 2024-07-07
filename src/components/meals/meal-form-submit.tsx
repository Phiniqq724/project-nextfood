"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`p-4 rounded-xl duration-500 ${
        pending ? "bg-gray-200" : "bg-gray-300"
      }`}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
