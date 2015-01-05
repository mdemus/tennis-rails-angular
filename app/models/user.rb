class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  before_save -> do 
	self.uid = SecureRandom.uuid 
	#to remove mail confirmation
  #skip_confirmation! 
  end
end

