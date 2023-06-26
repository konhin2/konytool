import { Link } from "@remix-run/react"
import * as React from "react"
import Icon from "~/../public/favicon.ico"
import Conditional from "~/components/common/Conditional"
import useClickOutside from "~/utils/clickOutside.utils"

export default function UserSettings(): JSX.Element {
	const [toggleActive, setToggleActive] = React.useState<boolean>(false)
	const ref = useClickOutside(toggleActive, setToggleActive)
	const handleUserActive = () => {
		setToggleActive(!toggleActive)
	}
	return (
		<div className="hidden sm:ml-6 sm:flex sm:items-center" ref={ref}>
			<div className="relative ml-3">
				<div>
					<button
						type="button"
						className="flex rounded-full bg-white text-sm  hover:ring-2 hover:ring-indigo-500 hover:ring-offset-2"
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
						onClick={() => handleUserActive()}
					>
						<span className="sr-only">Open user menu</span>
						<img
							className="h-8 w-8 rounded-full"
							src={Icon}
							alt=""
						/>
					</button>
				</div>
				<Conditional condition={toggleActive}>
					<div
						className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu-button"
						tabIndex={-1}
					>
						<Link
							to={"/profile"}
							className="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabIndex={-1}
							id="user-menu-item-0"
						>
							Your Profile
						</Link>
						<Link
							to={"/profile/singout"}
							className="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabIndex={-1}
							id="user-menu-item-2"
						>
							Sign out
						</Link>
					</div>
				</Conditional>
			</div>
		</div>
	)
}
