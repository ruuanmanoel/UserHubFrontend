import {useRef} from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"
import api from '../../services/api'
function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const {data:token} = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            localStorage.setItem('token', token);
            navigate('/listar-usuarios')
        } catch (error) {
            alert('senha ou email incorreto')
        }

    }

    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2  className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required/>
                <input ref={passwordRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required/>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:underline hover:bg-blue-400">Cadastre-se</button>
                <Link to={'/'} className="text-blue-700 hover:underline text-center mt-4">Não tem uma conta? Cadastre-se</Link>
            </form>
        </div>
    )
}

export default Login