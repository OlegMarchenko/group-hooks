import { useCallback, useState } from 'react';
import ItemsList from '../ItemList/ItemsList';


function UseCallbackHook() {


  const [colored, setColored] = useState(false);
  const [number, setNumber] = useState(1);

  const styles = {
    color: colored ? 'tomato' : 'black'
  }

  // Так само як і useMemo кешує обчислення але і одразу її визиває цю фугкцію

  const generateItemsFromApi = useCallback((indexnumber) => {
    return new Array(number).fill('').map((_, i) => `Element: ${i + indexnumber}`);
  })


  return (
    <div>
      <h1 style={styles}>Computed value: {number}</h1>
      <button onClick={() => setNumber(num => num + 1)}>Addd</button>
      <button onClick={() => setColored(prev => !prev)}>Change color</button>
      <hr />
      <ItemsList getItems={generateItemsFromApi} />
    </div>
  )
}

export default UseCallbackHook