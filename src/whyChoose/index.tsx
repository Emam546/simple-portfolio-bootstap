import "./style.css";
export default function WhyChooseUs() {
    return (
        <div className="why-choose-us">
            <div className="row align-items-stretch p-0 m-0">
                <div className="col-lg-6 position-relative p-0 m-0">
                    <div
                        className="img-container"
                        style={{
                            backgroundImage:
                                'url("./images/man.jpg")',
                        }}
                    ></div>
                </div>
                <div className="col-lg-6 p-0 m-0">
                    <div className="text-container bg-blue text-white ps-5 pe-5 lh-l fs-5">
                        <h1 className="fw-boldest display-3 mb-4">Why Choose Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </p>
                        <a href="#" className="d-block w-fit mt-5 bg-red h-bg-blue trans-3 p-3 ps-5 pe-5 text-decoration-none text-white">VIEW MORE</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
