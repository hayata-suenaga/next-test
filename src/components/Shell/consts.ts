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
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Todos", href: "#", icon: CheckBadgeIcon, current: false },
  { name: "Insights", href: "#", icon: ChartPieIcon, current: false },
  { name: "Budgets", href: "#", icon: AdjustmentsVerticalIcon, current: false },
  { name: "Reports", href: "#", icon: ReceiptPercentIcon, current: false },
  { name: "Expenses", href: "#", icon: CurrencyDollarIcon, current: false },
  { name: "Policies", href: "#", icon: UserGroupIcon, current: false },
];
export const teamMenuItems = [
  { id: 1, name: "Product", href: "#", initial: "P", current: false },
  { id: 2, name: "Design", href: "#", initial: "D", current: false },
  { id: 3, name: "Marketing", href: "#", initial: "M", current: false },
];
export const userMenuItems = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
