import type {
  BillingCycle,
  BillingCycleConfig,
} from "@app/types/payments/pricing";

export const PRICING_MODEL: Record<BillingCycle, BillingCycleConfig> = {
  weekly: {
    label: "Weekly",
    period: "week",
    plans: {
      basic: {
        title: "Basic",
        price: 3,
      },
      standard: {
        title: "Standard",
        price: 4,
        highlighted: true,
      },
    },
  },

  monthly: {
    label: "Monthly",
    period: "month",
    plans: {
      basic: {
        title: "Basic",
        price: 9,
      },
      standard: {
        title: "Standard",
        price: 12,
        highlighted: true,
      },
    },
  },

  yearly: {
    label: "Yearly",
    period: "year",
    plans: {
      basic: {
        title: "Basic",
        price: 90,
      },
      standard: {
        title: "Standard",
        price: 120,
        highlighted: true,
      },
    },
  },
};
