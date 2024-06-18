import { Base } from './base';
import { Pusher } from './pusher';

export enum DashboardTab {
  ALL = 'All',
  UNASSIGNED = 'Unassigned',
}

export enum InteractionOrigin {
  APP = 'app',
  BASE = 'fp_connect_base',
  DB_MANUAL_IMPORT = 'db-manual-import',
  INTERACTION_IMPORTER = 'interaction_importer',
  INTERACTION_SPLIT = 'interaction_split',
}

export enum ActivityType {
  NOTE = 'Note',
  INTERACTION = 'Interaction',
}

export interface Activity {
  id: number;
  type: string;
  occurred_at: string;
  is_flagged: boolean;
  origin: InteractionOrigin;
}

export interface Interaction {
  activity: Activity;
  board_id: number;
  buttons: Button[];
  contexts: Context[];
  created_at: string;
  device_timezone: string;
  id: number;
  is_flagged: boolean;
  is_reviewed: boolean;
  meaning_id?: number;
  meaning?: Meaning;
  meanings: Meaning[];
  origin: InteractionOrigin;
  modeled_pushers: Pusher[];
  note: string;
  occurred_at: string;
  pusher?: Pusher;
  pusher_id: number;
  updated_at: string;
  type: ActivityType;
}

export interface Button {
  audio_id: number | null;
  board_id: number;
  button_concept_id: number | null;
  button_presses: number;
  created_at: string;
  id: number;
  introduced_at: string;
  is_hidden: boolean;
  normalized_word: string;
  note: string;
  origin: string;
  text: string;
  word: string;
  updated_at: string;
  webhook_url: string;
  type?: 'connect' | 'classic';

  // connectButton properties
  base?: Base;
  base_button?: BaseButton;
}

export interface BaseButton {
  button_serial_number: string;
  battery_level?: number;
}

export interface Context {
  created_at: string;
  id: number;
  text: string;
  updated_at: string;
}

export interface Meaning {
  created_at?: string;
  id?: number;
  text: string;
  updated_at?: string;
  uses?: number;
}

export enum ActivitySortType {
  OCCURRED_AT = 'occurred_at_desc',
  CREATED_AT = 'created_at_desc',
}

export enum PushNotificationFrequency {
  ALL = 'all',
  NONE = 'none',
}

export interface ContextUsageStats {
  text: string;
  count: number;
}

export interface ButtonPressStats {
  text: string;
  button_presses: number;
}

interface MostFrequentButtonCombination {
  buttons: Button[];
  count: number;
}

export interface InteractionPusherStats {
  days_since_oldest_entry: number;
  active_buttons: number;
  number_of_buttons_distinct_by_name: number;
  number_of_buttons_pressed: number;
  most_frequent_contexts: ContextUsageStats[];
  most_frequent_learner_button_presses: ButtonPressStats[];
  least_frequent_learner_button_presses: ButtonPressStats[];
  most_frequent_teacher_button_presses: ButtonPressStats[];
  least_frequent_teacher_button_presses: ButtonPressStats[];
  most_frequent_button_combination: MostFrequentButtonCombination;
}

export interface InteractionsData {
  total: number;
  communication_events: number;
  modeling_events: number;
  interactions: Interaction[];
  pusher_stats: InteractionPusherStats;
}
