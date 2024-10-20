



import React from "react";
import'../index.css'
import SearchInputForm from "./SearchBar";


const InnerCover = () => {
    return(
        <section className="showcase-inner-container">


            <div className="overlay"></div> 
           <div className="showcase-content">
           <SearchInputForm darkTheme={true} />
           

           </div>


        </section>

        

    )
}

export default InnerCover;