// import react from "react"
import logo from '../logo.JPG'
import './home.css';


function Home(props) {
    return (
        <div>
            Home Page
            <div className="whole">
            
            <div className="content">
            <img className='img' src={logo} alt="Logo" />
            <p className='para'>Tiruvannamalai is a city, a spiritual, cultural, economic hub and also the administrative headquarters of Tiruvannamalai District in the Indian state of Tamil Nadu. The city is home to the renowned Annamalaiyar temple, Annamalai hill, Girivalam and the Karthigai deepam festival. Being a prominent tourist destination which attracts considerable foreign visitors. The city is among one of the cities featured in lonely planet.the city has a thriving service sector industry including retail, resorts and recreation activities. Apart from the service sector, the city is also the hub for many industrial setups including SIDCO, spinning mills and premier educational institutions. The city is administered by the Tiruvanamalai Municipality, originally constituted in the year 1886. The city has a good network of roadways and railways and a popular getaway to the Megacities of Chennai and Bengaluru. The Union Ministry of Civil Aviation is considering setting up a new airport at Tiruvannamalai</p>
             </div>


            </div>
        </div>
    )
}

export default Home