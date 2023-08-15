import "../css/form.css"
import { useEffect, useState } from "react"

const Form = (props) =>{

	const printInfo = (data) => {
		setUserinfo(data)
	}

	const [userinfo, setUserinfo] = useState('sdfds')
	useEffect(() =>{
		let obj = document.getElementsByClassName('maintext')
		for (let i = 0 ; i < obj.length; i++)
		obj[i].innerText = userinfo
	})

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
			<p className="maintext"></p>
		</form>
	);
	
}
Form.defaultProps = {
	info: "это пропс по умолчанию"
}
export default Form