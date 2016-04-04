$(document).ready(function() {

	/**/
	var arrow_izq ='<span class="icon-chevron-thin-left"></span>';
	var arrow_der ='<span class="icon-chevron-thin-right"></span>';

	/*Banner del Index*/
	$('.Banner-slides.owl-carousel').owlCarousel({
		// itemsCustom: [
		// 	[0, 1]
		// ],
		nav: true,
		autoPlay: false,
		slideSpeed: 1000,
		dots: true,
		loop:true,
		responsive: {
			0:{
				items:1
			}
		},
		navText: [arrow_izq,arrow_der]
	});

	/*Slider Otros Proyectos*/
	$('.Index-itemSlideCarousel.owl-carousel').owlCarousel({		
		nav: false,
		autoPlay: false,
		slideSpeed: 1000,
		dots: true,
		loop:true,
		responsive: {
			0:{
				items:1
			}
		}
	});

	/*Carrusel Noticias*/
	$('.News-list.owl-carousel').owlCarousel({
		nav: true,
		autoPlay: false,
		slideSpeed: 1000,
		dots: false,
		loop:true,
		responsive: {
			0:{
				items:1
			},
			600:{
				items:2
			},
			840:{
				items:3
			}
		},
		navText: [arrow_izq,arrow_der]
	});

	/*Slider Interna Proyectos*/
	$('.ProyInterna-galeria').owlCarousel({
		nav: true,
		autoPlay: false,
		slideSpeed: 1000,
		dots: false,
		loop:true,
		responsive: {
			0:{
				items:1
			}
		},
		navText: [arrow_izq,arrow_der]
	});

	$('.ProyInterna-planos').owlCarousel({
		nav: true,
		autoPlay: false,
		slideSpeed: 1000,
		dots: false,
		loop:true,
		responsive: {
			0:{
				items:1
			}
		},
		navText: [arrow_izq,arrow_der]
	});

	/*Funcionalidades Menu*/

	var menus = ['.MainMenu','.Header-contactoMail','.Header-contactoTel','.Header-contactoRedes'];

	/*Mostrar menu mobile*/
	$('.Header-mobileMenu').click(function(){
		mostrarOcultar('.MainMenu');
	});

	/*Mostrar redes*/
	$('.Header-mobileRedes').click(function(){
		mostrarOcultar('.Header-contactoRedes');
	});

	/*Mostrar contacto*/
	$('.Header-mobileMail').click(function(){
		mostrarOcultar('.Header-contactoMail');
	});

	/*Mostrar tel*/
	$('.Header-mobileTel').click(function(){
		mostrarOcultar('.Header-contactoTel');
	});

	function mostrarOcultar(elemento){
		for (var i = 0; i <= menus.length-1; i++) {
			if(menus[i] != elemento){
				$(menus[i]).slideUp();
			}
		}
		$(elemento).slideToggle();
	}

	/*Modulo para las pestañas*/

	var tabs = (function () {		

		/*
		* Objeto con valores de clases que se van a agregar y los elementos que vamos a obtener del DOM
		*/

		var st = {
			tabs: '.Tabs',
			tabs_item: '.Tabs-item',
			tabs_item_target: '.Tabs-itemLink',
			seleccion: 'Tabs--is-selected',
			activa: 'Tabs--is-active'
		};

		// Objeto vacío que guardará elementos que se manejan por HTML.
		var dom = {}

		// Función que llenará al objeto dom con los objetos HTML a través de jQuery ($).
		var catchDom = function() {
			dom.tabs_item_target = $(st.tabs_item_target, st.tabs);
		};

		// Función donde establecemos los eventos que tendrán cada elemento.
		var suscribeEvents = function() {
			dom.tabs_item_target.on('click', events.eSelectedTab);
		};

		/* Objeto que guarda métodos que se van a usar en cada evento definido 
		     en la función suscribeEvents. */
		var events = {
			eSelectedTab: function(e) {
				self = $(this);
				self.addClass(st.seleccion);
				var brother = self.parent(st.tabs_item).siblings();
				$(st.tabs_item_target, brother).removeClass(st.seleccion);
				var pane = self.attr('data-tab');
				$("#" + pane).addClass(st.activa);
				$("#" + pane).siblings().removeClass(st.activa);
			}
		};

		// Función que inicializará los funciones decritas anteriormente.
		var initialize = function() {
			catchDom();
			suscribeEvents();
		};

		/* Retorna un objeto literal con el método init haciendo referencia a la 
		      función initialize. */
		return {
			init: initialize
		};

	})();

	/*Ejecutamos las Pestañas*/

	tabs.init();

});