import React from "react";
import moviesData from "../data";
import Card from 'react-bootstrap/Card';
// import result from "../dataApi";
const Movies = () => {
    return (
        <>
            <h1 className="text-center text-primary my-3">Top 6 Marathi Movies</h1>
            <div className="container">
                <div className="row ">
                    {
                        moviesData.map((val, i) => {

                            return (

                                <>
                                    <div className="col-4 my-3">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" height={300} src={val.cover} />
                                            <Card.Body>
                                                <Card.Title>{val.name}</Card.Title>
                                                <Card.Text>
                                                    {val.rating}
                                                </Card.Text>
                                                <a href={val.link} className="btn btn-primary">Watch now</a>
                                            </Card.Body>
                                        </Card>
                                    </div>


                                </>
                            );
                        })
                    }
                </div>
            </div>




        </>
    );
}
export default Movies;