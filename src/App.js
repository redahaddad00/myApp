import logo from './logo.svg';
import './App.css';
import About from './componants/about/About';
import Navbar from './componants/navbar/Navbar';
import Home from './componants/home/Home';
import Footer from './componants/footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Masterlayout from './componants/masterPage/Masterlayout';
import Portfolio from './componants/portfolio/Portfolio';
import Contacts from './componants/contacts/Contacts';
import Notfound from './componants/notFound/Notfound';




const router =createBrowserRouter([
  {
path:'',element:<Masterlayout/>,children:[
  {path:'home',element:<Home/>},
  {path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contacts/>},
  {path:'', element:<Home/>},
  {path:'*',element:<Notfound/>}
]
  }
])




function App() {
  return (
    <div className="App">
  
        
      
     
  <RouterProvider router={router}/>
   
   
    </div>
  );
}

export default App;
