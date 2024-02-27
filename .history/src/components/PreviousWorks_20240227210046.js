import React from 'react'
import Work from "../assets/work-img.svg"

export default function PreviousWorks() {
  return (
    <main className="max-w-[776px] w-full flex flex-col gap-[38px] p-10 text-xl text-black font-bold">
        <h3>Previous Works</h3>

        <div className='grid grid-rows-3 gap[25px]'>
        <div className='max-w-[242px] w-full rounded-[10px]'>
        <img src={Work}

        </div>

        </div>
    </main>
  )
}
