import SbEditable from 'storyblok-react'
import DynamicComponent from '../ui-components/dynamic-component'

const Grid = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <ul>
        {blok.columns.map((nestedBlok) => (
          <li key={nestedBlok._uid}>
            <DynamicComponent blok={nestedBlok} />
          </li>
        ))}
      </ul>
    </SbEditable>
  )
}

export default Grid
