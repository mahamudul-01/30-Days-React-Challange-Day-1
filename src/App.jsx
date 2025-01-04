
function App() {
  

  return (
    <>
      <h1>Mahamudul Hasan mehedi</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <DeviceList name='laptop' price='500'></DeviceList>
    </>
  )
}

// using a component
function Person(){
  const age=30;
  const money=50;
  const personDetails={name:'Mahamudul', age:age}
 return(
  <h3>The man whose name is {personDetails.name} and age {personDetails.age} and he has {money} taka</h3>
 )
}
// handle props
function DeviceList({name,price}){
  return(
    <h1>Name : {name} Price: {price}</h1>
  )
}

export default App
