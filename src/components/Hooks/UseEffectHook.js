import { useEffect, useState } from 'react';

function UseEffectHook() {

  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {

    console.log('Init use Effect')

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))
  }, [type]);

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {

    console.log('MouseMove');
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, [])

  useEffect(() => {


      fetch(`https://rickandmortyapi.com/api/character`)
      .then(response => response.json())
      .then(json => console.log(json.results))
  })


  return (
    <div>
      <h1>Type: {type}</h1>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}

      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}

export default UseEffectHook;