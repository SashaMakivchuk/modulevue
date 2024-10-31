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
      lastName: "",
      firstName: "",
      middleName: "",
      birthYear: "",
      cellPhone: "",
      mobilePhone: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("add-friend", {
        lastName: this.lastName,
        firstName: this.firstName,
        middleName: this.middleName,
        birthYear: this.birthYear,
        cellPhone: this.cellPhone,
        mobilePhone: this.mobilePhone,
      });

      this.lastName = "";
      this.firstName = "";
      this.middleName = "";
      this.birthYear = "";
      this.cellPhone = "";
      this.mobilePhone = "";
    },
  },
};
</script>
<style scoped lang="scss">
.friend-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #000;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: border-color 0.3s;

      &:focus {
        border-color: #28a745;
        outline: none;
      }
    }
  }

  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darken(#28a745, 10%);
    }
  }
}
</style>
