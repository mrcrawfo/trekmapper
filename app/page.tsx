import Image from 'next/image';

import splash from '@/assets/splash.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] h-full min-h-screen">
      <div className="block md:grid grid-cols-12 w-full h-full">
        {/* Left gutter */}
        <div className="col-span-2 hidden md:block bg-gradient-to-r from-black to-background-primary h-full min-h-screen" />
        {/* Main content column */}
        <div className="md:col-span-8 h-full min-h-screen">
          <div className="flex flex-col items-center justify-start py-2">
            <div className="w-4/5 max-w-[800px] relative aspect-[4/3]">
              <Image
                src={splash}
                alt="Trek Mapper logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="text-lg text-center px-6">Trek Mapper is a tool for creating and sharing maps of your adventures</h2>
            <div className="horizontal-divider" />
            <section>
              <h3>TrekMapper - Turn Every Step Into an Adventure</h3>
              <div className="py-2">
                <h5>Chart Your Journey, Celebrate Every Mile</h5>
                <p>TrekMapper transforms your daily movement into epic journeys. Whether you're walking around your neighborhood or training for a marathon, see your progress unfold across iconic routes and landmarks around the world.</p>
              </div>
              <div className="py-2">
                <h5>Your Miles, Your Story</h5>
                <p>Ever wonder what it would feel like to conquer the Appalachian Trail or trace the California coastline? TrekMapper lets you visualize your walking, running, or hiking distances against real-world landmarks and famous routes. Watch as your daily movements accumulate to cross the Brooklyn Bridge, summit Everest, or journey from New York to Chicago—all at your own pace.</p>
              </div>
            </section>
            <div className="horizontal-divider" />
            <section>
              <h3>Start Your Journey Today</h3>
              <div className="py-2">
                <p className="text-center">TrekMapper is completely free to use.</p>
                <p className="text-center">Sign up now and transform today's walk into the beginning of an adventure.</p>
                <h4 className="text-center">Where will your feet take you?</h4>
                <div className="flex flex-row gap-4 pt-4 mb-4 justify-center items-center">
                  <button className="bg-green-800 text-white px-4 py-2 rounded-md w-40 md:w-[25vw] hover:bg-green-600 hover:scale-102 hover:font-bold transition-all duration-300">Get Started</button>
                  <button className="bg-blue-800 text-white px-4 py-2 rounded-md w-40 md:w-[25vw] hover:bg-blue-600 hover:scale-102 hover:font-bold transition-all duration-300">Learn More</button>
                </div>
              </div>
            </section>
            <div className="horizontal-divider" />
            <section>
              <h3>Why Choose TrekMapper?</h3>
              <div className="py-2">
                <h5>Set Meaningful Goals</h5>
                <p>Create custom distance targets based on real-world routes or set your own challenges. Whether it's completing a marathon or traveling the equivalent of crossing your state, TrekMapper helps you set and achieve goals that inspire.</p>
              </div>
              <div className="py-2">
                <h5>Track Any Movement</h5>
                <p>While perfect for walking and jogging enthusiasts, TrekMapper welcomes all forms of distance-based exercise. Hiking, cycling, swimming, wheelchair activities—if you're covering ground, TrekMapper can track it.</p>
              </div>
              <div className="py-2">
                <h5>Visualize Your Progress</h5>
                <p>Our intuitive charts and maps show your journey in context. View your progress by week, month, year, or custom timeframes. Compare current efforts to past achievements and see how far you've truly come.</p>
              </div>
              <div className="py-2">
                <h5>Earn Recognition</h5>
                <p>Celebrate milestones with digital badges and achievements. From your first mile to completing epic journeys, TrekMapper acknowledges your dedication every step of the way.</p>
              </div>
            </section>
          </div>
        </div>
        {/* Right gutter */}
        <div className="col-span-2 hidden md:block bg-gradient-to-l from-black to-background-primary h-full min-h-screen" />
      </div>
    </div>
  );
}
