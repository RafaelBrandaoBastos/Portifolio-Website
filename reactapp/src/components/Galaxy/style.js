import styled from "styled-components";
import Earth from "../../assets/Earth.png";
import Venus from "../../assets/Venus.png";
import Mercury from "../../assets/Mercury.png";
import Mars from "../../assets/Mars.png";
import Jupiter from "../../assets/Jupiter.png";
import Saturn from "../../assets/Saturn.png";
import Uranus from "../../assets/Uranus.png";
import Neptune from "../../assets/Neptune.png";

export const Galaxy  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 60%;
    outline-style: solid;
    outline-color: green;
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18vw;
    height: 60%;
    transform: scaleX(5);
    outline-style: solid;
    outline-color: red;
    @media (max-width: 1000px) {
        width: 100%;
    }
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
    animation: hidePlannet  6s infinite;
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
    width: 2.8vw;
    height: 2.8vw;
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
export const RouteInner = styled.div`
    border-radius: 50%;
    width: 2.5vw;
    height: 2.5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    outline-color: white;
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
export const PlanetContainer = styled.div`
    width: 1vw;
    height: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 6s infinite linear;
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
    width: 1vw;
    height: 1vw;
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
    animation: animate 30s infinite linear;
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
    animation: hidePlannet  10s infinite;
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
    width: 3.9vw;
    height: 3.9vw;
    animation: rotate 10s infinite linear;
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
    width: 1.5vw;
    height: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 10s infinite linear;
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
    width: 1.5vw;
    height: 1.5vw;
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
    animation: animate 30s infinite linear;
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
    animation: hidePlannet  30s infinite;
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
    width: 5.9vw;
    height: 5.9vw;
    animation: rotate 30s infinite linear;
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
    width: 5.5vw;
    height: 5.5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 90s infinite linear;
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
    width: 2vw;
    height: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 30s infinite linear;
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
    width: 2vw;
    height: 2vw;
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
    animation: animate 20s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;










export const PlanetIndex4 = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  45s infinite;
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
    width: 6.9vw;
    height: 6.9vw;
    animation: rotate 45s infinite linear;
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
    width: 7.5vw;
    height: 7.5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 45s infinite linear;
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
    width: 1.6vw;
    height: 1.6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 45s infinite linear;
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
    width: 1.6vw;
    height: 1.6vw;
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
    animation: animate 100s infinite linear;
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
    animation: hidePlannet  60s infinite;
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
    width: 9.2vw;
    height: 9.2vw;
    animation: rotate 60s infinite linear;
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
    width: 9.5vw;
    height: 9.5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 60s infinite linear;
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
    animation: correct 60s infinite linear;
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
    animation: animate 10s infinite linear;
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
    animation: hidePlannet  70s infinite;
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
    width: 10.2vw;
    height: 10.2vw;
    animation: rotate 70s infinite linear;
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
    width: 11.5vw;
    height: 11.5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 70s infinite linear;
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
    width: 2.2vw;
    height: 2.2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 70s infinite linear;
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
    width: 2.2vw;
    height: 2.2vw;
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
    animation: animate 5s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;






export const PlanetIndex7 = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: hidePlannet  70s infinite;
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
    width: 11.6vw;
    height: 11.6vw;
    animation: rotate 70s infinite linear;
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
    width: 13.5vw;
    height: 13.5vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 70s infinite linear;
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
    width: 2vw;
    height: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 70s infinite linear;
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
    width: 2vw;
    height: 2vw;
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
    animation: animate 5s infinite linear;
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
    animation: hidePlannet  90s infinite;
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
    width: 13vw;
    height: 13vw;
    animation: rotate 90s infinite linear;
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
    width: 16vw;
    height: 16vw;
    border: 1.0px solid rgba(256, 256, 256, 0.3);
    position: absolute;
    animation: rotate 90s infinite linear;
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
    width: 2vw;
    height: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: correct 90s infinite linear;
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
    width: 2vw;
    height: 2vw;
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
    animation: animate 65s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }
    }
`;