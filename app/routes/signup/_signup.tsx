import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Signup" }]
}
export default function Dashboard(): JSX.Element {
	return <h1 className="text-3xl font-bold underline">SignUp</h1>
}
