import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
export default function DashboardTeam(): JSX.Element {
	return (
		<div className="pl-72">
			<main className="py-10">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					Team
				</div>
			</main>
		</div>
	)
}
