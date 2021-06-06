import {useCallback} from "react";

export const useMessage = () => {

    return useCallback(text => {
        if(window.alert && text) {
            return (
                window.alert(text)
            )
        }
    }, [])
}