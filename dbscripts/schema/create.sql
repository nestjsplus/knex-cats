begin transaction;

drop table if exists cats;
create table cats (
  id serial primary key,
  name text,
  age int,
  breed text
);

drop table if exists people;
create table people (
  id serial primary key,
  name text
);

drop table if exists cats_people;
create table cats_people (
  id serial primary key,
  cat_id int,
  people_id int
);

insert into cats(name, age, breed) values
('garfield', 5, 'tabby'),
('felix', 10, 'tuxedo'),
('lolcat', 8, 'netcat');

insert into people(name) values
('Jon'),
('Chris'),
('Fred'),
('Mary');

insert into cats_people(cat_id, people_id)
select c.id, p.id from cats c, people p where c.name='garfield' and p.name='Jon';

insert into cats_people(cat_id, people_id)
select c.id, p.id from cats c, people p where c.name='felix' and p.name='Chris';

insert into cats_people(cat_id, people_id)
select c.id, p.id from cats c, people p where c.name='felix' and p.name='Fred';

insert into cats_people(cat_id, people_id)
select c.id, p.id from cats c, people p where c.name='lolcat' and p.name='Mary';

CREATE OR REPLACE FUNCTION uppercase_name(
  i_name text,
  OUT id int,
  OUT name text,
  OUT age int,
  OUT breed text)

LANGUAGE plpgsql
AS $$

DECLARE
  new_cat record;

BEGIN
  UPDATE cats
  SET name = INITCAP(cats.name)
  WHERE cats.name = i_name
  RETURNING cats.id, cats.name, cats.age, cats.breed into id, name, age, breed;
END;
$$;

commit;