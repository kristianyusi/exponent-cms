{*
 * Copyright (c) 2004-2011 OIC Group, Inc.
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
 
{css unique="portfolio" link="`$asset_path`css/portfolio.css"}

{/css}

<div class="module portfolio showall">
    {if $moduletitle != ""}<h1>{$moduletitle}</h1>{/if}
    {permissions}
        <div class="module-actions">
        {if $permissions.create == 1}
            {icon class="add" action=edit rank=1 title="Add to the top" text="Add a Portfolio Piece"}
        {/if}
        {if $permissions.edit == 1}
            {ddrerank items=$page->records model="portfolio" label="Portfolio Pieces"|gettext}
        {/if}
        </div>
    {/permissions}    
	{$page->links}
    {foreach from=$page->records item=record}
		<div class="item">
			<h2><a href="{link action=show title=$record->sef_url}" title="{$record->title|escape:"htmlall"}">{$record->title}</a></h2>

			{permissions}
				<div class="item-actions">
					{if $permissions.edit == 1}
						{icon action=edit record=$record title="Edit `$record->title`"}
					{/if}
					{if $permissions.delete == 1}
						{icon action=delete record=$record title="Delete `$record->title`"}
					{/if}                
				</div>
			{/permissions}
			
			{if $record->expFile[0]->id}
				<a href="{link action=show title=$record->sef_url}" title="{$record->title|escape:"htmlall"}" class="thumbnail">
					{img file_id=$record->expFile[0]->id alt=$record->expFile[0]->alt w=$config.thumbsize h=$config.thumbsize zc=1}
				</a>
			{/if}

			{if $record->expTag|@count>0}
				<div class="tag">
					Tags: 
					{foreach from=$record->expTag item=tag name=tags}
						<a href="{link action=showall_by_tags tag=$tag->sef_url}">{$tag->title}</a>
						{if $smarty.foreach.tags.last != 1},{/if}
					{/foreach}
				</div>
			{/if}
			<div class="bodycopy">
				{if $config.truncate}
					<p>{$record->body|summarize:"html":"para"}</p>
				{else}
					{$record->body}
				{/if}
			</div>
			{clear}
		</div>
        {permissions}
			<div class="module-actions">
				{if $permissions.create == 1}
					{icon class="add addhere" action=edit rank=`$text->rank+1` title="Add another here"|gettext  text="Add a portfolio piece here"}
				{/if}
			</div>
        {/permissions}
    {/foreach}   
	{$page->links}
</div>
