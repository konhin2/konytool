import { NavLink } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import { twMerge } from "tailwind-merge"
import Icon from "~/../public/favicon.ico"
import AuthLink from "./AuthLink"
import UserSettings from "./UserSettings"
import { SidebarLinkClass } from "./constants"

export default function Navbar(): JSX.Element {
	const { t } = useTranslation()
	const { active, inactive } = SidebarLinkClass
	return (
		<nav className="bg-white shadow">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 justify-between">
					<div className="flex">
						<div className="flex flex-shrink-0 items-center">
							<img
								className="block h-8 w-auto rounded-md"
								src={Icon}
								alt="Your Company"
							/>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<NavLink
								to={"/"}
								className={({ isActive }) =>
									twMerge(inactive, isActive && active)
								}
							>
								{t("common.HOME_LINK")}
							</NavLink>
							<NavLink
								to={"/dashboard"}
								className={({ isActive }) =>
									twMerge(inactive, isActive && active)
								}
							>
								{t("common.DASHBOARD_LINK")}
							</NavLink>
						</div>
					</div>
					<div className="flex items-center justify-items-center">
						<div className="grid gap-4 grid-cols-2">
							<AuthLink
								path={"/login"}
								text={t("common.LOGIN_LINK")}
							/>
							<AuthLink
								path={"/signup"}
								text={t("common.SIGNUP_LINK")}
							/>
						</div>
						<UserSettings />
					</div>
				</div>
			</div>
		</nav>
	)
}
