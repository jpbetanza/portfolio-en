import Avatar from "../Avatar"
import IntroductionText from "../IntroductionText"
import ToolsUsed from "../ToolsUsed"
import {useEffect, useState } from "react"

const Introduction = () => {
    const [init,setInit] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setInit(true);
          }, 1);
    })
    return(
        <div className={`${init ? 'opacity-100':'opacity-0'} duration-1000 h-full flex flex-col py-5 justify-center items-center md:gap-5`}>
            <div className="flex flex-col items-center md:flex-row md:mb-2 xl:w-3/4 p-3 duration-200 mb-5">
                <Avatar/>
                <IntroductionText/>
            </div>
            <ToolsUsed/>
        </div>
    )
}

export default Introduction