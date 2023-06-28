import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Profile" }]
}
const Profile: React.FC = () => {
	return <h1 className="text-3xl font-bold underline">User Profile</h1>
}
export default Profile
