import "../components-css/header.css"

export default function Header({ toggleDark, setToggleDark }) {
    return (
        <>
            <div className="right-header-tab">
                <button 
                    id="ui-btn" 
                    onClick={() => setToggleDark(!toggleDark)}
                >
                    { toggleDark ? "🔆" : "🌙" }
                </button>
                <button id="tab-btn">Add</button>
            </div>

            <hr />

            <div className="right-header-tab">
                <button id="tab-btn">Sort by</button>
                <button id="tab-btn">Filter by</button>
            </div>
        </>
    )
}