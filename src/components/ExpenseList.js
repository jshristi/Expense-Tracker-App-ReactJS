import React, {useState} from "react";
import classes from '../UI/ExpenseList.module.css';

function ExpenseList ({expList, placeholder, onDelData}) {
    const [searchData, setSearchData] = useState([]);

    const searchDataHandler = (event) => {
        const enteredYear = event.target.value;
        const newFilterData  = expList.filter((value) => {
            return value.date.includes(enteredYear)
        });
        setSearchData(newFilterData);
    }
    return (
        <div className={classes.card}>
            <h2>Expense List</h2>
            <div >
                {/* This is for SearchBar */}
                <div className={classes.search}>
                    <div className={classes.searchInputs}>
                        <input type="number" placeholder={placeholder} onChange={searchDataHandler} />
                        <div className={classes.searchIcon}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    {searchData.length !== 0 && (
                        <div className={classes.dataResult}>
                            {searchData.map((value,key) => {
                                    return (
                                    <div className={classes.dataItems} key={value.id}>
                                        {value.name}: Rs.{value.amount}
                                        <br/> 
                                        Date: {value.date} 
                                    </div>
                                );
                            })}
                        </div> 
                    )}
                </div>
            </div>
            {/* This is for displaying Expense Data/List */}
            <ul  className={classes.cardExpList} >
                {
                    expList.map((data) =>
                     <li className={classes.list} key= {data.id}>
                        {data.type}:<br/> 
                        Title: {data.name} - Rs.{data.amount} <br/> 
                        Date: {data.date}
                        <button className={classes.btn} type="submit" onClick={ () => onDelData(data.id)}>
                            <i class="fa-solid fa-xmark"></i>
                        </button> 
                      </li>
                    )
                }
            </ul>
        </div>
    )

}

export default ExpenseList;