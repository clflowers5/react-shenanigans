import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

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

function Group1 () {
  const containerRef = useRef(null)
  useFocusFirstEmptyInput({ containerRef })

  return (
    <Container>
      <div ref={ containerRef }>
        <div>
          <input defaultValue="" />
        </div>
        <div>
          <input disabled={ true } />
        </div>
        <div>
          <input />
        </div>
      </div>
    </Container>
  )
}

function Group2 () {
  const containerRef = useRef(null)
  useFocusFirstEmptyInput({ containerRef })

  return (
    <Container>
      <div ref={ containerRef }>
        <div>
          <input defaultValue="abcd" />
        </div>
        <div>
          <input disabled={ true } />
        </div>
        <div>
          <input />
        </div>
      </div>
    </Container>
  )
}

function Group3 () {
  const containerRef = useRef(null)
  useFocusFirstEmptyInput({ containerRef })

  return (
    <Container>
      <div ref={ containerRef }>
        <div>
          <input defaultValue="abcd" />
        </div>
        <div>
          <input defaultValue="hi" />
        </div>
        <div>
          <input />
        </div>
      </div>
    </Container>
  )
}

function Group4 () {
  const containerRef = useRef(null)
  useFocusFirstEmptyInput({ containerRef })

  return (
    <Container>
      <div ref={ containerRef }>
        <div>
          <input defaultValue="abcd" />
        </div>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
      </div>
    </Container>
  )
}

export {
  Group1,
  Group2,
  Group3,
  Group4
}
