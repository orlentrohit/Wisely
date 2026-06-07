export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "monthly-budget-planning-for-families",
    title: "Monthly Budget Planning for Families",
    excerpt:
      "A practical way to plan rent, groceries, school fees, EMI, bills, savings, and emergency funds before the month begins.",
    publishedAt: "2026-01-08",
    readTime: "5 min read",
    category: "Budgeting",
    sections: [
      {
        heading: "Start With Fixed Commitments",
        body:
          "List rent, utilities, insurance, school fees, EMI, and subscriptions first. These commitments shape the real spending room available for the month."
      },
      {
        heading: "Give Savings a Monthly Place",
        body:
          "Treat savings and emergency funds as planned line items. A visible monthly target makes the remaining balance more reliable."
      }
    ]
  },
  {
    slug: "how-to-plan-grocery-spending",
    title: "How to Plan Grocery Spending",
    excerpt:
      "Use family size, city, weekly or monthly budget, and editable item prices to make grocery spending easier to control.",
    publishedAt: "2026-01-15",
    readTime: "4 min read",
    category: "Grocery Planning",
    sections: [
      {
        heading: "Use Local Prices",
        body:
          "Grocery planning works best when households enter the prices they actually see in their city, neighborhood shop, or regular market."
      },
      {
        heading: "Compare Weekly and Monthly Views",
        body:
          "Weekly planning catches overspending early, while monthly planning helps align grocery spend with income cycles and savings goals."
      }
    ]
  },
  {
    slug: "emi-planning-before-taking-a-loan",
    title: "EMI Planning Before Taking a Loan",
    excerpt:
      "Understand monthly EMI, total interest, and EMI pressure before a loan becomes a long-term household commitment.",
    publishedAt: "2026-01-22",
    readTime: "6 min read",
    category: "EMI Planning",
    sections: [
      {
        heading: "Look Beyond the EMI",
        body:
          "A loan may look affordable month to month, but total interest and the payment share of income show whether it will strain the household budget."
      },
      {
        heading: "Track Existing Commitments",
        body:
          "Review current EMI, subscriptions, rent, and bills together before adding another recurring payment."
      }
    ]
  },
  {
    slug: "calendar-based-money-management",
    title: "Calendar-Based Money Management",
    excerpt:
      "Use a yearly calendar view to compare spending, recurring payments, goal progress, and month-to-month trends.",
    publishedAt: "2026-01-29",
    readTime: "5 min read",
    category: "Money Management",
    sections: [
      {
        heading: "Plan Around Dates",
        body:
          "Income, bills, school fees, renewals, and savings goals are easier to manage when they appear on a calendar instead of a loose list."
      },
      {
        heading: "Compare Months",
        body:
          "Month-to-month comparison helps spot seasonal costs, recurring pressure, and savings gaps before they become habits."
      }
    ]
  },
  {
    slug: "fashion-budget-planning-by-season",
    title: "Fashion Budget Planning by Season",
    excerpt:
      "Plan boys, girls, and unisex wardrobe needs around seasons, events, and monthly spending limits before shopping.",
    publishedAt: "2026-02-05",
    readTime: "5 min read",
    category: "Fashion Planning",
    sections: [
      {
        heading: "Start With the Occasion",
        body:
          "Separate regular wardrobe needs from event outfits. This keeps seasonal basics, school needs, workwear, and festive purchases from competing silently."
      },
      {
        heading: "Use Manual Prices",
        body:
          "Fashion prices vary widely by city and shop. Editable prices help households build a realistic plan before visiting nearby stores."
      }
    ]
  },
  {
    slug: "local-shop-discovery-for-planning",
    title: "Local Shop Discovery for Better Monthly Planning",
    excerpt:
      "Use city filters, category search, featured stores, and shop pins to connect monthly planning with nearby store visibility.",
    publishedAt: "2026-02-12",
    readTime: "4 min read",
    category: "Local Shopping",
    sections: [
      {
        heading: "Discovery Is Not Delivery",
        body:
          "A planning-first map helps users find shops and compare categories without adding logistics, shipping, or route workflows."
      },
      {
        heading: "Plan Before You Visit",
        body:
          "Users can prepare grocery and fashion budgets, then review local sellers with matching products, offers, and locations."
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
