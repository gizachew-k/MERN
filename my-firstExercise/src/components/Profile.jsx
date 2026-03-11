  
function Profile(props) {
  return (
    <div>
      
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Role:</strong> {props.role}</p>
    </div>
  );
}
export default Profile;