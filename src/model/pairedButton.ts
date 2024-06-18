export interface PairedButton {
  audio_id?: number;
  base: Base;
  base_button: BasesButtons;
  board: Board;
  board_id: number;
  button_concept_id?: number;
  created_at: string;
  deleted_at?: string;
  deleted_by?: number;
  device_id?: number;
  id: number;
  introduced_at?: string;
  is_hidden: boolean;
  note?: string;
  origin: string;
  text: string;
  updated_at: string;
}

interface Base {
  board_id: number;
  created_at: string;
  created_by_user_id: number;
  deleted_at?: string;
  deleted_by?: number;
  id: number;
  name?: string;
  serial_number: string;
  updated_at?: string;
  user_id?: number;
}

interface BasesButtons {
  base_id: number;
  button_id: number;
  button_serial_number: string;
  created_at: string;
  id: number;
  updated_at: string;
}

interface Board {
  created_at: string;
  household_id: number;
  id: number;
  name: string;
  updated_at: string;
}
