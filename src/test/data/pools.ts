import { parseEther } from "ethers/lib/utils";
import { Pool } from "../../api/models";

export const pools: Pool[] = [
  {
    key: "1",
    indexToken: {
      symbol: "ETH",
    },
    apr: parseEther("10"),
    fee: parseEther("10"),
    volume: parseEther("1000"),
    tvl: parseEther("100000"),
  },
  {
    key: "2",
    indexToken: {
      symbol: "BTC",
    },
    apr: parseEther("10"),
    fee: parseEther("10"),
    volume: parseEther("1000"),
    tvl: parseEther("100000"),
  },
  {
    key: "3",
    indexToken: {
      symbol: "USD",
    },
    apr: parseEther("10"),
    fee: parseEther("10"),
    volume: parseEther("1000"),
    tvl: parseEther("100000"),
  },
];
