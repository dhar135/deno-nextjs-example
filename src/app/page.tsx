"use client";

import { useEffect, useState } from "react";
import { Dino } from "./types";
import Link from "next/link";

export default function Home() {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs`);
      const allDinosaurs = await response.json() as Dino[];
      setDinosaurs(allDinosaurs);
    })();
  }, []);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-4 bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Dinosaur app</h1>
      <p className="text-lg mb-6">Click on a dinosaur below to learn more.</p>
      <div className="flex flex-col gap-3">
        {dinosaurs.map((dinosaur: Dino) => (
          <Link
            key={dinosaur.name}
            href={`/${dinosaur.name.toLowerCase()}`}
            className="hover:text-blue-800 underline text-lg text-gray-600"
          >
            {dinosaur.name}
          </Link>
        ))}
      </div>
    </main>
  );
}