/*
 * Copyright (c) 2009, John Sutherland
 * All rights reserved.
 *
 * <http://sneeu.com/projects/xfade/>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of jquery.xfade nor the names of its contributors
 *       may be used to endorse or promote products derived from this software
 *       without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY John Sutherland ''AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL John Sutherland BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function ($) {
	$.fn.xfade = function (options) {
		options = jQuery.extend({
			duration: 4000,
			transition: false,
			speed: 1000
		}, options);

		if (!options.transition) {
			options.transition = function (from, to) {
				from.fadeOut(options.speed);
				to.fadeIn(options.speed);
			};
		}

		$(this).each(function () {
			var self = $(this);
			var first = self.children().eq(0);
			var current = first;

			self.children().slice(1).hide();

			function transition() {
				var next = current.next();
				if (next.size() == 0) {
					next = first;
				}

				options.transition(current, next);
				current = next;

				setTimeout(transition, options.duration);
			}

			setTimeout(transition, options.duration);
		});
	};
})(jQuery);
