import Swapper from "../swapper";
import "./style.css";
export default function Landing() {
    return (
        <div
            className="landing"
        >
            <Swapper id="landing">

                <>
                    <div
                        className="position-absolute w-100 h-100 top-0 start-0 bg-cover overlay overlay-dark"
                        style={{
                            backgroundImage: `url("./images/banner.jpg")`,
                        }}
                    ></div>
                    <div className="container h-100 d-flex align-items-center">
                        <p
                            className="text-white  position-relative display-5 fw-bold"
                            style={{ maxWidth: "500px" }}
                        >
                            We Are Independent design &{" "}
                            <span className="bg-red">development</span> Agency.
                        </p>
                    </div>
                </>
                <>
                    <div
                        className="position-absolute w-100 h-100 top-0 start-0 bg-cover overlay overlay-dark"
                        style={{
                            backgroundImage: `url("./images/banner.jpg")`,
                        }}
                    ></div>
                    <div className="container h-100 d-flex align-items-center">
                        <p
                            className="text-white  position-relative display-5 fw-bold"
                            style={{ maxWidth: "500px" }}
                        >
                            We Are Independent Programming &{" "}
                            <span className="bg-red">development</span> Agency.
                        </p>
                    </div>
                </>
                <>
                    <div
                        className="position-absolute w-100 h-100 top-0 start-0 bg-cover overlay overlay-dark"
                        style={{
                            backgroundImage: `url("./images/banner.jpg")`,
                        }}
                    ></div>
                    <div className="container h-100 d-flex align-items-center">
                        <p
                            className="text-white  position-relative display-5 fw-bold"
                            style={{ maxWidth: "500px" }}
                        >
                            We Are Independent Editing &{" "}
                            <span className="bg-red">development</span> Agency.
                        </p>
                    </div>
                </>

            </Swapper>
        </div>
    );
}
