// *Function Type Expression*
function A(Fn: (A: string) => void) {
  Fn('VAK');
}
function B(S: string) {
  console.log(S);
}
A(B);

// Type Alias For Function Type
type C = (A: string) => void;
function D(Fn: C) {
  Fn('VAK');
}

// *Call Signature*
type E = {
  Description: string;
  (SomeArg: number): boolean;
};
function F(Fn: E) {
  console.log(Fn.Description + ' Returned ' + Fn(6));
}
function G(SomeArg: number) {
  return SomeArg > 3;
}
G.Description = 'Default Description';
F(G);

// ---------- Construct Signatures ----------
type H = {
  new (S: string): I;
};
function J(Ctor: H) {
  return new Ctor("Hello");
}
class I {
  constructor(public Value: string) {}
}

// ---------- Call Or Construct ----------
interface K {
  (N?: number): string;
  new (S: string): Date;
}
function L(Ctor: K) {
  console.log(Ctor(10)); // Call Signature
  console.log(new Ctor("10")); // Construct Signature
}
L(Date);

// ---------- Generic Functions ----------
function M<T>(Arr: T[]): T | undefined {
  return Arr[0];
}
const N = M(["A", "B", "C"]); // Inferred As String
const O = M([1, 2, 3]);       // Inferred As Number
const P = M([]);              // Inferred As Undefined

// Generic Map Example
function Q<Input, Output>(Arr: Input[], Func: (Arg: Input) => Output): Output[] {
  return Arr.map(Func);
}
const R = Q(["1", "2", "3"], (N) => parseInt(N)); // String -> Number

// ---------- Constraints ----------
function S<T extends { Length: number }>(A: T, B: T) {
  return A.Length >= B.Length ? A : B;
}
const T1 = S([1, 2], [1, 2, 3]);  // Works With Arrays
const T2 = S("Alice", "Bob");     // Works With Strings
// const T3 = S(10, 20);          // Error, Numbers Have No Length

// ---------- Optional Parameters ----------
function U(N?: number) {
  console.log(N?.toFixed());
}
U();
U(10);

function V(X = 10) {
  console.log(X);
}
V();
V(undefined);

// ---------- Callback Parameters ----------
function W(Arr: any[], Callback: (Arg: any, Index: number) => void) {
  for (let I = 0; I < Arr.length; I++) {
    Callback(Arr[I], I);
  }
}
W([1, 2, 3], (A) => console.log(A));
W([1, 2, 3], (A, I) => console.log(A, I));

// ---------- Function Overloads ----------
function X(Timestamp: number): Date;
function X(M: number, D: number, Y: number): Date;
function X(MOrTimestamp: number, D?: number, Y?: number): Date {
  if (D !== undefined && Y !== undefined) {
    return new Date(Y, MOrTimestamp, D);
  } else {
    return new Date(MOrTimestamp);
  }
}
const Y1 = X(12345678);
const Y2 = X(5, 5, 5);
// const Y3 = X(1, 2); // Error, Only 1 Or 3 Arguments Allowed

// ---------- Declaring "This" ----------
interface ZDB {
  FilterUsers(Filter: (this: ZUser) => boolean): ZUser[];
}
interface ZUser {
  Admin: boolean;
}
declare function GetDB(): ZDB;
const Z = GetDB();
const Admins = Z.FilterUsers(function (this: ZUser) {
  return this.Admin;
});

// ---------- Special Types ----------
// Void
function AA(): void {
  return;
}

// Never
function AB(Msg: string): never {
  throw new Error(Msg);
}

// Never In Union Exhaustiveness
function AC(X: string | number) {
  if (typeof X === "string") {
    // Handle String
  } else if (typeof X === "number") {
    // Handle Number
  } else {
    X; // Has Type Never
  }
}

// ---------- Rest Parameters ----------
function AD(N: number, ...M: number[]) {
  return M.map((X) => N * X);
}
const AE = AD(10, 1, 2, 3, 4); // [10,20,30,40]

// ---------- Parameter Destructuring ----------
type AF = { A: number; B: number; C: number };
function AG({ A, B, C }: AF) {
  console.log(A + B + C);
}
AG({ A: 10, B: 3, C: 9 });

// ---------- Void Assignability ----------
type AH = () => void;

// Valid Even If Returning Something
const AI: AH = () => {
  return true;
};
const AJ: AH = () => true;
const AK: AH = function () {
  return true;
};

// Return Type Still Void
const AL = AI();
const AM = AJ();
const AN = AK();

// Example With ForEach Expecting Void Function
const AO = [1, 2, 3];
const AP = [0];
AO.forEach((El) => AP.push(El));
