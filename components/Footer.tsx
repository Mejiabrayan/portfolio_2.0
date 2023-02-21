import { ReactNode } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

interface Props {
    href: string;
    children: ReactNode;
}

const ExternalLink = ({ href, children }: Props) => {
    if (href.startsWith('mailto:')) {
        return (
            <a
                className="text-gray-500 hover:text-gray-600 transition"
                href={href}
                rel="noopener noreferrer"
                target="_blank"
            >
                {children}
            </a>
        );
    } else {
        return (
            <a
                className="text-gray-500 hover:text-gray-600 transition"
                href={`mailto:${href}`}
                rel="noopener noreferrer"
                target="_blank"
            >
                {children}
            </a>
        );
    }
};

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center max-w-2xl mx-auto w-full mt-20 mb-8">
            <hr className="w-full border-gray-200 dark:border-gray-800 mb-8" />
            {/* Add PLayer here; maybe not */}
            <div className="w-full max-w-xl grid grid-cols-3 justify-items-center pb-16">
                <ExternalLink href="https://github.com/Mejiabrayan">
                    <AiFillGithub size="1.5em" className="mx-4" />
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/brayan-mejia/">
                    <AiFillLinkedin size="1.5em" className="mx-4" />
                </ExternalLink>
                <ExternalLink href="example@example.com">
                    <AiOutlineMail size="1.5em" className="mx-4" />
                </ExternalLink>
            </div>
        </footer>
    );
}
