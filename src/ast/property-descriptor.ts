/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import * as estree from 'estree';

import {SourceLocation} from '../elements-format';
import * as jsdoc from '../javascript/jsdoc';

import {ScannedFeature} from './ast';

export interface ScannedProperty extends ScannedFeature {
  name: string;
  type?: string;
  description?: string;
  jsdoc?: jsdoc.Annotation;
  private?: boolean;
  'default'?: string;
  readOnly?: boolean;
  sourceLocation: SourceLocation;
}

export interface Property {
  name: string;
  type?: string;
  description?: string;
  jsdoc?: jsdoc.Annotation;
  private?: boolean;
  'default'?: string;
  readOnly?: boolean;
  sourceLocation: SourceLocation;
  inheritedFrom?: string;
}