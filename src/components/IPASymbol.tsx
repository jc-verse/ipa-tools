import clsx from "clsx";
import styles from "./IPASymbol.module.css";

export default function IPASymbol({ symbol }: { symbol: string }): JSX.Element {
  return <span className={clsx("ipa", styles.symbol)}>{symbol}</span>;
}
