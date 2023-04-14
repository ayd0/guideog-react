import styled from "styled-components";

export const Drawer = styled.div`
    position: fixed;
    top: ${(props) => props.navHeight}px;
    ${(props) => props.direction || "left"}: ${(props) =>
    props.showDrawer ? 0 : -250}px;
    transition: 450ms;
    border-${(props) =>
        props.direction === "right"
            ? "left"
            : "right"}: 1px solid rgb(13,20,31);
    text-align: ${(props) => props.direction || "left"};
    color: #fff;
    min-height: 100vh;
    width: 250px;
    background: rgb(18,35,43);
    
    .show-btn {
        position: fixed;
        ${(props) => props.direction}: ${(props) =>
    props.showDrawer ? 230 : 0}px;
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

    span {
        display: block;
        width: 100%;
    }

    li {
        padding: 3px 40px;
        &:hover {
            background: rgba(100,100,100,.25);
        }
        i {
            float: ${(props) =>
                props.direction === "right" ? "left" : "right"};
        }
    }
`;

export const Compartment = styled.div`
    overflow: hidden;
    display: ${(props) => (props.show ? "block" : "none")};
    &:hover {
        cursor: pointer;
    }
    p {
        margin: 4px 20px;
    }
    p:hover {
        background: none !important;
        text-decoration: underline;
    }
`;