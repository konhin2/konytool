import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Signup" }]
}
const Signup: React.FC = () => {
	return <h1 className="text-3xl font-bold underline">SignUp</h1>
}
export default Signup
