import React from 'react';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import dropDownArrow from "../../img/icons/dropDownArrowGray.svg";

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

const ListBox = (props: any) => {
    const { funds } = props;
    const [selected, setSelected] = useState(funds[0])
  
    return (
      <div className="relative">
        <Listbox value={selected} onChange={setSelected}>
          <div className="mt-1">
            <Listbox.Button className="w-3/5 rounded-2xl bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-100">
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-2'>
                        <img src={selected?.logo} alt="" />
                        <p className='text-2xl font-bold'>{selected?.name}</p>
                    </div>
                    <img className='block' src={dropDownArrow} alt="" />
                </div>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-3/5 overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {funds.map((fund: any) => (
                  <Listbox.Option
                    key={fund?.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-white'
                      }`
                    }
                    value={fund}
                  >
                    {({ selected }) => (
                      <>
                        <div
                          className={`truncate flex items-center text-lg space-x-3 ${
                            selected ? 'font-bold' : 'font-normal'
                          }`}
                        >
                          <img src={fund?.logo} alt="" />  
                          <p>{fund?.name}</p>
                        </div>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    )
  }

export default ListBox;