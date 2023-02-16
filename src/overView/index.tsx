import "./style.css";
export default function OverView() {
    return (
        <div className="overView bg-section pt-5 pb-5 text-center">
            <div className="container">
                <h1 className="display-4 fw-bold pb-3 fw-boldest">Company Overview</h1>
                <p className="wm-500px m-auto text-555 fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilla. sed do eiusmod tempor incididunt ut labore et
                    dolore.
                </p>
                <p className="pt-3 pb-3">Let's Start Today</p>
                <a href="" className="bg-red h-bg-blue text-white text-decoration-none ps-3 pe-3 pt-2 pb-2 fw-boldest" >VIEW MORE</a>
            </div>
        </div>
    );
}
