import "../components-css/header.css"
import Add from "./Add"

export default function Header({ toggleDark, setToggleDark, toggleAdd, setToggleAdd }) {
    return (
        <>
            <div className="right-header-tab">
                <button 
                    id="ui-btn" 
                    onClick={() => setToggleDark(!toggleDark)}
                >
                    { toggleDark ? "🔆" : "🌙" }
                </button>
                <button 
                    id="tab-btn"
                    onClick={() => {setToggleAdd(true)}}
                >Add</button>
            </div>

            <hr />

            <div className="right-header-tab">
                <button id="tab-btn">Sort by</button>
                <button id="tab-btn">Filter by</button>
            </div>

            {
                toggleAdd && (
                    <Add 
                        setToggleAdd={setToggleAdd}
                    />
                )
            }
        </>
    )
}