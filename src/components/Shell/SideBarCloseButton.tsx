import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

type CloseButtonProps = {
  onClose: () => void;
};

export default function SideBarCloseButton({ onClose }: CloseButtonProps) {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-in-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
        <button type="button" className="-m-2.5 p-2.5" onClick={onClose}>
          <span className="sr-only">Close sidebar</span>
          <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </Transition.Child>
  );
}
