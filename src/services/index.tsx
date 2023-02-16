import "./style.css"
export default function Services(){
    return <div className="services pt-5 pb-5">
        <div className="container text-center">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="ps-1 pe-1 pt-2">
                        <div className="icon-serv bg-red m-auto rounded-circle text-white fs-5">
                            <i className="fa-regular fa-lightbulb"></i>
                        </div>
                        <h5 className="text-blue fw-bold mt-3 mb-2">Great Ideas</h5>
                        <p className="text-black-50 fs-6 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="ps-1 pe-1 pt-2">
                        <div className="icon-serv bg-red m-auto rounded-circle text-white fs-5">
                            <i className="fa-solid fa-gear"></i>
                        </div>
                        <h5 className="text-blue fw-bold mt-3 mb-2">Quick Settings</h5>
                        <p className="text-black-50 fs-6 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="ps-1 pe-1 pt-2">
                        <div className="icon-serv bg-red m-auto rounded-circle text-white fs-5">
                        <i className="fa-regular fa-lightbulb"></i>
                        </div>
                        <h5 className="text-blue fw-bold mt-3 mb-2">Cloud Services</h5>
                        <p className="text-black-50 fs-6 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="ps-1 pe-1 pt-2">
                        <div className="icon-serv bg-red m-auto rounded-circle text-white fs-5">
                            <i className="fa-solid fa-arrow-down-up-across-line"></i>
                        </div>
                        <h5 className="text-blue fw-bold mt-3 mb-2">Cross Development</h5>
                        <p className="text-black-50 fs-6 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}