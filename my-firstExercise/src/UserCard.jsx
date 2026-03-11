function UserCard(props) {
 return (
//  <div>
//  <h2>Student Information</h2>
//  <p>Name: Gizachew kassa</p>
//  <p>Course: MERN Stack Development</p>
//  </div>

<div>
 <h2>Student Information</h2>
 <p>Name: {props.name}</p>
 <p>Course: {props.course}</p>
 </div>
 );
}
export default UserCard;