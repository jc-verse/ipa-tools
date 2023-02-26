import { data } from "./data.js";

const features =
  "syl,son,cons,cont,del.rel,nas,lat,s.g.,c.g.,voi,cor,ant,distr,high,low,back,round,tense".split(
    ",",
  );

function getFeatures(s) {
  return Object.fromEntries(features.map((f) => [f, s[f]]));
}

const [sounds, diacritics] = data.reduce(
  (acc, s) =>
    s.Type === "sound"
      ? (acc[0].set(s.Symbol, getFeatures(s)), acc)
      : s.Type === "diacritic"
      ? (acc[1].set(s.Symbol.replace("◌", ""), getFeatures(s)), acc)
      : acc,
  /** @type {[Map<string, Sound>, Map<string, Sound>]} */ ([
    new Map(),
    new Map(),
  ]),
);

const cache = new Map();

/**
 * @param {string} symbol
 */
export function getFeature(symbol) {
  if (cache.has(symbol)) return cache.get(symbol);
  // TODO stop hardcoding digraphs
  const [, s, d] = symbol.match(/^(?<sound>tʃ|dʒ|.)(?<diacritics>.*)$/);
  const feature = { ...sounds.get(s) };
  for (const diacritic of d) {
    const f = diacritics.get(diacritic);
    for (const key of features) if (f[key]) feature[key] = f[key];
  }
  cache.set(symbol, feature);
  return feature;
}
