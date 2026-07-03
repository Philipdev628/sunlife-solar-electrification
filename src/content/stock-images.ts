/**
 * Stock photography registry.
 *
 * Every photo on the site is referenced by a semantic key from this file —
 * never inline in a component. All images are free-license photography from
 * Unsplash (unsplash.com/license — free for commercial use, no attribution
 * required), loaded directly from Unsplash's CDN via next/image.
 *
 * TO REPLACE WITH REAL COMPANY PHOTOS: once real SunLife project photography
 * is available, drop files into /public/images/... and change the matching
 * `src` value below from the Unsplash URL to the local path (e.g.
 * "/images/hero/hero-main.jpg"). Nothing else in the codebase needs to
 * change — every component reads from this file.
 */

export type StockImage = {
  src: string;
  alt: string;
  /** Photographer credit, kept for reference — Unsplash License does not require display. */
  credit: string;
};

export const stockImages = {
  // Wide rooftop solar array — clean, editorial. Home hero.
  heroRooftop: {
    src: "https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?auto=format&fit=crop&w=1600&q=80",
    alt: "Rows of solar panels installed on a rooftop under a clear sky",
    credit: "Rafael Moreno / Unsplash",
  },
  // Technician actively installing a panel — used for About story, Services
  // hero, and the Solar Panel Installation service detail page.
  technicianInstalling: {
    src: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1600&q=80",
    alt: "Technician installing a solar panel on a rooftop",
    credit: "Bill Mead / Unsplash",
  },
  // Residential home with rooftop solar — Projects hero, residential project card.
  residentialHome: {
    src: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?auto=format&fit=crop&w=1600&q=80",
    alt: "Residential home with solar panels installed on the roof",
    credit: "Watt A Lot / Unsplash",
  },
  // Modern building exterior — commercial project card, About team fallback.
  commercialBuilding: {
    src: "https://images.unsplash.com/photo-1583345237708-add35a664d77?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern commercial building exterior",
    credit: "Giorgio Trovato / Unsplash",
  },
  // Alternate home + solar shot — Gallery hero and secondary service pages.
  homeSolarAlt: {
    src: "https://images.unsplash.com/photo-1637417494521-78b4d1d33029?auto=format&fit=crop&w=1600&q=80",
    alt: "House with solar panels installed on the roof",
    credit: "Markus Winkler / Unsplash",
  },
  // Larger solar array on a house — church/school-style project cards.
  homeSolarArray: {
    src: "https://images.unsplash.com/photo-1730807908064-c087959dd52c?auto=format&fit=crop&w=1600&q=80",
    alt: "House with a large array of solar panels on the roof",
    credit: "Unsplash",
  },
  // Security camera — CCTV service detail + CCTV project card.
  cctvCamera: {
    src: "https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?auto=format&fit=crop&w=1600&q=80",
    alt: "Security camera mounted on the ceiling of a building",
    credit: "Franck V. / Unsplash",
  },
} satisfies Record<string, StockImage>;

export type StockImageKey = keyof typeof stockImages;

/**
 * Maps each of the 9 services to a stock image. Distributes across the
 * curated set above rather than repeating one photo nine times.
 */
export const serviceImageMap: Record<string, StockImageKey> = {
  "solar-panel-installation": "technicianInstalling",
  "hybrid-inverter-installation": "heroRooftop",
  "inverter-charge-controller-systems": "homeSolarAlt",
  "lithium-battery-installation-replacement": "residentialHome",
  "system-maintenance-upgrades": "homeSolarArray",
  "site-inspection-energy-consultation": "commercialBuilding",
  "cctv-installation": "cctvCamera",
  "electrical-wiring-installations": "commercialBuilding",
  "custom-solar-solutions": "heroRooftop",
};

/** Maps each project card to a stock image (Projects page + Gallery). */
export const projectImageMap: Record<string, StockImageKey> = {
  p1: "residentialHome",
  p2: "commercialBuilding",
  p3: "homeSolarArray",
  p4: "homeSolarAlt",
  p5: "commercialBuilding",
  p6: "cctvCamera",
};
