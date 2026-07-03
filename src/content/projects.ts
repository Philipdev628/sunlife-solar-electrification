export type GalleryCategory =
  | "Residential"
  | "Commercial"
  | "Hybrid Systems"
  | "CCTV Installations"
  | "Electrical Works"
  | "Maintenance & Upgrades";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  location: string;
  equipment: string[];
  category: GalleryCategory;
  completionYear: number;
  /** Path relative to /public/images/projects/ */
  image: string;
  imageAlt: string;
  featured?: boolean;
};

/**
 * Section 6.7 / 9.3 — seed projects. Add real SunLife installation projects here;
 * each entry is used on the homepage "Featured Projects" section (those marked
 * `featured: true`) and on the full /projects gallery (Section 9.3). Update
 * image paths once actual project photos are provided — nothing else needs
 * to change to add, edit, or remove a project.
 */
export const projects: Project[] = [
  {
    id: "p1",
    category: "Residential",
    completionYear: 2024,
    title: "Residential Hybrid Solar Installation",
    description:
      "Complete residential installation providing uninterrupted electricity and improved energy efficiency for a modern family home.",
    tags: ["Residential", "Hybrid Inverter", "Lithium Battery"],
    location: "Abeokuta, Ogun State",
    equipment: ["Cartel Hybrid Inverter", "Lithium Battery", "Solar Panels"],
    image: "project-residential-hybrid.jpg",
    imageAlt:
      "Completed residential hybrid solar installation by SunLife Solar Electrification showing rooftop panels and inverter setup.",
    featured: true,
  },
  {
    id: "p2",
    category: "Commercial",
    completionYear: 2024,
    title: "Commercial Solar Installation",
    description:
      "Reliable solar energy system designed to reduce operating costs and improve business productivity.",
    tags: ["Commercial", "Solar Panels", "Energy Savings"],
    location: "Lagos, Lagos State",
    equipment: ["SRNE Hybrid Inverter", "Solar Panels", "Distribution Board"],
    image: "project-commercial.jpg",
    imageAlt:
      "Commercial solar panel installation completed by SunLife Solar Electrification for a business property.",
    featured: true,
  },
  {
    id: "p3",
    category: "Maintenance & Upgrades",
    completionYear: 2023,
    title: "Solar System Upgrade",
    description:
      "Upgraded an existing solar system with additional battery storage and improved energy management for better overall performance.",
    tags: ["System Upgrade", "Lithium Battery", "Hybrid System"],
    location: "Ibadan, Oyo State",
    equipment: ["Deye Hybrid Inverter", "Lithium Battery Bank"],
    image: "project-upgrade.jpg",
    imageAlt:
      "Solar system upgrade by SunLife showing new lithium battery bank and upgraded hybrid inverter installation.",
    featured: true,
  },
  {
    id: "p4",
    category: "Commercial",
    completionYear: 2023,
    title: "Church Solar Power System",
    description:
      "Dependable power system installed to support uninterrupted services, sound, and lighting for a growing congregation.",
    tags: ["Religious Centre", "Solar Panels", "Hybrid Inverter"],
    location: "Abeokuta, Ogun State",
    equipment: ["Felicity Hybrid Inverter", "Solar Panels", "Lithium Battery"],
    image: "project-church.jpg",
    imageAlt: "Solar installation completed by SunLife Solar Electrification for a church building.",
  },
  {
    id: "p5",
    category: "Electrical Works",
    completionYear: 2025,
    title: "School Electrical & Solar Upgrade",
    description:
      "Combined electrical rewiring and solar installation delivering reliable electricity that supports uninterrupted learning.",
    tags: ["Educational", "Electrical Wiring", "Solar Panels"],
    location: "Ota, Ogun State",
    equipment: ["Solar Panels", "Distribution Board", "Cartel Inverter"],
    image: "project-school.jpg",
    imageAlt: "Electrical and solar upgrade completed by SunLife Solar Electrification at a school facility.",
  },
  {
    id: "p6",
    category: "CCTV Installations",
    completionYear: 2025,
    title: "CCTV Security Installation",
    description:
      "Full-property CCTV system installed with remote mobile viewing for round-the-clock monitoring and peace of mind.",
    tags: ["CCTV", "Security", "Commercial"],
    location: "Lagos, Lagos State",
    equipment: ["HD CCTV Cameras", "NVR System"],
    image: "project-cctv.jpg",
    imageAlt: "CCTV security system installation completed by SunLife Solar Electrification.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
