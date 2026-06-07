export type ToolCategorySlug =
  | "monthly-planning"
  | "grocery-savings"
  | "fashion-planning"
  | "finance-trackers"
  | "calendar-reports"
  | "shop-discovery"
  | "pdf-tools"
  | "image-tools"
  | "document-tools";

export type ToolKind = "planner" | "file";

export type Accent = "purple" | "blue" | "green" | "orange" | "red" | "pink" | "neutral";

export type Tool = {
  slug: string;
  path: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ToolCategorySlug;
  icon: string;
  accent: Accent;
  popular?: boolean;
  kind: ToolKind;
  inputs?: string[];
};

export type ToolCategory = {
  slug: ToolCategorySlug;
  path: string;
  name: string;
  description: string;
  icon: string;
  accent: Accent;
  seoTitle: string;
};

export const accentStyles: Record<
  Accent,
  {
    bg: string;
    text: string;
    ring: string;
    border: string;
    button: string;
    soft: string;
  }
> = {
  purple: {
    bg: "bg-violet-600",
    text: "text-violet-200",
    ring: "ring-violet-400/20",
    border: "border-violet-400/30",
    button: "bg-violet-600 hover:bg-violet-500",
    soft: "bg-violet-500/15"
  },
  blue: {
    bg: "bg-blue-600",
    text: "text-blue-200",
    ring: "ring-blue-400/20",
    border: "border-blue-400/30",
    button: "bg-blue-600 hover:bg-blue-500",
    soft: "bg-blue-500/15"
  },
  green: {
    bg: "bg-green-600",
    text: "text-green-200",
    ring: "ring-green-400/20",
    border: "border-green-400/30",
    button: "bg-green-600 hover:bg-green-500",
    soft: "bg-green-500/15"
  },
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-200",
    ring: "ring-orange-400/20",
    border: "border-orange-400/30",
    button: "bg-orange-500 hover:bg-orange-400",
    soft: "bg-orange-500/15"
  },
  red: {
    bg: "bg-red-500",
    text: "text-red-200",
    ring: "ring-red-400/20",
    border: "border-red-400/30",
    button: "bg-red-500 hover:bg-red-400",
    soft: "bg-red-500/15"
  },
  pink: {
    bg: "bg-pink-500",
    text: "text-pink-200",
    ring: "ring-pink-400/20",
    border: "border-pink-400/30",
    button: "bg-pink-500 hover:bg-pink-400",
    soft: "bg-pink-500/15"
  },
  neutral: {
    bg: "bg-slate-600",
    text: "text-slate-200",
    ring: "ring-slate-400/20",
    border: "border-slate-400/20",
    button: "bg-blue-600 hover:bg-blue-500",
    soft: "bg-slate-500/15"
  }
};

