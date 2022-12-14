import styled from 'styled-components';

export const ContainerApp = styled.div`
    width: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 4rem 15px;
`;

export const HeaderApp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    h1 {
        font-size: 3.2rem;
    }
    span {
        opacity: 0.6;
    }
`;

export const ContentCharacters = styled.div`
    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.6rem;
    }

    button {
        display: block;
        line-height: 6.5rem;
        background-color: #5b1fa6;
        border-radius: 6px;
        width: 30rem;

        margin: 0 auto;
        margin-top: 4.8rem;

        cursor: pointer;

        border: none;
        font-size: 1.8rem;

        transition:  filter .4s ease;
        &:hover {
            filter: brightness(0.8);
        }
    }

    @media (max-width: 991px) {
        & > div {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (max-width: 768px) {
        & > div {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 550px) {
        & > div {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export const Loader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2022;
    width: 100%;
    height: 100vh;
    background-color: #040011;
    display: flex;
    align-items: center;
    justify-content: center;
`;