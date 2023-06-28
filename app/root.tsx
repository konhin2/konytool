import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix"
import { rootAuthLoader } from "@clerk/remix/ssr.server"
import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction, LoaderFunction } from "@remix-run/node"
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from "@remix-run/react"
import { I18nextProvider } from "react-i18next"
import { Navbar } from "~/components/layout"
import stylesheet from "~/tailwind.css"
import Icon from "./../public/favicon.ico"
import i18n from "./i18n"

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
	{ rel: "icon", type: "image/png", href: Icon },
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])
]

export const loader: LoaderFunction = (args) => rootAuthLoader(args)
export const CatchBoundary = ClerkCatchBoundary()
const App = () => {
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
				<I18nextProvider i18n={i18n}>
					<Navbar />
					<Outlet />
				</I18nextProvider>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
export default ClerkApp(App)
