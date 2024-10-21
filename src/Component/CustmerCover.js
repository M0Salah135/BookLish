



import React from "react";
import'../index.css'
import SearchInputForm from "./SearchBar";


const CustmCover = () => {
    // This is the main cover component of the website
    // It contains a background image with a gradient overlay
    // The content is positioned absolute and contains a heading, a paragraph and a search bar
    return (
        <section className="showcase-container">


            {/* This is the overlay with gradient which is positioned absolute */}
            <div className="overlay"></div> 
            {/* This is the content container which is positioned absolute and contains all the content */}
           <div className="showcase-content">
            <h1>Best <span className="text-orange">Books</span> Available</h1>
            <p>Buy quality books at cheaper price</p>

            {/* This is the search bar component which is imported from the SearchBar file */}
            <SearchInputForm darkTheme={true} />

           </div>


        </section>


        

    )
}

export default CustmCover;