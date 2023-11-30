<template>
  <div class="pt-12">
    <div class="mobile flex flex-wrap justify-between">
      <div class="relative">
        <div
          class="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#7283ef] via-orange-600 to-[#4ffb8d] opacity-75 blur"
        ></div>
        <div
          class="box relative flex h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
          <div>
            <h1 class="text-[#7283ef] text-xl text-center">Your Balance</h1>
            <p class="font-semibold text-3xl pt-4 text-white">KSH 10000</p>
          </div>
        </div>
      </div>

      <div class="expences">
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
  </div>
</template>

<script setup>
</script>

