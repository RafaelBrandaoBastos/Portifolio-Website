import React from "react";
import {useContext} from "react";
import {Card, Container} from "./style";
import GalaxyComponent from "../Galaxy/Galaxy";



const Home = ({ }) => {


    return (
        <Container>
            <GalaxyComponent style={{transform: "scale(0.01)"}}/>
        </Container>
    );
};

export default Home;
