import "../css/form.css"
import { useState } from "react"

const Form = (props) =>{

	const printInfo = (data) => {
		setUserinfo(data)
	}

	const [userinfo, setUserinfo] = useState("Some")

	return (
		<form>
			<h2>{userinfo}</h2>
			<input className="input" placeholder={props.info} />
			<button
				type="button"
				onClick={e => printInfo("Click") }
			>
				Click me
			</button>
		</form>
	);
	
}
Form.defaultProps = {
	info: "это пропс по умолчанию"
}
export default Form