import clsx from "clsx";
import IPASymbol from "../IPASymbol";
import styles from "./OtherSymbolsChart.module.css";
import sharedStyles from "./ChartsShared.module.css";

export default function OtherSymbolsChart(): JSX.Element {
  return (
    <div className={styles.otherSymbols}>
      <table className={clsx(sharedStyles.table)}>
        <caption>Other symbols</caption>
        <tbody>
          <tr>
            <td>
              <IPASymbol symbol="ʍ" />
            </td>
            <td>Voiceless labial-velar fricative</td>
            <td>
              <IPASymbol symbol="ɕ" />
            </td>
            <td>
              <IPASymbol symbol="ʑ" />
            </td>
            <td>Alveolo-palatal fricative</td>
          </tr>
          <tr>
            <td>
              <IPASymbol symbol="w" />
            </td>
            <td>Voiced labial-velar approximant</td>
            <td />
            <td>
              <IPASymbol symbol="ɺ" />
            </td>
            <td>Voiced alveolar lateral flap</td>
          </tr>
          <tr>
            <td>
              <IPASymbol symbol="ɥ" />
            </td>
            <td>Voiced labial-palatal approximant</td>
            <td>
              <IPASymbol symbol="ɧ" />
            </td>
            <td />
            <td>
              Simultaneous <IPASymbol symbol="ʃ" /> and <IPASymbol symbol="x" />
            </td>
          </tr>
          <tr>
            <td>
              <IPASymbol symbol="ʜ" />
            </td>
            <td>Voiceless epiglottal fricative</td>
            <td rowSpan={3} colSpan={3} style={{ maxWidth: "3em" }}>
              Affricates and double articulations can be represented by two
              symbols joined by a tie bar if necessary.
              <IPASymbol symbol="t͜s" />
              <IPASymbol symbol="k͡p" />
            </td>
          </tr>
          <tr>
            <td>
              <IPASymbol symbol="ʢ" />
            </td>
            <td>Voiced epiglottal fricative</td>
          </tr>
          <tr>
            <td>
              <IPASymbol symbol="ʡ" />
            </td>
            <td>Epiglottal plosive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
