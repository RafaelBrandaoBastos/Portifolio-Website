import styled from "styled-components";
import Earth from "../../assets/Earth.png";
import Venus from "../../assets/Venus.png";
import Mercury from "../../assets/Mercury.png";

export const Galaxy  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
`;

export const Sun = styled.div`  
    position: absolute;
    transform: scaleX(0.2); 
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgb(248, 244, 163);
    box-shadow: 0 0 60px rgb(253, 203, 163), 0 0 98px rgb(184, 160, 26) ;
`;

export const Route = styled.div`  
    outline-style: solid;
    border-radius: 50%;
    width: 50%;
    height: 30%;
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
export const Route2 = styled.div`  
    outline-style: solid;
    border-radius: 50%;
    width: 60%;
    height: 40%;

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
export const Route3 = styled.div`  
    border-radius: 50%;
    outline-style: solid;
    width: 70%;
    height: 60%;

    animation: rotate 25s infinite linear;  

    @keyframes rotate {

        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
    

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
    

    animation: hidePlannet  10s infinite;

    @keyframes hidePlannet {
        0% {
            z-index: -999;
        }
        50% {
            z-index: 999;
        }
        95% {
            z-index: -999;
        }
        100% {
            z-index: -999;
        }
    }   
`;




export const PlanetContainer = styled.div` 
    width: 25px;
    height: 25px;

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
export const PlanetMercury = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
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



export const PlanetContainer2 = styled.div` 
    width: 30px;
    height: 30px;

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
export const PlanetVenus = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
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
`;


export const PlanetIndex3 = styled.div` 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    

    animation: hidePlannet2  25s infinite;

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

export const PlanetContainer3 = styled.div` 
    width: 50px;
    height: 50px;

    animation: correct 25s infinite linear;
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
    width: 50px;
    height: 50px;
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
















