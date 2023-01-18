import {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity'
import {sanityClient} from '/sanity'
import {Social} from 'typings'

const query = groq`
*[_type == "social"][0]
`

type Data = {
    socials: Social[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const socials: Social[] = await sanityClient.fetch(query);
    console.log(socials)
    res.status(200).json({socials});
}

