import heroSterileProcessing from "@/assets/hero-sterile-processing.jpg";
import heroMasterWrap from "@/assets/hero-master-wrap.jpg";
import serviceLeadership from "@/assets/service-leadership.jpg";
import serviceMorale from "@/assets/service-morale.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import productQualityAssuranceCard from "@/assets/product-quality-assurance-card.jpg";
import productMasterWrap from "@/assets/product-master-wrap.jpg";
import productCountSheetHolder from "@/assets/product-count-sheet-holder.jpg";
import productBrushRack from "@/assets/product-brush-rack.jpg";
import productTrayIntegrityTest from "@/assets/product-tray-integrity-test.jpg";
import productHealthMonitor from "@/assets/product-health-monitor.jpg";
import softwareDashboard from "@/assets/software-dashboard.jpg";

export { heroSterileProcessing, heroMasterWrap, softwareDashboard };

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  body: string[];
  features: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
};

export type Software = {
  slug: string;
  name: string;
  summary: string;
  body: string[];
  modules: string[];
  benefits: string[];
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  body: string[];
  includes: string[];
};

export type Programme = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  body: string[];
};

export const productCategories = [
  {
    slug: "sterile-barrier",
    name: "Sterile Barrier Products",
    description:
      "Wraps, cards and test devices that protect the sterile barrier from the moment a set leaves the sterilizer until it is opened in theatre.",
  },
  {
    slug: "count-sheet-holders",
    name: "Instrument Count Sheet Holders",
    description:
      "Holders that keep surgical count sheets separate from instruments and implants throughout processing.",
  },
  {
    slug: "workstation-organisation",
    name: "Workstation Organisation",
    description:
      "Racks and storage devices that consolidate sterile services supplies and ease bottlenecks at each work station.",
  },
  {
    slug: "monitoring",
    name: "Monitoring Devices",
    description: "Simple indicators that support routine monitoring and everyday compliance checks.",
  },
] as const;

