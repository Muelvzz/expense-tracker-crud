from pydantic import BaseModel
from datetime import date

class ExpenseCreate(BaseModel):
    date: date
    category: str
    amount: float
    description: str

    class Config:
        from_attributes = True

    
class ExpenseOut(BaseModel):
    id: int
    date: date
    category: str
    amount: float
    description: str

    class Config:
        from_attributes = True