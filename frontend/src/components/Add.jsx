import "../components-css/add-update.css"
import { useState } from "react";
import api from "../api";

export default function Add({ setToggleAdd }) {

    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    async function addExpense(expense) {
        const res = await api.post("/expense/add", expense)
    }

    const handleSubmit = (e) => {
        const expense = {
            date: date,
            category: category,
            amount: amount,
            description: description,
        }
        
        addExpense(expense)

        setDate("")
        setCategory("")
        setAmount("")
        setDescription("")
    }

    return (
        <div className="modal-overlay" onClick={() => setToggleAdd(false)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <h2 style={{color:"black"}}>Add Expense</h2>

                <form className="expense-form" onSubmit={handleSubmit}>

                    <div className="left-form-card">
                        <input 
                            type="date" 
                            placeholder="Date" 
                            required
                            value={date}
                            onChange={handleDate}
                        />
                        <select 
                            name="Category" 
                            required
                            value={category}
                            onChange={handleCategory} 
                        >
                            <option value="">Select Category</option>
                            <option value="Essentials">Essentials</option>
                            <option value="Growth">Growth</option>
                            <option value="Rewards">Rewards</option>
                            <option value="Stability">Stability</option>
                        </select>
                    </div>

                    <div className="right-form-card">
                        <input 
                            type="number" 
                            placeholder="Amount" 
                            required
                            value={amount}
                            onChange={handleAmount}
                        />
                        <input 
                            type="text" 
                            placeholder="Description" 
                            required
                            value={description}
                            onChange={handleDescription} 
                        />
                    </div>

                    <div className="modal-actions">
                        <button onClick={() => setToggleAdd(false)} id="cancel-btn">Cancel</button>
                        <button id="save-btn">Save</button>
                    </div>

                </form>

            </div>
        </div>
    );
}