import { useState, useEffect, useMemo } from 'react';

function complexCompute(num) {
  console.log('compute');
  let i = 0;
  while (i < 1000000000) i++
  return num * 2;
}

function UseMemoHook() {

  const [number, setNumber] = useState(40);
  const [colored, setColored] = useState(false);


  // Використовується для кешування обчислень іншої функції
  // Та її НЕ визиває
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);


  const styles = useMemo(() => ({
    color: colored ? 'tomato' : 'black'
  }), [colored]);


  useEffect(() => {
    console.log('styles changed!');
  }, [styles])

  useEffect(() => {
    console.log('computed numbers!');
  }, [computed])



  return (
    <div>
      <h1 style={styles}>Number: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Remove</button>
      <button onClick={() => setColored(prev => !prev)}>Change Color</button>
    </div>
  )
}

export default UseMemoHook;