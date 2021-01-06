// action 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성함수 선언
// todo 데이터에서 사용 할 고유 id
let nextId = 1;
export const addTodo = text => (
    {
        type: ADD_TODO,
        todo: {
            // 새 항목을 추가하고 nextId값에 1을 더해 줍니다.
            id: nextId++,
            text            
        }
    }
);

export const toggleTodo = id => (
    {
        type: TOGGLE_TODO,
        id
    }
)

// 초기 상태 선언
// 리듀서의 초기 상태는 꼭 객체타입일 필요가 없습니다.
// 배열이여도 되고, 원시 타입(숫자, 문자열, 불리언 이여도 상관 없습니다.)
const initialState = [
    // 우리는 다음과 같이 구성된 객체를 이 배열 안에 넣을 것입니다.
    /*
    {
        id: 1,
        text: 'example',
        done: false
    }
    */    
]

/* 리듀서 선언 */
export default function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(todo => 
                todo.id === action.id
                ? {...todo, done: !todo.done}
                : todo
            );
        default:
            return state;
    }
}