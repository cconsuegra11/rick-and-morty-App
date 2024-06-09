import { useState } from "react"
import axios from "axios"

const useFetch = () => {
    const [ apiData, setApiData ] = useState()
    const [isloading, setisloading] = useState()
    const [hasError, sethasError] = useState()

    const getApi = url => {
        setisloading(true)
        axios.get (url)
        .then ( resp => {
            sethasError(false)
            setApiData( resp.data )
            })
        .catch( error => {
            sethasError(true)
            console.log(error)
            })
        .finally(() => {
            setTimeout(() => {
                setisloading(false)
            }, 500)
        })
    }
    return [ apiData, getApi, isloading, hasError ]
}

export default useFetch