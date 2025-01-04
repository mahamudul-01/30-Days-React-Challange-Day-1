// export default function Todo({ task, isDone }) {
//   if(isDone){
//     return(
//         <li>Finished : {task}</li>
//     )
//   }
  
//     return (
//         <li>Not Finished Yet: {task}</li>
//     )

// }
// conditional render 3 ternary
// export default function Todo({ task, isDone }) {
//     return (
//         <li> {isDone ? `Finished` :`Work On`} {task}  </li>
//     )
  
// }

// conditional and operator
export default function Todo({ task, isDone }) {
    
    
      return (
         <li> {task} {isDone && ':Done'}</li>
      )
  
  }

  
