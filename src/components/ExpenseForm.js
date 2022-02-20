import React,{useState} from "react";
import uniqueId from "./MathRandomFunc";

import classes from '../UI/ExpenseForm.module.css';
import ErrorModal from "../UI/ErrorModal";

// props = onNewExpense
function ExpenseForm (props) {
    const [titleValue, setTitleValue] = useState('');
    const [amountValue, setAmountValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [error, setError] = useState(false);

    const titleChangeHandler = (event) => {
            setTitleValue(event.target.value);
    }
    
    const amountChangeHandler = (event) => {
            setAmountValue(event.target.value);
    }
    
    const addIncomeHandler = (event) => {
        event.preventDefault();
        if(titleValue.trim().length === 0){
            setError({ title: "Error!", message: "Please enter Valid TITLE"});
            return;
        }
        if(amountValue.trim().length === 0 ){
            setError({ title: "Error!", message: "Please enter Valid AMOUNT"});
            return;
        }
        if( dateValue.trim().length === 0){
            setError({ title: "Error!", message: "Please enter Valid DATE"});
            return;
        }
        const incomeData = {id: uniqueId(), name: titleValue, amount: parseInt(amountValue), date: dateValue, type: 'Income'}    
        props.onNewExpense(incomeData);
        setAmountValue('');
        setTitleValue('');
        setDateValue('');
            //console.log(incomeData);
    }
    const onConfirm = () =>{
        setError(null);
    }
    
    const addExpenseHandler = (event)=> {
        event.preventDefault();
        if(titleValue.trim().length === 0){
            setError({ title: "Error!", message: "Please enter Valid TITLE"});
            return;
        }
        if(amountValue.trim().length === 0 ){
            setError({ title: "Error!", message: "Please enter Valid AMOUNT"});
            return;
        }
        if( dateValue.trim().length === 0){
            setError({ title: "Error!", message: "Please enter Valid DATE"});
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
            {error && <ErrorModal title={error.title} message={error.message} onCon={onConfirm}/>}
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