<template>
  <div class="my-intention-setter-page">
    <v-data-table :headers="headers" :items="tableData">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td>
          <v-select :items="[]" v-model="attention" label="Select" single-line></v-select>
        </td>
        <td>
          <v-select :items="[]" v-model="profile" label="Select" single-line></v-select>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import firebase from 'firebase'
import db from '../../firebaseInit'

export default {
  name: 'my-intention-setters',
  components: {},
  data() {
    return {
      users: [],
      userObjs: [],
      tableData: [],
      attention: '',
      profile: '',
      headers: [{
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        { text: 'Email', value: 'email' },
        { text: 'Needs Attention', value: 'attention', sortable: false },
        { text: 'Profile', value: 'profile', sortable: false },
      ],
    }
  },
  created() {
    let use = this.$store.getters.getUser
    let id = use.user.uid
    this.id = id;

    db.collection('users').doc(id).get()
      .then(doc => {
        this.userinfo = doc.data();
        this.users = this.userinfo.users;
        return doc.data()
      })
      .then(userdata => {
        for (var i = 0; i < userdata.users.length; i++) {
          db.collection('users').doc(userdata.users[i].id).get()
            .then(doc => {
              var user = doc.data();
              this.userObjs.push(user);
              const item = {
                'name': user.firstName + ' ' + user.lastName,
                'email': user.email,
                'needs attention': '',
                'profile': ''
              }
              this.tableData.push(item);
              return doc.data()
            })
            // .then(userdata => {
            // })
            .catch(err => {
              alert('there was an error: ' + err)
            })
        }
      })
      .catch(err => {
        alert('there was an error: ' + err)
      })
  },
}

</script>
<style lang="scss" scoped>
.my-intention-setter-page {
  width: 100%;
  padding: 0 20px;
}

</style>
