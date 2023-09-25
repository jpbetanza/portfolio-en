import SmallLink from "../SmallLink"
import LinkIcon from "../LinkIcon"
import githubIcon from '../../assets/githubicon.png'

const ProjectCard = ({titulo, desc,vercel, url, src, imgautor, utils}) => {
    return(
        <a href={vercel} target="_blank" className="group relative bg-black flex flex-col justify-between bg-opacity-50 rounded-lg duration-200 m-2 hover:m-0 hover:mb-2 shadow-2xl">
            {imgautor!='' && <SmallLink imgautor={imgautor}/>}
            <LinkIcon icon={githubIcon} css="absolute right-0 bottom-0 w-7" url={url} />
            <div className="text-left">
                <img src={src} className="rounded-t-lg w-auto p-px" alt="Project logo"></img>

                <div className="text-white px-5 py-3 duration-200 group-hover:px-7">
                    <h1 className="select-none text-xl font-bold">{titulo}</h1>
                    <p className="select-none text-xs md:text-sm">{desc}</p>
                </div>

            </div>

            <div className="flex justify-center pt-1 pb-3 px-1 gap-2 bottom-0 relative">
                {utils.map((x)=>(
                    <div>
                        <img className="w-7" src={x}/>
                    </div>
                ))}
            </div>
        </a>
    )
}

export default ProjectCard