export const categories: ToolCategory[] = [
  {
    slug: "monthly-planning",
    path: "/monthly-planning",
    name: "Monthly Planning",
    description:
      "Plan monthly income, core expenses, family spending, and savings targets in one calm workspace.",
    icon: "CalendarCheck2",
    accent: "purple",
    seoTitle: "Monthly Budget Planner"
  },
  {
    slug: "grocery-savings",
    path: "/grocery-planning",
    name: "Grocery Planning",
    description:
      "Build weekly or monthly grocery plans with family size, city, category budgets, and user-entered prices.",
    icon: "ShoppingBasket",
    accent: "green",
    seoTitle: "Grocery Planner"
  },
  {
    slug: "fashion-planning",
    path: "/fashion-planning",
    name: "Fashion Planning",
    description:
      "Plan monthly fashion budgets, seasonal wardrobe needs, event outfits, and local fashion store visits.",
    icon: "Shirt",
    accent: "pink",
    seoTitle: "Fashion Planner"
  },
  {
    slug: "finance-trackers",
    path: "/finance-trackers",
    name: "Finance Trackers",
    description:
      "Track expenses, EMI pressure, subscriptions, bills, and financial health without a spreadsheet.",
    icon: "ReceiptText",
    accent: "blue",
    seoTitle: "Expense Tracker"
  },
  {
    slug: "calendar-reports",
    path: "/calendar-reports",
    name: "Calendar & Reports",
    description:
      "Review recurring payments, month-to-month trends, yearly spending, and goal progress by date.",
    icon: "CalendarDays",
    accent: "purple",
    seoTitle: "Yearly Planning Calendar"
  },
  {
    slug: "shop-discovery",
    path: "/local-shop-discovery",
    name: "Local Shop Discovery",
    description:
      "Find nearby grocery and fashion shops by category, city, featured offers, and location pins.",
    icon: "MapPinned",
    accent: "blue",
    seoTitle: "Map-Based Shop Discovery"
  },
  {
    slug: "pdf-tools",
    path: "/pdf-tools",
    name: "PDF Tools",
    description:
      "Secondary SEO utilities for compressing, merging, splitting, and converting PDF files.",
    icon: "FileText",
    accent: "neutral",
    seoTitle: "PDF Tools"
  },
  {
    slug: "image-tools",
    path: "/image-tools",
    name: "Image Tools",
    description:
      "Traffic-focused image utilities for compression, resizing, and format changes.",
    icon: "Image",
    accent: "neutral",
    seoTitle: "Image Tools"
  },
  {
    slug: "document-tools",
    path: "/document-tools",
    name: "Document Tools",
    description:
      "Document conversion helpers that support SEO while planning remains the core product.",
    icon: "Files",
    accent: "neutral",
    seoTitle: "Document Tools"
  }
];

