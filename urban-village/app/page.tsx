"use client";

import { useState, useCallback } from "react";
import LoadingScreen from "@/components/sections/LoadingScreen";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import ExperiencePanels from "@/components/sections/ExperiencePanels";
import SpaceGallery from "@/components/sections/SpaceGallery";
import MenuPreview from "@/components/sections/MenuPreview";
import VisitUs from "@/components/sections/VisitUs";

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);

  const handleHeroLoaded = useCallback(() => setHeroLoaded(true), []);
  const handleLoadingComplete = useCallback(() => setLoadingDone(true), []);

  return (
    <>
      <LoadingScreen onComplete={handleLoadingComplete} heroLoaded={heroLoaded} />
      <Hero onImageLoaded={handleHeroLoaded} />
      <Manifesto />
      <ExperiencePanels />
      <SpaceGallery />
      <MenuPreview />
      <VisitUs />
    </>
  );
}
