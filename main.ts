// 1 tap per second refills, coins per hour can be claimed once per 8h

import {
  getMostProfitableCardsToIncreaseCoinsPerHour,
  getMostProfitableCardsToIncreaseTapLimit,
} from "./utils";

// profit:
// a) increased tap limit by X coins get you that X coins now. refill at 1 tap per second
// b) passive earnings: you should tap the button to farm and wait for 8h. Your farming speed is Y coins per hour. You will get 8*Y coins per 8h

const gainTypeToCalculate = process.env.GAIN_TYPE;

if (!gainTypeToCalculate) {
  console.log(
    "Please set GAIN_TYPE environment variable to tap_limit or coins_per_hour"
  );
}

if (gainTypeToCalculate === "tap_limit") {
  const mostProfitableCardsToIncreaseTapLimit =
    getMostProfitableCardsToIncreaseTapLimit();

  console.log(mostProfitableCardsToIncreaseTapLimit);
}

if (gainTypeToCalculate === "coins_per_hour") {
  const mostProfitableCardsToIncreaseCoinsPerHour =
    getMostProfitableCardsToIncreaseCoinsPerHour();

  console.log(mostProfitableCardsToIncreaseCoinsPerHour);
}
