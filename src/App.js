import { Navbar, Posting } from "./component";
import { Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CeritaHome, ReelsHome, ForumHome } from "./component/Molekul";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path='/' element={<CeritaHome/>}/>
            <Route path='/reels' element={<ReelsHome/>}/>
            <Route path='/forum' element={<ForumHome/>}/>
          </Route>
          <Route path='/post' element={<Posting/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
