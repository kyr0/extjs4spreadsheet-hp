/**
 * @class Utopia
 * @extends Object
 * @singleton
 * @author Aron Homberg <info@aron-homberg.de>
 *
 * Utopia node.js main class.
 *
 * Copyright (C) 2012 Aron Homberg and Utopia contributors.
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program; if not, write to the
 * Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
 */
var Utopia = {


    /**
     * @var {String} Server version
     */
    version: '0.4.5',


    /**
     * @var {Utopia.HookManager} HookManager reference
     */
    hookManager: null,


    /**
     * Prints logo
     * @return void
     */
    printLogo: function() {

        console.log('');
        console.log('        __   __    ______     _____    _______    __      _____ CC');
        console.log('       |  | |  |  |__  __|   /  _  \\   |  |_) )  |  |    /  _  \\');
        console.log('    ===|  (_)  |====|  |====|  (_)  |==|  +--´===|  |===/  (_)  \\===');
        console.log('        \\_____/     |__|     \\_____/   |__|      |__|  /__/```\\__\\');
        console.log('            open source communication and coordination server');
        console.log('');
    },


    /**
     * Prints version info
     * @return void
     */
    printVersion: function() {

        console.log('                             version: ' + this.version);
    },


    /**
     * Loads the global config
     * @return void
     */
    loadConfig: function() {

        GLOBAL.config = {};
        GLOBAL.config.webserver = require('./config/webserver.js');
    },


    /**
     * Autoloads all required libs
     * @return void
     */
    requireLibs: function() {

        // Require globally available libraries
        GLOBAL.http = http = require('http');
        GLOBAL.nodeStatic = nodeStatic = require('node-static');
        GLOBAL.HookManager = require('./utopia/HookManager.js');
        GLOBAL.WebServer = require('./utopia/WebServer.js');
    },


    /**
     * Launch the server
     * @return void
     */
    launch: function() {

        try {

            console.log();

            Utopia.loadConfig();
            Utopia.requireLibs();

            this.printStartupMessage();

            console.log();

            this.initHookManager();
            this.initControllers();
            this.initServices();

            console.log();
            console.log('  [OK] Utopia server node startup successful!');
            console.log();

            console.log('----- Log Output -----');

        } catch (e) {

            throw e;
        }
    },


    /**
     * Prints the startup message when server gets executed
     * @return void
     */
    printStartupMessage: function() {

        this.printLogo();
        this.printVersion();

        console.log();

        console.log('Utopia server node is starting up...');
        console.log('Thank you for running Utopia!');
    },


    /**
     * Creates the async inter-process broadcast hook used to interact with incoming
     * @return void
     */
    initHookManager: function() {

        console.log('  * Registering system-wide async eventing...');

        // Initialize the EventObserver for node events
        this.hookManager = GLOBAL.HookManager.init();
    },


    /**
     * Initializes the application logic controllers
     * @private
     * @return void
     */
    initControllers: function() {
    },


    /**
     * Create the express based web server for UI serving
     * @private
     * @return void
     */
    initServices: function() {

        console.log('  * Starting services...');

        var me = this;

        // Initialize the NodeService web service
        GLOBAL.WebServer.init(this.hookManager, function(httpServer) {
        });
    }
};

// Start the server
Utopia.launch();