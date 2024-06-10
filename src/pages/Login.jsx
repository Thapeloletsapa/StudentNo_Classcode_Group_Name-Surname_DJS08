import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"



export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
