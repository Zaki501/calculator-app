import { useRef, useState } from "react";
import { evaluate } from "mathjs"
import styled from "styled-components"


const STYLED_DIV = styled.div`
display:inline-block;
border: 4px solid black;
border-radius: 5px;
`
const STYLED_INPUT = styled.input`
height: 50px;
width: 182px;
margin-bottom: 1px;
display: flex;
`
const STYLED_ROW = styled.div`
display: flex;
align-items: space-between;
`
const STYLED_BUTTON = styled.button`
  display: inline-block;
  font-size: 1em;
  border-radius: 2px;
  height: 50px;
  width: 50px;
`;

export default function Calculator() {

    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState("");
    const [prevInput, setprevInput] = useState("");
 
    const stateRef = useRef();
    stateRef.current = input; //this is the current input


    function retrieveAnswer() {
        return (
            <STYLED_BUTTON onClick={() => setInput(a => a + answer)}>{"ANS"}</STYLED_BUTTON>
        )
    }
    function reset() {
        return (
            <STYLED_BUTTON onClick={() => setInput(a => a = "")}>{"CE"}</STYLED_BUTTON>
        )
    }
    function evaluateInput() {
        function handleChange() {
            setInput(() => evaluate(input));
            setAnswer((b) => b = stateRef.current) //check this
            setprevInput((c) => c = input + " =")

        }
        return (
            <STYLED_BUTTON onClick={handleChange}>{"="}</STYLED_BUTTON>
        )

    }
    
    function Input() {

        return (
            <div>
            <STYLED_INPUT value={`${prevInput} ${answer}`}/>
            <STYLED_INPUT value={input} />
            </div>
        )
    }
    function Key(i) {
        return (
            <STYLED_BUTTON onClick={() => setInput(a => a + i.toString())}>{i}</STYLED_BUTTON>
        )
    }

    function KeyPad() {
        return (
            <STYLED_DIV>

                <STYLED_ROW>
                    
                    <Input />
                    
                </STYLED_ROW>
                <STYLED_ROW>
                    {Key("(")}
                    {Key(")")}
                    {reset()}
                    {retrieveAnswer()}
                </STYLED_ROW>
                <STYLED_ROW>
                    {Key(7)}
                    {Key(8)}
                    {Key(9)}
                    {Key("/")}
                </STYLED_ROW>
                <STYLED_ROW>
                    {Key(4)}
                    {Key(5)}
                    {Key(6)}
                    {Key("*")}
                </STYLED_ROW>
                <STYLED_ROW>
                    {Key(1)}
                    {Key(2)}
                    {Key(3)}
                    {Key("-")}
                </STYLED_ROW>
                <STYLED_ROW>
                    {Key(0)}
                    {Key(".")}
                    {evaluateInput()}
                    {Key("+")}
                </STYLED_ROW>
            </STYLED_DIV>
        )
    }


    return (
        <div>
            <KeyPad />
        </div>

    )
}