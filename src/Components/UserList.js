import User from "./User";


function UserList(props) {
  return (
    <div>
      {props.users.map((user) => {
        //renders the User component for each user in the users array
        return (
          <User
            user={user}
            key={user.id}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </div>
  );
}


export default UserList;