// **Generics**
// *Identity Function*
function a(b: number): number {
  return b;
}
function c(d: any): any {
  return d;
}
function e<F>(f: F): F {
  return f;
}
let g = e<string>('VAK');
let h = e('VAK');

// *Logging Identity*
function i<J>(j: J[]): J[] {
  console.log(j.length);
  return j;
}
function k<L>(l: Array<L>): Array<L> {
  console.log(l.length);
  return l;
}

// *Generic Type*
function m<N>(n: N): N {
  return n;
}
let o: <P>(p: P) => P = m;
let q: { <R>(r: R): R } = m;

interface s {
  <T>(t: T): T;
}
let u: s = m;

interface v<W> {
  (w: W): W;
}
let x: v<number> = m;

// *Generic Class*
class y<Y> {
  z: Y;
  A: (B: Y, C: Y) => Y;
}
let D = new y<number>();
D.z = 0;
D.A = (E, F) => E + F;

let G = new y<string>();
G.z = '';
G.A = (H, I) => H + I;
console.log(G.A(G.z, 'VAK'));

// *Generic Constraint*
interface J {
  length: number;
}
function K<K1 extends J>(L: K1): K1 {
  console.log(L.length);
  return L;
}
K({ length: 42, value: 0 });

function M<M1, M2 extends keyof M1>(N: M1, O: M2) {
  return N[O];
}
let P = { a: 1, b: 2, c: 4 };
M(P, 'a');  // M2 Must Be A Key Of M1

// *Class Types In Generics*
function Q<Q1>(R: { new (): Q1 }): Q1 {
  return new R();
}

class S {
  hasMask: boolean = true;
}
class T {
  nameTag: string = 'AK42';
}
class U {
  numLegs: number = 4;
}
class V extends U {
  numLegs = 6;
  keeper: S = new S();
}
class W extends U {
  keeper: T = new T();
}
function X<X1 extends U>(Y: new () => X1): X1 {
  return new Y();
}
X(W).keeper.nameTag;
X(V).keeper.hasMask;

// *Generic Parameter Default*
declare function Z<
  A1 extends HTMLElement = HTMLDivElement,  // Default To HTMLDivElement If No Type Is Provided
  B1 extends HTMLElement[] = A1[]
>(C1?: A1, D1?: B1): any;

const E1 = Z();
const F1 = Z(new HTMLParagraphElement());

// *Variance*
interface G1<out H1> {
  make(): H1;
}
interface I1<in J1> {
  consume: (K1: J1) => void;
}
interface L1<in out M1> {
  consume: (N1: M1) => void;
  make(): M1;
}
/*
out - Covariant: Only Be Output (Return) & Not Input (Parameter) - Subtyping
in - Contravariant: Only Be Input (Parameter) & Not Output (Return) - Supertyping
*/

// **Keyof | Typeof | Indexed Access**
// *Keyof Operator*
type a = { b: number; c: number };
type d = keyof a;  // 'b' | 'c'

type e = { [f: number]: unknown };
type g = keyof e;  // Number

type h = { [i: string]: boolean };
type j = keyof h;  // String | Number

// *Typeof Operator*
console.log(typeof 'VAK');  // String

let k = '42';
let l: typeof k;  // String

type m = (n: unknown) => boolean;
type o = ReturnType<m>;  // Boolean

function p() {
  return { q: 10, r: 4 };
}
type s = ReturnType<p>;  // Error
type t = ReturnType<typeof p>;  // { q: number; r: number }

// *Indexed Access Type*
type u = { v: number; w: string; x: boolean };
type y = u['v'];  // Number
type z = u['v' | 'w'];  // Number | String
type A = u[keyof u];  // Number | String | Boolean
type B = u['w' | 'x'];  // String | Boolean
type C = u['OK'];  // Error

// *Indexed Access With Array*
const D = [
  { E: 'JS', F: 15 },
  { E: 'TS', F: 24 },
  { E: 'OK', F: 48 },
];

type G = typeof D[number];  // { E: string; F: number }
type H = typeof D[number]['F'];  // Number
type I = G['F'];  // Number

// *Const Vs Type*
const J = 'F';
type K = u[J];  // Error
type L = 'v';
type M = u[L];  // Number

// **Conditional | Mapped | Template | String Type**
// *Conditional Type*
interface a {
  b(): void;
}
interface c extends a {
  d(): void;
}
type e = c extends a ? number : string;  // Number
type f = RegExp extends a ? number : string;  // String

interface g {
  h: number;
}
interface i {
  j: string;
}

function k(l: number): g;
function k(m: string): i;
function k(n: string | number): g | i;
function k(n: string | number): g | i {
  throw 'Unimplemented';
}

type o<p extends number | string> = p extends number ? g : i;

function q<r extends number | string>(s: r): o<r> {
  throw 'Unimplemented';
}
let t = q('TS');  // i
let u = q(4.2);  // g
let v = q(Math.random() ? 'VAK' : 42);  // g | i

