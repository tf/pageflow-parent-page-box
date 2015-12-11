module Pageflow
  module ParentPageBox
    class Engine < Rails::Engine
      isolate_namespace Pageflow::ParentPageBox

      config.autoload_paths << File.join(config.root, 'lib')
    end
  end
end
