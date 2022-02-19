import React from "react";
import classes from "../UI/Balance.module.css";

function Balance( {inc, exp} ) {
    return (
        <div>
            <div className = {classes.bal}>
                <h1>Expense Tracker App</h1>
                <h2>Balance</h2>
                <h3>Rs. {inc-exp}</h3>
            </div>
            <div className = {classes.Inc_Exp}>
                <div>
                    <h2>Income</h2>
                    <div>Rs. {inc}</div>
                </div>
                <div>
                    <h2>Expense</h2>
                    <div>Rs. {exp}</div>
                </div>
            </div>
        </div>
    )
}
export default Balance;