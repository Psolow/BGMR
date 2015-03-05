/*global define:false, Modernizr:false */
define(['jquery'], function ($) {
    'use strict';
     $.getJSON('resources/data/vehicles.json', function(data) {
        var output="<ul>";
        for (var i in data.vehicles) {
            var vehicleObject = data.vehicles[i];
            output+="<li>" + vehicleObject.Name + "</li>";
            for (var a in vehicleObject.Armorment){
                output+="<li>" + vehicleObject.Armorment[a] + "</li>";
            };
            for (var b in vehicleObject.Ammo){
                var AmmoObject = vehicleObject.Ammo[b];
                output+="<li>" + AmmoObject.Name + "</li>";
                output+="<li>Hit 10CM: " + AmmoObject.Hit[0] + "</li>";
            }
            
        }

        output+="</ul>";
        document.getElementById("placeholder").innerHTML=output;
  });
});