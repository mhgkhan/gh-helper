export default async function FooterLinkBlock({ links, heading }) {
    return (
        <div className="link-block">
            <h3 className="text-lg font-bold text-white">{heading}</h3>
            
            {
                links.map((ele,index)=>{
                    return <a key={index} href={ele.href} className="my-1 text-left text-white block">{ele.name}</a>
                })
            }
        </div>
    )
}