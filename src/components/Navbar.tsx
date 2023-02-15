import { Link } from "react-router-dom";
import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";

export interface NavbarProps {
    toggleHandler : () => void
}
export default function Navbar(props : NavbarProps){
    return(
        <Wrapper>
                <Link to='/'>Home</Link>
                <Link to='yearly'>Yearly</Link>
                <Link to='monthly'>Monthly</Link>
                <Link to='weekly'>Weekly</Link>
                <Link to='daily'>Daily</Link>
                <Link to='dashboard'>Dashboard</Link>
                <ToggleSwitch toggleHandler={props.toggleHandler}></ToggleSwitch>
        </Wrapper>
    )
}
const Wrapper = styled.header`
    display : flex;
    justify-content : center;
    gap : 5em;
`