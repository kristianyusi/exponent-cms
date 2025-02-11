{*
 * Copyright (c) 2004-2016 OIC Group, Inc.
 *
 * This file is part of Exponent
 *
 * Exponent is free software; you can redistribute
 * it and/or modify it under the terms of the GNU
 * General Public License as published by the Free
 * Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * GPL: http://www.gnu.org/licenses/gpl.txt
 *
 *}

<div id="googlepullControl" class="control">
    <div class="form_header">
    	<div class="info-header">
    		<div class="related-actions">
    		    {help text="Get Help with"|gettext|cat:" "|cat:("Google Calendar Pull Settings"|gettext) module="google-pull"}
    		</div>
            <h2>{"Google Calendar Pull Settings"|gettext}</h2>
    	</div>
    </div>
    <h3>{"Add External Google Calendar Feeds"|gettext}</h3>
    {*{control type="text" id="googlefeedmaker" name="googlefeedmaker" label="Google Calendar XML Feed Link/URL"|gettext}*}
    {control type=url id="googlefeedmaker" name="googlefeedmaker" label="Google Calendar XML Feed Link/URL"|gettext}
    {if $smarty.const.BTN_SIZE == 'large'}
        {$btn_size = 'btn-lg'}
        {$icon_size = 'fa-lg'}
    {elseif $smarty.const.BTN_SIZE == 'small'}
        {$btn_size = 'btn-sm'}
        {$icon_size = ''}
    {elseif $smarty.const.BTN_SIZE == 'extrasmall'}
        {$btn_size = 'btn-xs'}
        {$icon_size = ''}
    {else}
        {$btn_size = ''}
        {$icon_size = 'fa-lg'}
    {/if}
    <a id="addtogooglelist" class="btn btn-success {$btn_size}" href="#"><i class="fa fa-plus-circle {$icon_size}"></i> {'Add to list'|gettext}</a>{br}{br}
    <h4>{"Current Google Calendar Feeds"|gettext}</h4>
    <ul id="googlepull-feeds">
        {foreach from=$config.pull_gcal item=feed name=feed}
            {*{if $feed!=""}<li>{control type="hidden" name="pull_google[]" value=$feed}{$feed} <a class="delete removegoogle" href="#">{"Remove"|gettext}</a></li>{/if}*}
            {if $feed!=""}
                <li>
                    {control type="hidden" name="pull_gcal[]" value=$feed}{control type=color label=$feed name="pull_gcal_color[]" id="pull_gcal_color`$smarty.foreach.feed.index`" value=$config.pull_gcal_color[$smarty.foreach.feed.index] hide=1 flip=1}
                    <a class="removegoogle btn {$btn_size} btn-danger" href="#"><i class="fa fa-times-circle {$icon_size}"></i> {"Remove"|gettext}</a>
                </li>
            {/if}
        {/foreach}
        <li id="nogooglefeeds">{'You don\'t have any Google Calendar feeds configured'|gettext}</li>
    </ul>

    {script unique="googlefeedpicker3" yui3mods="node,io"}
    {literal}
    YUI(EXPONENT.YUI3_CONFIG).use('*', function(Y) {
        if (Y.one('#googlepull-feeds').get('children').size() > 1) Y.one('#nogooglefeeds').setStyle('display','none');
        Y.one('#addtogooglelist').on('click', function(e){
            e.halt();
            var feedtoadd = Y.one("#googlefeedmaker").get('value');
            if (feedtoadd == '') return;
            Y.one('#nogooglefeeds').setStyle('display', 'none');
            var newli = document.createElement('li');

            var newLabel = document.createElement('span');
            newLabel.innerHTML = '<input type="hidden" name="pull_gcal[]" value="'+feedtoadd+'" />';
            newLabel.innerHTML = newLabel.innerHTML + '<input type="color" name="pull_gcal_color[]" value="#000" />&#160;';
            newLabel.innerHTML = newLabel.innerHTML + '<label style="display:inline-block">'+feedtoadd+'</label>&#160;';

            var newRemove = document.createElement('a');
            newRemove.setAttribute('href','#');
            newRemove.className = "removegoogle btn {/literal}{$btn_size}{literal} btn-danger";
            newRemove.innerHTML = " {/literal}<i class='fa fa-times-circle {$icon_size}'></i> {'Remove'|gettext}{literal}";

            newli.appendChild(newLabel);
            newli.appendChild(newRemove);
            var list = Y.one('#googlepull-feeds');
            list.appendChild(newli);

            $("input[type=color]").spectrum();

            feedtoadd = '';
        });

        var remClick = function(e){
           if (confirm("{/literal}{'Are you sure you want to delete this url?'|gettext}{literal}")) {
                e.halt();
                var lItem = e.target.ancestor('li');
                var list = Y.one('#googlepull-feeds');
                list.removeChild(lItem);
                if (list.get('children').size() == 1) Y.one('#nogooglefeeds').setStyle('display', '');
           } else return false;
        };

        Y.one('#config').delegate('click',remClick,'a.removegoogle');
    });
    {/literal}
    {/script}
</div>
