
Dancer = function(top, left, timeBetweenSteps){

 this.$node = $('<span class="dancer"></span>');
 this.top = top;
 this.left = left;
 this.timeBetweenSteps = timeBetweenSteps;

};
Dancer.prototype.step = function() {

 var currentThis = this;
 setTimeout(function() {currentThis.step.call(currentThis);}, this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left) {

 var styleSettings = {
   top: top,
   left: left
 };
 this.$node.css(styleSettings);
};
Dancer.prototype.lineUp = function() {
 this.$node.css({'left': $('body').width()/2});
};
