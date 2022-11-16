import { useState } from "react";

import Subtab from "../../ui/Subtab";

const Swap = () => {
  const [subtab, setSubtab] = useState(0);

  return (
    <div className="mt-[23px]">
      <div className="flex select-none">
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
    </div>
  );
};

export default Swap;
