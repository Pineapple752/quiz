// Each question: Q(prompt, [4 options], indexOfCorrect, [feedback for each option])
// feedback[i] explains why option i is wrong (or why it's right, for the correct one).
const Q=(q,o,a,f)=>({q,o,a,f});

const COURSES=[{id:'apchem',name:'AP Chemistry',topics:[
{name:'Polyatomic Ions',qs:[
Q("Which is the formula and charge of the sulfate ion?",["SO₃²⁻","SO₄²⁻","SO₄⁻","S₂O₃²⁻"],1,["That's sulfite, which has one fewer oxygen.","Sulfate is SO₄²⁻: four oxygens and a 2− charge.","Right atoms, wrong charge. Sulfate is 2−.","That's thiosulfate, which has two sulfurs."]),
Q("Which is the formula of the nitrate ion?",["NO₂⁻","NO₃⁻","NO₃²⁻","NH₄⁺"],1,["That's nitrite, one fewer oxygen.","Nitrate is NO₃⁻ with a 1− charge.","Right atoms, but nitrate's charge is 1−, not 2−.","That's ammonium, a cation."]),
Q("Which of these common polyatomic ions is a cation?",["OH⁻","NH₄⁺","CN⁻","NO₃⁻"],1,["Hydroxide is an anion.","Ammonium is the one common polyatomic cation.","Cyanide is an anion.","Nitrate is an anion."]),
Q("What is the charge on the phosphate ion, PO₄?",["1−","2−","3−","3+"],2,["1− fits nitrate or hydroxide, not phosphate.","2− fits sulfate or carbonate, not phosphate.","Phosphate is PO₄³⁻.","Oxyanions like phosphate are negative, never positive."]),
Q("What is the name of ClO₃⁻?",["Chlorite","Chlorate","Perchlorate","Hypochlorite"],1,["Chlorite is ClO₂⁻, one fewer oxygen.","Chlorate is the '-ate' base form: ClO₃⁻.","Perchlorate is ClO₄⁻, one more oxygen.","Hypochlorite is ClO⁻."]),
Q("What is the formula of calcium hydroxide?",["CaOH","Ca(OH)₂","Ca₂OH","CaO₂H₂"],1,["Ca²⁺ needs two OH⁻ ions to balance, not one.","Ca²⁺ + 2 OH⁻. Parentheses keep OH together as one unit.","A subscript 2 on Ca would give 4+ total, not balance the 2+.","Without parentheses the OH unit is broken apart and the formula is misread."]),
Q("What is the formula of aluminum sulfate?",["AlSO₄","Al₂SO₄","Al(SO₄)₃","Al₂(SO₄)₃"],3,["Al³⁺ and SO₄²⁻ do not balance 1:1.","Only fixes the aluminum: 6+ vs 2−.","Needs two Al to match three sulfates: 3+ vs 6− is unbalanced.","2(3+) = 6+ and 3(2−) = 6−, so the charges cancel."]),
Q("What is HCO₃⁻ called?",["Carbonate","Bicarbonate (hydrogen carbonate)","Carbide","Hydroxycarbonate"],1,["Carbonate is CO₃²⁻, with no hydrogen.","Right. It's carbonate plus one H⁺, so the charge drops to 1−.","Carbide is C⁴⁻, a monatomic ion.","Not a standard name for this ion."]),
Q("What is the name of SO₃²⁻?",["Sulfate","Sulfite","Sulfide","Thiosulfate"],1,["Sulfate is SO₄²⁻, one more oxygen.","'-ite' means one fewer oxygen than '-ate': SO₃²⁻.","Sulfide is just S²⁻.","Thiosulfate is S₂O₃²⁻."]),
Q("What is the formula of ammonium phosphate?",["NH₄PO₄","(NH₄)₃PO₄","NH₄(PO₄)₃","(NH₄)₂PO₄"],1,["1+ and 3− don't cancel.","Three NH₄⁺ (3+) balance one PO₄³⁻ (3−).","That puts the 3 on phosphate, giving 1+ vs 9−.","Two NH₄⁺ gives only 2+, which doesn't cancel 3−."])
]},
{name:'Unit 1: Atomic Structure & Properties',qs:[
Q("Isotopes of the same element differ in their number of:",["Protons","Neutrons","Electrons","Atomic number"],1,["Protons define the element, so they stay the same.","Isotopes have different neutron counts and so different mass numbers.","Electrons change with charge, not with isotope.","Atomic number is the proton count, which is fixed per element."]),
Q("An element is 75% mass 35 and 25% mass 37. What is its average atomic mass?",["35.0","35.5","36.0","36.5"],1,["That ignores the contribution of the heavier isotope.","0.75(35) + 0.25(37) = 35.5.","That's the simple average, but you must weight by abundance.","That weights the wrong isotope more heavily."]),
Q("How many moles are in 22 g of CO₂ (molar mass 44 g/mol)?",["0.50 mol","2.0 mol","22 mol","0.050 mol"],0,["22 g ÷ 44 g/mol = 0.50 mol.","That divides 44 by 22, flipping the ratio.","22 is the mass in grams, not a number of moles.","Decimal slip. 22 ÷ 44 is 0.5, not 0.05."]),
Q("About how many molecules are in 0.50 mol of a substance?",["6.0 × 10²³","3.0 × 10²³","1.2 × 10²⁴","3.0 × 10²⁴"],1,["That's a full mole. You have half.","0.50 × 6.02 × 10²³ ≈ 3.0 × 10²³.","That's about 2 mol, not 0.5.","Power of ten is off by one."]),
Q("A mass spectrum of an element mainly shows:",["Bond angles","The relative abundance of its isotopes","Its number of valence electrons","Its melting point"],1,["Bond angles come from structure models, not mass spectra.","Each peak is an isotope's mass and its height is the abundance.","Valence electrons are probed with PES, not mass spectrometry.","Melting point is a physical property, not shown here."]),
Q("What is the ground-state electron configuration of chlorine (Z = 17)?",["1s²2s²2p⁶3s²3p⁵","1s²2s²2p⁶3s²3p⁶","1s²2s²2p⁶3s²3p³","1s²2s²2p⁶3s²3p⁴"],0,["17 electrons: 2 + 2 + 6 + 2 + 5. Correct.","That totals 18 electrons, which is argon.","That totals 15 electrons, which is phosphorus.","That totals 16 electrons, which is sulfur."]),
Q("Across a period from left to right, first ionization energy generally:",["Decreases","Increases","Stays constant","Changes randomly"],1,["That's the trend down a group.","Nuclear charge rises with similar shielding, so electrons are held tighter.","It does change, mostly upward.","The trend is predictable, with small dips at known exceptions."]),
Q("Why is a Na⁺ ion smaller than a Na atom?",["It loses protons","It loses its outermost shell","It gains electrons","Its nuclear charge decreases"],1,["Forming an ion never changes the proton count.","Losing the 3s electron removes the outer shell, so the ion is smaller.","Gaining electrons makes anions, which are larger.","The nucleus is unchanged. Only electrons moved."]),
Q("In a PES spectrum, the peak at the lowest binding energy comes from:",["1s core electrons","Outermost valence electrons","Neutrons","The nucleus"],1,["Core 1s electrons are held tightest, so they have the highest binding energy.","Valence electrons are easiest to remove, so they appear at lowest binding energy.","PES only measures electrons.","PES does not probe the nucleus."]),
Q("A compound is 40.0% C, 6.7% H, and 53.3% O by mass. Its empirical formula is:",["CHO","CH₂O","C₂H₄O","CH₄O"],1,["Moles are 3.33 : 6.7 : 3.33, so H is twice C, not equal.","3.33 : 6.7 : 3.33 simplifies to 1 : 2 : 1.","That would be 2 C and 1 O, but the data gives 1 C per 1 O.","H is 2 per C, not 4."])
]},
{name:'Unit 2: Compound Structure & Properties',qs:[]},
{name:'Unit 3: Properties of Substances & Mixtures',qs:[]},
{name:'Unit 4: Chemical Reactions',qs:[]},
{name:'Unit 5: Kinetics',qs:[]},
{name:'Unit 6: Thermodynamics',qs:[]},
{name:'Unit 7: Equilibrium',qs:[]},
{name:'Unit 8: Acids & Bases',qs:[]},
{name:'Unit 9: Applications of Thermodynamics',qs:[]}
]}];

