import CustmerCover from "../Component/CustmerCover";
import CustmerNavbar from "../Component/CustmerNavbar";
import ProductList from "./ProductList";




function Home() {
    return (
        <div>
            <CustmerNavbar />
            <CustmerCover />
            <ProductList />
        </div>
    );
}

export default Home;