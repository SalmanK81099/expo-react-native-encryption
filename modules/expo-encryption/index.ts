// Reexport the native module. On web, it will be resolved to ExpoEncryptionModule.web.ts
// and on native platforms to ExpoEncryptionModule.ts
export { default } from './src/ExpoEncryptionModule';
export { default as ExpoEncryptionView } from './src/ExpoEncryptionView';
export * from  './src/ExpoEncryption.types';
