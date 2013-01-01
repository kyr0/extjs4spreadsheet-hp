/**
 * @class Utopia.WebServer
 * @singleton
 * @extends Object
 * @author Aron Homberg <info@aron-homberg.de>
 *
 * WebServer for web UI serving.
 */
var WebServer = {

    /**
     * @var {String} defaultRedirectUrl Default redirect URL to serve to when invalid URL was given
     */
    defaultRedirectUrl: '/en/introduction',


    /**
     * @var {Object} Connect server reference
     */
    server: null,


    /**
     * @var {Object} Express reference
     */
    express: null,


    /**
     * @var {Utopia.HookManager} hookManager Hook manager reference
     */
    hookManager: null,


    /**
     * Initialize the web server and socket service
     *
     * @param {Utopia.HookManager} hookManager HookManager reference
     * @param {Function} startupCallback Callback which gets called on server startup
     * @return {Utopia.WebServer}
     */
    init: function(hookManager, startupCallback) {

        var me = this;

        // Set local reference
        this.hookManager = hookManager;

        // Configure HTTP server instance
        this.server = GLOBAL.http.createServer(function(request, response) {

            // Very simple URL rewritting (allowing to omit .html)
            request = me.handleSimpleRewrite(request);

            // Redirect by default to e.g. /de/consulting when
            // no translation route is given
            if (me.handleDefaultRedirect(request, response) === false) {

                // If no default redirect has happened, serve static file
                me.serveStatic(request, response);
            }
        });

        // Start HTTP server listening
        var config = GLOBAL.config.webserver;

        if (config.WebServer && config.WebServer.port) {

            // Listen to configured service port
            this.server.listen(config.WebServer.port);

            // Call callback
            startupCallback(this.server);

        } else {

            console.error('No WebServer configuration found. Check your config.js!');
        }
        return this;
    },

    /**
     * Handles simple URL rewriting by
     * @param {http.ServerRequest} request
     * @return {http.ServerRequest}
     */
    handleSimpleRewrite: function(request) {

        // Allow simple rewriting
        if (request.url.indexOf('.html') === -1 &&
            !this.looksLikeStaticFile(request)) {

            request.url += '.html';
        }
        return request;
    },

    /**
     * Little hacky impl. to guess if a request
     * is a static file request (instead of html files!)
     * Used by this.handleSimpleRewrite() to NOT
     * rewrite static file requests while still
     * wildcard-rewrite any HTML-file requests
     * with missing .html ending.
     * @param {http.ServerRequest} request
     * @return {Boolean}
     */
    looksLikeStaticFile: function(request) {

        // TODO: Impl. for-loop through known static file
        // endings (mime type check e.g.)
        if (request.url.indexOf('.js') !== -1 ||
            request.url.indexOf('.css') !== -1 ||
            request.url.indexOf('.jpg') !== -1 ||
            request.url.indexOf('.png') !== -1 ||
            request.url.indexOf('.pdf') !== -1 ||
            request.url.indexOf('.zip') !== -1 ||
            request.url.indexOf('.ico') !== -1 ||
            request.url.indexOf('.gif') !== -1 ||
            request.url.indexOf('.jpeg') !== -1 ||
            request.url.indexOf('.html') !== -1 ||
            request.url.indexOf('.png') !== -1) {
            return true;
        }
        return false;
    },

    /**
     * Serves static files
     * @param {http.ServerRequest} request  Server request
     * @param {http.ServerResponse} response  Server response
     * @return void
     */
    serveStatic: function(request, response) {

        // Configure static file server
        var staticServer = new(GLOBAL.nodeStatic.Server)(__dirname + '/../web/');

        // At the end of a request, deliver the file
        request.addListener('end', function () {

            // Serve static file
            staticServer.serve(request, response, function (err, res) {

                // An error as occured
                if (err) {

                    console.error("> Error serving " + request.url + " - " + err.message);
                    response.writeHead(err.status, err.headers);
                    response.end();

                } else {

                    // The file was served successfully
                    console.log("> Serving " + request.url + " - " + res.message);
                }
            });
        });
    },

    /**
     * Redirects the browser to a default location if no /$locale URL was called
     * and if it's not a guessed static file.
     * @param {http.ServerRequest} request Server request
     * @param {http.ServerResponse} response Server response
     * @return {Boolean}
     */
    handleDefaultRedirect: function(request, response) {

        var me = this;

        // Redirect to /de/consulting
        if (request.url.indexOf('de') === -1 && request.url.indexOf('en') === -1 &&
            !this.looksLikeStaticFile(request)) {

            // Set redirect status code
            response.statusCode = 302;

            // ShortURL access: Lookup the shorturl_db and redirect
            response.setHeader('Location', me.defaultRedirectUrl);

            // End response
            response.end();

            return true;
        }
        return false;
    }
};
module.exports = WebServer;