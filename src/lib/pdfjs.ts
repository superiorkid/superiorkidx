import { pdfjs } from "react-pdf";

import workerSrc from "react-pdf/dist/pdf.worker.entry.js?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
