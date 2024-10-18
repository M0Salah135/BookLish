import CustmerCover from "../Component/CustmerCover";
import CustmerNavbar from "../Component/CustmerNavbar";
import BooksList from "../Pages/BooksList";




function Home() {
    return (
        <div>
            <CustmerNavbar />
            <CustmerCover />
            <BooksList/>
        </div>
    );
}

export default Home;