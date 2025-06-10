import { Route, Routes } from 'react-router-dom'
import LoginUser from '../Login'
import UserArea from '../UserArea'

function Router() {
    return (
        <Routes>
            <Route path="/login" element={<LoginUser />} />
            <Route path="/eventos" element={<UserArea />} />
        </Routes>
    )
}

export default Router