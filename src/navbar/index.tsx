import "./style.css";
export default function NavBar() {
    return (
        <>
            <nav className="navbar d-md-none navbar-dark bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img
                            src="./images/logo.png"
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                    <button
                        className="btn btn-light toggle-btn fs-3"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div
                        className="offcanvas offcanvas-end text-bg-dark w-50"
                        data-tabindex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-body p-0">
                            <ul className="navbar-nav justify-content-end flex-grow-1 p-0">
                                <li className="nav-item">
                                    <div className="accordion-item">
                                        <button
                                            className="d-flex justify-content-between align-items-center w-100 text-bg-dark  ps-3 pe-2"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseHomeInput"
                                            aria-expanded="true"
                                            aria-controls="collapseHomeInput"
                                        >
                                            <a
                                                href="#"
                                                className="nav-link active"
                                            >
                                                Home
                                            </a>
                                            <i className="fa-solid fa-chevron-up open"></i>
                                            <i className="fa-solid fa-chevron-down close"></i>
                                        </button>
                                        <div
                                            id="collapseHomeInput"
                                            className="accordion-collapse collapse show p-0"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <ul className="list-unstyled p-0">
                                                <a
                                                    href="#"
                                                    className="nav-link p-0"
                                                >
                                                    <li className="p-2 ps-3 pe-2">Home 1</li>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="nav-link p-0"
                                                >
                                                    <li className="p-2 ps-3 pe-2">Home 2</li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <a href="#" className="nav-link p-0">
                                    <li className="p-2 ps-3 pe-2">About</li>
                                </a>
                                <a href="#" className="nav-link p-0">
                                    <li className="p-2 ps-3 pe-2">Work</li>
                                </a>
                                <a className="nav-link p-0" href="#">
                                    <li className="p-2 ps-3 pe-2">
                                            Link
                                    </li>
                                </a>
                                <li className="nav-item">
                                    <div className="accordion-item">
                                        <button
                                            className="d-flex justify-content-between align-items-center w-100 text-bg-dark p-2 ps-3 pe-2"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#CollapseBlogControl"
                                            aria-expanded="true"
                                            aria-controls="CollapseBlogControl"
                                        >
                                            <a
                                                href="#"
                                                className="nav-link p-0"
                                            >
                                                Blog
                                            </a>
                                            <i className="fa-solid fa-chevron-up open"></i>
                                            <i className="fa-solid fa-chevron-down close"></i>
                                        </button>
                                        <div
                                            id="CollapseBlogControl"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <ul className="list-unstyled">
                                                <a
                                                    href="#"
                                                    className="nav-link p-0"
                                                >
                                                    <li className="p-2 ps-3 pe-2">Blog Details</li>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="nav-link p-0"
                                                >
                                                    <li className="p-2 ps-3 pe-2">Blog Full width</li>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="nav-link p-0"
                                                >
                                                    <li className="p-2 ps-3 pe-2">Blog Left Image</li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <a href="#" className="nav-link p-0">
                                    <li className="p-2 ps-3 pe-2">Contact</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar d-none d-md-block bg-light navbar-expand fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img
                            src="./images/logo.png"
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item p-3 ps-2 pe-2">
                                <a
                                    className="nav-link h-text-red active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item p-3 ps-2 pe-2">
                                <a
                                    className="nav-link h-text-red"
                                    aria-current="page"
                                    href="#"
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item p-3 ps-2 pe-2">
                                <a
                                    className="nav-link h-text-red"
                                    aria-current="page"
                                    href="#"
                                >
                                    Work
                                </a>
                            </li>
                            <li className="nav-item p-3 ps-2 pe-2">
                                <a
                                    className="nav-link h-text-red"
                                    aria-current="page"
                                    href="#"
                                >
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item p-3 ps-2 pe-2">
                                <a className="nav-link h-text-red" href="#">
                                    Link
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
