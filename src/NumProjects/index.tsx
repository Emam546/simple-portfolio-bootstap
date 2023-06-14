import { ReactNode, useEffect, useRef, useState } from "react";
import handleViewport from "react-in-viewport";
import "./style.css";
const interval = 2000;
const step = 40;
const duration = Math.floor(interval / step);
function Counter({ children }: { children: ReactNode }) {
    const [startValue, setStartValue] = useState(0);
    if (!children) return null;
    const endValue = parseInt(children.toString());
    if (!endValue) return null;
    const Block = handleViewport(
        ({ inViewport, forwardedRef, enterCount }) => {
            useEffect(() => {
                if (!(inViewport && enterCount === 1)) return;
                
                const increment = Math.ceil(endValue / step);
                const counter = setInterval(function () {
                    setStartValue((pre) => {
                        if (pre >= endValue) {
                            clearInterval(counter);
                            return Math.min(pre, endValue);
                        }
                        return (pre += increment);
                    });
                    return () => clearInterval(counter);
                }, duration);
                return ()=>clearInterval(counter)
            }, [inViewport]);
            return <div ref={forwardedRef}></div>;
        } /** options: {}, config: {} **/
    );

    return (
        <>
            <Block />
            {startValue.toLocaleString("en-US")}
        </>
    );
}
export default function NumProjects() {
    return (
        <div className="num-projects text-center pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="ps-2 pe-2 mt-4">
                            <i className="fa-solid fa-briefcase fs-4 mb-3 text-blue"></i>
                            <span className="d-block fs-2 fw-boldest text-blue mb-1">
                                <Counter>3329</Counter>
                            </span>
                            <span className="d-block text-red text-uppercase">
                                Projects
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="ps-2 pe-2 mt-4">
                            <i className="fa-solid fa-user fs-4 mb-3 text-blue"></i>
                            <span className="d-block fs-2 fw-boldest text-blue mb-1">
                                <Counter>156789</Counter>
                            </span>
                            <span className="d-block text-red text-uppercase">
                                CUSTOMERS
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="ps-2 pe-2 mt-4">
                            <i className="fa-solid fa-mug-saucer fs-4 mb-3 text-blue"></i>
                            <span className="d-block fs-2 fw-boldest text-blue mb-1">
                                <Counter>13222</Counter>
                            </span>
                            <span className="d-block text-red text-uppercase">
                                COFFEE
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="ps-2 pe-2 mt-4">
                            <i className="fa-solid fa-download fs-4 mb-3 text-blue"></i>
                            <span className="d-block fs-2 fw-boldest text-blue mb-1">
                                <Counter>9623689</Counter>
                            </span>
                            <span className="d-block text-red text-uppercase">
                                APP DOWNLOADS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
