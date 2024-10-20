import CustmerCover from "../Component/CustmerCover";
import CustmerNavbar from "../Component/CustmerNavbar";
import RecentAdd from "../Component/RecentAdd";
import BooksList from "../Pages/BooksList";




function Home() {
    return (
        <div>
            <CustmerNavbar />
            <CustmerCover />
            <BooksList/>
            <RecentAdd />
        </div>
    );
}

export default Home;