
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS order;
DROP TABLE IF EXISTS auth_user;
DROP TABLE IF EXISTS auth_account;
DROP TABLE IF EXISTS auth_session;
DROP TABLE IF EXISTS auth_verification_token;

CREATE TABLE customers (
    id                              INT IDENTITY (1,1) NOT NULL,
    "name"                          VARCHAR (255),
    CONSTRAINT pk_customer PRIMARY KEY NONCLUSTERED (id),
);

CREATE TABLE orders (
    id                             INT IDENTITY (1,1) NOT NULL,
    "uid"                          VARCHAR (255),
    CONSTRAINT pk_order PRIMARY KEY NONCLUSTERED (id),
);

CREATE TABLE auth_user (
    id                              INT IDENTITY (1,1) NOT NULL,
    "name"                          VARCHAR (255),
    email                           VARCHAR (255) UNIQUE NOT NULL,
    emailVerified                  TIMESTAMP,
    "role"                          VARCHAR (255),
    CONSTRAINT pk_auth_user PRIMARY KEY NONCLUSTERED (id),
);

CREATE TABLE auth_account (
    id                              INT IDENTITY (1,1) NOT NULL,
    "type"                          VARCHAR (255),
    "provider"                      VARCHAR (255),
    providerAccountId             VARCHAR (255),
    refreshToken                   VARCHAR (255),
    accessToken                    TEXT,
    expiresAt                      INT,
    extExpiresIn                  INT,
    tokenType                      VARCHAR (255),
    scope                           VARCHAR (255),
    idToken                        TEXT,
    sessionState                   VARCHAR (255),
    oauthTokenSecret              VARCHAR (255),
    oauthToken                     VARCHAR (255),
    userId                         INT NOT NULL,
    CONSTRAINT pk_auth_account PRIMARY KEY NONCLUSTERED (id),
    CONSTRAINT fk_auth_account_user FOREIGN KEY (userId)
        REFERENCES AuthUser (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE auth_session (
    id                              INT IDENTITY (1,1) NOT NULL,
    sessionToken                   TEXT,
    expires                         TIMESTAMP,
    userId                         INT NOT NULL,
    CONSTRAINT pk_auth_session PRIMARY KEY NONCLUSTERED (id),
    CONSTRAINT fk_auth_session_user FOREIGN KEY (userId)
        REFERENCES AuthUser (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


CREATE TABLE auth_verification_token (
    id                              INT IDENTITY (1,1) NOT NULL,
    "identifier"                    VARCHAR (255),
    token                           TEXT,
    expires                         TIMESTAMP,
    CONSTRAINT pk_auth_verification_token PRIMARY KEY NONCLUSTERED (id),
);