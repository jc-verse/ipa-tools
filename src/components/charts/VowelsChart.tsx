import IPASymbol from "../IPASymbol";
import styles from "./VowelsChart.module.css";
import sharedStyles from "./ChartsShared.module.css";

const headers = ["Front", "Central", "Back"] as const;
const rows = [
  ["Close", "iy", "ɨʉ", "ɯu"],
  ["", "ɪʏ", "", "ʊ"],
  ["Close-mid", "eø", "ɘɵ", "ɤo"],
  ["", "", "ə", ""],
  ["Open-mid", "ɛœ", "ɜɞ", "ʌɔ"],
  ["", "æ", "ɐ", ""],
  ["Open", "aɶ", "", "ɑɒ"],
] as const;

function VowelPair({ vowels }: { vowels: string }) {
  const [vowel1, vowel2] = vowels;
  if (!vowel1) return null;
  if (!vowel2) return <IPASymbol symbol={vowel1} />;
  return (
    <>
      <IPASymbol symbol={vowel1} />
      <span>●</span>
      <IPASymbol symbol={vowel2} />
    </>
  );
}

export default function VowelsChart(): JSX.Element {
  return (
    <div className={styles.vowels}>
      <div style={{ position: "relative" }}>
        <svg
          viewBox="0 0 200 165"
          style={{
            position: "absolute",
            height: "100%",
            left: 0,
            top: 0,
            zIndex: -1,
          }}>
          <path
            d={`M 73,43 l 33,116
                M 127,43 l 6.6,51 m 1.55,12 l 3.36,26 m 1.55,12 l 1.81,14
                M 181,43 l 0,116
                M 89,43 h 23 m 33,0 h 21
                M 100,82 h 16 m 33,0 h 17
                M 110,120 h 13 m 31,0 h 13
                M 123,158 h 44`.replace(/\n +/g, " ")}
            stroke="gray"
            fill="none"
            strokeWidth={0.5}
          />
        </svg>
        <table className={sharedStyles.table}>
          <caption>Vowels</caption>
          <thead>
            <tr>
              <td />
              {headers.map((name) => (
                <th key={name} scope="col">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, ...vowels]) => (
              <tr key={name}>
                <th scope="row">{name}</th>
                {vowels.map((vowelPair) => (
                  <td key={vowelPair}>
                    <VowelPair vowels={vowelPair} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Where symbols appear in pairs, the one to the right represents a rounded
        vowel.
      </p>
    </div>
  );
}
