import styled from "styled-components";
import { BaseButton,GoogleSignInButton,InvertedButton } from "../button/button._style";



export const CartDropDownContainer = styled.div`
  position: absolute;
    width: 290px;
    height: 390px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top:160px;
    right:40px;
    z-index: 5;

    ${GoogleSignInButton},
    ${BaseButton},
    ${InvertedButton} {
    margin-top: auto;
    }
`


export const EmptyMessage = styled.span`
   font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
height: 240px;
        display: flex;
        flex-direction: column;
        overflow-y:scroll;
`




// .cart-dropdown-container{
//     position: absolute;
//     width: 290px;
//     height: 390px;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     border: 1px solid black;
//     background-color: white;
//     top:160px;
//     right:40px;
//     z-index: 5;

//     .empty-message{
//         font-size: 18px;
//         margin: 50px auto;
//     }

//     .cart-items{
//         height: 240px;
//         display: flex;
//         flex-direction: column;
//         overflow-y:scroll;
//     }

//     button{
//         margin-top: auto;
//     }
// }