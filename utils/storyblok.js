import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export const getCacheVersion = async () => {
  return Storyblok.get('cdn/spaces/me', {})
}

export const getStoryblokData = async (url, options) => {
  const cacheVersion = await getCacheVersion()
  const additionalFetchParams = {
    ...options,
    cv: cacheVersion.data.space.version,
    version: process.env.STORYBLOK_VERSION,
  }
  const data = await Storyblok.get(url, additionalFetchParams)
  return data
}

export const renderRichtext = (content) => {
  return {
    __html: Storyblok.richTextResolver.render(content),
  }
}
