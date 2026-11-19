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
Q("What is the mass of 2.0 mol of H₂O (18 g/mol)?",["9 g","18 g","36 g","2 g"],2,["That divides by 2 instead of multiplying.","That's one mole.","2.0 mol × 18 g/mol = 36 g.","That is just the number of moles, not the mass."]),
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

// ---- Units 2-9 ----
const add=(i,...qs)=>COURSES[0].topics[i].qs.push(...qs);

add(2,
Q("Which bond is the most polar?",["C–H","N–H","C–O","O–H"],3,["Nearly nonpolar: C and H have similar electronegativity.","Polar, but N is less electronegative than O.","Polar, but C–O has a smaller difference than O–H.","O–H has the largest electronegativity difference here."]),
Q("What is the molecular shape of NH₃?",["Trigonal planar","Trigonal pyramidal","Tetrahedral","Bent"],1,["That needs three bonds and no lone pair.","Three bonds plus one lone pair gives a pyramid.","Tetrahedral is the electron geometry, not the molecular shape.","Bent needs only two bonded atoms."]),
Q("What is the hybridization of carbon in CH₄?",["sp","sp²","sp³","sp³d"],2,["sp is for two electron domains.","sp² is for three domains.","Four bonding domains means sp³.","sp³d needs five domains."]),
Q("How many σ and π bonds are in C₂H₄?",["5 σ, 1 π","4 σ, 2 π","6 σ, 0 π","3 σ, 3 π"],0,["4 C–H σ + 1 C–C σ = 5 σ, and the double bond adds 1 π.","A double bond has only one π bond.","That treats the double bond as all σ.","Too many π bonds. Each double bond has one."]),
Q("Which has the highest melting point?",["CH₄","CO₂","H₂O","NaCl"],3,["Nonpolar, with weak dispersion forces only.","Nonpolar molecular solid with weak forces.","Hydrogen bonds are strong but weaker than ionic lattices.","Ionic lattices need the most energy to break."])
);

add(3,
Q("What is the strongest intermolecular force in liquid HF?",["London dispersion","Dipole-dipole","Hydrogen bonding","Ionic bonding"],2,["Present, but weaker than other forces here.","Present, but H bonding is stronger.","H bonded to F is the textbook hydrogen-bond case.","Ionic bonds are not intermolecular forces in a molecular liquid."]),
Q("Which has the highest boiling point?",["CH₄","C₂H₆","C₃H₈","C₄H₁₀"],3,["Smallest electron cloud, weakest dispersion.","Larger than CH₄ but not the largest.","Close, but there's a bigger one.","The largest electron cloud gives the strongest dispersion forces."]),
Q("At constant P and n, doubling a gas's Kelvin temperature makes its volume:",["Halve","Stay the same","Double","Quadruple"],2,["That would be the inverse relationship.","Volume depends on T at constant P.","V ∝ T (Charles's law), so it doubles.","Volume is linear in T, not squared."]),
Q("What is the molarity of 0.50 mol NaCl in 250 mL of solution?",["0.50 M","1.0 M","2.0 M","0.125 M"],2,["That ignores the volume.","You must convert 250 mL to 0.250 L.","0.50 mol ÷ 0.250 L = 2.0 M.","That divides by 4 instead of 0.25 L."]),
Q("In Beer's law, absorbance is:",["Inversely proportional to concentration","Directly proportional to concentration","Proportional to concentration squared","Unrelated to concentration"],1,["Higher concentration absorbs more light.","A = εbc, so A is directly proportional to c.","The relationship is linear, not squared.","Spectrophotometry relies on the link between them."])
);

add(4,
Q("For 2H₂ + O₂ → 2H₂O, with 3 mol H₂ and 2 mol O₂, which is limiting?",["H₂","O₂","H₂O","Neither"],0,["3 mol H₂ needs only 1.5 mol O₂, so H₂ runs out first.","O₂ is in excess.","Water is a product.","The amounts are not in a 2:1 ratio, so one limits."]),
Q("What is the net ionic equation when AgNO₃ and NaCl solutions mix?",["Na⁺ + NO₃⁻ → NaNO₃","Ag⁺ + Cl⁻ → AgCl(s)","AgNO₃ + NaCl → AgCl + NaNO₃","No reaction occurs"],1,["NaNO₃ is soluble, so those ions stay dissolved.","Only the precipitate-forming ions appear in the net equation.","That's the molecular equation, not net ionic.","AgCl is insoluble, so a precipitate forms."]),
Q("What is the oxidation number of Mn in MnO₄⁻?",["+4","+5","+6","+7"],3,["That's MnO₂.","That would give a total charge of 3−.","That's MnO₄²⁻.","4(−2) + Mn = −1, so Mn = +7."]),
Q("In Zn + Cu²⁺ → Zn²⁺ + Cu, which species is oxidized?",["Zn","Cu²⁺","Zn²⁺","Cu"],0,["Zn loses electrons (0 to +2), so it's oxidized.","Cu²⁺ gains electrons, so it's reduced.","Zn²⁺ is the product of oxidation.","Cu is the product of reduction."]),
Q("The theoretical yield is 10.0 g and you collect 8.0 g. What is the percent yield?",["8%","80%","125%","20%"],1,["Decimal slip.","8.0 ÷ 10.0 × 100 = 80%.","That divides theoretical by actual.","That's the percent lost, not the yield."])
);

add(5,
Q("If rate = k[A]², doubling [A] makes the rate:",["Double","Quadruple","Stay the same","Triple"],1,["That would be first order.","2² = 4, so the rate quadruples.","Rate changes with concentration here.","That would need a different exponent."]),
Q("What does a catalyst do?",["Raises the activation energy","Lowers the activation energy","Changes ΔH of the reaction","Changes the equilibrium constant"],1,["That would slow the reaction.","It gives an alternate pathway with lower Eₐ.","ΔH is set by reactants and products.","K is unchanged by a catalyst."]),
Q("What are the units of k for a first-order reaction?",["M·s⁻¹","s⁻¹","M⁻¹s⁻¹","M"],1,["That's the units of rate.","Rate (M/s) divided by [A] (M) gives s⁻¹.","That's second order.","That's concentration."]),
Q("The half-life of a first-order reaction:",["Doubles each half-life","Depends on initial concentration","Is constant","Shrinks each half-life"],2,["It doesn't grow.","That's true for second order, not first.","t½ = 0.693/k, independent of concentration.","It stays the same."]),
Q("Raising temperature speeds a reaction mainly because:",["Collisions get less frequent","More collisions have energy ≥ Eₐ","Eₐ decreases","ΔH becomes more negative"],1,["Collisions become more frequent.","A larger fraction of molecules exceeds Eₐ.","Only a catalyst lowers Eₐ.","ΔH is unaffected by rate."])
);

add(6,
Q("How much heat warms 50.0 g of water (c = 4.18 J/g·°C) by 10.0 °C?",["209 J","2090 J","20.9 J","5.0 J"],1,["That's missing a factor of 10.","q = mcΔT = 50.0 × 4.18 × 10.0 = 2090 J.","That's off by a factor of 100.","That's just m × ΔT/100, with no c."]),
Q("An endothermic reaction has:",["ΔH < 0","ΔH > 0","ΔH = 0","ΔS < 0 always"],1,["That's exothermic.","Endothermic means the system absorbs heat.","Then no heat is exchanged.","Entropy is unrelated to this definition."]),
Q("Breaking a chemical bond is:",["Exothermic","Endothermic","Neither","Always spontaneous"],1,["Forming bonds releases energy.","Energy must be added to break bonds.","It always requires energy input.","Spontaneity depends on ΔG."]),
Q("If you reverse a reaction, ΔH:",["Stays the same","Changes sign","Doubles","Becomes zero"],1,["The sign flips.","Reversing a reaction negates its ΔH (Hess's law).","It's the same magnitude, not doubled.","Not zero unless it was zero."]),
Q("Two samples absorb equal heat. The one with the larger specific heat will have:",["A larger temperature rise","A smaller temperature rise","The same rise","No change"],1,["Larger c means more energy is needed per degree.","ΔT = q/mc, so larger c gives a smaller ΔT.","Only if c is equal.","Both absorb energy, so both change."])
);

