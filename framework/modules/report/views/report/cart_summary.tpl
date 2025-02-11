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

<div class="module report dashboard">
    {exp_include file='menu.tpl'}

	<div class="rightcol">
	    <div id="dashboard-tabs" class="yui-navset exp-skin-tabview hide">
            <ul class="yui-nav">
                <li class="selected"><a href="#tab1"><em>{'New Orders'|gettext}</em></a></li>
                <!--li><a href="#tab2"><em>Top Selling Items</em></a></li>
                <li><a href="#tab3"><em>Most Viewed</em></a></li>
                <li><a href="#tab4"><em>Customers</em></a></li-->
            </ul>
            <div class="yui-content">
                <div id="tab1" class="exp-ecom-table">
                    {control type="dropdown" name="filter" label="Range"|gettext|cat:": " items="Last 24 hours, Last 48 hours, Jurassic Period and prior"|gettxtlist values="Last 24 hours, Last 48 hours, Jurassic Period and prior"}
                    <table border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr class="even">
                                <td>{'Carts Started (visits)'|gettext}
                                </td>
                                <td>{'Sessions Started (visits)'|gettext}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="dashboard-totals">
                        <strong>107 Items</strong>
                        <strong>$1,208.22</strong>
                    </div>
                </div>
                <div id="tab2">
                </div>
                <div id="tab3">
                </div>
                <div id="tab4">
                </div>
                <div id="tab5">
                </div>
            </div>
	    </div>
	    {*<div class="loadingdiv">{'Loading Dashboard'|gettext}</div>*}
        {loading title='Loading Dashboard'|gettext}
    </div>
    {clear}
</div>

{script unique="editform" yui3mods="exptabs"}
{literal}
    EXPONENT.YUI3_CONFIG.modules.exptabs = {
        fullpath: EXPONENT.JS_RELATIVE+'exp-tabs.js',
        requires: ['history','tabview','event-custom']
    };

	YUI(EXPONENT.YUI3_CONFIG).use('*', function(Y) {
        Y.expTabs({srcNode: '#dashboard-tabs'});
		Y.one('#dashboard-tabs').removeClass('hide');
		Y.one('.loadingdiv').remove();
    });
{/literal}
{/script}

