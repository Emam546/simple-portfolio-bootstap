import "./style.css"
export default function Pricing() {
    return (
        <div className="pricing pt-5 pb-5 bg-section text-center">
            <div className="container">
                <h1 className="fw-boldest mb-4">Pricing Table</h1>
                <p className="text-555 wm-600px m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                    enim veniam.
                </p>
                <div className="row">
                <div className="col-md-6 col-lg-4 ps-3 pe-3 pt-3">
                        <div className="box plan-table bg-white pt-2 pb-5">
                            <h3 className="fw-bold text-blue pt-4 mb-2">Small Business</h3>
                            <span className="text-t1 mb-5">Lorem ipsum</span>
                            <span className="bg-section text-blue fw-boldest display-5 d-block mt-4 p-1">
                                $99/<span className="fs-6 fw-normal">YEAR</span>
                            </span>
                            <ul className="list-unstyled text-555 pt-3 pb-5">
                                <li className="mt-4">1 Hosting</li>
                                <li className="mt-4">Upto 10 users</li>
                                <li className="mt-4">3 databases</li>
                                <li className="mt-4">Website builder</li>
                                <li className="mt-4">Email Support</li>
                            </ul>
                            <a href="#" className="d-block trans-3 w-fit m-auto text-decoration-none bg-red h-bg-blue p-3 ps-5 pe-5 text-white fw-boldest">BUY NOW</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 ps-3 pe-3 pt-3">
                        <div className="box plan-table bg-white pt-2 pb-5">
                            <h3 className="fw-bold text-blue pt-4 mb-2">Corporate</h3>
                            <span className="text-t1 mb-5">Lorem ipsum</span>
                            <span className="bg-red text-white fw-boldest display-5 d-block mt-4 p-1">
                                $199/<span className="fs-6 fw-normal">YEAR</span>
                            </span>
                            <ul className="list-unstyled text-555 pt-3 pb-5">
                                <li className="mt-4">1 Hosting</li>
                                <li className="mt-4">Upto 10 users</li>
                                <li className="mt-4">3 databases</li>
                                <li className="mt-4">Website builder</li>
                                <li className="mt-4">Email Support</li>
                            </ul>
                            <a href="#" className="d-block trans-3 w-fit m-auto text-decoration-none bg-red h-bg-blue p-3 ps-5 pe-5 text-white fw-boldest">BUY NOW</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 ps-3 pe-3 pt-3">
                        <div className="box plan-table bg-white pt-2 pb-5">
                            <h3 className="fw-bold text-blue pt-4 mb-2">Enterprices</h3>
                            <span className="text-t1 mb-5">Lorem ipsum</span>
                            <span className="bg-section text-blue fw-boldest display-5 d-block mt-4 p-1">
                                $299/<span className="fs-6 fw-normal">YEAR</span>
                            </span>
                            <ul className="list-unstyled text-555 pt-3 pb-5">
                                <li className="mt-4">1 Hosting</li>
                                <li className="mt-4">Upto 10 users</li>
                                <li className="mt-4">3 databases</li>
                                <li className="mt-4">Website builder</li>
                                <li className="mt-4">Email Support</li>
                            </ul>
                            <a href="#" className="d-block trans-3 w-fit m-auto text-decoration-none bg-red h-bg-blue p-3 ps-5 pe-5 text-white fw-boldest">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
