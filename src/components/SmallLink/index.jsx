export const SmallLink = ({imgautor})=>{
    return(
        <a href={imgautor} alt="link to the art creator" target="_blank" className= {`bg-slate-200 
                                                        bg-opacity-10 
                                                        absolute
                                                        right-0 
                                                        rounded-xl 
                                                        px-2 
                                                        py-1 
                                                        m-1 
                                                        text-white 
                                                        text-sm 
                                                        hover:cursor-pointer 
                                                        hover:bg-opacity-20 
                                                        duration-200`}>
            {"@"+imgautor.split('/').slice(-1)}
        </a>
    )
}
export default SmallLink