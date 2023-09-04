import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className='w-full bg-zinc-950'>
      <ReactPlayer 
        width="100%"
        controls
        url="https://www.youtube.com/watch?v=yQO2KRUM9Cg"
      />
    </div>
  )
}