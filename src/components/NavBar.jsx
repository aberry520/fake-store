import { Link } from "react-router-dom";
import styled from "styled-components";
import { CategoryDropdown } from "../components/CategoryDropdown";

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px;
    .cart {
        max-width: 50px;
        height: auto;
    }
    .real {
        font-size: x-small;
    }
`

export const NavBar = ({ categories }) => {
    return <>
        <Nav>
            <label>
                <Link to={"/"}> <img src="/public/images/logo-transparent.PNG" /></Link>
                <p className="real">nothing is real</p>
            </label>

            <CategoryDropdown categories={categories} />
            <Link to={"categories"}><img src="/public/images/cart-icon.png" className="cart" /></Link>
        </Nav>
    </>
}