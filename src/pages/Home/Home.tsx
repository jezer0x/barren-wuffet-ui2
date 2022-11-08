import React from "react";
import HomeV32 from "./HomeV32";

import "./Home.css";
import Contracts from "../../components/Contracts/Contracts";
import Payments from "../../components/Payments/Payments";

export default function Home() {
  return (
    <div className="Home">
      <Contracts />
      <Payments />
      <HomeV32></HomeV32>
    </div>
  );
}
