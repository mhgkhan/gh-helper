import React from 'react'
import BlogCard from './cards/BlogCard'
import { subHeadingFont } from '@/app/layout'

const LatestBlogsContainer = () => {
  return (
    <section className='mt-14'>
    <div className="container mx-auto">
        <h2 className={`text-4xl font-bold text-black text-center ${subHeadingFont.className}`}>Latest Blogs of this week </h2>
        <div className="cards flex px-3 items-center justify-center gap-10 md:px-5 mt-12 flex-wrap">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    </div>
    </section>
  )
}

export default LatestBlogsContainer
