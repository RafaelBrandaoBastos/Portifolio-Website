import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background: linear-gradient(-45deg, #03001C, #1D1919);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    justify-content: center;
    align-items: center;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;
