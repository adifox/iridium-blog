import SbEditable from 'storyblok-react'
import Heading from '../ui-components/heading'

const Feature = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <Heading title={blok.name} level={'l2'} />
    </SbEditable>
  )
}

export default Feature
