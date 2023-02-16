import { Children, ReactNode } from "react";
import "./style.css"
export default function Swapper({
    id,
    children
}: {
    id: string;
    children: ReactNode;
}) {
    const mappedChildren=Children.toArray(children)
    return (
        <div
            id={id}
            className={`carousel slide swapper`}
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators swapper-indicators">
                <button
                    type="button"
                    data-bs-target={`#${id}`}
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 0"
                ></button>
                {mappedChildren.slice(1).map((_,i)=>{
                    return <button
                        type="button"
                        data-bs-target={`#${id}`}
                        data-bs-slide-to={i+1}
                        aria-label={`Slide ${i+1}`}
                    ></button>
                })}
            </div>
            <div className="carousel-inner">
                {mappedChildren.map((child,i)=>{
                    return <div className={`carousel-item ${i==0 && "active"}`}>
                        {child}
                    </div>
                })}
            </div>
            <button
                className="swap-icons h-bg-red"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="prev"
            >
                <span className="fa-solid fa-chevron-left"></span>
            </button>
            <button
                className="swap-icons h-bg-red"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="next"
            >
                <span className="fa-solid fa-chevron-right"></span>
            </button>
        </div>
    );
}
