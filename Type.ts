// The Primitives
let a: string = 'VAK';
let b: number = 42;
let c: boolean = true;
console.log(a, b, c);

// Arrays
let d: number[] = [1, 2, 3];
let e: Array<string> = ['VAK', 'KAV', 'AKV'];
console.log(d, e);

/*
* Any *
any: Disable Type-Checking + Allow Any Operation On It
Use Cautiously - Avoid Implicit 'any' With 'noImplicitAny' Flag
*/
let f: any = 'VAK';
f = 42;
f = true;
console.log(f);

// Type Annotations On Variables
let g: string = 'VAK';
let h: number = 42;
console.log(g, h);

/*
* Functions *
Parameter Type Annotations: Specify Expected Parameter Types
Return Type Annotations: Specify Expected Return Type
Anonymous Functions: Type Inferred Automatically Based On Context
*/
function i(vak: string): string {
  return vak;
}

let j = i('VAK');
console.log(j);

const k = [6, 2, 8, 4, 5];
k.forEach((l) => {
  console.log(l * 2);
});

/*
* Object Types *
Define Object Shape Using Property Names & Types
Optional Properties: Use ? To Mark Property As Optional
*/
function m(p: { x: number; y: number }) {
  console.log(p.x + p.y);
}
m({ x: 4, y: 2 });

function n(o: { x: string; y?: string }) {
  console.log(`${o.x} ${o.y || 0}`);
}
n({ x: 'VAK' });
n({ x: 'VAK', y: '42' });

/*
* Union Types *
Combine Multiple Types
Narrowing: Use typeof | Array.isArray To Differentiate Types
*/
function p(i: number | string) {
  console.log(i);
}
p(42);
p('VAK');

function q(i: number | string) {
  if (typeof i === 'string') {
    console.log(i.toUpperCase());
  } else {
    console.log(i);
  }
}
q(42);
q('VAK');

function r(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log('TS ' + x.join(' '));
  } else {
    console.log('TS ' + x);
  }
}
r(['VAK', 'KAV', 'AKV']);
r('VAK');

/*
* Type Aliases *
Used To Name Any Type - Simplify Reusability
Cannot Be Extended | Merged
*/
type s = { x: number; y: number };
function t(u: s) {
  return u.x + u.y;
}
console.log(t({ x: 5, y: 4 }));

/*
* Interfaces *
Used To Name Object Types
Can Be Extended & Merged
*/
interface v { x: number; y: number };
function w(x: v) {
  return x.x + x.y;
}
console.log(w({ x: 5, y: 4 }));

/*
* Extension & Addition *
|-------------------------|--------------------------------------|------------------------------------------|
| Feature                 | interface                            | type                                     |
|-------------------------|--------------------------------------|------------------------------------------|
| Basic Declaration       | interface a { b: string }            | type a = { b: string }                   |
|-------------------------|--------------------------------------|------------------------------------------|
| Extension / Inheritance | interface c extends a { d: boolean } | type c = a & { d: boolean }              |
|-------------------------|--------------------------------------|------------------------------------------|
| Declaration Merging     | interface e { f: string }            | type e = { f: string }                   |
|                         | interface e { g: number }            | type e = { g: number }                   |
|                         | → OK                                 | →  Error                                 |
|-------------------------|--------------------------------------|------------------------------------------|
*/

/*
* Type Assertions *
Assert More Specific Type + Bypass Type-Checking
Use With Caution - No Runtime Checking
*/
const A = document.getElementById('css') as HTMLCanvasElement;
const B = <HTMLCanvasElement>document.getElementById('css');

/*
* Literal Types *
Define Specific Values - Not Just Types
Useful For Enforcing Known Values In Functions | Variables
*/
let C: 'VAK' = 'VAK';
function D(E: 'A' | 'B' | 'C'): -1 | 0 | 1 {
  return 0;
}

/*
* Literal Inference *
Type Inference Can Mistakenly Use General Types
Use 'as const' | Type Assertions To Fix
*/
const F = { x: 0, y: 'VAK' as 'VAK' };
const G = { x: 0, y: 'VAK' } as const;

/*
* Non-null Assertion Operator (!) *
Assume Value - Not Null | Undefined Without Checking
Use Cautiously - Bypass Type Checking
*/
function H(x?: number | null) {
  console.log(x!.toFixed());
}

/*
* Enums *
Named Constants Representing A Set Of Values
Use Sparingly Because Of Complexity & Runtime Overhead
*/
enum I { Up, Down }
let J: I = I.Up;

/*
* Less Common Primitives *
bigint: Large Numbers Beyond 'number' Range
symbol: Unique Identifier - Not Comparable
*/
const K: bigint = 100n;
const L: symbol = Symbol('VAK');
