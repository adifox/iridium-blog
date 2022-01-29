// Components
import Image from 'next/image'
import ImageWrapper from '../image-wrapper'

const Logo = () => {
  return (
    // <ImageWrapper
    //   src={'/images/white-logo.png'}
    //   alt='iridium blog logo'
    //   width={25}
    //   height={55}
    // />
    <Image
      src={'/images/white-logo.png'}
      alt='iridium blog logo'
      width={48}
      height={48}
      // layout='fill'
    />
  )
}

export default Logo
