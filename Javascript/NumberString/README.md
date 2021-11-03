# 숫자와 문자
프로그래밍 입문자에게 가장 익숙한 데이터 형(data type)은 숫자와 문자일 것이다. 이번 시간에는 실제로 가장 많이 사용되는 데이터 형인 문자와 숫자를 프로그래밍에서는 어떻게 표현하고 연산하는지 알아보자.

## 숫자
자바스크립트에서는 큰따옴표나 작은따옴표가 붙지 않은 숫자는 숫자로 인식한다.

```javascript
alert(1+1);
```

```javascript
alert(1.2 + 1.3);
```

곱하기를 할 때는 * (에스터리스크, Asterisk, 키보드 자판 상으로 숫자 8 위)를 사용한다.

```javascript
alert(2 * 5);
```

나누기를 할 때는 / (슬래쉬, slash, 키보드 자판 상으로 오른쪽 shift 키 왼쪽)를 사용한다.

```javascript
alert(6 / 2)
```

자바스크립트에서는 사칙연산 보다 좀 더 복잡한 연산도 지원한다. 좀 더 자세한 내용은 자바스크립트 사전을 참고한다.

```javascript
Math.pow(3,2);       // 9,   3의 2승 
Math.round(10.6);    // 11,  10.6을 반올림
Math.ceil(10.2);     // 11,  10.2를 올림
Math.floor(10.6);    // 10,  10.6을 내림
Math.sqrt(9);        // 3,   3의 제곱근
Math.random();       // 0부터 1.0 사이의 랜덤한 숫자
```

## 문자
문자는 "(큰 따옴표) 혹은 '(작은 따옴표) 중의 하나로 감싸야 한다. 큰 따옴표로 시작하면 큰 따옴표로 끝나야하고, 작은 따옴표로 시작하면 작은 따옴표로 끝나야 한다. String이라고 한다.

```javascript
alert("coding everybody");
```

```javascript
alert('coding everybody');
```

숫자를 따옴표로 감싸면 문자가 된다. 아래는 문자다. typeof는 값의 데이터 형을 알려주는 기능이다.

```javascript
alert(typeof "1")
```

아래와 같이 따옴표 없는 숫자는 number가 출력된다.

```javascript
alert(typeof 1)
```

만약 문자열 안에 작은 따옴표나 큰따옴표를 넣고 싶다면 어떻게 해야할까? 아래와 같이 코드를 변경하면 작은따옴표를 문자열 안에 포함시킬 수 있다.

```javascript
alert('egoing\'s javascript')
```

\를 ' 앞에 위치시키면 ' 를 문자열의 시작과 끝을 구분하는 구분자가 아니라 단순히 문자로 해석하도록 강제 할 수 있다. 이러한 기법을 이스케이프(escape)라고 한다.

### 여러줄의 표시
여러줄을 표시하기 위해서는 아래와 같이 한다. \n는 줄바꿈을 의미하는 특수한 문자다.

```javascript
alert("안녕하세요.\n생활코딩의 세계에 오신 것을 환영합니다");
```

## 문자연산
문자와 문자를 더할 때는 아래와 같이 한다.

```javascript
alert("coding"+" everybody");
```

문자의 길이를 구할 때는 문자 뒤에 .length를 붙인다.

```javascript
alert("coding everybody".length)
```

그 외에 문자를 이용한 작업 방법은 자바스크립트 사전을 참고한다.