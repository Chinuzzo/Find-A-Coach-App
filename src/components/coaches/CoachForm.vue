<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">Firstname</label>
      <input
        id="firstname"
        v-model.trim="firstName.val"
        type="text"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">
        Firstname must not be empty.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Lastname</label>
      <input
        id="lastname"
        v-model.trim="lastName.val"
        type="text"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">
        Lastname must not be empty.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model.trim="description.val"
        rows="5"
        @blur="clearValidity('description')"
      />
      <p v-if="!description.isValid">
        Description must not be empty.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        id="rate"
        v-model.number="rate.val"
        type="number"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">
        Rate must be greater than 0.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          id="manager"
          v-model="areas.val"
          type="checkbox"
          value="manager"
          @blur="clearValidity('areas')"
        />
        <label for="manager">Manager</label>
      </div>
      <div>
        <input
          id="mentor"
          v-model="areas.val"
          type="checkbox"
          value="mentor"
          @blur="clearValidity('areas')"
        />
        <label for="mentor">Mentor</label>
      </div>
      <div>
        <input
          id="assistant"
          v-model="areas.val"
          type="checkbox"
          value="assistant"
          @blur="clearValidity('areas')"
        />
        <label for="assistant">Assistant</label>
      </div>
      <p v-if="!areas.isValid">
        At least one area of expertise must be selected.
      </p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
