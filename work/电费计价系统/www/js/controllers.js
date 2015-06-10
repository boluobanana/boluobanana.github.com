angular.module('starter.controllers', [])

.controller('welcomeCtrl', function($scope, $stateParams) {
	
	/*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }
})

.controller('selectCtrl', function($scope, $stateParams){
  /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }
})
.controller('meterCtrl', function($scope, $stateParams, $http, querys){
  
  var bac = document.getElementById('backtropQuer');
  var bac2 = document.getElementById('backtrop2');
  var bac3 = document.getElementById('backtrop3');

  $scope.action = function(){
    bac.style.visibility = "visible";
    bac.classList.add('test');
    
  }
  $scope.action2 = function(){
  bac2.style.visibility = "visible";
  bac2.classList.add('test');
  }
  $scope.hide = function(){
    bac.style.visibility = "hidden";
    bac2.style.visibility = "hidden";
    bac3.style.visibility = "hidden";
    bac.classList.remove('test');
    bac2.classList.remove('test');
    bac3.classList.remove('test');
  }

  $scope.time = CurentTime();
  var value,
      deg,
      data;


  $scope.saveData = function(){
    var promise = querys.getOne($scope.value);
    promise.then(function(data){
      data.monthPower = (function(){
                            if ($scope.deg < data.ammeterValue) {
                              return 9999 - data.ammeterValue + $scope.deg;
                            }else {
                              return $scope.deg - data.ammeterValue;
                            };
                          })()
      data.ammeterValue = $scope.deg;
      data.charge = (function(){
                      if (data.monthPower > 281) {
                        return 180 * 0.5 + 100 * 0.55 + (data.monthPower - 280) * 0.8;
                      }else if (data.monthPower > 180) {
                        return 180 * 0.5 + (data.monthPower - 180) * 0.55;
                      }else if (data.monthPower > 0) {
                        return data.monthPower * 0.5;
                      };
                    })();
      data.checked = true;
      data.updataTime = $scope.time;
      console.log(data);
      $http({
        url: 'http://192.168.1.104:3000/api/electiys?access_token=banana',
        method: 'PUT',
        data: data
        }).
        success(function(data, status, headers, config) {
          bac3.style.visibility = 'visible';
        }).
        error(function(data, status){
          alert("time out")
        })
    });

  /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }
  }


  function CurentTime()
  { 
      var now = new Date();
     
      var year = now.getFullYear();       //年
      var month = now.getMonth() + 1;     //月
      var day = now.getDate();            //日
     
      var hh = now.getHours();            //时
      var mm = now.getMinutes();          //分
      var ss = "56.364Z";

      var clock = year + "-";
     
      if(month < 10)
          clock += "0";
     
      clock += month + "-";
     
      if(day < 10)
          clock += "0";
         
      clock += day + "T";
     
      if(hh < 10)
          clock += "0";
         
      clock += hh + ":";
      if (mm < 10) clock += '0'; 
      clock += mm;
      clock += ":";
      
      clock += ss;
      return(clock); 
  }

  /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }
})

//查询总列表（表号查询，抄表报表，欠费报表）
.controller('querysCtrl', function($scope, $stateParams){
  /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }
})
.controller('arreargeCtrl', function($scope, $stateParams){

  /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }
})

//未抄报表
.controller('uncheckedListCtrl', function($scope, $stateParams, querys){
  
  var promise = querys.getAll();
  promise.then(function(data){
    console.log(data)
    var len = data.length,
        i,
        checkedList = [],
        uncheckedList = [];
    for( i =0; i<len;i++){
      if (data[i].checked) {
        checkedList.push(data[i]);
      }else{
        uncheckedList.push(data[i]);
      };
    }
    $scope.uncheckedLists = uncheckedList;
  })

  /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }
})

//表号查询
.controller('filerByIdCtrl', function($scope,$stateParams, $ionicModal, $ionicGesture, querys){
  var value = '';
  $scope.value = value;
  var bac = document.getElementById('backtropId');
  var bacInput = bac.getElementsByTagName('input')[0];
  
  $scope.action = function(){

    bac.style.visibility = "visible";
    bac.classList.add('test');
    console.log(bac.style.cssText)
  }
  $scope.hide = function(){
    bac.style.visibility = "hidden";
    bac.classList.remove('test');
  }

  $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
      $scope.titleId = $scope.value;
      var promise = querys.getOne($scope.value);
      promise.then(function(data){
        $scope.data = data;
      })
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

    /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }

})
//报表详情
.controller('querysDetailCtrl', function($scope, $stateParams, $ionicBackdrop, $timeout, $ionicModal, $ionicPopover, querys) {
  // console.log($stateParams);
  var promise = querys.getOne($stateParams.eleId);
  promise.then(function(data){
    $scope.data = data;
  })

  /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }

})


//欠费报表
.controller('arreargeCtrl', function($scope, $stateParams, querys){
  var promise = querys.getAll();
  promise.then(function(data){
    var unpayList = []
    for( var i=0,len=data.length; i<len; i++ ){
      if (data[i].charge < 0) {
        unpayList.push(data[i]);
      };
    }
    $scope.unpayLists = unpayList;
  })

  /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }
})
.controller('debtDetailCtrl', function($scope, $stateParams){

  /*--------- 手势回退 ---------*/
    $scope.onSwipeRight = function(){
      history.back();
    }
})




