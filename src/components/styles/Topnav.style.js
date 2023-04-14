import styled from "styled-components";

export const Topnav = styled.div`
    height: ${(props) => props.navHeight}px;
    border-bottom: 1px solid rgb(13, 20, 31);
    background: rgb(18, 35, 43);

    img {
        height: 45px;
        margin-left: 25px;
        margin-top: 5px;
    }
`;