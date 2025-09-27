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
n({ x: "VAK" });
n({ x: "VAK", y: "42" });

/*
* Union Types *
Combine Multiple Types
Narrowing: Use typeof | Array.isArray To Differentiate Types
*/
function p(i: number | string) {
  console.log(i);
}
p(42);
p("VAK");

function q(i: number | string) {
  if (typeof i === "string") {
    console.log(i.toUpperCase());
  } else {
    console.log(i);
  }
}
p(42);
p("VAK");

function r(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("TS " + x.join(" "));
  } else {
    console.log("TS " + x);
  }
}
r(["VAK", "KAV", "AKV"]);
r("VAK");
