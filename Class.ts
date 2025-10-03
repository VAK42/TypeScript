// ================================
// Classes In TypeScript
// ================================

// ---------- Empty Class ----------
class a {}
const b = new a();

// ---------- Fields ----------
class c {
  d: number;
  e: number;
}
const f = new c();
f.d = 0;
f.e = 0;

class g {
  h = 0;
  i = 0;
}
const j = new g();
console.log(`${j.h}, ${j.i}`);

// ---------- Strict Property Initialization ----------
class k {
  l: string; // Error Without Initialization
}
class m {
  n: string;
  constructor() {
    this.n = "hello";
  }
}
class o {
  p!: string; // Definite Assignment Assertion
}

// ---------- Readonly ----------
class q {
  readonly r: string = "world";
  constructor(s?: string) {
    if (s !== undefined) this.r = s;
  }
  t() {
    this.r = "bad"; // ❌ Error
  }
}
const u = new q();
u.r = "no"; // ❌ Error

// ---------- Constructors ----------
class v {
  w: number;
  x: number;
  constructor(w = 0, x = 0) {
    this.w = w;
    this.x = x;
  }
}

class y {
  z: number = 0;
  A: number = 0;
  constructor(z: number, A: number);
  constructor(B: string);
  constructor(C: string | number, D: number = 0) {}
}

// ---------- Super Calls ----------
class E {
  F = 4;
}
class G extends E {
  constructor() {
    // console.log(this.F); ❌ Must Call Super First
    super();
  }
}

// ---------- Methods ----------
class H {
  I = 10;
  J = 10;
  K(L: number): void {
    this.I *= L;
    this.J *= L;
  }
}

// ---------- Getters / Setters ----------
class M {
  private N = 0;
  get O() {
    return this.N;
  }
  set O(P) {
    this.N = Number(P);
  }
}

// ---------- Index Signatures ----------
class Q {
  [R: string]: boolean | ((R: string) => boolean);
  S(R: string) {
    return this[R] as boolean;
  }
}

// ================================
// Class Heritage
// ================================

// ---------- Implements ----------
interface T {
  U(): void;
}
class V implements T {
  U() {
    console.log("ping!");
  }
}

// ---------- Extends ----------
class W {
  X() {
    console.log("move");
  }
}
class Y extends W {
  Z(A1: number) {
    for (let B1 = 0; B1 < A1; B1++) console.log("woof");
  }
}

// ---------- Overriding ----------
class C1 {
  D1() {
    console.log("Hello World");
  }
}
class E1 extends C1 {
  D1(F1?: string) {
    if (F1) console.log("Hello " + F1);
    else super.D1();
  }
}

// ================================
// Visibility
// ================================
class G1 {
  public H1() {
    console.log("hi");
  }
}
class I1 {
  public J1() {
    console.log(this.K1());
  }
  protected K1() {
    return "protected";
  }
}
class L1 extends I1 {
  public M1() {
    console.log(this.K1());
  }
}
class N1 {
  private O1 = 0;
}

// ================================
// Static Members
// ================================
class P1 {
  static Q1 = 0;
  static R1() {
    console.log(P1.Q1);
  }
}
P1.R1();

// ================================
// Generic Classes
// ================================
class S1<T> {
  T1: T;
  constructor(U1: T) {
    this.T1 = U1;
  }
}
const V1 = new S1("hello");

// ================================
// This At Runtime
// ================================
class W1 {
  X1 = "Class";
  Y1() {
    return this.X1;
  }
}
const Z1 = new W1();
const A2 = { X1: "Obj", Y1: Z1.Y1 };
console.log(A2.Y1()); // Prints Obj

class B2 {
  C2 = "Class";
  D2 = () => this.C2;
}
const E2 = new B2();
console.log(E2.D2());

// ================================
// This Types
// ================================
class F2 {
  G2: string = "";
  H2(I2: string): this {
    this.G2 = I2;
    return this;
  }
}
class J2 extends F2 {
  K2() {
    this.G2 = "";
  }
}

// ================================
// Parameter Properties
// ================================
class L2 {
  constructor(
    public readonly M2: number,
    protected N2: number,
    private O2: number
  ) {}
}

// ================================
// Abstract Classes
// ================================
abstract class P2 {
  abstract Q2(): string;
  R2() {
    console.log("Hello " + this.Q2());
  }
}
class S2 extends P2 {
  Q2() {
    return "World";
  }
}
const T2 = new S2();
T2.R2();

// ================================
// Relationships
// ================================
class U2 {
  V2 = 0;
  W2 = 0;
}
class X2 {
  V2 = 0;
  W2 = 0;
}
const Y2: U2 = new X2();
