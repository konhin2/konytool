export const SidebarLinkClass = {
	activeText: "bg-gray-50 text-konytool",
	inactiveText:
		"text-gray-700 hover:text-konytool hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
	activeIcon: "h-6 w-6 shrink-0 text-konytool",
	inactiveIcon:
		"h-6 w-6 text-gray-400 group-hover:text-konytool group-hover:text-konytool"
}

export const SidebarLink = [
	{
		path: "/dashboard/board",
		text: "BOARD_LINK",
		icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
	},
	{
		path: "/dashboard/team",
		text: "TEAM_LINK",
		icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
	},
	{
		path: "/dashboard/stories",
		text: "STORIES_LINK",
		icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
	},
	{
		path: "/dashboard/reports",
		text: "REPORTS_LINK",
		icon: "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
	}
]
