import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
const DashboardTeam = () => {
	return (
		<main className="py-10">
			<div className="mx-auto max-w-7xl px-4 px-6">Stories</div>
		</main>
	)
}
export default DashboardTeam
