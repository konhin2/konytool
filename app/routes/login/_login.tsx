import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Login" }]
}
export default function Login(): JSX.Element {
	return <h1 className="text-3xl font-bold underline">Login</h1>
}
