import * as React from "react"

const useClickOutside = (
	state: boolean,
	setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const ref = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setState(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [state, setState])

	return ref
}

export default useClickOutside
