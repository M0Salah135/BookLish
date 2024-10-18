import CustmerCover from "../Component/CustmerCover";
import CustmerNavbar from "../Component/CustmerNavbar";
import BooksList from "./BooksList";




function HomeSub() {
    return (
        <div>
            <CustmerNavbar darkTheme={true}/>
            <BooksList/>
        </div>
    );
}

export default HomeSub;