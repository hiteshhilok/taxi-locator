// JavaScript Document
// PARAMETER
//latitude = latitude of the location
//longitude = longitude of the location
// type = 1 (minibus), 2(taxi)
//status = 1 (ideal),2 (In route to Pickup), 3(occupied),4(route to depost), 5(out of service)
//title = title will be display on the mouse over of the marker
var tMarkers= [ {"latitude":43.65654,"longitude":-79.90138,"type":2,"status":1,"title":"taxi in ideal mode" }
 ,{"latitude":43.91892,"longitude":-78.89231,"type":2,"status":2,"title":"taxi Inroute to pickup"}
,{"latitude":43.7583,"longitude":-78.89231,"type":2,"status":3,"title":"taxi occupied"}
 ,{"latitude":43.7583,"longitude":-79.89231,"type":2,"status":4,"title":"taxi in route to depost"}
 ,{"latitude":43.7583,"longitude":-78.09231,"type":2,"status":5,"title":"taxi out of service"}
 ,{"latitude":44.1583,"longitude":-79.19231,"type":1,"status":1,"title":"minibus in ideal mode"}
 ,{"latitude":44.1583,"longitude":-80.19231,"type":1,"status":2,"title":"minibus Inroute to pickup"}
 ,{"latitude":44.1583,"longitude":-81.19231,"type":1,"status":3,"title":"minibus occupied"}
 ,{"latitude":43.1583,"longitude":-79.19231,"type":1,"status":5,"title":"minibus out of service"}]
