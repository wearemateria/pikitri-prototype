'use strict';

angular.module('prototypeApp')
	.controller('MainCtrl', function ($scope, $http, $sce) {
		$scope.modal = false;

		$scope.config = {
					sources: [
						{src: $sce.trustAsResourceUrl('assets/video.mp4'), type: 'video/mp4'}
					],
					theme: {
						url: "styles/themes/default/videogular.css"
					},
					autoPlay: true
				};

		$scope.toggleVideo = function () {
			if ($scope.modal === true) {
				$('#video').children().remove();
				$scope.modal = false;
			}
			else {
				$scope.modal = true;

				var instance = $('#video').vide({mp4: 'assets/video.mp4'},
						{
							muted: false,
							posterType: 'none'
						}
					);
			}
		};	
	});
