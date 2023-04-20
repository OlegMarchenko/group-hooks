import { useRef, useState, useEffect } from 'react';


function UseRefHook() {

  const [value, setValue] = useState('');

  const renderCount = useRef(1);

  const inputRef = useRef(null);

  const prevValue = useRef('');

  useEffect(() => {
    prevValue.current = value;
  }, [value])

  const focus = () => inputRef.current.focus();



  return (
    <div>
      <h1>Render Count: {renderCount.current}</h1>
      <h2>Prev Count: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRefHook;