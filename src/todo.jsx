// export default function Todo({task,isDone}){
//      return(
//           <li>Task: {task} is Done: {isDone} </li>
//      )
// }

// conditional redering option : 1

// export default function Todo({task,isDone}){
//      if(isDone=== true){
//           return (
//                <li>Finised : {task}</li>
//           )
//      }
//      else{
//           return(
//                <li>Work on : {task}</li>
//           )
//      }
// };


// conditional redering option : 2
// export default function Todo({ task, isDone }) {
//      if (isDone) {
//           return (
//                <li>Finised : {task}</li>
//           )
//      }
//      return <li>Work on : {task}</li>
// }


// conditional redering option : 3 ternary operator

// export default function Todo({ task, isDone }) {
//      return (
//           <li>{isDone ? 'Finised' : 'Work on'}:{task}</li>
//      )
// };



// // conditional redering option : 4 &&
// export default function Todo({ task, isDone }) {
//      return (
//           <li>{task}: {isDone && "Done"}</li>
//      )
// }




// // conditional redering option :  && ||
export default function Todo({ task, isDone }) {
     return (
          <li>{task}: {isDone || "Do it"}</li>
     )
}