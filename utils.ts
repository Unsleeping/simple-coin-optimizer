import { SimpleList, InvestList, AcademyList, CoinsList } from "./lists";
import { CardWithCoinsPerHour, CardWithTapLimit, GainType } from "./types";

const allLists = [...SimpleList, ...CoinsList, ...InvestList, ...AcademyList];

const calcProfit = (
  gainType: GainType,
  cards: (CardWithTapLimit | CardWithCoinsPerHour)[]
) => {
  switch (gainType) {
    case "tap_limit":
      return (cards as CardWithTapLimit[]).map((card) => ({
        ...card,
        profit: (card.extraTapLimit / card.upgradeCost).toFixed(4),
      }));
    case "coins_per_hour":
      return (cards as CardWithCoinsPerHour[]).map((card) => ({
        ...card,
        profit: (card.extraCoinsPerHour / card.upgradeCost).toFixed(4),
      }));
    default:
      throw new Error(`Unknown gain type: ${gainType}`);
  }
};

type WithProfit<T> = T & {
  profit: string;
};

const sortCardsByProfit = (
  cards: WithProfit<CardWithTapLimit | CardWithCoinsPerHour>[]
) => {
  return cards.sort((a, b) => {
    const aProfit = parseFloat(a.profit);
    const bProfit = parseFloat(b.profit);
    if (aProfit > bProfit) {
      return -1;
    }
    if (aProfit < bProfit) {
      return 1;
    }
    return 0;
  });
};

export const getMostProfitableCardsToIncreaseTapLimit = () => {
  const cardsWithTapLimit = allLists.filter(
    (card) => card.gainType === "tap_limit"
  );

  const cardsWithProfit = calcProfit("tap_limit", cardsWithTapLimit);

  const copy = [...cardsWithProfit];
  const sortedCards = sortCardsByProfit(copy);

  return sortedCards;
};

export const getMostProfitableCardsToIncreaseCoinsPerHour = () => {
  const cardsWithCoinsPerHour = allLists.filter(
    (card) => card.gainType === "coins_per_hour"
  );

  const cardsWithProfit = calcProfit("coins_per_hour", cardsWithCoinsPerHour);

  const copy = [...cardsWithProfit];
  const sortedCards = sortCardsByProfit(copy);

  return sortedCards;
};
