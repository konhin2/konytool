import { getAuth } from "@clerk/remix/ssr.server"
import {
	V2_MetaFunction,
	redirect,
	type DataFunctionArgs
} from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import { Sidebar } from "~/components/dashboard"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
export const loader = async (args: DataFunctionArgs) => {
	const { sessionId } = await getAuth(args)
	if (sessionId) return redirect("/login")
	return null
}
const Dashboard: React.FC = () => {
	return (
		<div className="relative flex h-100">
			<Sidebar />
			<Outlet />
		</div>
	)
}
export default Dashboard