add(7,
Q("What is K for N₂ + 3H₂ ⇌ 2NH₃?",["[NH₃]/([N₂][H₂])","[NH₃]²/([N₂][H₂]³)","[N₂][H₂]³/[NH₃]²","[NH₃]/([N₂][H₂]³)"],1,["Coefficients must become exponents.","Products over reactants, raised to their coefficients.","That's inverted (1/K).","The NH₃ exponent of 2 is missing."]),
Q("If Q > K, the reaction shifts:",["Toward products","Toward reactants","Not at all","To the right"],1,["Too many products already.","Q > K means too much product, so it moves left.","Only at Q = K.","Right is the product side."]),
Q("For N₂ + 3H₂ ⇌ 2NH₃, raising pressure shifts the equilibrium:",["Left","Right","Not at all","Randomly"],1,["Left has more moles of gas (4).","Right has fewer gas moles (2), which relieves pressure.","Mole counts differ, so it shifts.","Le Chatelier's principle is predictable."]),
Q("K ≫ 1 means:",["Reactants are favored","Products are favored","The reaction is fast","A catalyst is present"],1,["That's K ≪ 1.","Large K means more products at equilibrium.","K says nothing about speed.","K is independent of catalysts."]),
Q("Adding NaCl to a saturated AgCl solution makes AgCl's solubility:",["Increase","Decrease","Unchanged","Double"],1,["Extra Cl⁻ doesn't dissolve more.","Common ion effect: extra Cl⁻ pushes AgCl to precipitate.","Ksp is fixed, but solubility changes.","No such doubling."])
);

add(8,
Q("What is the pH of 0.010 M HCl?",["1.00","2.00","10.00","12.00"],1,["That would be 0.10 M.","−log(0.010) = 2.00.","That's pOH-ish, not the pH of an acid.","That's a basic pH."]),
Q("At 25 °C, a solution has pH 9. What is its pOH?",["9","5","14","7"],1,["That repeats the pH.","pH + pOH = 14, so pOH = 5.","14 is the sum.","7 is neutral."]),
Q("A buffer contains:",["Strong acid and strong base","A weak acid and its conjugate base","Only water","Two strong acids"],1,["They neutralize, leaving no buffering.","The pair resists pH changes.","Water alone has no buffering.","That's just a strongly acidic solution."]),
Q("At the half-equivalence point of a weak acid titration:",["pH = 7","pH = pKa","pH = 14","pH = 0"],1,["That's the equivalence point for strong–strong.","[HA] = [A⁻], so pH = pKa.","Far too basic.","Far too acidic."]),
Q("A larger Kₐ means the acid is:",["Weaker","Stronger","Neutral","A base"],1,["Weaker acids have smaller Kₐ.","More dissociation means larger Kₐ.","Kₐ describes acids, not neutral substances.","Bases use K_b."])
);

add(9,
Q("A reaction is spontaneous when:",["ΔG > 0","ΔG < 0","ΔG = 1","ΔH < 0 only"],1,["That's nonspontaneous.","Negative ΔG means spontaneous.","ΔG is not set to 1.","ΔS and T also matter."]),
Q("Which reaction has the most positive ΔS?",["N₂(g) + 3H₂(g) → 2NH₃(g)","H₂O(g) → H₂O(l)","CaCO₃(s) → CaO(s) + CO₂(g)","2NO(g) → N₂(g) + O₂(g)"],2,["Gas moles drop from 4 to 2, so ΔS is negative.","Gas to liquid lowers entropy.","A solid producing a gas increases entropy a lot.","The number of gas moles stays the same, so ΔS is near zero."]),
Q("A reaction with ΔH < 0 and ΔS > 0 is:",["Never spontaneous","Always spontaneous","Spontaneous only at high T","Spontaneous only at low T"],1,["ΔG = ΔH − TΔS is always negative here.","Both terms push ΔG negative at every T.","That's for ΔH > 0, ΔS > 0.","That's for ΔH < 0, ΔS < 0."]),
Q("In a galvanic cell, oxidation occurs at the:",["Cathode","Anode","Salt bridge","Wire"],1,["Reduction happens at the cathode.","'An ox': anode is oxidation.","The salt bridge only balances charge.","Electrons travel in the wire, no half-reaction."]),
Q("A positive E°cell means ΔG° is:",["Positive","Negative","Zero","Undefined"],1,["That would match a negative E°.","ΔG° = −nFE°, so positive E° gives negative ΔG°.","Zero means equilibrium.","It's defined by the equation."])
);

// ---- Unit 1, batch 2 ----
add(1,
Q("What is the molar mass of Ca(OH)₂ (Ca 40.1, O 16.0, H 1.0)?",["57.1 g/mol","74.1 g/mol","58.1 g/mol","91.1 g/mol"],1,["That counts only one OH group.","40.1 + 2(16.0 + 1.0) = 74.1.","That doesn't match the formula. Count every atom inside the parentheses.","That counts three OH groups."]),
Q("How many atoms are in 0.25 mol of helium?",["1.5 × 10²³","6.0 × 10²³","2.4 × 10²⁴","0.25"],0,["0.25 × 6.02 × 10²³ ≈ 1.5 × 10²³.","That's one full mole.","That's 4 mol, not 0.25 mol.","That's the number of moles, not atoms."]),
Q("A mass spectrum shows ⁶³Cu (69%) and ⁶⁵Cu (31%). What is the average atomic mass?",["63.0","63.6","64.0","64.4"],1,["That ignores the heavier isotope.","0.69(63) + 0.31(65) ≈ 63.6.","That's the unweighted average.","That swaps the abundances."]),
Q("In a mass spectrum, the tallest peak represents the isotope that is:",["Heaviest","Lightest","Most abundant","Most reactive"],2,["Mass is the x-axis position, not height.","Position shows mass, not height.","Peak height shows relative abundance.","Mass spectrometry doesn't measure reactivity."]),
Q("What is the mass percent of nitrogen in NH₄NO₃ (80.0 g/mol)?",["17.5%","35.0%","28.0%","50.0%"],1,["That counts only one N atom (14/80).","Two N atoms: 28.0 ÷ 80.0 = 35.0%.","28.0 is the mass, not the percent.","Too high for two N atoms in 80 g."]),
Q("A compound is 52.9% Al and 47.1% O by mass. Its empirical formula is:",["AlO","Al₂O₃","Al₃O₂","AlO₂"],1,["Moles are about 1.96 Al : 2.94 O, which is 2 : 3, not 1 : 1.","1.96 : 2.94 simplifies to 2 : 3.","That flips the ratio.","That doesn't match the 2 : 3 mole ratio."]),
Q("A compound has empirical formula CH₂ and molar mass 56 g/mol. Its molecular formula is:",["C₂H₄","C₃H₆","C₄H₈","C₅H₁₀"],2,["That has a molar mass of 28.","That has a molar mass of 42.","CH₂ = 14, and 56 ÷ 14 = 4, so C₄H₈.","That has a molar mass of 70."]),
Q("A 5.00 g mixture of NaCl and sand leaves 2.00 g of sand after dissolving and filtering. What is the mass percent of NaCl?",["40.0%","60.0%","3.00%","2.50%"],1,["That's the sand's share.","NaCl = 3.00 g, and 3.00 ÷ 5.00 = 60.0%.","That's the mass in grams, not a percent.","That divides the wrong values."]),
Q("What is the ground-state electron configuration of chromium?",["[Ar]4s²3d⁴","[Ar]4s¹3d⁵","[Ar]3d⁶","[Ar]4s²3d⁵"],1,["That's the expected pattern, but Cr is an exception.","A half-filled 3d subshell is extra stable, so one 4s electron moves.","That has the wrong electron count.","That has 25 electrons, which is manganese."]),
Q("How many unpaired electrons does a ground-state nitrogen atom have?",["1","2","3","5"],2,["Nitrogen has more than one.","That would be carbon or oxygen.","2p³ has one electron in each of three orbitals.","Only the 2p electrons are unpaired."]),
Q("How many valence electrons does sulfur have?",["2","4","6","8"],2,["That's group 2.","That's group 14.","Sulfur is in group 16, so 6.","8 is a full octet, not sulfur's count."]),
Q("Which ion has the configuration 1s²2s²2p⁶?",["Cl⁻","Mg²⁺","K⁺","S²⁻"],1,["Cl⁻ has 18 electrons.","Mg loses 2 electrons to reach 10.","K⁺ has 18 electrons.","S²⁻ has 18 electrons."]),
Q("In the PES spectrum of boron, the 1s : 2s : 2p peak heights are:",["2 : 2 : 1","2 : 3 : 1","1 : 2 : 2","2 : 2 : 3"],0,["Boron is 1s²2s²2p¹, so the heights are 2 : 2 : 1.","That adds an electron to 2s.","That reverses the pattern.","That gives 2p too many electrons for boron."]),
Q("In a PES spectrum, the peak at the highest binding energy comes from:",["Valence electrons","1s core electrons","Protons","Neutrons"],1,["Valence electrons have the lowest binding energy.","Core electrons are closest to the nucleus and most tightly held.","PES measures electrons only.","PES measures electrons only."]),
Q("Which is larger, Cl or Cl⁻?",["Cl⁻, from more electron repulsion","Cl, because it has more protons","They are equal","Cl, because it has more electrons"],0,["Same nuclear charge but one extra electron expands the cloud.","Both have 17 protons.","The extra electron makes a difference.","Cl has fewer electrons than Cl⁻."]),
Q("Which has the highest first ionization energy?",["Li","Be","B","C"],3,["Lowest of these. It sits on the far left.","Be is high but below C.","B dips below Be.","C has the highest nuclear charge here with similar shielding."]),
Q("Why is boron's first ionization energy lower than beryllium's?",["Its 2p electron is higher in energy and easier to remove","It has more protons, so it holds electrons less tightly","It has a half-filled subshell","It is larger"],0,["The 2p electron sits above the full 2s and is partly shielded by it.","More protons would raise IE, not lower it.","A half-filled 2p subshell is nitrogen, not boron.","B is actually smaller than Be."]),
Q("Why do ionic compounds have high melting points?",["Strong attractions between oppositely charged ions","Strong covalent bonds inside each ion","Hydrogen bonding","Weak dispersion forces"],0,["Coulombic attractions throughout the lattice must be overcome.","Ions aren't held by covalent bonds within a lattice.","Hydrogen bonds are weaker than ionic attractions.","Dispersion forces are much weaker."]),
Q("Which ion is larger, Mg²⁺ or Na⁺?",["Mg²⁺","Na⁺","They are equal","Cannot be determined"],1,["Mg²⁺ has more protons pulling the same 10 electrons.","Same electron count, but fewer protons means a larger radius.","The proton counts differ, so the sizes differ.","Isoelectronic ions compare by nuclear charge."]),
Q("Group 2 elements typically form ions with a charge of:",["1+","2+","2−","3+"],1,["That's group 1.","They lose two valence electrons.","Metals form cations, not anions.","That's group 13."]),
Q("How many moles of oxygen atoms are in 1.0 mol of Ca(NO₃)₂?",["2","3","6","9"],2,["That counts the nitrate groups only.","That counts the N atoms' share, not all the O atoms.","2 nitrates × 3 O each = 6.","That multiplies too many times."]),
Q("What is the mass of 3.0 × 10²³ molecules of O₂ (32 g/mol)?",["8 g","16 g","32 g","64 g"],1,["That's only a quarter mole.","3.0 × 10²³ is 0.50 mol, and 0.50 × 32 = 16 g.","That's a full mole.","That's two moles."]),
Q("A sample is 20% ¹⁰B (10.0 amu) and 80% ¹¹B (11.0 amu). What is the average atomic mass?",["10.2","10.5","10.8","11.0"],2,["That swaps the abundances.","That's the unweighted average.","0.20(10.0) + 0.80(11.0) = 10.8.","That's only the mass of ¹¹B."]),
Q("In hydrogen, which transition emits the highest-energy photon?",["n = 3 → 2","n = 4 → 2","n = 5 → 1","n = 2 → 1"],2,["A small energy gap.","Larger gap than 3 → 2, but still small.","The biggest drop in energy levels releases the most energy.","Big, but 5 → 1 is bigger."]),
Q("How do core electrons affect valence electrons?",["They increase the nuclear charge","They shield them from the nucleus","They have no effect","They are removed first"],1,["Only protons set nuclear charge.","Core electrons repel valence electrons, lowering the effective nuclear charge.","Shielding is a real, important effect.","Valence electrons are removed first."])
);

