import { billSamples } from "../Bills.sample";
import { Bill } from "../Bills.types";

type billsByUniqueDateType = {
  dates: string[];
  billsDueDateMap: Record<string, Bill[]>;
};
export const billsByUniqueDueDate = (): billsByUniqueDateType => {
  const allDueDates = billSamples.map(({ dueDate }) => dueDate).flat();
  const uniqueDueDates = Array.from(new Set(allDueDates));

  const billsByUniqueDueDateMap = uniqueDueDates.reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: billSamples.filter(({ dueDate }) => dueDate.includes(cur)),
    };
  }, {});

  return { dates: uniqueDueDates, billsDueDateMap: billsByUniqueDueDateMap };
};
