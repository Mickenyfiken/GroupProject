import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export const PDFViewer = ({ pdfURL }: { pdfURL: string }) => {
  const [numPages, setNumPages] = useState<number>(1)
  const [pageNumber, setPageNumber] = useState(1)

  return (
    <div>
      <Document file={pdfURL} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={() => setPageNumber((p) => p - 1)} disabled={pageNumber <= 1}>
        Prev
      </button>
      <button onClick={() => setPageNumber((p) => p + 1)} disabled={pageNumber >= numPages}>
        Next
      </button>
    </div>
  )
}
