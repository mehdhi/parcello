angular.module('starter.services', [])

.factory('Orders', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var orders = [{
    id: 154564,
    name: 'Samsung Galaxy Note 5 - Kapruka',
    description: 'Samsung Galaxy Note 5 shipping from Canada',
    face: 'img/dispatched.png',
    status: 'dispatched',
    deliveryDate: '20-02-2016',
    deliveryAddress: 'No. 19 Lily Avenue, Colombo 06',
    senderInfo: 'Kapruka Pvt Ltd, SL, 0115326565'
    
  }, {
   id: 155415,
    name: 'SAMSUNG 500GB SSD PRO',
    description: 'Amazon SAMSUNG Evo ProIII SSD 500GB',
    face: 'img/dispatched.png',
    status: 'dispatched',
    deliveryDate: '26-02-2016',
    deliveryAddress: 'No. 19 Lily Avenue, Colombo 06',
    senderInfo: 'Kapruka Pvt Ltd, SL, 0115326565'
  }, {
   id: 157895,
    name: 'Screen Guard - Ali Express',
    description: '6 inch screen guard',
    face: 'img/dispatched.png',
    status: 'dispatched',
    deliveryDate: '22-02-2016',
    deliveryAddress: 'No. 19 Lily Avenue, Colombo 06',
    senderInfo: 'Kapruka Pvt Ltd, SL, 0115326565'
  }, {
    id: 154648,
    name: 'Apple ipod nano',
    description: 'Apple iPod Nano 6th Generation shipped from California',
    face: 'img/delivered.png',
    status: 'delivered',
    deliveryDate: '02-02-2016',
    deliveryAddress: 'No. 19 Lily Avenue, Colombo 06',
    senderInfo: 'Kapruka Pvt Ltd, SL, 0115326565'
  }, {
    id: 154554,
    name: 'Galaxy Tab Case - Kapruka',
    description: 'Samsung Galaxy Note 10 Case shipping from Hong Kong',
    face: 'img/pending.png',
    status: 'pending',
    deliveryDate: '03-03-2016',
    deliveryAddress: 'No. 19 Lily Avenue, Colombo 06',
    senderInfo: 'Kapruka Pvt Ltd, SL, 0115326565'
  }];

  return {
    all: function() {
      return orders;
    },
    remove: function(order) {
      orders.splice(orders.indexOf(order), 1);
    },
    get: function(orderId) {
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].id === parseInt(orderId)) {
          return orders[i];
        }
      }
      return null;
    }
  };
});
