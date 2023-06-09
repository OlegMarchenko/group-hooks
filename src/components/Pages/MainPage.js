import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_RESTAURANTS } from '../../queries/Restourants';
import Query from '../../utils/Query';
import './MenuPage.scss'

function MainPage() {

  const [visible, setVisible] = useState(false);

  // const { loading, error, data } = useQuery(GET_RESTAURANTS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  //
  // console.log(data);

  // const [datas, setDatas] = useState();

  // console.log(datas?.data);

  /*useEffect(() => {

    fetch('http://localhost:1337/api/restaurants')
    .then(response => response.json())
    .then(json => setDatas(json));
  }, [])*/

  return (
    <div>

      <button onClick={() => setVisible(prev => !prev)}>Menu</button>

      <ul className={`menu ${visible ? 'menu-visible' : ''}`}>
        <li>kndsfkjlsd</li>
        <li>kndsfkjlsd</li>
        <li>kndsfkjlsd</li>
        <li>kndsfkjlsd</li>
        <li>kndsfkjlsd</li>
        <li>kndsfkjlsd</li>
      </ul>

      {/*<Query query={GET_RESTAURANTS}>
        {({ data: { restaurants: { data } } }) => (
          <div>
            {
              data.map((res) => (
                <h1 >{res.attributes.name}</h1>
              ))
            }
          </div>
        )}
      </Query>*/}

      {/*{
        datas?.data.map(({ id, attributes }) => (
          <div key={id}>
            <h1>{attributes.name}</h1>
          </div>
        ))
      }*/}
    </div>
  )
}

export default MainPage;