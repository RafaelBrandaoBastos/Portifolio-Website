import React from "react";
import {useContext} from "react";
import {Card, Container} from "./style";
import {TabsContext} from "../../contexts/TabsProvider";
import GalaxyComponent from "../Galaxy/Galaxy";



const PageComponent = ({ }) => {


    return (
        <Container>
            <GalaxyComponent style={{transform: "scale(0.01)"}}/>
        </Container>
    );
};

export default PageComponent;
