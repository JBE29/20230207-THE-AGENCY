import React from 'react';
import { Link, Outlet } from "react-router-dom";
import data from './data';

const Works = () => {
    return (
        <div>
            <h1>Works</h1>
            <h2>Au fil des années, nous avons pu accompagner les meilleurs</h2>
            <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
            <div>
                {data.map((work) => (
                    <Link className="container-small" key={work.id} to={"/works/" + work.path}>
                       <h1> {work.company} </h1>
                    </Link>
                ))}
            </div>
            <Outlet />
        </div>
    )
};

export default Works;