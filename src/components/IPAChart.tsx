import ConsonantsChart from "./charts/ConsonantsChart";
import OtherConsonantsChart from "./charts/OtherConsonantsChart";
import VowelsChart from "./charts/VowelsChart";
import OtherSymbolsChart from "./charts/OtherSymbolsChart";
import SuprasegmentalsChart from "./charts/SuprasegmentalsChart";
import DiacriticsChart from "./charts/DiacriticsChart";
import TonesChart from "./charts/TonesChart";
import styles from "./IPAChart.module.css";

const charts = [
  ConsonantsChart,
  OtherConsonantsChart,
  VowelsChart,
  OtherSymbolsChart,
  SuprasegmentalsChart,
  DiacriticsChart,
  TonesChart,
];

export default function IPAChart(): JSX.Element {
  return (
    <div className={styles.charts}>
      {charts.map((Chart, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className={styles.chartContainer}>
          <Chart />
        </div>
      ))}
    </div>
  );
}
