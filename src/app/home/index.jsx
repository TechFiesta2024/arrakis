"use client";

import DragBox from "@/components/Hero/DragBox";

export default function HomeScreen() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-40">
        <h1 className="text-xl text-red-600 ">From Home Page</h1>
        <DragBox />
      </div>
    </>
  );
}

