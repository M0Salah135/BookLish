
import React from "react";
import './showcase.styles.css'
import SearchInputForm from "./SearchBar";


const CustmerCover = () => {
    return (
        <section className="showcase-container">
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Best <span className="text-orange">Books</span> Available</h1>
                <p>Buy quality books at cheaper price</p>
                <SearchInputForm darkTheme={true} />
            </div>
        </section>
    )
}

export default CustmerCover;