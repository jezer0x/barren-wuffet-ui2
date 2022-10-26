// @ts-nocheck
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  FaChevronDown as ChevronUpDownIcon,
  FaCheck as CheckIcon,
} from "react-icons/fa";

export default function MultiSelector({ items, label }) {
  const [selected, setSelected] = useState([items[0], items[1]]);
  const [query, setQuery] = useState("");

  const filtereditems =
    query === ""
      ? items
      : items.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const isSelectedAll = items.length === selected.length;
  return (
    <div>
      <div>{label}</div>
      <Combobox value={selected} onChange={setSelected} multiple>
        <div className="mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={() => ``}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute right-4 inset-y-0 right-0 pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div
                className={`relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900`}
              >
                <span
                  className={`block truncate border-b-2 pb-2 ${
                    isSelectedAll ? "font-medium" : "font-normal"
                  }`}
                  onClick={() => {
                    isSelectedAll ? setSelected([]) : setSelected(items);
                  }}
                >
                  {"Select All"}
                </span>

                {isSelectedAll ? (
                  <span
                    className={`absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600`}
                  >
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </div>
              {filtereditems.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filtereditems.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-black" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-blue" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
