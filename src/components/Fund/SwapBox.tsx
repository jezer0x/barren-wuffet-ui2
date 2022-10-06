import React from "react";
import { useState } from "react";
import TokenSelector from "../Form/TokenSelector";

export default function SwapBox(props: { tokens: string[] }) {
  const { tokens } = props;
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[0]);

  return (
    <div>
      Token In: <input type="select" className="rounded text-pink-500" />
      <TokenSelector
        tokens={tokens}
        selectedToken={fromToken}
        setSelectedToken={setFromToken}
      />
      <input type="text" />
      Token Out:
      <TokenSelector
        tokens={tokens}
        selectedToken={toToken}
        setSelectedToken={setToToken}
      />
      <input type="text" />
    </div>
  );
}
