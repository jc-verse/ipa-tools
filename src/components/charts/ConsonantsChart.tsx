import clsx from "clsx";
import IPASymbol from "../IPASymbol";
import styles from "./ConsonantsChart.module.css";
import sharedStyles from "./ChartsShared.module.css";

const headers = [
  "Bilabial",
  "Labiodental",
  "Dental",
  "Alveolar",
  "Postalveolar",
  "Retroflex",
  "Palatal",
  "Velar",
  "Uvular",
  "Pharyngeal",
  "Glottal",
] as const;
const rows = [
  // cSpell:ignore ʈɖcɟkɡqɢ
  ["Plosive", "pb    td  ʈɖcɟkɡqɢ /ʔ/"],
  ["Nasal", " m ɱ   n   ɳ ɲ ŋ ɴ////"],
  ["Trill", " ʙ     r      // ʀ  //"],
  ["Tap or Flap", "   ⱱ   ɾ   ɽ  //    //"],
  // cSpell:ignore ɸβfvθðszʃʒʂʐçʝxɣχʁħʕhɦ
  ["Fricative", "ɸβfvθðszʃʒʂʐçʝxɣχʁħʕhɦ"],
  ["Lateral fricative", "////  ɬɮ          ////"],
  ["Approximant", "   ʋ   ɹ   ɻ j ɰ    //"],
  ["Lateral approximant", "////   l   ɭ ʎ ʟ  ////"],
] as const;

function ConsonantRow({ name, row }: { name: string; row: string }) {
  const symbols = [...row];
  return (
    <tr>
      <th scope="row">{name}</th>
      {symbols.map((symbol, i) => (
        <td
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className={clsx(
            i % 2 === 0 ? styles.voiceless : styles.voiced,
            symbol === "/" && styles.impossible,
            [5, 6, 7, 8].includes(i) &&
              [symbols[i - 1], symbols[i], symbols[i + 1]].includes(" ") &&
              styles.merge,
          )}>
          {[" ", "/"].includes(symbol) ? null : <IPASymbol symbol={symbol} />}
        </td>
      ))}
    </tr>
  );
}

export default function ConsonantChart(): JSX.Element {
  return (
    <div className={styles.consonants}>
      <table className={clsx(sharedStyles.table, sharedStyles.borderedTable)}>
        <caption>Consonants (pulmonic)</caption>
        <thead>
          <tr>
            <td />
            {headers.map((name) => (
              <th key={name} scope="col" colSpan={2}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, row]) => (
            <ConsonantRow key={name} name={name} row={row} />
          ))}
        </tbody>
      </table>
      <p>
        Symbols to the right in a cell are voiced, to the left are voiceless.
        Shaded areas denote articulations judged impossible.
      </p>
    </div>
  );
}
