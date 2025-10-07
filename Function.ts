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

// *Construct Signature*
type H = {
  new (S: string): I;
};
function J(Ctor: H) {
  return new Ctor('VAK');
}
class I {
  constructor(public Value: string) {}
}

// *Call | Construct*
interface K {
  (N?: number): string;   // Call Signature
  new (S: string): Date;  // Construct Signature
}
function L(Ctor: K) {
  console.log(Ctor(10));        // Call Signature
  console.log(new Ctor('10'));  // Construct Signature
}
L(Date);

// *Generic Function*
function M<T>(Arr: T[]): T | undefined {
  return Arr[0];
}
const N = M(['A', 'B', 'C']);  // Inferred As String
const O = M([1, 2, 3]);        // Inferred As Number
const P = M([]);               // Inferred As Undefined

// Generic Map
function Q<Input, Output>(Arr: Input[], Func: (Arg: Input) => Output): Output[] {
  return Arr.map(Func);
}
const R = Q(['4', '2', '8'], (N) => parseInt(N));  // String -> Number

// *Constraint*
function S<T extends { Length: number }>(A: T, B: T) {
  return A.Length >= B.Length ? A : B;
}
const T0 = S([1, 2], [1, 2, 4]);  // Works With Arrays
const T2 = S('VAK', 'K42');       // Works With Strings
const T4 = S(10, 20);             // Error - Numbers Have No Length

// *Optional Parameter*
function U(N?: number) {
  console.log(N?.toFixed());
}
U();    // Undefined
U(10);  // 10

function V(X = 10) {
  console.log(X);
}
V();           // 10
V(undefined);  // 10

// *Callback Parameter*
function W(Arr: any[], Callback: (Arg: any, Index: number) => void) {
  for (let I = 0; I < Arr.length; I++) {
    Callback(Arr[I], I);
  }
}
W([1, 2, 4], (A) => console.log(A));
W([1, 2, 4], (A, I) => console.log(A, I));

// *Function Overload*
function X(Timestamp: number): Date;
function X(M: number, D: number, Y: number): Date;
function X(MOrTimestamp: number, D?: number, Y?: number): Date {
  if (D !== undefined && Y !== undefined) {
    return new Date(Y, MOrTimestamp, D);
  } else {
    return new Date(MOrTimestamp);
  }
}
const Y0 = X(12345678);
const Y2 = X(5, 5, 5);
const Y4 = X(1, 2);  // Error - Only 1 | 3 Arguments Allowed

// *Declaring 'This'*
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

// *Special Type*
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
    X;  // Type: Never
  }
}

// *Rest Parameter*
function AD(N: number, ...M: number[]) {
  return M.map((X) => N * X);
}
const AE = AD(10, 1, 2, 3, 4);  // [10,20,30,40]

// *Parameter Destructuring*
type AF = { A: number; B: number; C: number };
function AG({ A, B, C }: AF) {
  console.log(A + B + C);
}
AG({ A: 10, B: 3, C: 9 });

// *Void Assignability*
type AH = () => void;

const AI: AH = () => {
  return true;
};
const AJ: AH = () => true;
const AK: AH = function () {
  return true;
};
const AL = AI();
const AM = AJ();
const AN = AK();
const AO = [1, 2, 3];
const AP = [0];
AO.forEach((El) => AP.push(El));
