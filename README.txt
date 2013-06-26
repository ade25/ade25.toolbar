Introduction
============


This package provides a "plone.app.toolbar" inspired tollbar, that moves the
Plone CMS Editbar into a dedicated navbar/toolbar viewlet displayed on top
of the page.

Details
=======


Install "vsc.toolbar" into the site and get 2 new features

CMS View
--------

Use http://example.tld/@@cms as the default login URL of the site. This works
around the redirection problem when the Plone login form is used as a standalone
page and not insode an overlay, as implemented by the Plone default
"sunburst" theme.


Toolbar
-------

After authenticating with the portal a custom toolbar viewlet is available
that provides a toolbar.

Note:

To get the full toolbar functionality you must provide the following details: 
