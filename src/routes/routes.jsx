import { Route, Routes } from 'react-router-dom'
import LoginUser from '../pages/Login'
import UserArea from '../pages/UserArea'

function Router() {
    return (
        <Routes>
            <Route path="/login" element={<LoginUser />} />
            <Route path="/eventos" element={<UserArea />} />
        </Routes>
    )
}

export default Router