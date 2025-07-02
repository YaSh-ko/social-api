import { useNavigate,  } from "react-router-dom";
import './login.scss'
import { useContext, useState } from 'react';
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const navigate = useNavigate();

     const [inputs, setInputs] = useState({
            username: "",
            password: "",
        })
    
    const [err, setErr] = useState<string | null>(null);
    
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const { login } = useContext(AuthContext);

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            await login(inputs);
            navigate("/")
        } catch (err: any) {
            setErr(err.response.data);
        }
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>My Social</h1>
                    <p>Это больше, чем просто соцсеть — это пространство для амбициозных. Здесь собираются те, кто хочет расти, учиться, создавать и находить единомышленников. Вдохновляйся и вдохновляй других. Вместе — сильнее.</p>
                    <span>Еще не с нами? Присоединяйся</span>
                    <button onClick = {() => navigate("/register")}>Регистрация</button>
                </div>
                <div className="right">
                    <h1>Войти</h1>
                    <form action="">
                        <input type="text" placeholder='Введите имя' name="username" onChange={handleChange}/>
                        <input type="password" placeholder='Введите пароль' name="password" onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleLogin}>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;