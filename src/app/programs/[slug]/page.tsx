import { ProgramDetailClient } from './program-detail-client';
import { programs } from '@/constants/programs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) return {};

  return {
    title: `${program.title} | MGM Programs`,
    description:
      program.paragraph?.slice(0, 160) ??
      `Learn more about ${program.title} at Mercindo Global Manufaktur.`,
  };
}

const ProgramDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const program = programs.find((program) => program.slug === slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailClient program={program} />;
};

export default ProgramDetailPage;
