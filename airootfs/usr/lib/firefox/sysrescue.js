// SystemRescue settings
//
// Ensure preference can't be changed by users
lockPref("app.update.auto", false);
lockPref("app.update.enabled", false);
lockPref("intl.locale.matchOS", true);
// Allow user to change based on needs
defaultPref("browser.display.use_system_colors", true);
defaultPref("spellchecker.dictionary_path", "/usr/share/myspell");
defaultPref("browser.shell.checkDefaultBrowser", false);
// Preferences that should be reset every session
pref("browser.EULA.override", true);
pref("browser.startup.homepage_override.mstone", "ignore");
//pref("browser.startup.homepage", "about:home");
// disable Firefox telemetry and surveys, don't annoy the user with it
pref("app.shield.optoutstudies.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
// don't ever use DNS-over-HTTPS, we always want use the local resolver
// this is necessary for being able to resolve local hostnames e.g. in a split dns setup
// 5 means "off by choice"
pref("network.trr.mode", 5);

// Czo settings for firefox 95.0.2
//
// homepage
defaultPref("browser.startup.homepage", "http://www.system-rescue.org/");
//defaultPref("browser.startup.homepage", "http://czo.free.fr/");
// bookmarks
defaultPref("browser.toolbars.bookmarks.visibility", "never");
// strict contentblocking
pref("browser.contentblocking.category", "strict");
// cookie and history lost on close
pref("network.cookie.lifetimePolicy", 2);
pref("privacy.history.custom", true);
pref("privacy.sanitize.sanitizeOnShutdown", true);
// DuckDuckGo search (doesn't work...)
//pref("browser.urlbar.placeholderName", "DuckDuckGo");
// no title
pref("browser.tabs.drawInTitlebar", true);
pref("browser.tabs.inTitlebar", 1);
// url bar room + home
pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[\"fxa-toolbar-menu-button\",\"save-to-pocket-button\",\"ublock0_raymondhill_net-browser-action\"],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"home-button\",\"urlbar-container\",\"downloads-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"import-button\",\"personal-bookmarks\"]},\"seen\":[\"save-to-pocket-button\",\"ublock0_raymondhill_net-browser-action\",\"developer-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"PersonalToolbar\",\"widget-overflow-fixed-list\"],\"currentVersion\":17,\"newElementCount\":3}");

