function TransactionList({
  transactions,
  deleteTransaction,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500">
          No transactions yet.
        </p>
      ) : (
        <div className="space-y-3">

          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded-lg p-4"
            >
              <div>
                <h3 className="font-semibold">
                  {transaction.description}
                </h3>

                <p className="text-gray-500">
                  {transaction.date}
                </p>
              </div>

              <div className="flex items-center gap-4">

                <span
                  className={
                    transaction.type === "Income"
                      ? "text-green-600 font-bold"
                      : "text-red-600 font-bold"
                  }
                >
                  {transaction.type === "Income" ? "+" : "-"}
                  Rs. {transaction.amount}
                </span>

                <button
                  onClick={() => deleteTransaction(index)}
                  className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default TransactionList;