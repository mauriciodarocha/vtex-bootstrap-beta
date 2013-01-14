var _sys_ec = {
    init: function()
    {
        if(!$('body').hasClass('endereco-compra')) return;
        
        _sys_ec.fix.error();
        _sys_ec.fix.button_select_address();
    },
    set:
    {

    },
    fix:
    {
        error: function()
        {
            if($('.aviso-erro').length<=0) return;
            
            $('.aviso-erro:first').insertBefore('#ctl00_Conteudo_ctrlEnderecoCatalogo_divListaEndereco');
        },
        button_select_address: function()
        {
            // select-address
            jQuery('p.select-address').each(function(ndx,item){
                item=jQuery(item);
                //item.find("a").text("Enviar neste endereço").attr("title", "Enviar neste endereço");
                jQuery(item).siblings('ul.bts').after(item);
            });
        }
    }
}