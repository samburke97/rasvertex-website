import ExpandingPanels from "./components/homepage/Expandingpanels";
import { mainPanels } from "./data/expandingPanelsData";

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <ExpandingPanels
        panels={mainPanels}
        defaultActivePanel="higher-standards"
      />
    </div>
  );
}
