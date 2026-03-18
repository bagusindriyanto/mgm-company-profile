'use client';

import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="flex flex-col items-center justify-center grow text-center px-4">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'default' }),
          'group relative overflow-hidden rounded-full gap-3 p-2 pl-4',
        )}
      >
        Introducing Support for AI Models
        <Separator orientation="vertical" />
        <div className="bg-accent group-hover:bg-background size-6 overflow-hidden rounded-full duration-500">
          <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
            <ArrowRight className="size-6 p-1" />
            <ArrowRight className="size-6 p-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}
