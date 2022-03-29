import React from "react";
import img1 from "../images/data-analysis1.png"

function MyJumbo() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid w-100">
                <div className="container vh-100" style={{
                    backgroundImage: `url(${img1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 90%",
                }}>

                    <div className="position-absolute">
                        <h1 className="display-4">Welcome</h1>
                        <h2 className=""> Kenny William Nyallau</h2>
                        <p className="lead">Full stack developer | Creative Technologist</p>

                    </div>

                </div>
            </div>
        </>
    );
}

export default MyJumbo;