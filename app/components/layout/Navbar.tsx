import { Link } from "@remix-run/react"
import Icon from "~/../public/favicon.ico"
import { INavCProps } from "~/types/layout"
import UserSettings from "./UserSettings"
import { useLinkToggle } from "./useLinkToggle"

export default function Navbar({ initialPath }: INavCProps): JSX.Element {
	const { activeLink, handleClickLink } = useLinkToggle(initialPath)
	const getLinkClass = (path: string) =>
		activeLink === path
			? "border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
			: "border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
	return (
		<nav className="bg-white shadow">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 justify-between">
					<div className="flex">
						<div className="flex flex-shrink-0 items-center">
							<img
								className="block h-8 w-auto"
								src={Icon}
								alt="Your Company"
							/>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<Link
								to={"/"}
								className={`inline-flex items-center border-b-2 ${getLinkClass(
									"/"
								)}`}
								onClick={() => handleClickLink("/")}
							>
								Home
							</Link>
							<Link
								to={"/dashboard"}
								className={`inline-flex items-center border-b-2 ${getLinkClass(
									"/dashboard"
								)}`}
								onClick={() => handleClickLink("/dashboard")}
							>
								Dashboard
							</Link>
						</div>
					</div>
					<UserSettings />
				</div>
			</div>
		</nav>
	)
}
