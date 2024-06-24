import { Steps } from '../constants';

const getSubmitButtonLabel = (step: Steps) => {
  if (step === Steps.CONNECT_TO_BASE) {
    return 'CONNECT';
  }

  if (step === Steps.CONNECT_TO_BASE_AP_FAILED) {
    return 'RECONNECT';
  }

  return 'NEXT';
};

export default getSubmitButtonLabel;
