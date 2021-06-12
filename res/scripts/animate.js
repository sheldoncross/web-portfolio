$(document).ready(function(){
    setTimeout(function(){
        $(".splash").hide();
        $(".page").show();
    }, 3000);
});


var tl = new TimelineMax();

tl.from(['#black-s1','#black-t1', '#black-e1', '#black-f1', '#black-a1', '#black-n1' ], 0.2, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
    .from('#black-c1', 0.08, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
    .from('#black-r1', 0.08, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
    .from('#black-o1', 0.08, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
    .from('#black-s2', 0.08, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
    .from('#black-s3', 0.08, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
    .from('#red-s1', 0.2, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
	.from('#red-t1', 0.25, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut}) 
  	.from('#red-e1', 0.1, {scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut})
  	.from('#red-f1', 0.15, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut, delay: 0.2})
  	.staggerFrom('#red-a1', 0.2, {scaleX: 0}, -0.1)
  	.staggerFrom('#red-n1', 0.2, {scaleX: 0}, -0.1)
    .from('#red-c1', 0.15, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
	.from('#red-r1', 0.15, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut}) 
  	.from('#red-o1', 0.1, {scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut})
  	.from('#red-s2', 0.05, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut, delay: 0.2})
  	.staggerFrom('#red-s3', 0.1, {scaleX: 0}, -0.1)  