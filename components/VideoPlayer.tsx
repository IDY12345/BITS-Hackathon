'use client'
import React,{useEffect,useState} from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({url}:{url:string}) => {
    const [video, setVideo] = useState<any>(null);
    useEffect(() => {
        setVideo(<ReactPlayer url={url} width={800} height={600} playing={true} loop={true} muted/>)
    }  , [])
  return (
    <section className='h-[800px]'>
        {video}
    </section>
  )
}

export default VideoPlayer