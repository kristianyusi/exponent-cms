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

<div class="module company related">
	<ul>
        {foreach from=$items item=company name=companies}
		<li class="listing">
			<h3><a href="{link controller=company action=show id=$company->id}">{$company->title}</a></h3>
			<p>{$company->body|truncate:150:"...":false}</p>
		</li>
        {/foreach}
	</ul>
</div>
