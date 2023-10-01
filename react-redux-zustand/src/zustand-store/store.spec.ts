import { beforeEach, describe, expect, it } from 'vitest'
import { useStore as store } from '.' 

const course = {
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
    }
  ]
}

const initialState = store.getState()

describe('Zustand Store', () => {
  beforeEach(() => {
    store.setState(initialState)
  })

  it('should be able to play', () => {
    const { play } = store.getState()
    
    play([1, 2])
    
    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })

  it('should be able to play next video automatically', () => {
    store.setState({ course })

    const { next } = store.getState()
    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(0)
    expect(currentLessonIndex).toEqual(1)
  })

  it('should be able to jump to the next module automatically', () => {
    store.setState({ course })

    const { next } = store.getState()
    store.setState({ currentLessonIndex: 1 })
    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()
    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson if there is no next lesson available', () => {
    store.setState({ course })

    const { next } = store.getState()
    store.setState({ 
      currentLessonIndex: 1,
      currentModuleIndex: 1 
    })
    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()
    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(1)
  })
})