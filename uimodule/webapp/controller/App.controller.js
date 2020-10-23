sap.ui.define([
  "com/sap/nav1/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.sap.nav1.controller.App", {

    onInit: function () {

      // Setting the view model for busy indicators
			var viewModel = new JSONModel({
				fromApp2: false
			});

			// Store the models
			this.setModel(viewModel, "viewModel");
      this._viewModel = this.getModel("viewModel");

      this._viewModel.setProperty("/fromApp2", this.getOwnerComponent().getFromApp2());

    },

    onNav: function () {
      let oCrossAppNav = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService("CrossApplicationNavigation");
			let href_display = (oCrossAppNav && oCrossAppNav.toExternal({
				target: {
					semanticObject: "app1",
					action: "maintain"
				},
				params: {
					"fromApp1": true
				}
			}, oComponent)) || "";
    }
  });
});
