import type { LucideIcon } from "lucide-react";
import {
  Sun,
  Zap,
  BatteryCharging,
  Battery,
  Wrench,
  ClipboardList,
  Camera,
  Bolt,
  Lightbulb,
} from "lucide-react";

export type ServiceDetailList = {
  label: string;
  items: string[];
};

export type ServiceDetail = {
  overview: string[];
  lists: ServiceDetailList[];
  ctaLabel: string;
};

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  /** Full detail-page copy (Spec 8.3 – 8.11). */
  detail: ServiceDetail;
};

/**
 * Section 6.5 / 8.x — the 9 core services. `shortDescription` is the exact
 * homepage service-card copy. Individual service detail pages (Section 8.3
 * – 8.11) are built in Phase 3 and will import this array for slugs/titles/
 * icons so nothing has to be redefined.
 */
export const services: Service[] = [
  {
    slug: "solar-panel-installation",
    title: "Solar Panel Installation",
    icon: Sun,
    shortDescription:
      "Harness the power of the sun with professionally installed solar panels designed to maximize energy production and provide reliable electricity for your home or business.",
    detail: {
      overview: [
        "Solar panels are the foundation of every reliable solar energy system. At SunLife Solar Electrification, we design and install high efficiency solar panel systems that convert sunlight into dependable electricity, helping homes and businesses reduce their reliance on the national grid while lowering long term energy costs.",
        "Every installation is carefully planned to maximize energy production, ensure durability, and complement the property's structure without compromising aesthetics.",
      ],
      lists: [
        {
          label: "What's Included",
          items: [
            "Site assessment and system sizing",
            "Premium solar panel installation",
            "Mounting structure installation",
            "Professional cable routing",
            "Electrical protection components",
            "Complete system testing",
            "Customer orientation after installation",
          ],
        },
        {
          label: "Ideal For",
          items: ["Homes", "Offices", "Shops", "Schools", "Churches", "Commercial facilities"],
        },
      ],
      ctaLabel: "Book a Site Inspection",
    },
  },
  {
    slug: "hybrid-inverter-installation",
    title: "Hybrid Inverter Installation",
    icon: Zap,
    shortDescription:
      "Enjoy uninterrupted power with intelligent hybrid inverter systems that seamlessly manage electricity from solar panels, batteries, and the national grid for maximum efficiency.",
    detail: {
      overview: [
        "Hybrid inverters intelligently manage power from solar panels, batteries, and the national grid, ensuring a seamless and efficient energy supply. They automatically prioritize the most suitable power source, helping you maximize your solar investment while maintaining uninterrupted electricity.",
        "At SunLife, we install trusted hybrid inverter brands that combine advanced technology with reliable performance.",
      ],
      lists: [
        {
          label: "Benefits",
          items: [
            "Automatic power switching",
            "Higher energy efficiency",
            "Reduced electricity bills",
            "Intelligent battery charging",
            "Reliable backup power",
          ],
        },
        {
          label: "Preferred Brands",
          items: ["Cartel", "SRNE", "Deye", "Felicity"],
        },
      ],
      ctaLabel: "Get a Free Quote",
    },
  },
  {
    slug: "inverter-charge-controller-systems",
    title: "Inverter & Charge Controller Systems",
    icon: BatteryCharging,
    shortDescription:
      "For customers who prefer a conventional inverter setup, we install high quality inverter and charge controller systems that deliver dependable backup power while offering a cost effective alternative to hybrid systems.",
    detail: {
      overview: [
        "Not every customer requires a hybrid inverter system. For customers looking for a practical and cost effective alternative, we install conventional inverter systems paired with quality charge controllers for dependable backup power.",
        "Every system is configured for safe operation and optimal charging performance.",
      ],
      lists: [
        {
          label: "Best For",
          items: ["Small homes", "Apartments", "Budget conscious customers", "Backup power applications"],
        },
        {
          label: "What's Included",
          items: ["Professional installation", "Battery connection", "Charge controller configuration", "Testing and commissioning"],
        },
      ],
      ctaLabel: "Request a Consultation",
    },
  },
  {
    slug: "lithium-battery-installation-replacement",
    title: "Lithium Battery Installation & Replacement",
    icon: Battery,
    shortDescription:
      "Store energy efficiently with premium lithium battery solutions designed for faster charging, longer lifespan, lower maintenance, and dependable performance. We also provide battery replacement services for existing systems.",
    detail: {
      overview: [
        "Reliable energy storage is essential for every solar system. We install premium lithium batteries that offer faster charging, longer lifespan, deeper discharge capability, and lower maintenance compared to traditional batteries.",
        "Whether you're installing a new system or replacing an aging battery bank, we help you choose the right capacity for your energy needs.",
      ],
      lists: [
        {
          label: "Benefits",
          items: ["Longer lifespan", "Faster charging", "Maintenance free operation", "Higher efficiency", "Improved backup duration"],
        },
        {
          label: "Brands",
          items: ["Cartel", "SRNE", "5Star", "Felicity"],
        },
      ],
      ctaLabel: "Talk to an Expert",
    },
  },
  {
    slug: "system-maintenance-upgrades",
    title: "System Maintenance & Upgrades",
    icon: Wrench,
    shortDescription:
      "Keep your solar investment performing at its best with routine maintenance, fault diagnosis, repairs, and system upgrades designed to improve efficiency and extend equipment lifespan.",
    detail: {
      overview: [
        "Regular maintenance helps protect your investment and ensures your solar system continues operating efficiently. Our technicians inspect, troubleshoot, repair, and upgrade existing systems to improve reliability and extend equipment lifespan.",
        "Whether we installed the system or not, we're happy to help restore peak performance.",
      ],
      lists: [
        {
          label: "Services Include",
          items: [
            "Routine inspections",
            "Fault diagnosis",
            "Panel cleaning recommendations",
            "Battery health checks",
            "Firmware updates",
            "System upgrades",
            "Component replacement",
          ],
        },
      ],
      ctaLabel: "Schedule Maintenance",
    },
  },
  {
    slug: "site-inspection-energy-consultation",
    title: "Site Inspection & Energy Consultation",
    icon: ClipboardList,
    shortDescription:
      "Every successful installation begins with proper planning. We assess your energy needs, inspect your property, and recommend a solution that matches your requirements and budget.",
    detail: {
      overview: [
        "Choosing the right solar system starts with understanding your energy requirements. Our consultation and site inspection process allows us to evaluate your property, calculate your energy usage, and recommend the most suitable solution based on your needs and budget.",
        "We believe informed customers make better decisions, which is why we explain every recommendation clearly and honestly.",
      ],
      lists: [
        {
          label: "During Your Inspection",
          items: ["Property assessment", "Energy usage evaluation", "Installation planning", "Equipment recommendations", "Detailed quotation"],
        },
      ],
      ctaLabel: "Book a Site Inspection",
    },
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    icon: Camera,
    shortDescription:
      "Protect your home or business with professionally installed CCTV surveillance systems that provide reliable monitoring and enhanced security around the clock.",
    detail: {
      overview: [
        "Protect what matters most with professionally installed CCTV systems designed for reliable surveillance and peace of mind. Whether for your home, office, shop, school, or commercial property, we install security systems that provide clear monitoring and dependable performance.",
      ],
      lists: [
        {
          label: "Features",
          items: ["HD Camera Installation", "Remote Mobile Viewing", "DVR/NVR Configuration", "Professional Cable Management", "System Testing"],
        },
      ],
      ctaLabel: "Secure Your Property",
    },
  },
  {
    slug: "electrical-wiring-installations",
    title: "Electrical Wiring & Installations",
    icon: Bolt,
    shortDescription:
      "From new building wiring to electrical upgrades and power distribution, our team delivers safe, neat, and professional electrical installations that meet industry standards.",
    detail: {
      overview: [
        "From new building wiring to electrical upgrades and power distribution, our experienced electricians deliver clean, safe, and professional electrical installations that meet industry standards.",
        "We believe good electrical work should not only function well but also look neat and organized.",
      ],
      lists: [
        {
          label: "Services Include",
          items: ["Residential wiring", "Commercial wiring", "Distribution board installation", "Lighting installation", "Power outlets", "Electrical troubleshooting"],
        },
      ],
      ctaLabel: "Request Electrical Services",
    },
  },
  {
    slug: "custom-solar-solutions",
    title: "Custom Solar Solutions",
    icon: Lightbulb,
    shortDescription:
      "Every project is unique. Whether you need a residential system, commercial installation, school, church, or office solution, we design systems tailored specifically to your energy requirements.",
    detail: {
      overview: [
        "No two customers have the same energy needs. That's why we design custom solar systems based on your electricity consumption, available installation space, future expansion plans, and budget.",
        "Whether you need a compact residential system or a large commercial installation, we create solutions designed specifically for you.",
      ],
      lists: [
        {
          label: "Suitable For",
          items: ["Homes", "Businesses", "Schools", "Churches", "Farms", "Warehouses", "Offices", "Industrial Facilities"],
        },
      ],
      ctaLabel: "Let's Design Your System",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
