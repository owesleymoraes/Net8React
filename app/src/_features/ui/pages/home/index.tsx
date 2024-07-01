import { useQuery } from "react-query";
import { getAll } from "../../../services/students/getStudentService";
import { StudentList } from "../../../domain/student";

export const Home = () => {
  const { data, error, isLoading } = useQuery<StudentList[], Error>(
    ["getAll", 1],
    () => getAll(1)
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="">
      <h3>Cadatro de alunos</h3>
      <header>
        <img src={""} alt="logo_cadastro" />
        <button className="button-success">Incluir novo Aluno</button>
      </header>
      <table className="">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
