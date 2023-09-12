import { createRoot } from "react-dom/client";
import { Example } from "./Example";

//@ts-ignore TO FIX: document is not typed by compilerOptions.lib even after DOM lib added
const root = createRoot(document.getElementById("root"));

root.render(<Example message="Long live to Bun" />);
