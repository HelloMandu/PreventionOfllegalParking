import React, { useState, useRef, useEffect } from 'react'
import Background from '../../components/Auth/Background'
import Auth from '../../components/Auth/Auth'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    if (delay !== 0) {
      function tick() {
        savedCallback.current()
      }
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const App = () => {
  const [count, setCount] = useState(1)
  const [background, setBackground] = useState('')

  useInterval(async () => {
    setCount(count + 1)
    if (count === 34) {
      setCount(1)
      setBackground('')
      setBackground(<Background />)
    }
  }, 1000)

  useEffect(() => setBackground(<Background />), []) // 제일 처음 한번 실행

  return (
    <>
      {background}
      {/* 애니메이션 총시간이 33초이므로 33초마다 background 실행 */}
      <Auth />
      {/* <SignIn /> */}
    </>
  )
}

export default App
