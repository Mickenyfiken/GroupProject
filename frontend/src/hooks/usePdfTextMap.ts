import { useEffect, useState } from 'react'
import { ManualResourceType, type BaseManual, type ManualResource } from '../types/manualType'
import { extractPdfText } from '../helpers/pdfTextExtract'

export const usePdfTextMap = (manuals: BaseManual[] | undefined) => {
  const [pdfTextMap, setPdfTextMap] = useState<Map<number, string>>(new Map())

  useEffect(() => {
    if (!manuals || manuals.length === 0) return
    const buildMap = async () => {
      const entries = await Promise.all(
        manuals.map(async (manual) => {
          const fileResources = manual.resources.filter(
            (r: ManualResource) => r.type === ManualResourceType.File,
          )
          const results = await Promise.allSettled(
            fileResources.map((r: ManualResource) =>
              extractPdfText(`/TempPdfs/SportsonManual${r.manualId}.pdf`),
            ),
          )
          const text = results
            .filter((r): r is PromiseFulfilledResult<string> => r.status === 'fulfilled')
            .map((r) => r.value)
            .join(' ')
          return [manual.id, text] as const
        }),
      )
      setPdfTextMap(new Map(entries))
    }
    buildMap()
  }, [manuals])

  return pdfTextMap
}
