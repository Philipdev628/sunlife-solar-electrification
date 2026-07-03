"use client";

import * as React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { StaggerGroup, StaggerItem } from "@/components/common/motion";
import { cn } from "@/lib/utils";
import type { Project, GalleryCategory } from "@/content/projects";
import { galleryCategories } from "@/content/gallery";
import { stockImages, projectImageMap } from "@/content/stock-images";
import { Lightbox } from "./lightbox";

export function FilterableGallery({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = React.useState<(typeof galleryCategories)[number]>("All Projects");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const filtered = React.useMemo(
    () =>
      activeCategory === "All Projects"
        ? projects
        : projects.filter((p) => p.category === (activeCategory as GalleryCategory)),
    [activeCategory, projects]
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
        {galleryCategories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={cn(
                "rounded-badge px-4 py-2 text-small font-semibold transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
                isActive
                  ? "bg-brand-blue text-white"
                  : "bg-white text-brand-charcoal border border-border hover:border-brand-blue/40 hover:text-brand-blue"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-body text-brand-charcoal/60">
          No projects in this category yet — check back soon.
        </p>
      ) : (
        <StaggerGroup
          key={activeCategory}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
        >
          {filtered.map((project) => {
            const globalIndex = projects.findIndex((p) => p.id === project.id);
            const image = stockImages[projectImageMap[project.id] ?? "residentialHome"];
            return (
              <StaggerItem key={project.id}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="group relative block w-full overflow-hidden rounded-card border border-border bg-surface-light text-left shadow-card transition-shadow duration-default hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  aria-label={`View ${project.title} in fullscreen`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={project.imageAlt || image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-slow group-hover:scale-105"
                    />

                    {/* Hover overlay — Spec 10.2: name, location, equipment, completion year */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent p-4 opacity-0 transition-opacity duration-default group-hover:opacity-100 group-focus-visible:opacity-100">
                      <p className="font-heading text-[15px] font-bold text-white">{project.title}</p>
                      <p className="mt-0.5 text-[12px] text-white/80">
                        {project.location} · {project.completionYear}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {project.equipment.slice(0, 2).map((item) => (
                          <Badge key={item} variant="navy" className="border border-white/20 bg-white/10 text-[10px] text-white">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 group-hover:hidden">
                    <p className="font-heading text-[15px] font-bold text-brand-navy">{project.title}</p>
                    <p className="mt-0.5 text-small text-brand-charcoal/60">{project.category}</p>
                  </div>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      )}

      <Lightbox
        items={projects}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}
