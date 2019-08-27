import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 2rem 0;
`;

export const Grid = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 8fr;
    gap: 1.2rem 1.2rem;

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`;

export const Item = styled.div`
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

    h4 {
        color: #212121;
    }

    p {
        color: #707070;
    }
`;

export const Content = styled.div`
    padding: 1rem 0;
`;

export const Media = styled.div`
    padding: 1rem 0;
`;
