import { defineStore } from "pinia";

export const useExpenseStore = defineStore("expense", () => {
  const modalActive = ref(null);

  const toggleModal = () => {
    modalActive.value = !modalActive.value;
  }

  return {modalActive, toggleModal}
});
