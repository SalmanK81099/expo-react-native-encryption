import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoSettingsTestViewProps } from './ExpoSettingsTest.types';

const NativeView: React.ComponentType<ExpoSettingsTestViewProps> =
  requireNativeView('ExpoSettingsTest');

export default function ExpoSettingsTestView(props: ExpoSettingsTestViewProps) {
  return <NativeView {...props} />;
}
