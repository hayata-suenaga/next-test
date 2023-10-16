"use client";

import { Transition, Dialog } from "@headlessui/react";
import { useState, Fragment, PropsWithChildren } from "react";
import BackDrop from "./Backdrop";
import Header from "./Header";
import StaticSideBar from "./StaticSideBar";
import DynamicSideBar from "./DynamicSideBar";
import SideBarCloseButton from "./SideBarCloseButton";
import { mainMenuItems, teamMenuItems } from "./consts";

type RootLayoutProps = PropsWithChildren<{}>;

export default function RootLayout({ children }: RootLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <BackDrop />
          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <SideBarCloseButton onClose={() => setSidebarOpen(false)} />
                <DynamicSideBar
                  menuItems={mainMenuItems}
                  subMenuItems={teamMenuItems}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <StaticSideBar menuItems={mainMenuItems} subMenuItems={teamMenuItems} />

      <div className="lg:pl-72">
        <Header onMenuOpen={() => setSidebarOpen(true)} />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
