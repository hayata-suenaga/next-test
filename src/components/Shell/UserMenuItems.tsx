"use client";

import { Menu, Transition } from "@headlessui/react";
import { classNames } from "./utils";
import Link from "next/link";
import { Fragment } from "react";
import { signOut } from "next-auth/react";

export default function UserMenuItems() {
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
        <Menu.Item>
          {({ active }) => (
            <Link
              className={classNames(
                active ? "bg-gray-50" : "",
                "block px-3 py-1 text-sm leading-6 text-gray-900"
              )}
              href="profile"
            >
              Profile
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <p
              className={classNames(
                active ? "bg-gray-50" : "",
                "block px-3 py-1 text-sm leading-6 text-gray-900"
              )}
              onClick={() => signOut()}
            >
              Profile
            </p>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  );
}
