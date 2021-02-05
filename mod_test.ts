import { assertEquals } from './test_deps.ts';
import { Stegosaurus } from './mod.ts';

const Dino = new Stegosaurus();

Deno.test("Compute Dividend Sum",()=>{
    assertEquals(Dino.DividendSum([0.41,0.41,0.41,0.41]),1.64)
});

Deno.test("Compute Holding Period Yield",()=>{
    assertEquals(Dino.HPY(100,150,[0.41,0.41,0.41,0.41]),51.64)
});

Deno.test("Compute Dividend Yield",()=>{
    assertEquals(Dino.DividendYield(10.00,[0.41,0.41,0.41,0.41]),16.4)
});

Deno.test("Compute Future Value Simple Interest",()=>{
    assertEquals(Dino.FVSimple(1000,0.10,50),6000)
});
Deno.test("Compute Future Value Annual Compound",()=>{
    assertEquals(Dino.FVCompoundAnnual(1000,0.10,50),117390.85287969578)
});
Deno.test("Compute Future Value Semiannually Compound",()=>{
    assertEquals(Dino.FVCompoundSemiAnnually(1000,0.10,50),131501.257846304)
});
Deno.test("Compute Future Value Quarterly Compound",()=>{
    assertEquals(Dino.FVCompoundQuarterly(1000,0.10,50),139563.89402335163)
});
Deno.test("Compute Future Value Daily Compound",()=>{
    assertEquals(Dino.FVCompoundDaily(1000,0.10,50),148311.55960854286)
});