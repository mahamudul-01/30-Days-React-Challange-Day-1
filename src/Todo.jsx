export default function Todo({ task, isDone }) {
  if(isDone){
    return(
        <li>Finished : {task}</li>
    )
  }
  else{
    return (
        <li>Not Finished Yet: {task}</li>
    )
  }
}
