import React, { useEffect, useState } from "react"
import "./progress.css"

const Infostepsslider = (props: any) => {
    let { children, show } = props;
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children && children.length);
    const [touchPosition, setTouchPosition] = useState(null);
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children && children.length);
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [children]);
    const next = () => {
        if (currentIndex < length - show) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };
    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };
    const handleTouchMove = (e: any) => {
        const touchDown = touchPosition;
        if (touchDown === null) {
            return;
        }
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;
        if (diff > 5) {
            next();
        }
        if (diff < -5) {
            prev();
        }
        setTouchPosition(null);
    };
    let carouselCountDisplay;
    if (windowSize.innerWidth <= 700 && windowSize.innerWidth > 480) {
        show = 4;
        carouselCountDisplay = `show-${show}`;
    } else if (windowSize.innerWidth <= 480 && windowSize.innerWidth > 0) {
        show = 2;
        carouselCountDisplay = `show-${show}`;
    } else {
        carouselCountDisplay = `show-${show}`;
    }
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                {currentIndex > 0 && (
                    <span onClick={prev} className="left-arrow icon-left-arrow">
                    </span>
                )}
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content ${carouselCountDisplay} ${props?.className}`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / show)}%)`
                        }}
                    >
                        {children}
                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                {currentIndex < length - show && (
                    <span onClick={next} className="right-arrow icon-right-arrow">
                    </span>
                )}
            </div>
        </div>
    );
};

export default Infostepsslider;
export function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
