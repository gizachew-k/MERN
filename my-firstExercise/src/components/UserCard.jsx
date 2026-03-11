function UserCard(props) {
 return (
//  <div>
//  <h2>Student Information</h2>
//  <p>Name: Gizachew kassa</p>
//  <p>Course: MERN Stack Development</p>
//  </div>

<div>
 <h2>Student Information</h2>
 {/* recieving props from the parent component (App.jsx) and displaying it here in the user card component */}
 <p>Name: {props.name}</p>
 <p>Course: {props.course}</p>
 </div>
 );
}
export default UserCard;



