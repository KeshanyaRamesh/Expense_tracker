import { useEffect, useState } from "react";
import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import SearchBar from "./components/SearchBar";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function deleteTransaction(index) {
    setTransactions(transactions.filter((_, i) => i !== index));
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || transaction.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        <Header />

        <BalanceCard transactions={transactions} />

        <TransactionForm addTransaction={addTransaction} />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="flex gap-3 mb-6">

          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-lg ${
              filter === "All"
                ? "bg-green-600 text-white"
                : "bg-white"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("Income")}
            className={`px-4 py-2 rounded-lg ${
              filter === "Income"
                ? "bg-green-600 text-white"
                : "bg-white"
            }`}
          >
            Income
          </button>

          <button
            onClick={() => setFilter("Expense")}
            className={`px-4 py-2 rounded-lg ${
              filter === "Expense"
                ? "bg-green-600 text-white"
                : "bg-white"
            }`}
          >
            Expense
          </button>

        </div>

        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
        />

      </div>
    </div>
  );
}

export default App;