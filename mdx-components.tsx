import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 text-2xl font-semibold tracking-tight border-b pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 text-xl font-semibold">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-muted-foreground">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-1 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-1 text-muted-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-4 border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-border" />,
    a: ({ href, children }) => (
      <a
        href={href}
        className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
      >
        {children}
      </a>
    ),
    table: ({ children }) => (
      <div className="mb-4 overflow-x-auto">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-medium">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border-b px-4 py-2">{children}</td>
    ),
  };
}
