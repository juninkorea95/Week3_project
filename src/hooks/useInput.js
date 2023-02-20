// input 태그 두 개를 한꺼번에 관리하는 커스텀 훅 

import { useState } from "react"

const useInput = () => {
    const [value, setValue] = useState('')

    const Handler = (e) => {
        setValue(e.target.value)
    }

    return [value, Handler]
}

export default useInput