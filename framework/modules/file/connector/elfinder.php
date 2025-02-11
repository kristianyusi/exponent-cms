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
 * Implements elFinder as the 'connector' referenced by 'url' param in elfinder.tpl
 */

require_once("../../../../exponent.php");

if (DEVELOPMENT) {
    set_time_limit(0);
} // just in case it too long, not recommended for production

ini_set('max_file_uploads', FM_SIMLIMIT); // allow uploading up to FM_SIMLIMIT files at once

// needed for case insensitive search to work, due to broken UTF-8 support in PHP
//ini_set('mbstring.internal_encoding', 'UTF-8');
//ini_set('mbstring.func_overload', 2);

include BASE . 'external/elFinder/php/elFinderConnector.class.php';
include BASE . 'external/elFinder/php/elFinder.class.php';
include BASE . 'framework/modules/file/connector/elFinderExponent.class.php'; // our custom elFinder object
include BASE . 'external/elFinder/php/elFinderVolumeDriver.class.php';
include BASE . 'external/elFinder/php/elFinderVolumeLocalFileSystem.class.php';
//include BASE . 'external/elFinder/php/elFinderVolumeMySQL.class.php';
//include BASE . 'external/elFinder/php/elFinderVolumeFTP.class.php';
//include BASE . 'external/elFinder/php/elFinderVolumeS3.class.php';
include BASE . 'framework/modules/file/connector/elFinderVolumeExponent.class.php'; // our custom elFInder volume driver

define('ELFINDER_IMG_PARENT_URL', PATH_RELATIVE . 'external/elFinder/');

/**
 * # Dropbox volume driver need "dropbox-php's Dropbox" and "PHP OAuth extension" or "PEAR's HTTP_OAUTH package"
 * * dropbox-php: http://www.dropbox-php.com/
 * * PHP OAuth extension: http://pecl.php.net/package/oauth
 * * PEAR's HTTP_OAUTH package: http://pear.php.net/package/http_oauth
 *  * HTTP_OAUTH package require HTTP_Request2 and Net_URL2
 */
// Required for Dropbox.com connector support
//include BASE . 'external/elFinder/php/elFinderVolumeDropbox.class.php';

// Dropbox driver need next two settings. You can get at https://www.dropbox.com/developers
// define('ELFINDER_DROPBOX_CONSUMERKEY',    '');
// define('ELFINDER_DROPBOX_CONSUMERSECRET', '');
// define('ELFINDER_DROPBOX_META_CACHE_PATH',''); // optional for `options['metaCachePath']`

function debug($o)
{
    echo '<pre>';
    print_r($o);
}

/**
 * example logger function
 * Demonstrate how to work with elFinder event api
 *
 * @param  string   $cmd      command name
 * @param  array    $result   command result
 * @param  array    $args     command arguments from client
 * @param  elFinder $elfinder elFinder instance
 *
 * @return void|true
 * @author Troex Nevelin
 **/
function logger($cmd, $result, $args, $elfinder)
{
    if (DEVELOPMENT && LOGGER) {
        $log = sprintf("[%s] %s: %s \n", date('r'), strtoupper($cmd), var_export($result, true));
        $logfile = BASE . 'tmp/elfinder.log';
        $dir = dirname($logfile);
        if (!is_dir($dir) && !mkdir($dir,DIR_DEFAULT_MODE_STR)) {
            return;
        }
        if (($fp = fopen($logfile, 'a'))) {
            fwrite($fp, $log);
            fclose($fp);
        }
        return;

//        // alternative logging method
//        foreach ($result as $key => $value) {
//            if (empty($value)) {
//                continue;
//            }
//            $data = array();
//            if (in_array($key, array('error', 'warning'))) {
//                array_push($data, implode(' ', $value));
//            } else {
//                if (is_array($value)) { // changes made to files
//                    foreach ($value as $file) {
//                        $filepath = (isset($file['realpath']) ? $file['realpath'] : $elfinder->realpath($file['hash']));
//                        array_push($data, $filepath);
//                    }
//                } else { // other value (ex. header)
//                    array_push($data, $value);
//                }
//            }
//            $log .= sprintf(' %s(%s)', $key, implode(', ', $data));
//        }
//        $log .= "\n";
//
//        $logfile = BASE . 'tmp/elfinder.log';
//        $dir = dirname($logfile);
//        if (!is_dir($dir) && !mkdir($dir)) {
//            return;
//        }
//        if (($fp = fopen($logfile, 'a'))) {
//            fwrite($fp, $log);
//            fclose($fp);
//        }
    }
}

/**
 * example logger class
 * Demonstrate how to work with elFinder event api.
 *
 * @package elFinder
 * @author  Dmitry (dio) Levashov
 **/
class elFinderSimpleLogger
{

