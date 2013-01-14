var _sys_cc = {
    init: function()
    {
        if(!$('body').hasClass('cadastro-cliente')) return;
        
        _sys_cc.fix.home_link();
        //_sys_cc.set.button_cadastrar();
    },
    set:
    {
        button_cadastrar:function()
        {
            $(".dBtContinuar").find(".fisubmit").attr({"value":"Cadastrar", "title":"Cadastrar"});
        }
    },
    fix:
    {
        home_link: function()
        {
            link = "http://"+document.location.host;
            $('.tpl-header h1 a').attr('href',link);
        }
    }
}