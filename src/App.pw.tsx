import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import 'spec-utils/apiMock.ts';
import { noop } from 'lodash-es';
import App from './App';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  noop();
  const component = await mount(<App></App>);
  await expect(component).toContainText('Hello world!2!');
});
