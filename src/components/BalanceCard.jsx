function BalanceCard({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="bg-green-600 text-white rounded-2xl shadow-xl p-8 mb-8">
      <h2 className="text-xl font-semibold text-center">
        Current Balance
      </h2>

      <p className="text-5xl font-bold text-center mt-4">
        Rs. {balance.toFixed(2)}
      </p>

      <div className="flex justify-between mt-8">
        <div>
          <h3 className="font-semibold">Income</h3>
          <p>Rs. {income.toFixed(2)}</p>
        </div>

        <div>
          <h3 className="font-semibold">Expense</h3>
          <p>Rs. {expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;