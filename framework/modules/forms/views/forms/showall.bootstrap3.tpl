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

{if !$error}
    {*{css unique="data-view" corecss="button"}*}

    {*{/css}*}
    {css unique="manage-groups" corecss="datatables-tools"}

    {/css}

    <div class="module forms showall">
        <{$config.item_level|default:'h2'}>{$title}</{$config.item_level|default:'h2'}>
        {if $description != ""}
            {$description}
        {/if}
        {permissions}
            <div class="module-actions">
                {if $permissions.create}
                    {icon class=add action=enterdata forms_id=$f->id text='Add record'|gettext}
                    &#160;&#160;|&#160;&#160;
                {/if}
                {icon class="downloadfile" action=export_csv id=$f->id text="Export as CSV"|gettext}
                {export_pdf_link landscapepdf=1 limit=999 prepend='&#160;&#160;|&#160;&#160;'}
                {if $permissions.manage}
                    &#160;&#160;|&#160;&#160;
                    {icon class=configure action=design_form id=$f->id text="Design Form"|gettext}
                    &#160;&#160;|&#160;&#160;
                    {icon action=manage text="Manage Forms"|gettext}
                {/if}
                {if $permissions.delete}
                    &#160;&#160;|&#160;&#160;
                    {icon class=delete action=delete_records forms_id=$f->id text='Purge records'|gettext onclick="return confirm('"|cat:("Are you sure you want to delete all form records?"|gettext)|cat:"');"}
                {/if}
                {if $permissions.manage}
                    {if !empty($filtered)}
                        {br}<span style="background-color: yellow; font-weight: bold;margin-bottom: 5px;padding: 4px;border: black 1px solid;">{'Records Filtered'|gettext}: '{$filtered}'</span>
                    {/if}
                {/if}
            </div>
            {br}
            {/permissions}
        {*{$page->links}*}
        <div>
            <table id="forms-showall" border="0" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        {*{$page->header_columns}*}
                        {foreach  $page->columns as $name=>$caption}
                            <th{if $caption@first} data-class="expand"{elseif $caption@iteration < 4} data-hide="phone"{elseif $caption@iteration > 7} data-hide="always"{else} data-hide="phone,tablet"{/if}>{$caption}</th>
                        {/foreach}
                        <div class="item-actions">
                            <th>{'Actions'|gettext}</th>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    {foreach $page->records as $ukey=>$fields}
                        <tr>
                            {foreach $page->columns as $field=>$caption}
                                <td>
                                    {if $field|lower == 'email'}
                                        <a href="mailto:{$fields.$field}">
                                    {elseif $caption@iteration == 1 && !$config.hide_view}
                                        <a href={link action=show forms_id=$f->id id=$fields.id}>
                                    {/if}
                                    {if $field|lower == 'image'}
                                        {$matches = array()}
                                        {$tmp = preg_match_all('~<a(.*?)href="([^"]+)"(.*?)>~', $fields.$field, $matches)}
                                        {$filename1 = $matches.2.0}
                                        {$filename2 = str_replace(URL_BASE, '/', $filename1)}
                                        {$base = str_replace(PATH_RELATIVE, '', BASE)}
                                        {$fileinfo = expFile::getImageInfo($base|cat:$filename2)}
                                        {if $fileinfo.is_image == 1}
                                            {img src=$filename1 w=64}
                                        {else}
                                            {$fields.$field}
                                        {/if}
                                    {else}
                                        {$fields.$field}
                                    {/if}
                                    {if $field|lower == 'email' || ($caption@iteration == 1 && !$config.hide_view)}
                                        </a>
                                    {/if}
                                </td>
                            {/foreach}
                            <div class="item-actions">
                                <td>
                                    {if !$config.hide_view || !$permissions.manage}
                                        {icon img="view.png" action=show forms_id=$f->id id=$fields.id title='View all data fields for this record'|gettext}
                                    {/if}
                                    {if $permissions.edit}
                                        {icon img="edit.png" action=enterdata forms_id=$f->id id=$fields.id title='Edit this record'|gettext}
                                    {/if}
                                    {if $permissions.delete}
                                        {icon img="delete.png" action=delete forms_id=$f->id id=$fields.id title='Delete this record'|gettext}
                                    {/if}
                                </td>
                            </div>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
        {*{$page->links}*}
        {*<a class="{button_style}" href="{$backlink}">{'Back'|gettext}</a>*}
        {if empty($f) && $permissions.configure}
            {permissions}
                <div class="module-actions">
                    <div class="class="alert alert-warning" style="text-align:center">
                        {'You MUST assign a form to use this module!'|gettext} {icon action="manage" select=true}</div>
                </div>
            {/permissions}
        {/if}
    </div>
{/if}

{script unique="form-showall" jquery='jquery.dataTables,dataTables.tableTools,dataTables.bootstrap3,datatables.responsive'}
{literal}
    $(document).ready(function() {
        var responsiveHelper;
        var breakpointDefinition = {
            tablet: 1024,
            phone : 480
        };
        var tableContainer = $('#forms-showall');

        var table = tableContainer.DataTable({
            columnDefs: [
                { searchable: false, targets: [ -1 ] },
                { orderable: false, targets: [ -1 ] },
            ],
            autoWidth: false,
            //scrollX: true,
            preDrawCallback: function () {
                // Initialize the responsive datatables helper once.
                if (!responsiveHelper) {
                    responsiveHelper = new ResponsiveDatatablesHelper(tableContainer, breakpointDefinition);
                }
            },
            rowCallback: function (nRow) {
                responsiveHelper.createExpandIcon(nRow);
            },
            drawCallback: function (oSettings) {
                responsiveHelper.respond();
            }
        });
        var tt = new $.fn.dataTable.TableTools( table, { sSwfPath: EXPONENT.JQUERY_RELATIVE+"addons/swf/copy_csv_xls_pdf.swf" } );
        $( tt.fnContainer() ).insertBefore('div.dataTables_wrapper');
    } );
{/literal}
{/script}
