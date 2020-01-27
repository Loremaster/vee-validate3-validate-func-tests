<template>
  <div @click="select" class="upload-file">
    Upload file
    <input ref="input" name="file" type="file" data-vv-as="file" hidden @change="upload" />
  </div>
</template>

<script>
import { validate } from "vee-validate";

export default {
  name: "Uplad",
  methods: {
    select() {
      this.$refs.input.value = null;
      this.$refs.input.click();
    },

    async upload(event) {
      const target = event.target;
      const file = (target.files || event.dataTransfer.files)[0];
      const validationResult = await validate(
        file,
        `size:1024|mimes:application/xml,text/xml`,
        {
          customMessages: {
            mimes: "File must be xml type",
            size: "File is too large"
          }
        }
      );

      if (!validationResult.valid) {
        const error = validationResult.errors.join(", ");

        if (error) {
          alert(`There are errors: ${error}`);
        }
        return;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload-file {
  cursor: pointer;
}
</style>
