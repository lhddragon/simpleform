'use strict';

angular.module('app.directives').factory('dataService', function($http) {
    var factory = {};
    // var serviceRoot = '/v2/prequalify';

    factory.prequalify = function(formData) {

        return $http({
            method: 'POST',
            url: 'https://api.kabbage.com/v2/prequalify',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                emailAddress: formData.emailAddress,
                businessName: formData.businessName,
                phoneNumber: formData.phoneNumber,
                yearStarted: formData.yearStarted,
                estimatedFICO: formData.estimatedFICO,
                estimatedAnnualRevenue: formData.estimatedAnnualRevenue,
                grossPercentageFromCards: formData.grossPercentageFromCards,
                typeOfBusiness: formData.typeOfBusiness,
                api_key: 'vauwg9sbqkrdnzdmr7eyk92t'
            }
        }).success(function(results) {
            console.log(results);
        });


    };

    return factory;
});