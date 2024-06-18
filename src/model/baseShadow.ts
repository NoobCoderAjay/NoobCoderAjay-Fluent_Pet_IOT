export interface BaseShadow {
  state: BaseState;
  metadata: any;
  version: number;
  timestamp: number;
}

interface BaseState {
  reported?: ReportedState;
}

interface ReportedState {
  bat_level: string;
  fw_ver: string;
  learner_audio_ids: string[];
  teacher_audio_ids: string[];
  paired_children: PairedChildren | undefined;
  project: string;
  serial_number: string;
}

interface PairedChildren {
  [key: string]: PairedChild;
}

interface PairedChild {
  bat_level: string;
  fw_ver?: string;
  learner_audio_ids: string[];
  teacher_audio_ids: string[];
}
