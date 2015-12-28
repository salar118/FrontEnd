'use strict'

app.filter('seniorEmployeeFltr',function(){
  return function(items){
    return _.filter(items, function(item){
      return item.age >= 43;
    });
  }
});
