import React from "react";
import ReactDOM  from "react-dom/client";
// import Title from './components/Title.js'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { IMG_CDN_URL } from "./config";
import Shimmer from "./components/Shimmer.js";
import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom';
import About from '../src/components/About'
import Error from '../src/components/Error';
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestrauntMenu";


const AppLayout = () =>{
    return (
        <React.Fragment>            
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element: <About />,
            },
            {
                path:'/contact',
                element: <Contact />,
            },
            {
                path: '/restaurent/:id',
                element: <RestaurentMenu />
            }
        ]
    },
    // {
    //     path:"/about",
    //     element:<About />
    // },
    
])





const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)






// const jsx = (
//      <React.Fragment>
//     <div  style={{
//     border: '1px solid black'
//         }}>
//             <h1>Jsx</h1>
//         <h1>second jsx</h1>


//     </div>
    
//      </React.Fragment>
// )

// const something = (
//     <h1 id="title">Food Villa</h1>
// )

/**
 * 
 * Header
 * body 
 *      -search bar
 *      -restuarentlist
 *          -restuarentCArd
 *              -Image
 *              -name
 *              -rating
 *              -cousin
 * footer
 *  -links
 *  -copyright
 * 
 * 
 * 
 */

// const heading = React.createElement(
//     "h1",
//     {
//     id: "title",
//     key: "h1"
// },
// "Heading 1");
// const heading2 = React.createElement('h2',{
//     id: "title",
//     key: "h2"
// },"heading 2 of para")



// const container = React.createElement('div',
// {
//     id: "container",
//     hellow:'heelowe'
// },[heading, heading2]

// )




// const burgerKing = {
//     name:"Burger King",
//     img :IMG_CDN_URL,
//     cusines: ['burger','pizaa'],
//     rating: "4.2"

// }





// const HeaderComponent3 = function(){
//     return(
//         <div>

//             <h1>as a javascript function</h1>
//             {/* <h2>This is a functional component</h2> */}
//         </div>
//     );
// }

// const HeaderComponent = ()=>{
//     return (
//         <div>
//             {something}
//             <HeaderComponent></HeaderComponent>
//             <HeaderComponent2/>
//             {HeaderComponent3()}
//             {console.log('hello')}
//             <h1>This is a functional component</h1>
//             <h2>This is a functional component</h2>
//         </div>
//     );
// }

// {/* <div class="header">
//         <h1>Namaste React</h1>
//         <ul>
//             <li>About Us</li>
//             <li>support</li>
//             <li>contact</li>
//         </ul>
// </div> */}   


// root.render(container);

// root.render(<HeaderComponent2 />)
// root.render(jsx)