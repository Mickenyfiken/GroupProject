import { pdfjs } from 'react-pdf'
import type { TextItem } from 'pdfjs-dist/types/src/display/api'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export const extractPdfText = async (pdfURL: string): Promise<string> => {
  const pdf = await pdfjs.getDocument(pdfURL).promise
  const pageTexts: string[] = []
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    const pageText = content.items
      .map((item) => ('str' in item ? (item as TextItem).str : ''))
      .join(' ')
    pageTexts.push(pageText)
  }
  return pageTexts.join(' ')
}
