import { configureStore } from "@reduxjs/toolkit"
import todos from "../modules/todosSlice"
import users from "../modules/usersSlice"

const store = configureStore({
    reducer: {
        todos,
        users,
    }
})

export default store