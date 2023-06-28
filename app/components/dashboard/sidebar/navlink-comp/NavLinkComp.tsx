import { NavLink } from "@remix-run/react"
import { twMerge } from "tailwind-merge"
import { SidebarLinkClass } from "~/components/dashboard/constants"
import { INavLinkProps } from "~/types/dashboard"

export default function NavLinkComp({
	path,
	text,
	iconPath
}: INavLinkProps): JSX.Element {
	const { activeText, inactiveText } = SidebarLinkClass
	return (
		<li>
			<NavLink
				to={path}
				className={({ isActive }) =>
					twMerge(inactiveText, isActive && activeText)
				}
			>
				<svg
					className="h-6 w-6 shrink-0"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d={iconPath}
					/>
				</svg>
				{text}
			</NavLink>
		</li>
	)
}
