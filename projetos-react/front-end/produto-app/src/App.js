import React from 'react';
import './App.css';
import Nav from "./template/Nav";
import Routes from "./Routes";

export default function App() {
    return (
        <React.Fragment>
            <Nav/>
            <Routes/>
        </React.Fragment>

    );
}

// <div className="row">
//     <div className="container-fluid">
//         <CardList>
//             <div className="row">
//                 <div className="col-xl-3 col-lg-4 col-md-6">
//                     <Card/>
//                 </div>
//                 <div className="col-xl-3 col-lg-4 col-md-6">
//                     <Card/>
//                 </div>
//
//             </div>
//
//         </CardList>
//     </div>
// </div>