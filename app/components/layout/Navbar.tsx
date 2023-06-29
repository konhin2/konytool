import { SignedIn, SignedOut, UserButton } from "@clerk/remix"
import { NavLink } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import { twMerge } from "tailwind-merge"
import Icon from "~/../public/favicon.ico"
import AuthLink from "./AuthLink"
import { SidebarLinkClass } from "./constants"

const Navbar: React.FC = () => {
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
							<SignedIn>
								<NavLink
									to={"/dashboard"}
									className={({ isActive }) =>
										twMerge(inactive, isActive && active)
									}
								>
									{t("common.DASHBOARD_LINK")}
								</NavLink>
							</SignedIn>
						</div>
					</div>
					<div className="flex items-center justify-items-center">
						<SignedOut>
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
						</SignedOut>
						<SignedIn>
							<UserButton afterSignOutUrl="/login" />
						</SignedIn>
					</div>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