    /**
     * Log file path
     *
     * @var string
     **/
    protected $file = '';

    /**
     * constructor
     *
     * @param $path
     *
     * @return \elFinderSimpleLogger
     * @author Dmitry (dio) Levashov
     */
    public function __construct($path)
    {
        $this->file = $path;
        $dir = dirname($path);
        if (!is_dir($dir)) {
            mkdir($dir,DIR_DEFAULT_MODE_STR);
        }
    }

    /**
     * Create log record
     *
     * @param  string   $cmd      command name
     * @param  array    $result   command result
     * @param  array    $args     command arguments from client
     * @param  elFinder $elfinder elFinder instance
     *
     * @return void|true
     * @author Dmitry (dio) Levashov
     **/
    public function log($cmd, $result, $args, $elfinder)
    {
        if (DEVELOPMENT && LOGGER) {
            $log = $cmd . ' [' . date('d.m H:s') . "]\n";

            if (!empty($result['error'])) {
                $log .= "\tERROR: " . implode(' ', $result['error']) . "\n";
            }

            if (!empty($result['warning'])) {
                $log .= "\tWARNING: " . implode(' ', $result['warning']) . "\n";
            }

            if (!empty($result['removed'])) {
                foreach ($result['removed'] as $file) {
                    // removed file contain additional field "realpath"
                    $log .= "\tREMOVED: " . $file['realpath'] . "\n";
                }
            }

            if (!empty($result['added'])) {
                foreach ($result['added'] as $file) {
                    $log .= "\tADDED: " . $elfinder->realpath($file['hash']) . "\n";
                }
            }

            if (!empty($result['changed'])) {
                foreach ($result['changed'] as $file) {
                    $log .= "\tCHANGED: " . $elfinder->realpath($file['hash']) . "\n";
                }
            }

            $this->write($log);
            $this->write(var_export($result, true), true);
        }
    }

    /**
     * Write log into file
     *
     * @param  string $log log record
     *
     * @return void
     * @author Dmitry (dio) Levashov
     **/
    protected function write($log, $eol=false)
    {
        if ($eol)
            $eol = "\n";
        if (($fp = @fopen($this->file, 'a'))) {
            fwrite($fp, $log . $eol);
            fclose($fp);
        }
    }

} // END class 
//$logger = new elFinderSimpleLogger(BASE.'tmp/elfinder.log');

/**
 * example accessControl function
 * to demonstrate how to control file access using "accessControl" callback.
 * This method will disable accessing files/folders starting from  '.' (dot)
 *
 * @param  string    $attr   attribute name (read|write|locked|hidden)
 * @param  string    $path   file path relative to volume root directory started with directory separator
 * @param            $data
 * @param  object    $volume elFinder volume driver object
 * @param  bool|null $isDir  path is directory (true: directory, false: file, null: unknown)
 *
 * @return bool|null
 */
function access($attr, $path, $data, $volume, $isDir) {
	return strpos(basename($path), '.') === 0       // if file/folder begins with '.' (dot)
		? !($attr == 'read' || $attr == 'write')    // set read+write to false, other (locked+hidden) set to true
		:  null;                                    // else elFinder decide it itself
}

/**
 * example accessControl class
 *
 * @author Dmitry (dio) Levashov
 **/
class elFinderTestACL
{

    /**
     * make dotfiles not readable, not writable, hidden and locked
     *
     * @param  string               $attr   attribute name (read|write|locked|hidden)
     * @param  string               $path   file path. Attention! This is path relative to volume root directory started with directory separator.
     * @param  mixed                $data   data which seted in 'accessControlData' elFinder option
     * @param  elFinderVolumeDriver $volume volume driver
     *
     * @return bool
     * @author Dmitry (dio) Levashov
     **/
    public function fsAccess($attr, $path, $data, $volume)
    {

        if ($volume->name() == 'localfilesystem') {
            return strpos(basename($path), '.') === 0
                ? !($attr == 'read' || $attr == 'write')
                : $attr == 'read' || $attr == 'write';
        }

        return true;
    }

} // END class 
//$acl = new elFinderTestACL();

/**
 * example acceptedName function
 */
function validName($name)
{
    return strpos($name, '.') !== 0;
}

