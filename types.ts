export type GainType = "coins_per_hour" | "tap_limit";

type BaseCard = {
  name: string;
  level: number;
  listType: "Simple" | "Coins" | "Invest" | "Academy";
  upgradeCost: number;
  gainType: GainType;
};

export type CardWithTapLimit = {
  tapLimit: number;
  extraTapLimit: number;
} & BaseCard;

export type CardWithCoinsPerHour = {
  coinsPerHour: number;
  extraCoinsPerHour: number;
} & BaseCard;
