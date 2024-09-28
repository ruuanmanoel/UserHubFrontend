import {useRef} from 'react'
import { Link } from "react-router-dom"

function Cadastro(){
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    function handleSubmit(event){
        event.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

    }

    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2  className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
            <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input ref={nameRef} placeholder="Nome" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required/>
                <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required/>
                <input ref={passwordRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required/>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:underline hover:bg-blue-400">Cadastre-se</button>
                <Link to={'/login'} className="text-blue-700 hover:underline text-center mt-4">Ja tem uma conta? Faça login</Link>
            </form>
        </div>
    )
}

export default Cadastro