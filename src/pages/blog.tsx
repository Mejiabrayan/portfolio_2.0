import Head from 'next/head'
import { useRouter } from 'next/router';
import Container from 'components/Container';

export default function Blog() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{`Upcoming Blog | Brayan Mejia Cuenca`}</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta content={`Stay tune for my upcoming blog where I share my thoughts on software engineering, web development and everything in between`} name="description" />
                <meta property="og:url" content={`https://brayan.me${router.asPath}`} />
                <link rel="canonical" href={`https://brayan.me${router.asPath}`} />
            </Head>
            <Container>
                <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 ">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                            Blog Coming Soon <div className="inline-block animate-bounce">🚀</div>
                        </h1>
                </div>
            </Container>
        </>
    )
}
