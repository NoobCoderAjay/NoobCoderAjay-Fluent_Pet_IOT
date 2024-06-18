import { ButtonSortType } from './board';
import { ActivitySortType, PushNotificationFrequency } from './interaction';

export enum PreferenceType {
  ACTIVITY_SORT = 'activity_sort',
  BUTTON_SORT = 'button_sort',
  DEFAULT_PUSHER = 'default_pusher',
  FEATURE_FLAGS = 'feature_flags',
  PUSH_NOTIFICATION_FREQUENCY = 'push_notification_frequency',
}

export interface UserPreference {
  created_at: string;
  id: number;
  key: PreferenceType;
  updated_at: string;
  user_id: number;
  value: ButtonSortType | ActivitySortType | PushNotificationFrequency;
}
