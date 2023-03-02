// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@sanity/client'
import { config } from '../../sanity'

const client = createClient(config)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  const { _id, name, email, comment } = JSON.parse(req.body)
  //   const result = client.create(req.body)
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ message: `Couldn't submit comment, ${error}` })
  }
  console.log('Comment submitted')
  res.status(200).json({ message: 'Comment submitted' })
}
