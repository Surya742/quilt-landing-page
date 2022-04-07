import claire from "../../assets/images/newUI/claire.png"

const AIEmoji = () => {
    return (
        <div className='shadow-lg right-2 h-16 w-16 z-10 rounded-md fixed bottom-2 bg-[#00E467] flex justify-center items-center'>
            <img src={claire} alt="emoji of a women called claire" className="relative top-1" />
        </div>
    )
}

export default AIEmoji