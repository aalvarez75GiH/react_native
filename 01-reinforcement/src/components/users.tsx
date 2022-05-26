
import { user } from '../interfaces/reqResInterface';
import { useUsers } from '../hooks/useUsers';
export const Users = () => {
  
    const { users, nextPage, previousPage } = useUsers()
    

    //   my version
  const renderingUsers = users.map(({first_name, last_name, email, avatar, id}:user) => {
      return(
        <tr key={id.toString()}>
            <td>
                <img 
                src={avatar} 
                alt="user"
                style={{
                    width: 35,
                    borderRadius: 100

                }}
                />
            </td>
            <td>{first_name}{last_name}</td>
            <td>{email}</td>
        </tr>
      )
  })

    return (
    <>
        <h3>Users</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>email</th>
                </tr>
                
            </thead>
            <tbody>
                {renderingUsers}
            </tbody>
        </table>
        <button
        className='btn btn-primary'
        onClick={nextPage}
        >
            Next
        </button>
        &nbsp;
        <button
        className='btn btn-primary'
        onClick={previousPage}
        >
            Back
        </button>
    </>
  )
}



//   const renderingUsers = ({first_name, last_name, email, avatar, id}: user) => {
//     return(
//       <tr key={id.toString()}>
//           <td>
//             <img src={avatar} alt={first_name}
//             style={{
//                 width: 30,
//                 borderRadius: 100,
//             }}
//             />
//           </td>
//           <td>{first_name} {last_name}</td>
//           <td>{email}</td>
//       </tr>
//     )
// }
{/* {
    users.map(renderingUsers)
} */}