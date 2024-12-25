import { NativeModule, requireNativeModule } from 'expo';

import { ExpoEncryptionModuleEvents } from './ExpoEncryption.types';

declare class ExpoEncryptionModule extends NativeModule<ExpoEncryptionModuleEvents> {
  hmacSHA256: (key: string, message: string) => Promise<string>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoEncryptionModule>('ExpoEncryption');
