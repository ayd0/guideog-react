import styled from "styled-components";

export const Drawer = styled.div`
    position: fixed;
    top: 0;
    ${(props) => props.direction || "left"}: 0;
    border-${(props) =>
        props.direction === "right" ? "left" : "right"}: 1px solid black;
    text-align: ${(props) => props.direction || "left"};
    color: #fff;
    min-height: 100%;
    width: 12vw;

    ul {
        list-style-type: none;
        margin: 0 !important;
        padding: 0 !important;
    }

    li {
        padding: 3px 30px;
        &:hover {
            background: rgba(100,100,100,.25);
        }
        i {
            float: ${(props) => props.direction === 'right' ? 'left' : 'right'};
        }
    }
`;
