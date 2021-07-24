import Feature from '../../storyblok-components/Feature'
import Grid from '../../storyblok-components/Grid'
import Placeholder from '../placeholder'

const Components = {
  feature: Feature,
  grid: Grid,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  // return <Placeholder componentName={blok.component} />
  return null
}

export default DynamicComponent