// ---- Unit 1 batch 3, Unit 2 batch 1 ----
add(1,
Q("Which rule says electrons fill empty orbitals of equal energy singly before pairing up?",["Pauli exclusion principle","Hund's rule","Aufbau principle","Heisenberg uncertainty principle"],1,["Pauli says an orbital holds at most two electrons with opposite spins.","Hund's rule spreads electrons out with parallel spins first.","Aufbau gives the filling order of subshells.","That's about measuring position and momentum."]),
Q("What is the maximum number of electrons in a single orbital?",["1","2","6","8"],1,["An orbital holds a pair.","Two electrons with opposite spins (Pauli).","6 is the capacity of a p subshell.","8 is an octet, not an orbital."]),
Q("What is the maximum number of electrons in a d subshell?",["5","6","10","14"],2,["That's the number of d orbitals.","That's a p subshell's capacity.","Five orbitals × 2 electrons = 10.","That's an f subshell."]),
Q("What is the electron configuration of Ca²⁺?",["[Ar]","[Ar]4s²","[Ne]3s²","[Ar]3d²"],0,["Ca loses both 4s electrons, leaving the argon core.","That's neutral Ca.","That's Mg, with 12 electrons.","Ca loses its 4s electrons, not gains 3d."]),
Q("What is the mass of one Fe atom (55.85 g/mol)?",["9.27 × 10⁻²³ g","55.85 g","1.08 × 10²⁵ g","6.02 × 10²³ g"],0,["55.85 ÷ 6.02 × 10²³ ≈ 9.27 × 10⁻²³ g.","That's a whole mole.","That multiplies by Avogadro's number instead of dividing.","That's Avogadro's number, not a mass."]),
Q("Which ionic compound has the highest lattice energy?",["NaCl","KBr","MgO","NaF"],2,["Both ions are 1+/1−.","Larger ions and 1+/1− charges give lower lattice energy.","2+ and 2− charges (Coulomb's law) make the strongest attraction.","1+/1− charges, so weaker than MgO."]),
Q("Which technique recovers a dissolved solid from a solution?",["Filtration","Evaporation","Using a magnet","Decanting only"],1,["Filtration only catches undissolved solids.","Boiling off the solvent leaves the solute behind.","Only works for magnetic solids.","That separates a settled solid, not a dissolved one."]),
Q("An element has isotopes of 10 amu and 12 amu, and an average mass of 10.5. Which isotope is more abundant?",["10 amu","12 amu","Equal","Cannot tell"],0,["The average sits closer to 10, so the lighter isotope dominates.","The average would be above 11.","Equal abundance would average 11.","The average tells you the weighting."]),
Q("Two isotopes weigh 79 and 81 amu, and the average is 79.9. What is the percent abundance of the 81 amu isotope?",["20%","45%","55%","80%"],1,["That's too small for an average this close to the middle.","x(81) + (1−x)(79) = 79.9 gives x = 0.45.","That's the abundance of the lighter isotope.","That would give an average near 80.6."]),
Q("Atomic radius increases down a group because:",["Nuclear charge decreases","Electrons occupy additional shells","Electrons are lost","Shielding decreases"],1,["Nuclear charge increases down a group.","Each period adds a shell farther from the nucleus.","Electrons aren't lost in neutral atoms.","Shielding grows as more core electrons are added."]),
Q("Which element has the lowest electronegativity?",["Li","Na","K","Cs"],3,["Higher than Cs.","Higher than Cs.","Higher than Cs.","Electronegativity falls down a group, so Cs is lowest here."]),
Q("What is the percent water in CuSO₄·5H₂O (249.7 g/mol)?",["7.2%","36.1%","18.0%","63.9%"],1,["That's one water only.","5 × 18.02 = 90.1, and 90.1 ÷ 249.7 = 36.1%.","That's the mass of one H₂O, not a percent.","That's the anhydrous salt's percent."]),
Q("A PES spectrum shows three peaks with relative heights 2 : 2 : 6. Which element is it?",["Carbon","Neon","Magnesium","Fluorine"],1,["Carbon would be 2 : 2 : 2.","1s²2s²2p⁶ matches 2 : 2 : 6.","Magnesium would show a fourth peak for 3s.","Fluorine would be 2 : 2 : 5."]),
Q("Ionic bonds typically form between:",["Two nonmetals","A metal and a nonmetal","Two metals","Two noble gases"],1,["Nonmetals usually share electrons.","Metals give electrons and nonmetals take them.","Metals bond metallically.","Noble gases rarely bond."])
);

