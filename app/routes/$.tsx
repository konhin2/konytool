import { Link, V2_MetaFunction } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import NotFoungImg from "~/../public/images/not_found.jpg"

export const meta: V2_MetaFunction = () => {
	return [{ title: "404 Not Found" }]
}

const Notfound: React.FC = () => {
	const { t } = useTranslation()
	return (
		<main className="isolate">
			<img
				src={NotFoungImg}
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
			/>
			<div className="mx-auto max-w-7xl px-6 text-center sm:py-20 lg:px-8">
				<p className="text-base font-semibold leading-8 text-konytool">
					404
				</p>
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-konytool sm:text-5xl">
					{t("common.NOT_FOUND")}
				</h1>
				<p className="mt-4 text-base text-konytool sm:mt-6">
					{t("common.NOT_FOUND_MESSAGE")}
				</p>
				<div className="mt-8 flex justify-center">
					<Link
						to="/"
						className="text-sm font-semibold leading-7 text-konytool"
					>
						<span aria-hidden="true">&larr;</span>{" "}
						{t("common.NOT_FOUND_LINK")}
					</Link>
				</div>
			</div>
		</main>
	)
}
export default Notfound
