import { IPathParts } from "~/types/layout"
export async function fetchPathParts({ requestUrl }: IPathParts) {
	const { pathname } = await new URL(requestUrl)
	const pathParts = pathname.split("/")
	return "/" + pathParts[1]
}
