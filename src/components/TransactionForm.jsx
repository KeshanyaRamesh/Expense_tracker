import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Income");

  function handleSubmit() {
    if (
      description.trim() === "" ||
      amount === "" ||
      date === ""
    ) {
      return;
    }

    addTransaction({
      description: description.trim(),
      amount: Number(amount),
      date,
      type,
    });

    setDescription("");
    setAmount("");
    setDate("");
    setType("Income");
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">
        Add Transaction
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3"
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default TransactionForm;