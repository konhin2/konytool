import { SignIn } from "@clerk/remix"
import { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Login" }]
}
const Login: React.FC = () => {
	return (
		<div className="flex h-100 flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-b from-konytool-d via-konytool-m to-konytool-l">
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<SignIn redirectUrl={"/dashboard"} path={"/login"} />
			</div>
		</div>
	)
}
export default Login