// *Conditional Type Constraint*
type w<x> = x extends { y: unknown } ? x['y'] : never;

interface z {
  y: string;
}
interface A {
  B(): void;
}

type C = w<z>;  // String
type D = w<A>;  // Never

// *Flatten*
type E<F> = F extends any[] ? F[number] : F;  // F[number] - Get Type Of Elements
type G = E<string[]>;  // String
type H = E<number>;  // Number

// *Infer In Conditional*
type I<J> = J extends Array<infer K> ? K : J;
type L = I<string[]>;  // String
type M = I<number>;  // Number

type N<O> = O extends (...P: never[]) => infer Q ? Q : never;  // No Arguments - Function ? Q : never
type R = N<() => number>;  // Number
type S = N<(T: string) => string>;  // String
type U = N<(V: boolean, W: boolean) => boolean[]>;  // Boolean[]

declare function X(Y: string): number;
declare function X(Z: number): string;
declare function X(AA: string | number): string | number;
type AB = ReturnType<typeof X>;  // String | Number

// *Distributive Conditional*
type AC<AD> = AD extends any ? AD[] : never;
type AE = AC<string | number>;  // String[] | Number[]

type AF<AG> = [AG] extends [any] ? AG[] : never;
type AH = AF<string | number>;  // (String | Number)[]

// *Mapped Type*
type AI = { [AJ: string]: boolean };
const AK: AI = { vak: true };

type AL<AM> = { [AN in keyof AM]: boolean };  // Iterate Over Each 'AN' In 'keyof AM' -> Assign 'boolean'
type AO = { AP: () => void; AQ: () => void };
type AR = AL<AO>;  // { AP: boolean; AQ: boolean }

// *Mapping Modifier*
type AS<AT> = { -readonly [AU in keyof AT]: AT[AU] };  // -readonly - Remove 'readonly' From Each Property
type AV = { readonly AW: string; readonly AX: string };
type AY = AS<AV>;  // { AW: string; AX: string }

type AZ<BA> = { [BB in keyof BA]-?: BA[BB] };  // -? - Make All Optional Properties Required
type BC = { BD: string; BE?: string; BF?: number };
type BG = AZ<BC>;  // { BD: string; BE: string; BF: number }

// *Key Remapping*
type BH<BI> = {
  [BJ in keyof BI as `get${Capitalize<string & BJ>}`]: () => BI[BJ];
};
interface BK {
  BL: string;
  BM: number;
}
type BN = BH<BK>; // { getBL: () => string; getBM: () => number }

type BO<BP> = {
  [BQ in keyof BP as Exclude<BQ, "BR">]: BP[BQ];
};
interface BS {
  BR: "circle";
  BT: number;
}
type BU = BO<BS>; // { BT: number }

type BV<BW extends { BX: string }> = {
  [BY in BW as BY["BX"]]: (BZ: BY) => void;
};
type CA = { BX: "square"; CB: number };
type CC = { BX: "circle"; CD: number };
type CE = BV<CA | CC>; // { square: (CA) => void; circle: (CC) => void }

// ---------- Conditional + Mapped ----------
type CF<CG> = {
  [CH in keyof CG]: CG[CH] extends { CI: true } ? true : false;
};
type CJ = { CK: { CL: string }; CM: { CN: string; CI: true } };
type CO = CF<CJ>; // { CK: false; CM: true }

// ---------- Template Literal Types ----------
type CP = "world";
type CQ = `hello ${CP}`; // "hello world"

type CR = "welcome" | "heading";
type CS = "footer" | "send";
type CT = `${CR | CS}_id`; // "welcome_id" | "heading_id" | "footer_id" | "send_id"

type CU = "en" | "ja";
type CV = `${CU}_${CT}`; // All combinations

// ---------- Watched Object ----------
type CW<CX> = {
  on(CY: `${string & keyof CX}Changed`, CZ: (DA: any) => void): void;
};
declare function DB<DC>(DD: DC): DC & CW<DC>;

const DE = DB({ DF: "Name", DG: 30 });
DE.on("DFChanged", (newVal) => console.log(newVal));

// ---------- Inference With Template ----------
type DH<DI> = {
  on<DJ extends string & keyof DI>(
    DK: `${DJ}Changed`,
    DL: (DM: DI[DJ]) => void
  ): void;
};
declare function DN<DO>(DP: DO): DO & DH<DO>;

const DQ = DN({ DR: "Alice", DS: 20 });
DQ.on("DRChanged", (DV) => console.log(DV.toUpperCase()));
DQ.on("DSChanged", (DW) => console.log(DW.toFixed()));

// ---------- String Manipulation ----------
type DX = "Hello";
type DY = Uppercase<DX>; // "HELLO"

type DZ = "HELLO";
type EA = Lowercase<DZ>; // "hello"

type EB = "hi";
type EC = Capitalize<EB>; // "Hi"

type ED = "WOW";
type EE = Uncapitalize<ED>; // "wOW"
