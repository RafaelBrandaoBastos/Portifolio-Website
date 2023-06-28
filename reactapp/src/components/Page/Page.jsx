import React, {useContext} from "react";
import {Container} from "./style";
import {TabsContext} from "../../contexts/TabsProvider";
import Home from "../Home/Home";
import './Page.scss'



const PageComponent = () => {

    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    console.log("tab: " + selectedTab);

    return (
        <Container>
            <div class="sky">
                <div class="stars"></div>
                <div class="stars2"></div>
                <div class="stars3"></div>
                <div class="comet"></div>
            </div>
            <Home />
        </Container>

    );
};

export default PageComponent;
