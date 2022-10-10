import React, { useEffect, useState } from 'react';
import openSeaLogo from "../../img/fundLogos/openSeaLogo.png";
import netFineLogo from "../../img/fundLogos/netFineLogo.png";
import funConLogo from "../../img/fundLogos/funConLogo.png";
import DropDownMenu from '../../components/FundPortfolio/DropDownMenu';
import { Trans } from '@lingui/macro';
import copyIcon from '../../img/icons/carbonCopyIcon.svg';
import qrCodeIcon from '../../img/icons/carbonQrCodeIcon.svg';
import updateNowIcon from '../../img/icons/carbonUpdateNowIcon.svg';

interface fundType {
    id: number;
    name: string;
    logo: string;
    investors: number;
    expiresIn: number;
    portfolioValue: number;
    startingValue: number;
    dataUpdated: string;
    newlyAddedMoney: number;
    upPercentage: number;
    wallet: number;
    walletAddress: string;
    assetBalances: object;
    protocolBalances: object;
}

const funds = [
    {
        id: 0,
        name: "OpenSea Fund",
        logo: openSeaLogo,
        investors: 107,
        expiresIn: 751,
        portfolioValue: 234567,
        startingValue: 400,
        dataUpdated: '1 min',
        newlyAddedMoney: 2560.78,
        upPercentage: 14.67,
        wallet: 8323,
        walletAddress: '8BMMk4gdD263q7QJt3VLWnG2x1mt9HV56b4vX774n4Sc',
        assetBalances: [
            {
                asset: "BTC",
                balance: 30,
                dollarValue: 584991,
                down: 2600,
                percentage: 24.67,
            },
            {
                asset: "ETH",
                balance: 40,
                dollarValue: 811,
                down: 500,
                percentage: 13.97,
            },
        ],
        protocolBalances: [
            {
                protocol: "Curve",
                balance: 29,
                dollarValue: 564,
                down: 0,
                percentage: 23.6,
            },
            {
                protocol: "Dopex",
                balance: 46,
                dollarValue: 2348,
                down: 0,
                percentage: 5,
            },
        ],
    } as fundType,
    {
        id: 1,
        name: "FunCon Fund",
        logo: funConLogo,
        investors: 87,
        expiresIn: 677,
        portfolioValue: 234567,
        startingValue: 400,
        dataUpdated: '1 min',
        newlyAddedMoney: 2560.78,
        upPercentage: 14.67,
        wallet: 5643,
        walletAddress: '3423ff4r4gdD263q7QJtjudf739t9HV56b4vX324ffsdfs',
        assetBalances: [
            {
                asset: "BTC",
                balance: 30,
                dollarValue: 584991,
                down: 2600,
                percentage: 24.67,
            },
            {
                asset: "ETH",
                balance: 40,
                dollarValue: 811,
                down: 500,
                percentage: 13.97,
            },
        ],
        protocolBalances: [
            {
                protocol: "Curve",
                balance: 29,
                dollarValue: 564,
                down: 0,
                percentage: 23.6,
            },
            {
                protocol: "Dopex",
                balance: 46,
                dollarValue: 2348,
                down: 0,
                percentage: 5,
            },
        ],
    } as fundType,
    {
        id: 3,
        name: "NetFine",
        logo: netFineLogo,
        investors: 145,
        expiresIn: 952,
        portfolioValue: 234567,
        startingValue: 400,
        dataUpdated: '1 min',
        newlyAddedMoney: 2560.78,
        upPercentage: 14.67,
        wallet: 6732,
        walletAddress: 'sdifnu43824339024kdfn20498ksdn2349ndfwf2',
        assetBalances: [
            {
                asset: "BTC",
                balance: 30,
                dollarValue: 584991,
                down: 2600,
                percentage: 24.67,
            },
            {
                asset: "ETH",
                balance: 40,
                dollarValue: 811,
                down: 500,
                percentage: 13.97,
            },
        ],
        protocolBalances: [
            {
                protocol: "Curve",
                balance: 29,
                dollarValue: 564,
                down: 0,
                percentage: 23.6,
            },
            {
                protocol: "Dopex",
                balance: 46,
                dollarValue: 2348,
                down: 0,
                percentage: 5,
            },
        ],
    } as fundType,
] 

