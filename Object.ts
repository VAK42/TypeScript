// *Anonymous Object Type*
function a(b: { c: string; d: number }) {
  return 'VAK' + b.c;
}
a({ c: '42', d: 30 });

// *Interface*
interface e {
  f: string;
  g: number;
}
function h(i: e) {
  return 'VAK' + i.f;
}
h({ f: 'VAK', g: 40 });

// *Type Alias*
type j = {
  k: string;
  l: number;
};
function m(n: j) {
  return 'VAK' + n.k;
}
m({ k: 'VAK', l: 25 });

// *Property Modifier*
// Optional Property
interface o {
  p: string;
  q?: number;
  r?: number;
}
function s(t: o) {
  const u = t.q ?? 0;
  const v = t.r ?? 0;
  console.log(`${u} - ${v})`);
}
s({ p: 'TS' });
s({ p: 'TS', q: 10 });

// Default Value With Destructuring
function w({ p, q = 0, r = 0 }: o) {
  console.log(`${p} - ${q} - ${r}`);
}
w({ p: 'TS' });

// Readonly Property
interface x {
  readonly y: string;
}
function z(A: x) {
  console.log(A.y);
  A.y = 'OK';  // Error
}

// Nested Readonly - Still Allow Mutation Inside Object
interface B {
  readonly C: { D: string; E: number };
}
function F(G: B) {
  G.C.E++;
}

// *Index Signature*
interface H {
  [I: number]: string;
}
const J: H = ['A', 'B', 'C'];
console.log(J[1]);

// Restrictive Index Signature
interface K {
  [L: string]: number;  // Value Of Any String Property Must Be A Number
  M: number;
  N: string;  // Error
}

// Union-Based Index Signature
interface O {
  [P: string]: number | string;
  Q: string;
  R: number;
}

// Readonly Index
interface S {
  readonly [T: number]: string;
}
const U: S = ['X', 'Y'];
U[0] = 'Z';  // Error

// *Excess Property Check*
interface V {
  W?: string;
  X?: number;
}
function Y(Z: V): { aA: string; bB: number } {
  return {
    aA: Z.W || 'TS',
    bB: Z.X ? Z.X ** 2 : 20,
  };
}
Y({ VAK: '42', X: 100 });  // Error
Y({ X: 100, VAK: 0.5 } as V);

// *Extending Type*
interface cC {
  dD?: string;
  eE: string;
  fF: string;
  gG: string;
  hH: string;
}
interface iI extends cC {
  jJ: string;
}
const kK: iI = {
  eE: 'A',
  fF: 'B',
  gG: 'C',
  hH: 'D',
  jJ: 'E',
};

// Multiple Inheritance
interface lL {
  mM: string;
}
interface nN {
  oO: number;
}
interface pP extends lL, nN {}
const qQ: pP = { mM: 'VAK', oO: 42 };

// *Intersection Type*
type rR = lL & nN;
function sS(tT: rR) {
  console.log(tT.mM, tT.oO);
}
sS({ mM: 'TS', oO: 24 });

// *Generic Object Type*
interface uU<T> {
  vV: T;
}
let wW: uU<string> = { vV: 'TS' };
let xX: uU<number> = { vV: 42 };

function yY<T>(zZ: uU<T>, A1: T) {
  zZ.vV = A1;
}
yY(wW, 'VAK');

// Generic Type Alias Helper
type B1<T> = T | null;
type C1<T> = T | T[];
type D1<T> = B1<C1<T>>;
let E1: D1<string> = ['A', 'B'];

// *Array & ReadonlyArray*
function F1(G1: Array<string>) {
  console.log(G1.join(' '));
}
F1(['A', 'B']);

function H1(I1: readonly string[]) {
  console.log(I1[0]);
  I1.push('C');  // Error
}
H1(['X', 'Y']);

// *Tuple Type*
type J1 = [string, number];
function K1(L1: J1) {
  const [M1, N1] = L1;
  console.log(M1, N1);
}
K1(['K42', 24]);

// Optional Tuple Element
type O1 = [number, number, number?];
function P1(Q1: O1) {
  console.log(Q1.length);  // 2 | 3
}
P1([1, 2]);

// Tuple With Rest
type R1 = [string, number, ...boolean[]];
const S1: R1 = ['TS', 0, true, false];

// Readonly Tuple
function T1(U1: readonly [string, number]) {
  console.log(U1[0]);
}
T1(['VAK', 42]);
