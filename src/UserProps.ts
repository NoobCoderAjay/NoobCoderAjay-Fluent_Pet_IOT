export interface UserProps {
  name: string;
  email: string;
  id: number;
  household_id: number;
  avatar: string;
  roles: string[];
  groups: any;
  featureFlags: any;
}

export const emptyUserObject: UserProps = {
  name: '',
  email: '',
  id: -1,
  household_id: -1,
  avatar: '',
  roles: [],
  groups: {},
  featureFlags: {},
};
