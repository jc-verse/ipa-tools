import IPASymbol from "../IPASymbol";
import styles from "./SuprasegmentalsChart.module.css";
import sharedStyles from "./ChartsShared.module.css";

const rows = [
  // cSpell:ignore ˌfoʊnəˈtɪʃən
  ["ˈ", "Primary stress", "ˌfoʊnəˈtɪʃən"],
  ["ˌ", "Secondary stress"],
  ["◌ː", "Long", "eː"],
  ["◌ˑ", "Half long", "eˑ"],
  ["◌̆", "Extra short", "ĕ"],
  ["|", "Minor (foot) group", ""],
  ["‖", "Major (intonation) group", ""],
  [".", "Syllable break", "ɹi.ækt"],
  ["‿", "Linking (absence of a break)", ""],
] as const;

export default function SuprasegmentalsChart(): JSX.Element {
  return (
    <div className={styles.suprasegmentals}>
      <table className={sharedStyles.table}>
        <caption>Suprasegmentals</caption>
        <tbody>
          {rows.map(([symbol, description, example], i) => (
            <tr key={symbol}>
              <td>
                <IPASymbol symbol={symbol} />
              </td>
              <td>{description}</td>
              <td {...(i === 0 ? { rowSpan: 2 } : {})}>
                {example && <span className="ipa">{example}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
