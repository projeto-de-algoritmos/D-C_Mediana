"use client";
import MedianForm from "@components/MedianForm";
import NumbersList from "@components/NumbersList";
import median from "@utils/medianAlgorithm";
import { useState } from "react";

export default function Home() {
  const [numbers, setNumbers] = useState([]);

  return (
    <main className="flex flex-col items-center gap-6 w-screen h-screen pt-5 bg-slate-600 text-slate-100">
      <MedianForm numbers={numbers} setNumbers={setNumbers} />
      {numbers.length > 0 && (
        <NumbersList numbers={numbers} setNumbers={setNumbers} />
      )}
      {numbers.length > 0 && (
        <div className="flex flex-col text-center border-2 p-4 gap-2 rounded bg-slate-500">
          <span>MEDIANA</span>
          <span className="text-4xl">{median(numbers)}</span>
        </div>
      )}
    </main>
  );
}
