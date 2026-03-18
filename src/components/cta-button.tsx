import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTAButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-2.5 pl-4',
        'bg-primary text-primary-foreground text-sm font-medium font-heading tracking-wide',
        'transition-all duration-300 hover:shadow-md hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]',
      )}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 from-transparent to-transparent transition-transform duration-700 -translate-x-full group-hover:translate-x-full bg-linear-to-r via-white/20" />
      <span className="relative">{label}</span>
      <div className="overflow-hidden rounded-full duration-500 bg-background size-6">
        <div className="flex w-12 duration-500 ease-in-out -translate-x-1/2 group-hover:translate-x-0 text-primary">
          <ArrowRight className="p-1 size-6" />
          <ArrowRight className="p-1 size-6" />
        </div>
      </div>
    </Link>
  );
}
