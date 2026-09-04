import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes(){
  return (<Router>
    <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}/>
        <Route path="/movies/:movieid" element={<MovieDetails></MovieDetails>}/>
    </Routes>
  </Router>)
}