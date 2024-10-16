"use client";

import { useEffect, useState } from "react";
import { Dino } from "../types";
import Link from "next/link";

type RouteParams = { params: { dinosaur: string } };

export default function Dinosaur(request: RouteParams) {
  const selectedDinosaur = request.params.dinosaur;
  const [dinosaur, setDino] = useState<Dino>({ name: "", description: "" });

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/dinosaurs/${selectedDinosaur}`);
      const dino = await resp.json() as Dino;
      setDino(dino);
    })();
  }, [selectedDinosaur]);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">{dinosaur.name}</h1>
      <p className="text-lg max-w-2xl text-center">{dinosaur.description}</p>
      <Link 
        href="/" 
        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
      >
        <span>←</span> Back to all dinosaurs
      </Link>
    </main>
  );
}