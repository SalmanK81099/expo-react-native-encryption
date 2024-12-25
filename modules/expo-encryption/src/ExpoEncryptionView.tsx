import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoEncryptionViewProps } from './ExpoEncryption.types';

const NativeView: React.ComponentType<ExpoEncryptionViewProps> =
  requireNativeView('ExpoEncryption');

export default function ExpoEncryptionView(props: ExpoEncryptionViewProps) {
  return <NativeView {...props} />;
}
