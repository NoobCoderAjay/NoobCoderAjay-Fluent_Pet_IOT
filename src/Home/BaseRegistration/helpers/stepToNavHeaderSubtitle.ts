import _ from 'lodash';

import { Steps } from '../constants';

const stepToNavHeaderSubtitle = (step: Steps) => {
  if (step === Steps.WELCOME_GUIDE) {
    return 'Step 1: Prep';
  }

  if (
    _.range(
      Steps.WIFI_MODE_GUIDE,
      Steps.CONNECT_TO_BASE_AP_SUCCESSFUL + 1,
    ).includes(step)
  ) {
    return 'Step 2: Connect to your Base';
  }

  if (step === Steps.GET_WIFI_CREDENTIALS) {
    return 'Step 3: Select your WiFi-network';
  }

  if (step === Steps.CONNECTION_CHECKLIST) {
    return 'Step 4: Registering your Base';
  }

  if (step === Steps.FIRMWARE_UPDATE) {
    return 'Step 5: Update your Base Firmware';
  }
  if (step === Steps.BASE_SETUP_COMPLETED) {
    return 'Step 6: Complete your Base setup!';
  }
};

export default stepToNavHeaderSubtitle;
