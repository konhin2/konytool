import { Link } from "@remix-run/react"
import Icon from "~/../public/favicon.ico"
import { INavCProps } from "~/types/layout"
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
								className="block h-8 w-auto lg:hidden"
								src={Icon}
								alt="Your Company"
							/>
							<img
								className="hidden h-8 w-auto lg:block"
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
					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						<div className="relative ml-3">
							<div>
								<button
									type="button"
									className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
								>
									<span className="sr-only">
										Open user menu
									</span>
									<img
										className="h-8 w-8 rounded-full"
										src={Icon}
										alt=""
									/>
								</button>
							</div>

							{/* <div
								className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabIndex={-1}
							>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabIndex={-1}
									id="user-menu-item-0"
								>
									Your Profile
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabIndex={-1}
									id="user-menu-item-2"
								>
									Sign out
								</a>
							</div> */}
						</div>
					</div>
					<div className="-mr-2 flex items-center sm:hidden">
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="block h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							<svg
								className="hidden h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}
