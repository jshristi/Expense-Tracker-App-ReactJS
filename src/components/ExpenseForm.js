import React,{useState} from "react";
import uniqueId from "./MathRandomFunc";

import classes from '../UI/ExpenseForm.module.css';

// props = onNewExpense
function ExpenseForm (props) {
    const [titleValue, setTitleValue] = useState('');
    const [amountValue, setAmountValue] = useState('');
    const [dateValue, setDateValue] = useState('');

    const titleChangeHandler = (event) => {
            setTitleValue(event.target.value);
    }
    
    const amountChangeHandler = (event) => {
            setAmountValue(event.target.value);
    }
    
    const addIncomeHandler = (event) => {
        event.preventDefault();
        if(titleValue.trim().length === 0 || amountValue.trim().length === 0 || dateValue.trim().length === 0){
            alert('Please enter VALID input');
            return;
        }
        const incomeData = {id: uniqueId(), name: titleValue, amount: parseInt(amountValue), date: dateValue, type: 'Income'}    
        props.onNewExpense(incomeData);
        setAmountValue('');
        setTitleValue('');
        setDateValue('');
            //console.log(incomeData);
    }
    
    const addExpenseHandler = (event)=> {
        event.preventDefault();
        if(titleValue.trim().length === 0 || amountValue.trim().length === 0 || dateValue.trim().length === 0){
            alert('Please enter VALID input');
            return;
        }
        const expenseData = {id: uniqueId(), name: titleValue, amount: parseInt(amountValue), date: dateValue, type: 'Expense'}
        props.onNewExpense(expenseData);
        setAmountValue('');
        setTitleValue('');
            //console.log(expenseData);
    }  

    const dateChangeHandler = (event) => {
        setDateValue(event.target.value)
    }

    
    return (
        
        <div className={classes.ExpenseForm}>
            <h2>Add New Expense</h2>
            <form>
                <div ><input type="text" value={titleValue}  onChange={titleChangeHandler} placeholder="Title"/></div>
                <div ><input type="number"value={amountValue} onChange={amountChangeHandler} placeholder="Amount"/></div>
                <div ><input type="date" value={dateValue} onChange={dateChangeHandler}/></div>
                <div className={classes.btn}>
                    <button className={classes.inc} type="submit" onClick={addIncomeHandler}>INCOME </button>
                    <button className={classes.exp} type="submit" onClick={addExpenseHandler}>EXPENSE</button>
                </div>
            </form>
        </div>
    )
}
export default ExpenseForm;