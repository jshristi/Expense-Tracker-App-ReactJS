import React,{ useState,useEffect } from 'react';
// import ExpenseContainer from './components/ExpenseContainer';
import Balance from './components/Balance';
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
// import SearchBar from "./SearchBar";

import classes from './UI/App.module.css';


//sample transaction data record
// const expData = [
//     {id: uniqueId(), name: 'Salary', amount: 300000, date: '02/16/2022', type: 'Income'},
//     {id: uniqueId(), name: 'Groceries', amount: 50000, date: '02/16/2022', type: 'Expense'},
//     {id: uniqueId(), name: 'Paint', amount: 20000, date: '02/16/2022', type: 'Expense'}
// ];

function App() {
    const [inc, setIncome] = useState(0);
    const [exp, setExpense] = useState(0);
    const [expList, setExpList] = useState([]);

    //const [searchVal, setSearchVal] = useState('');

    const calExpenses = () => {
        let income = 0, expense = 0;
        expList.forEach((data) => {
            if(data.type === 'Income'){
                income += data.amount;
            }else if(data.type === 'Expense'){
                expense += data.amount;
            }
        })
        //console.log(expList);        
        setIncome(income);
        setExpense(expense);
        //console.log(income, expense);
    }

    const newExpenseHandler = (dataExp) => { 
        setExpList((prevData) => {
            return([...prevData,dataExp])
            }
        )
        //console.log(prevData);
    }

    const deleteDataHandler = (searchVal) => {
        const newExpList = (expList.filter((item) => item.id !== searchVal));
        setExpList(newExpList);
    }                                   
    // const searchDataHandler = (searchDate) => {
    //     console.log (expList.filter((d) => d.date === searchDate));

    useEffect(() => {calExpenses()}, [] );

    useEffect(() => {calExpenses()}, [expList] );

    return (
        <div className={classes.card}>
                
                <Balance inc={inc} exp={exp}/>
                {/* <SearchBar placeholder='Enter the date' expList={expList} /> */}
                <ExpenseList expList={expList} onDelData={deleteDataHandler} placeholder='Search  Year'/>
                <ExpenseForm onNewExpense={newExpenseHandler}/>
        </div>      
    )
};


export default App;