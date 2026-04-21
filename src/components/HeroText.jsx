import React from 'react'

const HeroText = () => {
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>

        {/*Desktop view */}
        <div className='flex-col hidden md:flex c-space'>
            <h1 className='text-4xl font-medium'>Hi I'm Rudra</h1>
            <div className='flex flex-col itmes-start'>
                <p className='text-5xl font-medium text-neutral-300'> A Developer <br /> Dedicated to Crafting</p>
            <p className='text-4xl font-medium text-neutral-300 '>Web Solution</p>
            </div>
        </div>
        {/*Mobile view */}

      
    </div>
  )
}

export default HeroText
