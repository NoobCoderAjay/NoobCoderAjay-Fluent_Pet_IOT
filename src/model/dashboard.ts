export interface DashboardRefresh {
  flushInteractions: boolean;
}

export enum SearchType {
  ANY = 'any',
  ALL = 'all',
}

interface SearchTypeFilter {
  buttons: SearchType;
  contexts: SearchType;
  bases: SearchType;
}

export type EventNoteFilter = 'show' | 'hide' | 'showOnly';
export type EntriesWithNotesFilter = 'show' | 'hide' | 'showOnly';
export type FlaggedEntriesFilter = 'show' | 'hide' | 'showOnly';
export type ButtonPressesFilter = 'all' | 'singlePress' | 'multiPress';

export interface DashboardFilters {
  searchText: string | null;
  startDate: string | null;
  endDate: string | null;
  sinceDate: string | null;
  pushers: number[]; // search by id
  buttons: string[]; // search by meaning instead of id
  contexts: number[]; // search by id
  eventNotes: EventNoteFilter;
  entriesWithNotes: EntriesWithNotesFilter;
  buttonPresses: ButtonPressesFilter;
  flaggedEntries: FlaggedEntriesFilter;
  searchType: SearchTypeFilter;
  bases: number[];
}
export const DEFAULT_FILTERS: DashboardFilters = {
  searchText: null,
  sinceDate: null,
  startDate: null,
  endDate: null,
  // TODO FP-284: Add option to pick date range (untilDate)
  pushers: [],
  buttons: [],
  contexts: [],
  bases: [],
  eventNotes: 'show',
  entriesWithNotes: 'show',
  flaggedEntries: 'show',
  buttonPresses: 'all',
  searchType: {
    buttons: SearchType.ANY,
    contexts: SearchType.ANY,
    bases: SearchType.ANY,
  },
};

export enum PusherFeedTab {
  FEED = 'Feed',
  STATS = 'Stats',
}
