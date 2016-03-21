describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should return the food item', function() {
    var fakeList = [{
      name: 'Test',
      favoriteFood: 'Pizza'
    }, {
      name: 'Test 2',
      favoriteFood: "Burgers"
    }, {
      name: 'Test 3',
      favoriteFood: "Salad"
    }];
    var results = $filter('favoriteFood')(fakeList, "Burgers");

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Test 2');
  });
});
