interface AvantagesTab {
  
}

export default function AvantagesTab() {
   
    return (
        <div>
          <div className="text-center">
              <div className="h-[2px] w-44 bg-gradient-to-r from-blue-600 to-indigo-400 mx-auto "></div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl my-4">
                  The current e-commerce model is{" "}<br/>
                  
                  <span className="broken leading-[1.6] font-bold sm:text-[2.75rem]">
                    Broken
                  </span>
                  .
                </h2>
                <div className="h-[2px] w-44 bg-gradient-to-r from-blue-600 to-indigo-400 mx-auto mb-[3rem]"></div>
              </div>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-4 sm:px-6 md:px-8 xl:grid-cols-2">
          <div className="relative flex h-auto w-full items-center justify-center gap-8">
            <img
              className=""
              src="https://go.mindeo.com/hosted/images/64/4d4bbc946e4c72a6797cb893a0aeb5/wired-gradient-489-rocket-space.gif"
              alt=""
              width="125"
            />
           <div className="text-left">
              <p className="mt-6 text-base leading-8 text-gray-400 text-[24px]">
                <b className="text-white">Vision</b> <br></br>A young entrepreneur who believed e-commerce could change lives starting with his own.
              </p>
            </div>
            
          </div>
          <div className="relative flex h-auto w-full items-center justify-center gap-8">
        <img
              className=""
              src="https://go.mindeo.com/hosted/images/8f/e0d85c29e643e491dcc4753c3f0e12/wired-gradient-458-goal-target.gif"
              alt=""
              width="125"
            />
           <div className="text-left">
              <p className="mt-6 text-base leading-8 text-gray-400 text-[24px]">
                <b className="text-white">Determination</b> <br></br>With no investors or shortcuts, he built his first store from scratch, turning every obstacle into a lesson.
              </p>
            </div>
            
          </div>

          <div className="relative flex h-auto w-full items-center justify-center gap-8">
            <img
              className=""
              src="https://go.mindeo.com/hosted/images/f7/27d59d26874d81ae7f38977a85c453/wired-gradient-976-web-analytics.gif"
              alt=""
              width="125"
            />
          <div className="text-left">
              <p className="mt-6 text-base leading-8 text-gray-400 text-[24px]">
                <b className="text-white">Success</b> <br></br>After generating millions in sales, he chose to reveal the exact strategies that made it possible.
              </p>
            </div>
            
          </div>

          <div className="relative flex h-auto w-full items-center justify-center gap-8">
            <img
              className=""
              src="https://go.mindeo.com/hosted/images/92/c19bfee5954419927923f14b622527/wired-gradient-456-handshake-deal.gif"
              alt=""
              width="125"
            />
           <div className="text-left">
              <p className="mt-6 text-base leading-8 text-gray-400 text-[24px]">
                <b className="text-white">Impact</b> <br></br>Today, through YAQINE Master, he empowers hundreds of entrepreneurs across Europe leading a new era of e-commerce.
              </p>
            </div>
            
          </div>
        </div>
        <img
              className="mx-auto my-12"
              src="https://go.mindeo.com/hosted/images/fb/4d6770bd114d729365d2579fb89b33/Design-sans-titre-2-.png"
              alt=""
              width="100"
              
            />
          <div className="relative flex  w-full  justify-center mb-24 px-4 sm:px-6">
            <img
              className="mr-8 h-[125px]"
              src="https://go.mindeo.com/hosted/images/4f/80ea4898134aa5bea88bc19f4531f3/wired-gradient-412-gift.gif"
              alt=""
              width="125"
              height="125"
            />
           <div className="text-left">
              <p className="text-base leading-8 text-gray-400 text-[24px]">
                <b className="text-white">GET 4 EXCLUSIVE BONUSES</b><br/>
                    1. Top 10 most profitable niches in e-commerce<br/>
                    2. Step-by-step guide to building your first professional store<br/>
                    3. A curated list of 100 high-potential products to launch in 2025<br/>
                    4. The ultimate e-commerce website checklist
              </p>
            </div>
            
          </div>
        </div>
    );
  }