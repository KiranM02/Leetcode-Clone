// // import { useEffect, useState } from "react";
// // function Problems() {

// //   const [serverProblems, setProblems] = useState(null)
// //   // const [serverProblems, setProblems] = useState([])
  
// //   useEffect(()=>{

// //     fetch("http://localhost:5000/problems")
// //     .then((res) => res.json())
// //     .then((ServerProblems) => setProblems(ServerProblems))
// //     .then(() => console.log("Fetching"))
// //   })


// //   setInterval(()=>{
// //     console.log(serverProblems)
// //     console.log("serverProblems")
// //   }, 8000)


// //   // if(!serverProblems) {
// //   if(!serverProblems) {
    
// //     console.log("loadinggggg")
// //     return <div>Loading</div>
// //   }
// //   else
// // {
// //   console.log("In the else.....")

// //     return (
// //       <>
// //       <h1>Problems</h1>
// //       {/* {serverProblems} */}
// //       <ul>
        
// //         {/* {serverProblems.map((problem) => (
// //             <li key={problem.problemId}>{problem.title}</li>
// //           ))} */}
// //       </ul>

    
// //       </>
// //     );
// //   }
// //   }
  
// //   export default Problems
  



// import React, { useEffect, useState } from 'react';

// interface Problem {
//   problemId: number;
//   title: string;
// }

// const Problems: React.FC = () => {
//   const [problems, setProblems] = useState<Problem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [errors, setError] = useState<string | null>(null);
//   // let errors;

//   useEffect(() => {
//     const fetchProblems = async () => {
//       try {
//         // const response = await fetch('/problems');
//         const response = await fetch('/api/problems');

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setProblems(data.problems);
//         setLoading(false);
//       } catch (err instanceof Error) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchProblems();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (errors) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Problems</h1>
//       <ul>
//         {problems.map((problem) => (
//           <li key={problem.problemId}>
//             <h2>{problem.title}</h2>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Problems;






import React, { useEffect, useState } from 'react';

interface Problem {
  problemId: number;
  title: string;
}

const Problems: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        // const response = await fetch('/api/problems');  Replacing the word api with actual api http://localhost:5000/
        const response = await fetch('problems');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProblems(data.problems);
        setLoading(false);
//    } catch (err instanceof Error) {   //check instaceof in other condition 
      } catch (err) {
        if (err instanceof Error) {
          setError('The error is as follows '+err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Problems</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.problemId}>
            <h2>{problem.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Problems;
