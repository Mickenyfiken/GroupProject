export const YouTubeEmbed = ({ youtubeURL }: { youtubeURL: string }) => {
  const videoId = new URL(youtubeURL).searchParams.get('v')

  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
