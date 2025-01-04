import Actor from "./Actor";
import Singer from "./Singer";
import Todo from "./Todo";

function App() {
  const actorName=['Mehedi', 'Sahrukh' ,' Salman', 'Amir' , 'John']

  const singerDetails=[
    {id:1,name:'Atif Aslam', age:'35', country:'pakisthan'},
    {id:2,name:'Arjit', age:'45', country:'India'},
    {id:3,name:'Pritom', age:'30', country:'Bangladesh'},
  ]

  return (
    
    <>
      <h1>Mahamudul Hasan mehedi</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <DeviceList name='laptop' price='500'></DeviceList>
      <Todo task={'Learn rect 30 days'} isDone={false}></Todo>
      <Todo task={'complete project '} isDone={false}></Todo>
      <Todo task={'push code every day in git'} isDone={true}></Todo>
      <hr />

      {/* mapping */}
      {
        actorName.map(actor=> <Actor name={actor}></Actor>)
      }
      <h1>singer details</h1>
      <hr />
      {
        singerDetails.map(singer=> <Singer singer={singer}></Singer>)
      }
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
