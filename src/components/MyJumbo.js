import React from "react";
import img1 from "../images/data-analysis1.png"
import dataviz from "../images/dataviz1.gif"
import graph from "../images/graph.gif"

function MyJumbo() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid bg-black " style={{
                    backgroundImage: `url(${dataviz}) `,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                <div className="container vh-100 d-flex align-items-center justify-content-center" >
                    <div className="position-absolute ">
             
                        <h1 className="text-center text-light"> Kenny William Nyallau</h1>
                        <p className="lead text-center text-light font-weight-bold"> Senior Software Engineer | Data Visualization</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MyJumbo;