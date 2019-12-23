class User < ApplicationRecord

    validates :username, :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :comments
    has_many :links

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
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end

# ~9min almost no peeks needed
# ~6.5min no peeking


def random_password(max_length)
    # random_length = rand(max_length)
    # SecureRandom.urlsafe_base64(random_length)
    SecureRandom.urlsafe_base64(max_length)
end

def crack(correct_password)
    
    guessed_password = rand(10)
    guess_count = 1
    
    until correct_password == guessed_password
        guessed_password = rand(10)
        guess_count += 1
        puts guess_count
    end

    puts "Password cracked in #{guess_count} random tries."
    { guess_count: guess_count, original_password: correct_password, cracked_password: guessed_password }
end