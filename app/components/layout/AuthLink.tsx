import { Link } from "@remix-run/react"
import { IAuthLinkProps } from "~/types/layout"

const AuthLink: React.FC<IAuthLinkProps> = ({ path, text }) => {
	return (
		<Link
			to={path}
			className="rounded-lg text-center bg-konytool px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-konytool-d"
		>
			{text}
		</Link>
	)
}
export default AuthLink
