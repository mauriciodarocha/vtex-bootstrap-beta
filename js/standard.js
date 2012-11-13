/*! standard.js 
* @version 1.0
* @author Marcelo Anderson (www.marceloanderson.com.br), Maurício Rocha
* @date 2012-11-13 
*/

var _standard = {
	browser:"",
    version:0,
    init:function()
    {
    	_standard.set.browser();
    },
    load:
    {

    },
    set:
    {
    	browser: function() // adiciona "class" ie, fx, chrome ou other no body
        {
            var browser = jQuery.browser.msie?'ie':/(chrome)/.test(navigator.userAgent.toLowerCase())?'chrome':jQuery.browser.mozilla?'fx':'other';
            var version = jQuery.browser.version.split('.').shift();
            _standard.browser=browser;
            _standard.version=parseInt(version);
            
            if(!jQuery("body").hasClass(_standard.browser))
            {
                jQuery("body").addClass(_standard.browser).addClass(_standard.browser+_standard.version);
            }
        }
    }
}

jQuery(function(){
    _standard.init();
});