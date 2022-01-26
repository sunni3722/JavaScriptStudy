# MySQL


## Table Creation
### Part 1 : Case-sensitivity(대소문자 구분)
- lower_case_table_names
  - 0 : 대소문자 구분.
  - 1 : 대소문자 구분 안함. 모두 소문자로 저장.
  - 2 : 대소문자 구분 안함. 대소문자 구분해서 저장.

### Part 2 : Table 조건
- UN : Unsigned. 0, 양수.
- NN : Not NULL.
- AI : Auto Increment.
- PK : Primary Key.
- ZF : Zero Fill.

### Part 3
- ZF : Zero Fill.

### Part 4 : Table 생성
![image](https://user-images.githubusercontent.com/76764643/150309497-e211b03f-8b5d-4e63-adfb-06721ca9a254.png)

![image](https://user-images.githubusercontent.com/76764643/150309603-6c753077-fa42-4448-ad86-588dca9867b5.png)

### Part 5 : Qeury SELECT/INSERT
#### Selection
```mysql
select * from first_database.building_temperature;
```

#### Insertion
![image](https://user-images.githubusercontent.com/76764643/150310711-9de4ad53-b782-48b6-8644-dba850473161.png)

![image](https://user-images.githubusercontent.com/76764643/150310882-8ac5f936-72a2-4e6c-b507-5cf91c450035.png)

```mysql
insert into building_temperature(building_id, temperature, reg_date)
values (1, 10, '2021-12-06 13:00:00');

insert into building_temperature(building_id, temperature, reg_date)
values (1, 12, '2021-12-06 14:00:00');

select * from building_temperature;
```

### Part 6 
#### 실행
- Ctrl-Enter : place cursor on the query.
- Ctrl-Shift-Enter : select region.
- ⚡(번개모양) 버튼 : From top to bottom.

#### Comments
```mysql
-- 테이블 내용을 보여주는 명령어
select * from building_temperature;

/*
새로운 데이터 입력
*/
insert into building_temperature(building_id, temperature, reg_date)
values (8, 15, '2021-12-06 13:00:00');
```

#### Multiple Data Insertion
```mysql
-- 다중 데이터 동시입력
insert into building_temperature(building_id, temperature, reg_date)
values (9, 15, '2021-12-06 13:00:00'), (3, 15, '2021-12-06 13:00:00');

-- limit : 보여지는 row 수 제한
select * from building_temperature limit 3;
```


## Select with column names
### Part 1
```mysql
/*
  select with column names
    pin tab
    names with backtick(`)
*/
select `building_id`, `temperature` from `building_temperature`;
select `reg_date`, building_id, temperature, `rid` from building_temperature;
```

### Part 2
```mysql
/*
  sort by column names
    order by
    asc default
    desc
    order by with limit
    order by multiple columns
*/
select * from building_temperature order by `building_id`;
select * from building_temperature order by `reg_date` desc limit 1;
select * from building_temperature order by `building_id` asc, `rid` desc, `temperature` asc;
select * from building_temperature order by `reg_date` desc, `building_id` asc;
```

### Part 3
```mysql
/*
  where clause -- condition
    comparsion operators : >, <, >=, <=, =, !=
    logical operators : and, or
    in operator
*/
select * from building_temperature where `reg_date` >= '2021-12-06 13:30:00';
select building_id from building_temperature where `reg_date` < '2021-12-06 13:30:00' order by `building_id` desc;

select * from building_temperature where `reg_date` != '2021-12-06 13:00:00' or `building_id` = 1;

select * from building_temperature where `building_id` = 1 or `building_id` = 8 or `building_id` = 9;
select * from building_temperature where `building_id` != 3;
select * from building_temperature where `building_id` in (1, 8, 9);

select * from building_temperature where (`reg_date` < '2021-12-06 13:30:00' and `temperature` > 9)
or (`building_id` = 1 and `temperature` < 20.0);
```


## Subquery
### Part 1
```mysql
/*
  select
  from
  where
  group by
  having
  order by
*/

/* subquery */
select * from building_temperature where `temperature` >= 15; -- building 9 온도보다 높거나 같은거,,,
select * from building_temperature where `temperature` >= ( select `temperature` from building_temperature where `building_id` = 9 );

-- (OR) any, some / (AND) all
select * from building_temperature where `temperature` >= all ( select `temperature` from building_temperature where `building_id` = 1 );
select * from building_temperature where `temperature` >= any ( select `temperature` from building_temperature where `building_id` = 1 );
select * from building_temperature where `temperature` >= some ( select `temperature` from building_temperature where `building_id` = 1 );

-- 테이블 생성, subquery를 이용한 테이블 생성
create table temp_table ( select * from building_temperature where `building_id` > 1 );
select * from temp_table;
```
### Part 2
### distinct
```mysql
-- distinct : 중복된 값은 한번만
select building_id from building_temperature;
select distinct building_id from building_temperature;
```

### aggregate function
```mysql
-- aggregate function
-- avg
select avg(`temperature`), max(`temperature`), min(`temperature`) from building_temperature;
select stddev(`temperature`) as '온도 표준편차', var_samp(`temperature`) as '온도 분산' from building_temperature;

select count(*) from building_temperature;
select count(distinct building_id) from building_temperature;

-- 빌딩 1의 평균온도보다 같거나 높았던 빌딩들을 모두 출력.
select * from building_temperature 
where `temperature` >= ( select avg(`temperature`) from building_temperature where `building_id` = 1 )
and `building_id` <> 1;
```


## Grp by / Having / Rollup
### grp by
```mysql
-- insert into building_temperature values (6, 8, 18.0, '2021-12-22 14:00:00');
-- insert into building_temperature values (7, 9, 4.0, '2021-12-22 14:00:00');
-- insert into building_temperature values (8, 3, 7.0, '2021-12-22 14:00:00');

-- group by

-- 빌딩별로 평균온도를 출력.
select building_id, avg(temperature) from building_temperature group by `building_id`;
```

### having
```mysql
-- having : aggregate function이 들어간 조건...
-- where에서는 aggregate function 사용이 어렵기 때문...

-- 평균온도가 12보다 높았던 빌딩번호 출력.
select `building_id`, avg(temperature) from building_temperature group by `building_id` having avg(temperature) > 12.0;
```

### rollup
```mysql
-- with rollup
select building_id, avg(temperature) from building_temperature group by `building_id` with rollup;
```


## Relational DB
### Create tbl
```mysql
-- building_info table creation
use first_database;
create table building_info
(
-- column name, column datatype
	rid int auto_increment primary key,
    building_id smallint unique,
    building_name varchar(100)
);

insert into building_info values(null, 1, '연구동');
insert into building_info values(null, 3, '기숙사');
insert into building_info values(null, 8, '식당');
insert into building_info values(null, 9, '체육관');

select * from building_info;
```

### Alter table / Insert ignore
```mysql
-- alter table
alter table `building_info` auto_increment=10;
insert into building_info values(null, 2, '수영장');

-- insert ignore : 에러가 나도 다음 명령어 실행.
insert ignore into building_info values(null, 1, '기초연구동');
insert ignore into building_info values(null, 5, '과학연구동');

select * from building_info;
```

### Update / Delete (alter table)
```mysql
/*
  update
  alter table add
  on duplicate key update
  delete
*/
update `building_info` set `building_name` = '첨단연구동' where `building_id` = 1;

alter table `building_info`
add max_capacity smallint unsigned;

update `building_info` set `max_capacity` = 200;

update `building_info` set `max_capacity` = `max_capacity` * 2 where `building_name` = '식당';

insert into building_info values(null, 1, '자연연구동', 200)
on duplicate key update `building_name` = '자연연구동';

delete from `building_info`; -- 치명적인 명령어
delete from `building_info` where `max_capacity` > 200;

select * from building_info;
```

### Join
#### building_humidity
```mysql
-- building_humidity table creation
use first_database;
create table building_humidity
(
-- column name, column datatype
	rid int auto_increment primary key,
    building_id smallint unsigned,
    humidity float,
    reg_date timestamp
);

insert into building_humidity values(null, 3, 65, '2021-12-06 13:00:00');
insert into building_humidity values(null, 1, 60, '2021-12-06 13:00:00');

select * from building_humidity;
```

#### join
```mysql
select * from building_info;
select * from building_temperature;
select * from building_humidity;

select *
from building_info join building_temperature on building_info.building_id = building_temperature.building_id;

select building_info.building_name, building_temperature.temperature, building_temperature.reg_date
from building_info join building_temperature on building_info.building_id = building_temperature.building_id;

select a.building_name, b.temperature, b.reg_date
from building_info a join building_temperature b on a.building_id = b.building_id;
```

### Left join
#### building_info
![image](https://user-images.githubusercontent.com/76764643/151203852-1f631697-83cb-4736-9a72-d01fc2cac31d.png)

#### left join
```mysql
-- left join : 왼쪽 테이블의 값은 짝이 없어도 유지
select *
from building_info a left join building_temperature b on a.building_id = b.building_id;
select a.building_name, b.humidity, b.reg_date
from building_info a left join building_humidity b on a.building_id = b.building_id;

-- right join : 오른쪽 테이블의 값은 짝이 없어도 유지
select *
from building_temperature a right join building_info b on a.building_id = b.building_id;
```

### Join three tbls on multiple
```mysql
select *
from building_info a 
  join building_temperature b on a.building_id = b.building_id
  join building_humidity c on a.building_id = c.building_id;
  
select a.building_name, b.temperature, c.humidity, c.reg_date
from building_info a 
  join building_temperature b on a.building_id = b.building_id
  join building_humidity c on a.building_id = c.building_id and b.reg_date = c.reg_date;
```
