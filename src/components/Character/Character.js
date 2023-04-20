function Character(props) {


  const { stats } = props;

  console.log(stats);


  return (
    <section>

      <ul>
        {stats.map(({id, name, status}) => (
          <li key={id}>{name} with status: {status}</li>
        ))}
      </ul>

    </section>
  )
}

export default Character;

