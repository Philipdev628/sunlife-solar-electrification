"use client";

import * as React from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { stockImages, projectImageMap } from "@/content/stock-images";

export function Lightbox({
  items,
  index,
  onIndexChange,
  onClose,
}: {
  items: Project[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const open = index !== null;
  const current = index !== null ? items[index] : null;
  const touchStartX = React.useRef<number | null>(null);

  const goToPrev = React.useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  const goToNext = React.useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  // Keyboard navigation — arrow keys move between images while open.
  React.useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, goToPrev, goToNext]);

  function handleTouchStart(e: React.TouchEvent) {
  const touch = e.touches.item(0);
  if (!touch) return;

  touchStartX.current = touch.clientX;
}

function handleTouchEnd(e: React.TouchEvent) {
  if (touchStartX.current === null) return;

  const touch = e.changedTouches.item(0);
  if (!touch) return;

  const deltaX = touch.clientX - touchStartX.current;
  const SWIPE_THRESHOLD = 50;

  if (deltaX > SWIPE_THRESHOLD) {
    goToPrev();
  } else if (deltaX < -SWIPE_THRESHOLD) {
    goToNext();
  }

  touchStartX.current = null;
}

  if (!current) return null;

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-brand-navy/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Dialog.Title className="sr-only">{current.title}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {current.description} Image {index !== null ? index + 1 : 0} of {items.length}.
          </Dialog.Description>

          <Dialog.Close
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Dialog.Close>

          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Image — swap the entry in stock-images.ts for a real project photo once available */}
          <div className="relative flex aspect-[4/3] w-full max-w-3xl items-center justify-center overflow-hidden rounded-xl">
            <Image
              src={stockImages[projectImageMap[current.id] ?? "residentialHome"].src}
              alt={current.imageAlt || stockImages[projectImageMap[current.id] ?? "residentialHome"].alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 max-w-3xl text-center text-white">
            <p className="font-heading text-lg font-bold">{current.title}</p>
            <p className="mt-1 text-small text-white/70">
              {current.location} · {current.completionYear}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
