import react from 'react';
//importimg Navbar, heroimage components in Home page for display
import Navbar from '../components/Navbar';
import Heroimage from '../components/Heroimage';
import Footer from '../components/Footer';

const Home = () => {
    return(
        //calling Navbar.js file from home page
        <div>                    
        <Navbar/>
        <Heroimage />
        <Footer />
        </div>
    )
}

export default Home;