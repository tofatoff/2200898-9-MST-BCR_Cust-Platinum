import { Viewer, Worker } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "./mou.pdf";

const WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js";

const PdfViewer = () => {
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;

  return (
    <Worker workerUrl={WORKER_URL}>
      <div
        style={{
          border: "1px solid rgba(0,0,0,0.3)",
          height: 750,
        }}
      >
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#eeeeee",
            borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
            display: "flex",
            padding: "4px",
          }}
        >
          <DownloadButton />
        </div>

        <Viewer plugins={[getFilePluginInstance]} fileUrl={pdf} />
      </div>
    </Worker>
  );
};

export default PdfViewer;
