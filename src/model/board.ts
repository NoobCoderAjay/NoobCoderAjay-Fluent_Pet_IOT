import { Button } from './interaction';

export interface Board {
  created_at: string;
  id: number;
  updated_at: string;
  user_id: number;
  active_buttons: Button[];
  buttons: Button[];
}

export enum ButtonSortType {
  ALPHABET = 'alphabet',
  DATE = 'date',
  FREQUENCY = 'frequency',
}

export enum ButtonType {
  CONNECT = 'connect',
  CLASSIC = 'classic',
  INAUDIBLE = 'inaudible',
}

export interface SelectedButton {
  value: number;
  label: string;
  isConnect: boolean;
}

export interface ButtonConcept {
  concept: string;
  created_at: string;
  id: number;
  updated_at: string;
}
