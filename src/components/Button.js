import styled from "@emotion/styled"

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: khaki;
  height: 30px;
  width: 100px;
  color: ${(props) => props.primary ? 'crimson' : 'cornflowerblue'};
`


function Button(props) {
    return <StyledButton onClick={props.onClick} {...props}>{props.children}</StyledButton>
}

export default Button