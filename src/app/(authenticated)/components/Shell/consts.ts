import {
  ChartPieIcon,
  HomeIcon,
  ReceiptPercentIcon,
  CurrencyDollarIcon,
  AdjustmentsVerticalIcon,
  UserGroupIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export const mainMenuItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Todos", href: "todos", icon: CheckBadgeIcon },
  { name: "Insights", href: "insights", icon: ChartPieIcon },
  {
    name: "Budgets",
    href: "budgets",
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: "Reports",
    href: "reports",
    icon: ReceiptPercentIcon,
  },
  {
    name: "Expenses",
    href: "expenses",
    icon: CurrencyDollarIcon,
  },
  { name: "Policies", href: "policies", icon: UserGroupIcon },
];

export const teamMenuItems = [
  { id: 1, name: "Product", href: "#", initial: "P" },
  { id: 2, name: "Design", href: "#", initial: "D" },
  { id: 3, name: "Marketing", href: "#", initial: "M" },
];
