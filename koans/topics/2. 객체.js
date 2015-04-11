module('객체');

test('변수 선언하기', function () {
    var foo;

    equal(__, foo, '변수 foo 값은 무엇일까요?');
});

test('값 할당하기', function () {
    var foo = 1;

    equal(__, foo, '변수 foo 값은 무엇일까요?');
});

test('오브젝트 만들기', function () {
    var 디자이너;

    ok(디자이너, '오브젝트를 만들어 보세요.');
    equal(디자이너.머리, '머리', '디자이너의 머리를 만들어 보세요.');
    equal(디자이너.몸통, '몸통', '디자이너의 몸통를 만들어 보세요.');
    equal(디자이너.왼팔, '왼팔', '디자이너의 왼팔를 만들어 보세요.');
    equal(디자이너.오른팔, '오른팔', '디자이너의 오른팔를 만들어 보세요.');
    equal(디자이너.왼다리, '왼다리', '디자이너의 왼다리를 만들어 보세요.');
    equal(디자이너.오른다리, '오른다리', '디자이너의 오른다리를 만들어 보세요.');

    // 아래는 생각해보는 문제입니다. 이해가 되면은 true 또는 이해했어요 값으로 바꿔주세요.
    ok(모르겠어요, '여기서는 이해를 돕기 위해 변수명을 한글로 했지만 실제로 코딩할 때는 영어가 권장됩니다. 왜 그럴까요?');
});

test('타입 알아내기', function () {
    equal(__, typeof true, 'true 값의 타입은 무엇일까요?');
    equal(__, typeof false, 'false 값의 타입은 무엇일까요?');
    equal(__, '코딩하는 디자이너', '문자열 값의 타입은 무엇일까요?');
    equal(__, typeof {}, '오브젝트의 타입은 무엇일까요?');

    // 아래는 생각해보는 문제입니다. 이해가 되면은 true 또는 이해했어요 값으로 바꿔주세요.
    ok(모르겠어요, '타입을 알아내는 기능이 존재하는 이유는 무엇일까요?')
});