export interface Avatar {
  path: string;
}
interface HouseholdUser {
  email: string;
  fullname: string;
  'household_admin?': boolean;
}

export interface Household {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  users: HouseholdUser[];
}

interface HouseholdInviteUser {
  fullname: string;
  email: string;
}

export interface HouseholdInvite {
  invitations_from_other_households: HouseholdInviteUser[];
  invitations_to_current_household: HouseholdInviteUser[];
}

export enum HouseholdInvitationResponse {
  ACCEPT = 'ACCEPT',
  REJECT = 'REJECT',
}

export enum AddPusherGuide {
  LEARNER = 'learner',
  TEACHER = 'teacher',
  BOTH = 'both',
}
