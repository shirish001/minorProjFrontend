import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

function Homepage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Perfect Stay, Effortlessly!</h1>
          <p>
            Welcome to RentEase, your trusted platform for finding ideal
            accommodations tailored to students and professionals. Whether you
            are looking for PGs, hostels, or flats, we simplify the search
            process with a curated selection of verified listings. Discover
            comfortable and budget-friendly spaces, and settle into your new
            home with ease!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>4.5+</h1>
              <h2>Rated By Users</h2>
            </div>
            <div className="box">
              <h1>100k+</h1>
              <h2>Monthy Visits</h2>
            </div>
            <div className="box">
              <h1>24/7</h1>
              <h2>Support Available</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        {/* <img src="/bg.png" alt="homepage-img"></img> */}
        <img src="/hostel.png" alt="homepage-img"></img>
      </div>
    </div>
  );
}

export default Homepage;
