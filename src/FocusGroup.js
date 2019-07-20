import React, { useRef, useLayoutEffect } from 'react'

function useFocusFirstEmptyInput ({ containerRef, query = 'input' }) {
  useLayoutEffect(() => {
    if (containerRef && containerRef.current) {
      const inputs = [...containerRef.current.querySelectorAll(query)]
      const firstEmptyElement = inputs.find((element) => !element.value && !element.disabled ? element : false)
      if (firstEmptyElement && firstEmptyElement.focus) {
        firstEmptyElement.focus()
      }
    }
  }, [containerRef, query])
}

function FocusGroup () {
  const containerRef = useRef(null)
  useFocusFirstEmptyInput({ containerRef })

  return (
    <div ref={ containerRef }>
      <div>
        <input value="abcd" />
      </div>
      <div>
        <input disabled={ true } />
      </div>
      <div>
        <input />
      </div>
    </div>
  )
}

export default FocusGroup
