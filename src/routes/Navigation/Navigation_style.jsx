import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Baglogo } from '../../assets/Baglogo.svg'


export const NavigationContainer = styled.div `
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`


export const LogoContainer = styled(Link)`
 height: 100px;
 width: 70px;
 padding-top: 15px;
`

export const Logo = styled(Baglogo)
`width: 60%;
height: 60%;
`

export const NavLinks = styled.div `
 width: 50%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`

export const NavLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`

// .navigation {
//     height: 70px;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 25px;

//     .logo-container {
//         height: 100%;
//         width: 70px;
//         padding-top: 15px;

//         .logo {
//             width: 60%;
//             height: 60%;
//         }
//     }

//     .nav-links-container {
//         width: 50%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: flex-end;

//         .nav-link {
//             padding: 10px 15px;
//             cursor: pointer;
//         }
//     }
// }