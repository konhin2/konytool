import * as React from "react"

export const useLinkToggle = (initialPath: string) => {
	const [activeLink, setActiveLink] = React.useState<string>(initialPath)

	const handleClickLink = (path: string) => {
		if (activeLink !== path) {
			setActiveLink(path)
		}
	}

	return {
		activeLink,
		handleClickLink
	}
}
