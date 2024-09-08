import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar'
function homePage() {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">

            <h1 className='title'>
                Your Trusted Gateway to Exceptional Real Estate Opportunities!
            </h1>
            <p>
                Estate Hub connects you with top real estate opportunities, from homes to investment properties. With a focus on transparency, affordability, and personalized service, we help you find the perfect property to match your needs.
            </p>
            <SearchBar />
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experince</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>2000+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default homePage