// TODO ФУНКЦИЯ СЛОЖЕНИЯ
// TODO ФУНКЦИЯ ВЫЧИТАНИЯ
// TODO ФУНКЦИЯ УМНОЖЕНИЯ
// TODO ФУНКЦИЯ ДЕЛЕНИЯ
// TODO ФУНКЦИЯ КОТОРАЯ ПРИНИМАЕТ ЗАГОЛОВОК И ВЫВОДИТ ЕГО
// TODO ФУНКЦИЯ КОТОРАЯ ПРИНИМАЕТ ТЕКСТ И ВЫВОДИТ ЕГО
// TODO ФУНКЦИЯ КОТОРАЯ ПРИНИМАЕТ ДОЧЕРНИЕ ЭЛЕМЕНТЫ И ВЫВОДИТ ЕГО, в качесте параметра использовать слово {children}
// TODO ФУНКЦИЯ КОТОРАЯ ПРИНИМАЕТ МАССИВ СТРОК И ПОКАЗЫВАЕТ ЕГО ["",""]

// TODO СОздать компонент Calculate, которая будет принимать в себя 2 числа a, b и арифметический знак и в зависимости от знака выводить результат, это делается с помощью if else

// console.log("SUM 2 *********", Sum2({ a: 10, b: 20 }));
// console.log("SUM 1 *********", Sum({ a: 10, b: 20 }));

// console.log(a);

// let a = 10
function Component(params) {
  return (
    <h1>
      {params.a}
      {params.b}
    </h1>
  );
}

function Title({ title }) {
  return <h1>{title}</h1>;
}

function Text({ text }) {
  return <p>{text}</p>;
}

const Box = ({ children }) => {
  // если children существует
  if (children) {
    return <div>{children}</div>;
  } else {
    return <h2>Нет дочерних элементов</h2>;
  }
};

// FUNCTION EXPRESSION
const Sum = ({ a, b }) => {
  return <h1>a + b = {a + b}</h1>;
};

// FUNCTION DECLARATION
function Sum2({ a, b }) {
  return <h1>a + b = {a + b}</h1>;
}

function Minus({ a, b }) {
  return <h1> a - b = {a - b}</h1>;
}

const Multiply = ({ a, b }) => {
  return <h1> a * b = {a * b}</h1>;
};

const Divided = ({ a, b }) => {
  return <h1> a / b = {a / b} </h1>;
};

export { Sum, Sum2, Minus, Multiply, Divided, Title, Text, Box, Component };
