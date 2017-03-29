# coding: utf-8

Pod::Spec.new do |s|
  s.name         = "WeexActionSheet"
  s.version      = "0.0.5"
  s.summary      = "Weex Plugin"

  s.description  = <<-DESC
                   Weexplugin Source Description
                   DESC

  s.homepage     = "https://github.com"
  s.license = {
    :type => 'Copyright',
    :text => <<-LICENSE
           Alibaba-INC copyright
    LICENSE
  }
  s.authors      = {
                     "yourname" =>""
                   }
  s.platform     = :ios
  s.ios.deployment_target = "7.0"

  s.source =  { :path => '.' }
  s.source_files  = "ios/Sources/**/*.{h,m,mm}"
  
  s.requires_arc = true
  s.dependency "WeexPlugin"
  s.dependency "WeexSDK"
end
