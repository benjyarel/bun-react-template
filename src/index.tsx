import { createRoot } from "react-dom/client";
import { Example } from "./Example";

const root = createRoot(document.getElementById("root"));

root.render(<Example message="Long live to Bun" />);
