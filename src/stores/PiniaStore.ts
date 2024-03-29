import { defineStore } from 'pinia';

export const useBeverageStore = defineStore({
    id: 'beverage',
    state: () => ({
        recipes: [] as {
            temperature: string;
            creamer: string;
            syrup: string;
            base: string;
            name: string;
        }[]
    }),
});
