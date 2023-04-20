import React from "react";
import { useQuery } from '@apollo/client';

const Query = ({ children, query, id }) => {

  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id
    }
  });


  if (loading) return <div>Loading</div>;
  if (error) return <p>`Error {JSON.stringify(error)}`</p>;

  return children({ data })

};

export default Query;