import imgtest from '../../assets/react.svg'

const ToolCard = ({logo, name})=>{
    return(
        <div className='w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 flex flex-col justify-center place-self-center  items-center p-5 hover:p-4 md:hover:p-3 duration-200 text-lg'>
            <img className='aspect-square drop-shadow-2xl' src={logo}></img>
            <h1 className='select-none text-white'>{name}</h1>
        </div>
    )
}
export default ToolCard