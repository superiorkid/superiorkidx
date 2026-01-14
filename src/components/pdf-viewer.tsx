import "@/lib/pdfjs";

import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { useCallback, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import "./pdf-viewer.css";

import type { PDFDocumentProxy } from "pdfjs-dist";

// const options = {
//   cMapUrl: "/cmaps/",
//   standardFontDataUrl: "/standard_fonts/",
//   wasmUrl: "/wasm/",
// };

const resizeObserverOptions = {};

const maxWidth = 800;

type PdfViewerProps = {
  pdfUrl: string;
};

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  console.log("pdfURL from react component", pdfUrl);

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <div className="Example__container">
        <div className="Example__container__document" ref={setContainerRef}>
          <Document
            file={pdfUrl}
            // @ts-expect-error - 00
            onLoadSuccess={onDocumentLoadSuccess}
            // options={options}
          >
            {Array.from(new Array(numPages), (_el, index) => (
              <Page
                scale={1.1}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={
                  containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
                }
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
