import Link from 'next/link'

const Heading = ({ title, level, slug, className }) => {
  let elementTitle
  switch (level) {
    case 'l2':
      elementTitle = <h2 className={className}>{title}</h2>
      break
    case 'l3':
      elementTitle = <h3 className={className}>{title}</h3>
      break
    case 'l4':
      elementTitle = <h4 className={className}>{title}</h4>
      break
    case 'l5':
      elementTitle = <h5 className={className}>{title}</h5>
      break
    case 'l6':
      elementTitle = <h6 className={className}>{title}</h6>
    default:
      elementTitle = <h1 className={className}>{title}</h1>
      break
  }

  let content = elementTitle
  if (slug) {
    content = (
      <Link href='/articles/[article]' as={`/articles/${slug}`}>
        <a>{elementTitle}</a>
      </Link>
    )
  }

  return content
}

export default Heading
