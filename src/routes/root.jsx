import { useLoaderData, Link, Outlet } from "react-router-dom";
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
const RootStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export async function loader() {
    const url = "https://fakestoreapi.com/products/categories";
    const categories = await fetch(url).then(response => response.json());
    console.log(categories);
    return categories;
}
export default function Root() {
    const categories = useLoaderData();
    return (
        <>
            <Nav>
                <label>
                    <Link to={"/"}> <img src="/public/images/logo-transparent.PNG" /></Link>
                    <p className="real">nothing is real</p>
                </label>

                <CategoryDropdown categories={categories}/>
                <Link to={"categories"}><img src="/public/images/cart-icon.png" className="cart" /></Link>
            </Nav>
            <RootStyle>
                <Outlet />
            </RootStyle>
        </>
    )
}