import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Profile" }]
}
export default function Dashboard(): JSX.Element {
	return <h1 className="text-3xl font-bold underline">User Profile</h1>
}
