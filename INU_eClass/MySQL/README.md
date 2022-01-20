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
SELECT * FROM first_database.building_temperature;
```

#### Insertion
![image](https://user-images.githubusercontent.com/76764643/150310711-9de4ad53-b782-48b6-8644-dba850473161.png)

![image](https://user-images.githubusercontent.com/76764643/150310882-8ac5f936-72a2-4e6c-b507-5cf91c450035.png)

```mysql
INSERT INTO building_temperature(building_id, temperature, reg_date)
VALUES (1, 10, '2021-12-06 13:00:00');

INSERT INTO building_temperature(building_id, temperature, reg_date)
VALUES (1, 12, '2021-12-06 14:00:00');

SELECT * FROM building_temperature;
```

### Part 6 
#### 실행
- Ctrl-Enter : place cursor on the query.
- Ctrl-Shift-Enter : select region.
- ⚡(번개모양) 버튼 : From top to bottom.

#### Comments
```mysql
-- 테이블 내용을 보여주는 명령어
SELECT * FROM building_temperature;

/*
새로운 데이터 입력
*/
INSERT INTO building_temperature(building_id, temperature, reg_date)
VALUES (8, 15, '2021-12-06 13:00:00');
```

#### Multiple Data Insertion
```mysql
-- 다중 데이터 동시입력
INSERT INTO building_temperature(building_id, temperature, reg_date)
VALUES (9, 15, '2021-12-06 13:00:00'), (3, 15, '2021-12-06 13:00:00');

-- limit : 보여지는 row 수 제한
SELECT * FROM building_temperature limit 3;
```


## Select with column names
### Part 1
```mysql
/*
  select with column names
    pin tab
    names with backtick(`)
*/
SELECT `building_id`, `temperature` FROM `building_temperature`;
SELECT `reg_date`, building_id, temperature, `rid` FROM building_temperature;
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
SELECT * FROM building_temperature order by `building_id`;
SELECT * FROM building_temperature order by `reg_date` desc limit 1;
SELECT * FROM building_temperature order by `building_id` asc, `rid` desc, `temperature` asc;
SELECT * FROM building_temperature order by `reg_date` desc, `building_id` asc;
```

### Part 3
```mysql
/*
  where clause -- condition
    comparsion operators : >, <, >=, <=, =, !=
    logical operators : and, or
    in operator
*/
SELECT * FROM building_temperature WHERE `reg_date` >= '2021-12-06 13:30:00';
SELECT building_id FROM building_temperature WHERE `reg_date` < '2021-12-06 13:30:00' order by `building_id` desc;

SELECT * FROM building_temperature WHERE `reg_date` != '2021-12-06 13:00:00' or `building_id` = 1;

SELECT * FROM building_temperature WHERE `building_id` = 1 or `building_id` = 8 or `building_id` = 9;
SELECT * FROM building_temperature WHERE `building_id` != 3;
SELECT * FROM building_temperature WHERE `building_id` in (1, 8, 9);

SELECT * FROM building_temperature WHERE (`reg_date` < '2021-12-06 13:30:00' and `temperature` > 9)
or (`building_id` = 1 and `temperature` < 20.0);
```
