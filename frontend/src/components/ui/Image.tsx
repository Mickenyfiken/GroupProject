import { type ImgHTMLAttributes, type SourceHTMLAttributes } from 'react'

type ImageProps = {
  className?: string
  imageProps?: ImgHTMLAttributes<HTMLImageElement>
  sourceProps?: SourceHTMLAttributes<HTMLSourceElement>
}

const Image = ({ className, imageProps, sourceProps }: ImageProps) => {
  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <div className="absolute inset-0 bg-surface-gray" />

      <picture className="relative inset-0 flex items-center justify-center w-full h-full text-white">
        <source {...sourceProps} />
        <img {...imageProps} className="object-cover w-full h-full" />
      </picture>
    </div>
  )
}

export default Image
