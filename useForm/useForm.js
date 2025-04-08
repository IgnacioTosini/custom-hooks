import { useState } from "react";

export default function useForm(initialForm = {}) {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
