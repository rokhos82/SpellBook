// -------------------------------------------------------------------------------------------------
// SpellBookSVC
// -------------------------------------------------------------------------------------------------
SB.SpellBookSVC = function() {
	this.initialized = false;
	this.ui = new SpellBookINT(this);
	this.dat = new SpellBookDAT();

	this.children = [];
};

SB.SpellBookSVC.prototype.setUIRoot = function() {
};

SB.SpellBookSVC.prototype.initialize = function() {
	if(!this.initialized) {
		this.ui.initialize();
		this.initialized = true;
	}
};

SB.SpellBookSVC.prototype.setUIRoot = function(uiRoot) {
	this.ui.setRoot(uiRoot);
};

SB.SpellBookSVC.prototype.importJSON = function(jsonStr) {
	var json = JSON.parse(jsonStr);
};

SB.SpellBookSVC.prototype.exportJSON = function() {
	var jsonStr = JSON.stringify(this.dat);
	return jsonStr;
};

SB.SpellBookSVC.prototype.loadFromLocalStorage = function() {
};

SB.SpellBookSVC.prototype.saveToLocalStorage = function() {
	var jsonStr = this.exportJSON();
};