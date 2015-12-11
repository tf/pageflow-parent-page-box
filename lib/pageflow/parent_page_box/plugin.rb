module Pageflow
  module ParentPageBox
    class Plugin < Pageflow::Plugin
      def configure(config)
        config.widget_types.register(ParentPageBox.widget_type, default: true)
      end
    end
  end
end
