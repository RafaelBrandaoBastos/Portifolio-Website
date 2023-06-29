import styled from "styled-components";
import Earth from "../../assets/Earth.png";
import Venus from "../../assets/Venus.png";
import Mercury from "../../assets/Mercury.png";
import Mars from "../../assets/Mars.png";
import Jupiter from "../../assets/Jupiter.png";
import Saturn from "../../assets/Saturn.png";
import Rings from "../../assets/Rings.png";
import Uranus from "../../assets/Uranus.png";
import Neptune from "../../assets/Neptune.png";
import MoonPng from "../../assets/Moon.png";

export const Galaxy  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50%;
    outline-style: solid;
    outline-color: green;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18%;
    height: 50%;
    transform: scaleX(5);
    outline-style: solid;
    outline-color: red;
`;

export const Sun = styled.div`
    position: absolute;
    width: 10vw;
    height: 10vw;
    transform: scaleX(0.2);
    border-radius: 50%;
    background-color: rgb(248, 244, 163);
    box-shadow: 0 0 60px rgb(253, 203, 163), 0 0 98px rgb(184, 160, 26);
`;









export const PlanetIndex = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  15s infinite;
    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        25% {
            z-index: -999;
        }
        85% {
            z-index: 999;
        }
        100% {
            z-index: -999;
        }
    }
`;
export const Route = styled.div`
    width: 2.3vw;
    height: 2.3vw;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const RouteInner = styled.div`
    border-radius: 50%;
    width: 2.5vw;
    height: 2.5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    outline-color: white;
    position: absolute;
    animation: rotate 20s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const PlanetContainer = styled.div`
    width: .5vw;
    height: .5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 15s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`;
export const PlanetMercury = styled.div`
    display: flex;
    width: .5vw;
    height: .5vw;
    background-color #03045E;
    background-image: url(${Mercury});
    background-size: cover;
    border-radius: 50%;
    box shadow: 0 0 50px rgba(0, 0, 0, 0.85);
    justify-content: center;
    slign-items: center;
    transition: 0.10s;
    transform: scaleX(0.2);
    .img {
        position: absolute;
        z-index: 1;
        transition: 0.5s;
        pointer-events: nome;
    }
    animation: animate 15s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;










export const PlanetIndex2 = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  15s infinite;
    @keyframes hidePlannet {
        0% {
            z-index: 999;
        }
        25% {
            z-index: 999;
        }
        85% {
            z-index: -999;
        }
        100% {
            z-index: 999;
        }
    }
`;
export const Route2 = styled.div`
    width: 3.2vw;
    height: 3.2vw;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const RouteInner2 = styled.div`
    border-radius: 50%;
    width: 3.5vw;
    height: 3.5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 6s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const PlanetContainer2 = styled.div`
    width: .7vw;
    height: .7vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 15s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`;
export const PlanetVenus = styled.div`
    display: flex;
    width: .7vw;
    height: .7vw;
    background-color #03045E;
    background-image: url(${Venus});
    background-size: cover;
    border-radius: 50%;
    box shadow: 0 0 50px rgba(0, 0, 0, 0.85);
    justify-content: center;
    slign-items: center;
    transition: 0.10s;
    transform: scaleX(0.2);
    .img {
        position: absolute;
        z-index: 1;
        transition: 0.5s;
        pointer-events: nome;
    }
    animation: animate 15s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;













export const PlanetIndex3 = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  15s infinite;
    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        25% {
            z-index: -999;
        }
        85% {
            z-index: 999;
        }
        100% {
            z-index: -999;
        }
    }
`;
export const Route3 = styled.div`
    width: 4.65vw;
    height: 4.65vw;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const RouteInner3 = styled.div`
    border-radius: 50%;
    width: 4.5vw;
    height: 4.5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const PlanetContainer3 = styled.div`
    width: 1.5vw;
    height: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 15s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`;
export const PlanetEarth = styled.div`
    display: flex;
    width: 1.5vw;
    height: 1.5vw;
    background-color #03045E;
    background-image: url(${Earth});
    background-size: cover;
    border-radius: 50%;
    box shadow: 0 0 50px rgba(0, 0, 0, 0.85);
    justify-content: center;
    slign-items: center;
    transition: 0.10s;
    transform: scaleX(0.2);
    .img {
        position: absolute;
        z-index: 1;
        transition: 0.5s;
        pointer-events: nome;
    }
    animation: animate 15s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;






export const PlanetIndexMoon = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  2s infinite;
    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        25% {
            z-index: -999;
        }
        85% {
            z-index: 999;
        }
        100% {
            z-index: -999;
        }
    }
`;
export const RouteMoon = styled.div`
    width: .9vw;
    height: .9vw;
    position: absolute;
    animation: rotate 2s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

`;
export const RouteInnerMoon = styled.div`
    border-radius: 50%;
    width: .5vw;
    height: .5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.2);
    position: absolute;
    animation: rotate 2s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const PlanetContainerMoon = styled.div`
    width: .5vw;
    height: .5vw;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    animation: correct 2s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`;
export const Moon = styled.div`
    display: flex;
    width: .5vw;
    height: .5vw;
    background-color #03045E;
    background-image: url(${MoonPng});
    background-size: cover;
    border-radius: 50%;
    box shadow: 0 0 50px rgba(0, 0, 0, 0.85);
    justify-content: center;
    slign-items: center;
    transition: 0.10s;
    transform: scaleX(0.2);
    .img {
        position: absolute;
        z-index: 1;
        transition: 0.5s;
        pointer-events: nome;
    }

