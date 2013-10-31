var SB = {};

SB.service = null;

SB.settings = {};
SB.settings.localStorage = "";

SB.bootstrap = function(uiRoot) {
	if(!SB.service) {
		SB.service = new SB.SpellBookSVC();
	}
	SB.service.setUIRoot(uiRoot);
	SB.service.initialize();
};