<?php
##################################################
#
# Copyright (c) 2004-2016 OIC Group, Inc.
#
# This file is part of Exponent
#
# Exponent is free software; you can redistribute
# it and/or modify it under the terms of the GNU
# General Public License as published by the Free
# Software Foundation; either version 2 of the
# License, or (at your option) any later version.
#
# GPL: http://www.gnu.org/licenses/gpl.txt
#
##################################################

/**
 * This is the class expTagController
 *
 * @package Core
 * @subpackage Controllers
 */

class expTagController extends expController {
	/**
	 * name of module
	 * @return string
	 */
    static function displayname() { return gt("Tag Manager"); }

	/**
	 * description of module
	 * @return string
	 */
    static function description() { return gt("This module is used to manage tags"); }

	/**
	 * does module have sources available?
	 * @return bool
	 */
	static function hasSources() { return false; }

    /**
   	 * default view for individual item
   	 */
   	function show() {
//        global $db;

        expHistory::set('viewable', $this->params);
        $modelname = $this->basemodel_name;

        // figure out if we're looking this up by id or title
        $id = null;
        $tag = '';
        if (isset($this->params['id'])) {
            $id = $this->params['id'];
        } elseif (isset($this->params['title'])) {
            $id = $this->params['title'];
            $tag = $id;
        }

        $record = new $modelname($id);
        if (empty($tag) && !empty($record->title)) {
            $tag = $record->title;
        }

//        foreach ($db->selectColumn('content_expTags','content_type',null,null,true) as $contenttype) {
        foreach (expTag::selectAllTagContentType() as $contenttype) {
            $attatchedat = $record->findWhereAttachedTo($contenttype);
            if (!empty($attatchedat)) {
                $record->attachedcount = @$record->attachedcount + count($attatchedat);
                $record->attached[$contenttype] = $attatchedat;
            }
        }

        assign_to_template(array(
            'record'=>$record,
            'tag'=>$tag
        ));
    }

	/**
	 * manage tags
	 */
	function manage() {
//        global $db;

        expHistory::set('manageable', $this->params);
        $page = new expPaginator(array(
            'model'=>$this->basemodel_name,
            'where'=>$this->hasSources() ? $this->aggregateWhereClause() : null,
            'limit'=>10,
            'order'=>"title",
            'page'=>(isset($this->params['page']) ? $this->params['page'] : 1),
            'controller'=>$this->baseclassname,
            'action'=>$this->params['action'],
            'src'=>$this->hasSources() == true ? $this->loc->src : null,
            'columns'=>array(
                gt('ID#')=>'id',
                gt('Title')=>'title',
//                gt('Body')=>'body'
            ),
        ));

//        foreach ($db->selectColumn('content_expTags','content_type',null,null,true) as $contenttype) {
        foreach (expTag::selectAllTagContentType() as $contenttype) {
            foreach ($page->records as $key => $value) {
                $attatchedat = $page->records[$key]->findWhereAttachedTo($contenttype);
                if (!empty($attatchedat)) {
                    $page->records[$key]->attachedcount = @$page->records[$key]->attachedcount + count($attatchedat);
                    $page->records[$key]->attached[$contenttype] = $attatchedat;
                    //FIXME here is a hack to get the faq to be listed
                    if ($contenttype == 'faq' && !empty($page->records[$key]->attached[$contenttype][0]->question)) {
                        $page->records[$key]->attached[$contenttype][0]->title = $page->records[$key]->attached[$contenttype][0]->question;
                    }
                }
            }
        }

        assign_to_template(array(
            'page'=>$page
        ));
    }

