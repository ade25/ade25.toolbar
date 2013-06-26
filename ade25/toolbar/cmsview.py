from five import grok

from plone.app.layout.navigation.interfaces import INavigationRoot

from ade25.toolbar.interfaces import IAde25Toolbar


class CMSView(grok.View):
    grok.context(INavigationRoot)
    grok.layer(IAde25Toolbar)
    grok.require('zope2.View')
    grok.name('cms')
