class User < ApplicationRecord

        validates :username, :password_digest, :session_token, presence: true
        validates :password, length: { minimum: 6, allow_nil: true }

        attr_reader :password
        after_initialize :ensure_session_token

        has_many :links
        has_many :comments

        def self.find_by_credentials(username, password)
            user = User.find_by(username: username)
            user && user.is_password?(password) ? user : nil
        end

        def is_password?(password)
            BCrypt::Password.new(password_digest).is_password?(password)
        end

        def password=(password)
            @password = password
            self.password_digest = BCrypt::Password.create(password)
        end

        def reset_session_token
            self.session_token = SecureRandom.urlsafe_base64(16)
            self.save
            self.session_token
        end

        def ensure_session_token
            self.session_token ||= SecureRandom.urlsafe_base64(16)
        end

end

# 8.25min with no notes and only 2 bugs - session[:session_token] :( and forgot has_manys
# 5.25min no notes no bugs
# 4.8min no notes no bugs in order --- FORGOT RESET_SESSION_TOKEN = 3 LINES!!!
# 5.4min after break no bugs in order
# 4.9min no bugs in order - talked trough process




# model generation practice

    # rails g model users username:index password_digest session_token:index
        # null: false
        # add_index :users, :username, unique: true

    # rails g model links title:index url user_id:integer:index
        # null: false

    # rails g model comments body user_id:integer:index link_id:integer:index
        # null: false

# ~2min short-version no mistakes
# ~2.5min long no mistakes
# ~2.15min long no mistakes