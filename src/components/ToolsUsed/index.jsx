import ToolCard from "../ToolCard"

import { tools } from "../Projects/DB"

const ToolsUsed = ()=>{

    return(
        <div className="bg-opacity-20 bg-black rounded-xl sm:w-3/4 md:w-1/2 xl:w-1/3 shadow-2xl duration-200">
            <h1 className="text-white md:text-2xl text-xl text-center md:mt-5 mt-3">Tools I'm used to</h1>
            <div className="bg-white h-[1px] grow w-4/5 mx-auto mt-1 opacity-60"></div>
            <div className="items-center  grid grid-rows-2 grid-cols-3 md:gap-5 md:p-5 gap-1 p-1">
                {tools.map((x) => <ToolCard name={x.nome} logo={x.img} />)}
            </div>
        </div>
    )
}
export default ToolsUsed