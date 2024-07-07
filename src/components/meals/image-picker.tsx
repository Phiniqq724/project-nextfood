"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRef, useState } from "react";

interface ImagePickerProps {
  name: string;
  label: string;
}

export default function ImagePicker({ name, label }: ImagePickerProps) {
  const imageRef = useRef<HTMLInputElement>(null);
  const [pickImage, setPickImage] = useState<string | StaticImport | null>(
    null
  );

  function handleClick() {
    imageRef.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setPickImage(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col ">
      <label htmlFor={name}>{label}</label>
      <div className="flex gap-8">
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
          required
        />
        <div className="items-center flex">
          <button
            type="button"
            onClick={handleClick}
            className="p-4 bg-gray-300 hover:bg-gray-200 duration-500 rounded-xl"
          >
            Pick an Image
          </button>
        </div>
        <div className="max-w-24 max-h-24">
          {!pickImage && <p>[image preview]</p>}
          {pickImage && (
            <Image
              src={pickImage}
              alt="Your image"
              width={300}
              height={300}
              className="rounded-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}
