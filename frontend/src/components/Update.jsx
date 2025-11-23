import "../components-css/add-update.css"
import { useState } from "react";
import api from "../api";

export default function Add({ 
    setToggleUpdate,
    setSelectedExpense,
    id,
    updateDate,
    updateCategory,
    updateAmount,
    updateDescription,
    refresh,
    setRefresh
 }) {

    const [date, setDate] = useState(updateDate)
    const [category, setCategory] = useState(updateCategory)
    const [amount, setAmount] = useState(updateAmount)
    const [description, setDescription] = useState(updateDescription)

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

    async function updateExpense(id, expense) {
        const res = await api.put(`/expense/update/${id}`, expense)
        setRefresh(prev => !prev)
    }

    const handleSubmit = (e) => {
        const expense = {
            date: date,
            category: category,
            amount: amount,
            description: description,
        }
        
        updateExpense(id, expense)

        setToggleUpdate(false)
        setSelectedExpense(null)
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
                        <button onClick={() => setToggleUpdate(false)} id="cancel-btn">Cancel</button>
                        <button id="save-btn">Save</button>
                    </div>

                </form>

            </div>
        </div>
    );
}