import { defineStore } from "pinia";

export const useExpenseStore = defineStore("expense", () => {
 const name = ref('')
 const amount = ref(0)

 const transactions = ref([
    {
        id: 1, name: "Iphone", amount: 5000
    },
    {
        id: 2, name: "Samsung", amount: 10000
    },
    {
        id: 3, name: "Smart TV", amount: 3000
    }
 ])

 console.log(transactions);
 return {name, amount, transactions}
});
