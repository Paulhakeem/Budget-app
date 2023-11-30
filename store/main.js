import { defineStore } from "pinia";

export const useExpenseStore = defineStore("expense", () => {
    
 const name = ref('')
 const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => {
        return acc + transaction.amount
    }, 0)
 })

 const transactions = ref([
    {
        id: 1, name: "Capital", amount: 500000
    },
    {
        id: 1, name: "Iphone", amount: 5000
    },
    {
        id: 2, name: "Samsung", amount: -10000
    },
    {
        id: 3, name: "Smart TV", amount: -3000
    }
 ])

 console.log(transactions);
 return {name, total, transactions}
});