const FundPortfolioManage = () => {
    const [presentFundId, setPresentFundId] = useState(funds[0].id);
    const [presentFund, setPresentFund] = useState<fundType>(funds[0]);

    const { expiresIn, investors, walletAddress, portfolioValue, startingValue, dataUpdated, newlyAddedMoney, upPercentage, assetBalances, protocolBalances } = presentFund;

    const handleFundSwitch = (id: React.SetStateAction<number>) => {
        setPresentFundId(id)
    }
    useEffect(() => {
        const filtered = funds.filter((fund) => fund.id === presentFundId)
        setPresentFund(filtered[0]);
    }, [presentFund, presentFundId]);
    return (
        <div className='container mx-auto my-20'>
            <div className='bg-[#1c1b25] pt-10 px-8 rounded-xl'>
                <div className='grid grid-cols-2'>
                    <div className='space-y-6'>
                        <DropDownMenu
                            handleFundSwitch={handleFundSwitch}
                            presentFund={presentFund}
                            funds={funds}
                            presentFundId={presentFundId}
                        ></DropDownMenu>
                        <div className='flex space-x-12'>
                            <p className='text-xs font-medium text-gray-400'>
                                <Trans>
                                    Expiry in:
                                </Trans>
                                <span className='bg-[#33333f] py-1 px-2 rounded-xl ml-2'>
                                    <Trans>
                                        {expiresIn} days
                                    </Trans>
                                </span>
                            </p>
                            <p className='text-xs font-medium text-gray-400'>
                                <Trans>
                                    Investors:
                                </Trans>
                                <span className='bg-[#33333f] py-1 px-2 rounded-xl ml-2'>
                                    <Trans>
                                        {investors}
                                    </Trans> 
                                </span>
                            </p>
                        </div>
                        <div className='flex space-x-3'>
                            <p className='text-xs font-medium text-gray-400 mr-6'>{walletAddress}</p>
                            <button className='cursor-pointer'>
                                <img src={copyIcon} alt="" />
                            </button>
                            <button className='cursor-pointer'>
                                <img src={qrCodeIcon} alt="" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-3xl text-white font-light'>
                                <Trans>
                                    Portfolio Value
                                </Trans>
                            </p>
                            <div className='space-x-2'>
                                <button
                                    className='px-4 py-3 bg-black text-yellow-400 rounded-md text-xs cursor-pointer font-medium'
                                >
                                    24H
                                </button>
                                <button
                                    className='px-4 py-3 bg-black text-white rounded-md text-xs cursor-pointer font-medium'
                                >
                                    1D
                                </button>
                                <button
                                    className='px-4 py-3 bg-black text-white rounded-md text-xs cursor-pointer font-medium'
                                >
                                    7D
                                </button>
                                <button
                                    className='px-4 py-3 bg-black text-white rounded-md text-xs cursor-pointer font-medium'
                                >
                                    1M
                                </button>
                            </div>
                        </div>
                        <h2 className='text-white text-4xl mt-3'>${portfolioValue}</h2>
                        <p className='text-white text-xs mt-3'>
                            <Trans>
                                Starting value: ${ startingValue }
                            </Trans>
                        </p>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-5 mt-3'>
                                <p className='text-gray-400 text-xs'>
                                    <Trans>
                                        Data updated: {dataUpdated} ago
                                    </Trans>
                                </p>
                                <button className='cursor-pointer'>
                                    <img src={updateNowIcon} alt="" />
                                </button>
                            </div>
                            <div className='flex items-center space-x-6'>
                                <p className='text-green-400 text-xs font-medium'>
                                    +${ newlyAddedMoney }
                                </p>
                                <p
                                    className='text-green-400 text-xs font-medium bg-green-900 bg-opacity-70 py-1 px-2 rounded-2xl'
                                >
                                    +{ upPercentage }%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FundPortfolioManage;