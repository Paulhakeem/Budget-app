<script setup>

defineEmits(['close-modal'])
defineProps({
 modalActive: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <transition name="modal-outer">
    <div v-show="modalActive"
      class="absolute w-full z-50 bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
    >
      <transition name="modal-inner">
        <div v-if="modalActive"
        class="p-4 bg-white self-start mt-32 w-80 rounded-md h-80">
            <iconsCloseMenu @click="$emit('close-modal')"/>
            <!-- <div class="float-right">
               <svg @click="$emits('close-modal')"
               xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="#888888" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
            </div> -->
            <slot />
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
