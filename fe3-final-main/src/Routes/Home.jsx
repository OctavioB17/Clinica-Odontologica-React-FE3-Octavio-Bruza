import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/ContextGlobalProvider"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const { contextValue } = useContext(ContextGlobal);

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
      {contextValue.data.map((user) => (
      <Card key={user.id - 1} id={user.id} name={user.name} username={user.username}/>
    ))}
  </div>
</main>
  )
}

export default Home