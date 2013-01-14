var _sys_es = {
    init: function()
    {
        if(!$('body').hasClass('esqueci-senha')) return;
        
        _sys_es.fix.home_link();
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