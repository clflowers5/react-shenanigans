import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import * as faker from 'faker'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Suggestion = styled.div`
  display: ${props => props.searchValue.length ? 'block' : 'none'};
  width: 100%;
  background: #61dafb;
`

function Predictive () {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState([])

  /**
   * `useMemo` doesn't seem to short-circuit with repeated input, idk how it's supposed to be working.
   * Ok, so `useMemo` does _not_ (as far as I can tell) cache seen values.
   * It's solely checking the current val vs the 'new' val.
   */
  function fakeFetchSearchResults (myVal) {
    console.log('value is', value, value2, value3)
    const MAX_RESULTS = 5
    const numberOfFakeResults = Math.max(MAX_RESULTS - myVal.length, 1)
    const foo = new Array(numberOfFakeResults).fill(undefined)
    return foo.map(() => faker.address.streetAddress(false))
  }

  const results = useMemo(fakeFetchSearchResults.bind(null, value), [value])
  const results2 = useMemo(fakeFetchSearchResults.bind(null, value2), [value2])
  const results3 = useMemo(fakeFetchSearchResults.bind(null, value3), [value3])

  function handleChange (evt) {
    console.log('handlechange')
    evt.preventDefault()
    const { target: { value } } = evt
    setValue(value)
  }

  function handleChange2 (evt) {
    console.log('handlechange2')
    evt.preventDefault()
    const { target: { value } } = evt
    setValue2(value)
  }

  function handleChange3 (evt) {
    console.log('handlechange3')
    evt.preventDefault()
    const { target: { value } } = evt
    value3.push(value) // Mutations won't trigger a re-render - must be invoked via setValue
    setValue3(value3)
  }

  return (
    <Container>
      <fieldset>
        <input type='text' onChange={handleChange} value={value} />
        {results && results.map(result => (
          <Suggestion key={result} searchValue={value}>{result}</Suggestion>
        ))}
      </fieldset>
      <fieldset>
        <input type='text' onChange={handleChange2} value={value2} />
        {results2 && results2.map(result => (
          <Suggestion key={result} searchValue={value2}>{result}</Suggestion>
        ))}
      </fieldset>
      <fieldset>
        <input type='text' onChange={handleChange3} value={value3} />
        {results3 && results3.map(result => (
          <Suggestion key={result} searchValue={value3}>{result}</Suggestion>
        ))}
      </fieldset>
    </Container>
  )
}

export default Predictive
