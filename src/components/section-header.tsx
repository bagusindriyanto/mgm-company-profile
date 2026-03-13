import { cn } from '@/lib/utils';
import AnimatedSection from './animated-section';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <AnimatedSection direction="up">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className={cn('mt-4 text-lg max-w-2xl', centered && 'mx-auto')}>
            {subtitle}
          </p>
        )}
        <div
          className={cn(
            'mt-4 h-1 w-20 bg-primary rounded-full',
            centered && 'mx-auto',
          )}
        />
      </AnimatedSection>
    </div>
  );
}
