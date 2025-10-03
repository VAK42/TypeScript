/*
Top-Level Import | Export -> Module - Has Own Scope
No Top-Level Import | Export -> Script
*/

export {};  // Force File As Module

// ES Modules
// Default Export
export default function A() {
  console.log('VAK');
}

// Named Export
export const B = 3.14;
export let C = 1.42;
export var D = 1.82;

export class E {}
export function F(G: number) {
  return G < 0 ? G * -1 : G;
}

// Named Import
import { B as H, D as I, F as J } from './0.js';
console.log(H);
const K = J(I);

// Mixed Import (Default + Named)
import L, { B as M } from './0.js';
console.log(M);
new L();

// Namespace Import
import * as N from './0.js';
console.log(N.B);
const O = N.F(N.D);

// Side-Effect Import
import './0.js';

// Type-Only Import
import type { P, Q } from './0.js';
type R = P | Q;

// Inline Type Import
import { S, type P as T, type Q as U } from './0.js';
type V = T | U;
const W = S();

// ESModule Syntax With CommonJS Behavior
import X = require('fs');
const Y = X.readFileSync('0.ts', 'utf8');

// CommonJS Export
function Z(AA: number) {
  return AA < 0 ? AA * -1 : AA;
}
module.exports = {
  B: 3.14,
  C: 1.42,
  D: 1.82,
  Z,
};

// CommonJS Import + Destructuring
const { C: AB } = require('./0');
console.log(AB);

/*
ESModules <-> CommonJS Interop => esModuleInterop
Module Resolution
- Classic | Node (Node Preferred)
- Controlled By: moduleResolution, baseUrl, paths, rootDirs
Output Controlled By:
- target → JS Features
- module → Module System (ES2020, CommonJS, UMD)
*/

/*
ESModules → Modern JS
CommonJS → Legacy / Node
*/
