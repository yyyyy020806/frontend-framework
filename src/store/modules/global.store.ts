import { defineStore } from 'pinia'
import type { GlobalStoreState, GlobalStoreGetters, GlobalStoreActions } from '@/store/store.types.ts'

export const useGlobalStore = defineStore<'global', GlobalStoreState, GlobalStoreGetters, GlobalStoreActions>('global', {
  state: () => ({

  }),
  getters: {

  },
  actions: {

  }
})