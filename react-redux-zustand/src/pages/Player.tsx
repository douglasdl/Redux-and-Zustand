import { MessageCircle } from 'lucide-react'
import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className='flex items-center gap-2 rounded bg-violet-500 hover:bg-violet-600 px-3 py-2 text-sm font-medium text-white'>
            <MessageCircle className='w-4 h-4' />
            Deixar Feedback
          </button>
        </div>

        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>
          <div className='flex-1'>
            <Video />
          </div>
          <aside className='absolute top-0 bottom-0 right-0 w-80 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900'>
            <Module 
              moduleIndex={0}
              title='Desvendando o Redux'
              lessonsAmount={3}
            />
            <Module 
              moduleIndex={1}
              title='Desvendando o Redux'
              lessonsAmount={3}
            />
            <Module 
              moduleIndex={2}
              title='Desvendando o Redux'
              lessonsAmount={3}
            />
          </aside>
        </main>
      </div>
    </div>
  )
}