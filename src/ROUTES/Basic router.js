import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../PAGES/Home/home'
import NavBar from '../COMMON/Navbar'
import Bollywood from '../PAGES/Bollywood/bollywood'
import BollywoodDetails from '../PAGES/Bollywood/bollywood details'
import Technology from '../PAGES/Technology/technology'
import TechnologyDetails from '../PAGES/Technology/technologydetails'
import Hollywood from '../PAGES/Hollywood/hollywood'
import HollywoodDetails from '../PAGES/Hollywood/hollywood details'
import Fitness from '../PAGES/Fitness/fitness'
import FitnessDetails from '../PAGES/Fitness/fitness details'
import Food from '../PAGES/Food/food'
import FoodDetails from '../PAGES/Food/food details'
import PageNotFound from '../PAGES/PageNotFound/pagenotfound'

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/:Id" element={<Home />} />

                <Route path="/bollywood" element={<Bollywood Title="Bollywood" />} />
                <Route path="/bollywood/:Id" element={<BollywoodDetails />} />

                <Route path="/technology" element={<Technology Title="Technology" />} />
                <Route path="/technology/:Id" element={<TechnologyDetails />} />

                <Route path="/hollywood" element={<Hollywood Title="Hollywood" />} />
                <Route path="/hollywood/:Id" element={<HollywoodDetails />} />

                <Route path="/fitness" element={<Fitness Title="Fitness" />} />
                <Route path="/fitness/:Id" element={<FitnessDetails />} />

                <Route path="/food" element={<Food Title="Food" />} />
                <Route path="/food/:Id" element={<FoodDetails />} />

                <Route path="*" element={<PageNotFound />} /> 
            </Routes>
        </BrowserRouter>
    )
}
export default RouterComponent;