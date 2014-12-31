module Overrides
  require 'net/http'
  class RegistrationsController < DeviseTokenAuth::RegistrationsController
    def create
      if not params['recaptachaResponse'].nil? and validateRecaptcha params['recaptachaResponse']
        super
      else
        return render json: {
          status: 'error',
          data:   params,
          errors: ["recaptacha error"]
        }, status: 403
      end
    end
    def validateRecaptcha(response)
      verify_hash = {
        "secret"    => '6LfM2P8SAAAAAGrpRopAHe-R_Y5XFyjqEKdCWYQt',

        "response"  => response
      }

      result = Net::HTTP.get(URI.parse('https://www.google.com/recaptcha/api/siteverify' + '?' + verify_hash.to_query))
      logger.debug(verify_hash)
      logger.debug(result)
      answer, error = JSON.parse(result).values
      answer.to_s == 'true'
    end
  end
end