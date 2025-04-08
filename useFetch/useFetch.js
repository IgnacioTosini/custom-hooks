import { useEffect, useState } from "react"

const localCache = {}

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null,
    });

    useEffect(() => {
        getFetch()
    }, [url]);

    const setLoading = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            errorMessage: null,
        })
    }

    const getFetch = async () => {
        if (localCache[url]) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                errorMessage: null,
            })
            return;
        }
        setLoading()
        const res = await fetch(url)
        if (!res.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                errorMessage: {
                    code: res.status,
                    message: res.statusText,
                }
            })
            return;
        }
        const data = await res.json()
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            errorMessage: null,
        })
        localCache[url] = data;
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
