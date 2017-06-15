(function() {
  'use strict'
  angular
    .module('app')
    .component('public', {
      controller: controller,
      templateUrl: './js/public/classifieds.html'
    })

  controller.$inject = ['service', '$state']

  function controller(service, $state) {
    const vm = this
    vm.$onInit = onInit
    vm.allAds = allAds
    vm.createAd = createAd
    vm.edit = edit
    vm.updateAd = updateAd
    vm.deleteAd = deleteAd

    function onInit() {
      allAds()
    }

    function allAds() {
      service.oneAd().then(classifieds => {
        vm.classifieds = classifieds
      })
    }

    function createAd() {
      service.newAd(vm.post).then(post => {
      })
      delete vm.post
      $state.reload()
    }

    function edit() {
      vm.showAd = vm.showAd ? !vm.showAd : true
    }

    function updateAd(post) {
      service.updateAd(post.id, vm.editAd).then(item => {
        })
        $state.reload()
    }

    function deleteAd(post) {
      service.deleteAd(post.id).then(classifieds => {
        $state.reload()
      })

    }
  }
}())