export const products: Product[] = [
  {
    slug: "surgical-tray-integrity-test",
    name: "Surgical Tray Integrity Test",
    category: "sterile-barrier",
    summary:
      "A rapid check for wear around the retention pins and gasket seats of rigid containers, where defects are too small to see with the naked eye.",
    image: productTrayIntegrityTest,
    body: [
      "In operating theatres and sterile services departments, patient safety has no quitting time. Best practice has to be enforced and cross-checked so that every patient receives an intact, sterile set.",
      "Rigid containers, however, pick up wear and tear around their retention pins and gasket seats as they age. These defects are often invisible to the naked eye, which makes routine visual inspection alone an unreliable guide to sterile barrier integrity.",
      "The Surgical Tray Integrity Test gives sterile services teams a repeatable way to check containers in service and record the outcome, so decisions about repair or withdrawal are based on evidence rather than assumption.",
    ],
    features: [
      "Checks rigid container sealing surfaces and retention pins",
      "Repeatable method suitable for routine audit programmes",
      "Results can be recorded against a container identifier",
      "Designed for use inside the department, without specialist laboratory support",
    ],
    applications: [
      "Sterile services departments",
      "Theatre sterile supply units",
      "Container fleet audits and replacement planning",
    ],
    specifications: [
      { label: "Product code", value: "Available on request" },
      { label: "Pack quantity", value: "Available on request" },
      { label: "Regulatory classification", value: "Available on request" },
      { label: "Compatible sterilisation methods", value: "Available on request" },
    ],
  },
  {
    slug: "ibr-instrument-brush-rack",
    name: "iBR — Instrument Brush Rack",
    category: "workstation-organisation",
    summary:
      "A lean production device that combines the functions of bins, racks and shelves to consolidate sterile services supplies at each work station.",
    image: productBrushRack,
    body: [
      "The iBR (pronounced I-Bar) brings together the core functions of bins, racks and shelves so that the supplies a technician reaches for are kept within arm's length of the task.",
      "It can be configured to the needs of each work station and takes up little room, whether it stands on a workbench or is mounted on a wall. Brushes, sponges, tags, test kits, locks, integrators, indicators, load stickers, tip protectors, peel packs, count sheet holders, quality assurance cards, labels, tapes, markers and pens can all be held in one predictable place across decontamination, set assembly and sterilisation.",
      "Our team is happy to walk a department and advise on work station layout before any order is placed.",
    ],
    features: [
      "Bench-standing or wall-mounted",
      "Configurable slot and bin arrangement",
      "Keeps consumables at the point of use",
      "Supports a consistent, visual work station standard",
    ],
    applications: ["Decontamination", "Set assembly and inspection", "Sterilisation and dispatch"],
    specifications: [
      { label: "Product code", value: "Available on request" },
      { label: "Material", value: "Available on request" },
      { label: "Dimensions", value: "Available on request" },
      { label: "Mounting options", value: "Available on request" },
    ],
  },
  {
    slug: "universal-surgical-count-sheet-holder",
    name: "Universal Surgical Count Sheet Holder",
    category: "count-sheet-holders",
    summary:
      "Isolates surgical count sheets from instruments and implants, avoiding ink transfer and paper particles during and after sterilisation.",
    image: productCountSheetHolder,
    body: [
      "Count sheets travel with a set from assembly through sterilisation and into theatre. Placed loose among instruments, they shed paper particles and can transfer ink onto instrument surfaces and implants.",
      "The Universal Surgical Count Sheet Holder keeps the paperwork readable and separate, so the count can still be performed at the point of use without the sheet sitting directly against the instruments.",
      "It is sized to suit commonly used count sheet formats and is intended for everyday use in busy assembly rooms.",
    ],
    features: [
      "Separates paperwork from instruments and implants",
      "Count sheet stays legible throughout processing",
      "Fits commonly used count sheet formats",
      "Straightforward to introduce into an existing assembly routine",
    ],
    applications: ["Set assembly", "Instrument tray make-up", "Theatre counts"],
    specifications: [
      { label: "Product code", value: "Available on request" },
      { label: "Sheet sizes accommodated", value: "Available on request" },
      { label: "Regulatory classification", value: "Available on request" },
      { label: "Compatible sterilisation methods", value: "Available on request" },
    ],
  },
  {
    slug: "surgical-instrument-master-wrap",
    name: "Surgical Instrument Master Wrap",
    category: "sterile-barrier",
    summary:
      "A protective outer wrap that helps displace handling impact before it can tear or puncture a wrapped instrument tray.",
    image: productMasterWrap,
    body: [
      "Wrapped trays are handled many times between the sterilizer and the operating table. Each lift, transfer and stack is an opportunity for a tear or puncture that will only be discovered when the set is opened.",
      "The Master Wrap adds a protective outer layer that spreads handling impact away from the sterile barrier, reducing the chance of a set being rejected at the point of use.",
      "It is intended to complement, not replace, an existing wrapping standard and the department's own audit process.",
    ],
    features: [
      "Adds a protective layer over the wrapped tray",
      "Helps reduce sets rejected at the point of use",
      "Works alongside existing wrapping practice",
      "Available in sizes to suit common tray footprints",
    ],
    applications: ["Wrapped instrument trays", "Transport between department and theatre", "Sterile storage"],
    specifications: [
      { label: "Product code", value: "Available on request" },
      { label: "Sizes available", value: "Available on request" },
      { label: "Regulatory classification", value: "Available on request" },
      { label: "Compatible sterilisation methods", value: "Available on request" },
    ],
  },
  {
    slug: "quality-assurance-card",
    name: "Quality Assurance Card",
    category: "sterile-barrier",
    summary:
      "A colour-changing card that adheres to wrapped instrument sets, giving the team a surface to write on without compromising the wrap.",
    image: productQualityAssuranceCard,
    body: [
      "Writing directly on a wrapped set risks marking or perforating the sterile barrier, yet teams still need somewhere to record set details.",
      "The Quality Assurance Card sticks to the outside of a wrapped set and provides that writing surface, while its colour change supports the department's routine check that the set has been through a sterilisation process.",
      "It helps keep processed sets clearly distinguishable from those still awaiting processing.",
    ],
    features: [
      "Writable surface that does not require marking the wrap",
      "Colour change supports routine process checks",
      "Adheres to wrapped instrument sets",
      "Helps separate processed from unprocessed sets",
    ],
    applications: ["Wrapped instrument sets", "Sterile stores", "Theatre receipt checks"],
    specifications: [
      { label: "Product code", value: "Available on request" },
      { label: "Card size", value: "Available on request" },
      { label: "Pack quantity", value: "Available on request" },
      { label: "Compatible sterilisation methods", value: "Available on request" },
    ],
  },
  {
    slug: "basic-health-monitor",
    name: "Basic Health Monitor",
    category: "monitoring",
    summary: "A simple indicator device intended to support everyday monitoring routines.",
    image: productHealthMonitor,
    body: [
      "The Basic Health Monitor is a low-cost indicator intended to support the simple, repeated checks that underpin a dependable monitoring routine.",
      "Full performance characteristics and intended use for the SURGICISS version of this device have not yet been suppliedon request.",
    ],
    features: [
      "Single-use indicator format",
      "Intended for routine, repeated checks",
      "Available on request",
    ],
    applications: ["Available on request"],
    specifications: [
      { label: "Product code", value: "Available on request" },
      { label: "Pack quantity", value: "Available on request" },
      { label: "Intended use", value: "Available on request" },
      { label: "Storage conditions", value: "Available on request" },
    ],
  },
];

