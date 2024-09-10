import { subHeadingFont } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

const BlogCard = ({img}) => {
    return (
        <div className='shadow-md shadow-slate-300 w-[300px] md:h-[450px] h-auto rounded-md border-3'>
            <div className="top bg-blue-500 h-[200px] w-full rounded-md"> <Image className='rounded-md' src={img} width={300} height={200} alt='blog pic' /> </div>
            <div className="card-content p-2">
                <h2 className={` ${subHeadingFont.className} text-2xl font-bold my-3`}>Title of Latest Blog </h2>
                <p className='text-justify text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sequi sed, quo dolorem vero perspiciatis recusandae libero. Omnis, ducimus pariatur. Inventore, quam! </p>
                <button className="text-center bg-blue-500 py-2 px-3 mt-3 rounded-lg text-white">Learn more </button>
            </div>
        </div>
    )
}

export default BlogCard
