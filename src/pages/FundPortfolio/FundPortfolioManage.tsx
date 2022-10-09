import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import dropDownArrow from "../../img/icons/dropDownArrowGray.svg";
import openSeaLogo from "../../img/fundLogos/openSeaLogo.png";
import netFineLogo from "../../img/fundLogos/netFineLogo.png";
import funConLogo from "../../img/fundLogos/funConLogo.png";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const FundPortfolioManage = () => {
    const funds = [
        {
            id: 0,
            name: "OpenSea Fund",
            logo: openSeaLogo,
            expiresIn: 751,
            walletAddress: '8BMMk4gdD263q7QJt3VLWnG2x1mt9HV56b4vX774n4Sc',
            assetBalances: [
                {
                    asset: "BTC",
                    balance: 30,
                },
                {
                    asset: "ETH",
                    balance: 40,
                },
            ],
            protocolBalances: [
                {
                    protocol: "Curve",
                    balance: 29,
                },
                {
                    protocol: "Dopex",
                    balance: 46,
                },
            ],
        },
        {
            id: 1,
            name: "FunCon Fund",
            logo: funConLogo,
            expiresIn: 677,
            walletAddress: '3423ff4r4gdD263q7QJtjudf739t9HV56b4vX324ffsdfs',
            assetBalances: [
                {
                    asset: "BTC",
                    balance: 20,
                },
                {
                    asset: "ETH",
                    balance: 70,
                },
            ],
            protocolBalances: [
                {
                    protocol: "Curve",
                    balance: 12,
                },
                {
                    protocol: "Dopex",
                    balance: 32,
                },
            ],
        },
        {
            id: 3,
            name: "NetFine",
            logo: netFineLogo,
            expiresIn: 952,
            walletAddress: 'sdifnu43824339024kdfn20498ksdn2349ndfwf2',
            assetBalances: [
                {
                    asset: "BTC",
                    balance: 34,
                },
                {
                    asset: "ETH",
                    balance: 56,
                },
            ],
            protocolBalances: [
                {
                    protocol: "Curve",
                    balance: 12,
                },
                {
                    protocol: "Dopex",
                    balance: 82,
                },
            ],
        },
    ]

    return (
        <div className='container mx-auto my-20'>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-2xl bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-100">
                        <div className='flex justify-between space-x-36'>
                            <div className='flex space-x-2 items-center'>
                                <img src={openSeaLogo} alt="" />
                                <p className='text-2xl font-bold'>OpenSea Fund</p>
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
                                funds.map(fund => (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div
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
                                ))
                            }
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default FundPortfolioManage;