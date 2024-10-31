<template>
    <div class="friend-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input v-model="lastName" type="text" id="lastName" required />
        </div>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input v-model="firstName" type="text" id="firstName" required />
        </div>
        <div class="form-group">
          <label for="middleName">Middle Name</label>
          <input v-model="middleName" type="text" id="middleName" />
        </div>
        <div class="form-group">
          <label for="birthYear">Birth Year</label>
          <input v-model="birthYear" type="number" id="birthYear" />
        </div>
        <div class="form-group">
          <label for="cellPhone">Cell Phone</label>
          <input v-model="cellPhone" type="text" id="cellPhone" />
        </div>
        <div class="form-group">
          <label for="mobilePhone">Mobile Phone</label>
          <input v-model="mobilePhone" type="text" id="mobilePhone" />
        </div>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lastName: '',
        firstName: '',
        middleName: '',
        birthYear: '',
        cellPhone: '',
        mobilePhone: '',
      };
    },
    methods: {
      submitForm() {
        this.$emit('add-friend', {
          lastName: this.lastName,
          firstName: this.firstName,
          middleName: this.middleName,
          birthYear: this.birthYear,
          cellPhone: this.cellPhone,
          mobilePhone: this.mobilePhone,
        });

        this.lastName = '';
        this.firstName = '';
        this.middleName = '';
        this.birthYear = '';
        this.cellPhone = '';
        this.mobilePhone = '';
      },
    },
  };
  </script>
