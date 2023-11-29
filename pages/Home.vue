<template>
  <div class="pt-20 mx-8">
    <div class="text-center">
      <h1 class="text-3xl text-[#7283ef] font-semibold">Expense Tracker</h1>
    </div>
    <Balance />
    <div>

      <!-- modal -->
      <transaction-modal
      :modalActive="modalActive">
        <div class="text-lg text-center text-gray-800 font-semibold">
          <h1 class="text-[#7283ef]">Add Your Transactions</h1>
        </div>

        <form>
          <div class="pt-3 mb-6">
            <label for="text" class="text-gray-500 text-sm font-medium mb-2"
              >Enter the name</label
            >
            <input
              type="text"
              placeholder="Enter either name of product or capital.."
              class="outline-none border-b-2 border-b-gray-400 w-full ring-0 mt-4 text-gray-500"
            />
          </div>
          <div class="mb-6">
            <label for="text" class="text-gray-500 text-sm font-medium mb-2"
              >Enter the Amount</label
            >
            <p class="text-xs text-gray-500 italic">
              (Negative-Expences, Positive-Income)
            </p>
            <input
              type="text"
              placeholder="Enter Amount.."
              class="outline-none border-b-2 border-b-gray-400 w-full ring-0 mt-4 text-gray-500"
            />
          </div>
          <button
            class="bg-gradient-to-bl from-[#7283ef] to-[#4ffb8d] text-white rounded-md py-2 px-6"
          >
            Add
          </button>
        </form>
      </transaction-modal>
    </div>
  </div>
</template>

<script setup>
import { useExpenseStore } from '~/store/main.js'
const useExpense = useExpenseStore()
</script>
