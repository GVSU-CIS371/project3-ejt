<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currentCream" :syrup="currentSyrup" :beverage="currentBase"/>
    <ul>
      <li>
        <select v-model="currentTemp">
        <option v-for="temp in temps" :key="temp">
            {{ temp }}
        </option>
      </select>
      <select v-model="currentCream">
        <option v-for="cream in creams" :key="cream">
            {{ cream }}
        </option>
      </select>
      <select v-model="currentSyrup">
        <option v-for="syrup in syrups" :key="syrup">
            {{ syrup }}
        </option>
      </select>
      <select v-model="currentBase">
        <option v-for="base in bases" :key="base">
            {{ base }}
        </option>
      </select>
      </li>
    </ul>
    <ul>
      <label for="name">Name: </label>
      <input type="text" id="drinkName" placeholder="Enter Beverage Name" v-model="drinkName">
    </ul>
    <ul>
      <button @click="makeBeverage">Make Beverage</button>
    </ul>
    <ul>
      <template v-for="recipe in recipes" :key="recipe">
          <label class="radio">
            <input @click="showBeverage(recipe)"
              type="radio"
              name="Recipe"
              :id="`rRecipe${recipe}`"
              :value="recipe"
              v-model="currentRecipe"
            />
            {{ recipe.name }}
          </label>
        </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from './stores/PiniaStore.ts'
// Define reactive data
const temps = ref(["Hot", "Cold"]);
const bases = ref(["Coffee", "Black Tea", "Green Tea"]);
const creams = ref(["None","Milk","Cream","Half & Half"])
const syrups = ref(["None","Vanilla","Caramel","Hazelnut"])

const currentBase = ref("Coffee");
const currentTemp = ref("Hot");
const currentCream = ref("None");
const currentSyrup = ref("None");
const currentRecipe = ref('None');
const drinkName = ref('');

const bevStore = useBeverageStore();
const recipes = bevStore.recipes

const makeBeverage = () => {

  bevStore.$patch((state) => {
    state.recipes.push({
      temperature: currentTemp.value,
      creamer: currentCream.value,
      syrup: currentSyrup.value,
      base: currentBase.value,
      name: drinkName.value,
    })
  })

  drinkName.value = '';
}

const showBeverage = (recipe: {temperature: string;
            creamer: string;
            syrup: string;
            base: string;
            name: string
        }) => {
  currentTemp.value = recipe.temperature;
  currentCream.value = recipe.creamer;
  currentSyrup.value = recipe.syrup;
  currentBase.value = recipe.base
}
</script>

<style lang="scss">
body,
html {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
  color: #253031;
}
ul {
  list-style: none;
}
label:first-of-type {
    font-weight: bold;
}

select {
  background-color: #F2E9DC;
  color: #253031;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding: 7px 10px;
  display: inline-block;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  margin: 4px 2px;
  min-width: 100px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
}

input {
  background-color: #F2E9DC;
  color: #253031;
  border-radius: 12px;
  padding: 8px 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
}

button {
  background-color: #F2E9DC;
  color: #253031;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 12px;
  padding: 8px 15px;
  font-size: medium;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
}

.radio{
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
  padding: 5px 0px;
}
</style>
