import styled from 'styled-components'

const StMiniFrame = styled.div`
  display: flex;
  margin : 0 auto;
  justify-content: center;
  align-items: center;
  width:1500px;
  height: 800px;
`

const StMiniBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const StMiniInputBox = styled.input.attrs({ type: 'text' })`
    width: 300px;
    padding: 12px 20px;
    border: 2px solid #ccc;
    border-Radius: 4px;
    background-Color: #f8f8f8;
    margin-Bottom: 20px;
`

const StReturnText = styled.div`
margin-top: 20px;
`

export {StMiniFrame, StMiniBox, StReturnText, StMiniInputBox}