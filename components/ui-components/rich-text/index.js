import { renderRichtext } from '../../../utils/storyblok'

const RichText = ({ content }) => {
  const HTML = renderRichtext(content)
  return <div dangerouslySetInnerHTML={HTML} />
}

export default RichText
