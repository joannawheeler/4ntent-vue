<template>
  <div class="forms">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Forms here (click to download)' | translate">
          <span @click.stop="download(bxplan)" aria-hidden="true" class="fa fa-file-pdf-o" style="font-size: 30px;"> - Bx Plan Worksheet </span>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'forms',
    data () {
      return {
        bxplan: 'https://firebasestorage.googleapis.com/v0/b/ntent-dfdcd.appspot.com/o/4NTENT_Bx%20Plan%20Worksheet.pdf?alt=media&token=3e8e7bca-75c5-457b-a718-208a1bbaea7f'
      }
    },
    methods: {
      download (link) {
        location.href = link
      }
    }
  }
</script>

<style lang="scss">

</style>
