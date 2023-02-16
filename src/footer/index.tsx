import "./style.css"
export default function Footer() {
    return (
        <footer className="footer pt-5">
            <div className="container border-bottom border-1 pb-5">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="pt-5 ps-md-2 pe-md-2">
                            <img
                                src="./images/logo.png"
                                className="img-fluid"
                                alt=""
                            />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam. quis nostrud
                                exercitation ullamco laboris commodo conse.
                            </p>
                            <a href="#" className="text-blue h-text-red text-decoration-none trans-3"><i className="fa-solid fa-circle-arrow-right"></i><span className="ps-2 pe-2">Read more</span></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="pt-4 ps-md-3 pe-md-3">
                            <h3 className="text-blue">Helpful Links</h3>
                            <ul className="links-array row list-unstyled p-0 m-0 row text-capitalize">
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">About</a>
                                </li>
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">Portfolio</a>
                                </li>
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">Team</a>
                                </li>
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">Pricing</a>
                                </li>
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">Privacy Policy</a>
                                </li>
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">FAQ</a>
                                </li>
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">Blog</a>
                                </li>
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">How It Works</a>
                                </li>
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">Benefits</a>
                                </li>
                                <li className="col-6 mt-2">
                                    <a href="#" className="text-blue h-text-red text-decoration-none trans-3">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="pt-4 ps-md-3 pe-md-3">
                            <h3 className="text-blue mb-4">Contact Us</h3>
                            <p>54958 Levo Road Near Red Fort, EG</p>
                            <p>Phone: 01091907365</p>
                            <p>
                                Email: <a href="mailto:emam54637@gmail.com" className="text-decoration-none text-blue h-text-red trans-3">emam54637@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-4 pb-4">
                <p className="text-666 fs-6">Copyright 2017 EliteCorp | All Rights Reserved</p>
                <div className="social-icons fs-6 pt-3">
                    
                    <a href=""><i className="fa-brands fa-facebook-f h-text-red"></i></a>
                    <a href=""><i className="fa-brands fa-twitter  h-text-red"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin h-text-red"></i></a>
                    <a href=""><i className="fa-brands fa-pinterest-p h-text-red"></i></a>
                </div>
            </div>
        </footer>
    );
}
