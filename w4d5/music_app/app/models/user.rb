class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :email, :session_token, :password, :password_digest, presence: true

    after_initialize :ensure_session_token

    attr_reader :password
      
    def generate_session_token
        token = SecureRandom::urlsafe_base64(16)
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email)

        user && user.is_password(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

end
