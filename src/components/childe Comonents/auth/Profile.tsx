

const Profile = ({name}:profileprops) => {
  return (
    <div>Private Profile Component {name}</div>
  )
}
export type profileprops={
  name:string
}
export  default Profile