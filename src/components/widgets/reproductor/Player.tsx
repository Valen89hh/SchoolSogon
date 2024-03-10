import { useState } from 'react';
import ReactPlayer from 'react-player'

interface PlayerProps {
    src: string
}

const Player: React.FC<PlayerProps> = ({
    src
}) => {

    const [playing, setPlaying] = useState(false)

    return <div className='player-wrapper relative rounded-lg overflow-hidden'>
        <button className='absolute inset-0 text-primary z-10' onClick={() => setPlaying(!playing)}>
            <div className={`${playing ? 'hidden' : "flex"} w-[3rem] h-[3rem] p-3 rounded-full flex justify-center items-center bg-[#ffffffe7] text-primary mx-auto`}>
                <img src="/icons/Play.svg" alt="" className='w-4' />
            </div>
        </button>
        <ReactPlayer
            className='react-player z-0'
            url={src}
            width='100%'
            height='100%'
            playing={playing}
        />
    </div>;
}

export default Player;