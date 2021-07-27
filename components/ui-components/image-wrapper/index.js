import Image from 'next/image'

const ImageWrapper = ({ src, alt, width, height, layout }) => {
  return (
    <Image
      src={`https:${src}`}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
    />
  )
}

export default ImageWrapper
