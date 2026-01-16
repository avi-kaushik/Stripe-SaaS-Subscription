export type BillingCycle = "weekly" | "monthly" | "yearly";
export type Period = "week" | "month" | "year";

export type PlanConfig = {
  title: string;
  price: number;
  highlighted?: boolean;
};

export type BillingCycleConfig = {
  label: string;
  period: Period;
  plans: {
    basic: PlanConfig;
    standard: PlanConfig;
  };
};
