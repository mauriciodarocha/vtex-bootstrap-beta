var _sys_fp = {
    init: function()
    {
        if(!jQuery('body').hasClass('forma-pagamento')) return;
        
        //_sys_fp.set.header_steps();
    },
    set:
    {
        header_steps:function()
        {
            if($('.header-steps').length<1) return;

            $(".header-steps .steps").prependTo(".content");
        }
    },
    fix:
    {

    }
}