import type { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Home" }]
}

export default function Index(): JSX.Element {
	return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}
