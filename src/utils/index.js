export default {
  gos(_vm){
    _vm.$router.go(-1)
  },
  Fors(_vm,key,array){
    for(var i=0;i<array.length;i++){
      if(array[i].action == key){
        _vm.Data = array[i]
        break;
      }
    }
  }
}
