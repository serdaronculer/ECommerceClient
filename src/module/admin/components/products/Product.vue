<template>
  <div>
    <v-row class="">
      <v-col cols="12">
        <v-sheet class="pa-2"> HEADER </v-sheet>
      </v-col>
      <v-col cols="3">
        <v-text-field
          label="Name"
          variant="underlined"
          color="#3f51b5"
          :error-messages="errorName"
          v-model="name"
        ></v-text-field>
        <v-text-field
          label="Stock"
          type="number"
          variant="underlined"
          color="#3f51b5"
          :error-messages="errorStock"
          v-model="stock"
        ></v-text-field>
        <v-text-field
          label="Price"
          type="number"
          variant="underlined"
          color="#3f51b5"
          :error-messages="errorPrice"
          v-model="price"
        ></v-text-field>
        <v-btn
          :loading="isSpinner"
          variant="outlined"
          color="#3f51b5"
          @click.prevent="save"
        >
          add product
        </v-btn>
      </v-col>
      <v-col cols="9"> Aynen kardeşim benim </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
//! IMPORTS
import Spinner from "@/components/Spinner.vue";
import CreateProduct from "@/contracts/create_product";
import { message, MessageType, Position } from "@/services/admin/alertify";
import { ref } from "@vue/reactivity";
import store from "@/store";
import { AxiosError } from "axios";
//*---------------------------------------------------------------------------------------
//! VARIABLE DEFINATIONS
const name = ref<string>("");
const stock = ref<number>(0);
const price = ref<number>(0);
const isSpinner = ref<boolean>(false);
const errorName = ref<string>("");
const errorStock = ref<string>("");
const errorPrice = ref<string>("");
//*----------------------------------------------------------------------------------------
const save = async () => {
  if (!useValidation()) {
    message("Ürün Eklenemedi", { messageType: MessageType.ERROR });
  } else {
    try {
      isSpinner.value = true;
      resetErrorValue();
      numberValidation();

      const createProduct = new CreateProduct(
        name.value,
        stock.value,
        price.value
      );

      if (process.env.NODE_ENV === "development") {
        console.log(createProduct);
      }

      await store.dispatch("addProductAsync", createProduct);
      isSpinner.value = false;
      message("Ürün Eklendi", { messageType: MessageType.SUCCES });
      resetValue();
    } catch (error) {
      isSpinner.value = false;
      if (error instanceof AxiosError && error.response) {
        const _error: Array<{ key: string; value: Array<string> }> =
          error.response?.data;

        if (process.env.NODE_ENV === "development") {
          console.log(_error);
        }
        writeErrorMessages(_error);
      }
      message("Ürün Eklenemedi", { messageType: MessageType.ERROR });
    }
  }
};

const resetErrorValue = () => {
  errorName.value = "";
  errorStock.value = "";
  errorPrice.value = "";
};
const resetValue = () => {
  name.value = "";
  stock.value = 0;
  price.value = 0;
};
const numberValidation = () => {
  if (typeof stock.value === "string") {
    stock.value = 0;
  }
  if (typeof price.value === "string") {
    price.value = 0;
  }
};
const writeErrorMessages = (
  _error: { key: string; value: Array<string> }[]
) => {
  _error.forEach((v, index) => {
    if (v.key === "Name") {
      v.value.forEach((item) => {
        errorName.value = `${item}`;
      });
    }
    if (v.key === "Stock") {
      v.value.forEach((item) => {
        errorStock.value = `${item}`;
      });
    }
    if (v.key === "Price") {
      v.value.forEach((item) => {
        errorPrice.value = `${item}<br>`;
      });
    }
  });
};
const useValidation = (): boolean => {
  let flag = true;
  
  if (name.value.length <= 0) {
    
    errorName.value = "Ürün adı boş geçilemez.";
    flag = false;
  }
  if (stock.value < 0) {
    errorStock.value = "Stok adedi 0 dan küçük olamaz.";
    flag = false;
  }
  if (price.value < 0) {
    errorPrice.value = "Ürün fiyatı 0 dan küçük olamaz.";
    flag = false;
  }
  return flag;
};
</script>

<style lang="scss" scoped></style>
