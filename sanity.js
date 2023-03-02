import { createClient } from 'next-sanity'
// import {createCurrentUserHook} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const token = process.env.SANITY_API_TOKEN

export const config = {
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  token,
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
}

export const sanityClient = createClient(config)

export const urlFor = source => createImageUrlBuilder(config).image(source)

// export const useCurrentUser = createCurrentUserHook({ projectId })

// const data = await client.fetch(groq`*[]`)
