var GmapsCubicBezier = function(lat1, long1, lat2, long2, lat3, long3, lat4, long4, resolution, map){
  
      var points = [];
  
      for(it = 0; it <= 1; it += resolution) {
          points.push(
            this.getBezier({x:lat1, y:long1},{x:lat2, y:long2},
                            {x:lat3, y:long3},{x:lat4, y:long4}, it));
      }
  
      for(var i = 0; i < points.length - 1; i++) {
              var Line = new google.maps.Polyline({
                  path: [new google.maps.LatLng(points[i].x, points[i].y), new google.maps.LatLng(points[i+1].x, points[i+1].y)],
                  geodesic: true,
                  strokeOpacity: 0,
                  strokeColor: 'yellow',
                  icons: [{
                          icon: {
                          path: 'M 0,-2 0,2',
                          strokeColor: 'white',
                          strokeOpacity: 1,
                          strokeWeight: 4
                      },
                      repeat: '10px'
                  },{
                          icon: {
                          path: 'M -1,-2 -1,2',
                          strokeColor: 'white',
                          strokeOpacity: 1,
                          strokeWeight: 2
                      },
                      repeat: '10px'
                  }]
              }); 
  
              Line.setMap(map);   
      }
  };
  
  
  GmapsCubicBezier.prototype = {
  
      B1 : function (t) { return t*t*t; },
      B2 : function (t) { return 3*t*t*(1-t); },
      B3 : function (t) { return 3*t*(1-t)*(1-t); },
      B4 : function (t) { return (1-t)*(1-t)*(1-t); },
      getBezier : function (C1,C2, percent) {
          var pos = {};
          pos.x = C1.x*this.B1(percent) + (C1.x+C2.x)/2*this.B3(percent) + C2.x*this.B2(percent);
          pos.y = C1.y*this.B1(percent) + (C1.y+C2.y)*this.B3(percent) + C2.y*this.B2(percent);
          return pos;
      }
  };