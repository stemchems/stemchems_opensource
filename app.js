const ELEMENTS = [
  ["H","Hydrogen",1,1,"1","1A","Representative Element","Nonmetal","Alkali Metal","s","1.008"],
  ["He","Helium",2,1,"18","8A","Representative Element","Nonmetal","Noble Gas","p","4.0026"],
  ["Li","Lithium",3,2,"1","1A","Representative Element","Metal","Alkali Metal","s","6.94"],
  ["Be","Beryllium",4,2,"2","2A","Representative Element","Metal","Alkaline Earth Metal","s","9.0122"],
  ["B","Boron",5,2,"13","3A","Representative Element","Metalloid","Boron Family","p","10.81"],
  ["C","Carbon",6,2,"14","4A","Representative Element","Nonmetal","Carbon Family","p","12.011"],
  ["N","Nitrogen",7,2,"15","5A","Representative Element","Nonmetal","Nitrogen Family","p","14.007"],
  ["O","Oxygen",8,2,"16","6A","Representative Element","Nonmetal","Oxygen Family","p","15.999"],
  ["F","Fluorine",9,2,"17","7A","Representative Element","Nonmetal","Halogen Family","p","18.998"],
  ["Ne","Neon",10,2,"18","8A","Representative Element","Nonmetal","Noble Gas","p","20.180"],
  ["Na","Sodium",11,3,"1","1A","Representative Element","Metal","Alkali Metal","s","22.990"],
  ["Mg","Magnesium",12,3,"2","2A","Representative Element","Metal","Alkaline Earth Metal","s","24.305"],
  ["Al","Aluminum",13,3,"13","3A","Representative Element","Metal","Boron Family","p","26.982"],
  ["Si","Silicon",14,3,"14","4A","Representative Element","Metalloid","Carbon Family","p","28.085"],
  ["P","Phosphorus",15,3,"15","5A","Representative Element","Nonmetal","Nitrogen Family","p","30.974"],
  ["S","Sulfur",16,3,"16","6A","Representative Element","Nonmetal","Oxygen Family","p","32.06"],
  ["Cl","Chlorine",17,3,"17","7A","Representative Element","Nonmetal","Halogen Family","p","35.45"],
  ["Ar","Argon",18,3,"18","8A","Representative Element","Nonmetal","Noble Gas","p","39.948"],
  ["K","Potassium",19,4,"1","1A","Representative Element","Metal","Alkali Metal","s","39.098"],
  ["Ca","Calcium",20,4,"2","2A","Representative Element","Metal","Alkaline Earth Metal","s","40.078"],
  ["Sc","Scandium",21,4,"3",null,"Transition Element","Metal","Transition Metal","d","44.956"],
  ["Ti","Titanium",22,4,"4",null,"Transition Element","Metal","Transition Metal","d","47.867"],
  ["V","Vanadium",23,4,"5",null,"Transition Element","Metal","Transition Metal","d","50.942"],
  ["Cr","Chromium",24,4,"6",null,"Transition Element","Metal","Transition Metal","d","51.996"],
  ["Mn","Manganese",25,4,"7",null,"Transition Element","Metal","Transition Metal","d","54.938"],
  ["Fe","Iron",26,4,"8",null,"Transition Element","Metal","Transition Metal","d","55.845"],
  ["Co","Cobalt",27,4,"9",null,"Transition Element","Metal","Transition Metal","d","58.933"],
  ["Ni","Nickel",28,4,"10",null,"Transition Element","Metal","Transition Metal","d","58.693"],
  ["Cu","Copper",29,4,"11",null,"Transition Element","Metal","Transition Metal","d","63.546"],
  ["Zn","Zinc",30,4,"12",null,"Transition Element","Metal","Transition Metal","d","65.38"],
  ["Ga","Gallium",31,4,"13","3A","Representative Element","Metal","Boron Family","p","69.723"],
  ["Ge","Germanium",32,4,"14","4A","Representative Element","Metalloid","Carbon Family","p","72.630"],
  ["As","Arsenic",33,4,"15","5A","Representative Element","Metalloid","Nitrogen Family","p","74.922"],
  ["Se","Selenium",34,4,"16","6A","Representative Element","Nonmetal","Oxygen Family","p","78.971"],
  ["Br","Bromine",35,4,"17","7A","Representative Element","Nonmetal","Halogen Family","p","79.904"],
  ["Kr","Krypton",36,4,"18","8A","Representative Element","Nonmetal","Noble Gas","p","83.798"],
  ["Rb","Rubidium",37,5,"1","1A","Representative Element","Metal","Alkali Metal","s","85.468"],
  ["Sr","Strontium",38,5,"2","2A","Representative Element","Metal","Alkaline Earth Metal","s","87.62"],
  ["Y","Yttrium",39,5,"3",null,"Transition Element","Metal","Transition Metal","d","88.906"],
  ["Zr","Zirconium",40,5,"4",null,"Transition Element","Metal","Transition Metal","d","91.224"],
  ["Nb","Niobium",41,5,"5",null,"Transition Element","Metal","Transition Metal","d","92.906"],
  ["Mo","Molybdenum",42,5,"6",null,"Transition Element","Metal","Transition Metal","d","95.95"],
  ["Tc","Technetium",43,5,"7",null,"Transition Element","Metal","Transition Metal","d","[98]"],
  ["Ru","Ruthenium",44,5,"8",null,"Transition Element","Metal","Transition Metal","d","101.07"],
  ["Rh","Rhodium",45,5,"9",null,"Transition Element","Metal","Transition Metal","d","102.91"],
  ["Pd","Palladium",46,5,"10",null,"Transition Element","Metal","Transition Metal","d","106.42"],
  ["Ag","Silver",47,5,"11",null,"Transition Element","Metal","Transition Metal","d","107.87"],
  ["Cd","Cadmium",48,5,"12",null,"Transition Element","Metal","Transition Metal","d","112.41"],
  ["In","Indium",49,5,"13","3A","Representative Element","Metal","Boron Family","p","114.82"],
  ["Sn","Tin",50,5,"14","4A","Representative Element","Metal","Carbon Family","p","118.71"],
  ["Sb","Antimony",51,5,"15","5A","Representative Element","Metalloid","Nitrogen Family","p","121.76"],
  ["Te","Tellurium",52,5,"16","6A","Representative Element","Metalloid","Oxygen Family","p","127.60"],
  ["I","Iodine",53,5,"17","7A","Representative Element","Nonmetal","Halogen Family","p","126.90"],
  ["Xe","Xenon",54,5,"18","8A","Representative Element","Nonmetal","Noble Gas","p","131.29"],
  ["Cs","Cesium",55,6,"1","1A","Representative Element","Metal","Alkali Metal","s","132.91"],
  ["Ba","Barium",56,6,"2","2A","Representative Element","Metal","Alkaline Earth Metal","s","137.33"],
  ["La","Lanthanum",57,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","138.91"],
  ["Ce","Cerium",58,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","140.12"],
  ["Pr","Praseodymium",59,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","140.91"],
  ["Nd","Neodymium",60,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","144.24"],
  ["Pm","Promethium",61,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","[145]"],
  ["Sm","Samarium",62,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","150.36"],
  ["Eu","Europium",63,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","151.96"],
  ["Gd","Gadolinium",64,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","157.25"],
  ["Tb","Terbium",65,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","158.93"],
  ["Dy","Dysprosium",66,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","162.50"],
  ["Ho","Holmium",67,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","164.93"],
  ["Er","Erbium",68,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","167.26"],
  ["Tm","Thulium",69,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","168.93"],
  ["Yb","Ytterbium",70,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","173.05"],
  ["Lu","Lutetium",71,6,"n/a",null,"Inner Transition Element","Metal","Lanthanide","f","174.97"],
  ["Hf","Hafnium",72,6,"4",null,"Transition Element","Metal","Transition Metal","d","178.49"],
  ["Ta","Tantalum",73,6,"5",null,"Transition Element","Metal","Transition Metal","d","180.95"],
  ["W","Tungsten",74,6,"6",null,"Transition Element","Metal","Transition Metal","d","183.84"],
  ["Re","Rhenium",75,6,"7",null,"Transition Element","Metal","Transition Metal","d","186.21"],
  ["Os","Osmium",76,6,"8",null,"Transition Element","Metal","Transition Metal","d","190.23"],
  ["Ir","Iridium",77,6,"9",null,"Transition Element","Metal","Transition Metal","d","192.22"],
  ["Pt","Platinum",78,6,"10",null,"Transition Element","Metal","Transition Metal","d","195.08"],
  ["Au","Gold",79,6,"11",null,"Transition Element","Metal","Transition Metal","d","196.97"],
  ["Hg","Mercury",80,6,"12",null,"Transition Element","Metal","Transition Metal","d","200.59"],
  ["Tl","Thallium",81,6,"13","3A","Representative Element","Metal","Boron Family","p","204.38"],
  ["Pb","Lead",82,6,"14","4A","Representative Element","Metal","Carbon Family","p","207.2"],
  ["Bi","Bismuth",83,6,"15","5A","Representative Element","Metal","Nitrogen Family","p","208.98"],
  ["Po","Polonium",84,6,"16","6A","Representative Element","Metalloid","Oxygen Family","p","[209]"],
  ["At","Astatine",85,6,"17","7A","Representative Element","Nonmetal","Halogen Family","p","[210]"],
  ["Rn","Radon",86,6,"18","8A","Representative Element","Nonmetal","Noble Gas","p","[222]"],
  ["Fr","Francium",87,7,"1","1A","Representative Element","Metal","Alkali Metal","s","[223]"],
  ["Ra","Radium",88,7,"2","2A","Representative Element","Metal","Alkaline Earth Metal","s","[226]"],
  ["Ac","Actinium",89,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[227]"],
  ["Th","Thorium",90,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","232.04"],
  ["Pa","Protactinium",91,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","231.04"],
  ["U","Uranium",92,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","238.03"],
  ["Np","Neptunium",93,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[237]"],
  ["Pu","Plutonium",94,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[244]"],
  ["Am","Americium",95,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[243]"],
  ["Cm","Curium",96,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[247]"],
  ["Bk","Berkelium",97,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[247]"],
  ["Cf","Californium",98,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[251]"],
  ["Es","Einsteinium",99,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[252]"],
  ["Fm","Fermium",100,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[257]"],
  ["Md","Mendelevium",101,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[258]"],
  ["No","Nobelium",102,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[259]"],
  ["Lr","Lawrencium",103,7,"n/a",null,"Inner Transition Element","Metal","Actinide","f","[262]"],
  ["Rf","Rutherfordium",104,7,"4",null,"Transition Element","Metal","Transition Metal","d","[261]"],
  ["Db","Dubnium",105,7,"5",null,"Transition Element","Metal","Transition Metal","d","[262]"],
  ["Sg","Seaborgium",106,7,"6",null,"Transition Element","Metal","Transition Metal","d","[266]"],
  ["Bh","Bohrium",107,7,"7",null,"Transition Element","Metal","Transition Metal","d","[264]"],
  ["Hs","Hassium",108,7,"8",null,"Transition Element","Metal","Transition Metal","d","[277]"],
  ["Mt","Meitnerium",109,7,"9",null,"Transition Element","Metal","Transition Metal","d","[268]"],
  ["Ds","Darmstadtium",110,7,"10",null,"Transition Element","Metal","Transition Metal","d","[271]"],
  ["Rg","Roentgenium",111,7,"11",null,"Transition Element","Metal","Transition Metal","d","[272]"],
  ["Cn","Copernicium",112,7,"12",null,"Transition Element","Metal","Transition Metal","d","[285]"],
  ["Nh","Nihonium",113,7,"13","3A","Representative Element","Metal","Boron Family","p","[286]"],
  ["Fl","Flerovium",114,7,"14","4A","Representative Element","Metal","Carbon Family","p","[289]"],
  ["Mc","Moscovium",115,7,"15","5A","Representative Element","Metal","Nitrogen Family","p","[290]"],
  ["Lv","Livermorium",116,7,"16","6A","Representative Element","Metal","Oxygen Family","p","[293]"],
  ["Ts","Tennessine",117,7,"17","7A","Representative Element","Nonmetal","Halogen Family","p","[294]"],
  ["Og","Oganesson",118,7,"18","8A","Representative Element","Nonmetal","Noble Gas","p","[294]"],
];

function norm(s){
  return (s||"").toString().toLowerCase().trim()
    .replace(/[\/\-–—()]/g," ")
    .replace(/[^a-z0-9\s]/g,"")
    .replace(/\s+/g," ")
    .trim();
}

// Splits a memorize-style name like "Iron (II) / Ferrous" into separate
// acceptable answers: ["Iron (II)", "Ferrous"]. Safe to call on names
// that have no "/" too (returns a single-item array).
function splitNameAlternatives(raw){
  return (raw||"").toString().split("/").map(s => s.trim()).filter(Boolean);
}

// Normalizes a typed chemical formula answer so it can be compared against
// the stored formula (e.g. "Fe²⁺"). Converts unicode sub/superscript digits
// and charge signs to plain ASCII, strips whitespace/carets, and puts a
// trailing sign right after its digit so "Fe+2" and "Fe2+" both match "Fe²⁺".
const FORMULA_CHAR_MAP = {
  "₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9",
  "⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9",
  "⁺":"+","⁻":"-",
};
function normFormula(s){
  let x = (s||"").toString().trim().replace(/\s+/g,"").replace(/\^/g,"");
  x = x.split("").map(ch => FORMULA_CHAR_MAP[ch] || ch).join("");
  x = x.toLowerCase();
  x = x.replace(/([+-])(\d+)$/, "$2$1");
  return x;
}

function buildAcceptable(el){
  const [sym,name,z,period,groupNum,groupLetter,classification,kind,family,block] = el;

  const period_ok = [String(period)];

  const group_ok = [];
  group_ok.push(norm(groupNum));
  if(groupNum !== "n/a"){

    group_ok.push(norm(groupNum+"a"));
    group_ok.push(norm(groupNum+"b"));
    group_ok.push(norm(groupNum+" a"));
    group_ok.push(norm(groupNum+" b"));
    group_ok.push(norm("a"+groupNum));
    group_ok.push(norm("b"+groupNum));
  }
  if(groupLetter){
    group_ok.push(norm(groupLetter));
    group_ok.push(norm(groupNum+" "+groupLetter));
    group_ok.push(norm(groupNum+"/"+groupLetter));
    group_ok.push(norm(groupLetter+"/"+groupNum));
  }
  if(groupNum === "n/a"){ group_ok.push("na","none","-","n a","3","group 3","3b","iiib"); }

  const classification_ok = [norm(classification)];
  if(classification.startsWith("Representative")) classification_ok.push("representative","representative element","representative elements");
  if(classification.startsWith("Transition")) classification_ok.push("transition","transitions","transition metal","transition metals","transition element","transition elements");
  if(classification.startsWith("Inner")) classification_ok.push("inner transition","inner transitions","inner transition metal","inner transition metals");

  const kind_ok = [norm(kind)];
  if(kind === "Nonmetal") kind_ok.push("non metal","nonmetals","non metals");
  if(kind === "Metalloid") kind_ok.push("metalloids","semimetal","semi metal");
  if(kind === "Metal") kind_ok.push("metals");

  const family_ok = [norm(family)];
  family_ok.push(norm(family.replace(" Family","")));
  if(family === "Oxygen Family"){ family_ok.push("chalcogen","chalcogens","chalcogen family","chalcogens family","oxygen family chalcogens family"); }
  if(family === "Noble Gas"){ family_ok.push("noble gases","inert gas","inert gases","noble family","noble gas family"); }
  if(family === "Halogen Family"){ family_ok.push("halogen","halogens","halogens family"); }
  if(family === "Alkali Metal"){ family_ok.push("alkali metals","alkali","alkali metal family"); }
  if(family === "Alkaline Earth Metal"){ family_ok.push("alkaline earth metals","alkaline earth","alkaline earth metal family"); }
  if(family === "Transition Metal"){ family_ok.push("transition metals","transition"); }
  if(family === "Lanthanide"){ family_ok.push("lanthanides","lanthanide series","rare earth"); }
  if(family === "Actinide"){ family_ok.push("actinides","actinide series"); }
  if(family === "Boron Family"){ family_ok.push("boron"); }
  if(family === "Carbon Family"){ family_ok.push("carbon"); }
  if(family === "Nitrogen Family"){ family_ok.push("nitrogen","pnictogen","pnictogens"); }

  const block_ok = [norm(block+" block"), norm(block), block.toLowerCase()];

  return {
    period: period_ok.map(norm),
    group: [...new Set(group_ok)],
    classification: [...new Set(classification_ok)],
    kind: [...new Set(kind_ok)],
    family: [...new Set(family_ok)],
    block: [...new Set(block_ok)],
  };
}

const FIELD_DISPLAY = {
  period: el => String(el[3]),
  group: el => el[5] ? `${el[4]} / ${el[5]}` : el[4],
  classification: el => el[6],
  kind: el => el[7],
  family: el => el[8],
  block: el => `${el[9]}-block`,
};

const EXCLUDED_QUIZ_FAMILIES = new Set(["Lanthanide","Actinide"]);
const QUIZ_POOL = ELEMENTS.filter(el => !EXCLUDED_QUIZ_FAMILIES.has(el[8]));

let current = null;
let acceptable = null;
let recent = [];
let totalRight = 0, totalSeen = 0, streak = 0;

function pickElement(){
  let pool = QUIZ_POOL.filter((_,i) => !recent.includes(i));
  if(pool.length === 0){ recent = []; pool = QUIZ_POOL; }
  const idx = Math.floor(Math.random() * pool.length);
  const chosen = QUIZ_POOL.indexOf(pool[idx]);
  recent.push(chosen);
  if(recent.length > 8) recent.shift();
  return QUIZ_POOL[chosen];
}

function kindClass(kind){
  if(kind === "Metal") return "metal";
  if(kind === "Nonmetal") return "nonmetal";
  return "metalloid";
}

const FORMULAS = [
  ["H<sub>2</sub>O", 2, 3],
  ["NaCl", 2, 2],
  ["CO<sub>2</sub>", 2, 3],
  ["NH<sub>3</sub>", 2, 4],
  ["CH<sub>4</sub>", 2, 5],
  ["C<sub>2</sub>H<sub>6</sub>", 2, 8],
  ["MgCl<sub>2</sub>", 2, 3],
  ["Al<sub>2</sub>O<sub>3</sub>", 2, 5],
  ["CaCO<sub>3</sub>", 3, 5],
  ["C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>", 3, 24],
  ["NH<sub>4</sub>NO<sub>3</sub>", 3, 9],
  ["K<sub>2</sub>SO<sub>4</sub>", 3, 7],
  ["Fe(OH)<sub>3</sub>", 3, 7],
  ["Ca(OH)<sub>2</sub>", 3, 5],
  ["Ca(NO<sub>3</sub>)<sub>2</sub>", 3, 9],
  ["Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>", 3, 13],
  ["Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>", 3, 17],
  ["(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>", 4, 14],
  ["Ba(NO<sub>3</sub>)<sub>2</sub>", 3, 9],
  ["CuSO<sub>4</sub>", 3, 6],
  ["KMnO<sub>4</sub>", 3, 6],
  ["H<sub>2</sub>SO<sub>4</sub>", 3, 7],
  ["HNO<sub>3</sub>", 3, 5],
  ["NaOH", 3, 3],
  ["Na<sub>2</sub>CO<sub>3</sub>", 3, 6],
  ["Zn(NO<sub>3</sub>)<sub>2</sub>", 3, 9],
  ["(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub>", 4, 20],
  ["HCl", 2, 2],
  ["O<sub>2</sub>", 1, 2],
  ["N<sub>2</sub>", 1, 2],
  ["H<sub>2</sub>O<sub>2</sub>", 2, 4],
  ["C<sub>6</sub>H<sub>6</sub>", 2, 12],
  ["C<sub>3</sub>H<sub>8</sub>", 2, 11],
  ["C<sub>2</sub>H<sub>6</sub>O", 3, 9],
  ["C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>", 3, 8],
  ["NaHCO<sub>3</sub>", 4, 6],
  ["CaCl<sub>2</sub>", 2, 3],
  ["FeCl<sub>3</sub>", 2, 4],
  ["AgNO<sub>3</sub>", 3, 5],
  ["Pb(NO<sub>3</sub>)<sub>2</sub>", 3, 9],
  ["Mg(OH)<sub>2</sub>", 3, 5],
  ["Al(OH)<sub>3</sub>", 3, 7],
  ["(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>", 4, 15],
  ["K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>", 3, 11],
  ["C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>", 3, 45],
  ["CH<sub>4</sub>O", 3, 6],
  ["Na<sub>3</sub>PO<sub>4</sub>", 3, 8],
  ["ZnCl<sub>2</sub>", 2, 3],
  ["LiOH", 3, 3],
  ["KOH", 3, 3],
  ["NaBr", 2, 2],
  ["KI", 2, 2],
  ["CaSO<sub>4</sub>", 3, 6],
  ["BaSO<sub>4</sub>", 3, 6],
  ["AgCl", 2, 2],
  ["PbCl<sub>2</sub>", 2, 3],
  ["CuCl<sub>2</sub>", 2, 3],
  ["FeCl<sub>2</sub>", 2, 3],
  ["Fe<sub>2</sub>O<sub>3</sub>", 2, 5],
  ["FeO", 2, 2],
  ["CuO", 2, 2],
  ["ZnO", 2, 2],
  ["MgO", 2, 2],
  ["CaO", 2, 2],
  ["Na<sub>2</sub>O", 2, 3],
  ["K<sub>2</sub>O", 2, 3],
  ["Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>", 3, 13],
  ["NaNO<sub>3</sub>", 3, 5],
  ["KNO<sub>3</sub>", 3, 5],
  ["Na<sub>2</sub>SO<sub>4</sub>", 3, 7],
  ["MgSO<sub>4</sub>", 3, 6],
  ["NH<sub>4</sub>Cl", 3, 6],
  ["(NH<sub>4</sub>)<sub>2</sub>S", 3, 11],
  ["NaHSO<sub>4</sub>", 4, 7],
  ["KHCO<sub>3</sub>", 4, 6],
  ["CH<sub>3</sub>COOH", 3, 8],
  ["C<sub>2</sub>H<sub>5</sub>OH", 3, 9],
  ["C<sub>8</sub>H<sub>18</sub>", 2, 26],
  ["C<sub>3</sub>H<sub>6</sub>", 2, 9],
  ["SO<sub>2</sub>", 2, 3],
  ["SO<sub>3</sub>", 2, 4],
  ["NO<sub>2</sub>", 2, 3],
  ["N<sub>2</sub>O<sub>5</sub>", 2, 7],
  ["P<sub>2</sub>O<sub>5</sub>", 2, 7],
  ["PCl<sub>3</sub>", 2, 4],
  ["PCl<sub>5</sub>", 2, 6],
  ["SiO<sub>2</sub>", 2, 3],
  ["SiCl<sub>4</sub>", 2, 5],
  ["CCl<sub>4</sub>", 2, 5],
  ["BaCl<sub>2</sub>", 2, 3],
  ["SrCl<sub>2</sub>", 2, 3],
  ["LiCl", 2, 2],
  ["Li<sub>2</sub>O", 2, 3],
  ["CoCl<sub>2</sub>", 2, 3],
  ["NiSO<sub>4</sub>", 3, 6],
  ["AgBr", 2, 2],
  ["Hg<sub>2</sub>Cl<sub>2</sub>", 2, 4],
];

let fCurrent = null;
let fRecent = [];
let fTotalRight = 0, fTotalSeen = 0, fStreak = 0;

function pickFormula(){
  let pool = FORMULAS.filter((_,i) => !fRecent.includes(i));
  if(pool.length === 0){ fRecent = []; pool = FORMULAS; }
  const idx = Math.floor(Math.random() * pool.length);
  const chosen = FORMULAS.indexOf(pool[idx]);
  fRecent.push(chosen);
  if(fRecent.length > 8) fRecent.shift();
  return FORMULAS[chosen];
}

function loadNextFormula(){
  fCurrent = pickFormula();
  document.getElementById("formulaDisplay").innerHTML = fCurrent[0];

  document.querySelectorAll("#formulaForm .row").forEach(row => {
    row.classList.remove("wrong");
    const input = row.querySelector("input");
    input.value = "";
    input.disabled = false;
    const mark = row.querySelector(".mark");
    mark.classList.remove("show");
    mark.textContent = "";
    const corr = row.querySelector(".correction");
    if(corr) corr.remove();
  });

  document.getElementById("fFeedback").classList.remove("show");
  document.getElementById("fCheckBtn").classList.remove("hide");
  document.getElementById("fNextBtn").classList.remove("show");
  document.getElementById("f-elements").focus();
}

function checkFormulaAnswers(){
  let right = 0;
  const answers = { elements: fCurrent[1], atoms: fCurrent[2] };

  Object.keys(answers).forEach(field => {
    const row = document.querySelector(`#formulaForm .row[data-field="${field}"]`);
    const input = row.querySelector("input");
    const mark = row.querySelector(".mark");
    const userVal = parseInt(input.value.trim(), 10);
    const ok = userVal === answers[field];

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right++;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${answers[field]}`;
      row.appendChild(corr);
    }
  });

  fTotalRight += right;
  fTotalSeen += 2;
  fStreak = right === 2 ? fStreak + 1 : 0;

  document.getElementById("fTotalRight").textContent = fTotalRight;
  document.getElementById("fTotalSeen").textContent = fTotalSeen;
  document.getElementById("fStreak").textContent = fStreak;

  const scoreEl = document.getElementById("fRoundScore");
  const emojiEl = document.getElementById("fRoundEmoji");
  scoreEl.textContent = `${right}/2`;
  emojiEl.textContent = right === 2 ? "🎉" : right === 1 ? "👍" : "💪";

  const note = document.getElementById("fFeedbackNote");
  document.getElementById("fFeedback").classList.toggle("perfect", right === 2);
  if(right === 2){
    note.innerHTML = `Wow galing! Remember: whatever sits right after a <b>)</b> multiplies everything inside it.`;
    burstConfetti();
  } else {
    note.innerHTML = `EH EH MALI!! Pero we can try again naman, diba?`;
  }

  document.getElementById("fFeedback").classList.add("show");
  document.getElementById("fCheckBtn").classList.add("hide");
  document.getElementById("fNextBtn").classList.add("show");
}

document.getElementById("formulaForm").addEventListener("submit", e => {
  e.preventDefault();
  checkFormulaAnswers();
});
document.getElementById("fNextBtn").addEventListener("click", loadNextFormula);

const ELEMENT_BY_SYM = {};
ELEMENTS.forEach(el => { ELEMENT_BY_SYM[el[0]] = el; });

const ISOTOPES = [
  ["H", 1], ["H", 2], ["He", 4], ["Li", 7], ["Be", 9],
  ["B", 11], ["C", 12], ["C", 14], ["N", 14], ["O", 16],
  ["O", 18], ["F", 19], ["Ne", 20], ["Na", 23], ["Mg", 24],
  ["Al", 27], ["Si", 28], ["P", 31], ["S", 32], ["Cl", 35],
  ["Cl", 37], ["Ar", 40], ["K", 39], ["Ca", 40], ["Sc", 45],
  ["Ti", 48], ["Cr", 52], ["Mn", 55], ["Fe", 56], ["Co", 59],
  ["Ni", 58], ["Cu", 63], ["Zn", 65], ["Br", 80], ["Kr", 84],
  ["Rb", 85], ["Sr", 88], ["Ag", 108], ["Sn", 120], ["I", 127],
  ["Ba", 137], ["W", 184], ["Pt", 195], ["Au", 197], ["Hg", 200],
  ["Pb", 207], ["Bi", 209], ["U", 238],
  ["H", 3], ["He", 3], ["Li", 6], ["B", 10], ["N", 15],
  ["Ne", 22], ["Mg", 26], ["Si", 29], ["Si", 30], ["S", 34],
  ["K", 40], ["K", 41], ["Ca", 44], ["V", 51], ["Fe", 54],
  ["Fe", 57], ["Cu", 65], ["Zn", 64], ["Se", 80], ["Kr", 86],
  ["Sr", 86], ["Sr", 87], ["Zr", 90], ["Mo", 98], ["Cd", 114],
  ["In", 115], ["Sb", 121], ["I", 131], ["Xe", 132], ["Cs", 133],
  ["La", 139], ["Nd", 142], ["Gd", 158], ["Ta", 181], ["Os", 192],
  ["Ir", 193], ["Tl", 205], ["Th", 232], ["Np", 237], ["Pu", 244],
  ["Ru", 102], ["Rh", 103], ["Pd", 106], ["Nb", 93], ["Mn", 55],
];

let iCurrent = null;
let iRecent = [];
let iTotalRight = 0, iTotalSeen = 0, iStreak = 0;

function pickIsotope(){
  let pool = ISOTOPES.filter((_,i) => !iRecent.includes(i));
  if(pool.length === 0){ iRecent = []; pool = ISOTOPES; }
  const idx = Math.floor(Math.random() * pool.length);
  const chosen = ISOTOPES.indexOf(pool[idx]);
  iRecent.push(chosen);
  if(iRecent.length > 10) iRecent.shift();
  return ISOTOPES[chosen];
}

function loadNextIsotope(){
  iCurrent = pickIsotope();
  const [sym, mass] = iCurrent;
  const el = ELEMENT_BY_SYM[sym];

  document.getElementById("isoMass").textContent = mass;
  document.getElementById("isoSymbol").textContent = sym;
  document.getElementById("isoName").textContent = `${el[1]}-${mass}`;

  document.querySelectorAll("#isotopeForm .row").forEach(row => {
    row.classList.remove("wrong");
    const input = row.querySelector("input");
    input.value = "";
    input.disabled = false;
    const mark = row.querySelector(".mark");
    mark.classList.remove("show");
    mark.textContent = "";
    const corr = row.querySelector(".correction");
    if(corr) corr.remove();
  });

  document.getElementById("iFeedback").classList.remove("show");
  document.getElementById("iCheckBtn").classList.remove("hide");
  document.getElementById("iNextBtn").classList.remove("show");
  document.getElementById("i-atomic").focus();
}

function checkIsotopeAnswers(){
  const [sym, mass] = iCurrent;
  const el = ELEMENT_BY_SYM[sym];
  const z = el[2];
  const neutrons = mass - z;

  let right = 0;
  const answers = { atomic: z, protons: z, electrons: z, neutrons: neutrons };

  Object.keys(answers).forEach(field => {
    const row = document.querySelector(`#isotopeForm .row[data-field="${field}"]`);
    const input = row.querySelector("input");
    const mark = row.querySelector(".mark");
    const userVal = parseInt(input.value.trim(), 10);
    const ok = userVal === answers[field];

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right++;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${answers[field]}`;
      row.appendChild(corr);
    }
  });

  iTotalRight += right;
  iTotalSeen += 4;
  iStreak = right === 4 ? iStreak + 1 : 0;

  document.getElementById("iTotalRight").textContent = iTotalRight;
  document.getElementById("iTotalSeen").textContent = iTotalSeen;
  document.getElementById("iStreak").textContent = iStreak;

  const scoreEl = document.getElementById("iRoundScore");
  const emojiEl = document.getElementById("iRoundEmoji");
  scoreEl.textContent = `${right}/4`;
  emojiEl.textContent = right === 4 ? "🎉" : right >= 2 ? "👍" : "💪";

  const note = document.getElementById("iFeedbackNote");
  document.getElementById("iFeedback").classList.toggle("perfect", right === 4);
  if(right === 4){
    note.innerHTML = `Yehey! Remember: p⁺ = e⁻ = Z, and n⁰ = A − Z.`;
    burstConfetti();
  } else {
    note.innerHTML = `Haluhhh! Itssss okiii try again`;
  }

  document.getElementById("iFeedback").classList.add("show");
  document.getElementById("iCheckBtn").classList.add("hide");
  document.getElementById("iNextBtn").classList.add("show");
}

document.getElementById("isotopeForm").addEventListener("submit", e => {
  e.preventDefault();
  checkIsotopeAnswers();
});
document.getElementById("iNextBtn").addEventListener("click", loadNextIsotope);

function parseCharge(s){
  s = (s||"").toString().trim().replace(/\s+/g,"").replace(/[−–—]/g,"-");
  if(s === "") return null;
  const m = s.match(/^([+-]?)(\d+)([+-]?)$/);
  if(!m) return null;
  const num = parseInt(m[2], 10);
  const sign = m[3] || m[1] || "+";
  return sign === "-" ? -num : num;
}
function formatCharge(n){
  return (n > 0 ? "+" : "") + n;
}

/* READ: ignore (prolly mostly for next semester [ready things up to not cram.])*/
/* all ignore, bypass skip.*/

const POLY_IONS = [
  ["NH₄⁺", 1, ["ammonium"]],
  ["NO₂⁻", -1, ["nitrite"]],
  ["NO₃⁻", -1, ["nitrate"]],
  ["SO₃²⁻", -2, ["sulfite"]],
  ["SO₄²⁻", -2, ["sulfate"]],
  ["PO₃³⁻", -3, ["phosphite"]],
  ["PO₄³⁻", -3, ["phosphate"]],
  ["CO₃²⁻", -2, ["carbonate"]],
  ["CrO₄²⁻", -2, ["chromate"]],
  ["Cr₂O₇²⁻", -2, ["dichromate"]],
  ["ClO⁻", -1, ["hypochlorite"]],
  ["ClO₂⁻", -1, ["chlorite"]],
  ["ClO₃⁻", -1, ["chlorate"]],
  ["ClO₄⁻", -1, ["perchlorate"]],
  ["BrO⁻", -1, ["hypobromite"]],
  ["BrO₃⁻", -1, ["bromate"]],
  ["IO₃⁻", -1, ["iodate"]],
  ["OH⁻", -1, ["hydroxide"]],
  ["CN⁻", -1, ["cyanide"]],
  ["MnO₄⁻", -1, ["permanganate"]],
  ["Au⁺", 1, ["gold i", "aurous", "gold(i)"]],
  ["Au³⁺", 3, ["gold iii", "auric", "gold(iii)"]],
  ["C₂H₃O₂⁻", -1, ["acetate"]],
  ["HCO₃⁻", -1, ["bicarbonate", "hydrogen carbonate"]],
  ["HSO₄⁻", -1, ["bisulfate", "hydrogen sulfate"]],
  ["HSO₃⁻", -1, ["bisulfite", "hydrogen sulfite"]],
  ["HPO₄²⁻", -2, ["hydrogen phosphate"]],
  ["H₂PO₄⁻", -1, ["dihydrogen phosphate"]],
  ["O₂²⁻", -2, ["peroxide"]],
  ["O₂⁻", -1, ["superoxide"]],
  ["N₃⁻", -1, ["azide"]],
  ["C₂O₄²⁻", -2, ["oxalate"]],
  ["S₂O₃²⁻", -2, ["thiosulfate"]],
  ["SCN⁻", -1, ["thiocyanate"]],
  ["OCN⁻", -1, ["cyanate"]], /* ignore (prolly mostly for next semester [ready things up to not cram.])*/
  ["NH₂⁻", -1, ["amide"]],
  ["SiO₃²⁻", -2, ["silicate"]],
  ["AsO₄³⁻", -3, ["arsenate"]],
  ["SeO₄²⁻", -2, ["selenate"]], /* ignore */
  ["BO₃³⁻", -3, ["borate"]], /* ignore */
  ["IO₄⁻", -1, ["periodate"]], /* ignore */
  ["BrO₂⁻", -1, ["bromite"]],
  ["Hg₂²⁺", 2, ["mercury i", "mercurous", "mercury(i)"]], /* ignore */
  ["Hg²⁺", 2, ["mercury ii", "mercuric", "mercury(ii)"]], /* ignore */
  ["Cu⁺", 1, ["copper i", "cuprous", "copper(i)"]],
  ["Cu²⁺", 2, ["copper ii", "cupric", "copper(ii)"]],
  ["Sn²⁺", 2, ["tin ii", "stannous", "tin(ii)"]],
  ["Sn⁴⁺", 4, ["tin iv", "stannic", "tin(iv)"]],
  ["Pb²⁺", 2, ["lead ii", "plumbous", "lead(ii)"]],
  ["Pb⁴⁺", 4, ["lead iv", "plumbic", "lead(iv)"]],
];

let oxCurrent = null, oxRecent = [];
let oxTotalRight = 0, oxTotalSeen = 0, oxStreak = 0;

function pickOx(){
  let pool = POLY_IONS.filter((_,i) => !oxRecent.includes(i));
  if(pool.length === 0){ oxRecent = []; pool = POLY_IONS; }
  const idx = Math.floor(Math.random() * pool.length);
  const chosen = POLY_IONS.indexOf(pool[idx]);
  oxRecent.push(chosen);
  if(oxRecent.length > 8) oxRecent.shift();
  return POLY_IONS[chosen];
}

function loadNextOx(){
  oxCurrent = pickOx();
  document.getElementById("oxFormula").textContent = oxCurrent[0];

  document.querySelectorAll("#oxidationForm .row").forEach(row => {
    row.classList.remove("wrong");
    const input = row.querySelector("input");
    input.value = "";
    input.disabled = false;
    const mark = row.querySelector(".mark");
    mark.classList.remove("show");
    mark.textContent = "";
    const corr = row.querySelector(".correction");
    if(corr) corr.remove();
  });

  document.getElementById("oxFeedback").classList.remove("show");
  document.getElementById("oxCheckBtn").classList.remove("hide");
  document.getElementById("oxNextBtn").classList.remove("show");
  document.getElementById("ox-charge").focus();
}

function checkOxAnswers(){
  const [formula, charge, names] = oxCurrent;
  let right = 0;

  const chargeRow = document.querySelector('#oxidationForm .row[data-field="charge"]');
  const chargeInput = chargeRow.querySelector("input");
  const chargeMark = chargeRow.querySelector(".mark");
  const userCharge = parseCharge(chargeInput.value);
  const chargeOk = userCharge === charge;
  chargeInput.disabled = true;
  chargeMark.classList.add("show");
  if(chargeOk){
    right++;
    chargeMark.textContent = "✅";
    chargeRow.classList.remove("wrong");
  } else {
    chargeMark.textContent = "❌";
    chargeRow.classList.add("wrong");
    const corr = document.createElement("div");
    corr.className = "correction";
    corr.textContent = `→ ${formatCharge(charge)}`;
    chargeRow.appendChild(corr);
  }

  const nameRow = document.querySelector('#oxidationForm .row[data-field="name"]');
  const nameInput = nameRow.querySelector("input");
  const nameMark = nameRow.querySelector(".mark");
  const userName = norm(nameInput.value);
  const nameOk = names.map(norm).includes(userName) && userName.length > 0;
  nameInput.disabled = true;
  nameMark.classList.add("show");
  if(nameOk){
    right++;
    nameMark.textContent = "✅";
    nameRow.classList.remove("wrong");
  } else {
    nameMark.textContent = "❌";
    nameRow.classList.add("wrong");
    const corr = document.createElement("div");
    corr.className = "correction";
    corr.textContent = `→ ${names[0]}`;
    nameRow.appendChild(corr);
  }

  oxTotalRight += right;
  oxTotalSeen += 2;
  oxStreak = right === 2 ? oxStreak + 1 : 0;

  document.getElementById("oxTotalRight").textContent = oxTotalRight;
  document.getElementById("oxTotalSeen").textContent = oxTotalSeen;
  document.getElementById("oxStreak").textContent = oxStreak;

  const scoreEl = document.getElementById("oxRoundScore");
  const emojiEl = document.getElementById("oxRoundEmoji");
  scoreEl.textContent = `${right}/2`;
  emojiEl.textContent = right === 2 ? "🎉" : right === 1 ? "👍" : "💪";

  const note = document.getElementById("oxFeedbackNote");
  document.getElementById("oxFeedback").classList.toggle("perfect", right === 2);
  if(right === 2){
    note.innerHTML = `Galing naman! Remember the halogen oxyanion pattern: <b>hypo-ite → ite → ate → per-ate</b>.`;
    burstConfetti();
  } else {
    note.innerHTML = `Oh no! reyal of fahke? Okay lang yan, lets try again?.. Nasa PPT ni miss..`;
  }

  document.getElementById("oxFeedback").classList.add("show");
  document.getElementById("oxCheckBtn").classList.add("hide");
  document.getElementById("oxNextBtn").classList.add("show");
}

document.getElementById("oxidationForm").addEventListener("submit", e => {
  e.preventDefault();
  checkOxAnswers();
});
document.getElementById("oxNextBtn").addEventListener("click", loadNextOx);

const IONS_CLASSIFY = [
  ["Cl⁻", "monatomic", "anion", ["chloride"]],
  ["O²⁻", "monatomic", "anion", ["oxide"]],
  ["Na⁺", "monatomic", "cation", ["sodium"]],
  ["Ca²⁺", "monatomic", "cation", ["calcium"]],
  ["Mg²⁺", "monatomic", "cation", ["magnesium", "magnesium ion"]],
  ["K⁺", "monatomic", "cation", ["potassium"]],
  ["S²⁻", "monatomic", "anion", ["sulfide"]],
  ["N³⁻", "monatomic", "anion", ["nitride"]],
  ["NH₄⁺", "polyatomic", "cation", ["ammonium"]],
  ["SO₄²⁻", "polyatomic", "anion", ["sulfate"]],
  ["PO₄³⁻", "polyatomic", "anion", ["phosphate"]],
  ["CO₃²⁻", "polyatomic", "anion", ["carbonate"]],
  ["Fe²⁺", "monatomic", "cation", ["iron ii", "ferrous", "iron(ii)"]],
  ["Fe³⁺", "monatomic", "cation", ["iron iii", "ferric", "iron(iii)"]],
  ["As³⁺", "monatomic", "cation", ["arsenic iii", "arsenous", "arsenic(iii)"]],
  ["As⁵⁺", "monatomic", "cation", ["arsenic v", "arsenic", "arsenic(v)"]],
  ["Au⁺", "monatomic", "cation", ["gold i", "aurous", "gold(i)"]],
  ["Au³⁺", "monatomic", "cation", ["gold iii", "auric", "gold(iii)"]],
  ["Li⁺", "monatomic", "cation", ["lithium"]],
  ["Al³⁺", "monatomic", "cation", ["aluminum", "aluminium"]],
  ["Ba²⁺", "monatomic", "cation", ["barium"]],
  ["Ag⁺", "monatomic", "cation", ["silver"]],
  ["Zn²⁺", "monatomic", "cation", ["zinc"]],
  ["Br⁻", "monatomic", "anion", ["bromide"]],
  ["I⁻", "monatomic", "anion", ["iodide"]],
  ["F⁻", "monatomic", "anion", ["fluoride"]],
  ["P³⁻", "monatomic", "anion", ["phosphide"]],
  ["C₂H₃O₂⁻", "polyatomic", "anion", ["acetate"]],
  ["OH⁻", "polyatomic", "anion", ["hydroxide"]],
  ["CN⁻", "polyatomic", "anion", ["cyanide"]],
  ["MnO₄⁻", "polyatomic", "anion", ["permanganate"]],
  ["NO₃⁻", "polyatomic", "anion", ["nitrate"]],
  ["Cu⁺", "monatomic", "cation", ["copper i", "cuprous", "copper(i)"]],
  ["Cu²⁺", "monatomic", "cation", ["copper ii", "cupric", "copper(ii)"]],
  ["Sn²⁺", "monatomic", "cation", ["tin ii", "stannous", "tin(ii)"]],
  ["Sn⁴⁺", "monatomic", "cation", ["tin iv", "stannic", "tin(iv)"]],
  ["Pb²⁺", "monatomic", "cation", ["lead ii", "plumbous", "lead(ii)"]],
  ["Hg²⁺", "monatomic", "cation", ["mercury ii", "mercuric", "mercury(ii)"]],
];

let clCurrent = null, clRecent = [];
let clTotalRight = 0, clTotalSeen = 0, clStreak = 0;

function pickCl(){
  let pool = IONS_CLASSIFY.filter((_,i) => !clRecent.includes(i));
  if(pool.length === 0){ clRecent = []; pool = IONS_CLASSIFY; }
  const idx = Math.floor(Math.random() * pool.length);
  const chosen = IONS_CLASSIFY.indexOf(pool[idx]);
  clRecent.push(chosen);
  if(clRecent.length > 8) clRecent.shift();
  return IONS_CLASSIFY[chosen];
}

function loadNextCl(){
  clCurrent = pickCl();
  document.getElementById("clFormula").textContent = clCurrent[0];

  document.querySelectorAll("#ionclassForm .row").forEach(row => {
    row.classList.remove("wrong");
    const input = row.querySelector("input");
    input.value = "";
    input.disabled = false;
    const mark = row.querySelector(".mark");
    mark.classList.remove("show");
    mark.textContent = "";
    const corr = row.querySelector(".correction");
    if(corr) corr.remove();
  });

  document.getElementById("clFeedback").classList.remove("show");
  document.getElementById("clCheckBtn").classList.remove("hide");
  document.getElementById("clNextBtn").classList.remove("show");
  document.getElementById("cl-type").focus();
}

function checkClAnswers(){
  const [formula, type, chargeType, names] = clCurrent;
  let right = 0;
  const answers = {
    type: { accept: [type], display: type },
    chargetype: { accept: [chargeType], display: chargeType },
    name: { accept: names, display: names[0] },
  };

  Object.keys(answers).forEach(field => {
    const row = document.querySelector(`#ionclassForm .row[data-field="${field}"]`);
    const input = row.querySelector("input");
    const mark = row.querySelector(".mark");
    const userVal = norm(input.value);
    const ok = answers[field].accept.map(norm).includes(userVal) && userVal.length > 0;

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right++;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${answers[field].display}`;
      row.appendChild(corr);
    }
  });

  clTotalRight += right;
  clTotalSeen += 3;
  clStreak = right === 3 ? clStreak + 1 : 0;

  document.getElementById("clTotalRight").textContent = clTotalRight;
  document.getElementById("clTotalSeen").textContent = clTotalSeen;
  document.getElementById("clStreak").textContent = clStreak;

  const scoreEl = document.getElementById("clRoundScore");
  const emojiEl = document.getElementById("clRoundEmoji");
  scoreEl.textContent = `${right}/3`;
  emojiEl.textContent = right === 3 ? "🎉" : right >= 2 ? "👍" : "💪";

  const note = document.getElementById("clFeedbackNote");
  document.getElementById("clFeedback").classList.toggle("perfect", right === 3);
  if(right === 3){
    note.innerHTML = `Wowieee galing! Cations lose e⁻ (metals), anions gain e⁻ (nonmetals).`;
    burstConfetti();
  } else {
    note.innerHTML = `Try again! You can do it po.`;
  }

  document.getElementById("clFeedback").classList.add("show");
  document.getElementById("clCheckBtn").classList.add("hide");
  document.getElementById("clNextBtn").classList.add("show");
}

document.getElementById("ionclassForm").addEventListener("submit", e => {
  e.preventDefault();
  checkClAnswers();
});
document.getElementById("clNextBtn").addEventListener("click", loadNextCl);

const ION_NOTATION = [
  ["F", 19, -1], ["O", 16, -2], ["N", 14, -3], ["Cl", 35, -1],
  ["S", 32, -2], ["P", 31, -3], ["Na", 23, 1], ["Mg", 24, 2],
  ["Al", 27, 3], ["K", 39, 1], ["Ca", 40, 2], ["Li", 7, 1], ["Be", 9, 2],
  ["Br", 79, -1], ["I", 127, -1], ["Se", 80, -2], ["Ga", 69, 3],
  ["Sr", 88, 2], ["Rb", 85, 1], ["Cs", 133, 1], ["Ba", 137, 2], ["H", 1, 1],
];

let ipCurrent = null, ipRecent = [];
let ipTotalRight = 0, ipTotalSeen = 0, ipStreak = 0;

function pickIp(){
  let pool = ION_NOTATION.filter((_,i) => !ipRecent.includes(i));
  if(pool.length === 0){ ipRecent = []; pool = ION_NOTATION; }
  const idx = Math.floor(Math.random() * pool.length);
  const chosen = ION_NOTATION.indexOf(pool[idx]);
  ipRecent.push(chosen);
  if(ipRecent.length > 8) ipRecent.shift();
  return ION_NOTATION[chosen];
}

function superChargeText(charge){
  const supNums = {0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};
  const mag = Math.abs(charge);
  const digits = mag === 1 ? "" : String(mag).split("").map(d => supNums[d]).join("");
  return digits + (charge > 0 ? "⁺" : "⁻");
}

function loadNextIp(){
  ipCurrent = pickIp();
  const [sym, mass, charge] = ipCurrent;
  const el = ELEMENT_BY_SYM[sym];
  document.getElementById("ipFormula").textContent = `${sym}${superChargeText(charge)}`;
  document.getElementById("ipName").textContent = `${el[1]}-${mass}, charge ${formatCharge(charge)}`;

  document.querySelectorAll("#isopracticeForm .row").forEach(row => {
    row.classList.remove("wrong");
    const input = row.querySelector("input");
    input.value = "";
    input.disabled = false;
    const mark = row.querySelector(".mark");
    mark.classList.remove("show");
    mark.textContent = "";
    const corr = row.querySelector(".correction");
    if(corr) corr.remove();
  });

  document.getElementById("ipFeedback").classList.remove("show");
  document.getElementById("ipCheckBtn").classList.remove("hide");
  document.getElementById("ipNextBtn").classList.remove("show");
  document.getElementById("ip-atomic").focus();
}

function checkIpAnswers(){
  const [sym, mass, charge] = ipCurrent;
  const el = ELEMENT_BY_SYM[sym];
  const z = el[2];
  const groupNum = String(el[4]);
  const valence = parseInt(groupNum.slice(-1), 10);
  const answers = {
    atomic: z,
    protons: z,
    electrons: z - charge,
    neutrons: mass - z,
    valence: valence,
  };

  let right = 0;
  Object.keys(answers).forEach(field => {
    const row = document.querySelector(`#isopracticeForm .row[data-field="${field}"]`);
    const input = row.querySelector("input");
    const mark = row.querySelector(".mark");
    const userVal = parseInt(input.value.trim(), 10);
    const ok = userVal === answers[field];

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right++;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${answers[field]}`;
      row.appendChild(corr);
    }
  });

  ipTotalRight += right;
  ipTotalSeen += 5;
  ipStreak = right === 5 ? ipStreak + 1 : 0;

  document.getElementById("ipTotalRight").textContent = ipTotalRight;
  document.getElementById("ipTotalSeen").textContent = ipTotalSeen;
  document.getElementById("ipStreak").textContent = ipStreak;

  const scoreEl = document.getElementById("ipRoundScore");
  const emojiEl = document.getElementById("ipRoundEmoji");
  scoreEl.textContent = `${right}/5`;
  emojiEl.textContent = right === 5 ? "🎉" : right >= 3 ? "👍" : "💪";

  const note = document.getElementById("ipFeedbackNote");
  document.getElementById("ipFeedback").classList.toggle("perfect", right === 5);
  if(right === 5){
    note.innerHTML = `Nays one! e⁻ = Z − charge, and n⁰ never changes when an atom ionizes.`;
    burstConfetti();
  } else {
    note.innerHTML = `Hmmm... Parang may mali. Try again po!`;
  }

  document.getElementById("ipFeedback").classList.add("show");
  document.getElementById("ipCheckBtn").classList.add("hide");
  document.getElementById("ipNextBtn").classList.add("show");
}

document.getElementById("isopracticeForm").addEventListener("submit", e => {
  e.preventDefault();
  checkIpAnswers();
});
document.getElementById("ipNextBtn").addEventListener("click", loadNextIp);

const WORKED_IONS = [
  ["Be", 9, 2, 4, 2, 5, 2],
  ["Au", 197, 3, 79, 76, 118, 3],
  ["Au", 197, 1, 79, 78, 118, 1],
  ["Mg", 24, 2, 12, 10, 12, 2],
  ["Fe", 56, 2, 26, 24, 30, 2],
  ["Fe", 56, 3, 26, 23, 30, 3],
  ["Cu", 63, 1, 29, 28, 34, 1],
  ["Cu", 63, 2, 29, 27, 34, 2],
  ["Sn", 120, 2, 50, 48, 70, 2],
  ["Sn", 120, 4, 50, 46, 70, 4],
  ["Pb", 207, 2, 82, 80, 125, 2],
  ["Zn", 65, 2, 30, 28, 35, 2],
  ["Ag", 108, 1, 47, 46, 61, 1],
];

let wiCurrent = null, wiRecent = [];
let wiTotalRight = 0, wiTotalSeen = 0, wiStreak = 0;

function pickWi(){
  let pool = WORKED_IONS.filter((_,i) => !wiRecent.includes(i));
  if(pool.length === 0){ wiRecent = []; pool = WORKED_IONS; }
  const idx = Math.floor(Math.random() * pool.length);
  const chosen = WORKED_IONS.indexOf(pool[idx]);
  wiRecent.push(chosen);
  if(wiRecent.length > 4) wiRecent.shift();
  return WORKED_IONS[chosen];
}

function loadNextWi(){
  wiCurrent = pickWi();
  const [sym, mass, charge] = wiCurrent;
  const el = ELEMENT_BY_SYM[sym];
  document.getElementById("wiFormula").textContent = `${sym}${superChargeText(charge)}`;
  document.getElementById("wiName").textContent = `${el[1]}-${mass}, charge ${formatCharge(charge)}`;

  document.querySelectorAll("#workedionForm .row").forEach(row => {
    row.classList.remove("wrong");
    const input = row.querySelector("input");
    input.value = "";
    input.disabled = false;
    const mark = row.querySelector(".mark");
    mark.classList.remove("show");
    mark.textContent = "";
    const corr = row.querySelector(".correction");
    if(corr) corr.remove();
  });

  document.getElementById("wiFeedback").classList.remove("show");
  document.getElementById("wiCheckBtn").classList.remove("hide");
  document.getElementById("wiNextBtn").classList.remove("show");
  document.getElementById("wi-atomic").focus();
}

function checkWiAnswers(){
  const [sym, mass, charge, p, e, n, ve] = wiCurrent;
  const el = ELEMENT_BY_SYM[sym];
  const z = el[2];
  const answers = { atomic: z, protons: p, electrons: e, neutrons: n, valence: ve };

  let right = 0;
  Object.keys(answers).forEach(field => {
    const row = document.querySelector(`#workedionForm .row[data-field="${field}"]`);
    const input = row.querySelector("input");
    const mark = row.querySelector(".mark");
    const userVal = parseInt(input.value.trim(), 10);
    const ok = userVal === answers[field];

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right++;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${answers[field]}`;
      row.appendChild(corr);
    }
  });

  wiTotalRight += right;
  wiTotalSeen += 5;
  wiStreak = right === 5 ? wiStreak + 1 : 0;

  document.getElementById("wiTotalRight").textContent = wiTotalRight;
  document.getElementById("wiTotalSeen").textContent = wiTotalSeen;
  document.getElementById("wiStreak").textContent = wiStreak;

  const scoreEl = document.getElementById("wiRoundScore");
  const emojiEl = document.getElementById("wiRoundEmoji");
  scoreEl.textContent = `${right}/5`;
  emojiEl.textContent = right === 5 ? "🎉" : right >= 3 ? "👍" : "💪";

  const note = document.getElementById("wiFeedbackNote");
  document.getElementById("wiFeedback").classList.toggle("perfect", right === 5);
  if(right === 5){
    note.innerHTML = `Congrats'ed! Cations (+) lose e⁻, anions (–) gain e⁻ — n⁰ stays fixed either way.`;
    burstConfetti();
  } else {
    note.innerHTML = `Mhh, depende kung 3 yan. Joke!`;
  }

  document.getElementById("wiFeedback").classList.add("show");
  document.getElementById("wiCheckBtn").classList.add("hide");
  document.getElementById("wiNextBtn").classList.add("show");
}

document.getElementById("workedionForm").addEventListener("submit", e => {
  e.preventDefault();
  checkWiAnswers();
});
document.getElementById("wiNextBtn").addEventListener("click", loadNextWi);


const MEMORIZE_METALS = [
  ["As³⁺", "Arsenic (III) / Arsenous"],
  ["As⁵⁺", "Arsenic (V) / Arsenic"],
  ["Au⁺", "Gold (I) / Aurous"],
  ["Au³⁺", "Gold (III) / Auric"],
  ["Co²⁺", "Cobalt (II) / Cobaltous"],
  ["Co³⁺", "Cobalt (III) / Cobaltic"],
  ["Cu⁺", "Copper (I) / Cuprous"],
  ["Cu²⁺", "Copper (II) / Cupric"],
  ["Cr²⁺", "Chromium (II) / Chromous"],
  ["Cr³⁺", "Chromium (III) / Chromic"],
  ["Fe²⁺", "Iron (II) / Ferrous"],
  ["Fe³⁺", "Iron (III) / Ferric"],
  ["Ni²⁺", "Nickel (II) / Nickelous"],
  ["Ni³⁺", "Nickel (III) / Nickelic"],
  ["Pb²⁺", "Lead (II) / Plumbous"],
  ["Pb⁴⁺", "Lead (IV) / Plumbic"],
  ["Sb³⁺", "Antimony (III) / Antimonious"],
  ["Sb⁴⁺", "Antimony (IV) / Antimonic"],
  ["Sn²⁺", "Tin (II) / Stannous"],
  ["Sn⁴⁺", "Tin (IV) / Stannic"],
];
const MEMORIZE_MONATOMIC = [
  ["O²⁻", "Oxide"],
  ["N³⁻", "Nitride"],
  ["P³⁻", "Phosphide"],
  ["Cl⁻", "Chloride"],
  ["S²⁻", "Sulfide"],
  ["F⁻", "Fluoride"],
  ["I⁻", "Iodide"],
  ["Br⁻", "Bromide"],
];
const MEMORIZE_POLY = [
  ["NH₄⁺", "Ammonium"],
  ["H₃O⁺", "Hydronium"],
  ["OH⁻", "Hydroxide"],
  ["CN⁻", "Cyanide"],
  ["NO₂⁻", "Nitrite"],
  ["NO₃⁻", "Nitrate"],
  ["HSO₃⁻", "Bisulfite"],
  ["HSO₄⁻", "Bisulfate"],
  ["MnO₄⁻", "Permanganate"],
  ["S₂O₃²⁻", "Thiosulfate"],
  ["CO₃²⁻", "Carbonate"],
  ["CrO₄²⁻", "Chromate"],
  ["Cr₂O₇²⁻", "Dichromate"],
  ["C₂O₄²⁻", "Oxalate"],
  ["PO₃³⁻", "Phosphite"],
  ["PO₄³⁻", "Phosphate"],
  ["SO₃²⁻", "Sulfite"],
  ["SO₄²⁻", "Sulfate"],
  ["ClO⁻", "Hypochlorite"],
  ["ClO₂⁻", "Chlorite"],
  ["ClO₃⁻", "Chlorate"],
  ["ClO₄⁻", "Perchlorate"],
];

const MEM_TAG_LABELS = {
  metals: "Multivalent Metal",
  monatomic: "Monatomic Ion",
  poly: "Polyatomic Ion",
};

const MEMORIZE_SETS = {
  metals: MEMORIZE_METALS.map(c => [c[0], c[1], "metals"]),
  monatomic: MEMORIZE_MONATOMIC.map(c => [c[0], c[1], "monatomic"]),
  poly: MEMORIZE_POLY.map(c => [c[0], c[1], "poly"]),
};
MEMORIZE_SETS.all = [...MEMORIZE_SETS.metals, ...MEMORIZE_SETS.monatomic, ...MEMORIZE_SETS.poly];

let memFilter = "all";
let memMissedOnly = false;
let memKnown = new Set();
let memDeck = [];
let memIndex = 0;

function shuffleArr(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function memCurrentSet(){
  return MEMORIZE_SETS[memFilter] || MEMORIZE_SETS.all;
}

function memBuildDeck(keepShuffleOrder){
  const base = memCurrentSet();
  let pool = memMissedOnly ? base.filter(c => !memKnown.has(c[0])) : base;
  if(keepShuffleOrder && memDeck.length){
    const stillValid = memDeck.filter(c => pool.includes(c));
    pool = stillValid.length ? stillValid : pool;
  } else {
    pool = shuffleArr(pool);
  }
  memDeck = pool;
  if(memIndex >= memDeck.length) memIndex = 0;
}

function memRenderCard(){
  const inner = document.getElementById("memCardInner");
  const card = document.getElementById("memCard");
  inner.classList.remove("flipped");

  const base = memCurrentSet();
  const knownInSet = base.filter(c => memKnown.has(c[0])).length;
  document.getElementById("memKnownNum").textContent = knownInSet;

  if(memDeck.length === 0){
    card.classList.add("mem-card-empty");
    document.getElementById("memIndexNum").textContent = "0";
    document.getElementById("memTotalNum").textContent = "0";
    document.getElementById("memTagFront").textContent = "All caught up";
    document.getElementById("memFormula").textContent = "🎉";
    document.getElementById("memTagBack").textContent = "";
    document.getElementById("memName").textContent = "Every card in this set is marked \"Got it\".";
    document.getElementById("memKnownBtn").classList.remove("mem-mark-active");
    return;
  }

  card.classList.remove("mem-card-empty");
  document.getElementById("memIndexNum").textContent = memIndex + 1;
  document.getElementById("memTotalNum").textContent = memDeck.length;

  const [formula, name, cat] = memDeck[memIndex];
  const tag = MEM_TAG_LABELS[cat] || "Ion";
  document.getElementById("memTagFront").textContent = tag;
  document.getElementById("memTagBack").textContent = tag;
  document.getElementById("memFormula").textContent = formula;
  document.getElementById("memName").textContent = name;

  document.getElementById("memKnownBtn").classList.toggle("mem-mark-active", memKnown.has(formula));
}

function memFlip(){
  if(memDeck.length === 0) return;
  document.getElementById("memCardInner").classList.toggle("flipped");
}

function memStep(dir){
  if(memDeck.length === 0) return;
  memIndex = (memIndex + dir + memDeck.length) % memDeck.length;
  memRenderCard();
}

function memAdvanceAfterMark(){
  if(memMissedOnly){
    memBuildDeck(true);
  }
  if(memDeck.length === 0){ memRenderCard(); return; }
  memIndex = memIndex % memDeck.length;
  memRenderCard();
}

document.getElementById("memCard").addEventListener("click", memFlip);
document.getElementById("memFlipBtn").addEventListener("click", memFlip);
document.getElementById("memPrevBtn").addEventListener("click", () => memStep(-1));
document.getElementById("memNextBtn").addEventListener("click", () => memStep(1));
document.getElementById("memShuffleBtn").addEventListener("click", () => {
  memDeck = shuffleArr(memDeck);
  memIndex = 0;
  memRenderCard();
});
document.getElementById("memKnownBtn").addEventListener("click", () => {
  if(memDeck.length === 0) return;
  const formula = memDeck[memIndex][0];
  memKnown.add(formula);
  memAdvanceAfterMark();
});
document.getElementById("memMissedBtn").addEventListener("click", () => {
  if(memDeck.length === 0) return;
  const formula = memDeck[memIndex][0];
  memKnown.delete(formula);
  const wasMissedOnly = memMissedOnly;
  memIndex = (memIndex + 1) % memDeck.length;
  if(wasMissedOnly) memBuildDeck(true);
  memRenderCard();
});
document.getElementById("memMissedOnlyToggle").addEventListener("change", (e) => {
  memMissedOnly = e.target.checked;
  memBuildDeck(false);
  memRenderCard();
});
document.getElementById("memResetBtn").addEventListener("click", () => {
  memKnown.clear();
  memBuildDeck(false);
  memRenderCard();
});
document.querySelectorAll("#memFilters .mem-chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#memFilters .mem-chip").forEach(b => b.classList.toggle("active", b === btn));
    memFilter = btn.dataset.filter;
    memBuildDeck(false);
    memRenderCard();
  });
});

function initMemorize(){
  memBuildDeck(false);
  memRenderCard();
}

// ---- Memorize Answer Quiz (typed-answer version of the Memorize deck) ----

const MEM_QUIZ_SETS = {
  metals: MEMORIZE_METALS.map(c => [c[0], c[1], "metals", splitNameAlternatives(c[1])]),
  monatomic: MEMORIZE_MONATOMIC.map(c => [c[0], c[1], "monatomic", splitNameAlternatives(c[1])]),
  poly: MEMORIZE_POLY.map(c => [c[0], c[1], "poly", splitNameAlternatives(c[1])]),
};
MEM_QUIZ_SETS.all = [...MEM_QUIZ_SETS.metals, ...MEM_QUIZ_SETS.monatomic, ...MEM_QUIZ_SETS.poly];

let mqFilter = "all";
let mqCurrent = null;
let mqRecent = [];
let mqTotalRight = 0, mqTotalSeen = 0, mqStreak = 0;
let mqAskFormula = false;

const MQ_NAME_PROMPT = 'Type this ion\'s <b>name</b>. Multivalent metals ask for both the stock (e.g. "Iron (II)") and classical (e.g. "Ferrous") name; other ions just need the one name.<br><b> Do not use "/" in Sw/Exams</b>';
const MQ_FORMULA_PROMPT = 'Type this ion\'s <b>chemical formula</b>, including the charge (e.g. "Fe²⁺" or "SO₄²⁻"). You can type charges as plain numbers/signs, like "Fe2+".';

function mqPool(){
  return MEM_QUIZ_SETS[mqFilter] || MEM_QUIZ_SETS.all;
}

function pickMq(){
  const full = mqPool();
  let pool = full.filter((_,i) => !mqRecent.includes(i));
  if(pool.length === 0){ mqRecent = []; pool = full; }
  const idx = Math.floor(Math.random() * pool.length);
  const chosen = full.indexOf(pool[idx]);
  mqRecent.push(chosen);
  if(mqRecent.length > 8) mqRecent.shift();
  return full[chosen];
}

function loadNextMq(){
  mqCurrent = pickMq();
  const [formula, name, cat, accept] = mqCurrent;
  mqAskFormula = Math.random() < 0.5;

  const tile = document.getElementById("mqFormula");
  tile.textContent = mqAskFormula ? name : formula;
  tile.classList.toggle("is-name", mqAskFormula);
  document.getElementById("mqTag").textContent = MEM_TAG_LABELS[cat] || "Ion";

  const promptEl = document.getElementById("mqPrompt");
  if(promptEl) promptEl.innerHTML = mqAskFormula ? MQ_FORMULA_PROMPT : MQ_NAME_PROMPT;

  // Multivalent metals have two accepted forms: [stock, classical] — but only
  // when asking for the name. Asking for the formula is always one textbox.
  const twoBox = !mqAskFormula && accept.length >= 2;
  document.getElementById("mqNameLabel").textContent = mqAskFormula ? "Formula" : (twoBox ? "Stock" : "Name");
  document.getElementById("mqNameRow2").style.display = twoBox ? "" : "none";

  document.querySelectorAll("#mqForm .row").forEach(row => {
    row.classList.remove("wrong");
    const input = row.querySelector("input");
    input.value = "";
    input.disabled = false;
    input.placeholder = (mqAskFormula && row.dataset.field === "name") ? "e.g. Fe²⁺" : "__________";
    const mark = row.querySelector(".mark");
    mark.classList.remove("show");
    mark.textContent = "";
    const corr = row.querySelector(".correction");
    if(corr) corr.remove();
  });

  document.getElementById("mqFeedback").classList.remove("show");
  document.getElementById("mqCheckBtn").classList.remove("hide");
  document.getElementById("mqNextBtn").classList.remove("show");
  document.getElementById("mq-name").focus();
}

function checkMqAnswers(){
  const [formula, displayName, cat, accept] = mqCurrent;
  const twoBox = !mqAskFormula && accept.length >= 2;

  const row = document.querySelector('#mqForm .row[data-field="name"]');
  const input = row.querySelector("input");
  const mark = row.querySelector(".mark");

  let right = 0;

  if(mqAskFormula){
    const userVal = normFormula(input.value);
    const ok = userVal.length > 0 && userVal === normFormula(formula);

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right = 1;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${formula}`;
      row.appendChild(corr);
    }
  } else if(twoBox){
    const userVal = norm(input.value);
    const row2 = document.getElementById("mqNameRow2");
    const input2 = row2.querySelector("input");
    const mark2 = row2.querySelector(".mark");
    const userVal2 = norm(input2.value);

    const ok1 = userVal.length > 0 && userVal === norm(accept[0]);
    const ok2 = userVal2.length > 0 && userVal2 === norm(accept[1]);

    input.disabled = true;
    input2.disabled = true;
    mark.classList.add("show");
    mark2.classList.add("show");

    mark.textContent = ok1 ? "✅" : "❌";
    row.classList.toggle("wrong", !ok1);
    if(!ok1){
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${accept[0]}`;
      row.appendChild(corr);
    }

    mark2.textContent = ok2 ? "✅" : "❌";
    row2.classList.toggle("wrong", !ok2);
    if(!ok2){
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${accept[1]}`;
      row2.appendChild(corr);
    }

    right = (ok1 && ok2) ? 1 : 0;
  } else {
    const userVal = norm(input.value);
    const ok = accept.map(norm).includes(userVal) && userVal.length > 0;

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right = 1;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${displayName}`;
      row.appendChild(corr);
    }
  }

  mqTotalRight += right;
  mqTotalSeen += 1;
  mqStreak = right === 1 ? mqStreak + 1 : 0;

  document.getElementById("mqTotalRight").textContent = mqTotalRight;
  document.getElementById("mqTotalSeen").textContent = mqTotalSeen;
  document.getElementById("mqStreak").textContent = mqStreak;

  const scoreEl = document.getElementById("mqRoundScore");
  const emojiEl = document.getElementById("mqRoundEmoji");
  scoreEl.textContent = `${right}/1`;
  emojiEl.textContent = right === 1 ? "🎉" : "💪";

  const note = document.getElementById("mqFeedbackNote");
  document.getElementById("mqFeedback").classList.toggle("perfect", right === 1);
  if(right === 1){
    note.innerHTML = mqAskFormula
      ? `Galing! That's the correct formula.`
      : (twoBox ? `Galing! Both the stock and classical name check out.` : `Galing! Any of the accepted names (stock, classical, or common) count as correct.`);
    burstConfetti();
  } else {
    note.innerHTML = `Oops Oops Oops! Yoohoo, Dito ang tingin! Sakadungpating patongting! Digidigidigidigidigidigidigi ihey! 1.. 2.. 3.. kanya kanya na! Ay? nakatulog! This is lans! ( engkkkk mali po..)`;
  }

  document.getElementById("mqFeedback").classList.add("show");
  document.getElementById("mqCheckBtn").classList.add("hide");
  document.getElementById("mqNextBtn").classList.add("show");
}

document.getElementById("mqForm").addEventListener("submit", e => {
  e.preventDefault();
  checkMqAnswers();
});
document.getElementById("mqNextBtn").addEventListener("click", loadNextMq);
document.querySelectorAll("#mqFilters .mem-chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#mqFilters .mem-chip").forEach(b => b.classList.toggle("active", b === btn));
    mqFilter = btn.dataset.filter;
    mqRecent = [];
    loadNextMq();
  });
});

// ---- Recitation Practice (timed mock recitation: 30 random ions, 5:00 clock) ----

const RC_ROUND_SIZE = 30;
const RC_DURATION = 300; // seconds

let rcQueue = [];
let rcIndex = 0;
let rcCurrent = null;
let rcTotalRight = 0, rcTotalSeen = 0;
let rcTimeLeft = RC_DURATION;
let rcTimerInterval = null;
let rcAdvanceTimeout = null;
let rcAskFormula = false;

const RC_NAME_PROMPT = 'Type this ion\'s <b>name</b>. Multivalent metals ask for both the stock and classical name; other ions just need the one name.';
const RC_FORMULA_PROMPT = 'Type this ion\'s <b>chemical formula</b>, including the charge (e.g. "Fe²⁺" or "SO₄²⁻"). You can type charges as plain numbers/signs, like "Fe2+".';

function rcFormatTime(s){
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function rcBuildQueue(){
  rcQueue = shuffleArr(MEM_QUIZ_SETS.all).slice(0, RC_ROUND_SIZE);
}

function rcTick(){
  rcTimeLeft -= 1;
  const el = document.getElementById("rcTimeLeft");
  if(el) el.textContent = rcFormatTime(Math.max(rcTimeLeft, 0));
  const tile = document.getElementById("rcTimerTile");
  if(tile) tile.classList.toggle("low", rcTimeLeft <= 30);
  if(rcTimeLeft <= 0){
    rcEndRun("time");
  }
}

function rcStart(){
  clearInterval(rcTimerInterval);
  clearTimeout(rcAdvanceTimeout);

  rcBuildQueue();
  rcIndex = 0;
  rcTotalRight = 0;
  rcTotalSeen = 0;
  rcTimeLeft = RC_DURATION;

  document.getElementById("rcTotalRight").textContent = "0";
  document.getElementById("rcTotalSeen").textContent = "0";
  document.getElementById("rcTimeLeft").textContent = rcFormatTime(RC_DURATION);
  document.getElementById("rcTimerTile").classList.remove("low");

  document.getElementById("recitationStart").style.display = "none";
  document.getElementById("recitationEnd").style.display = "none";
  document.getElementById("recitationLive").style.display = "";

  rcTimerInterval = setInterval(rcTick, 1000);
  rcLoadNext();
}

function rcLoadNext(){
  if(rcIndex >= rcQueue.length){
    rcEndRun("done");
    return;
  }

  rcCurrent = rcQueue[rcIndex];
  const [formula, name, cat, accept] = rcCurrent;
  rcAskFormula = Math.random() < 0.5;

  const tile = document.getElementById("rcFormula");
  tile.textContent = rcAskFormula ? name : formula;
  tile.classList.toggle("is-name", rcAskFormula);
  document.getElementById("rcTag").textContent = MEM_TAG_LABELS[cat] || "Ion";
  document.getElementById("rcIonNum").textContent = rcIndex + 1;
  document.getElementById("rcIonTotal").textContent = rcQueue.length;

  const promptEl = document.getElementById("rcPrompt");
  if(promptEl) promptEl.innerHTML = rcAskFormula ? RC_FORMULA_PROMPT : RC_NAME_PROMPT;

  const twoBox = !rcAskFormula && accept.length >= 2;
  document.getElementById("rcNameLabel").textContent = rcAskFormula ? "Formula" : (twoBox ? "Stock" : "Name");
  document.getElementById("rcNameRow2").style.display = twoBox ? "" : "none";

  document.querySelectorAll("#rcForm .row").forEach(row => {
    row.classList.remove("wrong");
    const input = row.querySelector("input");
    input.value = "";
    input.disabled = false;
    input.placeholder = (rcAskFormula && row.dataset.field === "name") ? "e.g. Fe²⁺" : "__________";
    const mark = row.querySelector(".mark");
    mark.classList.remove("show");
    mark.textContent = "";
    const corr = row.querySelector(".correction");
    if(corr) corr.remove();
  });

  document.getElementById("rcFeedback").classList.remove("show");
  document.getElementById("rcCheckBtn").classList.remove("hide");
  document.getElementById("rc-name").focus();
}

function rcCheckAnswers(){
  if(!rcCurrent) return;
  const [formula, displayName, cat, accept] = rcCurrent;
  const twoBox = !rcAskFormula && accept.length >= 2;

  const row = document.querySelector('#rcForm .row[data-field="name"]');
  const input = row.querySelector("input");
  const mark = row.querySelector(".mark");

  let right = 0;

  if(rcAskFormula){
    const userVal = normFormula(input.value);
    const ok = userVal.length > 0 && userVal === normFormula(formula);

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right = 1;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${formula}`;
      row.appendChild(corr);
    }
  } else if(twoBox){
    const userVal = norm(input.value);
    const row2 = document.getElementById("rcNameRow2");
    const input2 = row2.querySelector("input");
    const mark2 = row2.querySelector(".mark");
    const userVal2 = norm(input2.value);

    const ok1 = userVal.length > 0 && userVal === norm(accept[0]);
    const ok2 = userVal2.length > 0 && userVal2 === norm(accept[1]);

    input.disabled = true;
    input2.disabled = true;
    mark.classList.add("show");
    mark2.classList.add("show");

    mark.textContent = ok1 ? "✅" : "❌";
    row.classList.toggle("wrong", !ok1);
    if(!ok1){
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${accept[0]}`;
      row.appendChild(corr);
    }

    mark2.textContent = ok2 ? "✅" : "❌";
    row2.classList.toggle("wrong", !ok2);
    if(!ok2){
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${accept[1]}`;
      row2.appendChild(corr);
    }

    right = (ok1 && ok2) ? 1 : 0;
  } else {
    const userVal = norm(input.value);
    const ok = accept.map(norm).includes(userVal) && userVal.length > 0;

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right = 1;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${displayName}`;
      row.appendChild(corr);
    }
  }

  rcTotalRight += right;
  rcTotalSeen += 1;
  document.getElementById("rcTotalRight").textContent = rcTotalRight;
  document.getElementById("rcTotalSeen").textContent = rcTotalSeen;

  const scoreEl = document.getElementById("rcRoundScore");
  const emojiEl = document.getElementById("rcRoundEmoji");
  scoreEl.textContent = `${right}/1`;
  emojiEl.textContent = right === 1 ? "🎉" : "💪";

  const note = document.getElementById("rcFeedbackNote");
  note.textContent = right === 1
    ? "Correct — keep the pace up."
    : "Missed — note the correction and move to the next one.";

  document.getElementById("rcFeedback").classList.add("show");
  document.getElementById("rcCheckBtn").classList.add("hide");

  rcIndex += 1;
  clearTimeout(rcAdvanceTimeout);
  rcAdvanceTimeout = setTimeout(() => {
    if(rcTimeLeft > 0) rcLoadNext();
  }, 850);
}

function rcEndRun(reason){
  clearInterval(rcTimerInterval);
  clearTimeout(rcAdvanceTimeout);

  document.getElementById("recitationLive").style.display = "none";
  document.getElementById("recitationEnd").style.display = "";
  document.getElementById("rcEndScore").textContent = `${rcTotalRight}/${rcQueue.length}`;

  const icon = document.getElementById("rcEndIcon");
  const title = document.getElementById("rcEndTitle");
  const note = document.getElementById("rcEndNote");

  if(reason === "time"){
    icon.textContent = "⏰";
    title.textContent = "Time's up";
    note.textContent = `You got through ${rcTotalSeen} of ${rcQueue.length} ions before the clock ran out.`;
  } else if(reason === "stopped"){
    icon.textContent = "🛑";
    title.textContent = "Run ended";
    note.textContent = `You answered ${rcTotalSeen} of ${rcQueue.length} ions before stopping.`;
  } else {
    icon.textContent = "🎉";
    title.textContent = "Run complete";
    note.textContent = `You answered all ${rcQueue.length} ions with time to spare.`;
  }
}

document.getElementById("rcStartBtn").addEventListener("click", rcStart);
document.getElementById("rcRetryBtn").addEventListener("click", rcStart);
document.getElementById("rcStopBtn").addEventListener("click", () => rcEndRun("stopped"));
document.getElementById("rcForm").addEventListener("submit", e => {
  e.preventDefault();
  rcCheckAnswers();
});

function updateModeVisibility(mode){
  const elementOnly = mode === "element";   
  const showCalcAndTable = mode !== "formula" && mode !== "egg"; 

  document.getElementById("categoryKeyCard").style.display = elementOnly ? "" : "none";
  document.getElementById("quickTipsCard").style.display = elementOnly ? "" : "none";
  document.getElementById("familyListSection").style.display = elementOnly ? "" : "none";

  document.getElementById("calcCard").style.display = showCalcAndTable ? "" : "none";
  document.getElementById("periodicTableSection").style.display = showCalcAndTable ? "" : "none";

  const fab = document.getElementById("calcFab");
  const wrap = document.getElementById("calcFloatingWrap");
  if(showCalcAndTable){
    fab.style.display = "";
    wrap.style.display = "";
  } else {
    fab.style.display = "none";
    wrap.style.display = "none";
    wrap.classList.remove("open");
    fab.classList.remove("active");
  }
}

const MODE_PANELS = {
  element: "panelElement",
  formula: "panelFormula",
  isotope: "panelIsotope",
  oxidation: "panelOxidation",
  ionclass: "panelIonClass",
  isopractice: "panelIsoPractice",
  workedion: "panelWorkedIon",
  recitation: "panelRecitation",
  memorize: "panelMemorize",
  memquiz: "panelMemQuiz",
  egg: "panelEgg",
};

document.querySelectorAll(".mode-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    document.querySelectorAll(".mode-tab").forEach(b => b.classList.toggle("active", b === btn));
    Object.keys(MODE_PANELS).forEach(m => {
      const panel = document.getElementById(MODE_PANELS[m]);
      if(m === mode){
        panel.style.display = "";
        panel.classList.remove("mode-panel-visible");
        void panel.offsetWidth; 
        panel.classList.add("mode-panel-visible");
      } else {
        panel.style.display = "none";
        panel.classList.remove("mode-panel-visible");
      }
    });
    updateModeVisibility(mode);
    if(mode === "formula" && !fCurrent) loadNextFormula();
    if(mode === "isotope" && !iCurrent) loadNextIsotope();
    if(mode === "oxidation" && !oxCurrent) loadNextOx();
    if(mode === "ionclass" && !clCurrent) loadNextCl();
    if(mode === "isopractice" && !ipCurrent) loadNextIp();
    if(mode === "workedion" && !wiCurrent) loadNextWi();
    if(mode === "memorize" && !memDeck.length) initMemorize();
    if(mode === "memquiz" && !mqCurrent) loadNextMq();
    const eggVideo = document.getElementById("eggVideo");
    if(mode === "egg"){
      if(eggVideo) eggVideo.play().catch(() => {});
    } else if(eggVideo){
      eggVideo.pause();
    }
    btn.scrollIntoView({ behavior:"smooth", inline:"center", block:"nearest" });
  });
});

function loadNext(){
  current = pickElement();
  acceptable = buildAcceptable(current);

  const [sym,name,z] = current;
  document.getElementById("tileNum").textContent = z;
  document.getElementById("tileSym").textContent = sym;
  document.getElementById("tileName").textContent = name;
  document.getElementById("promptName").textContent = `${sym} (${name})`;

  const tile = document.getElementById("tile");
  tile.className = "tile " + kindClass(current[7]);
  void tile.offsetWidth;
  tile.classList.add("pop-in");
  
  const border = document.getElementById("tileBorder");
  border.innerHTML = border.innerHTML;
  const rect = border.querySelector("rect");
  rect.style.animation = "none";
  void rect.offsetWidth;
  rect.style.animation = "";

  document.querySelectorAll(".row").forEach(row => {
    row.classList.remove("wrong");
    const input = row.querySelector("input");
    input.value = "";
    input.disabled = false;
    const mark = row.querySelector(".mark");
    mark.classList.remove("show");
    mark.textContent = "";
    const corr = row.querySelector(".correction");
    if(corr) corr.remove();
  });

  document.getElementById("feedback").classList.remove("show");
  document.getElementById("checkBtn").classList.remove("hide");
  document.getElementById("nextBtn").classList.remove("show");
  document.getElementById("f-period").focus();
}

function checkAnswers(){
  let right = 0;
  const fields = ["period","group","classification","kind","family","block"];

  fields.forEach(field => {
    const row = document.querySelector(`.row[data-field="${field}"]`);
    const input = row.querySelector("input");
    const mark = row.querySelector(".mark");
    const userVal = norm(input.value);
    const ok = acceptable[field].includes(userVal) && userVal.length > 0;

    input.disabled = true;
    mark.classList.add("show");

    if(ok){
      right++;
      mark.textContent = "✅";
      row.classList.remove("wrong");
    } else {
      mark.textContent = "❌";
      row.classList.add("wrong");
      const corr = document.createElement("div");
      corr.className = "correction";
      corr.textContent = `→ ${FIELD_DISPLAY[field](current)}`;
      row.appendChild(corr);
    }
  });

  totalRight += right;
  totalSeen += 6;
  streak = right === 6 ? streak + 1 : 0;

  document.getElementById("totalRight").textContent = totalRight;
  document.getElementById("totalSeen").textContent = totalSeen;
  document.getElementById("streak").textContent = streak;

  const scoreEl = document.getElementById("roundScore");
  const emojiEl = document.getElementById("roundEmoji");
  scoreEl.textContent = `${right}/6`;
  emojiEl.textContent = right === 6 ? "🎉" : right >= 4 ? "👍" : "💪";

  const note = document.getElementById("feedbackNote");
  document.getElementById("feedback").classList.toggle("perfect", right === 6);
  if(right === 6){
    note.innerHTML = `Good job Pirata! VIVA LARGA PIRATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`;
    burstConfetti();
  } else {
    const missedClass = document.querySelector('.row[data-field="classification"]').classList.contains("wrong");
    const missedKind = document.querySelector('.row[data-field="kind"]').classList.contains("wrong");
    if(missedClass && missedKind){
      note.innerHTML = 'parang may mali';
    } else {
      note.innerHTML = `parang may mali`;
    }
  }

  document.getElementById("feedback").classList.add("show");
  document.getElementById("checkBtn").classList.add("hide");
  document.getElementById("nextBtn").classList.add("show");
}

(function spawnChalkDust(){
  const host = document.getElementById("chalkDust");
  if(!host) return;
  const COUNT = 22;
  for(let i=0;i<COUNT;i++){
    const mote = document.createElement("div");
    mote.className = "mote";
    const size = 2 + Math.random()*3;
    const left = Math.random()*100;
    const duration = 14 + Math.random()*16;
    const delay = -Math.random()*duration;
    const drift = (Math.random()*60 - 30) + "px";
    const opacity = 0.15 + Math.random()*0.3;
    mote.style.width = size + "px";
    mote.style.height = size + "px";
    mote.style.left = left + "vw";
    mote.style.top = "100vh";
    mote.style.setProperty("--drift", drift);
    mote.style.setProperty("--mote-op", opacity);
    mote.style.animationDuration = duration + "s";
    mote.style.animationDelay = delay + "s";
    host.appendChild(mote);
  }
})();

function burstConfetti(){
  const colors = ["var(--chalk-yellow)","var(--metal)","var(--nonmetal)","var(--metalloid)","var(--good)"];
  const originX = window.innerWidth / 2;
  for(let i=0;i<36;i++){
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const x = originX + (Math.random()*320 - 160);
    piece.style.left = x + "px";
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    piece.style.animationDuration = (1.6 + Math.random()*1.2) + "s";
    piece.style.animationDelay = (Math.random()*0.25) + "s";
    piece.style.borderRadius = Math.random() > .5 ? "50%" : "2px";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}

document.getElementById("quizForm").addEventListener("submit", e => {
  e.preventDefault();
  checkAnswers();
});
document.getElementById("nextBtn").addEventListener("click", loadNext);

function buildPeriodicTable(){
  const mainRows = 7, mainCols = 18;
  const grid = document.getElementById("ptableMain");
  const cellMap = {}; 

  const fBlockEls = [];
  ELEMENTS.forEach(el => {
    const [sym,name,z,period,groupNum] = el;
    if(groupNum === "n/a"){ fBlockEls.push(el); return; }
    cellMap[`${period}-${groupNum}`] = el;
  });

  for(let r = 1; r <= mainRows; r++){
    for(let c = 1; c <= mainCols; c++){
      const el = cellMap[`${r}-${c}`];
      const cell = document.createElement("div");
      if(el){
        const [sym,name,z,period,groupNum,groupLetter,classification,kind,family,block,mass] = el;
        cell.className = "pt-cell " + kindClass(kind);
        cell.innerHTML = `
          <span class="pt-sym">${sym}</span>
          <span class="pt-z">${z}</span>
          <span class="pt-tip">${name} (${z})<br>Period ${period} · Group ${groupNum}${groupLetter ? "/"+groupLetter : ""}<br>${classification} · ${kind}<br>${family} · ${block}-block</span>
        `;
      } else {
        cell.className = "pt-cell empty";
      }
      grid.appendChild(cell);
    }
  }

  const lanRow = document.getElementById("ptableLan");
  const actRow = document.getElementById("ptableAct");
  fBlockEls.forEach(el => {
    const [sym,name,z,period,groupNum,groupLetter,classification,kind,family,block,mass] = el;
    const cell = document.createElement("div");
    cell.className = "pt-cell " + kindClass(kind);
    cell.innerHTML = `
      <span class="pt-sym">${sym}</span>
      <span class="pt-z">${z}</span>
      <span class="pt-tip">${name} (${z})<br>Period ${period} · ${family}<br>${classification} · ${kind} · ${block}-block</span>
    `;
    (family === "Lanthanide" ? lanRow : actRow).appendChild(cell);
  });
}

loadNext();
buildPeriodicTable();
attachTooltipHandlers();

function calculatorMarkup(){
  return `
    <div class="calc-display">
      <div class="calc-expr"></div>
      <div class="calc-result">0</div>
    </div>
    <div class="calc-grid">
      <button type="button" class="calc-btn func" data-action="clear">C</button>
      <button type="button" class="calc-btn func" data-action="backspace">⌫</button>
      <button type="button" class="calc-btn func" data-action="percent">%</button>
      <button type="button" class="calc-btn op" data-action="op" data-value="÷">÷</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="7">7</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="8">8</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="9">9</button>
      <button type="button" class="calc-btn op" data-action="op" data-value="×">×</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="4">4</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="5">5</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="6">6</button>
      <button type="button" class="calc-btn op" data-action="op" data-value="−">−</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="1">1</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="2">2</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="3">3</button>
      <button type="button" class="calc-btn op" data-action="op" data-value="+">+</button>
      <button type="button" class="calc-btn func" data-action="sign">±</button>
      <button type="button" class="calc-btn" data-action="digit" data-value="0">0</button>
      <button type="button" class="calc-btn" data-action="decimal">.</button>
      <button type="button" class="calc-btn equals" data-action="equals">=</button>
    </div>
  `;
}

function calcOp(a, b, op){
  switch(op){
    case "+": return a + b;
    case "−": return a - b;
    case "×": return a * b;
    case "÷": return b === 0 ? NaN : a / b;
    default: return b;
  }
}

function calcTrim(n){
  if(Number.isNaN(n)) return "Error";
  let s = String(n);
  if(s.length > 14) s = Number(n.toPrecision(10)).toString();
  return s;
}

function attachCalculator(container){
  container.innerHTML = calculatorMarkup();
  const exprEl = container.querySelector(".calc-expr");
  const resultEl = container.querySelector(".calc-result");

  let current = "0";
  let previous = null;
  let operator = null;
  let waiting = false;

  function render(){
    resultEl.textContent = current;
    exprEl.textContent = (operator && previous !== null) ? `${previous} ${operator}` : "";
  }

  container.querySelectorAll(".calc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;
      const value = btn.dataset.value;

      if(action === "digit"){
        if(waiting || current === "0" || current === "Error"){ current = value; waiting = false; }
        else{ current += value; }
      } else if(action === "decimal"){
        if(waiting || current === "Error"){ current = "0."; waiting = false; }
        else if(!current.includes(".")){ current += "."; }
      } else if(action === "sign"){
        if(current !== "Error") current = calcTrim(parseFloat(current) * -1);
      } else if(action === "percent"){
        if(current !== "Error") current = calcTrim(parseFloat(current) / 100);
      } else if(action === "clear"){
        current = "0"; previous = null; operator = null; waiting = false;
      } else if(action === "backspace"){
        if(current !== "Error"){
          current = current.length > 1 ? current.slice(0, -1) : "0";
        }
      } else if(action === "op"){
        const inputVal = parseFloat(current);
        if(operator && !waiting && previous !== null){
          const result = calcOp(previous, inputVal, operator);
          current = calcTrim(Math.round(result * 1e10) / 1e10);
          previous = Number.isNaN(result) ? null : parseFloat(current);
          operator = Number.isNaN(result) ? null : value;
        } else {
          previous = inputVal;
          operator = value;
        }
        waiting = true;
      } else if(action === "equals"){
        if(operator !== null && previous !== null){
          const inputVal = parseFloat(current);
          const result = calcOp(previous, inputVal, operator);
          current = calcTrim(Math.round(result * 1e10) / 1e10);
          previous = null;
          operator = null;
          waiting = true;
        }
      }
      render();
    });
  });

  render();
}

document.querySelectorAll(".calculator").forEach(attachCalculator);

const calcFab = document.getElementById("calcFab");
const calcFloatingWrap = document.getElementById("calcFloatingWrap");
const calcCloseBtn = document.getElementById("calcCloseBtn");
if(calcFab && calcFloatingWrap){
  calcFab.addEventListener("click", () => {
    const open = calcFloatingWrap.classList.toggle("open");
    calcFab.classList.toggle("active", open);
  });
}
if(calcCloseBtn && calcFloatingWrap && calcFab){
  calcCloseBtn.addEventListener("click", () => {
    calcFloatingWrap.classList.remove("open");
    calcFab.classList.remove("active");
  });
}

document.getElementById("privacyCloseBtn").addEventListener("click", () => {
  document.getElementById("privacyOverlay").classList.add("hidden");
  document.getElementById("changelogOverlay").classList.remove("hidden");
});

document.getElementById("changelogCloseBtn").addEventListener("click", () => {
  document.getElementById("changelogOverlay").classList.add("hidden");
});

const CREATOR_STATUS = {
  online: true,               
  lastActive: "Active 17 Hours & 43 Minutes ago."  
};
(function applyCreatorStatus(){
  const wrap = document.getElementById("creatorStatus");
  const textEl = document.getElementById("statusText");
  const lastEl = document.getElementById("statusLastActive");
  if(!wrap || !textEl || !lastEl) return;
  wrap.classList.toggle("is-online", CREATOR_STATUS.online);
  wrap.classList.toggle("is-offline", !CREATOR_STATUS.online);
  textEl.textContent = CREATOR_STATUS.online ? "Online" : "Offline";
  lastEl.textContent = CREATOR_STATUS.online ? "" : CREATOR_STATUS.lastActive;
})();

const THEME_KEY = "stemchems-theme";
const CUSTOM_BG_KEY = "stemchems-custom-bg";
const customBgEl = document.getElementById("customBg");
const customBgInput = document.getElementById("customBgInput");
const customBgUploadBtn = document.getElementById("customBgUploadBtn");
const customBgClearBtn = document.getElementById("customBgClearBtn");
const customThemeUpload = document.getElementById("customThemeUpload");

function setCustomBgImage(dataUrl){
  if(!customBgEl) return;
  customBgEl.style.backgroundImage = dataUrl ? `url("${dataUrl}")` : "none";
}

function applyTheme(theme){
  if(theme === "lpu"){
    document.documentElement.setAttribute("data-theme", "lpu");
  } else if(theme === "custom"){
    document.documentElement.setAttribute("data-theme", "custom");
  } else {
    theme = "dark";
    document.documentElement.removeAttribute("data-theme");
  }
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.themeChoice === theme);
  });
  if(customThemeUpload){
    customThemeUpload.classList.toggle("visible", theme === "custom");
  }
}

document.querySelectorAll(".theme-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.themeChoice;

    if(theme === "custom"){
      let saved = null;
      try{ saved = localStorage.getItem(CUSTOM_BG_KEY); }catch(e){}
      if(saved) setCustomBgImage(saved);
      applyTheme("custom");
      try{ localStorage.setItem(THEME_KEY, "custom"); }catch(e){}
      if(!saved && customBgInput) customBgInput.click();
      return;
    }

    try{ localStorage.setItem(THEME_KEY, theme); }catch(e){}
    applyTheme(theme);
  });
});

if(customBgUploadBtn && customBgInput){
  customBgUploadBtn.addEventListener("click", () => customBgInput.click());
}

if(customBgInput){
  customBgInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if(!file) return;

    if(!file.type.startsWith("image/")){
      alert("Please choose an image file (PNG, JPG, GIF, WEBP, etc).");
      customBgInput.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setCustomBgImage(dataUrl);
      applyTheme("custom");
      try{
        localStorage.setItem(THEME_KEY, "custom");
        localStorage.setItem(CUSTOM_BG_KEY, dataUrl);
      }catch(err){
        // Image likely too large for localStorage — it'll still show for this session.
        alert("Your image is applied for this session, but it's too large to be saved for next time. Try a smaller image if you want it to stick around.");
      }
    };
    reader.onerror = () => {
      alert("Couldn't read that image. Try a different file.");
    };
    reader.readAsDataURL(file);
    customBgInput.value = "";
  });
}

if(customBgClearBtn){
  customBgClearBtn.addEventListener("click", () => {
    setCustomBgImage(null);
    try{
      localStorage.removeItem(CUSTOM_BG_KEY);
      localStorage.setItem(THEME_KEY, "dark");
    }catch(e){}
    applyTheme("dark");
  });
}

(function initTheme(){
  let saved = "dark";
  try{ saved = localStorage.getItem(THEME_KEY) || "dark"; }catch(e){}

  if(saved !== "lpu" && saved !== "custom") saved = "dark";

  if(saved === "custom"){
    let bg = null;
    try{ bg = localStorage.getItem(CUSTOM_BG_KEY); }catch(e){}
    if(bg){ setCustomBgImage(bg); } else { saved = "dark"; }
  }

  applyTheme(saved);
})();

function attachTooltipHandlers(){
  const cells = document.querySelectorAll(".pt-cell:not(.empty)");
  let activeCell = null;

  function closeActive(){
    if(activeCell){
      activeCell.classList.remove("active");
      activeCell.classList.remove("tip-below");
      const tip = activeCell.querySelector(".pt-tip");
      if(tip) tip.style.removeProperty("--tip-shift");
      activeCell = null;
    }
  }

  function positionTip(cell){
    const tip = cell.querySelector(".pt-tip");
    if(!tip) return;
    cell.classList.remove("tip-below");
    tip.style.setProperty("--tip-shift", "0px");
    const margin = 6;
    const scrollBox = cell.closest(".pt-scroll");
    const boundsRect = scrollBox
      ? scrollBox.getBoundingClientRect()
      : { left: 0, right: window.innerWidth, top: 0 };

    let rect = tip.getBoundingClientRect();
    if(rect.top < boundsRect.top + margin){
      cell.classList.add("tip-below");
      rect = tip.getBoundingClientRect();
    }

    let shift = 0;
    if(rect.left < boundsRect.left + margin){
      shift = (boundsRect.left + margin) - rect.left;
    } else if(rect.right > boundsRect.right - margin){
      shift = (boundsRect.right - margin) - rect.right;
    }
    if(shift !== 0){
      tip.style.setProperty("--tip-shift", shift + "px");
    }
  }

  cells.forEach(cell => {
    
    cell.addEventListener("mouseenter", () => positionTip(cell));

    cell.addEventListener("click", (e) => {
      e.stopPropagation();
      if(activeCell === cell){
        closeActive();
        return;
      }
      closeActive();
      cell.classList.add("active");
      activeCell = cell;
      positionTip(cell);
    });
  });

  document.addEventListener("click", closeActive);
  document.addEventListener("scroll", closeActive, { passive:true });
}

  document.getElementById("reopenChangelog").addEventListener("click", () => {
    document.getElementById("changelogOverlay").classList.remove("hidden");
  });
(function initScheduleCard(){
  const SCHEDULE_KEY = "stemchems-schedule-dismissed";
  const SCHEDULE_VERSION = "2026-08-29-test2-only";
  const card = document.getElementById("scheduleCard");
  const dismissBtn = document.getElementById("scheduleDismiss");
  if(!card) return;

  let dismissed = null;
  try{ dismissed = localStorage.getItem(SCHEDULE_KEY); }catch(e){}
  if(dismissed === SCHEDULE_VERSION){
    card.classList.add("hidden");
    return;
  }

  if(dismissBtn){
    dismissBtn.addEventListener("click", () => {
      card.classList.add("hidden");
      try{ localStorage.setItem(SCHEDULE_KEY, SCHEDULE_VERSION); }catch(e){}
    });
  }
})();
