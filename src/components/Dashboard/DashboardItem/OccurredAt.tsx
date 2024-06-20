import moment from "moment";
import React from "react";

import use24hourClock from "src/hooks/use24hourClock";

import MultiLineOccurredAt from "./MultiLineOccurredAt";
import SingleLineOccurredAt from "./SingleLineOccurredAt";

interface Props {
  datetime: string;
  isSingleLine?: boolean;
  fromNowStyle?: any;
}

const OccurredAt: React.FC<Props> = ({
  datetime,
  isSingleLine,
  fromNowStyle,
}) => {
  const is24hourClock = use24hourClock();

  const localDate = moment(datetime);
  const dateTime = localDate.format(
    is24hourClock ? "MMM Do | H:mm " : "MMM Do | h:mm A "
  );
  const fromNow = moment(localDate, "YYYYMMDD").fromNow();

  if (isSingleLine) {
    return <SingleLineOccurredAt dateTime={dateTime} fromNow={fromNow} />;
  }
  return (
    <MultiLineOccurredAt
      fromNowStyle={fromNowStyle}
      dateTime={dateTime}
      fromNow={fromNow}
    />
  );
};

export default OccurredAt;
