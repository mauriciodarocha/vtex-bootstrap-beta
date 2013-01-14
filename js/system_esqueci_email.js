var _sys_ee = {
    init: function()
    {
        if(!$('body').hasClass('esqueci-email')) return;
        
        _sys_ee.fix.home_link();
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