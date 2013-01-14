/* 
    Este arquivo em especial é carregado para páginas: minha conta, meus pedidos e meus pedidos detalhes por ter o mesmo body class "minha-conta". 
    Não foi detectado nada muito diferente entre elas para que cada uma tivesse um js separado.
*/
var _sys_mc = {
    init: function()
    {
        if(!jQuery('body').hasClass('minha-conta')) return;
        
        // somente para página minha conta //
		// if($('.lnkAddPhoto').length>0)
		// 	_sys_mc.fix.pic();
        
        // somente para página meus pedidos //


        // somente para página meus pedidos detalhes //
        
    },
    set:
    {
        
    },
    fix:
    {
		pic: function()
		{
			$('.lnkAddPhoto').removeAttr('onClick').unbind();
			_href=$('.lnkAddPhoto').attr('href');
			$('.lnkAddPhoto').removeAttr('href');
			$('.lnkAddPhoto').click(function(){
				_iframe = $('<iframe>',{'src':_href});
				_div = jQuery('<div class="popup-container"><div class="popup-header"><div class="title"><span>Adicionar Foto</span></div><div class="close">X</div></div><div class="popup-content"></div></div>');
				$(_div).find('.popup-content').append(_iframe);
				$(_div).vtex_popup({classes:'popup-picture'});
			});

		}
    }
}