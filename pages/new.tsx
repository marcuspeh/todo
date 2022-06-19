import NavbarLayout from "../components/atoms/navbarLayout";
import NewTodo from "../components/editTodo/newTodo";

export default function newTodo(props: any) {
    return (
        <NavbarLayout reactElement={<NewTodo />} title={"Create new todo"} />
    )
}