// ---- More Unit 1 questions ----
COURSES[0].topics[1].qs.push(
Q("How many protons are in a ³⁷Cl⁻ ion?",["16","17","18","37"],1,["16 is sulfur's proton count.","Protons set the element (Cl = 17) and don't change with charge.","18 is the electron count of Cl⁻, not protons.","37 is the mass number (protons + neutrons)."]),
Q("How many neutrons are in ³⁷Cl?",["17","18","20","37"],2,["17 is the proton count.","18 would be a mass number of 35.","37 − 17 = 20 neutrons.","37 is the mass number, not the neutron count."]),
Q("Which change would increase the attraction between a nucleus and an electron?",["Greater distance","Larger nuclear charge at the same distance","Smaller nuclear charge","More shielding"],1,["Coulomb's law: force weakens as distance grows.","Force grows with charge, so more protons pull harder.","Fewer protons means weaker attraction.","Shielding cancels part of the nuclear pull."]),
Q("Moving left to right across a period, atomic radius generally:",["Increases","Decreases","Stays the same","Doubles"],1,["That's the trend down a group.","Nuclear charge rises while shielding barely changes, pulling the shell in.","It does change, steadily.","No trend doubles the radius."]),
Q("What is the electron configuration of Fe²⁺?",["[Ar]4s²3d⁴","[Ar]3d⁶","[Ar]4s²3d⁶","[Ar]3d⁵"],1,["Right electron count, but 4s electrons are lost first, not 3d.","Fe is [Ar]4s²3d⁶. Losing two 4s electrons gives [Ar]3d⁶.","That's neutral Fe with 26 electrons.","That's Fe³⁺, which has 23 electrons."]),
Q("Which atom has the largest radius?",["Na","Mg","Al","Si"],0,["Na is furthest left in period 3, so it has the lowest nuclear charge and the largest radius.","Mg is smaller than Na.","Al is smaller than Mg.","Si is the smallest of these."]),
Q("Why is Na's second ionization energy far larger than its first?",["The electron comes from the inner core of a Na⁺ ion","Na⁺ has fewer protons","Electron repulsion increases","The electron is farther away"],0,["Na⁺ has a noble-gas core, so the next electron is pulled from a closer, tightly held shell.","Protons never change when electrons are removed.","Repulsion drops after losing an electron.","It's closer to the nucleus, not farther."]),
Q("Which element has the highest electronegativity?",["Cl","F","O","N"],1,["Cl is high but below F.","F is the most electronegative element.","O ranks second.","N is lower than O and F."]),
Q("What is the mass of 2.0 mol of H₂O (18 g/mol)?",["9 g","18 g","36 g","2 g"],2,["That divides by 2 instead of multiplying.","That's one mole.","2.0 mol × 18 g/mol = 36 g.","That's only the mass of the hydrogens' count, not the water."]),
Q("What is the mass percent of oxygen in H₂O (18.0 g/mol)?",["11%","50%","89%","94%"],2,["11% is hydrogen's share.","Oxygen is far heavier than the two H atoms combined.","16.0 ÷ 18.0 ≈ 89%.","Too high. 94% would need more oxygen."]),
Q("Which species is isoelectronic with Ar?",["Cl⁻","Na⁺","Ne","F⁻"],0,["Cl⁻ has 18 electrons, the same as Ar.","Na⁺ has 10 electrons, like Ne.","Ne has 10 electrons.","F⁻ has 10 electrons."]),
Q("Compared with red light, blue light photons have:",["Lower energy","Higher energy","The same energy","No energy"],1,["Blue has a higher frequency, so higher energy.","E = hν, so higher frequency means higher energy.","Energy depends on frequency, so they differ.","All photons carry energy."])
);

