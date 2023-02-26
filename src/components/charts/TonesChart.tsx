import clsx from "clsx";
import IPASymbol from "../IPASymbol";
import styles from "./TonesChart.module.css";
import sharedStyles from "./ChartsShared.module.css";

const rows = [
  [["◌̋", "˥"], "Extra high", ["◌̌", "˩˥"], "Rising"],
  [["◌́", "˦"], "High", ["◌̂", "˥˩"], "Falling"],
  [["◌̄", "˧"], "Mid", ["◌᷄", "˧˥"], "High rising"],
  [["◌̀", "˨"], "Low", ["◌᷅", "˨˧"], "Low rising"],
  [["◌̏", "˩"], "Extra low", ["◌᷈", "˨˥˨"], "Rising-falling"],
  [["ꜜ"], "Downstep", ["↗"], "Global rise"],
  [["ꜛ"], "Upstep", ["↘"], "Global fall"],
] as const;

export default function TonesChart(): JSX.Element {
  return (
    <div className={styles.tones}>
      <table className={clsx(sharedStyles.table)}>
        <caption>Tones and word accents</caption>
        <thead>
          <tr>
            <th colSpan={2}>Level</th>
            <th colSpan={2}>Contour</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([symbols1, name1, symbols2, name2]) => (
            <tr key={symbols1[0]}>
              <td>
                {symbols1.map((s) => (
                  <IPASymbol key={s} symbol={s} />
                ))}
              </td>
              <td>{name1}</td>
              <td>
                {symbols2.map((s) => (
                  <IPASymbol key={s} symbol={s} />
                ))}
              </td>
              <td>{name2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
