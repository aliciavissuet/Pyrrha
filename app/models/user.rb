class User < ApplicationRecord
    validates :username, :email, :session_token, :password_digest, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    
    has_many :stations
    has_many :track_follows
    has_many :tracks, through: :track_follows
    has_many :album_follows
    has_many :albums, through: :album_follows
    has_many :artist_follows
    has_many :artists, through: :artist_follows
    has_many :playlists

    attr_reader :password
    after_initialize :ensure_session_token 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token! 
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token 
    end
end
