import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Registration"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Events } from "./pages/Events"
import { Explore } from "./pages/Explore"
import { Home } from "./pages/Home"
import { Tour } from "./pages/Tour"
import { Navbar } from "./components/Navbar"
import { Logout } from "./pages/Logout"
import { Testing } from "./pages/Testing"
import { AddItinerary } from "./pages/AddItenirary"
import { Error } from "./pages/Error"
import { AddCity } from "./pages/AddCity"


export const App = () => {

    return(<>

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/events" element={<Events/>} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/city" element={<Tour/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/testing" element={<Testing/>} />
                <Route path="/additinerary" element={<AddItinerary/>} />
                <Route path="/addcity" element={<AddCity/>} />
                <Route path="/*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    </>)

}