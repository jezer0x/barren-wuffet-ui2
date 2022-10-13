import React from "react";
import { Trans } from "@lingui/macro";
import { useOutletContext } from "react-router-dom";
import { numberWithCommas } from "../../data/formatting";

export default function FundPortfolio(props: any) {
  const [selected]: any = useOutletContext();
  const { assetBalances, protocolBalances } = selected || {};
  const { asset } = assetBalances || {};
  console.log(assetBalances)
  return (
    <div className="container mx-auto">
      <div className="mx-5 px-8 py-12 bg-[#1c1b25]">
        {
          assetBalances?.map((asset: any) => (
            <div>
              <img src={asset?.img} alt="" />
              <div>
                <p className="text-white">{asset?.name}</p>
                <p className="text-white text-xl">$ {numberWithCommas(asset?.dollarValue)}</p>
              </div>
              <div>
                <p className="text-white">{asset?.balance} <span className="text-gray-500">{ asset?.shortName }</span></p>
                <div className="flex items-center space-x-3">
                  <p className="text-red-400 text-xs">-${asset?.down}</p>
                  <p className="text-xs bg-[#33333f] py-1 px-2 rounded-xl ml-2 text-gray-400">{ asset?.percentage }</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
