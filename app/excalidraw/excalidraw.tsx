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
    <main className="h-screen w-screen overflow-hidden bg-white dark:bg-gray-950">
      <div className="w-full h-full">
        {ExcalidrawComponent ? (
          <ExcalidrawComponent />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4 mx-auto"></div>
              <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
                Iniciando DesktopDraw...
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
