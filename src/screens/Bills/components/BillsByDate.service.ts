import { billSamples } from "../Bills.sample";

export const billsByUniqueDueDate = () => {
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
