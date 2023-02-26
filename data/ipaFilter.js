import { getFeature } from "./getFeature.js";

// prettier-ignore
const inventory = ["t", "tʃ", "k", "kʷ", "tʼ", "tʷʼ", "tʃʼ", "kʷʼ", "b", "bʷ", "d", "dʒ", "ɡ", "ɡʷ", "f", "fʷ", "s", "ʃ", "h", "hʷ", "sʼ", "z", "ʒ", "m", "mʷ", "n", "ɲ", "ŋ", "l", "r", "w", "j", "i", "ɨ", "u", "e", "ə", "o", "a"];
// prettier-ignore
const features = ["syl", "son", "cons", "cont", "del.rel", "lat", "nas", "voi", "c.g.", "s.g.", "ant", "cor", "distr", "high", "low", "back", "round", "tense"];
// Console.log(`\t${features.join("\t")}`);
// for (const sound of inventory) {
//   const feature = getFeature(sound);
//   console.log(
//     `${sound}\t${features
//       .map((k) => feature[k])
//       .map((v) => (v === true ? "+" : v === false ? "-" : v))
//       .join("\t")}`,
//   );
// }

// (a) ["f", "fʷ", "s", "sʼ", "z", "ʃ", "ʒ"]
// (b) ["ɡ", "ɡʷ", "ŋ"]
// (c) ["s", "sʼ", "z"]
// (d) ["tʼ", "tʷʼ", "tʃʼ"]
// (e) ["ŋ"]
// (f) ["ɨ", "ə"]
// (a) ["tʃ", "tʃʼ", "dʒ", "ʃ", "ʒ", "ɲ", "j"]
// (b) ["bʷ", "fʷ", "mʷ", "kʷ", "kʷʼ", "ɡʷ", "hʷ", "w"]
const set = ["tʃ", "tʃʼ", "dʒ", "ʃ", "ʒ", "ɲ", "j"];
const notSet = inventory.filter((s) => !set.includes(s));
const maxFeatureClass = { ...getFeature(set[0]) };
for (const sound of set) {
  const feature = getFeature(sound);
  for (const key of Object.keys(maxFeatureClass)) {
    if (
      typeof feature[key] !== "boolean" ||
      feature[key] ^ maxFeatureClass[key]
    )
      delete maxFeatureClass[key];
  }
}

const possibilities = new Set();

function works(featureClass, why = false) {
  return notSet.every((s) => {
    const feature = getFeature(s);
    const res = features.some(
      (f) => f in featureClass && feature[f] !== featureClass[f],
    );
    if (why && !res) console.log(s, feature);
    return res;
  });
}

function tryRemove(featureClass, keys) {
  if (keys.length === 0) return;
  const [key, ...rest] = keys;
  const { [key]: v, ...reducedClass } = featureClass;
  if (works(reducedClass)) {
    // TODO use records
    possibilities.add(JSON.stringify(reducedClass));
    tryRemove(reducedClass, rest);
  }
  tryRemove(featureClass, rest);
}

tryRemove(maxFeatureClass, Object.keys(maxFeatureClass));
console.log(
  [...possibilities]
    .map(JSON.parse)
    .sort((a, b) => Object.keys(a).length - Object.keys(b).length)
    .slice(0, 10)
    .map((p) =>
      Object.entries(p)
        .map(([k, v]) => (v ? `+${k}` : `-${k}`))
        .join(", "),
    ),
);
