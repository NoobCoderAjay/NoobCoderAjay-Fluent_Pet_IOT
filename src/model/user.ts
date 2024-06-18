export interface User {
  household_invitations: User[];
  created_at: string;
  email: string;
  fullname?: string;
  id: number;
  updated_at: string;
}

export enum UserPermission {
  ADMIN = 'admin',
  BASE_TESTER = 'deviceTester',
  CONNECT_ADMIN = 'connectAdmin',
}

export enum Auth0Permission {
  ADMIN = 'https://fluent.pet/roles/admin',
  BASE_TESTER = 'https://fluent.pet/roles/device_tester',
  CONNECT_ADMIN = 'https://fluent.pet/roles/connect_admin',
}

export function isConnectAdmin(roles: string[]) {
  return roles?.includes(UserPermission.CONNECT_ADMIN);
}

export function isAdmin(roles: string[]) {
  return roles?.includes(UserPermission.ADMIN);
}

export function parseRoles(userInfo: any) {
  const roles = [];
  if (userInfo[Auth0Permission.ADMIN]) {
    roles.push(UserPermission.ADMIN);
  }
  if (userInfo[Auth0Permission.BASE_TESTER]) {
    roles.push(UserPermission.BASE_TESTER);
  }
  if (userInfo[Auth0Permission.CONNECT_ADMIN]) {
    roles.push(UserPermission.CONNECT_ADMIN);
  }
  return roles;
}
