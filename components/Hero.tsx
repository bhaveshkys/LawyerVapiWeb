"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { Button } from '@/components/ui/moving-border';

import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  return (
    <div className="h-[600px] relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg ">
      <div className="absolute inset-0 w-full h-full  z-20  pointer-events-none" />

      <Boxes />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4 z-20 text-center">
            Let AI Handle Your Law Firm's Inbound Calls
          </h1>
          <p className="text-xl text-gray-700 mb-2 z-20 text-center">
            We build custom AI voice assistants tailored to your firm — no setup required.
          </p>
          <p className="text-lg text-gray-600 mb-8 z-20 text-center font-medium">
            AI Receptionists for Law Firms<br />
            Custom-built. No setup. No stress. We handle your calls, so you can focus on cases.
          </p>
          <Button
        borderRadius="1.75rem"
        className="bg-black text-white border-neutral-200 text-lg px-8 py-4 h-14"
      >
        <Link href="/demo" className="text-lg font-semibold">Get a Free Demo Call</Link>
      </Button>
    </div>
  );
}
/* 
<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Let AI Handle Your Law Firm's Inbound Calls
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We build custom AI voice assistants tailored to your firm — no setup required.
          </p>
          <Button size="lg" asChild className="text-lg bg-primary hover:bg-primary/90">
            <Link href="/demo">Get a Free Demo Call</Link>
          </Button>
        </div>
      </div>
    </div>
*/