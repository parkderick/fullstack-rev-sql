use mock;

create table users (
  id int auto_increment not null primary key,
  username varchar(255),
  password varchar(255)
)