import React from "react";
import clsx from "clsx";
import IPASymbol from "../IPASymbol";
import styles from "./OtherConsonantsChart.module.css";
import sharedStyles from "./ChartsShared.module.css";

const headers = ["Clicks", "Voiced implosives", "Ejectives"] as const;
const data = [
  [
    ["ʘ", "Bilabial"],
    ["ɓ", "Bilabial"],
    ["◌ʼ", "Examples:"],
  ],
  [
    ["ǀ", "Dental"],
    ["ɗ", "Dental/alveolar"],
    ["pʼ", "Bilabial"],
  ],
  [
    ["ǃ", "(Post)alveolar"],
    ["ʄ", "Palatal"],
    ["tʼ", "Dental/alveolar"],
  ],
  [
    ["ǂ", "Palatoalveolar"],
    ["ɠ", "Velar"],
    ["kʼ", "Velar"],
  ],
  [
    ["ǂ", "Palatoalveolar"],
    ["ɠ", "Velar"],
    ["kʼ", "Velar"],
  ],
  [
    ["ǁ", "Alveolar lateral"],
    ["ʛ", "Uvular"],
    ["sʼ", "Alveolar fricative"],
  ],
] as const;

export default function OtherConsonantsChart(): JSX.Element {
  return (
    <div className={styles.otherConsonants}>
      <table className={clsx(sharedStyles.table, sharedStyles.borderedTable)}>
        <caption>Consonants (non-pulmonic)</caption>
        <thead>
          <tr>
            {headers.map((name) => (
              <th key={name} scope="col" colSpan={2}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              {row.map(([symbol, name]) => (
                <React.Fragment key={symbol}>
                  <td>
                    <IPASymbol symbol={symbol} />
                  </td>
                  <td>{name}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