export const tools: Tool[] = [
  {
    slug: "monthly-budget-planner",
    path: "/budget-planner",
    title: "Monthly Budget Planner",
    shortDescription: "Plan income, expenses, savings, and remaining balance.",
    description:
      "Create a monthly plan across rent, grocery, bills, EMI, subscriptions, emergency fund, and savings with accessible over-budget guidance.",
    category: "monthly-planning",
    icon: "WalletCards",
    accent: "purple",
    popular: true,
    kind: "planner"
  },
  {
    slug: "grocery-planner",
    path: "/grocery-planner",
    title: "Grocery Planner",
    shortDescription: "Plan groceries by country, city, family size, and budget.",
    description:
      "Enter local item prices manually or start with editable estimates for Indian and international grocery planning.",
    category: "grocery-savings",
    icon: "ShoppingBasket",
    accent: "green",
    popular: true,
    kind: "planner"
  },
  {
    slug: "fashion-planner",
    path: "/fashion-planner",
    title: "Fashion Planner",
    shortDescription: "Plan fashion spending for boys, girls, unisex needs, seasons, and events.",
    description:
      "Create a monthly fashion budget with seasonal wardrobe planning, event-based outfit lists, manual prices, and nearby fashion store suggestions.",
    category: "fashion-planning",
    icon: "Shirt",
    accent: "pink",
    popular: true,
    kind: "planner"
  },
  {
    slug: "map-discovery",
    path: "/map-discovery",
    title: "Map Discovery",
    shortDescription: "Discover nearby grocery and fashion shops by city and category.",
    description:
      "Search city-based shop listings, view store pins, compare offers, and connect planning decisions with local shop discovery without delivery routes.",
    category: "shop-discovery",
    icon: "MapPinned",
    accent: "blue",
    popular: true,
    kind: "planner"
  },
  {
    slug: "expense-tracker",
    path: "/expense-tracker",
    title: "Expense Tracker",
    shortDescription: "Log spending by household category and watch totals update.",
    description:
      "Track rent, grocery, school fees, fuel, medicine, entertainment, travel, and other monthly expenses.",
    category: "finance-trackers",
    icon: "ReceiptText",
    accent: "blue",
    popular: true,
    kind: "planner"
  },
  {
    slug: "savings-goal-planner",
    path: "/savings-goals",
    title: "Savings Goal Planner",
    shortDescription: "Set savings goals and monthly contribution targets.",
    description:
      "Break annual goals, emergency funds, and family milestones into clear monthly saving targets.",
    category: "grocery-savings",
    icon: "PiggyBank",
    accent: "green",
    popular: true,
    kind: "planner"
  },
  {
    slug: "emi-planner",
    path: "/emi-planner",
    title: "EMI Planner",
    shortDescription: "Estimate EMI and understand monthly pressure.",
    description:
      "Calculate loan EMI, total interest, and EMI-to-income pressure before committing to recurring payments.",
    category: "finance-trackers",
    icon: "Landmark",
    accent: "blue",
    popular: true,
    kind: "planner"
  },
  {
    slug: "subscription-tracker",
    path: "/subscription-tracker",
    title: "Subscription Tracker",
    shortDescription: "Track recurring bills, subscriptions, and renewals.",
    description:
      "Organize OTT, mobile recharge, internet, insurance, utilities, and app subscriptions in one recurring bill view.",
    category: "finance-trackers",
    icon: "Repeat2",
    accent: "orange",
    kind: "planner"
  },
  {
    slug: "family-budget-planner",
    path: "/family-budget-planner",
    title: "Family Budget Planner",
    shortDescription: "Coordinate shared household costs across family members.",
    description:
      "Plan a shared family budget with income sources, children-related costs, essentials, healthcare, and savings.",
    category: "monthly-planning",
    icon: "UsersRound",
    accent: "purple",
    kind: "planner"
  },
  {
    slug: "yearly-planning-calendar",
    path: "/calendar-view",
    title: "Yearly Planning Calendar",
    shortDescription: "Compare month-to-month spending and recurring payments.",
    description:
      "Switch months, view yearly spending patterns, track recurring payments, and monitor goal progress.",
    category: "calendar-reports",
    icon: "CalendarDays",
    accent: "purple",
    kind: "planner"
  },
  {
    slug: "financial-health-score",
    path: "/financial-health",
    title: "Financial Health Score",
    shortDescription: "See healthy, warning, over-budget, and EMI pressure states.",
    description:
      "Review savings rate, remaining balance, EMI pressure, and overspending signals with labels and icons, not color alone.",
    category: "finance-trackers",
    icon: "Activity",
    accent: "blue",
    kind: "planner"
  },
  {
    slug: "pdf-to-jpg",
    path: "/tools/pdf-to-jpg",
    title: "PDF to JPG",
    shortDescription: "Turn PDF pages into crisp JPG images.",
    description:
      "Convert PDF pages into JPG previews for sharing, thumbnails, and web publishing.",
    category: "pdf-tools",
    icon: "FileImage",
    accent: "neutral",
    kind: "file",
    inputs: ["PDF"]
  },
  {
    slug: "jpg-to-pdf",
    path: "/tools/jpg-to-pdf",
    title: "JPG to PDF",
    shortDescription: "Combine JPG images into one PDF.",
    description:
      "Upload JPG images, arrange them, and prepare a clean PDF document for sharing or archiving.",
    category: "pdf-tools",
    icon: "FilePlus2",
    accent: "neutral",
    kind: "file",
    inputs: ["JPG", "JPEG"]
  },
  {
    slug: "pdf-compressor",
    path: "/tools/pdf-compressor",
    title: "PDF Compressor",
    shortDescription: "Shrink PDF file size while preserving readability.",
    description:
      "Compress PDF documents for email, uploads, and storage with practical quality presets.",
    category: "pdf-tools",
    icon: "Archive",
    accent: "neutral",
    kind: "file",
    inputs: ["PDF"]
  },
  {
    slug: "pdf-to-word",
    path: "/tools/pdf-to-word",
    title: "PDF to Word",
    shortDescription: "Prepare editable Word output from a PDF.",
    description:
      "A secondary traffic tool for preparing editable document workflows from PDF uploads.",
    category: "document-tools",
    icon: "FileType2",
    accent: "neutral",
    kind: "file",
    inputs: ["PDF"]
  },
  {
    slug: "word-to-pdf",
    path: "/tools/word-to-pdf",
    title: "Word to PDF",
    shortDescription: "Export Word documents as polished PDFs.",
    description:
      "Convert Word documents into consistent PDF files for sharing and records.",
    category: "document-tools",
    icon: "FileCheck2",
    accent: "neutral",
    kind: "file",
    inputs: ["DOC", "DOCX"]
  },
  {
    slug: "png-to-jpg",
    path: "/tools/png-to-jpg",
    title: "PNG to JPG",
    shortDescription: "Convert PNG images to JPG.",
    description:
      "Prepare lighter JPG files from PNG images for faster uploads, web pages, and previews.",
    category: "image-tools",
    icon: "ImageDown",
    accent: "neutral",
    kind: "file",
    inputs: ["PNG"]
  },
  {
    slug: "jpg-to-png",
    path: "/tools/jpg-to-png",
    title: "JPG to PNG",
    shortDescription: "Convert JPG images to PNG.",
    description:
      "Create PNG files from JPG images for design assets and sharper exports.",
    category: "image-tools",
    icon: "ImagePlus",
    accent: "neutral",
    kind: "file",
    inputs: ["JPG", "JPEG"]
  },
  {
    slug: "image-compressor",
    path: "/tools/image-compressor",
    title: "Image Compressor",
    shortDescription: "Reduce image weight for faster pages.",
    description:
      "Compress images with quality controls designed for websites, campaigns, and product galleries.",
    category: "image-tools",
    icon: "Minimize2",
    accent: "neutral",
    kind: "file",
    inputs: ["JPG", "PNG", "WEBP"]
  },
  {
    slug: "image-resizer",
    path: "/tools/image-resizer",
    title: "Image Resizer",
    shortDescription: "Resize images to exact dimensions.",
    description:
      "Set precise dimensions for banners, thumbnails, avatars, product images, and social posts.",
    category: "image-tools",
    icon: "Maximize2",
    accent: "neutral",
    kind: "file",
    inputs: ["JPG", "PNG", "WEBP"]
  },
  {
    slug: "merge-pdf",
    path: "/tools/merge-pdf",
    title: "Merge PDF",
    shortDescription: "Join multiple PDF files into one document.",
    description:
      "Merge reports, scans, invoices, and forms into a single organized PDF document.",
    category: "pdf-tools",
    icon: "Combine",
    accent: "neutral",
    kind: "file",
    inputs: ["PDF"]
  },
  {
    slug: "split-pdf",
    path: "/tools/split-pdf",
    title: "Split PDF",
    shortDescription: "Extract pages or split a PDF into smaller files.",
    description:
      "Separate selected pages from a PDF or break a long document into manageable files.",
    category: "pdf-tools",
    icon: "Scissors",
    accent: "neutral",
    kind: "file",
    inputs: ["PDF"]
  }
];

export const expenseCategories = [
  "Rent",
  "Grocery",
  "Milk",
  "Vegetables",
  "Fruits",
  "Electricity",
  "Water",
  "Internet",
  "Mobile Recharge",
  "Fuel",
  "Transport",
  "School Fees",
  "Medicine",
  "Insurance",
  "EMI",
  "Entertainment",
  "Savings",
  "Subscriptions",
  "Travel",
  "Emergency Fund"
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug || category.path === `/${slug}`);
}

export function getToolsByCategory(slug: string) {
  return tools.filter((tool) => tool.category === slug);
}

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug || tool.path === `/${slug}`);
}

export function getToolByPath(path: string) {
  return tools.find((tool) => tool.path === path);
}

export function getCategoryByPath(path: string) {
  return categories.find((category) => category.path === path);
}

export function getPopularTools() {
  return tools.filter((tool) => tool.popular);
}

export function getPlanningTools() {
  return tools.filter((tool) => tool.kind === "planner");
}

export function getTrafficTools() {
  return tools.filter((tool) => tool.kind === "file");
}
