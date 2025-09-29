/*
* typeof Type Guards *
Use 'typeof' To Narrow Types Based On Basic JavaScript Types: 'string' | 'number'
*/
function a(b: number | string, c: string): string {
  if (typeof b === 'number') {
    return ' '.repeat(b) + c;
  }
  return b + c;
}

/*
* Truthiness Narrowing *
Use JavaScript's Truthy/Falsy Rules To Narrow Types Guarding Against Null | Undefined
*/
function d(e: string | null): void {
  if (e) {
    console.log(e.toUpperCase());
  }
}

/*
* Equality Narrowing *
Narrow Types Using Equality Checks (==, !=, ===, !==)
'!= null' - Filter Out 'null' & 'undefined'
*/
function f(g: string | null | undefined): void {
  if (g != null) {
    console.log(g.length);
  }
}

/*
* 'in' Narrowing *
Use 'in' To Narrow Union Types Based On Property Presence
*/
type h = { i: () => void };
type j = { k: () => void };

function l(m: h | j): void {
  if ('i' in m) {
    m.i();
  } else {
    m.k();
  }
}

/*
* instanceof Narrowing *
Use 'instanceof' To Narrow Types Based On Class | Constructor Checks
*/
function n(o: Date | string): void {
  if (o instanceof Date) {
    console.log(o.toISOString());
  } else {
    console.log(o.toUpperCase());
  }
}

/*
* Assignments *
Reassigning Variables Narrow Their Types Within The Declared Union
*/
let p: string | number;
p = 42;
console.log(p);  // Number
p = 'VAK';
console.log(p);  // String

/*
* Control Flow Analysis *
Track Control Flow Paths To Narrow Types Over The Function Body
*/
function q(r: string | number | boolean): string | number | boolean {
  if (typeof r === 'string') {
    return r.toUpperCase();
  }
  return r;
}

/*
* Type Predicates *
Custom Type Guards Return 'param is Type' To Narrow Types Based On Logic
*/
type s = { t: () => void };
type u = { v: () => void };

function w(x: s | u): x is s {
  return (x as s).t !== undefined;
}

function y(z: s | u): void {
  if (w(z)) {
    z.t();
  } else {
    z.v();
  }
}

/*
* Assertion Functions *
Narrow Types By Throwing If A Condition Is Not Met
*/ 
function A(B: any): asserts B is string {
  if (typeof B !== "string") {
    throw new Error("Not a string");
  }
}

function C(D: any): void {
  A(D);
  console.log(D.toUpperCase());
}

/*
* Discriminated Unions *
Use A Common Literal Property To Narrow Types In A Union By Using Different Interfaces With A Shared 'Kind' Field
Allow Safe Access To Properties Specific To Each Variant Without Needing Non-Null Assertions
*/
interface A {
  kind: 'circle';
  radius: number;
}

interface B {
  kind: 'square';
  sideLength: number;
}

type C = A | B;

function f(a: C) {
  switch (a.kind) {
    case 'circle':
      return Math.PI * a.radius ** 2;
    case 'square':
      return a.sideLength ** 2;
  }
}

/*
* never *
Represent Values That Should Never Occur
Assignable To Every Type But No Type Can Be Assigned To It Except 'never' Itself
Useful To Mark Impossible Code Paths After Exhaustive Checks
*/

/*
* Exhaustiveness Checking *
Use 'never' To Ensure All Cases - Handled In A Switch
*/
interface D {
  kind: "triangle";
  sideLength: number;
}

type E = A | B | D;

function g(a: E) {
  switch (a.kind) {
    case "circle":
      return Math.PI * a.radius ** 2;
    case "square":
      return a.sideLength ** 2;
    default:
      const h: never = a;
      return h;
  }
}
