import type { Route } from "./+types/home";
import { Excalidraw } from "../excalidraw/excalidraw";

export function meta({}: Route.MetaArgs) {
}

export default function Home() {
  return <Excalidraw />;
}
