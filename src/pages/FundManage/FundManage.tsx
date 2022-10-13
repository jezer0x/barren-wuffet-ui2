import React from 'react';
import { Outlet } from 'react-router-dom';
import FundBanner from '../../components/Fund/FundBanner';
import openSeaLogo from "../../img/fundLogos/openSeaLogo.png";
import netFineLogo from "../../img/fundLogos/netFineLogo.png";
import funConLogo from "../../img/fundLogos/funConLogo.png";
import DropDownMenu from '../../components/Fund/DropDownMenu';
import { Trans } from '@lingui/macro';
import copyIcon from '../../img/icons/carbonCopyIcon.svg';
import qrCodeIcon from '../../img/icons/carbonQrCodeIcon.svg';
import updateNowIcon from '../../img/icons/carbonUpdateNowIcon.svg';
import telegramIcon from '../../img/icons/telegramYellowIcon.svg';
import twitterIcon from '../../img/icons/twitterYellowIcon.svg';
import { numberWithCommas } from '../../data/formatting';

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
        portfolioValue: 459032,
        startingValue: 700,
        dataUpdated: '7 min',
        newlyAddedMoney: 3511.78,
        upPercentage: 23.67,
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
        portfolioValue: 314589,
        startingValue: 340,
        dataUpdated: '10 min',
        newlyAddedMoney: 856.98,
        upPercentage: 18.45,
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

const FundManage = () => {
    return (
        <div>
            <FundBanner
                funds={funds}
            ></FundBanner>
            <Outlet context={[funds]} />
        </div>
    );
};

export default FundManage;