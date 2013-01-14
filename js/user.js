var _sys = {
    sys_classes: ['carrinho','login','esqueci-email','email-mudou','esqueci-senha','cadastro-cliente','endereco-compra','forma-pagamento','finaliza-compra','minha-conta','frete'],
    classes:null,
    browser:null,
    version:null,
    init: function()
    {
        index=_sys.check();
        if(index==-1) return;
        
        _sys.set.browser();
        _sys.set.header();
        _sys.set.footer();
        _sys.run(index);
    },
    run: function(index)
    {
        switch(_sys.sys_classes[index])
        {
            case 'carrinho':
                if(typeof _sys_cart=="undefined")
                {
                    jQuery.getScript("/arquivos/system_carrinho.js",function(){
                       _sys_cart.init();
                       _sys.callback();
                    });
                }
                else
                {
                    _sys_cart.init();
                    _sys.callback();
                }
                break;
            case 'login':
                if(typeof _sys_login=="undefined")
                    jQuery.getScript("/arquivos/system_login.js",function(){
                        _sys_login.init();
                        _sys.callback();
                    });
                else
                {
                    _sys_login.init();
                    _sys.callback();
                }
                break;
            case 'esqueci-email':
                if(typeof _sys_ee=="undefined")
                    jQuery.getScript("/arquivos/system_esqueci_email.js",function(){
                        _sys_ee.init();
                        _sys.callback();
                    });
                else
                {
                    _sys_ee.init();
                    _sys.callback();
                }
                break;
            case 'email-mudou':
                if(typeof _sys_em=="undefined")
                    jQuery.getScript("/arquivos/system_email_mudou.js",function(){
                        _sys_em.init();
                        _sys.callback();
                    });
                else
                {
                    _sys_em.init();
                    _sys.callback();
                }
                break;
            case 'esqueci-senha':
                if(typeof _sys_es=="undefined")
                    jQuery.getScript("/arquivos/system_esqueci_senha.js",function(){
                        _sys_es.init();
                        _sys.callback();
                    });
                else
                {
                    _sys_es.init();
                    _sys.callback();
                }
                break;
            case 'cadastro-cliente':
                if(typeof _sys_cc=="undefined")
                    jQuery.getScript("/arquivos/system_cadastro_cliente.js",function(){
                        _sys_cc.init();
                        _sys.callback();
                    });
                else
                {
                    _sys_cc.init();
                    _sys.callback();
                }
                break;
            case 'endereco-compra':
                if(typeof _sys_ec=="undefined")
                    jQuery.getScript("/arquivos/system_endereco_compra.js",function(){
                        _sys_ec.init();
                        _sys.callback();
                    });
                else
                {
                    _sys_ec.init();
                    _sys.callback();
                }
                break;
            case 'forma-pagamento':
                if(typeof _sys_ec=="undefined")
                    jQuery.getScript("/arquivos/system_forma_pagamento.js",function(){
                        _sys_fp.init();
                        _sys.callback();
                    });
                else
                {
                    _sys_fp.init();
                    _sys.callback();
                }
                break;
            case 'finaliza-compra':
                if(typeof _sys_ec=="undefined")
                    jQuery.getScript("/arquivos/system_finaliza_compra.js",function(){
                        _sys_fc.init();
                        _sys.callback();
                    });
                else
                {
                    _sys_fc.init();
                    _sys.callback();
                }
                break;
            case 'minha-conta':
                if(typeof _sys_mc=="undefined")
                    jQuery.getScript("/arquivos/system_minha_conta.js",function(){
						_sys.load.popup();
                        _sys_mc.init();
                        _sys.callback();
                    });
                else
                {
					_sys.load.popup();
                    _sys_mc.init();
                    _sys.callback();
                }
                break;
            case 'frete':
                if(typeof _sys_fr=="undefined")
                    jQuery.getScript("/arquivos/system_frete.js",function(){
                        _sys_fr.init();
                        _sys.callback();
                    });
                else
                {
                    _sys_fr.init();
                    _sys.callback();
                }
                break;
        }

    },
    load:
    {

    },
    set:
    {
        header: function()
        {
            var header = $('.tpl-header');
            if((header).length>0)
                header.prependTo($('body >form'));
        },
        footer: function()
        {
            var footer = $('.tpl-footer');
            if((footer).length>0)
                (footer).appendTo($('body'));
        },
        browser: function() // adiciona "class" ie, fx, chrome ou other no body
        {
            _sys.browser = jQuery.browser.msie?'ie':/(chrome)/.test(navigator.userAgent.toLowerCase())?'chrome':jQuery.browser.mozilla?'fx':'other';
            
            var version = jQuery.browser.version.split('.').shift();
            _sys.version=parseInt(version);
            
            if(!jQuery("body").hasClass(_sys.browser))
                jQuery("body").addClass(_sys.browser).addClass(_sys.browser+_sys.version);
        }
    },
    callback: function()
    {      
        
    },
    check: function()
    {
        _sys.classes = $('body').attr('class').split(' ');
        index=-1;
        $(_sys.classes).each(function(ndx,item){
            index = $.inArray(item,_sys.sys_classes);
            if(index!=-1) return false;
        });
        return index;
    }
}

jQuery(function(){
    _sys.init();
});