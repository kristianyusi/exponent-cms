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
 * @subpackage Models
 * @package Modules
 */

class news extends expRecord {
	//public $table = 'news';

    protected $attachable_item_types = array(
        'content_expFiles'=>'expFile',
        'content_expTags'=>'expTag'
    );

	public $validates = array(
		'presence_of'=>array(
			'title'=>array('message'=>'Title is a required field.'),
			'body'=>array('message'=>'Body is a required field.'),
		));

    public $supports_revisions = true;

//	public function __construct($params=null, $get_assoc=true, $get_attached=true) {
//	    parent::__construct($params, $get_assoc, $get_attached);
//
//	    if (!empty($this->publish)) {
//	        $this->publish_date = $this->publish;
//	    } elseif (!empty($this->edited_at)) {
//	        $this->publish_date = $this->edited_at;
//	    } elseif (!empty($this->created_at)) {
//	        $this->publish_date = $this->created_at;
//	    }
//
//	}

    function __construct($params = null, $get_assoc = true, $get_attached = true) {
        parent::__construct($params, $get_assoc, $get_attached);
        if (!empty($this->meta_fb))
            $this->meta_fb = expUnserialize($this->meta_fb);
        if (!empty($this->meta_fb['fbimage']) && !empty($this->meta_fb['fbimage'][0]))
            $this->meta_fb['fbimage'][0] = new expFile($this->meta_fb['fbimage'][0]);
    }

	public function beforeCreate() {
	    if (empty($this->publish) || $this->publish == 'on') {
	        $this->publish = time();
	    }
	}

    public function update($params = array()) {
        if (isset($params['expFile']['fbimage'][0]) && is_numeric($params['expFile']['fbimage'][0]))
            $params['fb']['fbimage'][0] = $params['expFile']['fbimage'][0];
        unset ($params['expFile']['fbimage']);
        if (isset($params['fb'])) {
            $params['meta_fb'] = serialize($params['fb']);
            unset ($params['fb']);
        }
        parent::update($params);
    }

	public function rerank($direction, $where='') {
        global $db;
        if (!empty($this->rank)) {
            // since the some news might be hiding due to unpublish date we need to find the next "showable"
            // news post and switch ranks with that.
            $next_prev = $direction == 'up' ? $this->rank - 1 : $this->rank +1;
            $gt_lt = $direction == 'up' ? '<=' : '>=';
            $where = "(unpublish=0 OR unpublish > ".time().") AND location_data='".$this->location_data."' AND rank".$gt_lt.$next_prev;
            $switch_with = $db->selectValue($this->table, 'rank', $where);
            $db->switchValues($this->table, 'rank', $this->rank, $switch_with, "location_data='".$this->location_data."'");
        }
    }

}

?>