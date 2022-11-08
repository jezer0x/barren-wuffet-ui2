import { Fund, FundStatus, Order, Pool, Position, PriceFeed } from "./models";
import { request, gql } from "graphql-request";
import { Fund as Graph_Fund } from "../../.graphclient";
import { BigNumber as BN, ethers } from "ethers";

const toDate = (ts: BigInt) =>
  ts ? new Date(BN.from(ts).toNumber() * 1000) : null;

export interface APIConfig {
  graphUrl: string;
}

export class API {
  graphUrl: string;
  constructor(config: APIConfig) {
    this.graphUrl = config.graphUrl;
  }

  getPools(): Promise<Pool[]> {
    throw new Error("Not implemented");
  }

  async getFunds(): Promise<Fund[] | undefined> {
    const data = await request<{ funds: Graph_Fund[] }>(
      this.graphUrl,
      gql`
        {
          funds {
            id
            name
            creation_timestamp
            closed_timestamp
            manager_fee_percentage
            total_collateral_raised
            subscriptions {
              id
            }
            manager {
              id
            }
            subscription_constraints {
              id
              lockin
              deadline
            }
            rules
            positions
          }
        }
      `
    );
    return Promise.resolve(
      data.funds.map(
        (fund: Graph_Fund): Fund => ({
          id: fund.id,
          name: fund.name,
          // formatUnits(number, decimals) is the right way to do this.
          // but we need to store a map of the decimals for the asset in question
          // try and get this from the gmx stuff.
          // It will be actually be best to everything as BN all the way till the actual display to user.
          // then we just have to figure it out at the TextBox.
          amount_raised: parseFloat(
            ethers.utils.formatEther(fund.total_collateral_raised)
          ),
          investor_count: fund.subscriptions.length,
          subscriptions: fund.subscriptions?.map((s) => s.address),
          rules: fund.rules?.map((r) => r.id),
          positions: fund.positions?.map((p) => p.id),
          status: fund.closed_timestamp
            ? FundStatus.CLOSED
            : FundStatus.RAISING,
          admin_fee: fund.manager_fee_percentage,
          manager: fund.manager.id,
          creation_timestamp: toDate(fund.creation_timestamp) || new Date(),
          deploy_timestamp:
            toDate(fund.subscription_constraints.deadline) || new Date(),
          close_timestamp: toDate(fund.subscription_constraints.lockin),
        })
      )
    );
  }

  getPriceFeed(): Promise<PriceFeed[]> {
    throw new Error("Not implemented");
  }

  getOpenOrders(): Promise<Order[]> {
    throw new Error("Not implemented");
  }

  getPositions(): Promise<Position[]> {
    throw new Error("Not implemented");
  }
}

export default API;