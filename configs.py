from pydantic import BaseSettings


class Settings(BaseSettings):
    DEBUG: bool = False
    WS_DEBUG: bool = False  # Debug websocket
    SENTRY_DSN: str = ""

    SQLALCHEMY_DATABASE_URL: str = ""
    DB_ECHO: bool = False

    REDIS_URL: str = ""
    REDIS_DB: int = 0
    CACHE_REDIS_DB: int = 14

    S3_BUCKET: str = ""
    PROJECT_SIZE_LIMIT: int = 536_870_912  # 512MB in bytes

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
