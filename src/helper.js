export default class Helper {

  formatReal( n ) {
      // parseFloat(n)
      return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
  }

  firstName(name) {
    let firstName = name.split(' ')
    return firstName[0]
  }

  // format from YYYY-MM-DD to DD/MM/YYYY
//   dateFilter(dataReceived) {
//     let dateParse = moment(dataReceived).format('DD/MM/YYYY')
//     return dateParse
//   }
}
