from server.helpers.db import Base


class BaseException(Exception):
    def __init__(self, error: str):
        self.error = error


class MissingFieldException(BaseException):
    pass


class ProjectFileException(BaseException):
    pass


class ParticipantNotFoundException(BaseException):
    pass


class ProjectNotFoundException(BaseException):
    pass


class ForbiddenProjectException(BaseException):
    pass
