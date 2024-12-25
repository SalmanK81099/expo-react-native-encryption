// Reexport the native module. On web, it will be resolved to ExpoSettingsTestModule.web.ts
// and on native platforms to ExpoSettingsTestModule.ts
export { default } from './src/ExpoSettingsTestModule';
export { default as ExpoSettingsTestView } from './src/ExpoSettingsTestView';
export * from  './src/ExpoSettingsTest.types';
