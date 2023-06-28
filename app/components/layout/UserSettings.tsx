import { Link } from "@remix-run/react"
import * as React from "react"
import { useTranslation } from "react-i18next"
import Icon from "~/../public/favicon.ico"
import Conditional from "~/components/common/Conditional"
import useClickOutside from "~/utils/clickOutside.utils"

const UserSettings = () => {
	const { t } = useTranslation()
	const [toggleActive, setToggleActive] = React.useState<boolean>(false)
	const ref = useClickOutside(toggleActive, setToggleActive)
	return (
		<div className="hidden sm:ml-6 sm:flex sm:items-center" ref={ref}>
			<div className="relative">
				<div>
					<button
						type="button"
						className="flex rounded-full bg-white text-sm  hover:ring-2 hover:ring-konytool-d hover:ring-offset-2"
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
						onClick={() => setToggleActive(!toggleActive)}
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
							onClick={() => setToggleActive(false)}
						>
							{t("common.PROFILE_SET_TOGGLE")}
						</Link>
						<Link
							to={"/"}
							className="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabIndex={-1}
							id="user-menu-item-2"
							onClick={() => setToggleActive(false)}
						>
							{t("common.SIGNOUT_TOGGLE")}
						</Link>
					</div>
				</Conditional>
			</div>
		</div>
	)
}
export default UserSettings
