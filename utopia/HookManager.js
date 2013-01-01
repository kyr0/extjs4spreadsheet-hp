var Hook = require('tinyhook').Hook;

/**
 * @class Utopia.HookManager
 * @singleton
 * @extends Object
 * @author Aron Homberg <info@aron-homberg.de>
 *
 * Event observer (system-wide async IO) using hook.io.
 */
var HookManager = {


    /**
     * @var {Object} Event observer hook
     */
    eventHook: null,


    /**
     * Initialize the global async hook
     * @return {Utopia.HookManager}
     */
    init: function() {

        // Register global node event hook
        this.eventHook = new Hook({
            name: 'Utopia'
        });

        // Start hooking
        this.eventHook.start();

        console.log('  [OK] ...async hook eventing initialized.');

        // Return the hook reference
        return this;
    },


    /**
     * Returns the event hook instance
     * @return {Object}
     */
    getHook: function() {
        return this.eventHook;
    }
};
module.exports = HookManager;