$opts = array(
    'locale' => LOCALE . '.' . LANG_CHARSET,
    'bind'   => array(
        // '*' => 'logger',
        'mkdir mkfile rename duplicate upload rm paste' => 'logger',
//        'mkdir mkfile rename duplicate upload rm paste' => array($logger, 'log'),
//        'upload.pre mkdir.pre mkfile.pre rename.pre archive.pre ls.pre' => array(
//            'Plugin.Normalizer.cmdPreprocess',
//            'Plugin.Sanitizer.cmdPreprocess',
//        ),
//        'ls' => array(
//            'Plugin.Normalizer.cmdPostprocess',
//            'Plugin.Sanitizer.cmdPostprocess',
//        ),
        'upload.presave'                                => array(
            'Plugin.AutoResize.onUpLoadPreSave',
//            'Plugin.Watermark.onUpLoadPreSave',
//            'Plugin.Normalizer.onUpLoadPreSave',
//            'Plugin.Sanitizer.onUpLoadPreSave',
//            'Plugin.AutoRotate.onUpLoadPreSave',
        ),
    ),
    // global plugin configure (optional)
    'plugin' => array(
        'AutoResize' => array(
            'enable'     => UPLOAD_WIDTH, // For control by volume driver
            'maxWidth'   => UPLOAD_WIDTH,
            'maxHeight'  => UPLOAD_WIDTH,
            'quality'    => THUMB_QUALITY, // JPEG image save quality
            'targetType' => IMG_GIF | IMG_JPG | IMG_PNG | IMG_WBMP, // Target image formats ( bit-field )
//            'preserveExif'   => false,      // Preserve EXIF data (Imagick only)
        ),
//        'Watermark' => array(
//            'enable'         => true,       // For control by volume driver
//            'source'         => 'logo.png', // Path to Water mark image
//            'marginRight'    => 5,          // Margin right pixel
//            'marginBottom'   => 5,          // Margin bottom pixel
//            'quality'        => THUMB_QUALITY,         // JPEG image save quality
//            'transparency'   => 70,         // Water mark image transparency ( other than PNG )
//            'targetType'     => IMG_GIF|IMG_JPG|IMG_PNG|IMG_WBMP, // Target image formats ( bit-field )
//            'targetMinPixel' => 200         // Target image minimum pixel size
//        ),
//        'Normalizer' => array(
//            'enable' => true,
//            'nfc'    => true,
//            'nfkc'   => true,
//            'lowercase' => false,
//            'convmap'   => array()
//        ),
//       'Sanitizer' => array(
//           'enable' => true,
//           'targets'  => array('\\','/',':','*','?','"','<','>','|'), // target chars
//           'replace'  => '_'    // replace to this
//        ),
//        'AutoRotate' => array(
//            'enable'         => true,       // For control by volume driver
//            'quality'        => 95          // JPEG image save quality
//        )
    ),
    'debug'  => DEVELOPMENT,
//	'netVolumesSessionKey' => 'netVolumes',
    'callbackWindowURL' => makeLink(array('controller'=>'file','action'=>'picker','ajax_action'=>1)),

    'roots'  => array(
        array(
            // 'id' => 'x5',
            'driver'          => 'Exponent',
            'path'            => BASE . 'files/',
            'URL'             => URL_FULL . 'files/',
            // 'treeDeep'   => 3,
            'alias'           => 'files',
            'disabled'        => array('netmount'),
//            'maxArcFilesSize' => 100,
            'accessControl'   => 'access',
            // 'accessControl' => array($acl, 'fsAccess'),
            // 'accessControlData' => array('uid' => 1),
            'uploadDeny'      => array('all'),
            'uploadAllow'     => array('all'),
            'uploadOrder'     => 'deny,allow',
            'uploadOverwrite' => true,
//            'uploadMaxSize'   => '128m',
            // 'copyOverwrite' => false,
            'copyJoin'        => true,
//            'mimeDetect' => 'internal',
//            'tmpPath'         => BASE . 'tmp',
            'tmbCrop'         => false,
//            'imgLib' => 'gd',  // 'auto' doesn't seem to work on some servers
            'tmbPath'         => BASE . 'tmp' . DIRECTORY_SEPARATOR . 'elfinder',
            'tmbURL'          => URL_FULL . 'tmp/elfinder/',
            'tmbPathMode'     => 0755,
            'tmbBgColor'      => 'transparent',
            'tmbSize'         => FM_THUMB_SIZE,
            'quarantine'      => '..' . DIRECTORY_SEPARATOR . 'tmp' . DIRECTORY_SEPARATOR . 'elfinder' . DIRECTORY_SEPARATOR . '.quarantine',
            'acceptedName'    => '/^[^\.].*$/',
            // 'acceptedName'    => '/^[\W]*$/',
            // 'acceptedName' => 'validName',
            'utf8fix'         => false,
//            'statOwner'       => true,
            'attributes'      => array(
                array(
                    'pattern' => '/^\/\./', // dot files are hidden
                    'read'    => false,
                    'write'   => false,
                    'hidden'  => true,
                    'locked'  => true
                )
            )
        )
    )
);

//header('Access-Control-Allow-Origin: *');
$connector = new elFinderConnector(new elFinderExponent($opts), true);
$connector->run();
