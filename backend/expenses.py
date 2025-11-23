from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .database import get_db
from backend import models
from .schemas import ExpenseCreate, ExpenseOut

from typing import List

router = APIRouter(
    prefix="/expense",
    tags=["Expenses"]
)

@router.get("/", response_model=List[ExpenseOut])
def view_expense(db: Session = Depends(get_db)):
    try:
        expenses = db.query(models.Expenses).all()

        if not expenses:
            raise HTTPException(status_code=404, detail="No items to be found")
        return expenses
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.post("/add", response_model=ExpenseOut)
def add_expense(expense: ExpenseCreate, db: Session = Depends(get_db)):
    try:
        expense_data = models.Expenses(
            date = expense.date,
            category = expense.category,
            amount = expense.amount,
            description = expense.description
        )

        db.add(expense_data)
        db.commit()
        db.refresh(expense_data)

        return expense_data
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.put("/update/{id}", response_model=ExpenseOut)
def update_expense(id: int, expense: ExpenseCreate, db: Session = Depends(get_db)):
    try:
        expense_data = db.query(models.Expenses).filter(models.Expenses.id == id).first()

        if not expense_data:
            raise HTTPException(status_code=404, detail="Item not found")
        
        expense_data.date = expense.date
        expense_data.category = expense.category
        expense_data.amount = expense.amount
        expense_data.description = expense.description

        db.commit()
        db.refresh(expense_data)

        return expense_data
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))