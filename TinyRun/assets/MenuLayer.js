//
// CleanerScoreScene class
//
var MenuLayer = function () {
    cc.log("MenuLayer")
};

MenuLayer.prototype.onDidLoadFromCCB = function () {
//    this.rootNode.onUpdate = function (dt)
//    {
//        this.controller.onUpdate();
//    };
//    this.rootNode.schedule(this.rootNode.onUpdate);

    if (sys.platform == 'browser') {
        this.onEnter();
    }
    else {
        this.rootNode.onEnter = function () {
            this.controller.onEnter();
        };
    }

    this.rootNode.onExit = function () {
        this.controller.onExit();
    };
};

MenuLayer.prototype.onEnter = function () {
}

MenuLayer.prototype.onUpdate = function () {

}

MenuLayer.prototype.playClicked = function () {
    cc.BuilderReader.runScene ("", "MainLayer");
}

MenuLayer.prototype.onExit = function () {

}
