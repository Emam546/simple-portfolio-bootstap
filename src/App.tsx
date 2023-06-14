import "./App.css";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/js/bootstrap.bundle.min";
import Features from "./Feautures";
import LastPost from "./LastPost";
import NumProjects from "./NumProjects";
import ContactUs from "./contactus";
import Footer from "./footer";
import Landing from "./landing";
import NavBar from "./navbar";
import OverView from "./overView";
import Pricing from "./pricing";
import Services from "./services";
import TeamMates from "./team-mates";
import WhyChooseUs from "./whyChoose";
function App() {
    return (
        <>
            <NavBar />
            <main>
                <Landing />
                <Services />
                <OverView />
                <Features />
                <LastPost />
                <TeamMates />
                <Pricing />
                <WhyChooseUs />
                <NumProjects />
                <ContactUs />
            </main>
            <Footer />
        </>
    );
}

export default App;
