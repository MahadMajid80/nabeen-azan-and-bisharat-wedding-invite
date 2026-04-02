"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/** Shared treatment for both hero halves (scale, cover). */
const heroPanelImageBaseClass = "scale-110 object-cover";

export const HERO_BACKGROUND_SRC = "/hero-background.jpeg";

/** Second hero panel (right half). Simple path so subfolder hosting and servers handle it reliably. */
export const HERO_BACKGROUND_SRC_SPLIT_RIGHT = "/hero-split-right.jpeg";

export interface HeroBackgroundLayerProps {
  /** Use on first paint (opening hero) for faster LCP */
  priority?: boolean;
  className?: string;
}

export const HeroBackgroundLayer = ({
  priority = false,
  className,
}: HeroBackgroundLayerProps) => (
  <div className={cn("absolute inset-0 z-0 bg-navy-900", className)}>
    <div className="absolute inset-0 z-0 flex overflow-hidden">
      <div className="relative h-full w-1/2 shrink-0 overflow-hidden">
        <Image
          src={HERO_BACKGROUND_SRC}
          alt=""
          fill
          className={cn(heroPanelImageBaseClass, "object-[44%_36%]")}
          priority={priority}
          sizes="50vw"
        />
      </div>
      <div className="relative h-full w-1/2 shrink-0 overflow-hidden border-l border-navy-950/30">
        <Image
          src={HERO_BACKGROUND_SRC_SPLIT_RIGHT}
          alt=""
          fill
          className={heroPanelImageBaseClass}
          objectPosition="top center"
          priority={priority}
          sizes="50vw"
        />
      </div>
    </div>
    <div
      className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/70 to-navy-950/85"
      aria-hidden
    />
    <div className="pointer-events-none absolute inset-0 opacity-10 paper-texture" />
  </div>
);
