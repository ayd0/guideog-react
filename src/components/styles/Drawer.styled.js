import styled from "styled-components";

export const Drawer = styled.div`
    position: fixed;
    top: 0;
    ${(props) => props.direction || "left"}: ${(props) =>
    props.showDrawer ? 0 : -11.9}vw;
    transition: 450ms;
    border-${(props) =>
        props.direction === "right"
            ? "left"
            : "right"}: 1px solid rgb(13,20,31);
    text-align: ${(props) => props.direction || "left"};
    color: #fff;
    min-height: 100vh;
    width: 12vw;
    background: rgb(18,35,43);
    
    .show-btn {
        position: fixed;
        ${(props) => props.direction}: ${(props) =>
    props.showDrawer ? 11.65 : 0}vw;
        transition: 450ms;
        top: 50vh;
        transform: scale(1.2, 2);
        color: rgba(300,300,300,.9);
        &:hover {
            cursor: pointer;
        }
    }

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
            float: ${(props) =>
                props.direction === "right" ? "left" : "right"};
        }
    }
`;
