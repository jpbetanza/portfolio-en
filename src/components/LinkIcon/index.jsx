const LinkIcon = ({url, css, icon})=>{
    return(
        <a href={url} target="_blank" className= {`bg-slate-200 
        bg-opacity-10 
        rounded-full 
        px-1
        py-1 
        m-1 
        z-10
        text-white 
        text-sm 
        hover:cursor-pointer 
        hover:bg-opacity-20 
        duration-200
        ${css}`}>
        <img src={icon}></img>
        </a>
    )
}

export default LinkIcon