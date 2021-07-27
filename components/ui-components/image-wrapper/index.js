import Image from 'next/image'

const ImageWrapper = ({
  src,
  alt,
  width,
  height,
  layout,
  external,
  priority,
}) => {
  let imageSrc = src
  if (external) {
    imageSrc = `https:${src}`
  }
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      priority={priority}
    />
  )
}

export default ImageWrapper
