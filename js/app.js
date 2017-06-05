
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {

      });
    })

    .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

      //全局禁用缓存
      $ionicConfigProvider.views.maxCache(0);

      //路由控制
      $stateProvider
          //底部tab
          .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html",
            controller: 'appCtrl'
          })
          //竞猜首页
          .state('tab.guess', {
            url: '/guess',
            views: {
               'tab-guess': {
                templateUrl: 'templates/tab-guess.html'
              }
            }
          })
          //竞猜详情
          .state('tab.guessDetail', {
              url: '/guessDetail',
              views: {
                  'tab-guess': {
                      templateUrl: 'templates/guess-detail.html'
                  }
              }
          })
          //参与记录
          .state('tab.history', {
            url: '/history',
            views: {
              'tab-history': {
                templateUrl: 'templates/tab-history.html'
              }
            }
          })
          //参与记录详情
          .state('tab.historyDetail', {
              url: '/historyDetail',
              views: {
                  'tab-history': {
                      templateUrl: 'templates/history-detail.html'
                  }
              }
          })
          //本周榜单
          .state('tab.rankinglist', {
            url: '/rankinglist',
            views: {
              'tab-rankinglist': {
                templateUrl: 'templates/tab-rankinglist.html'
              }
            }
          })
          //竞猜声明
          .state('tab.statement', {
            url: '/statement',
            views: {
              'tab-statement': {
                templateUrl: 'templates/tab-statement.html'
              }
            }
          })
          //匣子游戏
          .state('tab.game', {
            url: '/game',
            views: {
              'tab-game': {
                templateUrl: 'templates/tab-game.html'
              }
            }
          })


        //首次启动加载
      $urlRouterProvider.otherwise('/tab/guess');


      /* **************************public 公共代码******************************** */

        //配置android显示样式
        $ionicConfigProvider.tabs.position('bottom'); //ios 默认在底部、android默认在顶部
        //$ionicConfigProvider.tabs.style('standard'); //
        $ionicConfigProvider.navBar.alignTitle('center'); //ios 默认居中、android默认左边
        $ionicConfigProvider.backButton.text('').icon('ion-reply').previousTitleText(false);

      //重写alert（在手机浏览器会显示网址）
      window.alert = function(name) {
        var iframe = document.createElement("IFRAME");
        iframe.style.display = "none";
        iframe.setAttribute("src", 'data:text/plain,');
        document.documentElement.appendChild(iframe);
        window.frames[0].window.alert(name);
        iframe.parentNode.removeChild(iframe);
      }

    });
