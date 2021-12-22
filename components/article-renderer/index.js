import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

// Components
import Heading from '../ui-components/heading'
import RichText from '../ui-components/rich-text'
import Tag from '../ui-components/tag'
import DateTag from '../ui-components/date-tag'

// Styles
import styles from './articleRenderer.module.css'

const {
  mainWrapper,
  contentWrapper,
  titleStyles,
  articleInfoBox,
  articleBodyStyles,
  subTitle,
  metaBox,
  imageBox,
  svgStyle,
  svgWrapper,
  svgAnimation,
  timeToRead,
} = styles

const ArticleRenderer = ({ article }) => {
  // console.log('THE ARTICLE:', article)
  const {
    content: { image, intro, title, bodyText },
    tag_list,
    first_published_at,
  } = article.story

  let articleBody = bodyText ? <RichText content={bodyText} /> : null
  let articleTags =
    tag_list.length > 0
      ? tag_list.map((tag, i) => {
          const CustomButton = styled(Button)({
            color: 'white',
            backgroundColor: '#efd81d',
            marginLeft: '5px',
            '&:hover': {
              backgroundColor: '#edc31e',
            },
          })
          return (
            <CustomButton variant='contained' key={i}>
              {tag}
            </CustomButton>
          )
        })
      : null

  return (
    <div className={mainWrapper}>
      <div className={contentWrapper}>
        <div className={metaBox}>
          <div className={svgWrapper}>
            <Link href='/articles'>
              <a style={{ display: 'flex', alignItems: 'center' }}>
                <span className={svgAnimation}>
                  <svg
                    className={svgStyle}
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z'
                      fill='black'
                    ></path>
                  </svg>
                </span>
                <span
                  style={{
                    marginLeft: '10px',
                    fontWeight: '500',
                    fontSize: '18px',
                    lineHeight: '28px',
                  }}
                >
                  Back to overview
                </span>
              </a>
            </Link>
          </div>
          <Heading title={title} />
          <Heading title={intro} level={'l2'} className={subTitle} />
          <div className={articleInfoBox}></div>
        </div>
        <div className={imageBox}>
          <Image
            src={`https:${image}`}
            alt='code with iridium-blog'
            width={1200}
            height={600}
          />
        </div>
        <div>Image Source</div>
        <div className={articleBodyStyles}>
          <div className={timeToRead}>
            <DateTag date={first_published_at} />
            <div style={{ display: 'flex' }}>{articleTags}</div>
          </div>
          {articleBody}
        </div>
      </div>
    </div>
  )
}

export default ArticleRenderer
