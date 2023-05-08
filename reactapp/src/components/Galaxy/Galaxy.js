import React from "react";
import {Galaxy, Container, Sun, PlanetVenus, 
Route, PlanetContainer, PlanetIndex, PlanetIndex2, 
PlanetContainer2, PlanetMercury, Route2, PlanetIndex3, 
PlanetEarth, Route3, PlanetContainer3, PlanetMars, 
Route4, PlanetContainer4, PlanetIndex4, PlanetJupiter, 
Route5, PlanetContainer5, PlanetIndex5} from "./style";

const GalaxyComponent = ({ }) => {

   

    return (
        <Galaxy>        
            <Container>
                <Sun />               
                <PlanetIndex>
                    <Route>
                        <PlanetContainer>
                            <PlanetMercury/>     
                        </PlanetContainer>
                    </Route>
                </PlanetIndex> 
                <PlanetIndex2>
                    <Route2>
                        <PlanetContainer2>
                            <PlanetVenus/>     
                        </PlanetContainer2>
                    </Route2>
                </PlanetIndex2>
                <PlanetIndex3>
                    <Route3>
                        <PlanetContainer3>
                            <PlanetEarth/>     
                        </PlanetContainer3>
                    </Route3>
                </PlanetIndex3>
                
                 
            </Container>                     
        </Galaxy>
    );
};

export default GalaxyComponent;
