import type { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Home" }]
}

const Index: React.FC = () => {
	return (
		<h1 className="text-3xl font-bold underline">Welcome to Konytool!</h1>
	)
}
export default Index
