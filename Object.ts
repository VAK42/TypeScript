// ================================
// Object Types In TypeScript
// ================================

// ---------- Anonymous Object Type ----------
function a(b: { c: string; d: number }) {
  return "Hello " + b.c;
}
a({ c: "Alice", d: 30 });

// ---------- Interface ----------
interface e {
  f: string;
  g: number;
}
function h(i: e) {
  return "Hello " + i.f;
}
h({ f: "Bob", g: 40 });

// ---------- Type Alias ----------
type j = {
  k: string;
  l: number;
};
function m(n: j) {
  return "Hello " + n.k;
}
m({ k: "Charlie", l: 25 });

// ================================
// Property Modifiers
// ================================

// ---------- Optional Properties ----------
interface o {
  p: string;
  q?: number;
  r?: number;
}
function s(t: o) {
  const u = t.q ?? 0;
  const v = t.r ?? 0;
  console.log(`Painting At (${u}, ${v})`);
}
s({ p: "Circle" });
s({ p: "Square", q: 10 });

// ---------- Default Values With Destructuring ----------
function w({ p, q = 0, r = 0 }: o) {
  console.log(`${p} At (${q}, ${r})`);
}
w({ p: "Triangle" });

// ---------- Readonly Properties ----------
interface x {
  readonly y: string;
}
function z(A: x) {
  console.log(A.y);
  // A.y = "new value"; // ❌ Error
}

// Nested Readonly Still Allows Mutation Inside Object
interface B {
  readonly C: { D: string; E: number };
}
function F(G: B) {
  G.C.E++;
}

// ================================
// Index Signatures
// ================================
interface H {
  [I: number]: string;
}
const J: H = ["A", "B", "C"];
console.log(J[1]);

// Restrictive Index Signature
interface K {
  [L: string]: number;
  M: number;
  // N: string; ❌ Error
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
const U: S = ["X", "Y"];
// U[0] = "Z"; // ❌ Error

// ================================
// Excess Property Checks
// ================================
interface V {
  W?: string;
  X?: number;
}
function Y(Z: V): { aA: string; bB: number } {
  return {
    aA: Z.W || "red",
    bB: Z.X ? Z.X ** 2 : 20,
  };
}
// Y({ colour: "red", X: 100 }); ❌ Error
Y({ X: 100, opacity: 0.5 } as V);

// ================================
// Extending Types
// ================================
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
  eE: "123 Main",
  fF: "NY",
  gG: "USA",
  hH: "10001",
  jJ: "4B",
};

// Multiple Inheritance
interface lL {
  mM: string;
}
interface nN {
  oO: number;
}
interface pP extends lL, nN {}
const qQ: pP = { mM: "blue", oO: 42 };

// ================================
// Intersection Types
// ================================
type rR = lL & nN;
function sS(tT: rR) {
  console.log(tT.mM, tT.oO);
}
sS({ mM: "red", oO: 21 });

// ================================
// Generic Object Types
// ================================
interface uU<T> {
  vV: T;
}
let wW: uU<string> = { vV: "Hello" };
let xX: uU<number> = { vV: 42 };

function yY<T>(zZ: uU<T>, A1: T) {
  zZ.vV = A1;
}
yY(wW, "World");

// Generic Type Alias Helpers
type B1<T> = T | null;
type C1<T> = T | T[];
type D1<T> = B1<C1<T>>;
let E1: D1<string> = ["A", "B"];

// ================================
// Array And ReadonlyArray
// ================================
function F1(G1: Array<string>) {
  console.log(G1.join(","));
}
F1(["A", "B"]);

function H1(I1: readonly string[]) {
  console.log(I1[0]);
  // I1.push("C"); // ❌ Error
}
H1(["X", "Y"]);

// ================================
// Tuple Types
// ================================
type J1 = [string, number];
function K1(L1: J1) {
  const [M1, N1] = L1;
  console.log(M1, N1);
}
K1(["Age", 30]);

// Optional Tuple Element
type O1 = [number, number, number?];
function P1(Q1: O1) {
  console.log(Q1.length); // 2 Or 3
}
P1([1, 2]);

// Tuple With Rest
type R1 = [string, number, ...boolean[]];
const S1: R1 = ["Hello", 1, true, false];

// Readonly Tuple
function T1(U1: readonly [string, number]) {
  console.log(U1[0]);
}
T1(["Immutable", 42]);
