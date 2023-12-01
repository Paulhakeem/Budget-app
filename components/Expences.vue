<template>
  <div>
    <!-- -->
    <div class="flex flex-wrap justify-evenly gap-6">
      <div class="relative">
        <div
          class="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#7283ef] via-orange-600 to-[#4ffb8d] opacity-75 blur"
        ></div>
        <div
          class="relative flex h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
          <div>
            <div class="mx-4">
              <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  class="bg-[#4ffb8d] text-xs font-medium text-blue-100 text-center leading-none rounded-full"
                  style="width: 45%"
                >
                  45%
                </div>
              </div>
            </div>
            <h1 class="text-[#7283ef] text-xl text-center mt-8">Income</h1>
            <p class="font-semibold text-3xl pt-4 text-[#4ffb8d]">KSH +{{useExpense.income}}</p>
          </div>
        </div>
      </div>

  <!--  -->
      <div class="relative">
        <div
          class="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#7283ef] via-orange-600 to-[#4ffb8d] opacity-75 blur"
        ></div>
        <div
          class="relative flex h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
          <div>
            <div class="mx-4">
              <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  class="bg-red-500 text-xs font-medium text-blue-100 text-center leading-none rounded-full"
                  style="width: 45%"
                >
                  45%
                </div>
              </div>
            </div>
            <h1 class="text-[#7283ef] text-xl text-center mt-8">Expences</h1>
            <p class="font-semibold text-3xl pt-4 text-red-500">KSH {{useExpense.expenses}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useExpenseStore } from '~/store/main'
const useExpense = useExpenseStore()
</script>

<style lang="scss" scoped></style>
