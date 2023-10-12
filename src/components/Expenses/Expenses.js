import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "../NewExpense/ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); // filteredExpense = [expense, expense, expense];
  console.log(filteredExpenses);
  return (
    <Card className="expenses">
      <ExpensesFilter
        //selected={2020}
        selected={filteredYear}
        //onChangeFilter={userChoice}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {/* expenses = filteredExpenses = [expense, expense, expense]; */}
      {/*<ExpensesChart expenses={2020} />  */}
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
