Introduction
============


This package provides a "plone.app.toolbar" inspired toolbar, that moves the
Plone CMS Editbar into a dedicated navbar/toolbar viewlet displayed on top
of the page.

Details
=======


Install "ade25.toolbar" into the site and get 2 new features

CMS View
--------

Use http://example.tld/@@cms as the default login URL of the site. This works
around the redirection problem when the Plone login form is used as a standalone
page and not inside an overlay, as implemented by the Plone default
"sunburst" theme.


Toolbar
-------

After authenticating with the portal a custom viewlet is available
that provides a toolbar.

Note:

To get the full toolbar functionality you must provide the following details:

* Include 'bootstrap.js' or at least 'bootstrap-dropdowns.js' in your Diazo
theme to enable the dropdowns (this is not handled inside the toolbar package on
purpose, since it might conflict with the themes primary usecases)

* Add a rule to include the toolbar via Diazo e.g.

``` xml
<replace css:theme="#toolbar" css:content="#toolbar" />
```

* Make room for the toolbar by moving the main site down by 40px (the toolbar
height), example:
    
``` css
.app-toolbar + .app-brandbar {
    margin-top: @navbarHeight;
}
```

