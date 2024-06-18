import { UserProps } from "src/UserProps";

interface FeatureFlags {
  homeIntegrationEnabled: boolean;
  appDebuggingEnabled: boolean;
  assignMeaningEnabled: boolean;
  bulkAssignMeaningEnabled: true;
  connectFeaturesEnabled: boolean;
  csvExportsEnabled: boolean;
  deleteAccountEnabled: boolean;
  duplicationEnabled: boolean;
  householdInvitesEnabled: boolean;
  impersonateUsersEnabled: boolean;
  mergeEnabled: true;
  registerBaseViaAppEnabled: boolean;
  speechToTextEnabled: boolean;
  splittingEnabled: boolean;
  switchEnvironmentEnabled: boolean;
  isAlpha: boolean;
  isOnboarded: boolean;
}

export default function useFeatureFlags(
  user: UserProps,
  preferenceQuery?: any
): FeatureFlags {
  try {
    preferenceQuery = JSON.parse(preferenceQuery.data);
  } catch (e: any) {}

  const flags = {
    appDebuggingEnabled: user?.groups?.isAdmin,
    assignMeaningEnabled: user?.groups?.isAdmin,
    bulkAssignMeaningEnabled: true,
    connectFeaturesEnabled: true,
    csvExportsEnabled: true,
    deleteAccountEnabled: true,
    duplicationEnabled: true,
    householdInvitesEnabled: true,
    impersonateUsersEnabled: user?.groups?.isAdmin,
    mergeEnabled: true,
    registerBaseViaAppEnabled: false,
    splittingEnabled: true,
    speechToTextEnabled: false,
    isAlpha: Boolean(user?.featureFlags?.educationalFlowEnabled),
    isOnboarded:
      Boolean(user?.featureFlags?.educationalOnboardingCompleted) ||
      Boolean(user?.featureFlags?.isOnboarded),
    homeIntegrationEnabled:
      user?.groups?.isAdmin || user?.featureFlags?.homeIntegrationEnabled,
    switchEnvironmentEnabled:
      __DEV__ || user?.groups?.isAdmin || user?.groups?.isConnectAdmin,
    ...(preferenceQuery || {}),
  };

  return flags;
}
