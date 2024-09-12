import React from 'react'
import FooterLinkBlock from './home/FooterLinkBlock'

const Footer = ({ font }) => {
  return (
    <footer className='mt-14 bg-purple-700 py-2'>
      <div className="container mx-auto">
        <div className={`logo mx-auto flex items-end justify-center gap-1  ${font.className}`}>
          <h1 className='text-5xl text-pink-600'>G </h1>
          <h1 className='text-5xl text-white'>Helper  </h1>
        </div>
        <br />

        <div className="flex items-center justify-around gap-5 flex-wrap w-full">
          <FooterLinkBlock heading={"Direct Link"} links={[
            { name: "Home", link: "/" },
            { name: "About my website ", link: "/" },
            { name: "Contact", link: "/" },
            { name: "Privacy", link: "/" },
            { name: "Policy", link: "/" },
            { name: "xyz", link: "/" },
          ]} />

<FooterLinkBlock heading={"Direct Link"} links={[
            { name: "Home", link: "/" },
            { name: "About", link: "/" },
            { name: "Contact", link: "/" },
            { name: "Privacy llms high ", link: "/" },
            { name: "Policy", link: "/" },
            { name: "xyz", link: "/" },
          ]} />

<FooterLinkBlock heading={"Direct Link"} links={[
            { name: "Home", link: "/" },
            { name: "About", link: "/" },
            { name: "Contact and managed hosting", link: "/" },
            { name: "Privacy", link: "/" },
            { name: "Policy", link: "/" },
            { name: "xyz", link: "/" },
          ]} />


        </div>
        <div className=" gap-1 footer footer w-full mt-8 flex items-center justify-around flex-wrap-reverse">
          <p className="text text-gray-200 ">2023 GHelper. All rights reserved.</p>
          <div className="flex items-center ">
            <a href="/" className=" text-gray-200 hover:text-gray-800">Terms & Conditions</a>
            <a href="/" className=" text-gray-200 hover:text-gray-800">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
