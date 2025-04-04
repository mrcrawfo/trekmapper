import Image from 'next/image';

import splash from '@/assets/splash.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <div className="block md:grid grid-cols-12 w-full h-full">
        <div className="col-span-2 hidden md:block bg-gradient-to-r from-black to-blue-950">
          {/* Left gutter */}
        </div>
        <div className="md:col-span-8 md:shadow-active-primary">
          {/* Main content column */}
          <div className="flex flex-col items-center justify-start">
            <div className="w-4/5 max-w-[800px] relative aspect-[4/3]">
              <Image
                src={splash}
                alt="Trek Mapper logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:block bg-gradient-to-l from-black to-blue-950">
          {/* Right gutter */}
        </div>
      </div>
    </div>
  );
}
