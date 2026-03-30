import { ProgramCarousel } from '@/components/reui/carousel-pattern';
import { programs } from '@/constants/programs';
import { notFound } from 'next/navigation';

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

  return (
    <div className="flex flex-col pb-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold">{program.title}</h1>
        {program.images && <ProgramCarousel images={program.images} />}
      </div>
    </div>
  );
};

export default ProgramDetailPage;
