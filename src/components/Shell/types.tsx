import { ElementType } from "react";

type MenuItem = {
  name: string;
  href: string;
  icon: ElementType;
  current: boolean;
};

export type SideBarProps = {
  menuItems: MenuItem[];
  subMenuItems: Array<Omit<MenuItem, "icon"> & { initial: string }>;
};
