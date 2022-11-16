import { useState } from "react";

import Checkbox from "../../ui/Checkbox";
import ConnectWallet from "../../ui/ConnectWallet";
import PaymentsField from "../../ui/PaymentsField";
import Subtab from "../../ui/Subtab";
import { ReactComponent as InfoIcon } from "../../../img/icons/info.svg";

const Deposit = () => {
  const [subtab, setSubtab] = useState(0);

  return (
    <div className="mt-[23px]">
      <div className="flex select-none mb-[9px]">
        <Subtab
          title="Deposit"
          isActive={subtab === 0}
          setIsActive={() => setSubtab(0)}
        />
        <Subtab
          title="Stake"
          isActive={subtab === 1}
          setIsActive={() => setSubtab(1)}
        />
        <Subtab
          title="Deposit & Stake"
          isActive={subtab === 2}
          setIsActive={() => setSubtab(2)}
        />
      </div>

      {(() => {
        switch (subtab) {
          case 0:
            return (
              <div className="select-none">
                <div className="mb-[13px]">
                  <PaymentsField title="USDT" icon={"usdtsm.svg"} />
                </div>
                <div className="mb-[13px]">
                  <PaymentsField title="WBTC" icon={"wbtcsm.svg"} />
                </div>
                <div className="mb-[27px]">
                  <PaymentsField title="ETH" icon={"ethsm.svg"} />
                </div>

                <Checkbox label="Deposit Wrapped" />

                <div className="flex justify-between mt-[24px]">
                  <span className="font-ubuntu text-white font-normal text-[14px]">
                    Min. Curve steth LP Tokens
                  </span>
                  <span className="font-ubuntu text-white text-[14px] w-[35px]">
                    -
                  </span>
                </div>
                <div className="flex justify-between mt-[8px] mb-[24px]">
                  <span className="font-ubuntu text-white font-normal text-[14px]">
                    Slippage
                  </span>
                  <span className="font-ubuntu text-white text-[14px] w-[35px]">
                    - %
                  </span>
                </div>

                <ConnectWallet />
              </div>
            );
          case 1:
            return (
              <div className="select-none">
                <div className="mb-[21px]">
                  <PaymentsField title="LP Tokens" />
                </div>

                <ConnectWallet />
              </div>
            );
          case 2:
            return (
              <div className="select-none">
                <div className="mb-[13px]">
                  <PaymentsField title="ETH" icon={"ethsm.svg"} />
                </div>
                <div className="mb-[22px]">
                  <PaymentsField title="stETH" icon={"usdtsm.svg"} />
                </div>

                <div className="flex justify-between">
                  <span className="font-ubuntu text-white font-normal text-[14px]">
                    Min. Curve steth LP Tokens
                  </span>
                  <span className="font-ubuntu text-white text-[14px] w-[35px] flex items-center">
                    -
                    <InfoIcon className="ml-[6px]" />
                  </span>
                </div>
                <div className="flex justify-between mt-[8px] mb-[24px]">
                  <span className="font-ubuntu text-white font-normal text-[14px]">
                    Slippage
                  </span>
                  <span className="font-ubuntu text-white text-[14px] w-[35px]">
                    - %
                  </span>
                </div>

                <ConnectWallet />
              </div>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Deposit;
