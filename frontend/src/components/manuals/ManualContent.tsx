import type { BaseManual } from '../../types/manualType'
import { ManualResourceType } from '../../types/manualType'
import { YouTubeEmbed } from '../../helpers/embededVideo'
import { PDFViewer } from '../../helpers/displayPdf'

// Remove when CORS is implemented in blob

const ManualContent = ({ data }: { data: BaseManual }) => {
  const { title, description, resources } = data

  const videos = resources.filter((r) => r.type === ManualResourceType.Video)
  const files = resources.filter((r) => r.type === ManualResourceType.File)

  return (
    <>
      <div>
        <h1 className="mt-6 text-2xl font-medium">{title}</h1>

        {description && <p className="mt-8 leading-relaxed text-black/65">{description}</p>}

        {videos.length > 0 && (
          <div className="flex flex-col gap-4 mt-8">
            {videos.map((r) => (
              <YouTubeEmbed key={r.id} youtubeURL={r.url!} />
            ))}
          </div>
        )}

        {files.length > 0 && (
          <div className="flex flex-col gap-4 mt-8">
            {files.map((r) => (
              <PDFViewer key={r.id} pdfURL={`/TempPdfs/SportsonManual${r.id}.pdf`} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ManualContent
