import { useEffect, useState } from 'react'
import type { BaseManual } from '../../types/manualType'
import { getAllManuals } from '../../api/manualApi'

export function ManualList() {
  const [manuals, setManuals] = useState<BaseManual[]>([])

  useEffect(() => {
    const fetchManuals = async () => {
      const data = await getAllManuals()
      setManuals(data)
    }
    fetchManuals()
  }, [])

  return (
    <ul>
      {manuals.map((manual) => (
        <li key={manual.Id}>
          {manual.Title}, {manual.YoutubeVideoURLs?.length ?? 0} videos,{' '}
          {manual.PdfURLs?.length ?? 0} pdfs, {manual.OtherResourceURLs?.length ?? 0} other
          resources
        </li>
      ))}
    </ul>
  )
}
