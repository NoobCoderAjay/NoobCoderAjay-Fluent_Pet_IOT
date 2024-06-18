import * as Localization from 'expo-localization';

export default function use24hourClock() {
  return Localization.useCalendars()[0]?.uses24hourClock;
}
