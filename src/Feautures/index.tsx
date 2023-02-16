import { useState } from "react";
import "./style.css";
export function Tabs({
    options,
    state,
    setState,
}: {
    options: string[];
    state: string;
    setState: Function;
}) {
    function Tab({ name }: { name: string }) {
        return (
            <li
                className={`${name == state && "active"}`}
                onClick={() => setState(name)}
            >
                {name}
            </li>
        );
    }
    return (
        <ul className="select-tabs flex-wrap list-unstyled p-0 d-flex gap-3 justify-content-center align-items-center">
            <Tab name={All} />
            {options.map((name, i) => {
                return <Tab name={name} key={i} />;
            })}
        </ul>
    );
}
const All = "All";
const Options = [
    "Website",
    "Logo&Branding",
    "Graphic Design",
    "Online Marketing",
    "Video",
];
const Data = [
    { img: "./images/featured_work-1.jpg", type: "Website" },
    { img: "./images/featured_work-2.jpg", type: "Website" },
    { img: "./images/featured_work-3.jpg", type: "Logo&Branding" },
    { img: "./images/featured_work-4.jpg", type: "Graphic Design" },
    { img: "./images/featured_work-5.jpg", type: "Video" },
    { img: "./images/featured_work-6.jpg", type: "Online Marketing" },
    { img: "./images/featured_work-7.jpg", type: "Online Marketing" },
    { img: "./images/featured_work-8.jpg", type: "Graphic Design" },
];
export function ImagesSlider({
    state,
    data,
}: {
    state: string;
    data: typeof Data;
}) {
    return (
        <div className="images">
            {data.map(({ img, type }) => {
                return (
                    <div
                        className={` ${
                            (state == type || state == All) && "active"
                        }`}
                    >
                        <div className="box text-center w-fit m-auto">
                            <div className="back-overlay">
                                <h3 className="text-red fw-boldest fs-2">ILLUSTRATION</h3> 
                                <p className="fs-5">ASIAN TOURIST</p>
                            </div>
                            <img src={img} className="img-fluid"/>
                            
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default function Features() {
    const [state, setState] = useState(All);
    return (
        <div className="gallery pt-5 pb-5">
            <div className="text-center">
                <h1 className="fw-boldest display-3">Featured Work</h1>
                <p className="text-555 wm-500px m-auto pt-4 pb-4 fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Ut enim veniam.
                </p>
            </div>
            <Tabs options={Options} state={state} setState={setState} />
            <ImagesSlider data={Data} state={state} />
        </div>
    );
}
