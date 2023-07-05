import React from 'react';
import { testTokens } from '@bodiless/vital-elements';
import { FooterClean } from '@bodiless/vital-layout';
import { b1Footer } from '..';

// eslint-disable-next-line jest/valid-describe
describe('Footer Tokens', testTokens(FooterClean, b1Footer));
