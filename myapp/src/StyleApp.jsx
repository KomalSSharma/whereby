import styled , {keyframes} from 'styled-components'

export const GlobalButton=styled.button`
font-size:1.4rem;
padding:0.6em 1.4em;
border:1px solid purple;
color: purple;
margin:0.5em;
border-radius:9px;
@media only screen and (max-width: 680px) {
    font-size:1.1rem;
};
`

export const StyledButton=styled(GlobalButton)`
background-color:purple;
color:white;
`


export const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const WavingImage = styled.img`
  animation: ${waveAnimation} 2s ease-in-out infinite;
  margin:0.5em;
`;