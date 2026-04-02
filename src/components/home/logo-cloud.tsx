import { InfiniteSlider } from '@/components/ui/motion-primitives/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/motion-primitives/progressive-blur';
import Image from 'next/image';

export default function LogoCloud() {
  return (
    <div className="**:fill-foreground p-2 overflow-hidden relative">
      <InfiniteSlider speedOnHover={15} speed={40} gap={110}>
        <Image
          src="/images/logo/decathlon.png"
          alt="Decathlon"
          width={200}
          height={100}
          className="object-contain w-auto h-8 md:h-10"
          unoptimized
        />
        <Image
          src="/images/logo/jr286.png"
          alt="JR286"
          width={200}
          height={100}
          className="object-contain w-auto h-8 md:h-10"
          unoptimized
        />
        <Image
          src="/images/logo/ironclad.png"
          alt="Ironclad"
          width={200}
          height={100}
          className="object-contain w-auto h-8 md:h-10"
          unoptimized
        />
        <Image
          src="/images/logo/swany.png"
          alt="Swany"
          width={200}
          height={100}
          className="object-contain w-auto h-8 md:h-10"
          unoptimized
        />
        <Image
          src="/images/logo/sams-club.svg"
          alt="Sam's Club"
          width={200}
          height={100}
          className="object-contain w-auto h-8 md:h-10"
          unoptimized
        />
        <Image
          src="/images/logo/almsthre.webp"
          alt="Almsthre"
          width={200}
          height={100}
          className="object-contain w-auto h-12 md:h-14"
          unoptimized
        />
        <Image
          src="/images/logo/kalibre.png"
          alt="Kalibre"
          width={200}
          height={100}
          className="object-contain w-auto h-8 md:h-10"
          unoptimized
        />
        <Image
          src="/images/logo/eiger.png"
          alt="Eiger"
          width={200}
          height={100}
          className="object-contain w-auto h-12 md:h-14"
          unoptimized
        />
      </InfiniteSlider>

      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"
      />
      <ProgressiveBlur
        className="absolute top-0 left-0 w-20 h-full pointer-events-none"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="absolute top-0 right-0 w-20 h-full pointer-events-none"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
