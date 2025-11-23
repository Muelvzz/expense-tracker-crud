import "../components-css/dashboard.css"
import Update from "./Update"
import api from "../api"
import { useState, useEffect } from "react"

export default function Dashboard({ 
    toggleUpdate,
    setToggleUpdate,
    expenses,
    selectedExpense,
    setSelectedExpense,
    refresh,
    setRefresh
}) {

    const [toggleDelete, setToggleDelete] = useState(false)
    const [deleteId, setDeleteId] = useState(0)

    async function deleteExpense(id) {
        const res = await api.delete(`/expense/delete/${id}`, id)
        setRefresh(prev => !prev)
    }

    if (deleteId !== 0 && toggleDelete) {
        deleteExpense(deleteId)
        setDeleteId(0)
        setToggleDelete(false)
    }

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
                                            onClick={() => {setSelectedExpense(expense), setToggleUpdate(true)}}
                                        >✏️</button>
                                        <button
                                            style={{backgroundColor: "red"}}
                                            onClick={() => {setToggleDelete(true), setDeleteId(expense.id)}}
                                        >❌</button>
                                    </div>
                                </div>
                            ))
                        }
                </div>

                {
                    toggleUpdate && (
                        <Update 
                            setToggleUpdate={setToggleUpdate}
                            setSelectedExpense={setSelectedExpense}
                            id={selectedExpense.id}
                            updateDate={selectedExpense.date}
                            updateCategory={selectedExpense.category}
                            updateAmount={selectedExpense.amount}
                            updateDescription={selectedExpense.description}
                            refresh={refresh}
                            setRefresh={setRefresh}
                        />
                    )
                }

            </div>
        </>
    )
}