/*
YUI 3.11.0 (build d549e5c)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/series-histogram-base/series-histogram-base.js']) {
   __coverage__['build/series-histogram-base/series-histogram-base.js'] = {"path":"build/series-histogram-base/series-histogram-base.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}},"2":{"name":"Histogram","line":19,"loc":{"start":{"line":19,"column":0},"end":{"line":19,"column":20}}},"3":{"name":"(anonymous_3)","line":28,"loc":{"start":{"line":28,"column":16},"end":{"line":29,"column":4}}},"4":{"name":"(anonymous_4)","line":198,"loc":{"start":{"line":198,"column":22},"end":{"line":199,"column":4}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":232,"column":69}},"2":{"start":{"line":9,"column":0},"end":{"line":9,"column":20}},"3":{"start":{"line":19,"column":0},"end":{"line":19,"column":22}},"4":{"start":{"line":21,"column":0},"end":{"line":227,"column":2}},"5":{"start":{"line":30,"column":8},"end":{"line":33,"column":9}},"6":{"start":{"line":32,"column":12},"end":{"line":32,"column":19}},"7":{"start":{"line":34,"column":8},"end":{"line":71,"column":52}},"8":{"start":{"line":72,"column":8},"end":{"line":75,"column":9}},"9":{"start":{"line":74,"column":12},"end":{"line":74,"column":51}},"10":{"start":{"line":76,"column":8},"end":{"line":79,"column":9}},"11":{"start":{"line":78,"column":12},"end":{"line":78,"column":55}},"12":{"start":{"line":80,"column":8},"end":{"line":89,"column":9}},"13":{"start":{"line":82,"column":12},"end":{"line":82,"column":34}},"14":{"start":{"line":83,"column":12},"end":{"line":83,"column":40}},"15":{"start":{"line":87,"column":12},"end":{"line":87,"column":33}},"16":{"start":{"line":88,"column":12},"end":{"line":88,"column":41}},"17":{"start":{"line":90,"column":8},"end":{"line":90,"column":36}},"18":{"start":{"line":91,"column":8},"end":{"line":91,"column":50}},"19":{"start":{"line":92,"column":8},"end":{"line":92,"column":34}},"20":{"start":{"line":93,"column":8},"end":{"line":101,"column":9}},"21":{"start":{"line":95,"column":12},"end":{"line":95,"column":47}},"22":{"start":{"line":96,"column":12},"end":{"line":96,"column":68}},"23":{"start":{"line":97,"column":12},"end":{"line":100,"column":13}},"24":{"start":{"line":99,"column":16},"end":{"line":99,"column":36}},"25":{"start":{"line":102,"column":8},"end":{"line":102,"column":37}},"26":{"start":{"line":103,"column":8},"end":{"line":103,"column":48}},"27":{"start":{"line":104,"column":8},"end":{"line":112,"column":9}},"28":{"start":{"line":106,"column":12},"end":{"line":106,"column":54}},"29":{"start":{"line":107,"column":12},"end":{"line":107,"column":32}},"30":{"start":{"line":108,"column":12},"end":{"line":108,"column":28}},"31":{"start":{"line":109,"column":12},"end":{"line":109,"column":29}},"32":{"start":{"line":110,"column":12},"end":{"line":110,"column":43}},"33":{"start":{"line":111,"column":12},"end":{"line":111,"column":36}},"34":{"start":{"line":113,"column":8},"end":{"line":113,"column":31}},"35":{"start":{"line":114,"column":8},"end":{"line":162,"column":9}},"36":{"start":{"line":116,"column":12},"end":{"line":116,"column":57}},"37":{"start":{"line":117,"column":12},"end":{"line":117,"column":62}},"38":{"start":{"line":118,"column":12},"end":{"line":118,"column":56}},"39":{"start":{"line":119,"column":12},"end":{"line":119,"column":62}},"40":{"start":{"line":120,"column":12},"end":{"line":120,"column":81}},"41":{"start":{"line":121,"column":12},"end":{"line":121,"column":81}},"42":{"start":{"line":122,"column":12},"end":{"line":126,"column":13}},"43":{"start":{"line":124,"column":16},"end":{"line":124,"column":41}},"44":{"start":{"line":125,"column":16},"end":{"line":125,"column":25}},"45":{"start":{"line":127,"column":12},"end":{"line":127,"column":95}},"46":{"start":{"line":128,"column":12},"end":{"line":161,"column":13}},"47":{"start":{"line":130,"column":16},"end":{"line":130,"column":33}},"48":{"start":{"line":131,"column":16},"end":{"line":131,"column":35}},"49":{"start":{"line":133,"column":16},"end":{"line":155,"column":17}},"50":{"start":{"line":135,"column":20},"end":{"line":135,"column":56}},"51":{"start":{"line":136,"column":20},"end":{"line":136,"column":77}},"52":{"start":{"line":137,"column":20},"end":{"line":137,"column":39}},"53":{"start":{"line":138,"column":20},"end":{"line":138,"column":38}},"54":{"start":{"line":142,"column":20},"end":{"line":142,"column":48}},"55":{"start":{"line":143,"column":20},"end":{"line":143,"column":69}},"56":{"start":{"line":144,"column":20},"end":{"line":144,"column":35}},"57":{"start":{"line":145,"column":20},"end":{"line":145,"column":34}},"58":{"start":{"line":146,"column":20},"end":{"line":149,"column":21}},"59":{"start":{"line":148,"column":24},"end":{"line":148,"column":77}},"60":{"start":{"line":150,"column":20},"end":{"line":153,"column":21}},"61":{"start":{"line":152,"column":24},"end":{"line":152,"column":83}},"62":{"start":{"line":154,"column":20},"end":{"line":154,"column":66}},"63":{"start":{"line":158,"column":17},"end":{"line":161,"column":13}},"64":{"start":{"line":160,"column":16},"end":{"line":160,"column":41}},"65":{"start":{"line":163,"column":8},"end":{"line":163,"column":47}},"66":{"start":{"line":164,"column":8},"end":{"line":164,"column":47}},"67":{"start":{"line":165,"column":8},"end":{"line":179,"column":9}},"68":{"start":{"line":167,"column":12},"end":{"line":174,"column":15}},"69":{"start":{"line":178,"column":12},"end":{"line":178,"column":37}},"70":{"start":{"line":200,"column":8},"end":{"line":222,"column":10}},"71":{"start":{"line":223,"column":8},"end":{"line":223,"column":80}},"72":{"start":{"line":224,"column":8},"end":{"line":224,"column":84}},"73":{"start":{"line":225,"column":8},"end":{"line":225,"column":20}},"74":{"start":{"line":229,"column":0},"end":{"line":229,"column":24}}},"branchMap":{"1":{"line":30,"type":"if","locations":[{"start":{"line":30,"column":8},"end":{"line":30,"column":8}},{"start":{"line":30,"column":8},"end":{"line":30,"column":8}}]},"2":{"line":44,"type":"binary-expr","locations":[{"start":{"line":44,"column":24},"end":{"line":44,"column":51}},{"start":{"line":44,"column":55},"end":{"line":44,"column":56}}]},"3":{"line":72,"type":"if","locations":[{"start":{"line":72,"column":8},"end":{"line":72,"column":8}},{"start":{"line":72,"column":8},"end":{"line":72,"column":8}}]},"4":{"line":76,"type":"if","locations":[{"start":{"line":76,"column":8},"end":{"line":76,"column":8}},{"start":{"line":76,"column":8},"end":{"line":76,"column":8}}]},"5":{"line":80,"type":"if","locations":[{"start":{"line":80,"column":8},"end":{"line":80,"column":8}},{"start":{"line":80,"column":8},"end":{"line":80,"column":8}}]},"6":{"line":97,"type":"if","locations":[{"start":{"line":97,"column":12},"end":{"line":97,"column":12}},{"start":{"line":97,"column":12},"end":{"line":97,"column":12}}]},"7":{"line":104,"type":"if","locations":[{"start":{"line":104,"column":8},"end":{"line":104,"column":8}},{"start":{"line":104,"column":8},"end":{"line":104,"column":8}}]},"8":{"line":122,"type":"if","locations":[{"start":{"line":122,"column":12},"end":{"line":122,"column":12}},{"start":{"line":122,"column":12},"end":{"line":122,"column":12}}]},"9":{"line":122,"type":"binary-expr","locations":[{"start":{"line":122,"column":15},"end":{"line":122,"column":32}},{"start":{"line":122,"column":36},"end":{"line":122,"column":53}}]},"10":{"line":128,"type":"if","locations":[{"start":{"line":128,"column":12},"end":{"line":128,"column":12}},{"start":{"line":128,"column":12},"end":{"line":128,"column":12}}]},"11":{"line":128,"type":"binary-expr","locations":[{"start":{"line":128,"column":15},"end":{"line":128,"column":44}},{"start":{"line":128,"column":48},"end":{"line":128,"column":73}}]},"12":{"line":133,"type":"if","locations":[{"start":{"line":133,"column":16},"end":{"line":133,"column":16}},{"start":{"line":133,"column":16},"end":{"line":133,"column":16}}]},"13":{"line":146,"type":"if","locations":[{"start":{"line":146,"column":20},"end":{"line":146,"column":20}},{"start":{"line":146,"column":20},"end":{"line":146,"column":20}}]},"14":{"line":150,"type":"if","locations":[{"start":{"line":150,"column":20},"end":{"line":150,"column":20}},{"start":{"line":150,"column":20},"end":{"line":150,"column":20}}]},"15":{"line":158,"type":"if","locations":[{"start":{"line":158,"column":17},"end":{"line":158,"column":17}},{"start":{"line":158,"column":17},"end":{"line":158,"column":17}}]},"16":{"line":165,"type":"if","locations":[{"start":{"line":165,"column":8},"end":{"line":165,"column":8}},{"start":{"line":165,"column":8},"end":{"line":165,"column":8}}]}},"code":["(function () { YUI.add('series-histogram-base', function (Y, NAME) {","","/**"," * Provides core functionality for creating a bar or column series."," *"," * @module charts"," * @submodule series-histogram"," */","var Y_Lang = Y.Lang;","","/**"," * Histogram is the base class for Column and Bar series."," *"," * @class Histogram"," * @constructor"," * @param {Object} config (optional) Configuration parameters."," * @submodule series-histogram"," */","function Histogram(){}","","Histogram.prototype = {","    /**","     * Draws the series.","     *","     * @method drawSeries","     * @protected","     */","    drawSeries: function()","    {","        if(this.get(\"xcoords\").length < 1)","        {","            return;","        }","        var style = Y.clone(this.get(\"styles\").marker),","            graphic = this.get(\"graphic\"),","            setSize,","            calculatedSize,","            xcoords = this.get(\"xcoords\"),","            ycoords = this.get(\"ycoords\"),","            i = 0,","            len = xcoords.length,","            top = ycoords[0],","            seriesTypeCollection = this.get(\"seriesTypeCollection\"),","            seriesLen = seriesTypeCollection.length || 0,","            seriesSize = 0,","            totalSize = 0,","            offset = 0,","            ratio,","            renderer,","            order = this.get(\"order\"),","            graphOrder = this.get(\"graphOrder\"),","            left,","            marker,","            setSizeKey,","            calculatedSizeKey,","            config,","            fillColors = null,","            borderColors = null,","            xMarkerPlane = [],","            yMarkerPlane = [],","            xMarkerPlaneLeft,","            xMarkerPlaneRight,","            yMarkerPlaneTop,","            yMarkerPlaneBottom,","            dimensions = {","                width: [],","                height: []","            },","            xvalues = [],","            yvalues = [],","            groupMarkers = this.get(\"groupMarkers\");","        if(Y_Lang.isArray(style.fill.color))","        {","            fillColors = style.fill.color.concat();","        }","        if(Y_Lang.isArray(style.border.color))","        {","            borderColors = style.border.color.concat();","        }","        if(this.get(\"direction\") === \"vertical\")","        {","            setSizeKey = \"height\";","            calculatedSizeKey = \"width\";","        }","        else","        {","            setSizeKey = \"width\";","            calculatedSizeKey = \"height\";","        }","        setSize = style[setSizeKey];","        calculatedSize = style[calculatedSizeKey];","        this._createMarkerCache();","        for(; i < seriesLen; ++i)","        {","            renderer = seriesTypeCollection[i];","            seriesSize += renderer.get(\"styles\").marker[setSizeKey];","            if(order > i)","            {","                offset = seriesSize;","            }","        }","        totalSize = len * seriesSize;","        this._maxSize = graphic.get(setSizeKey);","        if(totalSize > this._maxSize)","        {","            ratio = graphic.get(setSizeKey)/totalSize;","            seriesSize *= ratio;","            offset *= ratio;","            setSize *= ratio;","            setSize = Math.max(setSize, 1);","            this._maxSize = setSize;","        }","        offset -= seriesSize/2;","        for(i = 0; i < len; ++i)","        {","            xMarkerPlaneLeft = xcoords[i] - seriesSize/2;","            xMarkerPlaneRight = xMarkerPlaneLeft + seriesSize;","            yMarkerPlaneTop = ycoords[i] - seriesSize/2;","            yMarkerPlaneBottom = yMarkerPlaneTop + seriesSize;","            xMarkerPlane.push({start: xMarkerPlaneLeft, end: xMarkerPlaneRight});","            yMarkerPlane.push({start: yMarkerPlaneTop, end: yMarkerPlaneBottom});","            if(isNaN(xcoords[i]) || isNaN(ycoords[i]))","            {","                this._markers.push(null);","                continue;","            }","            config = this._getMarkerDimensions(xcoords[i], ycoords[i], calculatedSize, offset);","            if(!isNaN(config.calculatedSize) && config.calculatedSize > 0)","            {","                top = config.top;","                left = config.left;","","                if(groupMarkers)","                {","                    dimensions[setSizeKey][i] = setSize;","                    dimensions[calculatedSizeKey][i] = config.calculatedSize;","                    xvalues.push(left);","                    yvalues.push(top);","                }","                else","                {","                    style[setSizeKey] = setSize;","                    style[calculatedSizeKey] = config.calculatedSize;","                    style.x = left;","                    style.y = top;","                    if(fillColors)","                    {","                        style.fill.color = fillColors[i % fillColors.length];","                    }","                    if(borderColors)","                    {","                        style.border.color = borderColors[i % borderColors.length];","                    }","                    marker = this.getMarker(style, graphOrder, i);","                }","","            }","            else if(!groupMarkers)","            {","                this._markers.push(null);","            }","        }","        this.set(\"xMarkerPlane\", xMarkerPlane);","        this.set(\"yMarkerPlane\", yMarkerPlane);","        if(groupMarkers)","        {","            this._createGroupMarker({","                fill: style.fill,","                border: style.border,","                dimensions: dimensions,","                xvalues: xvalues,","                yvalues: yvalues,","                shape: style.shape","            });","        }","        else","        {","            this._clearMarkerCache();","        }","    },","","    /**","     * Collection of default colors used for marker fills in a series when not specified by user.","     *","     * @property _defaultFillColors","     * @type Array","     * @protected","     */","    _defaultFillColors: [\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"],","","    /**","     * Gets the default style values for the markers.","     *","     * @method _getPlotDefaults","     * @return Object","     * @private","     */","    _getPlotDefaults: function()","    {","        var defs = {","            fill:{","                type: \"solid\",","                alpha: 1,","                colors:null,","                alphas: null,","                ratios: null","            },","            border:{","                weight: 0,","                alpha: 1","            },","            width: 12,","            height: 12,","            shape: \"rect\",","","            padding:{","                top: 0,","                left: 0,","                right: 0,","                bottom: 0","            }","        };","        defs.fill.color = this._getDefaultColor(this.get(\"graphOrder\"), \"fill\");","        defs.border.color = this._getDefaultColor(this.get(\"graphOrder\"), \"border\");","        return defs;","    }","};","","Y.Histogram = Histogram;","","","}, '3.11.0', {\"requires\": [\"series-cartesian\", \"series-plot-util\"]});","","}());"]};
}
var __cov_0tjbcXaJzRKQpBUf_9w8GQ = __coverage__['build/series-histogram-base/series-histogram-base.js'];
__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['1']++;YUI.add('series-histogram-base',function(Y,NAME){__cov_0tjbcXaJzRKQpBUf_9w8GQ.f['1']++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['2']++;var Y_Lang=Y.Lang;function Histogram(){__cov_0tjbcXaJzRKQpBUf_9w8GQ.f['2']++;}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['4']++;Histogram.prototype={drawSeries:function(){__cov_0tjbcXaJzRKQpBUf_9w8GQ.f['3']++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['5']++;if(this.get('xcoords').length<1){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['1'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['6']++;return;}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['1'][1]++;}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['7']++;var style=Y.clone(this.get('styles').marker),graphic=this.get('graphic'),setSize,calculatedSize,xcoords=this.get('xcoords'),ycoords=this.get('ycoords'),i=0,len=xcoords.length,top=ycoords[0],seriesTypeCollection=this.get('seriesTypeCollection'),seriesLen=(__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['2'][0]++,seriesTypeCollection.length)||(__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['2'][1]++,0),seriesSize=0,totalSize=0,offset=0,ratio,renderer,order=this.get('order'),graphOrder=this.get('graphOrder'),left,marker,setSizeKey,calculatedSizeKey,config,fillColors=null,borderColors=null,xMarkerPlane=[],yMarkerPlane=[],xMarkerPlaneLeft,xMarkerPlaneRight,yMarkerPlaneTop,yMarkerPlaneBottom,dimensions={width:[],height:[]},xvalues=[],yvalues=[],groupMarkers=this.get('groupMarkers');__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['8']++;if(Y_Lang.isArray(style.fill.color)){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['3'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['9']++;fillColors=style.fill.color.concat();}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['3'][1]++;}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['10']++;if(Y_Lang.isArray(style.border.color)){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['4'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['11']++;borderColors=style.border.color.concat();}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['4'][1]++;}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['12']++;if(this.get('direction')==='vertical'){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['5'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['13']++;setSizeKey='height';__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['14']++;calculatedSizeKey='width';}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['5'][1]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['15']++;setSizeKey='width';__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['16']++;calculatedSizeKey='height';}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['17']++;setSize=style[setSizeKey];__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['18']++;calculatedSize=style[calculatedSizeKey];__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['19']++;this._createMarkerCache();__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['20']++;for(;i<seriesLen;++i){__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['21']++;renderer=seriesTypeCollection[i];__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['22']++;seriesSize+=renderer.get('styles').marker[setSizeKey];__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['23']++;if(order>i){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['6'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['24']++;offset=seriesSize;}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['6'][1]++;}}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['25']++;totalSize=len*seriesSize;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['26']++;this._maxSize=graphic.get(setSizeKey);__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['27']++;if(totalSize>this._maxSize){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['7'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['28']++;ratio=graphic.get(setSizeKey)/totalSize;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['29']++;seriesSize*=ratio;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['30']++;offset*=ratio;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['31']++;setSize*=ratio;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['32']++;setSize=Math.max(setSize,1);__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['33']++;this._maxSize=setSize;}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['7'][1]++;}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['34']++;offset-=seriesSize/2;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['35']++;for(i=0;i<len;++i){__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['36']++;xMarkerPlaneLeft=xcoords[i]-seriesSize/2;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['37']++;xMarkerPlaneRight=xMarkerPlaneLeft+seriesSize;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['38']++;yMarkerPlaneTop=ycoords[i]-seriesSize/2;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['39']++;yMarkerPlaneBottom=yMarkerPlaneTop+seriesSize;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['40']++;xMarkerPlane.push({start:xMarkerPlaneLeft,end:xMarkerPlaneRight});__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['41']++;yMarkerPlane.push({start:yMarkerPlaneTop,end:yMarkerPlaneBottom});__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['42']++;if((__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['9'][0]++,isNaN(xcoords[i]))||(__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['9'][1]++,isNaN(ycoords[i]))){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['8'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['43']++;this._markers.push(null);__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['44']++;continue;}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['8'][1]++;}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['45']++;config=this._getMarkerDimensions(xcoords[i],ycoords[i],calculatedSize,offset);__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['46']++;if((__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['11'][0]++,!isNaN(config.calculatedSize))&&(__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['11'][1]++,config.calculatedSize>0)){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['10'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['47']++;top=config.top;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['48']++;left=config.left;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['49']++;if(groupMarkers){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['12'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['50']++;dimensions[setSizeKey][i]=setSize;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['51']++;dimensions[calculatedSizeKey][i]=config.calculatedSize;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['52']++;xvalues.push(left);__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['53']++;yvalues.push(top);}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['12'][1]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['54']++;style[setSizeKey]=setSize;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['55']++;style[calculatedSizeKey]=config.calculatedSize;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['56']++;style.x=left;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['57']++;style.y=top;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['58']++;if(fillColors){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['13'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['59']++;style.fill.color=fillColors[i%fillColors.length];}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['13'][1]++;}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['60']++;if(borderColors){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['14'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['61']++;style.border.color=borderColors[i%borderColors.length];}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['14'][1]++;}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['62']++;marker=this.getMarker(style,graphOrder,i);}}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['10'][1]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['63']++;if(!groupMarkers){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['15'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['64']++;this._markers.push(null);}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['15'][1]++;}}}__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['65']++;this.set('xMarkerPlane',xMarkerPlane);__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['66']++;this.set('yMarkerPlane',yMarkerPlane);__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['67']++;if(groupMarkers){__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['16'][0]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['68']++;this._createGroupMarker({fill:style.fill,border:style.border,dimensions:dimensions,xvalues:xvalues,yvalues:yvalues,shape:style.shape});}else{__cov_0tjbcXaJzRKQpBUf_9w8GQ.b['16'][1]++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['69']++;this._clearMarkerCache();}},_defaultFillColors:['#66007f','#a86f41','#295454','#996ab2','#e8cdb7','#90bdbd','#000000','#c3b8ca','#968373','#678585'],_getPlotDefaults:function(){__cov_0tjbcXaJzRKQpBUf_9w8GQ.f['4']++;__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['70']++;var defs={fill:{type:'solid',alpha:1,colors:null,alphas:null,ratios:null},border:{weight:0,alpha:1},width:12,height:12,shape:'rect',padding:{top:0,left:0,right:0,bottom:0}};__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['71']++;defs.fill.color=this._getDefaultColor(this.get('graphOrder'),'fill');__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['72']++;defs.border.color=this._getDefaultColor(this.get('graphOrder'),'border');__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['73']++;return defs;}};__cov_0tjbcXaJzRKQpBUf_9w8GQ.s['74']++;Y.Histogram=Histogram;},'3.11.0',{'requires':['series-cartesian','series-plot-util']});
