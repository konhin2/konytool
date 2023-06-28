import { V2_MetaFunction } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import { Sidebar } from "~/components/dashboard"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
export default function Dashboard(): JSX.Element {
	return (
		<div>
			<Sidebar />
			<Outlet />
		</div>
	)
}
