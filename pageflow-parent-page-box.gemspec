# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = 'pageflow-parent-page-box'
  spec.version       = '0.1.0.alpha'
  spec.authors       = ['Codevise Solutions Ltd.']
  spec.email         = ['info@codevise.de']
  spec.summary       = 'Pageflow navigation widget to leave current storyline.'
  spec.homepage      = 'https://github.com/codevise/pageflow-parent-page-box'
  spec.license       = 'MIT'

  spec.files         = `git ls-files`.split($/)
  spec.test_files    = spec.files.grep(%r{^spec/})
  spec.require_paths = ['lib']

  spec.add_runtime_dependency 'pageflow', '~> 0.10.pre'
  spec.add_runtime_dependency 'pageflow-react'

  spec.add_development_dependency 'bundler'
  spec.add_development_dependency 'rake'
end
