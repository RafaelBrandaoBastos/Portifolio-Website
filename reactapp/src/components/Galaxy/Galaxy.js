import React from "react";
import {Galaxy, Container, Sun, PlanetVenus,
Route, RouteInner, PlanetContainer, PlanetIndex, PlanetMercury,
Route2, RouteInner2, PlanetContainer2 ,PlanetIndex2,PlanetEarth,
Route3, RouteInner3, PlanetContainer3, PlanetIndex3, PlanetMars,
Route4, RouteInner4, PlanetContainer4, PlanetIndex4, PlanetJupiter,
Route5, RouteInner5, PlanetContainer5, PlanetIndex5, PlanetSaturn,
Route6, RouteInner6, PlanetContainer6, PlanetIndex6, PlanetUranus,
Route7, RouteInner7, PlanetContainer7, PlanetIndex7, PlanetNeptune,
Route8, RouteInner8, PlanetContainer8, PlanetIndex8,} from "./style";

const GalaxyComponent = ({ }) => {

    return (
        <Galaxy>

            <Container>
            <Sun />
                <PlanetIndex>
                    <RouteInner />
                    <Route>
                            <PlanetContainer>
                                <PlanetMercury/>
                            </PlanetContainer>
                    </Route>
                </PlanetIndex>
                <PlanetIndex2>
                    <RouteInner2 />
                    <Route2>
                            <PlanetContainer2>
                                <PlanetVenus/>
                            </PlanetContainer2>
                    </Route2>
                </PlanetIndex2>
                <PlanetIndex3>
                    <RouteInner3 />
                    <Route3>
                            <PlanetContainer3>
                                <PlanetEarth/>
                            </PlanetContainer3>
                    </Route3>
                </PlanetIndex3>
                <PlanetIndex4>
                    <RouteInner4 />
                    <Route4>
                            <PlanetContainer4>
                                <PlanetMars/>
                            </PlanetContainer4>
                    </Route4>
                </PlanetIndex4>
                <PlanetIndex5>
                    <RouteInner5 />
                    <Route5>
                            <PlanetContainer5>
                                <PlanetJupiter/>
                            </PlanetContainer5>
                    </Route5>
                </PlanetIndex5>
                <PlanetIndex6>
                    <RouteInner6 />
                    <Route6>
                            <PlanetContainer6>
                                <PlanetSaturn/>
                            </PlanetContainer6>
                    </Route6>
                </PlanetIndex6>
                <PlanetIndex7>
                    <RouteInner7 />
                    <Route7>
                            <PlanetContainer7>
                                <PlanetUranus/>
                            </PlanetContainer7>
                    </Route7>
                </PlanetIndex7>
                <PlanetIndex8>
                    <RouteInner8 />
                    <Route8>
                            <PlanetContainer8>
                                <PlanetNeptune/>
                            </PlanetContainer8>
                    </Route8>
                </PlanetIndex8>




            </Container>
        </Galaxy>
    );
};

export default GalaxyComponent;
