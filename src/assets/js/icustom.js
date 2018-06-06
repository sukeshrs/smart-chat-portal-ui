// function bind_draggable(target_class) {
// 	$( "." + target_class ).draggable();
// }

$('.create_topic_wrap').hide();
function changeShowStatus(ele)
{
	if ($(ele).attr('id') == 'create_bot_btn')
	{
		$(".choose_topic_wrap").show();
		$(".create_topic_wrap").hide();
	}
	else
	{
		$(".choose_topic_wrap").hide();
		$(".create_topic_wrap").show();
	}

	$('.create_fields_block').jScrollPane();
}

function render_topic_draggable(ele)
{
	var box_len = $(".generate_box").length;
	var dt_ttl = $(ele).attr('data-title');

	var drag_html = '<div data-id="' + parseInt(box_len+1) + '" class="draggable_ele generate_box" id="topic_box_' + parseInt(box_len+1) + '">\
						<a href="javascript:void(0);" class="toggle_btn topic-toggle" onclick="toggle_topic_popup(this);"><img src="../../assets/imgs/minus.png" /></a>\
						<span class="action-wrap">\
							<a href="javascript:void(0);"><i class="fas fa-pencil-alt"></i></a>\
							<span class="vert-hr"></span>\
							<a href="javascript:void(0);"><i class="fas fa-trash"></i></a>\
						</span>\
						<h4>' + dt_ttl + '</h4>\
						<button type="button" class="edit_btn">Edit Question</button>\
						<button type="button" class="edit_btn">Edit Anwser</button>\
					</div>\
					<div class="path-line" id="line' + parseInt(box_len+1) + '">\
					</div>';

	$(".drag_fields_block").append(drag_html);

	bind_draggable('draggable_ele');
}

// ************************************************* //
var boxCenterXOffset = 50;
var boxCenterYOffset = 50;
function bind_draggable()
{
	$(".draggable_ele").draggable({ delay: 0, distance: 0 }, {
	    drag: function(event, ui){
	    	var data_id = $(this).attr('data-id');
	    	var line_id = 'line' + data_id;

	    	$("#" + line_id).css('display', 'inline-block');

	        var x1 = $(".get_started_btn").offset().left + boxCenterXOffset;
	        var y1 = $(".get_started_btn").offset().top + boxCenterYOffset;

	        var x2 = $(this).offset().left + boxCenterXOffset;
	        var y2 = $(this).offset().top + boxCenterYOffset;

	        var hypotenuse = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	        var angle = Math.atan2((y1 - y2), (x1 - x2)) *  (180 / Math.PI);
	        if(angle >= 90 && angle < 180)
	        {
	            y1 = y1 - (y1 - y2);
	        }

	        if(angle > 0 && angle < 90)
	        {
	            x1 = x1 - (x1 - x2);
	            y1 = y1 - (y1 - y2);
	        }

	        if(angle <= 0 && angle > -90)
	        {
	            x1 = x1 - (x1 - x2);
	        }

	        $("#" + line_id).queue(function()
	        {
	            $(this).offset({top: y1, left: x1});
	            $(this).dequeue();
	        }).queue(function()
	        {
	            $(this).width(hypotenuse);
	            $(this).dequeue();
	        }).queue(function()
	        {
	            $(this).rotate(angle);
	            $(this).dequeue();
	        });
	    }
	});
}

function toggle_topic_popup(ele)
{
	var parent_div = $(ele).parents('.generate_box');
	var inner_img = $(ele).children('img');
	if (parent_div.hasClass('topic-min'))
	{
		parent_div.removeClass('topic-min');
		inner_img.attr('src', '../../assets/imgs/minus.png');
	}
	else
	{
		parent_div.addClass('topic-min');
		inner_img.attr('src', '../../assets/imgs/plus.png');
	}
}

function toggle_left(ele)
{
	var inner_img = $(ele).children('img');
	var parent_div = $(ele).parents('.toggle_btn_box');
	if ($(ele).attr('id') == 'togglebtntwo')
	{
		var parent_div = $(ele).siblings('.left-sidebar').find('.toggle_btn_box');
	}

	if (parent_div.hasClass('left-min'))
	{
		if ($(window).width() <= 588)
		{
			$("#togglebtntwo").css('display', 'inline-block');
		}

		parent_div.removeClass('left-min');
		$("#togglebtntwo").addClass('hide');

		$(".left-sidebar").removeClass("small-sidebar");
		$(".right-container").removeClass("wide-content");
	}
	else
	{
		if ($(window).width() <= 588)
		{
			$("#togglebtntwo").css('display', 'none');
		}

		parent_div.addClass('left-min');
		$("#togglebtntwo").removeClass('hide');

		$(".left-sidebar").addClass("small-sidebar");
		$(".right-container").addClass("wide-content");
	}
}

function toggle_chat_area(ele)
{
	var inner_img = $(ele).children('img');
	var parent_div = $(ele).parents('.chat_box');
	var draggable_div_wrap = parent_div.children('.drag_fields_block');

	if (parent_div.hasClass('chat_small'))
	{
		parent_div.removeClass('chat_small');
		inner_img.attr('src', '../../assets/imgs/minus.png');

		draggable_div_wrap.removeClass('hide');
		$(".drag_fields_block_duplicate").addClass('hide');
	}
	else
	{
		parent_div.addClass('chat_small');
		inner_img.attr('src', '../../assets/imgs/plus.png');

		draggable_div_wrap.addClass('hide');
		$(".drag_fields_block_duplicate").removeClass('hide');
	}
}