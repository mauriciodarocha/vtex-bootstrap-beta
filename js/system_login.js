var _sys_login = {
    init: function()
    {
        if(!$('body').hasClass('login')) return;
        
        _sys_login.fix.text_button();
        //_sys_login.fix.header_steps();
        _sys_login.fix.home_link();
    },
    set:
    {

    },
    fix:
    {
        text_button:function()
        {
            $(".sign-in .continuar .bt").attr({"title":"Entrar", "value":"Entrar"})
        },
        header_steps:function()
        {
            if($('.header-steps').length<1) return;

            $(".header-steps .steps").prependTo(".content");
        },
        home_link: function()
        {
            link = "http://"+document.location.host;
            $('.tpl-header h1 a').attr('href',link);
        }
    }
}