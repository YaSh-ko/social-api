import { useNavigate } from "react-router-dom";
import { useState } from "react"

import './register.scss'
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    })

    const [err, setErr] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8080/api/auth/register", inputs)
        } catch(err: any) {
            setErr(err.response.data);
        }
    }
     
    return (
        <div className="register">
            <div className="card">
                <div className="right">
                    <h1>Регистрация</h1>
                    <form action="">
                        <input type="text" placeholder='Введите логин' name="username" onChange={handleChange}/>
                        <input type="email" placeholder='Введите email' name="email" onChange={handleChange}/>
                        <input type="password" placeholder='Введите пароль' name="password" onChange={handleChange} />
                        <input type="text" placeholder='Введите имя' name="name" onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleClick}>Зарегистрироваться</button>
                    </form>
                </div>

                <div className="left">
                    <h1>My Social</h1>
                    <p>Это больше, чем просто соцсеть — это пространство для амбициозных. Здесь собираются те, кто хочет расти, учиться, создавать и находить единомышленников. Вдохновляйся и вдохновляй других. Вместе — сильнее.</p>
                    <span>Ты уже с нами? Возвращайся</span>
                    <button onClick={() => navigate("/login")}>Вход</button>
                </div>
            </div>
        </div>
    )
}

export default Register;