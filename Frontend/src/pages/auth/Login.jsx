import { useState } from "react";
import { axiosClient } from "../../services/axiosClient";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";




export const Login = () => {
    const disp = useDispatch()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const onsubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post("/user/login", formData)
            console.log(response.data)
            disp(login(response.data))
        } catch (err) {
            if (err.response) {
                console.log(err.response.data)
            }
        }
    }

        return (
            <div>
                <form onSubmit={onsubmit}>
                    <div>
                        <label htmlFor="email">email</label>
                        <input name="email" type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input name="password" type="password" onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit">login</button>
                    </div>
                </form>
            </div>
        )
    }