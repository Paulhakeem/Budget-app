import { defineStore } from "pinia";

export const useExpenseStore = defineStore("expense", () => {
  const amount = ref(0);
  const newTransaction = ref("");

  const transactions = ref([]);

  //  GenerateId
  const autoGenerateId = () => {
    return Math.floor(Math.random() * 10000);
  };

  //  add Transaction
  const addTransaction = () => {
    transactions.value.push({
      id: autoGenerateId(),
      name: newTransaction.value,
      amount: parseFloat(amount.value),
    });
    saveToLocalStorage();
    newTransaction.value = "";
    amount.value = "";
  };

  //   delete
  const removeTransaction = (index) => {
    transactions.value.splice(index, 1);
    saveToLocalStorage();
  };
  //  get total
  const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
  });

  //  get total
  const income = computed(() => {
    return transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => {
        return acc + transaction.amount;
      }, 0)
      .toFixed(2);
  });

  //  get expenses
  const expenses = computed(() => {
    return transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => {
        return acc + transaction.amount;
      }, 0)
      .toFixed(2);
  });

  // save transactions
  onMounted(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

    if (savedTransactions) {
      transactions.value = savedTransactions;
    }
  });

  //  save to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions.value));
  };

  return {
    total,
    transactions,
    income,
    expenses,
    newTransaction,
    amount,
    autoGenerateId,
    addTransaction,
    removeTransaction,
    saveToLocalStorage,
  };
});
