import styled from "styled-components";

export const Drawer = styled.div`
    position: fixed;
    top: 0;
    ${(props) => props.position || "left"}: 0;
    border-${(props) =>
        props.position === "right" ? "left" : "right"}: 1px solid black;
    color: #fff;
    padding: 0 20px;
    margin: 0 auto;
`;
