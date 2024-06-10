import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"


export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        const typeFilter = searchParams.get("type")

        React.useEffect(() => {
            async function loadVans() {
                setLoading(true)
                try {
                    const data = await getVans()
                    setVans(data)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
    
            function handleFilterChange(key, value) {
                setSearchParams(prevParams => {
                    if (value === null) {
                        prevParams.delete(key)
                    } else {
                        prevParams.set(key, value)
                    }
                    return prevParams
                })
            }
        
            if (loading) {
                return <h1>Loading...</h1>
            }
            
            if (error) {
                return <h1>There was an error: {error.message}</h1>
            }