angular.module('starter.controllers', [])

    //主控制器
    .controller('appCtrl', function($scope,$ionicSideMenuDelegate,$rootScope,$ionicPopup) {
//*****************************竞猜首页控制器********************************
        $scope.guess=function(){

            $scope.toggleLeftSideMenu = function() {
                $ionicSideMenuDelegate.toggleLeft();
            };

            //竞猜进入详情
            $scope.tbg_detail=function(){
                $rootScope.hideTabs = true;
                location.href="#/tab/guessDetail";
            }
            //返回
            $scope.back_guess=function(){
                $rootScope.hideTabs = false;
                location.href='#/tab/guess';
            }

            //竞猜详情答案选择样式控制
            $scope.choiceQuest=function(nums,num){
                $('.clo-gdcolor2').removeClass('clo-gdcolor2');
                $('.badgegdColor2').removeClass('badgegdColor2');
                $('.textColor2').removeClass('textColor2');
                $('.choiceQuest').eq(num).children('.clo-gdcolor').addClass('clo-gdcolor2');
                $('.choiceQuest').eq(num).children('.clo-gdcolor').find('.badgeColor').addClass('badgegdColor2');
                $('.choiceQuest').eq(num).children('.clo-gdcolor').find('.textColor').addClass('textColor2');
            }

            $scope.betting=function(){
                var confirmPopup = $ionicPopup.confirm({
                    title: '<strong>投注数量</strong>',
                    template: '<div class="bar pupbar"> ' +
                    '<button class="button icon ion-minus"></button> ' +
                    '<h1 class="title">1000</h1> ' +
                    '<button class="button icon ion-plus"></button> ' +
                    '</div>',
                    buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
                        text: '取消',
                        type: 'button-default',
                        onTap: function(e) {
                            // 当点击时，e.preventDefault() 会阻止弹窗关闭。

                        }
                    }, {
                        text: '投注',
                        type: 'button-energized',
                        onTap: function(e) {
                            // 当点击时弹窗。
                            var alertPopup = $ionicPopup.alert({
                                title: '<strong>投注成功</strong>',
                                template: '<div class="text-center">本题预计于03月16日17时开奖，开奖结果请查询‘竞猜记录’，竞猜迷们赶紧行动吧！</div>',
                                okText:'确认',
                                okType:'button-balanced'
                            });
                            alertPopup.then(function(res) {
                                $rootScope.hideTabs = false;
                                location.href='#/tab/history';
                            });
                        }
                    }]
                });
            }

            $scope.changequest=function(){
                var confirmPopup = $ionicPopup.confirm({
                    title: '<strong>匣豆不足</strong>',
                    template: '<div class="row"> ' +
                    '<div class="col col-33 text-center"> ' +
                    '我的匣豆'+
                    '</div> ' +
                    '<div class="col col-33 text-center"> ' +
                    '<i class="icon ion-arrow-swap"></i>'+
                    '</div> ' +
                    '<div class="col col-33 text-center"> ' +
                    '我的流量'+
                    '</div> ' +
                    '</div>' +

                    '<div class="row"> ' +
                    '<div class="col col-33 text-center"> ' +
                    '9999'+
                    '</div> ' +
                    '<div class="col col-33"> ' +

                    '</div> ' +
                    '<div class="col col-33 text-center"> ' +
                    '9999M'+
                    '</div> ' +
                    '</div>' +

                    '<div class="row"> ' +
                    '<div class="col col-25 text-center"> ' +
                    '<button class="button button-small icon ion-arrow-left-b"></button> '+
                    '</div> ' +
                    '<div class="col col-25 text-center"> ' +
                    '<button class="button button-small icon ion-minus"></button> '+
                    '</div> ' +
                    '<div class="col col-25 text-center"> ' +
                    '<button class="button button-small icon ion-plus"></button> '+
                    '</div> ' +
                    '<div class="col col-25 text-center"> ' +
                    '<button class="button button-small icon ion-arrow-right-b"></button> '+
                    '</div> ' +
                    '</div>' ,


                    buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
                        text: '取消',
                        type: 'button-default',
                        onTap: function(e) {

                        }
                    }, {
                        text: '兑换',
                        type: 'button-energized',
                        onTap: function(e) {

                        }
                    }]
                });
            }
        }
//*****************************参与记录控制器*****************************
        $scope.historys=function(){

            $scope.lottery=function(num){
                $rootScope.hideTabs = true;
                location.href='#/tab/historyDetail';
                switch (num){
                    case 0:
                        $scope.prompt1='开奖倒计时：2016-3-20 10:00:00';
                        $scope.prompt2='停投倒计时：2016-3-31 10:00:00';
                        break;
                    case 1:
                        $scope.prompt1='恭喜您答对了';
                        $scope.prompt2='您将获得：240匣豆';
                        break;
                    case 2:
                        $scope.prompt1='很遗憾，您答错了';
                        $scope.prompt2='正确答案为 D 选项';
                        break;
                    default :
                        $scope.prompt1='未知';
                        $scope.prompt2='未知';
                }
            };

            //“返回参与记录”
            $scope.back_history=function(){
                $rootScope.hideTabs = false;
                location.href='#/tab/history';
            }

            //继续竞猜“返回首页”
            $scope.continue=function(){
                $rootScope.hideTabs = false;
                location.href='#/tab/guess';
            }

        }
//*****************************本周榜单控制器*****************************
        $scope.rankinglist=function(){

        }

    })
