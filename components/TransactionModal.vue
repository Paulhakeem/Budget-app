<script setup></script>
<template>
  <transition>
    <div
      class="absolute w-full z-50 bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
    >
      <transition name="modal-inner">
        <div class="p-4 bg-white self-start mt-32 w-80 rounded-md h-80">
            <iconsCloseMenu/>
            <slot />
          <div class="">
            <!-- <button
              class="bg-gradient-to-bl from-[#7283ef] to-[#4ffb8d] text-white rounded-md py-2 px-6"
            >
              Closed
            </button> -->
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
