export type AccountType = "user" | "seller" | "admin";

export type UserProfile = {
  id: string;
  type: AccountType;
  name: string;
  city: string;
  country: string;
};

export type SellerProfile = {
  id: string;
  shopName: string;
  category: "Grocery" | "Fashion" | "General";
  city: string;
  country: string;
  contact: string;
  featured: boolean;
};

export type ShopLocation = {
  id: string;
  shopName: string;
  category: "Grocery" | "Fashion" | "Savings" | "General";
  city: string;
  country: string;
  area: string;
  contact: string;
  offer: string;
  products: string[];
  position: {
    x: number;
    y: number;
  };
  featured: boolean;
};

export type BudgetPlan = {
  id: string;
  userId: string;
  month: string;
  income: number;
  expenses: number;
  groceryBudget: number;
  fashionBudget: number;
  savingsTarget: number;
};

export type GroceryPlan = {
  id: string;
  familySize: number;
  country: string;
  city: string;
  period: "Weekly" | "Monthly";
  budget: number;
  items: {
    name: string;
    category: string;
    quantity: number;
    manualPrice: number;
  }[];
};

export type FashionPlan = {
  id: string;
  budget: number;
  audience: "Boys" | "Girls" | "Unisex";
  season: string;
  event: string;
  shoppingList: {
    item: string;
    category: string;
    manualPrice: number;
  }[];
};

export type SavedPlan = {
  id: string;
  userId: string;
  type: "Budget" | "Grocery" | "Fashion" | "Savings";
  title: string;
  updatedAt: string;
};

export type PricingPlan = {
  name: string;
  audience: "User" | "Shop";
  price: string;
  description: string;
  cta: string;
  href: string;
  highlighted?: boolean;
  features: string[];
};

export const sampleUsers: UserProfile[] = [
  {
    id: "user_001",
    type: "user",
    name: "Aarav Mehta",
    city: "Bengaluru",
    country: "India"
  },
  {
    id: "seller_001",
    type: "seller",
    name: "Urban Basket Market",
    city: "Bengaluru",
    country: "India"
  },
  {
    id: "admin_001",
    type: "admin",
    name: "Wisely Admin",
    city: "Remote",
    country: "Global"
  }
];

export const featuredShops: ShopLocation[] = [
  {
    id: "shop_001",
    shopName: "Urban Basket Market",
    category: "Grocery",
    city: "Bengaluru",
    country: "India",
    area: "Indiranagar",
    contact: "+91 90000 11001",
    offer: "Weekend grocery bundles",
    products: ["Rice", "Milk", "Vegetables", "Fruits"],
    position: { x: 26, y: 34 },
    featured: true
  },
  {
    id: "shop_002",
    shopName: "Mode Lane Studio",
    category: "Fashion",
    city: "Bengaluru",
    country: "India",
    area: "Koramangala",
    contact: "+91 90000 22002",
    offer: "Seasonal wardrobe edit",
    products: ["Casual wear", "Event outfits", "Kidswear"],
    position: { x: 62, y: 42 },
    featured: true
  },
  {
    id: "shop_003",
    shopName: "Daily Fresh Corner",
    category: "Grocery",
    city: "Mumbai",
    country: "India",
    area: "Bandra",
    contact: "+91 90000 33003",
    offer: "Fresh produce plans",
    products: ["Vegetables", "Fruits", "Dairy"],
    position: { x: 42, y: 64 },
    featured: false
  },
  {
    id: "shop_004",
    shopName: "North Star Apparel",
    category: "Fashion",
    city: "Delhi",
    country: "India",
    area: "Saket",
    contact: "+91 90000 44004",
    offer: "Festive collection preview",
    products: ["Ethnic wear", "Formal wear", "Accessories"],
    position: { x: 72, y: 24 },
    featured: true
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free User",
    audience: "User",
    price: "$0",
    description: "For basic monthly, grocery, and fashion planning.",
    cta: "Start Free",
    href: "/dashboard",
    features: [
      "Basic planning",
      "Limited saved plans",
      "Map browsing",
      "Basic grocery planning",
      "Basic fashion planning"
    ]
  },
  {
    name: "Pro User",
    audience: "User",
    price: "$9/mo",
    description: "For advanced personal and household planning.",
    cta: "Upgrade Planning",
    href: "/pricing",
    highlighted: true,
    features: [
      "Advanced planning",
      "Unlimited saved plans",
      "Export and share plans",
      "Calendar reports",
      "Premium insights"
    ]
  },
  {
    name: "Shop Plan",
    audience: "Shop",
    price: "$19/mo",
    description: "For local shops that want visibility inside planning flows.",
    cta: "Join as Shop",
    href: "/seller-join",
    features: [
      "Shop profile",
      "Map listing",
      "Featured visibility",
      "Lead generation",
      "Category promotion"
    ]
  },
  {
    name: "Shop Pro",
    audience: "Shop",
    price: "$39/mo",
    description: "For sellers that need priority placement and more insights.",
    cta: "Get Priority",
    href: "/seller-join",
    features: [
      "Priority placement",
      "Shop analytics",
      "More visibility",
      "Featured listings",
      "Sponsored placement readiness"
    ]
  }
];

export const savedPlans: SavedPlan[] = [
  {
    id: "plan_001",
    userId: "user_001",
    type: "Budget",
    title: "June family budget",
    updatedAt: "2026-06-04"
  },
  {
    id: "plan_002",
    userId: "user_001",
    type: "Grocery",
    title: "Monthly grocery plan",
    updatedAt: "2026-06-05"
  },
  {
    id: "plan_003",
    userId: "user_001",
    type: "Fashion",
    title: "Festive wardrobe plan",
    updatedAt: "2026-06-06"
  }
];

export const homepageFaqs = [
  {
    question: "Does Wisely include delivery?",
    answer:
      "No. Wisely focuses on planning, shop discovery, local visibility, and category comparison. It does not include delivery, logistics, shipping, or routing features."
  },
  {
    question: "Can users edit grocery prices?",
    answer:
      "Yes. Grocery planning uses manual or editable prices so each household can match its own city, shop, and budget."
  },
  {
    question: "How do shops earn visibility?",
    answer:
      "Sellers can create shop profiles, pin locations on the map, list products or services, publish offers, and use featured placement plans."
  },
  {
    question: "Can users save and export plans?",
    answer:
      "The product structure supports saved plans, exports, sharing, calendar reports, and premium insights for future account-backed releases."
  }
];
