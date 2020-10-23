sap.ui.define([
  "sap/ui/test/Opa5",
  "com/sap/nav1/test/integration/arrangements/Startup",
  "com/sap/nav1/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
