import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/remix"
import { V2_MetaFunction } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import { Sidebar } from "~/components/dashboard"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
const Dashboard: React.FC = () => {
	return (
		<div>
			<SignedIn>
				<div className="flex flex-row">
					<Sidebar />
					<Outlet />
				</div>
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</div>
	)
}
export default Dashboard
