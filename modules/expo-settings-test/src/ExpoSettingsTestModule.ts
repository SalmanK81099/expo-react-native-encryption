import { NativeModule, requireNativeModule } from 'expo';

import { ExpoSettingsTestModuleEvents } from './ExpoSettingsTest.types';

declare class ExpoSettingsTestModule extends NativeModule<ExpoSettingsTestModuleEvents> {
  hmacSHA256: (key: string, message: string) => Promise<string>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoSettingsTestModule>('ExpoSettingsTest');
