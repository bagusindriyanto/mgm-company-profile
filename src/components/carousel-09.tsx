'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';

const images = Array.from({ length: 17 }).map((_, i) => ({
  id: `image-${i + 1}`,
  src: `/product/${i + 1}.jpeg`,
  alt: `Product Gallery ${i + 1}`,
}));

export default function CarouselWithThumbs() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );

  React.useEffect(() => {
    if (!api || !thumbApi) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      const selected = api.selectedScrollSnap();
      setCurrent(selected + 1);
      thumbApi.scrollTo(selected);
    });
  }, [api, thumbApi]);

  const handleThumbClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div
      className="mx-auto max-w-sm"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => plugin.current.play()}
    >
      <Carousel
        className="w-full max-w-sm"
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <div className="p-1">
                <Card className="relative pt-0 mx-auto w-full max-w-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-contain relative z-20 p-4 w-full aspect-square"
                  />
                  <CardHeader>
                    <CardAction>
                      <Badge variant="secondary">Featured</Badge>
                    </CardAction>
                    <CardTitle>{image.alt}</CardTitle>
                    <CardDescription>
                      Some description about {image.alt}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        className="mt-4 w-full max-w-sm"
        setApi={setThumbApi}
        opts={{ containScroll: 'keepSnaps', dragFree: true, loop: true }}
      >
        <CarouselContent className="py-2">
          {images.map((image, index) => (
            <CarouselItem
              className={cn(
                'basis-1/4 transition-opacity',
                current === index + 1 ? 'opacity-100' : 'opacity-50',
              )}
              key={image.id}
              onClick={() => handleThumbClick(index)}
            >
              <img
                alt={image.alt}
                className="object-contain p-1 bg-white rounded-xl shadow-xs aspect-square hover:cursor-pointer"
                src={image.src}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
