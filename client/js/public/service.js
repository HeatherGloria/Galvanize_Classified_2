(function() {

  angular.module('app')
    .service('service',  service)

    service.$inject = ['$http']
    function service($http) {
      const sv = this
      sv.oneAd = oneAd
      sv.newAd = newAd
      sv.updateAd = updateAd
      sv.deleteAd = deleteAd

      function oneAd(id) {
        return $http.get(id ? `/api/classifieds/${id}` : '/api/classifieds').then((classifieds) => {
          return classifieds.data
        })
      }

      function newAd(post) {
        return $http.post('/api/classifieds', post).then((classifieds) => {
          return classifieds.data
        })
      }

      function updateAd(id, classified) {
        return $http.patch(`/api/classifieds/${id}`, classified).then((classifieds) => {
          return classifieds.data
        })
      }

      function deleteAd(id) {
        return $http.delete(`/api/classifieds/${id}`).then((classifieds) => {
          return classifieds.data
        })
      }
  }

}())
