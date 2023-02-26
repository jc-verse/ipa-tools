import ConsonantsChart from "./charts/ConsonantsChart";
import OtherConsonantsChart from "./charts/OtherConsonantsChart";
import VowelsChart from "./charts/VowelsChart";
import OtherSymbolsChart from "./charts/OtherSymbolsChart";
import SuprasegmentalsChart from "./charts/SuprasegmentalsChart";
import DiacriticsChart from "./charts/DiacriticsChart";
import TonesChart from "./charts/TonesChart";

export default function IPAChart(): JSX.Element {
  return (
    <div>
      <ConsonantsChart />
      <div style={{ display: "flex", flexDirection: "row", gap: "2em" }}>
        <OtherConsonantsChart />
        <VowelsChart />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "4em" }}>
        <OtherSymbolsChart />
        <SuprasegmentalsChart />
      </div>
      <DiacriticsChart />
      <TonesChart />
    </div>
  );
}
