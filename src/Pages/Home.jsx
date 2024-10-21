import CustmerCover from "../Component/CustmerCover";
import CustmerNavbar from "../Component/CustmerNavbar";
import RecentAdd from "../Component/RecentAdd";
import BooksList from "../Pages/BooksList";




/**
 * The Home component renders the main page of the application.
 * It contains the CustmerNavbar, the CustmerCover, the BooksList, and the RecentAdd components.
 * @returns {JSX.Element}
 */
function Home() {
    return (
        <div>
            {/* The CustmerNavbar component renders the navbar at the top of the page. */}
            <CustmerNavbar />
            {/* The CustmerCover component renders the cover image and the search bar. */}
            <CustmerCover />
            {/* The BooksList component renders the list of books. */}
            <BooksList showPagination={false} showSearch={false}/>
            {/* The RecentAdd component renders the list of recently added books. */}
            <RecentAdd />
        </div>
    );
}

export default Home;
