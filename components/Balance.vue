<template>
  <div class="mt-12">
    <div class="flex flex-wrap justify-between">
      <div class="relative">
        <div
          class="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#7283ef] via-orange-600 to-[#4ffb8d] opacity-75 blur"
        ></div>
        <div
          class="relative flex h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
          <div>
            <h1 class="text-[#7283ef] text-xl text-center">Your Balance</h1>
            <p class="font-semibold text-3xl pt-4 text-white">KSH 10000</p>
          </div>
        </div>
      </div>

      <div>
        <Expences />
      </div>
      <div class="relative">
        <div
          class="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#7283ef] via-orange-600 to-[#4ffb8d] opacity-75 blur"
        ></div>
        <div
          class="relative flex h-64 w-96 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
          <div>
               <h1 class="border-b border-b-gray-600 ">Transaction History</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-20">
      <button
        class="bg-gradient-to-bl from-[#7283ef] to-[#4ffb8d] text-white rounded-md px-2 py-1 w-72"
      >
        Add Transaction
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
