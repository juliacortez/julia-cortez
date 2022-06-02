import React from "react"
import {
    Routes,
    Route
} from 'react-router-dom'
import CreateUserPage from "../pages/CreateUserPage/CreateUserPage"
import EditUserPage from "../pages/EditUserPage/EditUserPage"
import HomePage from "../pages/HomePage/HomePage"


function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/criar" element={<CreateUserPage />} />
            <Route path="/editar/:id" element={<EditUserPage />} />
        </Routes>
    )
}

export default MainRoutes