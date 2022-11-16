import { useState } from "react";

import Subtab from "../../ui/Subtab";

const Withdraw = () => {
  const [subtab, setSubtab] = useState(0);

  return (
    <div className="mt-[23px]">
      <div className="flex select-none">
        <Subtab
          title="Withdraw"
          isActive={subtab === 0}
          setIsActive={() => setSubtab(0)}
        />
        <Subtab
          title="Unstake"
          isActive={subtab === 1}
          setIsActive={() => setSubtab(1)}
        />{" "}
      </div>
    </div>
  );
};

export default Withdraw;
