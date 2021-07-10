import Link from 'next/link'

const Heading = ({ title, level, article }) => {
  let elementTitle
  switch (level) {
    case 'l2':
      elementTitle = <h2>{title}</h2>
      break
    case 'l3':
      elementTitle = <h3>{title}</h3>
      break
    case 'l4':
      elementTitle = <h4>{title}</h4>
      break
    case 'l5':
      elementTitle = <h5>{title}</h5>
      break
    case 'l6':
      elementTitle = <h6>{title}</h6>
    default:
      elementTitle = <h1>{title}</h1>
      break
  }

  let content = elementTitle
  if (article) {
    const urlTitle = title.replace(/\s/g, '-')
    content = (
      <Link href='/article/[article]' as={`/article/${urlTitle}`}>
        <a>{elementTitle}</a>
      </Link>
    )
  }

  return content
}

export default Heading
