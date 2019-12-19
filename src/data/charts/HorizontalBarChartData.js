import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Fitness Freak', 'Nutrition Nut', 'Lifestyle Guru'],
  datasets: [
    {
      label: '4NTENT Assessment Score',
      backgroundColor: palette.warning,
      borderColor: palette.transparent,
      data: [30, 90, 50, 100]
    }
    // {
    //   label: 'Bulma Satisfaction Score',
    //   backgroundColor: palette.danger,
    //   borderColor: palette.transparent,
    //   data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53]
    // }
  ]
}
