import {
  ChartPieIcon,
  HomeIcon,
  ReceiptPercentIcon,
  CurrencyDollarIcon,
  AdjustmentsVerticalIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const mainMenuItems = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Reports", href: "#", icon: ReceiptPercentIcon, current: false },
  { name: "Expenses", href: "#", icon: CurrencyDollarIcon, current: false },
  { name: "Budgets", href: "#", icon: AdjustmentsVerticalIcon, current: false },
  { name: "Insights", href: "#", icon: ChartPieIcon, current: false },
  { name: "Policies", href: "#", icon: UserGroupIcon, current: false },
];
export const teamMenuItems = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
export const userMenuItems = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
