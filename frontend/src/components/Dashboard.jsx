import "../components-css/dashboard.css"

export default function Dashboard({ toggleUpdate, setToggleUpdate, expenses }) {
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
                <hr style={{marginBottom: "0"}}/>
                <div className="expenses-content">
                        {
                            expenses.map(expense => (
                                <div className="expenses" key={expense.id}
                                    style={{backgroundColor: expense.category === "Growth" ?
                                        "rgba(7, 96, 7, 0.5)" : expense.category === "Essentials" ?
                                        "rgba(4, 85, 198, 0.5)" : expense.category === "Stability" ?
                                        "rgba(177, 28, 172, 0.5)" :
                                        "rgba(234, 34, 34, 0.5)"
                                    }}
                                >
                                    <h5>{ expense.date }</h5>
                                    <h5>{ expense.category }</h5>
                                    <h5>{ expense.amount } php</h5>
                                    <h5>{ expense.description }</h5>
                                    <div className="actions-tab">
                                        <button 
                                            style={{backgroundColor: "yellow"}}
                                        >✏️</button>
                                        <button
                                            style={{backgroundColor: "red"}}
                                        >❌</button>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </>
    )
}