export const software: Software[] = [
  {
    slug: "surgiciss-matrix",
    name: "SURGICISS Matrix (AI)",
    summary:
      "A sterile services management system that tracks instrument sets through decontamination, assembly, sterilisation and issue.",
    body: [
      "SURGICISS Matrix is a sterile processing management system built around the daily reality of a sterile services department: sets moving continuously between decontamination, assembly, sterilisation, storage and theatre.",
      "It records where each set is, what it contains and who handled it, so that supervisors can see the state of the department without walking the floor and chasing paperwork.",
      "Detailed module behaviour, hosting arrangements and integration options for the SURGICISS deployment are confirmed during scopingon request.",
    ],
    modules: [
      "Set tracking across processing stages",
      "Instrument count and content records",
      "Load and cycle records",
      "Technician activity records",
      "Reporting and audit trail",
    ],
    benefits: [
      "One shared view of set location and status",
      "Fewer telephone calls between theatre and the department",
      "Records available for audit without manual collation",
    ],
  },
  {
    slug: "case-cart-matrix",
    name: "Case Cart Matrix",
    summary:
      "Case cart preparation and dispatch, matched against the theatre schedule so trolleys leave complete and on time.",
    body: [
      "Case Cart Matrix covers the picking, checking and dispatch of case carts against the theatre list.",
      "Each cart is built from a defined picking list, checked before it leaves the department and recorded on dispatch, which makes shortages visible before the trolley reaches theatre rather than afterwards.",
      "Scope of the SURGICISS configuration, including how theatre schedules are received, is agreed during implementationon request.",
    ],
    modules: [
      "Picking lists by procedure",
      "Cart build and verification",
      "Dispatch and return records",
      "Shortage reporting",
    ],
    benefits: [
      "Shortages identified before dispatch",
      "Clear record of what left the department",
      "Preparation aligned to the theatre list",
    ],
  },
  {
    slug: "crash-cart-matrix",
    name: "Crash Cart Matrix",
    summary:
      "Scheduled checking of resuscitation trolleys, with expiry tracking and a record of every completed check.",
    body: [
      "Resuscitation trolleys have to be checked on a schedule, with contents in date and seals intact. Paper logs make it hard to show, at a glance, which trolleys are due.",
      "Crash Cart Matrix holds the trolley inventory, the check schedule and the expiry dates, and keeps a record of who completed each check and when.",
      "Trolley templates and check frequencies are configured to the SURGICISS customer's own policyon request.",
    ],
    modules: [
      "Trolley inventory templates",
      "Scheduled check reminders",
      "Expiry date tracking",
      "Completed check records",
    ],
    benefits: [
      "Overdue checks are visible immediately",
      "Expiring stock identified before it lapses",
      "Evidence of checks available on request",
    ],
  },
  {
    slug: "endoscope-matrix",
    name: "Endoscope Matrix",
    summary:
      "Traceability for flexible endoscopes: reprocessing steps, drying and storage times, and patient-episode linkage.",
    body: [
      "Flexible endoscopes carry the tightest traceability expectations of any reusable device, because each scope must be linked to a reprocessing record and a patient episode.",
      "Endoscope Matrix records the reprocessing steps completed for each scope, together with storage and drying times, so that a scope is only issued when its record supports it.",
      "Traceability fields and interfaces to washer-disinfectors are confirmed with the customeron request.",
    ],
    modules: [
      "Scope register",
      "Reprocessing step records",
      "Drying and storage time monitoring",
      "Patient-episode traceability",
    ],
    benefits: [
      "Traceable history for every scope",
      "Storage limits monitored automatically",
      "Reprocessing records retrievable per episode",
    ],
  },
];

