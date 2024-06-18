import { EmptyStrings } from "./constants";

export const getNameIntial = (pusherName?: string) => {
  if (!pusherName) {
    return EmptyStrings.EMPTY;
  }
  if (pusherName.length < 4) {
    return pusherName.toUpperCase();
  }
  return pusherName
    .split(EmptyStrings.ONE_SPACE_EMPTY)
    .map((name) => name[0].toUpperCase())
    .join(EmptyStrings.EMPTY)
    .substring(0, 2);
};
