import React, { useState, useCallback } from 'react'

function wait () {
  return new Promise(resolve => {
    setTimeout(resolve, 1500)
  })
}

function useSomething ({ data }, cb) {
  async function doIt () {
    await wait()
    cb({ result: 'foo' })
  }

  return doIt
}

function CallbackHookComponent () {
  const [val, setVal] = useState(null)
  const [count, setCount] = useState(0)

  const handleSomething = useCallback((val) => {
    setVal(val.result)
    setCount(count + 1)
  }, [count])

  const cb = useSomething({
    data: {
      idk: 'idkman'
    }
  }, handleSomething)

  return (
    <div>
      <input onBlur={ cb } type="text" />
      <h1>YOUR RESULT</h1>
      <div>{ val }</div>
      <div>count: { count }</div>
    </div>
  )
}

export default CallbackHookComponent