    /**
   	 * manage tags
   	 */
   	function manage_module() {
        expHistory::set('manageable', $this->params);
//        $modulename = expModules::getControllerClassName($this->params['model']);
//        $module = new $modulename($this->params['src']);
        $module = expModules::getController($this->params['model'], $this->params['src']);
        $where = $module->aggregateWhereClause();
        if ($this->params['model'] == 'sermonseries') {
            $model = 'sermons';
        } else {
            $model = $this->params['model'];
        }
        $page = new expPaginator(array(
            'model'=>$model,
            'where'=>$where,
//            'order'=>'module,rank',
            'page'=>(isset($this->params['page']) ? $this->params['page'] : 1),
            'controller'=>$this->params['model'],
//            'action'=>$this->params['action'],
//            'src'=>$this->hasSources() == true ? $this->loc->src : null,
//            'columns'=>array(gt('ID#')=>'id',gt('Title')=>'title',gt('Body')=>'body'),
        ));
        if ($this->params['model'] == 'faq') {
            foreach ($page->records as $record) {
                $record->title = $record->question;
            }
        }

//        $page = new expPaginator(array(
//            'model'=>$this->basemodel_name,
//            'where'=>$this->hasSources() ? $this->aggregateWhereClause() : null,
//            'limit'=>50,
//            'order'=>"title",
//            'page'=>(isset($this->params['page']) ? $this->params['page'] : 1),
//            'controller'=>$this->baseclassname,
//            'action'=>$this->params['action'],
//            'src'=>$this->hasSources() == true ? $this->loc->src : null,
//            'columns'=>array(gt('ID#')=>'id',gt('Title')=>'title',gt('Body')=>'body'),
//        ));
//
//        foreach ($db->selectColumn('content_expTags','content_type',"content_type='".$this->params['model']."'",null,true) as $contenttype) {
//            foreach ($page->records as $key => $value) {
//                $attatchedat = $page->records[$key]->findWhereAttachedTo($contenttype);
//                if (!empty($attatchedat)) {
//                    $page->records[$key]->attachedcount = @$page->records[$key]->attachedcount + count($attatchedat);
//                    $page->records[$key]->attached[$contenttype] = $attatchedat;
//                    //FIXME here is a hack to get the faq to be listed
//                    if ($contenttype == 'faq' && !empty($page->records[$key]->attached[$contenttype][0]->question)) {
//                        $page->records[$key]->attached[$contenttype][0]->title = $page->records[$key]->attached[$contenttype][0]->question;
//                    }
//                }
//            }
//        }
//        $tags = $db->selectObjects('expTags','1','title ASC');
//        $taglist = '';
//        foreach ($tags as $tag) {
//            $taglist .= "'".$tag->title."',";
//        }
        $taglist = expTag::getAllTags();

        assign_to_template(array(
            'page'=>$page,
            'taglist'=>$taglist
        ));
    }

    /**
     * this method changes the tags of the selected items as requested
     */
    function change_tags() {
//        global $db;

        if (!empty($this->params['change_tag'])) {
            // build array of tags to add
            $addtags = explode(",", trim($this->params['addTag']));
   	        foreach($addtags as $key=>$tag) {
               if (!empty($tag)) {
                   $tag = strtolower(trim($tag));
                   $tag = str_replace(array('"', "'"), "", $tag); // strip double and single quotes
                   if (!empty($tag)) {
                       $addtags[$key] = $tag;
                       $expTag = new expTag($tag);
                       if (empty($expTag->id))  // create the new tag
                           $expTag->update(array('title' => $tag));
                   }
               }
   	        }
            // build array of tags to remove
            $removetags = explode(",", trim($this->params['removeTag']));
   	        foreach($removetags as $key=>$tag) {
               if (!empty($tag)) {
                   $tag = strtolower(trim($tag));
                   $tag = str_replace(array('"', "'"), "", $tag); // strip double and single quotes
                   if (!empty($tag))
                       $removetags[$key] = $tag;
               }
   	        }
            foreach ($this->params['change_tag'] as $item) {
                $params['expTag'] = array();
                $classname = $this->params['mod'];
                $object = new $classname($item);
                expTag::deleteTag($this->params['mod'], $object->id);
                $tags = $object->expTag;
                $object->expTag = array();
                foreach ($tags as $tag) {
                    if (!in_array($tag->title, $removetags)) {
                        $params['expTag'][] = $tag->id;  // add back any tags not being removed
                    }
                }
                foreach ($addtags as $tag) {
                    $expTag = new expTag($tag);
                    $params['expTag'][] = $expTag->id;  // add new tags
                }
                $object->update($params);
            }
        }
        expHistory::returnTo('viewable');
    }

}

?>
