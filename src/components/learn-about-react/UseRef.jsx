import React, { useEffect, useRef, useState } from "react"
const UseRef = () => {
  const [val, setVal] = useState('')
  const prevVal = useRef('')

  useEffect(() => {
    prevVal.current = val
  }, [val])

  return (
    <>
      <input
        type="text"
        value={val}
        onChange={e => setVal(e.target.value)}
      />

      <p>Current Value: {val}</p>
      <p>Previus Value: {prevVal.current}</p>
    </>
  )
}

export default UseRef
