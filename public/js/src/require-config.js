/**
 * The common require.js configuration file, to be loaded in the main-xxxx files.
 */

require.config( {
    baseUrl: "/js/src/module",
    paths: {
        "require-config": "../require-config",
        "core-lib": "../../../lib/enketo-core/lib",
        "enketo-js": "../../../lib/enketo-core/src/js",
        "enketo-widget": "../../../lib/enketo-core/src/widget",
        "enketo-config": "../../../client-config.json",
        "text": "../../../lib/enketo-core/lib/text/text",
        "xpath": "../../../lib/enketo-core/lib/xpath/build/xpathjs_javarosa",
        "jquery.xpath": "../../../lib/enketo-core/lib/jquery-xpath/jquery.xpath",
        "Modernizr": "../../../lib/enketo-core/lib/Modernizr",
        "bootstrap-slider": "../../../lib/enketo-core/lib/bootstrap-slider/js/bootstrap-slider",
        "jquery": "../../../lib/bower-components/jquery/dist/jquery",
        "jquery.touchswipe": "../../../lib/enketo-core/lib/jquery-touchswipe/jquery.touchSwipe",
        "leaflet": "../../../lib/enketo-core/lib/leaflet/leaflet",
        "file-manager": "../../../lib/enketo-core/src/js/file-manager",
        "foundation.core": "../../../lib/martijnr-foundation/js/foundation/foundation",
        "foundation.reveal": "../../../lib/martijnr-foundation/js/foundation/foundation.reveal",
        "q": "../../../lib/bower-components/q/q"
    },
    shim: {
        "xpath": {
            exports: "XPathJS"
        },
        'foundation.core': {
            deps: [
                'jquery',
                'Modernizr'
            ],
            exports: 'Foundation'
        },
        'foundation.reveal': {
            deps: [
                'foundation.core'
            ]
        },
        "enketo-widget/date/bootstrap3-datepicker/js/bootstrap-datepicker": {
            deps: [ "jquery" ],
            exports: "jQuery.fn.datepicker"
        },
        "enketo-widget/time/bootstrap3-timepicker/js/bootstrap-timepicker": {
            deps: [ "jquery" ],
            exports: "jQuery.fn.timepicker"
        },
        "Modernizr": {
            exports: "Modernizr"
        },
        "leaflet": {
            exports: "L"
        }
    }
} );

define( 'store', function() {
    "use strict";
    return undefined;
} );
