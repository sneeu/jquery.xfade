/* http://sneeu.com/projects/xfade/ */
(function($){$.fn.xfade=function(options){options=jQuery.extend({duration:4000,transition:false,speed:1000},options);if(!options.transition){options.transition=function(from,to){from.fadeOut(options.speed);to.fadeIn(options.speed);};}
$(this).each(function(){var self=$(this);var first=self.children().eq(0);var current=first;self.children().slice(1).hide();function transition(){var next=current.next();if(next.size()==0){next=first;}
options.transition(current,next);current=next;setTimeout(transition,options.duration);}
setTimeout(transition,options.duration);});};})(jQuery);