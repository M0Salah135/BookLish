



import React from "react";
import'../index.css'
import SearchInputForm from "./SearchBar";


/**
 * InnerCover component
 * This component is a part of the main cover component of the website
 * It contains a background image with a gradient overlay
 * The content is positioned absolute and contains a heading, a paragraph and a search bar
 * @returns {JSX.Element}
 */
const InnerCover = () => {
    return(
        <section className="showcase-inner-container">

            {/* Overlay with gradient which is positioned absolute */}
            <div className="overlay"></div> 

            {/* Content container which is positioned absolute and contains all the content */}
           <div className="showcase-content">
                {/* Search bar component which is imported from the SearchBar file */}
                <SearchInputForm darkTheme={true} />
           

           </div>

        </section>

        

    )
}

export default InnerCover;
