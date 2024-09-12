import { subHeadingFont } from '@/app/layout'
import React from 'react'
import BlogCard from './cards/BlogCard'


const TrendingBlogsContainer = () => {
    return (
        <section className='mt-14'>
            <div className="container mx-auto">
                <h2 className={`text-4xl font-bold text-black text-left inline-block border-b border-b-4 py-1 px-2 border-dotted border-cyan-600 ${subHeadingFont.className}`}>Trending Blogs </h2>

                <div className="cards flex px-3 items-center justify-center gap-10 md:px-5 mt-12 flex-wrap">
                    <BlogCard img={"https://img.freepik.com/free-photo/green-texture_1160-912.jpg?t=st=1725900573~exp=1725904173~hmac=00f441eea32882bda2e3c0bd5082a0d187ce2ddf0b0cd21fd90adffe8345af1f&w=740"} />
                    <BlogCard img={"https://img.freepik.com/free-photo/green-texture_1160-912.jpg?t=st=1725900573~exp=1725904173~hmac=00f441eea32882bda2e3c0bd5082a0d187ce2ddf0b0cd21fd90adffe8345af1f&w=740"} />
                    <BlogCard img={"https://img.freepik.com/free-photo/green-texture_1160-912.jpg?t=st=1725900573~exp=1725904173~hmac=00f441eea32882bda2e3c0bd5082a0d187ce2ddf0b0cd21fd90adffe8345af1f&w=740"} />
                </div>
            </div>
        </section>
    )
}

export default TrendingBlogsContainer
