import { Link } from "@remix-run/react"
import { IAuthLinkProps } from "~/types/layout"

export default function AuthLink({ path, text }: IAuthLinkProps): JSX.Element {
	return (
		<Link
			to={path}
			className="rounded-lg text-center bg-konytool-m px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-konytool-d"
		>
			{text}
		</Link>
	)
}
