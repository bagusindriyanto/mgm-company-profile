'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const products = [
  {
    title: 'Beach',
    subtitle: 'CLOSCA BOTTLE',
    price: '€ 39.90',
    desc: 'In 20 years, there could be more plastic in our oceans than fish.',
    subdesc:
      'Plastic pollution injures more than 100.000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.',
    image: '/images/products/1.jpeg',
    bgColor: 'bg-[#f3ede4]',
    archColor: 'bg-linear-to-b from-[#64C8C8] to-[#F1DEB9]',
  },
  {
    title: 'Savanna',
    subtitle: 'CLOSCA BOTTLE',
    price: '€ 39.90',
    desc: "The area affected by desertification is approx 11 times India's size.",
    subdesc:
      'Plastic pollution injures more than 100.000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.',
    image: '/images/products/2.jpeg',
    bgColor: 'bg-[#F3CE92]',
    archColor: 'bg-linear-to-b from-[#E7A553] to-[#7B5934]',
  },
  {
    title: 'Glacier',
    subtitle: 'CLOSCA BOTTLE',
    price: '€ 39.90',
    desc: 'Glaciers are melting at an unprecedented rate.',
    subdesc:
      'Sea levels are rising, threatening coastal communities and habitats. We need to act now.',
    image: '/images/products/3.jpeg',
    bgColor: 'bg-[#E6F0F2]',
    archColor: 'bg-linear-to-b from-[#A5D1D6] to-[#CBD8DB]',
  },
  {
    title: 'Midnight',
    subtitle: 'CLOSCA BOTTLE',
    price: '€ 39.90',
    desc: 'Protecting the wonders of the night sky.',
    subdesc:
      'Light pollution affects nocturnal ecosystems and our ability to observe the universe.',
    image: '/images/products/4.jpeg',
    bgColor: 'bg-[#EAEAEA]',
    archColor: 'bg-linear-to-b from-[#3A3A3A] to-[#8C8C8C]',
  },
];

export default function CloscaDemoPage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const activeProduct = products[current] || products[0];

  return (
    <div
      className={cn(
        'grow transition-colors duration-700 ease-in-out font-serif flex flex-col items-stretch overflow-hidden',
        activeProduct.bgColor,
      )}
    >
      {/* Main Content */}
      <main className="flex-1 relative flex items-center min-h-[800px]">
        <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row relative z-10 h-full">
          {/* Left Content - Text */}
          <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center gap-6 z-20 py-20 md:py-0">
            <div
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans tracking text-xs text-black/60 uppercase transition-all"
              key={`sub-${current}`}
            >
              {activeProduct.subtitle}
            </div>

            <div
              className="animate-in fade-in slide-in-from-left-8 zoom-in-95 duration-700 transition-all"
              key={`title-${current}`}
            >
              <h1
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 text-[#2C2C2A]"
                style={{
                  fontFamily:
                    "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
                }}
              >
                {activeProduct.title}
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#2C2C2A]/80 font-serif pb-4">
                {activeProduct.price}
              </p>
            </div>

            <div
              className="mt-8 md:mt-16 lg:mt-24 space-y-6 max-w-sm lg:max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 transition-all"
              key={`desc-${current}`}
            >
              <p className="text-xl md:text-2xl lg:text-[28px] italic font-serif leading-tight text-[#2C2C2A]">
                {activeProduct.desc}
              </p>
              <p className="text-sm md:text-base font-sans text-[#2C2C2A]/70 leading-relaxed max-w-[90%] ">
                {activeProduct.subdesc}
              </p>

              <div className="pt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-widest font-sans hover:gap-6 text-[#2C2C2A] transition-all"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="w-full md:w-[55%] lg:w-[60%] relative h-[50vh] md:h-auto flex items-center md:items-stretch justify-end md:-mr-12 lg:-mr-24 pb-12 md:pb-0">
            {/* Slide Counter - Top Right */}
            <div className="absolute top-0 right-0 md:top-12 md:right-12 font-sans  text-sm tracking-widest z-50 text-black">
              0{current + 1} / 0{count || products.length}
            </div>

            <Carousel
              setApi={setApi}
              opts={{ align: 'start', loop: false }}
              className="w-full h-full lg:w-[130%]"
            >
              <CarouselContent className="h-full items-center ml-0">
                {products.map((product, index) => {
                  const isActive = current === index;
                  const isNext = current + 1 === index;

                  return (
                    <CarouselItem
                      key={index}
                      className="pl-0 md:pl-8 basis-[70%] md:basis-[60%] lg:basis-[50%] transition-all duration-700 flex justify-center items-center h-full"
                    >
                      <div
                        className={cn(
                          'relative w-full h-[350px] md:h-[550px] lg:h-[700px] flex items-center justify-center transition-all duration-1000 origin-center',
                          isActive
                            ? 'scale-100 opacity-100'
                            : isNext
                              ? 'scale-90 opacity-100 translate-x-12 cursor-pointer grayscale-50'
                              : 'scale-75 opacity-0 invisible',
                        )}
                        onClick={() => {
                          if (!isActive && api) api.scrollTo(index);
                        }}
                      >
                        {/* Arch Background */}
                        <div
                          className={cn(
                            'absolute inset-0 mx-auto w-[85%] md:w-[80%] h-full rounded-t-[1000px] rounded-b-[1000px] transition-all duration-1000',
                            isActive
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-12',
                            product.archColor,
                          )}
                        />

                        {/* Product Image */}
                        <div
                          className={cn(
                            'relative w-full h-full z-10 transition-transform duration-1000',
                            isActive ? 'scale-100' : 'scale-90',
                          )}
                        >
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-contain drop-shadow-2xl mix-blend-multiply hover:scale-105 transition-transform duration-500 saturate-[1.2]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index < 2}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              <div className="absolute right-0 bottom-[-20px] md:right-12 md:bottom-12 flex gap-4 z-50">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 md:h-14 md:w-14 rounded-full border border-black/20 bg-transparent text-black hover:bg-black/5 hover:text-black transition-all" />
                <CarouselNext className="static translate-y-0 h-12 w-12 md:h-14 md:w-14 rounded-full border-none bg-[#1A1A1A] text-white hover:bg-black hover:text-white transition-all shadow-xl" />
              </div>
            </Carousel>
          </div>
        </div>
      </main>
    </div>
  );
}
