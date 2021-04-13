import { Emit } from 'app/store/types';
import Logger from '../app/utils/Logger';
import createMessageHandler from './createMessageHandler';

const createActionsListener = (emit: Emit) => {
  const messageHandler = createMessageHandler(emit);
  browser.runtime.onMessage.addListener(messageHandler);
  Logger.info('Listening messages ...');

  return () => {
    browser.runtime.onMessage.removeListener(messageHandler);
  };
};

export default createActionsListener;
