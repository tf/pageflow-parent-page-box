# Pageflow Parent Page Box

[![Gem Version](https://badge.fury.io/rb/pageflow-parent-page-box.svg)](http://badge.fury.io/rb/pageflow-parent-page-box)

A navigation widget to exit the current storyline and return to the
parent page.

## Installation

Add this line to your application's `Gemfile`:

    gem 'pageflow-parent-page-box'

Register the plugin inside the configure block in `config/initializers/pageflow.rb`

    Pageflow.configure do |config|
      config.plugin(Pageflow::ParentPageBox.plugin)
    end

Include javascripts and stylesheets:

    # app/assets/javascripts/components.js
    //= require pageflow/parent_page_box/components

    # app/assets/javascripts/pageflow/application.js
    //= require pageflow/parent_page_box

    # app/assets/stylesheets/pageflow/themes/default.scss
    @import "pageflow/parent_page_box/themes/default";

Execute `bundle install` Restart the application server.

## Troubleshooting

If you run into problems while installing the page type, please also refer to the
[Troubleshooting](https://github.com/codevise/pageflow/wiki/Troubleshooting) wiki
page in the [Pageflow  repository](https://github.com/codevise/pageflow). If that
doesn't help, consider
[filing an issue](https://github.com/codevise/pageflow-parent-page-box/issues).

## Contributing Locales

This project uses locales from the
[pageflow-public-i18n](http://www.localeapp.com/projects/public?search=tf/pageflow-public-i18n)
locale project.
