import { describe, expect, it } from 'vitest'
import { player as reducer, play, next, IPlayerState } from './player'

const exampleState: IPlayerState = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: 'Vamos Aprender Japonês - Básico I',
        lessons: [
          { id: '6kK5COe9J78', title: '1. Eu sou o Yan', duration: '26:22' },
          { id: 'U0dHSvcU5r8', title: '2. O que é aquilo?', duration: '26:00' },
        ]
      },
      {
        id: 2,
        title: 'Aprendiz - Venda Coberta',
        lessons: [
          { id: 'AUwULSfjBLw', title: 'Opções para Iniciantes', duration: '3:39:39' },
          { id: 'P1EWphzMcNk', title: 'Venda Coberta e Potencializações', duration: '1:42:55' },
        ]
      },
    ],
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: false
}

describe('player slice', () => {
  it('should be able to play', () => {
    const state = reducer(exampleState, play([1, 2]))

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(2)
  })

  it('should be able to play next video automatically', () => {
    const state = reducer(exampleState, next())

    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it('should be able to jump to the next module automatically', () => {
    const state = reducer({
      ...exampleState,
      currentLessonIndex: 1
    }, next())

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson if there is no next lesson available', () => {
    const state = reducer({
      ...exampleState,
      currentModuleIndex:1,
      currentLessonIndex: 1
    }, next())

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(1)
  })
})