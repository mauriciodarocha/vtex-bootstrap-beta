var _sys_fr = {
    init: function()
    {
        if(!$('body').hasClass('frete')) return;
        
        //_sys_fr.fix.header_steps();
    },
    set:
    {

    },
    fix:
    {
        header_steps:function()
        {
            if($('.header-steps').length<1) return;

            $(".header-steps .steps").prependTo(".content");
        },
    }
}