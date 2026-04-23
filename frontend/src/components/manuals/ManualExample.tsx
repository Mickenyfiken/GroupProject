import type { BaseManual } from '../../types/manualType'
import { ManualResourceType } from '../../types/manualType'
import { useAllManuals } from '../../hooks/manualHooks'
import { YouTubeEmbed } from '../../helpers/embededVideo'
import { PDFViewer } from '../../helpers/displayPdf'

export function ManualExample() {
  const { data, isLoading, isError } = useAllManuals(1)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Something went wrong</p>

  return (
    <ul>
      {data.map((manual: BaseManual) => (
        <li key={manual.id}>
          {manual.title}, {manual.description ?? ''}
          {manual.resources
            .filter((r) => r.type === ManualResourceType.Video)
            .map((r) => (
              <YouTubeEmbed key={r.id} youtubeURL={r.url!} />
            ))}
          {manual.resources
            .filter((r) => r.type === ManualResourceType.File)
            .map((r) => (
              <PDFViewer key={r.id} pdfURL={r.url ?? ''} />
            ))}
        </li>
      ))}
    </ul>
  )
}
