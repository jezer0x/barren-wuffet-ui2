import { useState } from "react";

import ConnectWallet from "../../ui/ConnectWallet";
import PaymentsField from "../../ui/PaymentsField";
import { ReactComponent as InfoIcon } from "../../../img/icons/info.svg";
import Tabs from "../../Tabs/Tabs";
import { t } from "@lingui/macro";
import Checkbox from "../../Form/Checkbox";

const DepositTab = () => {
  const [depositWrapped, setDepositWrapped] = useState(false);
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

      <Checkbox
        label="Deposit Wrapped"
        isChecked={depositWrapped}
        setIsChecked={setDepositWrapped}
      />

      <div className="flex justify-between mt-[24px]">
        <span className="font-ubuntu text-white font-normal text-[14px]">
          Min. Curve steth LP Tokens
        </span>
        <span className="font-ubuntu text-white text-[14px] w-[35px]">-</span>
      </div>
      <div className="flex justify-between mt-[8px] mb-[24px]">
        <span className="font-ubuntu text-white font-normal text-[14px]">
          Slippage
        </span>
        <span className="font-ubuntu text-white text-[14px] w-[35px]">- %</span>
      </div>

      <ConnectWallet />
    </div>
  );
};

const StakeTab = () => {
  return (
    <div className="select-none">
      <div className="mb-[21px]">
        <PaymentsField title="LP Tokens" />
      </div>

      <ConnectWallet />
    </div>
  );
};

const DepositAndStakeTab = (props: {}) => {
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
        <span className="font-ubuntu text-white text-[14px] w-[35px]">- %</span>
      </div>

      <ConnectWallet />
    </div>
  );
};

const Deposit = () => {
  return (
    <div className="mt-[23px] mb-[9px]">
      <Tabs
        options={[
          {
            label: t`Deposit`,
            content: <DepositTab />,
          },
          {
            label: t`Stake`,
            content: <StakeTab />,
          },
          {
            label: t`Deposit & Stake`,
            content: <DepositAndStakeTab />,
          },
        ]}
      />
    </div>
  );
};

export default Deposit;
