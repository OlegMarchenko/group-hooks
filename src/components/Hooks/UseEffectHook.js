import { useEffect, useState } from 'react';
import Character from '../Character/Character';
import Episode from '../Episode/Episode';
import Location from '../Location/Location';

function UseEffectHook() {

  const [type, setType] = useState('character');
  const [data, setData] = useState([]);
  /*const [pos, setPos] = useState({
    x: 0,
    y: 0
  });*/

  /*useEffect(() => {

    console.log('Init use Effect')

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))
  }, [type]);*/

  /*const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }*/

  /*useEffect(() => {

    console.log('MouseMove');
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, [])*/

  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/${type}`)
    .then(response => response.json())
    .then(json => setData(json.results));
  }, [type])


  return (
    <div>
      <h1>Type: {type}</h1>
      <button onClick={() => setType('character')}>Character</button>
      <button onClick={() => setType('location')}>Location</button>
      <button onClick={() => setType('episode')}>Episode</button>

      {type === 'character' && <Character stats={data} />}
      {type === 'location' && <Location data={data} />}
      {type === 'episode' && <Episode data={data} />}


      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}

      {/*<pre>{JSON.stringify(pos, null, 2)}</pre>*/}
    </div>
  )
}

export default UseEffectHook;