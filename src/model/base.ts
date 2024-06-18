import { BaseShadow } from './baseShadow';
import { Pusher } from './pusher';

export interface Base {
  id: number;
  battery_level: string;
  group_interactions_within_seconds: number;
  serial_number: string;
  shadow: BaseShadow | null;
  default_pusher?: Pusher;
  name?: string;
  last_online_at: string;
}

export interface NetworkNearbyBase {
  ssid: string;
  type: string;
  rssi: string;
  chan: string;
}

// combines button data from database with data from base device shadow
export interface BaseButtonMetadata {
  text?: string;
  id?: number;
  ssid: string;
  batteryLevel?: number;
  buttonVersion?: string;
}
