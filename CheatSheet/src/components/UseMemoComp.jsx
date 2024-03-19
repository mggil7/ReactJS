import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  );
}

export default Post