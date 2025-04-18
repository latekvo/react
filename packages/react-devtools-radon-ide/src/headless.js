/** @flow */

import Bridge from 'react-devtools-shared/src/bridge';
import Store from 'react-devtools-shared/src/devtools/store';

import type {Wall} from 'react-devtools-shared/src/frontend/types';
import type {FrontendBridge} from 'react-devtools-shared/src/bridge';
import type {Config} from 'react-devtools-shared/src/devtools/store';

export {
  prepareProfilingDataExport,
  prepareProfilingDataFrontendFromExport,
} from 'react-devtools-shared/src/devtools/views/Profiler/utils';

export function createStore(bridge: FrontendBridge, config?: Config): Store {
  return new Store(bridge, {
    checkBridgeProtocolCompatibility: true,
    supportsTraceUpdates: true,
    supportsTimeline: true,
    ...config,
  });
}

export function createBridge(wall?: Wall): FrontendBridge {
  return (new Bridge(wall): FrontendBridge);
}
