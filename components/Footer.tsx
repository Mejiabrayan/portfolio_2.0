import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
    <a
        className="text-gray-500 hover:text-gray-600 transition"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
    >
        {children}
    </a>

)


export default function Footer() {
    return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
        <hr className="w-full border-gray-200 dark:border-gray-800 mb-8" />
        {/* Add PLayer here; maybe not */}
        <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
            <Link
                href="/"
                className='text-gray-500 hover:text-gray-600 transition'
            >
                Home
            </Link>
            <Link
                href="/contact"
                className='text-gray-500 hover:text-gray-600 transition'
            >
             Contact
            </Link>
       
            <ExternalLink href="/">
                LinkedIn
            </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
            <ExternalLink href="/">
                Github
            </ExternalLink>
            <ExternalLink href="/">
                Youtube
            </ExternalLink>
        </div>
    </footer>
    )
}