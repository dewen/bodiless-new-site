import React from 'react';
import { testTokens } from '@bodiless/vital-elements';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import { b1FlowContainer } from '..';

// eslint-disable-next-line jest/valid-describe
describe('FlowContainer Tokens', testTokens(FlowContainerClean, b1FlowContainer));