export const services: Service[] = [
  {
    slug: "sterile-processing-management-and-leadership",
    name: "Sterile Processing Management & Leadership",
    summary:
      "Support for decision makers deciding whether their department needs steady management or genuine change.",
    image: serviceLeadership,
    body: [
      "Change is what distinguishes a leader from a manager. Leaders take an institution to a new level; managers hold the level that has been reached. Both matter, and they rarely sit in the same person.",
      "For a sterile services department to thrive, decision makers first have to be honest about what the department needs. If change is required, the department needs a leader. If the department is already sound, it needs a manager. Departments that are struggling are often given a manager when what they needed was a leader — which is one reason turnover in sterile services management is so high.",
      "There are also times when theatre staff and processing technicians cannot see that anything is wrong, because they have not had sight of a better standard. Limitations start to look like the normal order of business. We work alongside senior staff to set out what the department actually needs and what it would take to get there.",
    ],
    includes: [
      "Review of departmental structure and workload",
      "Interim leadership or management support",
      "Standard operating procedure review",
      "Coaching for supervisors and team leaders",
    ],
  },
  {
    slug: "sterile-processing-morale-boosting-sessions",
    name: "Sterile Processing Morale Boosting Sessions",
    summary:
      "Practical sessions for teams that are overstretched, so the department stops running on goodwill alone.",
    image: serviceMorale,
    body: [
      "All things being equal, nobody comes to work to do harm. Processing technicians come in to deliver clean, sterile, functional and relevant instruments.",
      "There are times, though, when a team is overworked and overwhelmed, and morale falls far enough to affect what reaches theatre. When that happens, blame tends to travel between departments and very little improves.",
      "Our sessions deal with the causes rather than the symptoms: workload distribution, recognition, communication with theatre, and the small daily frustrations that wear a team down. We work with the whole team, not only the supervisors.",
    ],
    includes: [
      "Facilitated team sessions on site",
      "Workload and rota review",
      "Communication between theatre and the department",
      "Follow-up session to check what has changed",
    ],
  },
  {
    slug: "sterile-processing-technician-training-programme",
    name: "Sterile Processing Technician Training Programme",
    summary:
      "Core knowledge of sterile sciences for technicians, taught around the equipment and sets they handle every day.",
    image: serviceTraining,
    body: [
      "No one can give what they do not have. A processing technician cannot deliver dependable instrument outcomes without a working knowledge of sterile sciences.",
      "Our training programme covers decontamination, inspection and assembly, packaging, sterilisation and storage, taught around the equipment and instrument sets the team handles every day rather than as abstract theory.",
      "Programme length, assessment and any certification arrangements are agreed with each customeron request.",
    ],
    includes: [
      "Decontamination principles and practice",
      "Instrument inspection and assembly",
      "Packaging and sterile barrier systems",
      "Sterilisation, monitoring and storage",
    ],
  },
];

export const programmes: Programme[] = [
  {
    slug: "cost-reduction-programme",
    name: "Cost Reduction Programme",
    summary:
      "A structured review of instrument spend, repair and replacement decisions and the waste hidden inside routine processing.",
    image: serviceLeadership,
    body: [
      "A great deal of the money a department spends is committed by habit: sets built larger than the procedure needs, instruments replaced when they could be repaired, consumables ordered because a shelf looks empty.",
      "Our cost reduction programme works through those decisions with the department, using its own records, and reports where money is going and what could reasonably be recovered.",
      "Commercial terms for the SURGICISS programme are set out in the proposalon request.",
    ],
  },
  {
    slug: "loaner-instrument-processing",
    name: "Loaner Instrument Processing",
    summary:
      "A workable routine for loaner sets, which usually arrive late, heavy, incomplete and unfamiliar to the team.",
    image: serviceTraining,
    body: [
      "Loaner sets are the most demanding trays a department handles. They often arrive dirty, heavy and incomplete, with assembly instructions the team has never seen before, and they are needed for a list that has already been booked.",
      "We help departments put a loaner routine in place: booking-in expectations for suppliers, realistic lead times, inspection at receipt, and a record that stands up when a set is queried afterwards.",
    ],
  },
  {
    slug: "sterile-forensics-programme",
    name: "Sterile Forensics Programme",
    summary:
      "Investigation of recurring instrument and equipment processing problems, from the routine to the genuinely complex.",
    image: serviceMorale,
    body: [
      "Some processing problems keep coming back regardless of how much effort is put into them, because the cause sits somewhere nobody has looked.",
      "Our sterile forensics programme identifies, classifies and resolves those issues: staining and residue, wet loads, damaged sets, repeated theatre rejections and equipment that never quite performs as it should.",
      "Findings are reported with the evidence behind them, so the department can act on them and show what changed.",
    ],
  },
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function findSoftware(slug: string) {
  return software.find((s) => s.slug === slug);
}

export function findService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function findProgramme(slug: string) {
  return programmes.find((p) => p.slug === slug);
}

export function categoryName(slug: string) {
  return productCategories.find((c) => c.slug === slug)?.name ?? slug;
}
