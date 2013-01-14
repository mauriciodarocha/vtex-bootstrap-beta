var _sys_em = {
    init: function()
    {
        if(!$('body').hasClass('email-mudou')) return;
        
        _sys_em.fix.home_link();

    },
    set:
    {

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