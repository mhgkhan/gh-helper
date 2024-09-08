import { subHeadingFont } from '@/app/layout'
import React from 'react'

const BlogCard = () => {
    return (
        <div className='shadow-md shadow-slate-300 md:w-[450px] sm:w-full rounded-md border-3'>
            <div className="top bg-blue-500 h-[200px] w-full rounded-md"></div>
            <div className="card-content p-2">
                <h2 className={` ${subHeadingFont.className} text-3xl font-bold my-3`}>Title of Latest Blog </h2>
                <p className='text-justify'> excepturi quo marendis impedit enim modi exercitationem. Obcaecati nemo nam laborum quam debitis voluptate cupiditate quae id accusamus esse impedit rerum, corporis expedita ipsam! Minus, aliquam amet, cum dolor architecto quisquam unde impedit blanditiis doloribus cupiditate earum magni. Itaque amet voluptatem impedit mollitia pariatur officia, architecto, quia necessitatibus accusantium nostrum commodi! Dolorum ipsa commodi explicabo distinctio exercitationem, adipisci voluptates, facilis vel sapiente, incidunt quam.</p>
                <button className="text-center bg-blue-500 py-2 px-3 mt-3 rounded-lg text-white">Learn more </button>
            </div>
        </div>
    )
}

export default BlogCard
