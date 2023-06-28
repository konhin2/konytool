import { SignUp } from "@clerk/remix"
import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Signup" }]
}
const Signup: React.FC = () => {
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<SignUp redirectUrl={"/dashboard"} path={"/signup"} />
			</div>
		</div>
	)
}
export default Signup
