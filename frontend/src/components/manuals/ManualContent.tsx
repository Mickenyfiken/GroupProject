import { useMemo } from 'react'
import type { BaseManual } from '../../types/manualType'
import { ManualResourceType } from '../../types/manualType'
import { YouTubeEmbed } from '../../helpers/embededVideo'
import { PDFViewer } from '../../helpers/displayPdf'

const ManualContent = ({ data }: { data: BaseManual }) => {
  const { title, description, resources } = data

  const videos = resources.filter((r) => r.type === ManualResourceType.Video)
  const files = resources.filter((r) => r.type === ManualResourceType.File)

  // Remove when CORS is implemented in blob
  const random = useMemo(() => Math.floor(Math.random() * 5) + 1, [])

  return (
    <>
      <div>
        <h1 className="mt-6 text-2xl font-medium">{title}</h1>

        {description && <p className="mt-8 text-black/65 leading-relaxed">{description}</p>}

        {videos.length > 0 && (
          <div className="mt-8 flex flex-col gap-4">
            {videos.map((r) => (
              <YouTubeEmbed key={r.id} youtubeURL={r.url!} />
            ))}
          </div>
        )}

        {files.length > 0 && (
          <div className="mt-8 flex flex-col gap-4">
            {files.map((r) => (
              <PDFViewer key={r.id} pdfURL={`/TempPdfs/SportsonManual${random}.pdf`} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ManualContent
