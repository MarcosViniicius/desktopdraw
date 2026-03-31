import { useEffect, useState } from "react";
import "@excalidraw/excalidraw/index.css";

export function Excalidraw() {
  const [ExcalidrawComponent, setExcalidrawComponent] =
    useState<React.ComponentType | null>(null);

  useEffect(() => {
    let mounted = true;

    import("@excalidraw/excalidraw").then((module) => {
      if (mounted) {
        setExcalidrawComponent(() => module.Excalidraw);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main style={{}}>

      <div style={{ width: "100vw", height: "100vh" }}>
        {ExcalidrawComponent ? (
          <ExcalidrawComponent />
        ) : (
          <p style={{ textAlign: "center" }}>Loading Excalidraw...</p>
        )}
      </div>
    </main>
  );
}