add(2,
Q("Which has the shortest bond between two carbon atoms?",["C–C","C=C","C≡C","All are equal"],2,["Single bonds are longest.","Double bonds are shorter, but not shortest.","More shared pairs pull the nuclei closer.","Bond order changes length."]),
Q("What is the bond order of N₂?",["1","2","3","4"],2,["That's a single bond.","That's a double bond.","N≡N is a triple bond.","No common bond order is 4."]),
Q("How many lone pairs are on the oxygen in H₂O?",["0","1","2","3"],2,["Oxygen has 6 valence electrons, 2 used in bonds.","Two pairs remain.","4 nonbonding electrons make 2 pairs.","That would be 6 nonbonding electrons."]),
Q("What is the molecular shape of CO₂?",["Bent","Linear","Trigonal planar","Tetrahedral"],1,["No lone pairs on C.","Two electron domains give a straight line.","That needs three domains.","That needs four domains."]),
Q("What is the molecular shape of SF₆?",["Tetrahedral","Trigonal bipyramidal","Octahedral","Square planar"],2,["That's four domains.","That's five domains.","Six bonding domains give an octahedron.","That needs two lone pairs on six domains."]),
Q("Why is CO₂ nonpolar even though C=O bonds are polar?",["Its bond dipoles cancel due to symmetry","The bonds are nonpolar","Carbon has no electronegativity","It has lone pairs on carbon"],0,["Equal and opposite dipoles in a linear shape cancel.","C=O bonds are polar.","Carbon has an electronegativity of about 2.5.","Carbon has no lone pairs here."]),
Q("Which molecule is polar?",["CO₂","BF₃","CCl₄","CH₂Cl₂"],3,["Symmetric, so dipoles cancel.","Symmetric trigonal planar, so dipoles cancel.","Symmetric tetrahedral, so dipoles cancel.","Different atoms around C make an uneven dipole."]),
Q("What is the formal charge on N in NH₄⁺?",["0","+1","−1","+4"],1,["Formal charge = 5 − 0 − 4, which isn't 0.","5 valence − 0 nonbonding − 4 bonds = +1.","That would need extra electrons on N.","That ignores the bonds."]),
Q("Which species has resonance structures?",["CH₄","NO₃⁻","H₂O","NH₃"],1,["Only single bonds, one structure.","The double bond can be drawn on any of three oxygens.","Only one Lewis structure.","Only one Lewis structure."]),
Q("What is the approximate H–O–H bond angle in water?",["90°","104.5°","109.5°","120°"],1,["That's for six-domain shapes.","Two lone pairs squeeze the angle below 109.5°.","That's the ideal tetrahedral angle without lone-pair repulsion.","That's trigonal planar."]),
Q("What is the hybridization of carbon in CO₂?",["sp","sp²","sp³","sp³d"],0,["Two domains means sp.","That needs three domains.","That needs four domains.","That needs five domains."]),
Q("What is the hybridization of nitrogen in NH₃?",["sp","sp²","sp³","sp³d"],2,["That needs two domains.","That needs three domains.","Three bonds plus a lone pair is four domains, so sp³.","That needs five domains."]),
Q("Which describes a substitutional alloy such as brass?",["Small atoms sit in gaps","Atoms of similar size replace each other","A compound of nonmetals","Ions in a lattice"],1,["That's an interstitial alloy.","Zinc replaces some copper atoms of similar size.","Alloys contain metals.","That's ionic bonding."]),
Q("Why do metals conduct electricity?",["Delocalized valence electrons move freely","Ions flow through the lattice","They have free neutrons","Their bonds are covalent"],0,["The 'sea of electrons' carries charge.","Ions are fixed in place in a metal.","Neutrons don't carry charge.","Metals use metallic, not covalent, bonding."]),
Q("Solid NaCl does not conduct electricity because:",["Its ions are locked in the lattice","It has no ions","It has free electrons","It is covalent"],0,["Ions can't move until molten or dissolved.","It's made of Na⁺ and Cl⁻ ions.","Electrons are not free in an ionic solid.","NaCl is ionic."]),
Q("How many valence electrons must appear in the Lewis structure of PO₄³⁻?",["29","32","30","24"],1,["5 + 4(6) + 3 = 32, so that is too few.","5 + 24 + 3 for the 3− charge = 32.","That forgets part of the charge.","That omits phosphorus and the charge."])
);

// ---- Unit 2 batch 2 ----
add(2,
Q("What is the molecular shape of BF₃?",["Trigonal pyramidal","Trigonal planar","Bent","T-shaped"],1,["That needs a lone pair on B.","Three bonding domains and no lone pairs.","That needs two bonded atoms.","That needs lone pairs on five domains."]),
Q("What is the H–C–H bond angle in CH₄?",["90°","104.5°","109.5°","120°"],2,["That's octahedral.","That's water, with lone pairs.","Four equal bonding domains give a tetrahedron.","That's trigonal planar."]),
Q("What is the molecular shape of SO₂?",["Linear","Bent","Trigonal planar","Tetrahedral"],1,["There's a lone pair on S, so it isn't linear.","Three domains with one lone pair gives a bent shape.","That's the electron geometry, not the molecular shape.","That needs four domains."]),
Q("What is the molecular shape of PCl₅?",["Octahedral","Trigonal bipyramidal","Square pyramidal","Tetrahedral"],1,["That's six domains.","Five bonding domains and no lone pairs.","That needs a lone pair on six domains.","That's four domains."]),
Q("What is the molecular shape of XeF₄?",["Tetrahedral","Square planar","Seesaw","Octahedral"],1,["Xe also has two lone pairs.","Six domains with two lone pairs placed opposite each other.","That's four bonds and one lone pair on five domains.","That is the electron geometry, not the molecular shape."]),
Q("What is the molecular shape of NO₃⁻?",["Trigonal pyramidal","Trigonal planar","Bent","Tetrahedral"],1,["N has no lone pair here.","Three domains around N with no lone pairs.","That needs a lone pair.","That needs four domains."]),
Q("How many electron domains surround the central atom in CH₄?",["2","3","4","5"],2,["That's CO₂.","That's BF₃.","Four bonding pairs.","That's PCl₅."]),
Q("Which has the largest bond angle?",["CH₄","NH₃","H₂O","All are equal"],0,["109.5° with no lone pairs.","About 107°, squeezed by one lone pair.","About 104.5°, squeezed by two.","Lone pairs change the angles."]),
Q("Which atom can have an expanded octet?",["C","N","O","P"],3,["Period 2 atoms can't exceed 8 electrons.","Period 2 atoms can't exceed 8 electrons.","Period 2 atoms can't exceed 8 electrons.","Period 3 atoms can, as in PCl₅."]),
Q("How many valence electrons are in CO₂?",["12","16","18","20"],1,["That omits some oxygen electrons.","4 + 6 + 6 = 16.","That adds extra.","That adds extra."]),
Q("How many valence electrons are in NH₄⁺?",["8","9","10","5"],0,["5 + 4 − 1 = 8, the ion has lost one electron.","That ignores the positive charge.","That adds an electron.","That's N alone."]),
Q("How many valence electrons are in ClO₃⁻?",["24","26","25","28"],1,["That leaves out the charge.","7 + 18 + 1 = 26.","That forgets the extra electron.","That adds too many."]),
Q("In CO₃²⁻, what is the formal charge on each single-bonded O?",["0","−1","+1","−2"],1,["That's the double-bonded O.","6 − 6 − 1 = −1.","That would need fewer electrons on O.","That would need 7 nonbonding electrons."]),
Q("Which bond has the most ionic character?",["C–H","H–Cl","Na–Cl","O–H"],2,["Nearly nonpolar.","Polar covalent.","Metal–nonmetal has the largest electronegativity difference.","Polar covalent."]),
Q("Which carbon–carbon bond is strongest?",["C–C","C=C","C≡C","All are equal"],2,["The weakest of the three.","Stronger than single, weaker than triple.","More shared pairs mean higher bond energy.","Bond order changes strength."]),
Q("As bond order increases, bond length ___ and bond energy ___.",["increases, increases","decreases, increases","decreases, decreases","increases, decreases"],1,["Length shrinks with higher order.","Shorter, stronger bonds.","Energy rises with bond order.","Opposite of the actual trend."]),
Q("Which molecule has a net dipole?",["BF₃","NH₃","CH₄","CO₂"],1,["Symmetric, so dipoles cancel.","The pyramidal shape leaves an unbalanced dipole.","Symmetric tetrahedral.","Symmetric linear."]),
Q("Why is H₂O polar?",["O–H bonds are nonpolar","Its bent shape prevents dipole cancellation","It has hydrogen bonds","It's ionic"],1,["O–H bonds are polar.","The two bond dipoles add up.","Hydrogen bonding is an IMF, not the cause of molecular polarity.","Water is covalent."]),
Q("What is the hybridization of each carbon in C₂H₄?",["sp","sp²","sp³","sp³d"],1,["That's for two domains.","Three domains per carbon.","That's four domains.","That's five domains."]),
Q("What is the hybridization of carbon in HCN?",["sp","sp²","sp³","sp³d"],0,["Two domains around carbon (one H, one N).","That needs three domains.","That needs four domains.","That needs five domains."]),
Q("How many σ and π bonds are in N₂?",["1 σ, 2 π","2 σ, 1 π","3 σ, 0 π","0 σ, 3 π"],0,["A triple bond is 1 σ plus 2 π.","That's backwards.","Only one σ bond exists between two atoms.","There's always one σ bond."]),
Q("How is a σ bond formed?",["Sideways overlap of p orbitals","Head-on overlap of orbitals","Transfer of electrons","Hydrogen bonding"],1,["That's a π bond.","Orbitals overlap along the bond axis.","That's ionic bonding.","That's an IMF."]),
Q("How is a π bond formed?",["Head-on overlap","Sideways overlap of parallel p orbitals","Ion attraction","Metallic bonding"],1,["That's σ.","Above and below the bond axis.","That's ionic.","That's metallic."]),
Q("If you double both ion charges at fixed distance, the Coulombic force changes by a factor of:",["2","4","8","16"],1,["It's the product of charges.","2 × 2 = 4.","That overcounts.","That overcounts."]),
Q("Which has the higher melting point?",["NaF","NaI","Equal","Cannot compare"],0,["F⁻ is smaller, so ions sit closer and attract more.","I⁻ is larger, so attraction is weaker.","Their ion sizes differ.","Coulomb's law lets you compare."]),
Q("Why are ionic solids brittle?",["Shifting layers lines up like charges that repel","Their ions are mobile","They have delocalized electrons","They are molecular"],0,["A small shift causes repulsion and cracking.","Ions are fixed in a solid.","That describes metals.","Ionic solids are lattices."]),
Q("Why are metals malleable?",["Layers slide while delocalized electrons keep them bonded","They contain ionic bonds","Their atoms are molecules","They have weak IMFs only"],0,["Bonding isn't broken, so it just deforms.","Metals use metallic bonding.","Metals are not molecules.","Metallic bonding is strong."]),
Q("Which is a network covalent solid?",["CO₂","SiO₂","H₂O","NaCl"],1,["Molecular.","Si and O form a continuous covalent network.","Molecular.","Ionic."]),
Q("Why does graphite conduct while diamond does not?",["Graphite has delocalized electrons","Graphite has ions","Diamond is metallic","Graphite has free neutrons"],0,["Layers of sp² carbon have mobile electrons.","Both are pure carbon.","Diamond is covalent network.","Neutrons don't carry current."]),
Q("Why do molecular solids have low melting points?",["Weak IMFs between molecules","Strong covalent bonds","Ionic lattice","Metallic bonds"],0,["Only IMFs break, not covalent bonds.","Covalent bonds stay intact on melting.","That's ionic.","That's metallic."]),
Q("In steel, the small carbon atoms:",["Replace iron atoms","Fit in gaps between iron atoms","Form ionic bonds with iron","Float freely"],1,["That's substitutional.","This is an interstitial alloy.","Alloys are metallic.","They're held in the lattice."]),
Q("How many lone pairs are on N in NH₃?",["0","1","2","3"],1,["N has 5 valence electrons and uses 3.","One pair remains.","That would be oxygen in water.","That's too many."]),
Q("Which species has an odd number of electrons?",["CO₂","NO","H₂O","N₂"],1,["16 valence electrons.","5 + 6 = 11 valence electrons.","8 valence electrons.","10 valence electrons."]),
Q("What is the hybridization of P in PCl₅?",["sp³","sp³d","sp³d²","sp²"],1,["That's four domains.","Five domains means sp³d.","That's six domains.","That's three domains."]),
Q("In H–Cl, which atom carries the partial negative charge?",["H","Cl","Both","Neither"],1,["Hydrogen is less electronegative.","Cl pulls the shared pair closer.","The bond is polar.","The bond is polar."]),
Q("Which has the largest electronegativity difference?",["H–F","H–Cl","H–Br","H–I"],0,["F is the most electronegative.","Smaller difference.","Smaller difference.","Smallest difference."])
);