// ---- Polyatomic ion drill list: P(name, formula, group) ----
const P=(n,f,g)=>({n,f,g});
const POLY=[
P('ammonium','NH₄⁺','N'),P('hydronium','H₃O⁺','X'),P('hydroxide','OH⁻','X'),P('cyanide','CN⁻','C'),
P('thiocyanate','SCN⁻','C'),P('acetate','C₂H₃O₂⁻','C'),P('oxalate','C₂O₄²⁻','C'),P('carbonate','CO₃²⁻','C'),
P('hydrogen carbonate','HCO₃⁻','C'),P('nitrate','NO₃⁻','N'),P('nitrite','NO₂⁻','N'),
P('sulfate','SO₄²⁻','S'),P('sulfite','SO₃²⁻','S'),P('hydrogen sulfate','HSO₄⁻','S'),P('hydrogen sulfite','HSO₃⁻','S'),
P('thiosulfate','S₂O₃²⁻','S'),P('phosphate','PO₄³⁻','P'),P('phosphite','PO₃³⁻','P'),
P('hydrogen phosphate','HPO₄²⁻','P'),P('dihydrogen phosphate','H₂PO₄⁻','P'),
P('hypochlorite','ClO⁻','Cl'),P('chlorite','ClO₂⁻','Cl'),P('chlorate','ClO₃⁻','Cl'),P('perchlorate','ClO₄⁻','Cl'),
P('bromate','BrO₃⁻','Cl'),P('iodate','IO₃⁻','Cl'),P('permanganate','MnO₄⁻','M'),
P('chromate','CrO₄²⁻','M'),P('dichromate','Cr₂O₇²⁻','M'),P('peroxide','O₂²⁻','X')
];
COURSES[0].poly=POLY;