`;









export const PlanetIndex4 = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  15s infinite;
    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        25% {
            z-index: -999;
        }
        85% {
            z-index: 999;
        }
        100% {
            z-index: -999;
        }
    }
`;
export const Route4 = styled.div`
    border-radius: 50%;
    width: 5.4vw;
    height: 5.4vw;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const RouteInner4 = styled.div`
    border-radius: 50%;
    width: 6vw;
    height: 6vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const PlanetContainer4 = styled.div`
    width: 1.2vw;
    height: 1.2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 15s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`;
export const PlanetMars = styled.div`
    display: flex;
    width: 1.2vw;
    height: 1.2vw;
    background-color #03045E;
    background-image: url(${Mars});
    background-size: cover;
    border-radius: 50%;
    box shadow: 0 0 50px rgba(0, 0, 0, 0.85);
    justify-content: center;
    slign-items: center;
    transition: 0.10s;
    transform: scaleX(0.2);
    .img {
        position: absolute;
        z-index: 1;
        transition: 0.5s;
        pointer-events: nome;
    }
    animation: animate 15s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;








export const PlanetIndex5 = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  15s infinite;
    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        25% {
            z-index: -999;
        }
        85% {
            z-index: 999;
        }
        100% {
            z-index: -999;
        }
    }
`;
export const Route5 = styled.div`
    border-radius: 50%;
    width: 8.2vw;
    height: 8.2vw;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const RouteInner5 = styled.div`
    border-radius: 50%;
    width: 8vw;
    height: 8vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const PlanetContainer5 = styled.div`
    width: 2.5vw;
    height: 2.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 15s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`;
export const PlanetJupiter = styled.div`
    display: flex;
    width: 2.5vw;
    height: 2.5vw;
    background-color #03045E;
    background-image: url(${Jupiter});
    background-size: cover;
    border-radius: 50%;
    box shadow: 0 0 50px rgba(0, 0, 0, 0.85);
    justify-content: center;
    slign-items: center;
    transition: 0.10s;
    transform: scaleX(0.2);
    .img {
        position: absolute;
        z-index: 1;
        transition: 0.5s;
        pointer-events: nome;
    }
    animation: animate 15s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;











export const PlanetIndex6 = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  15s infinite;
    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        25% {
            z-index: -999;
        }
        85% {
            z-index: 999;
        }
        100% {
            z-index: -999;
        }
    }
`;
export const Route6 = styled.div`
    width: 9.1vw;
    height: 9.1vw;
    position: absolute;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const RouteInner6 = styled.div`
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const PlanetContainer6 = styled.div`
    position: absolute;
    width: 2vw;
    height: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 15s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`;
export const PlanetSaturn = styled.div`
    display: flex;
    width: 2vw;
    height: 2vw;
    background-color #03045E;
    background-image: url(${Saturn});
    background-size: cover;
    border-radius: 50%;
    box shadow: 0 0 50px rgba(0, 0, 0, 0.85);
    justify-content: center;
    slign-items: center;
    transition: 0.10s;
    transform: scaleX(0.2);
    .img {
        position: absolute;
        z-index: 1;
        transition: 0.5s;
        pointer-events: nome;
    }
    animation: animate 15s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;







export const RouteInnerRing = styled.div`
    border-radius: 50%;
    width: .7vw;
    height: .7vw;
    position: absolute;
    background-image: url(${Rings});
    background-size: cover;
    opacity: 0.4;
`;














export const PlanetIndex7 = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  15s infinite;
    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        25% {
            z-index: -999;
        }
        85% {
            z-index: 999;
        }
        100% {
            z-index: -999;
        }
    }
`;
export const Route7 = styled.div`
    width: 10.2vw;
    height: 10.2vw;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const RouteInner7 = styled.div`
    border-radius: 50%;
    width: 12vw;
    height: 12vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const PlanetContainer7 = styled.div`
    width: 1.8vw;
    height: 1.8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 15s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`;
export const PlanetUranus = styled.div`
    display: flex;
    width: 1.8vw;
    height: 1.8vw;
    background-color #03045E;
    background-image: url(${Uranus});
    background-size: cover;
    border-radius: 50%;
    box shadow: 0 0 50px rgba(0, 0, 0, 0.85);
    justify-content: center;
    slign-items: center;
    transition: 0.10s;
    transform: scaleX(0.2);
    .img {
        position: absolute;
        z-index: 1;
        transition: 0.5s;
        pointer-events: nome;
    }
    animation: animate 15s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;
























export const PlanetIndex8 = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    animation: hidePlannet  15s infinite;
    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        25% {
            z-index: -999;
        }
        85% {
            z-index: 999;
        }
        100% {
            z-index: -999;
        }
    }
`;
export const Route8 = styled.div`
    width: 11.6vw;
    height: 11.6vw;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;
export const RouteInner8 = styled.div`
    border-radius: 50%;
    width: 14vw;
    height: 14vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;

export const PlanetContainer8 = styled.div`
    width: 1.7vw;
    height: 1.7vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 15s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`;
export const PlanetNeptune = styled.div`
    display: flex;
    width: 1.7vw;
    height: 1.7vw;
    background-color #03045E;
    background-image: url(${Neptune});
    background-size: cover;
    border-radius: 50%;
    box shadow: 0 0 50px rgba(0, 0, 0, 0.85);
    justify-content: center;
    slign-items: center;
    transition: 0.10s;
    transform: scaleX(0.2);
    .img {
        position: absolute;
        z-index: 1;
        transition: 0.5s;
        pointer-events: nome;
    }
    animation: animate 15s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;