// ---- More polyatomic ions for the drill ----
POLY.push(P('bromite','BrO₂⁻','Cl'),P('hypobromite','BrO⁻','Cl'),P('perbromate','BrO₄⁻','Cl'),P('periodate','IO₄⁻','Cl'),
P('cyanate','OCN⁻','C'),P('hydrogen oxalate','HC₂O₄⁻','C'),P('silicate','SiO₃²⁻','X'),P('borate','BO₃³⁻','X'),
P('arsenate','AsO₄³⁻','P'),P('selenate','SeO₄²⁻','S'),P('hydrogen sulfide','HS⁻','S'),P('manganate','MnO₄²⁻','M'),
P('mercury(I)','Hg₂²⁺','X'),P('azide','N₃⁻','N'));

// ---- Polyatomic Ions chapter, batch 2 ----
add(0,
Q("Which is the carbonate ion?",["CO₃²⁻","CO₂²⁻","HCO₃⁻","C₂O₄²⁻"],0,["Carbonate is CO₃²⁻.","That's not a standard ion.","That's hydrogen carbonate.","That's oxalate."]),
Q("Which is the acetate ion?",["C₂H₃O₂⁻","CO₃²⁻","C₂O₄²⁻","CH₃⁻"],0,["Acetate is C₂H₃O₂⁻ (also written CH₃COO⁻).","That's carbonate.","That's oxalate.","That's not acetate."]),
Q("Which is the oxalate ion?",["C₂O₄²⁻","C₂H₃O₂⁻","CO₃²⁻","C₂O₃²⁻"],0,["Oxalate is C₂O₄²⁻.","That's acetate.","That's carbonate.","That isn't a standard ion."]),
Q("What is NH₄⁺ called?",["Ammonia","Ammonium","Amide","Nitrate"],1,["Ammonia is neutral NH₃.","Ammonium is NH₄⁺.","Amide is NH₂⁻.","Nitrate is NO₃⁻."]),
Q("What is H₃O⁺ called?",["Hydroxide","Hydronium","Hydride","Peroxide"],1,["Hydroxide is OH⁻.","Hydronium is H₃O⁺, the acid ion in water.","Hydride is H⁻.","Peroxide is O₂²⁻."]),
Q("What is CN⁻ called?",["Cyanate","Cyanide","Nitrile","Thiocyanate"],1,["Cyanate is OCN⁻.","CN⁻ is cyanide.","Nitrile is an organic group.","Thiocyanate is SCN⁻."]),
Q("What is MnO₄⁻ called?",["Manganate","Permanganate","Manganite","Manganese oxide"],1,["Manganate is MnO₄²⁻.","Permanganate is MnO₄⁻.","Not a standard name.","That's an oxide compound."]),
Q("What is Cr₂O₇²⁻ called?",["Chromate","Dichromate","Chromite","Chromium oxide"],1,["Chromate is CrO₄²⁻.","Two chromiums make dichromate.","Not a standard name.","That's a different compound."]),
Q("What is PO₃³⁻ called?",["Phosphate","Phosphite","Phosphide","Hypophosphite"],1,["Phosphate is PO₄³⁻.","Phosphite has one fewer oxygen.","Phosphide is P³⁻.","Hypophosphite has two fewer oxygens."]),
Q("What is ClO⁻ called?",["Chlorite","Hypochlorite","Perchlorate","Chloride"],1,["Chlorite is ClO₂⁻.","Hypochlorite has the fewest oxygens.","Perchlorate is ClO₄⁻.","Chloride is Cl⁻."]),
Q("What is ClO₄⁻ called?",["Chlorate","Perchlorate","Chlorite","Hypochlorite"],1,["Chlorate is ClO₃⁻.","'Per-' means one more oxygen than chlorate.","Chlorite is ClO₂⁻.","Hypochlorite is ClO⁻."]),
Q("What is NO₂⁻ called?",["Nitrate","Nitrite","Nitride","Nitrogen dioxide"],1,["Nitrate is NO₃⁻.","'-ite' means one fewer oxygen than nitrate.","Nitride is N³⁻.","That's the neutral molecule."]),
Q("What is BrO₃⁻ called?",["Bromide","Bromite","Bromate","Perbromate"],2,["Bromide is Br⁻.","Bromite is BrO₂⁻.","It follows chlorate's pattern.","Perbromate is BrO₄⁻."]),
Q("What is S₂O₃²⁻ called?",["Sulfite","Thiosulfate","Sulfate","Persulfate"],1,["Sulfite is SO₃²⁻.","Thio- means one O replaced by S.","Sulfate is SO₄²⁻.","Persulfate is S₂O₈²⁻."]),
Q("What is HSO₄⁻ called?",["Sulfite","Hydrogen sulfate (bisulfate)","Hydrogen sulfite","Sulfide"],1,["Sulfite is SO₃²⁻.","SO₄²⁻ plus one H⁺.","That's HSO₃⁻.","Sulfide is S²⁻."]),
Q("What is H₂PO₄⁻ called?",["Phosphate","Hydrogen phosphate","Dihydrogen phosphate","Phosphite"],2,["That's PO₄³⁻.","That's HPO₄²⁻.","Two hydrogens added to phosphate, with a 1− charge.","That's PO₃³⁻."]),
Q("What is the charge on the hydrogen phosphate ion, HPO₄?",["1−","2−","3−","4−"],1,["That's dihydrogen phosphate.","Phosphate is 3−, and adding one H⁺ makes 2−.","That's phosphate.","No common ion has this charge."]),
Q("What is the formula of sodium sulfate?",["NaSO₄","Na₂SO₄","Na(SO₄)₂","Na₂S"],1,["1+ and 2− don't balance.","Two Na⁺ balance one SO₄²⁻.","That gives 1+ and 4−.","That's sodium sulfide."]),
Q("What is the formula of magnesium nitrate?",["MgNO₃","Mg(NO₃)₂","Mg₂NO₃","Mg₂(NO₃)"],1,["2+ and 1− don't balance.","One Mg²⁺ needs two NO₃⁻.","That gives 4+ and 1−.","That puts the subscript on Mg."]),
Q("What is the formula of potassium permanganate?",["KMnO₄","K₂MnO₄","K(MnO₄)₂","KMn₂O₄"],0,["K⁺ and MnO₄⁻ balance 1:1.","That's potassium manganate.","That's an unbalanced ratio.","That breaks up the ion."]),
Q("What is the formula of calcium phosphate?",["CaPO₄","Ca₂PO₄","Ca₃(PO₄)₂","Ca₂(PO₄)₃"],2,["2+ and 3− don't balance.","4+ and 3− don't balance.","3(2+) = 6+ and 2(3−) = 6−.","That swaps the subscripts."]),
Q("What is the formula of iron(III) sulfate?",["FeSO₄","Fe₂(SO₄)₃","Fe₃(SO₄)₂","Fe(SO₄)₃"],1,["That's iron(II) sulfate.","2(3+) = 6+ and 3(2−) = 6−.","That swaps the subscripts.","That gives 3+ and 6−."]),
Q("What is the formula of ammonium sulfate?",["NH₄SO₄","(NH₄)₂SO₄","NH₄(SO₄)₂","(NH₄)₃SO₄"],1,["1+ and 2− don't balance.","Two NH₄⁺ balance one SO₄²⁻.","That makes two sulfates.","That gives 3+ and 2−."]),
Q("What is the formula of barium chlorate?",["BaClO₃","Ba(ClO₃)₂","Ba₂ClO₃","BaCl₂O₃"],1,["2+ and 1− don't balance.","Ba²⁺ needs two ClO₃⁻.","That gives 4+ and 1−.","That breaks up the ion."]),
Q("What is the formula of zinc carbonate?",["ZnCO₃","Zn₂CO₃","Zn(CO₃)₂","ZnC₂O₃"],0,["Zn²⁺ and CO₃²⁻ balance 1:1.","That gives 4+ and 2−.","That gives 2+ and 4−.","That breaks up the ion."]),
Q("What is the name of Cu(NO₃)₂?",["Copper nitrate","Copper(II) nitrate","Copper(I) nitrate","Copper dinitrate"],1,["Copper needs a Roman numeral.","Two NO₃⁻ means Cu²⁺.","That would be CuNO₃.","Prefixes aren't used in ionic names."]),
Q("What is the name of NaClO?",["Sodium chlorite","Sodium hypochlorite","Sodium chlorate","Sodium perchlorate"],1,["That's NaClO₂.","ClO⁻ is hypochlorite.","That's NaClO₃.","That's NaClO₄."]),
Q("What is the name of NaHCO₃?",["Sodium carbonate","Sodium hydrogen carbonate","Sodium hydroxide","Sodium oxalate"],1,["That's Na₂CO₃.","Also called baking soda.","That's NaOH.","That's Na₂C₂O₄."]),
Q("What is the name of K₂Cr₂O₇?",["Potassium chromate","Potassium dichromate","Potassium chromite","Potassium chromium oxide"],1,["That's K₂CrO₄.","Contains Cr₂O₇²⁻.","Not a standard name.","That's a different compound."]),
Q("What is the name of Fe(OH)₃?",["Iron hydroxide","Iron(III) hydroxide","Iron(II) hydroxide","Iron trihydroxide"],1,["Iron needs a Roman numeral.","Three OH⁻ means Fe³⁺.","That's Fe(OH)₂.","Prefixes aren't used in ionic names."]),
Q("Compared with the '-ate' ion of the same element, the '-ite' ion has:",["One fewer oxygen","One more oxygen","A different charge","No oxygen"],0,["Chlorite has one fewer oxygen than chlorate.","That's 'per-'.","The charge usually stays the same.","Both contain oxygen."]),
Q("Which ion does not have a 1− charge?",["NO₃⁻","ClO₃⁻","SO₄²⁻","BrO₃⁻"],2,["1−.","1−.","Sulfate is 2−.","1−."]),
Q("How many oxygen atoms are in one formula unit of Al₂(SO₄)₃?",["4","7","12","3"],2,["That's one sulfate.","That ignores the subscript.","3 sulfates × 4 oxygens = 12.","That's the subscript only."]),
Q("How many atoms are in one formula unit of (NH₄)₂SO₄?",["7","10","15","9"],2,["That undercounts.","That omits some.","2N + 8H + 1S + 4O = 15.","That undercounts."])
);

