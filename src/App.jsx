

function App() {
  

  return (
    <>
      <h1>Mahamudul Hasan mehedi</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </>
  )
}

// using a component
function Person(){
  const age=30;
  const money=50;
  const personDetails={name:'Mahamudul', age:age}
 return(
  <h3>The man whose name is {personDetails.name} and age {personDetails.age}</h3>
 )
}

export default App
