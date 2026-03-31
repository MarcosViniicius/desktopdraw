import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { Excalidraw } from "./excalidraw/excalidraw";
import "./app.css";

function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white dark:bg-gray-950">
      {children}
    </div>
  );
}

startTransition(() => {
  // We hydrate the document to match the HTML structure generated during build
  hydrateRoot(
    document,
    <StrictMode>
      <StandardLayout>
        <Excalidraw />
      </StandardLayout>
    </StrictMode>
  );
});
