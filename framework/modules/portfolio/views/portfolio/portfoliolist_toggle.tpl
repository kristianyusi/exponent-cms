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

    {$myloc=serialize($__loc)}
    {pagelinks paginate=$page top=1}
    {$cat="bad"}
    {foreach from=$page->records item=item}
        {if $cat !== $item->expCat[0]->id && $config.usecategories}
            <h2 class="category">{if $item->expCat[0]->title!= ""}{$item->expCat[0]->title}{elseif $config.uncat!=''}{$config.uncat}{else}{'Uncategorized'|gettext}{/if}</h2>
        {/if}
        <div class="item">
            {permissions}
                <div class="item-actions">
                    {if $permissions.edit || ($permissions.create && $item->poster == $user->id)}
                        {if $myloc != $item->location_data}
                            {if $permissions.manage}
                                {icon action=merge id=$item->id title="Merge Aggregated Content"|gettext}
                            {else}
                                {icon img='arrow_merge.png' title="Merged Content"|gettext}
                            {/if}
                        {/if}
                        {icon action=edit record=$item title="Edit `$item->title`"}
                        {icon action=copy record=$item title="Copy `$item->title`"}
                    {/if}
                    {if $permissions.delete || ($permissions.create && $item->poster == $user->id)}
                        {icon action=delete record=$item title="Delete `$item->title`"}
                    {/if}
                </div>
            {/permissions}
            {tags_assigned record=$item}
            {if $config.show_summary}
                {$summary = $item->body|summarize:"html":"parahtml"}
            {else}
                {$summary = ''}
            {/if}
            {toggle unique="portfolio`$item->id`" title=$item->title|default:'Click to Hide/View'|gettext collapsed=$config.show_collapsed summary=$config.summary_height summary=$summary}
                {*<h3{if $config.usecategories} class="{$cat->color}"{/if}><a href="{link action=show title=$item->sef_url}" title="{$item->body|summarize:"html":"para"}">{$item->title}</a></h3>*}
                <div class="bodycopy">
                    {if $config.ffloat != "Below"}
                        {filedisplayer view="`$config.filedisplay`" files=$item->expFile record=$item is_listing=1}
                    {/if}
                    {$link = '<a href="'|cat:makeLink([controller=>portfolio, action=>show, title=>$item->sef_url])|cat:'"><em>'|cat:gt('(read more)')|cat:'</em></a>'}
                    {if $config.usebody==1}
                        {*<p>{$item->body|summarize:"html":"paralinks"}</p>*}
                        <p>{$item->body|summarize:"html":"parahtml":$link}</p>
                    {elseif $config.usebody==3}
                        {$item->body|summarize:"html":"parapaged":$link}
                    {elseif $config.usebody==2}
                    {else}
                        {$item->body}
                    {/if}
                    {if $config.ffloat == "Below"}
                        {filedisplayer view="`$config.filedisplay`" files=$item->expFile record=$item is_listing=1}
                    {/if}
                </div>
                {clear}
            {/toggle}
            {permissions}
                {if $permissions.create}
                    <div class="module-actions">
                        {icon class="add" action=edit rank=$item->rank+1 title="Add another here"|gettext  text="Add a portfolio piece here"|gettext}
                    </div>
                {/if}
            {/permissions}
        </div>
        {$cat=$item->expCat[0]->id}
    {/foreach}
    {clear}
    {pagelinks paginate=$page bottom=1}
