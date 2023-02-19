import styled from "styled-components";

const StTopBox = styled.div`
    background-Color: pink;
    width: 1200px;
    height: 50px;
    border: 1px solid green;
    display: flex;
    align-Items: center;
    justify-Content: space-between;
    padding-Left: 10px;
    padding-Right: 10px;
    margin: 0 auto;
    margin-Top: 30px;
`

const StBox = styled.div`
    width: 1200px;
    height: 100px;
    border: 2px solid gray;
    display: flex;
    align-Items: center;
    justify-content: space-between;
    padding-Left: 10px;
    padding-Right: 10px;
    margin: 0 auto;
    margin-Top: 30px;
`
const StInputBox = styled.div`
    width: 1200px;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;

    input[type="text"] {
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 10px;
        width: 100%;
        height: 100%;
        font-size: 16px;
        box-sizing: border-box;
    }
`

const StTextBox = styled.div`
    width: 1200px;
    height: 100px;
    display: flex;
    align-Items: center;
    padding-Left: 10px;
    padding-Right: 10px;
    margin: 0 auto;
    font-size: 25px;
    font-weight: bold;
`
const StButtonBox = styled.div`
    width: 1200px;
    height: 100px;
    display: flex;
    align-Items: center;
    padding-Left: 10px;
    padding-Right: 10px;
    margin: 0 auto;
    margin-Top: 30px;
`

const StButton = styled.button`
        background-Color: rgb(108, 175, 108);
        color: white;
        padding: 10px 20px;
        border-Radius: 5px;
        border: none;
        cursor: pointer;
        text-Align: right;
`


export {StTopBox, StBox, StInputBox, StTextBox, StButtonBox, StButton}

