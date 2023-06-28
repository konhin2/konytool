import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
const Dashboard: React.FC = () => {
	return (
		<main className="py-10">
			<div className="mx-auto max-w-7xl px-4 px-6">Board</div>
		</main>
	)
}
export default Dashboard
