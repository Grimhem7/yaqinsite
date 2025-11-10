'use client'

import Link from 'next/link'
import { useState } from 'react'

interface PricingTabProps {
  yearly: boolean
  popular?: boolean
  planName: string
  price: {
    monthly: number
    yearly: number
  }
  planDescription: string
  features: string[]
  
}
    
function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full container ${props.popular ? 'dark' : 'dark'}`}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div id="partner" className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-[#ffd700] text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-slate-200 font-semibold mb-1">{props.planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-200 font-bold text-3xl">$</span>
            <span className="text-slate-200 font-bold text-4xl">{props.yearly ? props.price.yearly : props.price.monthly}</span>
            {props.planName === "Coaching" && <span className="crossed-out text-red-500 relative text-xl font-semibold"> /60$ <span className='h-[1px] absolute rotate-[145deg] w-[80%] bg-white left-2 top-[50%]'></span><span className='h-[1px] absolute rotate-[35deg] w-[80%] bg-white left-2 top-[50%]'></span></span>}
            {props.planName === "partnership" && <span className="crossed-out text-red-500 relative text-xl font-semibold"> /60$ <span className='h-[1px] absolute rotate-[145deg] w-[80%] bg-white left-2 top-[50%]'></span><span className='h-[1px] absolute rotate-[35deg] w-[80%] bg-white left-2 top-[50%]'></span></span>}
            {props.planName === "Consulting" && <span className="crossed-out text-red-500 relative text-2xl font-semibold">&nbsp;80$ <span className='h-[1px] absolute rotate-[145deg] w-[80%] bg-white left-2 top-[50%]'></span><span className='h-[1px] absolute rotate-[35deg] w-[80%] bg-white left-2 top-[50%]'></span></span>}
          </div>
          <div className="text-sm text-slate-500 mb-5">{props.planDescription}</div>
          <Link href="#contact" scroll={true} className="relative z-[20] w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150">
            Purchase Plan
          </Link>
        </div>
        <div className="text-slate-200 font-medium mb-3">Includes:</div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow justify-items-end ">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex mx-auto" >
                <span className='mx-auto'>{feature}</span>
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export function PricingTable() {
  const [yearly, setYearly] = useState<boolean>(true)
 
  return (
    <div>

      {/* Pricing toggle */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl mb-10 text-center">
                  Choose the plan that fits your goals
                </h2>

      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-
       lg:max-w-none">

        {/* Pricing tab*/}
        {yearly==true && 
        <PricingTab
          yearly={yearly}
          planName="Consulting"
          price={{ yearly: 29, monthly: 35 }}
          planDescription="Got any questions?"
          features={[
            'Strategy & Market Audit',
            'E-Commerce Growth System',
            'Logistics & Fulfillment Mastery',
            'Scaling & Automation',
          ]} />}
        <PricingTab
          yearly={yearly}
          planName="Coaching"
          price={{ yearly: 49, monthly: 55 }}
          planDescription="Earn consistently every day with the first paid consulting program backed by a legal profit guarantee."
          features={[
            '1-on-1 consulting sessions every week',
            'Progress tracking and personalized strategy adjustments',
            'Private communication channel (Telegram, Slack, or Discord)',
            'Business performance and mindset coaching',

          ]} />
        {yearly==true && 
        <PricingTab
          yearly={yearly}
          popular={true}
          planName="partnership"
          price={{ yearly: 79, monthly: 85 }}
          planDescription="From products to shipping and money transfers everything is taken care of for you"
          features={[
            'Strategic Partnership',
            'Operational Partnership',
            'Licensed Partnership',
            'Investment Partnership',
          ]} />}
        
      </div>

    </div>
  )
}
export default PricingTab;