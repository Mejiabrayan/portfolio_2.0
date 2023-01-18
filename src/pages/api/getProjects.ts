import type { NextApiRequest, NextApiResponse } from 'next';
import { groq} from 'next-sanity';
import { sanityClient } from '/sanity';
import { Projects } from 'typings';

const query = groq`
*[_type == "project"] {
    ...,
    technologies[]->,
}
`;

type Data = {
  projects: Projects[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Projects[] = await sanityClient.fetch(query);
console.log(projects)
  res.status(200).json({ projects });
}