import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import dropDownArrow from "../../img/icons/dropDownArrowGray.svg";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type DropDownMenuProps = {
    handleFundSwitch: any;
    presentFund: any,
    funds: any,
    presentFundId: number,
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ handleFundSwitch, presentFund, funds, presentFundId }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-2xl bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-100">
                        <div className='flex justify-between w-80'>
                            <div className='flex space-x-2 items-center'>
                                <img src={presentFund?.logo} alt="" />
                                <p className='text-2xl font-bold'>{presentFund?.name}</p>
                            </div>
                            <img src={dropDownArrow} alt="" />
                        </div>
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-11/12 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {
                                // eslint-disable-next-line array-callback-return
                                funds.map((fund: { id: React.Key | null | undefined; logo: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
                                    if (fund.id !== presentFundId) {
                                        return (
                                            <Menu.Item key={fund.id}>
                                                {({ active }) => (
                                                    <div
                                                        onClick={() => handleFundSwitch(fund.id)}
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                            'px-4 py-2 w-full font-bold text-xl text-start flex items-center space-x-4'
                                                        )}
                                                    >
                                                        <img src={fund.logo} alt="" />
                                                        <button>
                                                            {fund.name}
                                                        </button>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        )
                                    }
                                })
                            }
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
    );
};

export default DropDownMenu;