import React from "react";
import clsx from "clsx";
import IPASymbol from "../IPASymbol";
import styles from "./DiacriticsChart.module.css";
import sharedStyles from "./ChartsShared.module.css";

const rows = [
  [
    ["◌̥", "Voiceless", ["n̥", "d̥"]],
    ["◌̤", "Breathy voiced", ["b̤", "a̤"]],
    ["◌̪", "Dental", ["t̪", "d̪"]],
  ],
  [
    ["◌̬", "Voiced", ["s̬", "t̬"]],
    ["◌̰", "Creaky voiced", ["b̰", "a̰"]],
    ["◌̺", "Apical", ["t̺", "d̺"]],
  ],
  [
    ["◌ʰ", "Aspirated", ["tʰ", "dʰ"]],
    ["◌̼", "Linguolabial", ["t̼", "a̼"]],
    ["◌̻", "Laminal", ["t̻", "d̻"]],
  ],
  [
    ["◌̹", "More rounded", ["ɔ̹"]],
    ["◌ʷ", "Labialized", ["tʷ", "dʷ"]],
    ["◌̃", "Nasalized", ["ẽ"]],
  ],
  [
    ["◌̜", "Less rounded", ["ɔ̜"]],
    ["◌ʲ", "Palatalized", ["tʲ", "dʲ"]],
    ["◌ⁿ", "Nasal release", ["dⁿ"]],
  ],
  [
    ["◌̟", "Advanced", ["u̟"]],
    ["◌ˠ", "Velarized", ["tˠ", "dˠ"]],
    ["◌ˡ", "Lateral release", ["dˡ"]],
  ],
  [
    ["◌̠", "Retracted", ["e̠"]],
    ["◌ˤ", "Pharyngealized", ["tˤ", "dˤ"]],
    ["◌̚", "No audible release", ["d̚"]],
  ],
] as const;

export default function DiacriticsChart(): JSX.Element {
  return (
    <div className={styles.diacritics}>
      <table className={clsx(sharedStyles.table, sharedStyles.borderedTable)}>
        <caption>Diacritics</caption>
        <tbody>
          {rows.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              {row.map(([symbol, description, examples]) => (
                <React.Fragment key={symbol}>
                  <td>
                    <IPASymbol symbol={symbol} />
                  </td>
                  <td>{description}</td>
                  <td>
                    {examples.map((example) => (
                      <span
                        className={clsx("ipa", styles.example)}
                        key={example}>
                        {example}
                      </span>
                    ))}
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
          <tr>
            <td>
              <IPASymbol symbol="◌̈" />
            </td>
            <td>Centralized</td>
            <td>
              <span className="ipa">ë</span>
            </td>
            <td>
              <IPASymbol symbol="~" />
            </td>
            <td colSpan={2}>Velarized or pharyngealized</td>
            <td colSpan={3}>
              <span className="ipa">ɫ</span>
            </td>
          </tr>
          <tr>
            <td>
              <IPASymbol symbol="◌̽" />
            </td>
            <td>Mid-centralized</td>
            <td>
              <span className="ipa">e̽</span>
            </td>
            <td>
              <IPASymbol symbol="◌̝" />
            </td>
            <td>Raised</td>
            <td colSpan={4}>
              <span className="ipa">e̝</span>&nbsp;&nbsp;&nbsp;(
              <span className="ipa">ɹ̝</span> = voiced alveolar fricative)
            </td>
          </tr>
          <tr>
            <td>
              <IPASymbol symbol="◌̩" />
            </td>
            <td>Syllabic</td>
            <td>
              <span className="ipa">n̩</span>
            </td>
            <td>
              <IPASymbol symbol="◌̞" />
            </td>
            <td>Lowered</td>
            <td colSpan={4}>
              <span className="ipa">e̞</span>&nbsp;&nbsp;&nbsp;(
              <span className="ipa">β̞</span> = voiced bilabial approximant)
            </td>
          </tr>
          <tr>
            <td>
              <IPASymbol symbol="◌̯" />
            </td>
            <td>Non-syllabic</td>
            <td>
              <span className="ipa">e̯</span>
            </td>
            <td>
              <IPASymbol symbol="◌̘" />
            </td>
            <td colSpan={2}>Advanced tongue root</td>
            <td colSpan={3}>
              <span className="ipa">e̘</span>
            </td>
          </tr>
          <tr>
            <td>
              <IPASymbol symbol="◌˞" />
            </td>
            <td>Rhoticity</td>
            <td>
              <span className={clsx("ipa", styles.example)}>ə˞</span>
              <span className={clsx("ipa", styles.example)}>a˞</span>
            </td>
            <td>
              <IPASymbol symbol="◌̙" />
            </td>
            <td colSpan={2}>Retracted tongue root</td>
            <td colSpan={3}>
              <span className="ipa">e̙</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Some diacritics may be placed above a symbol with a descender, e.g.{" "}
        <span className="ipa">ŋ̊</span>
      </p>
    </div>
  );
}
