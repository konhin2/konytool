import { cssBundleHref } from "@remix-run/css-bundle"
import type { DataFunctionArgs, LinksFunction } from "@remix-run/node"
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData
} from "@remix-run/react"
import { Navbar } from "~/components/layout"
import stylesheet from "~/tailwind.css"
import { fetchPathParts } from "~/utils/request.utils"
import Icon from "./../public/favicon.ico"

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
	{ rel: "icon", type: "image/png", href: Icon },
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])
]
export async function loader({ request }: DataFunctionArgs) {
	const path = await fetchPathParts({ requestUrl: request.url })
	return { path }
}

export default function App(): JSX.Element {
	const { path } = useLoaderData<typeof loader>()
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<Navbar path={path} />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
