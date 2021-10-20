// var refreshDuration = 10000;
// var refreshTimeout;
// var numPointsX;
// var numPointsY;
// var unitWidth;
// var unitHeight;
// var points;

// function onLoad()
// {
//     var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     svg.setAttribute('width',window.innerWidth);
//     svg.setAttribute('height',window.innerHeight);
//     document.querySelector('#bg').appendChild(svg);

//     var unitSize = (window.innerWidth+window.innerHeight)/20;
//     numPointsX = Math.ceil(window.innerWidth/unitSize)+1;
//     numPointsY = Math.ceil(window.innerHeight/unitSize)+1;
//     unitWidth = Math.ceil(window.innerWidth/(numPointsX-1));
//     unitHeight = Math.ceil(window.innerHeight/(numPointsY-1));

//     points = [];

//     for(var y = 0; y < numPointsY; y++) {
//         for(var x = 0; x < numPointsX; x++) {
//             points.push({x:unitWidth*x, y:unitHeight*y, originX:unitWidth*x, originY:unitHeight*y});
//         }
//     }

//     randomize();

//     for(var i = 0; i < points.length; i++) {
//         if(points[i].originX != unitWidth*(numPointsX-1) && points[i].originY != unitHeight*(numPointsY-1)) {
//             var topLeftX = points[i].x;
//             var topLeftY = points[i].y;
//             var topRightX = points[i+1].x;
//             var topRightY = points[i+1].y;
//             var bottomLeftX = points[i+numPointsX].x;
//             var bottomLeftY = points[i+numPointsX].y;
//             var bottomRightX = points[i+numPointsX+1].x;
//             var bottomRightY = points[i+numPointsX+1].y;

//             var rando = Math.floor(Math.random()*2);

//             for(var n = 0; n < 2; n++) {
//                 var polygon = document.createElementNS(svg.namespaceURI, 'polygon');

//                 if(rando==0) {
//                     if(n==0) {
//                         polygon.point1 = i;
//                         polygon.point2 = i+numPointsX;
//                         polygon.point3 = i+numPointsX+1;
//                         polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+bottomRightX+','+bottomRightY);
//                     } else if(n==1) {
//                         polygon.point1 = i;
//                         polygon.point2 = i+1;
//                         polygon.point3 = i+numPointsX+1;
//                         polygon.setAttribute('points',topLeftX+','+topLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
//                     }
//                 } else if(rando==1) {
//                     if(n==0) {
//                         polygon.point1 = i;
//                         polygon.point2 = i+numPointsX;
//                         polygon.point3 = i+1;
//                         polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY);
//                     } else if(n==1) {
//                         polygon.point1 = i+numPointsX;
//                         polygon.point2 = i+1;
//                         polygon.point3 = i+numPointsX+1;
//                         polygon.setAttribute('points',bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
//                     }
//                 }
//                 polygon.setAttribute('fill','rgba(0,0,0,'+(Math.random()/3)+')');
//                 var animate = document.createElementNS('http://www.w3.org/2000/svg','animate');
//                 animate.setAttribute('fill','freeze');
//                 animate.setAttribute('attributeName','points');
//                 animate.setAttribute('dur',refreshDuration+'ms');
//                 animate.setAttribute('calcMode','linear');
//                 polygon.appendChild(animate);
//                 svg.appendChild(polygon);
//             }
//         }
//     }

//     refresh();

// }

// function randomize() {
//     for(var i = 0; i < points.length; i++) {
//         if(points[i].originX != 0 && points[i].originX != unitWidth*(numPointsX-1)) {
//             points[i].x = points[i].originX + Math.random()*unitWidth-unitWidth/2;
//         }
//         if(points[i].originY != 0 && points[i].originY != unitHeight*(numPointsY-1)) {
//             points[i].y = points[i].originY + Math.random()*unitHeight-unitHeight/2;
//         }
//     }
// }

// function refresh() {
//     randomize();
//     for(var i = 0; i < document.querySelector('#bg svg').childNodes.length; i++) {
//         var polygon = document.querySelector('#bg svg').childNodes[i];
//         var animate = polygon.childNodes[0];
//         if(animate.getAttribute('to')) {
//             animate.setAttribute('from',animate.getAttribute('to'));
//         }
//         animate.setAttribute('to',points[polygon.point1].x+','+points[polygon.point1].y+' '+points[polygon.point2].x+','+points[polygon.point2].y+' '+points[polygon.point3].x+','+points[polygon.point3].y);
//         animate.beginElement();
//     }
//     refreshTimeout = setTimeout(function() {refresh();}, refreshDuration);
// }

// function onResize() {
//     document.querySelector('#bg svg').remove();
//     clearTimeout(refreshTimeout);
//     onLoad();
// }

// window.onload = onLoad;
// window.onresize = onResize;

const canv = document.querySelector('#bg');

const settings = {
	colors: ['#000000', '#1b1c1e', '#9b4848'],
	triangleSize: 130,
  bleed: 100,
  noise: 60,
  particleSettings: {
    count: 0
  }
};

const deer = {
    detectRetina: false,
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "bubble"
        },
        resize: false
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
          speed: 3
        }
      }
    },
    particles: {
      color: {
         value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true
        }
      },
      lineLinked: {
        blink: false,
        color: "random",
        consent: false,
        distance: 33,
        enable: true,
        opacity: 0.9,
        width: 0.5
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200
          }
        },
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: true,
        speed: 0.5,
        straight: false
      },
      number: {
        density: {
          enable: false,
          area: 2000
        },
        limit: 0,
        value: 200
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.5,
          speed: 2,
          sync: false
        },
        random: false,
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.2,
          speed: 40,
          sync: false
        },
        random: true,
        value: 2
      }
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: "#9b4848",
        lineWidth: 0.3
      },
      move: {
        radius: 6,
        type: "path"
      },
      inlineArrangement: "equidistant",
      scale: 0.45,
      type: "inline",
      url: "datage.svg",
    }
  };