import "../components-css/dashboard.css"

export default function Dashboard() {
    return (
        <>
            <div className="expenses-container">
                <div className="expenses-header">
                    <h3>Date</h3>
                    <h3>Category</h3>
                    <h3>Amount</h3>
                    <h3>Description</h3>
                    <h3>Actions</h3>
                </div>
                <hr />
                <div className="expenses-content">
                    <div className="expenses">
                        <h5>11-22-2025</h5>
                        <h5>Food</h5>
                        <h5>600 pesos</h5>
                        <h5>Jollibee</h5>
                        <div className="actions-tab">
                            <button 
                                style={{backgroundColor: "yellow"}}
                            >✏️</button>
                            <button
                                style={{backgroundColor: "red"}}
                            >❌</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}