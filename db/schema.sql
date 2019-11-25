use mock;

create table products (
  id int auto_increment not null primary key,
  item varchar(255),
  min_cost float,
  curr_bid float,
  ends_in integer,
  image varchar(255)
);