// ---- Unit 3 batch 1 ----
add(3,
Q("Which substance can form hydrogen bonds with itself?",["CH₄","CH₃OH","CH₃Cl","C₂H₆"],1,["No H on N, O or F.","H is bonded to O, so hydrogen bonding is possible.","H is bonded to C only.","H is bonded to C only."]),
Q("Dispersion forces generally get stronger with:",["Smaller electron clouds","Larger, more polarizable electron clouds","Lower molar mass","More ionic character"],1,["Smaller clouds are less polarizable.","Larger clouds distort more easily.","Heavier molecules usually have stronger dispersion forces.","Dispersion forces exist in all substances."]),
Q("Why does H₂O boil at a higher temperature than H₂S?",["Water has hydrogen bonding","Water has a higher molar mass","H₂S is ionic","Water has stronger covalent bonds"],0,["O–H···O hydrogen bonds are strong.","H₂S is actually heavier.","Both are molecular.","Boiling doesn't break covalent bonds."]),
Q("Which noble gas has the highest boiling point?",["Ne","Ar","Kr","Xe"],3,["Smallest cloud.","Larger than Ne.","Larger than Ar.","Largest cloud, strongest dispersion."]),
Q("Stronger intermolecular forces generally give a liquid:",["Lower viscosity","Higher viscosity","Lower boiling point","Higher vapor pressure"],1,["Opposite effect.","Molecules resist flowing past each other.","They give a higher boiling point.","They give a lower vapor pressure."]),
Q("A liquid with stronger IMFs has a vapor pressure that is:",["Higher","Lower","Unchanged","Zero"],1,["Molecules escape less easily.","Fewer molecules enter the gas phase.","IMFs directly affect it.","All liquids have some vapor pressure."]),
Q("A liquid boils when its vapor pressure equals:",["Zero","The external pressure","Atmospheric humidity","Its density"],1,["That would be absolute zero.","Bubbles can form when internal and external pressure match.","Not relevant.","Not relevant."]),
Q("What is the main IMF in liquid HCl?",["Hydrogen bonding","Dipole-dipole","Ionic","Metallic"],1,["Cl isn't N, O or F.","HCl is polar.","It's molecular.","It's not a metal."]),
Q("What force attracts Na⁺ to water molecules?",["Ion-dipole","Hydrogen bonding only","Dispersion only","Covalent"],0,["Ion attracted to the partial charge on O.","H bonding involves H on N, O or F.","Dispersion is weaker than ion-dipole.","No bond is formed."]),
Q("Which dissolves best in nonpolar hexane?",["NaCl","I₂","KBr","Glucose"],1,["Ionic.","Nonpolar solute, like dissolves like.","Ionic.","Highly polar."]),
Q("Why is ethanol miscible with water?",["Both can hydrogen bond","Both are ionic","Both are nonpolar","Ethanol is a metal"],0,["–OH groups form hydrogen bonds.","Both are molecular.","Both are polar.","Ethanol is molecular."]),
Q("At constant T, doubling the pressure of a gas makes its volume:",["Double","Halve","Stay the same","Quadruple"],1,["That would lower the pressure.","P and V are inversely related (Boyle).","Volume changes with pressure.","Not a squared relationship."]),
Q("How many moles are in a gas at 2.0 atm, 10.0 L and 300 K? (R = 0.0821)",["0.81 mol","1.2 mol","6.0 mol","0.12 mol"],0,["n = PV/RT = 20 ÷ 24.6 = 0.81.","That's the inverse.","That ignores R and T.","Decimal slip."]),
Q("At the same T and P, which gas is densest?",["He","H₂","N₂","CO₂"],3,["Lightest of these.","Very light.","Lighter than CO₂.","Highest molar mass (44 g/mol)."]),
Q("Compared with O₂, H₂ effuses:",["Slower","Faster","At the same rate","Not at all"],1,["It's much lighter.","Lighter molecules move faster at the same T.","Rates depend on molar mass.","All gases effuse."]),
Q("According to kinetic molecular theory, temperature is a measure of:",["Average kinetic energy","Total mass","Molecular volume","Pressure only"],0,["Higher T means higher average KE.","Mass is not temperature.","Not related.","Pressure depends on more than T."]),
Q("At the same temperature, He and Xe gas particles have:",["The same average kinetic energy","He has more","Xe has more","Zero kinetic energy"],0,["KE depends only on T.","He moves faster but is lighter, so KE is equal.","Xe moves slower but is heavier.","Gas particles always move."]),
Q("Real gases deviate most from ideal behavior at:",["High T and low P","Low T and high P","High T and high P","Low P only"],1,["Ideal behavior is best here.","Particles are close together and IMFs matter.","High T reduces deviations.","Low P reduces deviations."]),
Q("A mixture has 1.0 mol He and 3.0 mol Ne at a total pressure of 2.0 atm. What is He's partial pressure?",["0.50 atm","1.0 atm","1.5 atm","2.0 atm"],0,["1/4 × 2.0 = 0.50.","That would be half the mixture.","That's Ne's partial pressure.","That's the total."]),
Q("A gas collected over water has P_total = 760 mmHg and P_water = 24 mmHg. The dry gas pressure is:",["784 mmHg","760 mmHg","736 mmHg","24 mmHg"],2,["You subtract, not add.","That includes water vapor.","760 − 24 = 736.","That's only the water vapor."]),
Q("How many moles are in 11.2 L of an ideal gas at STP?",["0.25 mol","0.50 mol","1.0 mol","2.0 mol"],1,["That would be 5.6 L.","11.2 ÷ 22.4 = 0.50.","That's 22.4 L.","That's 44.8 L."]),
Q("At constant volume, doubling a gas's Kelvin temperature makes its pressure:",["Double","Halve","Stay the same","Quadruple"],0,["P ∝ T at constant V.","That's the inverse.","Pressure changes with T.","Not squared."]),
Q("50.0 mL of 2.0 M solution is diluted to 200.0 mL. What is the new molarity?",["0.50 M","1.0 M","4.0 M","8.0 M"],0,["M₁V₁ = M₂V₂ gives 100 ÷ 200 = 0.50.","That would only halve it.","Dilution lowers concentration.","Dilution lowers concentration."]),
Q("How many moles of solute are in 0.250 L of 0.40 M solution?",["0.10 mol","1.6 mol","0.16 mol","2.5 mol"],0,["0.40 × 0.250 = 0.10.","That divides instead of multiplies.","Slip in arithmetic.","That divides L by M."]),
Q("What mass of NaCl (58.5 g/mol) is needed for 500 mL of 0.10 M solution?",["2.9 g","5.9 g","29 g","0.29 g"],0,["0.050 mol × 58.5 = 2.9 g.","That's for 1 L.","That ignores the factor of 0.1.","Decimal slip."]),
Q("Which compound is soluble in water?",["AgCl","PbSO₄","CaCO₃","NaNO₃"],3,["Insoluble halide.","Insoluble sulfate.","Insoluble carbonate.","All nitrates are soluble."]),
Q("What is the mass percent of NaCl when 5.0 g is dissolved in 95 g of water?",["5.0%","5.3%","19%","95%"],0,["5.0 ÷ 100 × 100 = 5.0%.","That divides by 95 g only.","That divides by 5 g.","That's the water's share."]),
Q("What is the concentration of Cl⁻ in 0.10 M CaCl₂?",["0.050 M","0.10 M","0.20 M","0.30 M"],2,["That halves it.","Each formula unit gives two Cl⁻.","2 × 0.10 = 0.20 M.","That counts all ions."]),
Q("Which 0.10 M solution conducts electricity best?",["Sucrose","NaCl","CaCl₂","Ethanol"],2,["Nonelectrolyte.","2 ions per formula unit.","3 ions per formula unit.","Nonelectrolyte."]),
Q("As temperature rises, the solubility of a gas in water generally:",["Increases","Decreases","Stays the same","Doubles"],1,["Warm soda goes flat.","Gas escapes more easily when warm.","Temperature matters.","No such rule."]),
Q("Which type of radiation has the highest energy?",["Radio","Infrared","Visible","Ultraviolet"],3,["Lowest of these.","Lower than visible.","Lower than UV.","UV has the shortest wavelength here."]),
Q("Infrared spectroscopy provides information about:",["Molecular vibrations","Nuclear decay","Electron transitions","Isotope masses"],0,["IR photons make bonds vibrate.","That's radioactivity.","That's UV-Vis.","That's mass spectrometry."]),
Q("UV-Vis spectroscopy mainly involves:",["Electronic transitions","Bond vibrations","Nuclear spin","Rotations only"],0,["UV and visible photons excite electrons.","That's IR.","That's NMR.","That's microwave."]),
Q("If frequency increases, wavelength:",["Increases","Decreases","Stays the same","Doubles"],1,["They're inversely related.","c = λν, so λ falls.","They are linked.","Not fixed."]),
Q("If a photon's frequency doubles, its energy:",["Halves","Doubles","Quadruples","Stays the same"],1,["Opposite.","E = hν.","Not squared.","Energy depends on frequency."]),
Q("A solution has absorbance 0.40 at 0.10 M. What is its absorbance at 0.20 M?",["0.20","0.40","0.80","1.6"],2,["That halves it.","That ignores the change.","A is proportional to c, so it doubles.","That's too large."]),
Q("A solution appears blue. It mostly absorbs:",["Blue light","Orange/red light","Violet light","Green light"],1,["Blue is transmitted, not absorbed.","The color it looks is the light that passes through.","Violet is next to blue and passes through.","Green is not the complement."]),
Q("In the photoelectric effect, a photon with energy below the work function:",["Ejects an electron","Ejects no electrons","Ejects slower electrons","Ejects more electrons"],1,["It lacks enough energy.","Below the threshold, nothing is ejected regardless of intensity.","No electron is ejected at all.","Intensity doesn't help."]),
Q("In chromatography with a polar stationary phase and nonpolar solvent, a polar compound moves:",["Farther","Less far","The same","Backward"],1,["It sticks to the polar phase.","Stronger attraction to the stationary phase slows it.","Polarity affects it.","It still moves forward, just slower."])
);

