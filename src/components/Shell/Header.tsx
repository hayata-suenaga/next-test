import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { userMenuItems } from "./consts";
import { classNames } from "./utils";

type HeaderProps = {
  onMenuOpen: () => void;
};

export default function Header({ onMenuOpen }: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 flex justify-between lg:justify-end h-16 shrink-0 items-center gap-x-4 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={onMenuOpen}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
          aria-hidden="true"
        />

        {/* Profile dropdown */}
        <Menu as="div" className="relative">
          <MenuButton />
          <MenuItems />
        </Menu>
      </div>
    </div>
  );
}

function MenuButton() {
  return (
    <Menu.Button className="-m-1.5 flex items-center p-1.5">
      <span className="sr-only">Open user menu</span>
      <img
        className="h-8 w-8 rounded-full bg-gray-50"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <span className="hidden lg:flex lg:items-center">
        <span
          className="ml-4 text-sm font-semibold leading-6 text-gray-900"
          aria-hidden="true"
        >
          Tom Cook
        </span>
        <ChevronDownIcon
          className="ml-2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
    </Menu.Button>
  );
}

function MenuItems() {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
        {userMenuItems.map((item) => (
          <Menu.Item key={item.name}>
            {({ active }) => (
              <a
                href={item.href}
                className={classNames(
                  active ? "bg-gray-50" : "",
                  "block px-3 py-1 text-sm leading-6 text-gray-900"
                )}
              >
                {item.name}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
  );
}
