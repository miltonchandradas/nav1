sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "com/sap/nav1/model/models"
], function(UIComponent, Device, models) {
  "use strict";

  return UIComponent.extend("com.sap.nav1.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");

      let oComponentData = this.getComponentData();
      this._fromApp2 = false;

			if (oComponentData) {
				let startupParams = oComponentData.startupParameters;
				if (oComponentData && startupParams) {
					for (let [key, value] of Object.entries(startupParams)) {
						if (key === "fromApp2") {
							let [fromApp2] = value;
							me.fromApp2 = fromApp2 === true || fromApp2 === "true" ? true : false;
						}
					}
				}
			}
    },

    getFromApp2: function () {
			return this._fromApp2;
    }

  });
});
