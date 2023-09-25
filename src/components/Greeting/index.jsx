import { useEffect,useState } from "react";
export default function Greeting(){
    
    const [init,setInit] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setInit((init) => true);
          }, 1);
    })

    return(
        <div className="h-full flex items-center">
            <h1 className={`${init ? 'opacity-100':'opacity-5'} select-none font-medium text-6xl text-white duration-[2000ms]`}>I'm João Pedro!</h1>
        </div>
    )
}