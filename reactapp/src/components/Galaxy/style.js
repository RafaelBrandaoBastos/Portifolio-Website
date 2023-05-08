import styled from "styled-components";
import Earth from "../../assets/Earth.png";
import Venus from "../../assets/Venus.png";
import Mercury from "../../assets/Mercury.png";
import Mars from "../../assets/Mars.png";
import Jupiter from "../../assets/Jupiter.png";


export const Galaxy  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    outline-style: solid;
`;

export const Sun = styled.div`  
    position: absolute;
    width: 15vw;
    height: 15vw;
    transform: scaleX(0.2); 
    border-radius: 50%;
    background-color: rgb(248, 244, 163);
    box-shadow: 0 0 60px rgb(253, 203, 163), 0 0 98px rgb(184, 160, 26) ;
`;







export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 15%;
    height: 100%;
    transform: scaleX(5);  
`;
export const PlanetIndex = styled.div` 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    

    animation: hidePlannet  5s infinite;

    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        75% {
            z-index: 999;
        }
        100% {
            z-index: -999;
        }       
    }   
`;
export const PlanetContainer = styled.div` 
    width: 1vw;
    height: 1vw;

    animation: correct 5s infinite linear;
    @keyframes correct {
        0% {
            transform: rotateZ(360deg);
        }
        100% {
            transform: rotateZ(0deg);    
        }
    }
    
`;
export const Route = styled.div`  
    border-radius: 50%;
    width: 4vw;
    height: 4vw;
    outline-style: solid;
    animation: rotate 5s infinite linear;  
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
    

`;
export const PlanetMercury = styled.div`
    display: flex;
    width: 2vw;
    height: 2vw;
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
















export const Container2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 15%;
    height: 100%;
    transform: scaleX(5);  
`;
export const PlanetIndex2 = styled.div` 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    
    animation: hidePlannet2  10s infinite;

    @keyframes hidePlannet2 {
        0% {
            z-index: -999;
        }
        25%{
            z-index: 999;   
        }
        75% {
            z-index: -999;
        }
        100% {
            z-index: 999;
        }   
    }   
`;
export const Route2 = styled.div`  
    border-radius: 50%;
    width: 5vw;
    height: 5vw;
    outline-style: solid;
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
export const PlanetContainer2 = styled.div` 
    width: 2vw;
    height: 2vw;

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
    width: 2vw;
    height: 2vw;
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
    animation: animate 45s infinite linear;
    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }     
    }      
`;




















export const Container3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 15%;
    height: 100%;
    transform: scaleX(5);  
    outline-style: solid;
    outline-color: white;
`;


export const PlanetIndex3 = styled.div` 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    outline-style: solid;
    outline-color: white;
    

    animation: hidePlannet2  20s infinite;

    @keyframes hidePlannet2 {
        0% {
            z-index: -999;
        }
        65% {
            z-index: 999;
        }
        70% {
            z-index: -999;
        }
        100% {
            z-index: -999;
        }    
    }   
`;
export const Route3 = styled.div` 
    border-radius: 50%;
    width: 8vw;
    height: 8vw;
    outline-style: solid;
    outline-color: white;
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

export const PlanetContainer3 = styled.div` 
    width: 4vw;
    height: 4vw;
    outline-style: solid;
    outline-color: white;

    animation: correct 20s infinite linear;
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
    width: 4vw;
    height: 4vw;
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

    animation: animate 70s infinite linear;

    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }     
    } 
`;












export const Container4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 15%;
    height: 100%;
    transform: scaleX(5);  
    outline-style: solid;
    outline-color: white;
`;


export const PlanetIndex4 = styled.div` 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    outline-style: solid;
    outline-color: white;
    

    animation: hidePlannet2  20s infinite;

    @keyframes hidePlannet2 {
        0% {
            z-index: -999;
        }
        65% {
            z-index: 999;
        }
        70% {
            z-index: -999;
        }
        100% {
            z-index: -999;
        }    
    }   
`;
export const Route4 = styled.div` 
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    outline-style: solid;
    outline-color: white;
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

export const PlanetContainer4 = styled.div` 
    width: 3vw;
    height: 3vw;
    outline-style: solid;
    outline-color: white;

    animation: correct 20s infinite linear;
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
    width: 3vw;
    height: 3vw;
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

    animation: animate 70s infinite linear;

    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }     
    } 
`;









export const Container5 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 15%;
    height: 100%;
    transform: scaleX(5);  
    outline-style: solid;
    outline-color: white;
`;


export const PlanetIndex5 = styled.div` 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    outline-style: solid;
    outline-color: white;
    

    animation: hidePlannet2  20s infinite;

    @keyframes hidePlannet2 {
        0% {
            z-index: -999;
        }
        65% {
            z-index: 999;
        }
        70% {
            z-index: -999;
        }
        100% {
            z-index: -999;
        }    
    }   
`;
export const Route5 = styled.div` 
    border-radius: 50%;
    width: 13vw;
    height: 13vw;
    outline-style: solid;
    outline-color: white;
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

export const PlanetContainer5 = styled.div` 
    width: 5vw;
    height: 5vw;
    outline-style: solid;
    outline-color: white;

    animation: correct 20s infinite linear;
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
    width: 5vw;
    height:  5vw;
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

    animation: animate 70s infinite linear;

    @keyframes animate {
        0% {
            background-position: 0 50;
        }
        100% {
            background-position: 719px 0;
        }     
    } 
`;





