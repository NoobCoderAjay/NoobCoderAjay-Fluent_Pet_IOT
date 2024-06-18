export enum PusherType {
  TEACHER = 'teacher',
  LEARNER = 'learner',
  EVENT_NOTE = 'event note',
  BASE = 'base',
}

const specialPusherTypes = [PusherType.EVENT_NOTE, PusherType.BASE] as string[];

export const isPusherEventNote = (name: string | undefined) =>
  name?.toLowerCase() === PusherType.EVENT_NOTE;

export const isPusherBase = (name: string | undefined) =>
  name?.toLowerCase() === PusherType.BASE;

export const isPusherSpecialType = (name: string | undefined) =>
  specialPusherTypes.includes(name?.toLowerCase() || '');

export const isPusherHumanOrAnimal = (name: string) =>
  !isPusherSpecialType(name);

export interface Pusher {
  pusher_id: number;
  avatar_uri?: string;
  birth_date?: string;
  country?: string;
  created_at: string;
  email?: string;
  id: number;
  interactions_count: number;
  is_hidden: boolean;
  is_human: boolean;
  is_household_invitation: boolean;
  is_household_member: boolean;
  learner_type?: LearnerType;
  learner_type_id?: number;
  name: string;
  participant_identifier?: any;
  sex?: string;
  sub_type?: string;
  training_started_at?: string;
  unique_name?: string;
  updated_at?: string;
  language?: string;
  research_id?: string;
}

export interface LearnerType {
  created_at: string;
  id: number;
  name: string;
  updated_at?: string;
}
