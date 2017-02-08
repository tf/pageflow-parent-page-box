# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'pageflow/parent_page_box/version'

Gem::Specification.new do |spec|
  spec.name          = 'pageflow-parent-page-box'
  spec.version       = Pageflow::ParentPageBox::VERSION
  spec.authors       = ['Codevise Solutions Ltd.']
  spec.email         = ['info@codevise.de']
  spec.summary       = 'Pageflow navigation widget to leave current storyline.'
  spec.homepage      = 'https://github.com/codevise/pageflow-parent-page-box'
  spec.license       = 'MIT'

  spec.files         = `git ls-files`.split($/)
  spec.test_files    = spec.files.grep(%r{^spec/})
  spec.require_paths = ['lib']

  spec.add_runtime_dependency 'pageflow', '~> 0.12.pre'
  spec.add_runtime_dependency 'pageflow-public-i18n', '~> 1.1'

  spec.add_development_dependency 'bundler'
  spec.add_development_dependency 'rake'

  # Semantic versioning rake tasks
  spec.add_development_dependency 'semmy', '~> 0.2'
end