// ---- Unit 3 batch 2 ----
add(3,
Q("Which has the higher boiling point?",["CH₃OCH₃","CH₃CH₂OH","Equal","Cannot tell"],1,["No O–H bond, so no hydrogen bonding.","Ethanol has an O–H group and hydrogen bonds.","Their IMFs differ.","IMFs tell you."]),
Q("Which IMF is typically strongest?",["Dispersion","Dipole-dipole","Hydrogen bonding","All are equal"],2,["Weakest in small molecules.","Weaker than hydrogen bonding.","H bonds are the strongest of the three molecular IMFs.","They differ in strength."]),
Q("Why is I₂ a solid at room temperature while F₂ is a gas?",["I₂ has stronger dispersion forces","I₂ is ionic","F₂ is polar","I₂ has hydrogen bonds"],0,["Larger electron clouds mean stronger dispersion.","Both are molecular.","Both are nonpolar.","No H is present."]),
Q("Which is more soluble in water?",["CH₃OH","CH₃CH₂CH₂CH₂CH₂OH","Equal","Neither dissolves"],0,["The short chain keeps the molecule mostly polar.","The long nonpolar chain reduces solubility.","Chain length matters.","Methanol is miscible."]),
Q("On a heating curve, the flat segments represent:",["Temperature rising","Phase changes","Heat leaving","Chemical reactions"],1,["That's the sloped segments.","Heat goes into overcoming IMFs.","Heat is being added.","Nothing reacts."]),
Q("During melting at constant temperature, added heat increases the:",["Kinetic energy","Potential energy","Temperature","Mass"],1,["Temperature, and thus KE, stays constant.","Particles move apart, which raises potential energy.","T is constant.","Mass doesn't change."]),
Q("What does the triple point on a phase diagram represent?",["Where solid, liquid and gas coexist","Where the liquid boils at 1 atm","Where gas turns to plasma","The critical point"],0,["All three phases are in equilibrium.","That's the normal boiling point.","Not shown on this diagram.","That's a different point."]),
Q("At a liquid's normal boiling point, its vapor pressure equals:",["0 atm","1 atm","2 atm","Its density"],1,["That's the opposite.","Normal means standard pressure of 1 atm.","Not standard.","Not relevant."]),
Q("When temperature increases, the Maxwell–Boltzmann curve:",["Shifts right and flattens","Shifts left and narrows","Does not change","Splits in two"],0,["More particles reach higher speeds.","Lower T does that.","Distribution changes with T.","It stays one curve."]),
Q("At the same temperature, which gas has the lowest average speed?",["He","Ne","Ar","Xe"],3,["Fastest.","Slow, but faster than Xe.","Slow, but faster than Xe.","Heaviest, so slowest."]),
Q("A gas has density 1.43 g/L at STP. What is its molar mass?",["16 g/mol","28 g/mol","32 g/mol","44 g/mol"],2,["1.43 × 22.4 ≈ 32, so this is too low.","That's too low.","1.43 g/L × 22.4 L/mol ≈ 32 g/mol.","That's too high."]),
Q("What volume does 22 g of CO₂ (44 g/mol) occupy at STP?",["5.6 L","11.2 L","22.4 L","44.8 L"],1,["That's 0.25 mol.","0.50 mol × 22.4 L/mol = 11.2 L.","That's 1.0 mol.","That's 2.0 mol."]),
Q("In 2H₂ + O₂ → 2H₂O, 4.0 L of H₂ at fixed T and P reacts with how much O₂?",["1.0 L","2.0 L","4.0 L","8.0 L"],1,["That's half again.","Volumes follow the 2 : 1 mole ratio.","That ignores the ratio.","That doubles instead of halves."]),
Q("A gas has V = 2.0 L at 300 K and constant P. If heated to 600 K, the new volume is:",["1.0 L","2.0 L","4.0 L","8.0 L"],2,["That's the inverse.","Temperature affects volume.","V ∝ T, so it doubles.","Too large."]),
Q("What is the ratio of effusion rates, H₂ to He?",["0.71","1.0","1.41","2.0"],2,["That's He to H₂.","Their molar masses differ.","√(4.0/2.0) ≈ 1.41.","That isn't the square root."]),
Q("Air is 78% N₂. At 1.0 atm total, what is N₂'s partial pressure?",["0.22 atm","0.78 atm","1.0 atm","78 atm"],1,["That's the rest of air.","Mole fraction × total pressure.","That's the total.","That forgets the percent."]),
Q("A mixture has 0.50 atm N₂, 0.30 atm O₂ and 0.20 atm Ar. What is the total pressure?",["0.30 atm","0.50 atm","1.0 atm","10 atm"],2,["That's only O₂.","That's only N₂.","Partial pressures add.","That multiplies instead of adds."]),
Q("Which gas behaves most ideally at room temperature?",["He","NH₃","H₂O vapor","CO₂"],0,["Small and nearly no IMFs.","Hydrogen bonding makes it nonideal.","Strong IMFs.","Larger and more polarizable."]),
Q("In an aqueous solution of CH₃OH, methanol exists as:",["Intact molecules","Ions","Atoms","Solid crystals"],0,["It dissolves but doesn't dissociate.","It's a nonelectrolyte.","Not broken apart.","It's dissolved."]),
Q("Which is a strong electrolyte?",["Glucose","NaCl","Ethanol","Sucrose"],1,["Molecular.","Ionic and fully dissociates.","Molecular.","Molecular."]),
Q("What is the molarity of a solution with 11.7 g NaCl (58.5 g/mol) in 500 mL?",["0.20 M","0.40 M","0.80 M","2.0 M"],1,["That ignores the volume.","0.20 mol ÷ 0.500 L = 0.40 M.","That's off by a factor of 2.","That's for 100 mL."]),
Q("How much 6.0 M HCl is needed to make 300 mL of 1.0 M HCl?",["18 mL","50 mL","180 mL","1800 mL"],1,["That's the wrong arithmetic.","V₁ = (1.0 × 300) ÷ 6.0 = 50 mL.","That's six times too much.","That's far too much."]),
Q("Which compound is insoluble in water?",["KCl","(NH₄)₂SO₄","BaSO₄","NaOH"],2,["Group 1 salts are soluble.","Ammonium salts are soluble.","Barium sulfate is a classic insoluble sulfate.","Group 1 hydroxides are soluble."]),
Q("Which is a homogeneous mixture?",["Sand in water","Salt water","Oil and water","Granite"],1,["Visible particles.","Uniform throughout.","Separates into layers.","Visibly mixed grains."]),
Q("Distillation separates liquids by differences in:",["Color","Boiling point","Density only","Mass of container"],1,["Not a basis of separation.","The lower-boiling liquid vaporizes first.","Boiling point is the key.","Not relevant."]),
Q("In chromatography, Rf equals the distance moved by the compound divided by:",["Distance moved by the solvent front","Mass of the compound","Total paper length","Time elapsed"],0,["It's a distance ratio.","Mass isn't used.","The paper's length isn't used.","Time isn't used."]),
Q("If A = 0.60 at 0.30 M, what concentration gives A = 0.20 (same cell)?",["0.050 M","0.10 M","0.20 M","0.60 M"],1,["That's off.","A/c is constant, so c = 0.30 × (0.20/0.60) = 0.10 M.","That would give A = 0.40.","That gives A = 1.2."]),
Q("A Beer's law plot of absorbance vs concentration is:",["A straight line through the origin","A curve downward","A horizontal line","A parabola"],0,["A = εbc is linear.","Beer's law is linear.","A changes with c.","Not quadratic."]),
Q("Why use the wavelength of maximum absorbance in Beer's law work?",["It gives the greatest sensitivity","It changes color","It removes the solvent","It lowers temperature"],0,["Small concentration changes give big absorbance changes.","The color doesn't change.","It doesn't affect the solvent.","It doesn't change temperature."]),
Q("Which visible light has the lowest photon energy?",["Red","Green","Blue","Violet"],0,["Longest wavelength, lowest energy.","Higher than red.","Higher than green.","Highest of these."]),
Q("Above the threshold frequency, increasing light intensity increases:",["The number of electrons ejected","Each electron's kinetic energy","The work function","The wavelength"],0,["More photons eject more electrons.","KE depends on frequency.","That's a property of the metal.","Intensity doesn't change wavelength."]),
Q("Above the threshold frequency, increasing frequency increases:",["The kinetic energy of ejected electrons","The number of photons","The work function","The mass of the metal"],0,["Extra photon energy goes into KE.","That depends on intensity.","That's fixed.","It doesn't change."]),
Q("Microwave radiation mainly causes:",["Molecular rotation","Electron ejection","Nuclear fission","Bond breaking"],0,["Low-energy microwaves rotate polar molecules.","That needs far higher energy.","Not relevant.","It's too low in energy."]),
Q("Atomic emission spectra show lines because:",["Energy levels are quantized","Electrons are lost","Atoms are ionic","Nuclei decay"],0,["Only specific photon energies are emitted.","Electrons stay in the atom.","Not relevant.","Not relevant."]),
Q("If transmittance increases, absorbance:",["Increases","Decreases","Stays constant","Doubles"],1,["Opposite.","More light passing through means less is absorbed.","They are linked.","No such rule."])
);

add(3,
Q("Which has the highest vapor pressure at 25 °C?",["Water","Ethanol","Diethyl ether","Glycerol"],2,["Strong hydrogen bonding lowers vapor pressure.","Hydrogen bonds hold it back.","Weak IMFs let molecules escape easily.","Extensive hydrogen bonding makes it very low."])
);
