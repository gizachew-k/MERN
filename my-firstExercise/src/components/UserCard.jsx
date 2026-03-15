function UserCard(props) {
 return (

<div>
 <h2>Student Information</h2>
 {/* recieving props from the parent component (App.jsx) and displaying it here in the user card component */}
 <p>Name: {props.name}</p>
 <p>Course: {props.course}</p>
 </div>
 );
}
export default UserCard;



