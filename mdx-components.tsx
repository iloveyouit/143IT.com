import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 mt-12 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 mt-10 gradient-text">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-heading font-bold mb-3 mt-8 text-accent-1">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-heading font-bold mb-2 mt-6">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-text/80 mb-6 leading-relaxed text-lg">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href as string}
        className="text-accent-1 hover:text-ctaHover underline transition-colors"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-text/80">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-text/80">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-lg leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-1 pl-6 py-2 my-6 italic text-text/70 bg-accent-1/5 rounded-r-lg">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-accent-1/10 text-accent-1 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-background border border-accent-1/20 rounded-xl p-6 mb-6 overflow-x-auto">
        {children}
      </pre>
    ),
    hr: () => (
      <hr className="border-accent-1/20 my-12" />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-accent-1/20">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-accent-1/20 bg-accent-1/10 px-4 py-2 text-left font-heading">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-accent-1/20 px-4 py-2 text-text/80">
        {children}
      </td>
    ),
    ...components,
  };
}
