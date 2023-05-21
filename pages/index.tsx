import Image from 'next/image';
import { InferGetServerSidePropsType } from 'next';
import { Inter } from 'next/font/google';
import path from 'path';
import fs from 'fs';
import { loadMDX } from '@/utils/loadMDX';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { Experience } from '@/components/Experience';
import { Spacer } from '@/components/Spacer';
import { NameIntro } from '@/components/NameIntro';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  const file = path.resolve(process.cwd(), 'content', 'home.mdx');
  const source = fs.readFileSync(file, 'utf-8');

  const { code } = await loadMDX(source);
  return { props: { code } };
}

const MDXComponent = { Experience, NameIntro, Spacer };

export default function Home({
  code,
}: Awaited<ReturnType<typeof getStaticProps>>['props']) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <article className="max-w-[75ch] mx-auto pt-12 pb-28 px-5">
      <Component components={MDXComponent} />
    </article>
  );
}
