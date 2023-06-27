import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
export default function DashboardBoard(): JSX.Element {
	return <h1 className="text-3xl font-bold underline">My Board</h1>
}
